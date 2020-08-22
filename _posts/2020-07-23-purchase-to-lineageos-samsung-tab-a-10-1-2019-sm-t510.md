---
layout: post
title: "Purchase to LineageOS: Samsung Tab A 10.1 (2019) SM-T510"
date: 2020-07-23 # date of publish (sorting value)
created: 2020-07-23 # date of creation (shown value, defaults to `date`)
modified: 2020-07-23 # date last updated (shown if different than created)
categories: android
description:
tags: [android, lineageos, samsung, hardware]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: false
---

Today was the day I gave in and decided I needed a screen larger than my phone, but smaller than my laptop.

After a few months of research, I really wanted something with an amoled screen, but the newest "Tab A 10.1 (2019)" (I'll just say 'T510') checked off enough of the required boxes that it's sale price worked even with a non-amoled display.

Of course, part of the search required being able to run an open custom firmware on it, and thankfully LineageOS has been ported to the T510.

While this is mostly for my own reference when I end up soft bricking and reflashing, I'm expecting there will be a lot more people later on with similar predicaments.


# On first boot

When I opened and checked the T510 in-store, I noticed there wasn't an OEM unlock immediately available in the developer options. Online there was a variety of information about the 7-day timeout for it, but since I am the first and only owner (meaning the device was completely unregistered) that restriction was readily bypassed without having to sign in to an account or connect to any networks.

Turns out there's a strange process involved in unlocking the device that required a computer in order to boot to the unlock prompt screen by holding both Vol Up & Down.

Even though the OEM unlock said it worked when booting the device, it still didn't accept unsigned image flashing...

For some reason, toggling the OEM unlock only truly worked after being connected to the internet and installing all the latest Samsung updates.

# Getting TWRP to stick

After a few rounds of attempts at getting the bootloader unlocked, it was finally successful and I was able to flash `recovery`, `boot`, and `vbmeta` as in:

```
sudo heimdall flash --RECOVERY /mnt/stor/f/android/twrp/recovery.img --BOOT /mnt/stor/f/android/twrp/boot.img --VBMETA /mnt/stor/f/android/twrp/vbmeta.img --verbose
```

The first time I did this I didn't flash or install any other images before I let it reboot to system... *that was a mistake*.

On the very first boot of TWRP you need to make sure that a stock partition isn't going to cause Knox to trip again. Personally I was able to install LineageOS and multidisabler zips in the first TWRP boot before rebooting, and that was what got past the boot protections.

# About Knox / KG: Prenominal

https://forum.xda-developers.com/showpost.php?p=75360965&postcount=22

I found this while running into the `Only official released binaries are allowed to be flashed` error.

Fortunately or unfortunately, this failed to install because it couldn't mount at `/system`. (I suspect it was supposed to be `/system_root`, like the multidisabler zip package used)

# Post-setup: Crashing Apps and no file access

If you can't download files from the browser or certain apps crash on startup, you might have forgotten to wipe the internal storage like I did.

Back to TWRP once more to wipe 4 partitions: Dalvik, Cache, Data, and Internal Storage.

# Failing to enable encryption

The OS was working now, and I installed some apps and played some games, and all seemed well.

Now I figured I wanted to start using the T510 as a daily device, and my personal requirement for any device that leaves my house is that it's encrypted.

Unfortunately on trying to enable encryption, the system begins the process and immediately reboots back to system without doing the encryption.

This problem is taking a lot of effort to dig into to solve.

> Work in progress...
