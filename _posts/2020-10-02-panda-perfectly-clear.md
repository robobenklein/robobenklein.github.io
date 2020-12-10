---
layout: post
title: "Drop X THX Panda: Perfectly clear"
date: 2020-10-02 # date of publish (sorting value)
created: 2020-10-02 # date of creation (shown value, defaults to `date`)
modified: 2020-10-15 # date last updated (shown if different than created)
categories: audio
description: "First impressions of the Drop x THX Panda Headphones from a wannabe audiophile."
tags: [audio, headphones, pulseaudio, hardware]
image:
  feature: 2020-10-02/20201002_140744.jpg
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

After many months of anticipation and multiple delays in production, I finally have on my head a pair of "the world's highest fidelity wireless headphones."

And I think I will agree with their claim - although my word may not mean as much as some professional reviewers out there with $500+ pairs of headphones, I find that these headphones have clarity far beyond anything I've tried and reproduce sound so accurately it's somewhat spooky.

A lot of people will probably disagree with me, I am no expert in audio, after all this is my first planar headphone experience ever, so instead of focusing so much on their pure audio quality, I'll talk about my specific experience with them.


# Unbox

Just as plain and unmarked as the headphones themselves the packaging box had barely a single marking on the outside.

![Plastic Wrapped Black Box](/images/2020-10-02/IMG_20201002_140107.jpg)

Inside the outer black box, was another solid black container.

![Black carrying case](/images/2020-10-02/20201002_140654.jpg)

I think I understand the theme now.

![The utterly black headphones themselves](/images/2020-10-02/20201002_140744.jpg)

And of course the included cables match the utterly black, relatively featureless smooth surface style too:

![USB-C and 3.5mm audio cable](/images/2020-10-02/20201002_140838.jpg)

# The first sounds heard

The first thing I heard upon donning the headphones was the sound of my own breathing. Not exactly what I expected.

Before turning them on or plugging them in, just wearing them cut out an impressive amount of the ambient noise. It's not completely anechoic but it was close enough that I became uncomfortable quickly if nothing was actually playing. If I'm using them in a noisy environment then the isolation is absolutely wonderful, but if the ambient environment is already quiet these headphones seem to render absolute silence.

# The first audio playback

Since I didn't know if the unit came charged and I just wanted to verify all was well I plugged in to my FiiO K3 DAC with the included 3.5mm cable.

Interestingly enough, the volume level difference between the Panda and the HD58X was the same, even though they have very different impedance ratings.

Since this was my first time using a planar headphone of course I was blown away and ended up listening to more than a few hours of different media sources.

# Bluetooth and Pulseaudio

After a bit of playback using the K3 DAC I was ready to try out the bluetooth mode, after all that's the big selling point.

And then I hit the Linux do-it-yourself wall.

Turns out pulseaudio doesn't have any of the low-latency codecs available yet, namely the AptX-LL or similar codecs the headset was advertised with. So video / tv / movie playback was a pretty bad experience, with far more than 100ms of lag.

So digging into the problem reveals that those changes are [already in the works](https://gitlab.freedesktop.org/pulseaudio/pulseaudio/-/merge_requests/227) but that pulseaudio's slow release schedule means I won't be getting those patches via an apt upgrade anytime soon.

Alright, no big deal since I prefer to run my desktop wired to get better latency in games and voice chat anyways.

# Bluetooth and Android

Now for the real reason I bought the Panda: not having a wire while I work away from my desk!

On my Nokia 6.1 (TA-1045, stock) I get Qualcomm's aptX HD codec, and on my Samsung Tab A (SM-T510, LineageOS) I get LDAC.

Latency using aptX HD on my 6.1 was again pretty bad. I could pause a youtube video and swipe down my notifications before the audio playback stopped. aptX was not *as* bad, but still a noticeable delay. LDAC definitely felt like it had lower latency compared to aptX HD, but again was over 100ms for sure.

As for codec quality comparisons, I honestly couldn't say after only a couple of weeks of owning them. Perhaps after a few months I might be able to identify which device is in-use, but for now I'm still getting used to the difference from dynamic drivers.

# Speaking of multiple devices...

Did you know that it can connect multiple devices at the same time? I didn't! And maybe it shouldn't? Because it actually doesn't.

While you can have a few devices "connected" to the Panda at a time, only one audio stream will actually be fed through at a time. So if you start playback on device A and start a second stream on B, you have to pause A and wait a second for B's sound to be heard. Non-computer people will have a really hard time understanding why that is, and I agree that it's not very intuitive.

Though compared to the alternative of disconnecting completely, I do prefer keeping the bluetooth connection alive compared to having to reconnect by pulling the device out of your pocket to switch.

# Comfort

After wearing the Panda headphones for ~3-4 hours at a time I counted how often I had to adjust their position to stay comfortable compared to the HD58X: more than twice as often.

With the HD58X I can easily drive them all day for well over 8 hours at a time without getting too fatigued from wearing them. For the Panda I find myself taking a break after 3 hours to relieve some of the pressure from the top of my head. On the sides and over the ears there's no problem, but I am used to the very plush headband and notched center of the HD58X, so the pressure at the very center of the top of my head is the first spot that becomes unbearable while wearing the Panda.

If I'm lying down where my head isn't vertical the headband centerpoint pressure is completely gone and I much prefer the Panda's lack of wires, isolated sound stage, and smooth & soft feel. While horizontal I could easily outdo the HD58X in terms of comfort, the grip around the ears and clamp pressure really doesn't bother me at all even with my glasses frames under the ear pads.

I think I'll end up looking for some extra padding to add to the headband. Will update here when I find a good solution for it. Seems like it's a common problem for Panda owners, so I expect any further headphone development will keep this in mind.

# Battery Life

I charged them twice in the two weeks it's been since I got them, not only do they achieve the advertised listening time, but they hold a charge while unused extremely well. USB C-C charging also means I can charge them from my phone for example, although I do have a battery pack to do that job.

# Future updates

As I continue to use these on a daily basis, I'll update here with any major news. (Including pulseaudio fixing the bluetooth codecs.) Let's see how these hold up over time.
