---
layout: post
title: "UTK's Computing Cluster: Newton"
modified: 2018-03-22
categories: supercomputing
description:
tags: [utk, software, chemicaldev, linux]
image:
  feature: features/pgs.codejunk.png
  credit: PGS.js
  creditlink: https://github.com/ChemicalDevelopment/PGS/blob/master/PGS.js
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2016-09-26T11:00:33-04:00
---

> This post has been updated and some of the information in the original article is no longer applicable. Please read towards the end for the update.

As some may know, I'm now attending the [University of Tennessee](http://www.utk.edu/), where they have a decent set of computing resources available for students opportunistic use.

Their computing clusters are collectively known as ["Newton"](https://newton.utk.edu/), which is actually [a collection of multiple clusters](https://newton.utk.edu/doc/Documentation/Systems/).

As a freshman, even though I've been working at ORNL with the supercomputing group, I still haven't had much experience with larger-scale applications, so this is my first dive into supercomputing-scale programming.

Since I didn't have any ideas for potential applications to run on these systems, I reached out to my successor for the L&N STEMpunks programming lead, [Cade Brown](https://github.com/CadeBrown), who is much better at theoretical mathematics and optimization than I am.

Cade has written many programs which require high-intensity computing resources, so I thought he would be an excellent candidate to offer computing resources to.


### The PGS Program

[PGS](https://github.com/ChemicalDevelopment/PGS/wiki) (aka the Prime Generator Search) is a program that finds polynomials that give primes for x first numbers of input.

I won't get into the mathematics too much here, you can read that on your own from the site.

The program is a combination of a NodeJS script and a C program that calculates some of these polynomials.

Getting the C code running on Newton is easy, what Linux cluster can't run a compiled C program?

The NodeJS script however took more than just a few debugging commits. We even had a major version change while trying to get the NodeJS to work.

After about a week, we had our final working code and now our workloads actually do work, even though we have yet to find any new polynomials of interest.

### The Cluster Management

The Newton cluster makes use of the [Grid Engine](https://newton.utk.edu/doc/Documentation/UsingTheGridEngine/) which I have not even heard of before starting this exploration, so on I went to learn.

On my first few tries, I just wrote small bash scripts to show me some system information, so that I could see how jobs got submitted to various machines.

It's fairly easy to get started, just remember to set the process limits to what they should be; I ran PGS with 16 threads without declaring the resource usage (default 1 thread), and I got an angry message from the Grid Engine. Since I'm an opportunistic user, the program would have been killed if those resources were needed for another process.

### Onward

I would say go and try it out for yourself, but only UTK students and staff or researchers can [sign up](https://newton.utk.edu/doc/Documentation/NewtonMembershipLevels).

If you have an interesting program that you'd like to try out with a large computational requirement, [talk to me](mailto:robobenklein@gmail.com) and maybe I can put in the job for you.

# July 2017 - March 2018 Update

Newton is [officially no more](http://www.nics.utk.edu/computing-resources/acf/acf-timeline), and to my disappointment, opportunistic use has been downgraded.

I first became aware of the move back in July, when I got the first emails describing the move from Newton to the [ACF](https://www.jics.utk.edu/acf).

I emailed their RT ticket system when I noticed that opportunistic users hadn't been mentioned, and was disappointed with the response.

> ...to gain access to the ACF you will need a staff or faculty sponsor. The ACF is funded by institutional and individual investors to perform research and therefore sponsorship is required.

I completely understand their reasoning behind the move, I'm just sad that a resource originally freely available to UTK students is no longer available.

Although I lost access to Newton and the ACF for a short while, my CS professors were kind enough to sign as a faculty sponsor, allowing me to once again make use of lower-priority queues. (Thank you S.M. & J.G.)

In my original post, I wanted to inspire other UTK CS students to try it out as a platform for learning HPC operations, but now that the barrier to entry is higher than the average student would bother with, I'm left wondering how I can inspire the other CS students to try it out when they don't really have an objective or dedicated purpose to use the systems. (Which is what I loved about Newton, I could just plop any larger computational project onto it and freely experiment with programs I otherwise would not have tolerated in terms of runtime.)

Hopefully I'll be able to find that people are still interested in large scale distributed computing, but until then, I'll have to get people interested on my own. Who knows, perhaps we will eventually see a Newton-like opportunistic queue again, but right now it's not looking too hopeful.
