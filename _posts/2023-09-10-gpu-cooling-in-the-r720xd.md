---
layout: post
title: "GPU Cooling in the R720XD"
date: 2023-09-10 # date of publish (sorting value)
created: 2023-09-10 # date of creation (shown value, defaults to `date`)
modified: 2023-09-10 # date last updated (shown if different than created)
categories: hardware
description:
tags: [dell, hardware, gpu]
image:
  feature: r720xd/bare.jpg #filename in images/ for post header
  credit: My server 'Haviland' #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

There is a good reason Dell didn't support GPUs in it's R720XD servers (I hope), but that didn't stop me from doing it anyways.

It started out with the Nvidia M40, which ran alright most of the time with the default cooling shroud, but upgrades were desired! So a P100 went in and now the system didn't even stay online due to the overheating card at idle.

Time for some good ol' homelab hackery.


Basic requirements for the 720 series to support GPUs of course had to be fulfilled, including 1100W dual redundant PSUs and both risers in place to feed the card with it's custom 8-pin power connector Y-wire.

Running the R720XD with either no shroud or the stock cooling shroud results in the P100 getting too hot and the system shutting down, which is super annoying. My guess is that Dell's firmware doesn't have support for the card since they don't support GPUs in this model anyways.

{% capture images %}
  /images/r720xd/stockshroud.jpg
{% endcapture %}
{% include gallery images=images cols=1 caption="The stock R720XD airflow shroud gives barely any air to the GPU" %}

So what can we do about it? Hack together a workaround!

# 3D printing a new airflow shroud

Looking at the original plastic shroud, it appeared to only send half of one fans airflow through to the middle PCIe slots. Obviously we want more air going to the card, so I had a friend use his fancy shmancy mechanical engineering skills to whip up a 3-part model to be printed on consumer bed sizes and standard plastics.

{% capture images %}
  /images/r720xd/prefit-attempt.jpg
{% endcapture %}
{% include gallery images=images cols=1 caption="First attempt with a spare chassis and the old M40" %}

After a revision or two to fix the dimensions, it was time to test it for real!

{% capture images %}
  /images/r720xd/realsystem.jpg
{% endcapture %}
{% include gallery images=images cols=1 caption="Actual deployment in a running system with the P100" %}

# Controlling the fan speed

Since Dell's firmware wasn't going to read the GPU temperature, gotta do it myself!

Using `ipmitool` and a complete hack of a shell script calling `nvidia-smi` & `sensors`, I simply sent commands to set the fan speed based on the maximum temperature available to all the sensors. I'm sure there is a better way to do this, but I really could not be bothered to swap out the ZSH script I left running as a systemd service...

Based on this graph, it's clear to see when I made these changes:

{% capture images %}
  /images/r720xd/1yeargraph.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Actual deployment in a running system with the P100" %}

Obviously my testing is entirely non-scientific, considering this server rack is just out in the garage and it's inlet temperature follows the weather. It is nonetheless a very interesting observation:

{% capture images %}
  /images/r720xd/havilandinlet.png
  /images/r720xd/havilandfan.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Haviland temperatures" %}

Considering this system has now been working without any problems since then, I call the project a success!

As the R720XD is nearing the end of it's life in the high-performance datacenter, I think it still makes a reasonable homelab server due to how easy it is to get one and how abundant parts and components are. Luckily it's not yet in the "no-go" territory of terrible efficiency like the 2950 and Rx10 series might be.

Just watch out for the power draw... 12 drives, two 130W TDP CPUs, and a 250W GPU certainly don't have a low idle wattage:

{% capture images %}
  /images/r720xd/havilandpower.png
{% endcapture %}
{% include gallery images=images cols=1 caption="Haviland power draw over the last year" %}

Considering this server alone has delivered over 120TB of content to users this year, I think it's made up for the cost of operation.
