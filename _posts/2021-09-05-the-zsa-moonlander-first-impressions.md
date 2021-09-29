---
layout: post
title: "The ZSA Moonlander First Impressions"
date: 2021-09-26 # date of publish (sorting value)
created: 2021-09-26 # date of creation (shown value, defaults to `date`)
modified: 2021-09-26 # date last updated (shown if different than created)
categories: hardware
description:
tags: [hardware, keyboard]
image:
  feature: 2021-09-05/desk.jpg
  credit: My desk in the lab + Moonlander
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

I am the proud new user of ZSA's Moonlander MK1, and in fact this is my first experience using an ortholinear keyboard.

It's only been a few days since the unboxing, and already I am absolutely loving the experience of typing on it, even if I am spending a few seconds hunting for a special key I had to reposition.

In just 4 days since I opened the box I am already achieving more than 50% of my original typing speed on the UHK (which I still love, btw) and I seem to be improving at a much faster rate compared to the UHK, which was my first split keyboard.


# Getting a good layout going

Since getting more used to the layout and [compiling my own firmware for it](https://github.com/robobenklein/robo-uhk-moonlander) with some [modifications to QMK](https://github.com/robobenklein/qmk_firmware/tree/robo/tap-hold) I am feeling pretty comfortable with it.

Originally I could not figure out how to get the behavior of the tap vs hold modifier keys to match what my muscle memory expected, so thanks to the [help of a very kind Redditor](https://www.reddit.com/r/olkb/comments/pj2xmb/zsa_moonlander_looking_for_an_immediate_layer/) I was able to find the changes to QMK needed to enable the hold-on-tap-other-key functionality I was missing.

My first few attempts all tried to keep the <kbd>Enter</kbd> key accessible to the right pinky finger, but I later realized it was just not a productive / speedy choice since that forced the `;:'"` keys onto just one button.

Instead I am much happier re-learning to use the thumb modules more obsessively in order to lighten the load on the outer digits.

# Portability

Compared to the UHKv1 it takes about the same amount of effort to unpack and set up the board at my desk, however where it shines is in it's well-designed included carrying bag.

With the UHKv1 I never bothered to unplug the computer mini-USB connector as it was located under the top of the board and inside the housing, and I never unplugged the bridge cable. However with the Moonlander I have no issue unplugging both the cables involved in the entire operation completely every time. This significantly eases the teardown and setup process IMO, since I no longer have to fit cables into the carrying case at the same time as the board as I always did with the UHK.

The reason that the Moonlander isn't getting a complete victory over the UHKv1 is because of it's usage of an allen key to set up the tenting feet. If I were able to flip out the feet without a tool then it would be ideal, as the UHK's feet don't have a ton of adjustability, but they were *fast* and easy to deploy from their flat state.

I do worry sometimes about the Moonlander's cables coming out of the case, but I've been carrying it back and forth inside my bag of holding for many trips already and they have never budged an inch outside where I stored them. (That being, in between the two Moonlander halves and folded up.)

# Oryx, Wally, and the Trainer

> aka the Moonlanders 'Ecosystem'

## Firmware flashing (Wally)

Flashing takes a lot of time compared to what I was used to with the UHK.

Moonlander: download/select a file to flash, press reset button with a paperclip, wait for a good chunk of a minute.

UHK: hit "Save to Keyboard", wait 1 second.

I think the UHK wins in terms of speed and ease of configuration, but I don't really count any points off since I have not actually needed to change my firmware since getting to a comfortable layout.

## Web layout interface (Oryx)

While I do like the web-based interface and it's ability to share layouts with a link, it didn't have the features I needed for which I had to fork my own QMK for.

It also wasn't superb at conveying the RGB coloring of the keys since the edges would blur together more in the web view than on the real thing. (I'm using the black version, and colors could shine through the lettering as well which was not shown on the web view.)

## Training

What really takes the cake though it the ability to use a trainer on the web with a live preview of your layout.

Without the ability to see my layout and layer state in real time I don't think I could have reached this level of proficiency nearly as quickly as without it. I would have loved to have a similar system while I was learning the UHK layout for the first time.

# Room to improve

## The big red button

One major complaint of both myself and my advisor (as we both got Moonlanders) was that the red buttons were terribly squishy.

I realized this was due to the stabilizer bar not being bent far enough away from the keyswitch base, resulting in the stabilizer bar pushing back in a spring-like profile which did not allow the keyswitch to actuate the same way. Simply removing the stabilizer bar was a good solution for us both.

## Add grooves to the thumb cluster tightening bolts

The bolts used to hold the thumb clusters at an angle are smooth, unlike the ones holding the feet in place. Perhaps this is because most people don't have the required finger strength to tighten them even if they were grippable, but I don't see a reason to make two bolt heads smooth and two bolt heads grippable if we're gonna need to take out the allen key every time anyways.

## Orientation of the carrying case

I cannot overstate how many times I've pulled the carrying case out of my bag, and then tried to un-velcro the wrong side. It feels like the classic USB problem, where you can't tell which way is up until you fail once. The strap which holds the two halves of the case looks the same on both sides as well.

Making the top and bottom sides more distinctive isn't a huge task, and I think it would be awesome to spend an extra dollar just to print the Moonlander's logo on the top side of the case.

# Overall, one month in

Now that I've tried it out and gotten familiar with it, I don't think I'd hesitate to order one if I needed to again. I've really enjoyed the typing experience, and it checks basically all the boxes I need to use it as a daily driver without the need for a mouse.

As usual, I'll update and add to this post in the future when any of my opinions change or new developments occur.
