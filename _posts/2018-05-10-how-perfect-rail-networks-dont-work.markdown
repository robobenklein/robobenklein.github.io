---
layout: post
title: How Perfect Rail Networks Don't Work
modified: 2019-09-03
categories: factorio
description:
tags: [steam, factorio, gaming]
image:
  feature: 2018-05-10/kangning_bridge.jpg #filename in images/ for post header
  credit: Xue Siyang #text to show as image credit
  creditlink: https://commons.wikimedia.org/wiki/File:%E5%BA%B7%E5%AE%81%E6%A1%A5%E9%9B%AA%E6%99%AF_The_snow_senery_of_Kangning_bridge_-_panoramio.jpg
  background: cat-bgs/traingrid.png
comments: true
ghcommentid: 3
share: true
published: true
date: 2018-05-10
---

> Post has been updated September 2019! Read on further below,

This article was partially inspired by Korezaan's post:

[How Perfect Rail Networks Work](https://rezzealaux.wordpress.com/2017/11/22/how-perfect-rail-networks-work/)
{: style="font-size: 120%; text-align: center;"}

> In this post I will show you the principles behind building rail networks in Factorio, so that you understand what you’re doing before you do it, you understand the problems when they appear, and, if no mistakes occur, you create networks that never jam ever.

*(I recommend at least scanning over that post, it's got useful information.)*

Just because a train network never jams, does not mean it's perfect.

This post will attempt to show you that trains are not actually as complicated as they are famed to be.

So here *I* am to explain...

 * Current number of hours played: 504
 * Game versions: 0.12 - 0.16
 * Longest game in hours: 145
 * Time spent figuring out rail theory in hours: *still counting*
 * Amount of notes: None.
 * Percent of played worlds with train networks: 100%
 * Number of perfect rail networks made: **1**

This article is not for those inexperienced with trains, if you're just getting started, [check out this presentation.](https://docs.google.com/presentation/d/1pDj-ccWjUrwG_9_fDzLUosFZx_luGUet5XZwt7uUyzM/edit)


Already know that trains are the future and just need the technical advice? [Skip to Rule 2](#rule-2).

# Rule 1:
### A perfect railway is not practical.

Here we have to lay some groundwork for future arguments:

#### The purpose of trains is to move things between places.

This means we will judge the success of a network on it's ability to move things between destinations.

This involves a lot of factors, most notably speed, size, and number, of trains, but in the end **stuff gets from A to B**.

Although it moves the same things as belts, bots, etc, they do so in a very different way.

One rail line is going to transport a huge variety of items in most cases, a technically 'perfect' rail network would be a single loop for one item type with no intersections or crossings, not too useful when you want to expand dynamically or make modular bases.

#### Trains are not a factory.

Trains are a way of integrating your factories, they need to work with and be tightly integrated into every piece of your train connected factories.

I see a lot of new players who just started to understand signals place some track down somewhat haphazardly, but larger networks require good planning skills, and these initial placements of less organized rails from new players often come back to bite them when they need to expand.

#### Trains are active.

Trains require maintenance. Unlike belts, pipes, inserters, or bots, trains *will* require your attention every time something goes wrong.

Always keep an active eye on the minimap, keep a keen eye out for the following:

 * Trains that are stopped right before an intersection, turn, or roundabout.
 * Trains that have plotted a route to their next destination but haven't left the station. (See `show-rail-paths` and similar in the F4 debugging menu.)
 * Trains stopped somewhere not at a signal. (Extremely bad, ran out of fuel, hit a tank, biters broke the rail, etc)

You're bound to see some of these in almost any modular network of real mid-to-late-game use.

# Rule 2
### Think like a train to understand the train.

Trains are not that complicated, they are simple machines which follow a very well defined set of rules, most of which are controlled and applied via signals.

I've seen a lot of people try to explain how signals work, but they often make it sound more complicated than it is.

A signal takes one section of placed rail and splits it into two logical zones. ("blocks") If you didn't already know this, you should go check out that presentation I linked earlier.

All signals always do this, no exceptions. But...

## There are two kinds of signals.

Once a train has figured out where it's trying to go, there are only three things it's concerned about:

 * The signals on the paths ahead. (**indirectly** "other trains")
 * The station status.
 * Not you, standing on those tracks.

Trains **do not care about**:

 * Their own fuel level.
 * How much they are hauling. (They don't know their own length.)
 * Signals they have already passed.
 * The laws of physics. (Stop trains in emergencies by destroying the tracks they are on!)
 * Things on the tracks. (you.)

Scenario time! The train begins to depart the station, and it sees a signal...

Here's where my condition explanations come into play: (from the viewpoint of the train)

### Normal Signal:
You may enter this block **if** this block is not occupied or reserved.

### Chain Signal:
You may enter this block if it is not occupied or reserved **AND you can exit this block.**

### Otherwise, stop and wait.

But this part is where it gets *really* interesting, and we can start making rules of thumb that make our lives easier.

## Other information we should know:

A train recalculates it's path when:

 * It comes to a stop.
 * A signal on it's current desired path changes.
 * The destination station status changes.
 * The rail system changes. (A track was destroyed or added.)

A train does not care about other trains *inside the same block*. We need to ensure blocks are well-defined to prevent locks and crashes.

So, let's make some rules that will make your rail networks much more robust and performant.

# Rule 3
#### There is always an exception to rules of best practice.

Before I go and make an absolute do or don't list, remember that for every rule, there's probably at least one very specific situation in which the rule doesn't work or needs to be changed. For most of the network though, following the rules will make expansion and management worlds easier.

# Robo's Railway Ruleset

These are the rules I try to stick for *every* single rail network I design, and so far it's been working great! Hopefully these can help you too,

## 1. Always place signals *before* a split

Doing this allows the train to change it's mind if the situation changes and makes a different route available. Without a pre-split signal, the train is locked into it's decision, and might cause a backup.

![Train pre-split signal gif](/images/2018-05-10/pre-split-signal.gif)

## 2. Never place a station on the shortest path

An easy way to avoid this is to simply turn all stations into looped stations. Make sure that the station exit is always before the station entrance, instead of the other way around!

Common example on the inside of a 4-lane T junction:

![Train loop station example.](/images/2018-05-10/loop-stations.gif)

## 3. Only use normal signals when their block size > max train length

Remember, trains don't know their own length, so if you have a normal signaled block that's shorter than the train itself, the end of the train will still render the previous block occupied!

## 4. Place signals on the early or late edge of blocks

Whichever choice you make, try to stick to it for the whole network.

For maximum efficiency, never do both! Stick to either early-as-possible or late-as-possible signals to ensure that trains already moving have better ownership of their planned/future path. This will help prioritize getting moving trains off the track before letting newer ones enter. (Indirectly reducing congestion.)

## Finally, think like a train

If you aren't sure where to place a signal, just think through how the train will act according to my [two simple signal](#rule-2) rules I gave above.

# Afterword

I hope that this guide could solve some of your problems!

If you find issues, have suggestions or changes, please let me know! I'll try to update my ruleset as I continue to play the game and learn more common mistakes people make building rail networks.

# September 2019 Update

It's been over a year, and with all the changes that happened, this article is still somehow popular enough to deserve an update.

So here's my new take on this:

 * Current number of hours played: 1045
 * Game versions: 0.17.X
 * Longest game in hours: where did my life go?
 * Time spent figuring out rail theory in hours: *still counting*
 * Amount of notes: None.
 * Percent of played worlds with train networks: 100%
 * Number of perfect rail networks made: **1**

The way I'm building train networks now is completely different than what I used to.

A large part of this change is the use of LTN, which is a seriously amazing mod. (Could be perfect if it was licensed under a FOSS license)

## The ruleset still applies, but it's not absolute...

Most of my railway ruleset still holds up and has prevented a lot of friends from messing up my rail networks which I'm quite picky about.

For ruleset rule number 3, I've started to deviate from this a tiny bit.

While I still recommend keeping the blocks larger than your biggest train, there have been some cases in which throughput can be improved when adding more blocks with normal signals instead of chain signals.

As long as you ensure that there's a chain-signal-only path to get around any trains stopped in normal signal blocks, you shouldn't ever get a network lockup.

In the case that you add normal signals to all the possible paths to get to a station, it's possible that if **even a single station doesn't have enough train waiting spots, the entire network may lock up.**
