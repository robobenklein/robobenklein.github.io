---
layout: post
title: "Neo4j Performance adventures for petabyte-scale datasets"
date: 2021-03-04 # date of publish (sorting value)
created: 2021-03-04 # date of creation (shown value, defaults to `date`)
modified: 2021-03-04 # date last updated (shown if different than created)
categories: research
description:
tags: [utk, neo4j, database, python]
image:
  feature: 2021-03-04/neo.png
  credit: Neo4j Web UI
  creditlink: #when credit is clicked.
  background: 2021-03-04/bg.png
comments: true
share: true
published: true
---

I recently proposed a new research project idea: let's take all of GitHub (or \<insert your preferred VCS host\>) and create a multi-language (even partially language-agnostic) concrete syntax tree of all the code so that we can do some otherwise impossibly difficult further research and answer incredibly complex questions.

This project is named [World Syntax Tree](https://github.com/utk-se/WorldSyntaxTree), or WST in short.

Originally I started the project using MongoDB and storing references between nodes as `ObjectID`s, but I quickly realized that a tabular format was not performant enough to be able to effectively represent a true tree.

So instead I switched over the whole project to the first and foremost graph database I came across: Neo4j.

As I quickly learned the new database paradigm I also quickly learned that there are a lot of problems between me and inserting literally hundreds of terabytes of data into a single graph...


# The initial (reference) collector design

The very first designs used [neomodel](https://github.com/neo4j-contrib/neomodel) to control the layout and define the graph connections, and in fact [we still use neomodel](https://github.com/utk-se/WorldSyntaxTree/blob/06c58a8ce5e06e3150334e454aeee89ae4a6bbb1/wsyntree/tree_models.py) for the less performance-sensitive parts of the collection process.

After running with neomodel for a fairly long time it was obvious it was far too much overhead when I inspected the collector process with `cProfile` and [snakeviz](https://jiffyclub.github.io/snakeviz/).

Using neomodel there were more than twice as many required queries for simply inserting one syntax node (`WSTNode`), extra checks like Cardinality and multiple statements just to set properties on newly created nodes were quite slow: at best I found I could insert a few hundred nodes per second using 128 processes.

# Dropping the OGM

From just the first few google results it was clear that writing my own raw cypher queries was the next move in order to better control exactly what operations needed to happen.

{% capture images %}
  /images/2021-03-04/n1.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Profiler view: Majority of runtime stuck inside neomodel's checks" %}

The next PR that came from these efforts reworked the WSTNode creation routine into a series of functions that each did a distinct task: [create the node, connect the node, add the node text, connect the node text,](https://github.com/utk-se/WorldSyntaxTree/blob/c8d3f9f2c04f231dd93b4504b72a3f4da097edcf/wsyntree_collector/neo4j_collector_worker.py#L31-L91) etc.

This did improve compared to using neomodel, but now the major bottleneck was really waiting on the network socket.

{% capture images %}
  /images/2021-03-04/n2.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Profiler view: Reduced total runtime and approximately even split between each function call" %}

> Each of those 5 blocks corresponds to one of the 5 functions used during insertion of a WSTNode, noticing how they were all approximately the same size led me onto my next improvement...

# Combining and refactoring Queries

Once I saw how long each query took to initialize a connection and read back the results I figured I should reduce the total number of queries, which was quite easy really.

Instead of creating a node, returning the ID, running a new query to connect using that ID... just rewriting the create query to connect the new node as well meant an entire query less to execute!

So now that we [reduced the number of calls made per node by more than half](https://github.com/utk-se/WorldSyntaxTree/blob/ea9dcc968e83534318a049268ca5c674b7ae6d1c/wsyntree_collector/neo4j_collector_worker.py#L31-L107) we saw a reasonable improvement, but we're still only talking about a few hundred nodes per second even with more than a 100 workers.

# Batching multiple nodes per query

Now we're at the difficult part of the problem. Because we're inserting a collection of nodes that refer to each other, we can't iterate them all in parallel, otherwise some nodes might not have their parent node written to the database yet.

So in order to do this I needed to add another property to the WSTNode structure: `preorder`. This property was unique for nodes within a file and is calculated before we insert the WSTNode into the database, meaning we can use this property to refer to nodes before they are given a node ID by neo4j.

Once we have a way to refer to nodes uniquely within the file we can batch together large numbers of node insertions by using the super-magical `UNWIND` cypher statement. Essentially this allows us to pass a huge query parameter (like 10,000 node's worth of properties in a list) and [execute a single query to create those 10,000 nodes](https://github.com/utk-se/WorldSyntaxTree/blob/06c58a8ce5e06e3150334e454aeee89ae4a6bbb1/wsyntree_collector/neo4j_collector_worker.py#L71-L86).

# Indexes are not enough to perform efficient lookups

If any experienced Neo4j user has followed along so far, they might have already realized that the `preorder` property on my WSTNodes is not unique within the graph, so even though [we do have an index on that property](https://github.com/utk-se/WorldSyntaxTree/blob/06c58a8ce5e06e3150334e454aeee89ae4a6bbb1/wsyntree/tree_models.py#L65), when your graph grows to terabytes in size, you will have far too many nodes with the same `preorder` to efficiently search them all to find the one that has a relationship to the same `WSTFile` node we're working in.

Because of [this single extra condition inside the WHERE clause](https://github.com/utk-se/WorldSyntaxTree/blob/06c58a8ce5e06e3150334e454aeee89ae4a6bbb1/wsyntree_collector/neo4j_collector_worker.py#L75) the Neo4j database regularly would pin all 128 hardware threads of our lab server just searching through `WSTNode`s with the same `preorder` just to find the one that has a relationship to our `WSTFile`.

So instead I needed a way to refer to the nodes I just created with a constant-time lookup. I spent a whole day just thinking about how to overcome this problem, and finally ended up just accepting the fact that it would be faster to just execute two queries rather than continue banging my head against cypher syntax quirks.

And it was indeed faster:

{% capture images %}
  /images/2021-03-04/vroom.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Terminal progress view via tqdm: inserting over 100k WSTNodes per second" %}

Now that my program was blazing fast, Neo4j has trouble keeping up:

# Not my problem(s)

These are problems I encountered outside the scope of my own program.

## Too many transactions in memory

{% capture images %}
  /images/2021-03-04/oops.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Watching our 512GB of RAM get used and Neo4j gets OOM'd" %}

My initial guess for large batch sizes was around 10,000 nodes per query, however when we multiply that by 128 (processes running in parallel) and a conservative estimate for RAM usage, we're looking at trying to processes transactions in memory at multiple gigabytes per second.

The solution to this was to manually set the memory settings in `neo4j.conf`, since I have a fairly large system dedicated to research work I could steal quite a bit of memory:

```conf
# Settings from memrec had to be changed a bit vs what was recommended:
# I need at least 128G left over for my own code to run on the same system
dbms.memory.heap.initial_size=31g
dbms.memory.heap.max_size=128g
dbms.memory.pagecache.size=259500m

# It is also recommended turning out-of-memory errors into full crashes,
# instead of allowing a partially crashed database to continue running:
dbms.jvm.additional=-XX:+ExitOnOutOfMemoryError
```

## Database not up to the requested version

```
neo4j.exceptions.TransientError: {code: Neo.TransientError.Transaction.BookmarkTimeout} {message: Database 'top1k' not up to the requested version: 113071. Latest database version is 113054}
```

This is a tricky one, I still haven't fully pinned down the exact conditions for this to happen, but it boils down to the database not applying the transactions in a timely manner, meaning the current "live version" could be more than a few transactions out of date. (With my scale of data it ranged from 5-20 versions out of date.)

The best solution I could come up for this problem was to only run half as many worker processes, my guess is that the database was having trouble handling 128 consecutive transactions at a time.

I'd like to know why exactly this happens, and if possible I would much rather prefer the query to stall until the requested version is met (or error the original query if that version can't be reached) rather than fail a query later on.

If you happen to know something about why or how this happens, please leave a comment, email me, or even [open an issue on our project](https://github.com/utk-se/WorldSyntaxTree)!
