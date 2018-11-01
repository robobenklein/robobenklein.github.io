---
layout: post
title: "USB3 Hubs: What's going on?"
date: 2018-11-01
created: 2018-07-24
modified: 2018-11-01
categories: hardware
description:
tags: [usb, hardware]
image:
  feature: 2018-07-24/usb-things.jpeg #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
---

A.K.A Why do all my USB 3.0 Hubs break?

I've gone through two powered USB 3.0 Hubs now, one still kinda works, sometimes, the other, well I sent that one back because it didn't even last 6 hours during my normal use.

But then I thought,

> I just burnt the second powered USB Hub I bought, am I expecting too much from them?

And I might just be expecting too much...


## The Broken Hubs

The hubs which I've now broken in some way:

 - An Anker 7 + 2 port charging 60W hub.
 - A GenBasic Elite 10+2 charging 84W hub.

I still use the Anker one while I await shipping of other hubs, but it can only support ~4-5 of my devices at a time before it will occasionally reset or drop USB connections. (Most noticeable with the DSD USB DAC I have for my audio system - which *screams* when the hub has a disconnect hiccup.)

The GenBasic hub was dead within 4 hours of having all 10 ports populated. It burnt when I plugged in my headset to charge (the 10th device...) and after that it would not support more than 1 device connected at a time before the hub would continuously power reset. I returned this hub, it cost almost $90...

I don't think there's anything too unusual about my USB device setup either.

Yes, I have *a lot* of USB devices... but that's why I'm buying these hubs... because they are supposedly higher amperage and have the minimum number of ports I need.

If you know of a 10-port or greater 3.0 hub that's lasted you well, maybe tell me about it? (I just [added a new page](/ll/) where you can find places to contact me!)

## The use case

I don't know if this is a common thing, but I have easily somewhere around 5-12 USB devices in use when I'm at my dock setup. Here's what the USB tree looks like:

 * Laptop
   - USB 3.0 Hub
     - USB DAC (to stereo audio receiver)
     - USB MIDI Keyboard
     - USB 2.0 Hub (monitor)
       - MIDI to USB converter (to keyboard)
     - Type-C cable (phone #1)
     - Mini-USB cable (phone #2)
     - Steam Controller Dongle
     - G933 Headset wireless dongle
     - G933 Headset (Charging-only ports)
     - Generic USB drives
   - USB Hardware KVM switch
     - Mouse (Wireless)
     - G710+ keyboard

Already I'm at 11 devices, and I haven't even plugged in any of my backup drives, or more than one flash drive, and yet somehow this is just too much for normal 3.0 hubs.

## Can I make one myself?

I'm starting to wonder, I probably have enough electrical knowledge to purchase a usb controller board and ports, make my own hub but probably with overkill power delivery.

Although if it turns out not to be a power-related problem (some device sending bad data back up the bus?) then I will have a much harder time figuring out this problem.

# Fall 2018 Update

![](/images/2018-07-24/usb-things-2.jpg)
{: style="text-align: center;"}

> The unusually bright individual port status lights get somewhat annoying, but at least it looks really cool when they come online in sequence.
{: style="text-align: center;"}

I think my condition is stable now.

I purchased an "iCONE" USB3 10-port hub in August, and it seems to have held up so far.

Unlike the GenBasic hub, this one is only 60W instead of 84W, but I have yet to see any power problems after plugging in most of my high-load devices.

There's also nothing special about this hub - no QuickCharge or extra output ports, perhaps leaving less components to fail.

Now, I haven't *stressed* this hub by pulling the full 60W yet, but I doubt I will try to considering the track record so far. (Even though it does have overcurrent protection, it's an $85 hub and it still works...)

Hopefully this holds up for more than just these few months, perhaps if it comes back in stock I may really try to push it; potentially ordering a second hub upon survival of such a stress test.
