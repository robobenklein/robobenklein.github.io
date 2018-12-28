---
layout: post
title: "Computer Build: Triangulum"
date: 2018-12-27 # date of publish (sorting value)
created: 2018-12-27 # date of creation (shown value, defaults to `date`)
modified: 2018-12-27 # date last updated (shown if different than created)
categories: hardware
description:
tags: [amd, pc, nvidia, vega, pc, factorio, vr]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: false
---

I recently built a new mid-tower PC, but made some decisions worth writing about.

I had a few goals in mind when building this (over the course of a few months), but most importantly I was going to use for gaming.

Also, I wanted to run VR. And you probably already know that I'll only have Linux installed on the PC, so that's where my build strategy topics come in:


### VR in a VM

The Ryzen 2400G processor has Vega 11 graphics built-in, which on it's own can handle some games well enough, but what's important is that it can be enabled and used at the same time as a dedicated GPU, and the CPU supports PCI IOMMU.

This means that I can forward a dedicated GPU to a Windows VM in case I wanted to play VR titles that are Windows-only, and compare their performance with a proton or native version on Linux just by booting the VM.

Unfortunately the 2400G was the highest end AMD CPU with integrated Vega graphics at the time of writing, otherwise I might have gone with a Ryzen 7 series.

### Factorio

I don't know if you've heard of Factorio or not, but you will need to understand that the basis of this game is that the entire world undergoes a huge lockstep simulation every tick. (60 UPS)

Factorio worlds, although 2D, can grow very massive. Many of my world saves use up 6GB of RAM easily.

For a lockstep of this scale, where the whole world needs to be processed every 1/60th of a second, it has to read a huge amount of memory each tick to keep pace.

Since Factorio is also primarily single-threaded, I went with a high-end x470 motherboard to support overclocking the 2400G to get a higher per-core clockspeed.
