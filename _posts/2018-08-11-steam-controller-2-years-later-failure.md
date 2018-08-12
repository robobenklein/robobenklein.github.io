---
layout: post
title: "Steam Controller: 2 years later, failure"
date: 2018-08-11 # date of publish (sorting value)
created: 2018-08-11 # date of creation (shown value, defaults to `date`)
modified: 2018-08-11 # date last updated (shown if different than created)
categories: hardware
description: >
  After more than two years of use, my Steam controller has failed me.
tags: [hardware, steam, gaming]
image:
  feature: steamc/steamcontroller_circuit.jpg
  credit: Steam Controller Disassembly
  creditlink: https://www.ifixit.com/Guide/Steam+Controller+Disassembly/112123
  background: cat-bgs/hex-parallel-tri.png
comments: false
share: true
published: true
---

For two years, I greatly enjoyed using the Steam Controller as my primary interface for controller-based games, and for mouse and keyboard games on the couch with my Steam Link.

But now...


I have to buy a new controller...

You thought I was going to say something else?

I can't really blame Valve for the latest problem, analog joysticks are complex mechanisms that break all the time, and it wasn't even a hardware problem, it was the electrical analog sensor that actually broke.

But now that it *is* broken, I realize how much I've grown to depend on it as a tertiary input device to my computer, not just for gaming.

The Steam Controller allowed me to sit down on the couch and browse the web, or click through a few Youtube videos playing via a Steam Link. Heck, sometimes I'd even just sit back on my bed and use the controller for watching movies on a screen I have mounted at ceiling-level.

I didn't even need Steam running, thanks to the awesome userspace driver implementation of [SC Controller](https://github.com/kozec/sc-controller).

I've been satisfied enough with my experience, that after shooting a quick message to Steam support to double-check the cause of failure, I figured it was worth it just to buy a new one.

## All is not lost!

So yeah, my controller went and died, but I got a lot out of it!

And even after it died I still got to make a [disassembly guide](https://www.ifixit.com/Guide/Steam+Controller+Disassembly/112123) for it as well.

This means I can take the old decals I had on the broken controller and simply swap the plastic covers with the new controller, no problem so long as I have a *darn **long-necked T6 Torx** driver*.

Yes, I really did *drill out* two screws in my Steam controller because I didn't have a long enough T6 bit... *sigh*

## Two is a crowd

Next time the Steam Controller goes on sale - I don't think I'll hesitate to order. The games only get better when your whole party is using the same controllers.

Using multiple Steam controllers on Linux has been a breeze compared to the difficulty of working with PS3, PS4, or Xbox 360 controllers. Having a completely userspace-based driver with each player having their own control scheme (which is automatically fetched from their cloud storage on any Steam system!) is nothing short of a revolution in using multiple controllers on PC.

Now it's just a waiting game for the new controller to come in again.
