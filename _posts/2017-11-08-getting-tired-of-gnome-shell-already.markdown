---
layout: post
title: Getting Tired of Gnome Shell Already...
modified:
categories: ubuntu
description:
tags: [gnome, ubuntu, linux, gui]
image:
  feature: 17-10-25-screenfetch.png
  credit: My Desktop as of October 2017
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2017-11-08T23:53:16-05:00
---

It's only been a month. I'm already tired of Gnome Shell.

Man, I wish I had Unity back.

But for now, I guess that's not gonna happen. (I prefer support and available resources to continuing to use a deprecated piece of software, so let's pretend Unity was already sliced and diced for this article.)

Gnome Shell has had a number of issues in 17.10, hopefully getting fixed in 18.04. But for now, while I'm on 17.10 and fighting with a number of non-gui related issues, I just want a good desktop experience that I can get work done with.


### First act of business:

**Install the non-Ubuntu Gnome Shell**

The first thing I did was install the normal Gnome Shell instead of the Ubuntu packaged one, to get those system-installed plugins out of the way and start to set things up how I wanted them to be.

Since I'm on Nvidia and their propreitary (bleck) drivers, I'm sticking with X11, so I won't be touching anything Wayland-related here.

Once installed, literally just browsed through the Gnome Extensions site and hoped that anything I wanted would install without having to modify the code myself. (There were a few plugins which don't work on 17.10 that I wish I could have used as of writing this.)

### Live unsatisfied for a month.

For about a month I lived and tried to get used to using Gnome, after giving up hopes and dreams of being one of the cool i3 users or going back in history to Gnome 2/Classic. (How tiling users manage to remember their window management shortcuts all the time is beyond me.)

## I couldn't stand it.

Gnome, I love what you're trying to do here, but it's just not working out between us...

Maybe now that Canonical has joined your forces you can get something better pushed out in the coming 5 months.

# Making modifications

### Centering/forced positioning of child/parent windows:

Gosh, they should make this setting available in the GUI, I mean, that's their job isn't it? To put stuff in the GUI?

Fix: [askubuntu.com/questions/972276/how-do-i-move-child-windows-without-moving-or-minimizing-parent-in-ubuntu-17-10](https://askubuntu.com/questions/972276/how-do-i-move-child-windows-without-moving-or-minimizing-parent-in-ubuntu-17-10)

### (Proper) Dash to Dock

I know Ubuntu pushed their own version, but really, it's just too hard to compete:  
[extensions.gnome.org/extension/307/dash-to-dock/](https://extensions.gnome.org/extension/307/dash-to-dock/)

### UI Animation Speed

I'm on a fast computer, I like to work fast, I switch tasks even faster, I guess I'm just impatient.  
[extensions.gnome.org/extension/277/impatience/](https://extensions.gnome.org/extension/277/impatience/)

### Activities options

More options is (almost) always a good thing.  
[extensions.gnome.org/extension/358/activities-configurator/](https://extensions.gnome.org/extension/358/activities-configurator/)

### NetworkManager integration

Definitely not working like it should.

Waiting on some help with this one: [askubuntu.com/questions/974549/gnome-show-network-manager-connections-not-just-ssids](https://askubuntu.com/questions/974549/gnome-show-network-manager-connections-not-just-ssids)

### More search results

Open the activities overview and search for something generic, ex. 'set', I only ever get 5 results, and can't show more.

There's got to be a fix for this somehow, I mean, they've got room for search results from other timezones, software which isn't even installed yet, and passwords, but there isn't even a "show more" button for the primary application search.
