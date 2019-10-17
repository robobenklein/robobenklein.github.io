---
layout: post
title: "VLHCC 2019: My personal rankings"
date: 2019-10-16 # date of publish (sorting value)
created: 2019-10-16 # date of creation (shown value, defaults to `date`)
modified: 2019-10-16 # date last updated (shown if different than created)
categories: conferences
description: "Stuff I found interesting from the IEEE VLHCC conference in Memphis, TN"
tags: [conference, utk, research]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: false
---

ICYMI (in case you missed it, which most of you did) the IEEE VLHCC conference is happening this week.

The [VLHCC (Visual Languages / Human Centric Computing) conference](https://human-se.github.io/vlhcc2019/) is being held in Memphis, Tennessee, so it was a fairly cheap trip for my research group from the University of Tennessee, Knoxville.

I saw some papers which I thought were extremely applicable and interesting, and a few that were not so.

Since I'm a huge nerd who plays plenty of games using the tier system (looking at you OSU), I'll use that again here. My tiers are based mostly on how interesting / applicable I found the research, with the live presentation being less important for the ordering of this list.


# SS Tier
{:.tiertitle-ss}

Papers almost everyone I know should read.

### Barriers to Reproducible Scientific Programming
{:.papertitle}
Presentation: SS

I wish every researcher who ever touches a computer would read this paper or see this presentation. It was the best presentation I've seen here.

The problem is super relevant and is my number one frustration with other papers: I want to read the code behind it.

I don't care how bad the code is, or if it's ripped off some other project, if I have more questions about the research or am interested in referencing or continuing the research, I will absolutely want to know exactly how it worked.

### Toward Accessible Graphics and Visualization (Second Keynote)
{:.papertitle}
Presentation: SS

Incredible talk and research. I had never believed that it would ever be possible in my lifetime that the blind would be able to design and create 3D (GPU-accelerated!) games on their own.

When the demo of the blind-accessible game editor started I was hugely impressed that such a working product already existed.

It's now no longer unreasonable that the blind might even be able to interact with others in VR in my lifetime, let alone flesh out full game experiences in something as universal as the Unity game editor.

### Hiring is Broken: What Do Developers Say About Technical Interviews?
{:.papertitle}
Presentation: B

This is relevant to just about anyone either hiring or looking to be hired in the tech industry. Whiteboard interviews are the classic stressful situation and this paper looks at this in depth and why it's a broken method.

I hope that more recruiters will take this to heart and I think awareness of this common issue should be raised as much as possible right now.

The presentation wasn't great, but it seemed almost ironic that the same stress that causes problems at the whiteboard may have contributed to the poorer performance of the presentation.

# S Tier
{:.tiertitle-s}

### The Long Tail: Understanding the Discoverability of API Functionality
{:.papertitle}

In essence, this paper looks at the usage and documentation of APIs where many functions are not commonly used, but are probably useful, and we would like to know why.

I personally thought this was a very well done presentation because I use APIs *very* often in which I am unfamiliar with all the functionality.

I have been in the situation where I want to explore an API completely to search for a certain desirable functionality, but it might be completely undocumented, there might be no examples, and it might be obscured by the other, more popular results from StackExchange posts.

### Instrument Designs for Validating Cross-Language Behavioral Differences
{:.papertitle}

For programmers who regularly use multiple languages, you'll probably find a lot to associate with in this paper, since it compares how languages with similar features like array slicing have very different behaviors between languages.

I personally associated with this presentation because of the use of both Python and R for the example comparison, I have used both and I have fallen for some of those pitfalls (bad assumptions, etc) mentioned in the presentation and paper while switching between them on the same project.

### XLBlocks: a Block-based Formula Editor for Spreadsheet Formulas
{:.papertitle}

I always thought that spreadsheet formulas could be so much better integrated as a full blown programming paradigm, and what do I know, they've done it in a block-based language.

It actually looks like a really slick tool and evidence from the study shows that it's really way better than typing in formulas into excel.

Unfortunately I don't use Excel, or any of the Microsoft suite, so I would love for this to be an open source project and somebody to make a rewrite for a different more accessible spreadsheeting program.

I could imagine Google implementing such a solution for Google Sheets and I would absolutely love to use it, however excel has such a specific set of instructions that I'm worried we'd essentially have to reimplement the whole project once per spreadsheeting program.

### Towards an Empirically-Based IDE: An Analysis of Code Size and Screen Space
{:.papertitle}
Presentation: S

This might just apply to me, but I very often use editors in which I tile panes of code that hold differing physical code sizes.

I'm currently working on research that involves creating a grid of patches that hold code files automatically, so if I could use the code from this paper as the basis for automatically determining the ideal number of panes in the grid, it could seriously improve the user experience.

Even if I were not to implement it directly, I would still love to be able to run it over a codebase I've never seen before to get an idea of how I should lay it out so that I can read as much as possible.

### A Hierarchical Task Assignment for Manual Image Labeling
{:.papertitle}
Presentation: B

I might be using the results of this paper personally for my own projects, since this showed a new method for tagging (labeling) images for use in a machine learning training dataset.

Sorting quickly into major categories first, then progressively refining the images into narrower categories hugely improved the time required to tag all the images in a fixed size data source.

### Co-Located Collaborative Block-Based Programming
{:.papertitle}
Presentation: S

This project was really cool to see presented because included was a very short demo in which they showed how the software they built shared snippets of block-based code.

It was super simple to just drag a built block of code from the sender's editor space onto the other participant's name in the room view, and like magic the code slides in to the recipient's incoming code drawer.

This is of course really natural for block-based languages since it's easy to pick up and physically move small self-contained blocks of code, however I also with such a sharing concept could exist for conventional text languages. I think such a method seriously helps improve the productivity of collaborative programming, and perhaps some of the other ideas from the block collaboration methods presented here could be applied in the same way to text.

Overall I was also impressed to see data from a study using a unique variety of devices: a laptop, a tablet, and a touchscreen table. I was somewhat surprised to find that the tablet was more preferred compared to the table, but I could easily explain that by either device having a sub-par user interface experience.

### Effects of Code Representation on Student Perceptions and Attitudes Toward Programming
{:.papertitle}

Excellent research focus, but I don't ever plan on teaching users at this level nor do I really want to, so I doubt I'll come back to this paper in the future.

I greatly appreciate everyone else educating the lower CS students, since I know I would quickly get fed up after having to explain the same exact problems every single year.

### Towards a Model of API Learning
{:.papertitle}

# A Tier
{:.tiertitle-a}

### Designing Curated Conversation-Driven Explanations for Communicating Complex Technical Concepts
{:.papertitle}

### Investigating the Essential of Meaningful Automated Formative Feedback for Programming Assignments
{:.papertitle}

### From GenderMag to InclusiveMag: An Inclusive Design Meta-Method
{:.papertitle}
Presentation: SS

Personally I'm not crazy interested in this research area, but the presentation skills were amazing.

He was able to carefully and quickly answer very socially sensitive questions with great answers. A question about extending the study to include racial factors was asked and I know I would have flopped and either given a poor answer or just avoided the direct answer.

# B Tier
{:.tiertitle-b}

# C Tier
{:.tiertitle-c}


# VLHCC Overall

Some talks from the conference didn't make it onto this list, for various reasons. Some of those papers I thought wouldn't be of interest to you readers, and some others I simply wasn't there (e.x. getting left behind by the bus because food took too long) or I didn't catch enough of the presentation to give it a complete rating.
