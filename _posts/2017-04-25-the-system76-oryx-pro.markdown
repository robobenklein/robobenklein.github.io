---
layout: post
title: The System76 Oryx Pro
modified:
categories: hardware
description:
tags: [system76, linux, hardware]
image:
  feature: oryxpsystem76-promo1.jpg
  credit: System76
  creditlink: https://system76.com/laptops/oryx
  background: cat-bgs/triangular.png
comments: false
share: true
published: true
date: 2017-06-06T13:04:58-04:00
---

As my daily driver for a year now, the Oryx Pro (orxp1) laptop from System76 has been an extremely enjoyable experience.

If you didn't already know, System76 sells Linux / Ubuntu laptops. The hardware supports Linux out of the box, and System76 provides support and drivers to the customers for additional features.

I bought the Oryx Pro in June of 2016 while working at ORNL, and since then I have not regretted my decision.


The only con I have is the 2.5 hour battery life, but considering I prefer to bring my computing power with me, battery life was something I was willing to surrender. As a computer scientist, I'm never too worried about how far I am from an outlet.

I have the orxp1, but newer versions are coming with 10xx series and 7th generation Intel processors.

My laptop came with:
 * i7-6700HQ
 * 24GB DDR4 2133Mhz
 * A Samsung 950 NVMe Pro SSD (256GB)
 * A TB HDD
 * GTX 970M graphics with G-Sync
 * Fingerprint hardware

I'll go down the list:

## Computing Hardware

With an i7 and 8 threads, 24GB of DDR4, and a 970M, I've not run into any computational limits on my hardware yet.

Tasks like gaming are absolutely no problem (assuming they're linux-supported) and rendering or video work is done in reasonable time.

## The workload

As I go through many virtual machines, having 24GB of RAM means that I can have 2 VMs using 8GB, and still have enough to be playing a game while letting the VMs finish background tasks.

VT-d isn't supported sadly (it's an HQ chip after all), but understandably, since forwarding the only graphics device into a VM may have some adverse effects on the host OS. The i7's built-in graphics were disabled, since most of us know the troubles that graphics driver switching can cause, although sadly it could not be re-enabled easily by the user.

As for Blender and Video transcoding, the GPU acceleration makes these tasks much easier, even though the CPU is plenty capable of these tasks on it's own. With System76's drivers and support for the Nvidia cards, you won't have to worry about getting video driver compatibility or install figured out, since they've written tools to help. (Simple as `apt install system76-driver-nvidia`!)

## Storage

The Oryx Pro that I bought came with an open 2.5" slot, meaning that there were a total of 2 2.5" slots and two M.2 SSD slots. I bought one 1TB 2.5" HDD with the computer, but left the second slot open where I inserted my old Samsung 850 EVO SSD, which fit perfectly. (The laptop is thick enough that it stacked both 2.5" drive bays on top of each other, yet thin enough you wouldn't think they could fit.)

## I/O

Part of the reason I choose some less portable or larger laptops, is that many of them are missing a key few points that I can't do without.
 * A number pad on the keyboard
 * Separate audio in/out
 * Enough USB ports
 * Physical trackpad buttons

The Oryx Pro met all these requirements, although I still had to buy adapters from mini-DP to DVI/VGA for monitors. As is the way with ever-changing technology.

<!--
### Myth: "Just a rebranded Clevo"

I've heard this from a few places around the web before and after I bought my Oryx, but this argument generally only came from people who didn't like their product or had other problems with it. System76 does a lot more than just rebranding an offshore product:

 * The RAM was hand-marked, tested. Seriously, what other company does this? Seeing this upon opening the laptop only gave me more respect for the company.
 * Before purchase, they confirmed that I could put my old SSD into the second bay.
 * Right after purchase, they answered all my questions quickly, and have a great lifetime support policy for their computers.
-->

## Cons

 * Heavy. It's not quite up there with the namebrand gaming laptops, but it's still the first thing you'll notice when you pick it up.
 * 1 year of tech improvements. Since it's already 12 months past prime, we're already seeing things like USB-C and Thunderbolt pick up which I won't get to until I need another laptop upgrade. For it's time, it was well-spec'd.
 * Large bezel. While it's of no consequence to me, you might gawk at the bottom bezel of the screen being more than an inch tall.

## Costs

**$1995.00** for specs as mentioned above, at time of purchase.  
For the time I was searching laptops, this was surprisingly very affordable. Similarly spec'd laptops from others like Dell either didn't meet my requirements, or sometimes were $200 more expensive than an equivalently spec'd Oryx. This was surprising at first, since System76 felt like such a niche market that I'm impressed how their prices can stay so reasonable.

Nonetheless, my parents didn't exactly smile at the two thousand dollar tag, as I don't think they've ever spent more than $700 on a computer, but it's my money, and I can sufficiently say that I made a choice I'm happy with.
