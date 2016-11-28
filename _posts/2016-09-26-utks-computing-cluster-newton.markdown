---
layout: post
title: "UTK's Computing Cluster: Newton"
modified:
categories: supercomputing
description:
tags: [newton, software, chemicaldev, pgs, linux]
image:
  feature: pgs.js.png
  credit: PGS.js
  creditlink: https://github.com/ChemicalDevelopment/PGS/blob/master/PGS.js
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2016-09-26T11:00:33-04:00
---

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
