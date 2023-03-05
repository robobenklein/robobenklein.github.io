---
layout: post
title: "Spring Swapping in the Spring"
date: 2022-04-11 # date of publish (sorting value)
created: 2022-04-11 # date of creation (shown value, defaults to `date`)
modified: 2023-03-04 # date last updated (shown if different than created)
categories: hardware
description:
tags: [keyboard, hardware, keyswitch]
image:
  feature: moonlander/switches_in_progress.jpg
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

It's spring, and that means... it's time for spring spring swapping?

At least, that's what I ended up doing.

Following up on [my last post about the ZSA Moonlander]({% post_url 2021-09-05-the-zsa-moonlander-first-impressions %}) I've *switched* to the Drop Holy Panda X keyswitches. Since not everyone thinks they are entirely deserving of the Holy Panda name, and I don't want to type that a thousand times, I'll just call them Drop HPX switches.

I've never owned any other Holy Panda switches, but I can say for sure they've got better tactility than any of the standard browns: Cherry Brown, Kailh Brown / Box Brown, but they were far heavier. Turns out, I'm not a heavy typer, so that's how I started down the path of swapping the springs.


I tried using the HPX switches as shipped to me for two days (60-65g by default), but found that I ended up typing less because of the ever so slightly increased strain. I knew for sure I'd need a lighter spring if I wanted to enjoy these to their fullest.

I spent two hours going through all 70 switches on the board to open each one, certainly I would never have completed the task in reasonable time without both a keyswitch/keycap puller and a keyswitch opener. I debated adding lubricant, but decided against it since I was already happy with the feel of the switch after the swap.

One thing I learned was that I *hated* the sound the keyswitches made without all the board's keycaps on, but once the whole thing was assembled again they went back to sounding as expected. This quirk is probably just caused by the Moonlander's somewhat hollow plastic construction, as there's quite a bit of open acoustic space without every keyswitch slot filled. This made me somewhat worried about the final sound halfway through the process, but it turned out alright in the end. This same phenomenon is why I strongly suggest people ignore the sounds switches on a switch tester board make, since it was *nothing* like the sounds they make when on a fully populated board.

# Moonlander Learning Curve

As a follow up to the previous Moonlander post, I've reached my original typing speed again, and more. However I've also unfortunately lost a bit of speed on the conventional staggered layouts... hmmmm, you win some you lose some?

Going back and trying the UHK I really noticed the staggered rows and how dumb of a concept staggered rows really are for typing. Columnwise boards are great, but now I'm pitiful when using any machine that isn't my own. I'd say the tradeoff was worth it though, as my rate of wrist pain has decreased even further than when I first started using the UHK.

# Style when no one's looking

I will admit at least some of the incentive behind grabbing HPX keyswitches was the colorscheme, the Kailh Box Browns have a fully white and clear base, which honestly didn't look amazing sitting on a black Moonlander base with black keycaps. Having the HPX keyswitches with a dark grey and black base totally made the board look more stylish and stealthy at the same time.

{% capture images %}
  /images/moonlander/IMG_20220411_054447_HDR.jpg
{% endcapture %}
{% include gallery images=images cols=1 caption="Moonlander right half with RGB enabled, HPX switches visible" %}

Still waiting on some blank POM keycaps to really finish the look though. I'll add in some shots of the completed board once those arrive to really show off the full RGB glow.

# The HPX keyswitches

Overall I'd give the HPX switches a 4 out of 5. They lose points for some physical shortcomings which made swapping in and out of hotswap sockets more of a pain than it should have been.

The little tabs on the top and bottom where the keyswitch puller grabs didn't come far enough out of the board for the puller to get underneath the edge. This meant I had to use an extra hand with a iFixit pry tool to get the switch out of the socket in order to avoid damaging the very thin plastic bar that comes across the LED shine-through gap. With either more robust or stronger top half plastic or an extra half millimeter of latch depth I think this problem would've been entirely a non-issue.

The feel is excellent for those who desire the strongly tactile experience, but the sound could still be improved, which I think some POM keycaps will definitely help with. By default (as a light typer) there was some quite noticeable springback clicks that got less pronounced after I swapped for lighter springs.

# Spring of 2023

I did finally get around to those POM keycaps, and they were totally worth it. I personally like the feel more compared to the stock ones, and with every key exactly where I expect it, no need for a legend, the ambient glow really serves as an excellent peripheral vision indicator for what layer the board is in.

{% capture images %}
  /images/moonlander/IMG_20230304_200643_NR_elr.jpg
  /images/moonlander/IMG_20230304_200700_NR.jpg
{% endcapture %}
{% include gallery images=images cols=1 caption="Moonlander left half, white POM keycaps, with activated layers" %}
