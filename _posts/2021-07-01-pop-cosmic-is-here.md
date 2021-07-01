---
layout: post
title: "Pop! Cosmic is here"
date: 2021-07-01 # date of publish (sorting value)
created: 2021-07-01 # date of creation (shown value, defaults to `date`)
modified: 2021-07-01 # date last updated (shown if different than created)
categories: linux
description:
tags: [pop_os, linux, gnome, software]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: false
---

And so I upgraded from Pop 20.10 to 21.04.

Fortunately there were no technical problems during the upgrade, however upon being greeted with the new Cosmic desktop I was not happy...



# Ruining an existing popular workflow

Immediately upon greeting I note that the following expected actions no longer operate as desired:

 - `Super`: should present me with Gnome Shell's 'Activities' view, in which I can do **ALL** of:
   - Change & view workspaces
   - Select or move application windows between monitors or workspaces
   - *Start typing to start new applications*
 - `Super+<number>`: should start applications from my favorites or switch to open windows (fixed by using the original Dask to Dock)

You have an option to change `Super` back to the "Workspaces" view, but you still cannot start new applications by typing from there.

It appears that a [huge number of other users](https://github.com/pop-os/cosmic/discussions/95) were also upset at how these related tasks had been split into separate areas unnecessarily. I agree with the majority here, the *single-tap* keybind that allowed access to multiple, related controls was incredibly important for efficiency and ease of use.

There have been **many** attempts to bring attention to this, but it was still not brought back:

- In the Cosmic repo:
  - [pop-os/cosmic/issues/18 "Please maintain application search in workspaces view"](https://github.com/pop-os/cosmic/issues/18)
  - [pop-os/cosmic/issues/85 "Workspaces view does not search apps"](https://github.com/pop-os/cosmic/issues/85)
  - [pop-os/cosmic/pull/70](https://github.com/pop-os/cosmic/pull/70)
  - [pop-os/cosmic/discussions/95 "Search has been removed from the "Workspaces view". Was it really necessary?"](https://github.com/pop-os/cosmic/discussions/95)
- [pop-os/beta/issues/169 "Automatic Search on typing in overview / workspaces view gone"](https://github.com/pop-os/beta/issues/169)
- [pop-os/shell/issues/995 "Feature parity of launcher with gnome activities overview search"](https://github.com/pop-os/shell/issues/995)

Frankly, until the problem of the split Workspaces and Applications shortcuts is fixed I simply cannot imagine using Cosmic.

Just look at some of these responses: (all excerpts from above links)

> Please don't break people's existing workflows.

> I also would love this feature to remain.

> @jmbuhr made a great point: starting to type should be considered enough intent to switch to the applications tab.

> Workspace allows me to see all my apps, what is on the app, which monitor it is on, and allows me to quickly switch to another application, move it to another screen, or search and open a new app/window if I don't see it.

I think that last [TLDR description by Arthur Vardevanyan](https://github.com/pop-os/cosmic/pull/70#issuecomment-863611629) really hit the nail on the head. It is important for the two functions to be part of the same workflow entrypoint.

# Slow and ugly

I spent a lot of time configuring my desktop, so just about any changes were going to cause problems, but I really wonder why some of these changes weren't solved before release.

### The dock can't be made transparent

It also doesn't match the top bar colors **at all**, in fact it looked quite ugly.

{% capture images %}
  /images/2021-07-01/2021-07-01_04-05_1.png
  /images/2021-07-01/2021-07-01_04-05.png
{% endcapture %}
{% include gallery images=images cols=2 caption="Which do you prefer?" %}

Honestly I far prefer Dash to Dock's ability to customize, the Cosmic dock is just stuck with almost no options to change it's look or feel. The latter image is **after** I tried everything I could to change the settings to how I wanted it. I was unsuccessful, dock transparency was something I took for granted before today.

### Painfully slow transitions

Animations to switch into "workspace view" were **painfully** slow, I would make an attempt to start managing windows across workspaces before the transition even finished.

This is easily solved by adding back in [the Impatience Gnome Extension](https://extensions.gnome.org/extension/277/impatience/). At this point it's a requirement for me, I cannot have my inputs blocked while waiting for eye candy.

### The "applications" view looks ugly AF

I understand they wanted to use a solid background color to increase text readability, but frankly I find it annoying and ugly. When I want to open a new application I want to see what I currently have open, in Gnome Shell I could press Super, *visually quickly identify what I already had open*, then immediately start typing the name of an application if I didn't find it.

When entering into Cosmic's application view it immediately obscures **everything** on screen, making me have to close it out, switch to workspace view, close that out, then re-open the application view...

Immediate "type to search" in Gnome Shell's Activities is **underrated** and needs more respect. You don't realize what you have until it's gone.

# Back to Gnome Shell

At this point I could not be bothered to deal with reconfiguring my setup on top of the extra Cosmic layer.

Moving back to Gnome Shell was the correct decision for me.

## Why Gnome Shell still wins by a landslide

- Dash to Dock is better and more configurable than the Cosmic dock.
- The activities overview works to perform all the different tasks that for some reason are separate in Cosmic:
  - Start applications & find currently open ones
  - Move and manage windows across workspaces
- Dash to Dock remains in place and provides keyboard shortcut access to those applications
- Gnome Shell keeps the entire desktop and open windows visible as long as possible in the steps leading up to opening a new application

There is a lot of additional functionality I depend on extensions for, which don't work well in conjunction with Cosmic.

The little functionality that I got from the tiling utilities and some better default keybindings can just be added back into Gnome Shell by myself manually in less time than it would take for me to rewrite source code to fix the problems I had with Cosmic.

The Pop Shell extension is in my opinion the better direction in terms of changes away from the default Gnome Shell. Cosmic feels like it took it too far, and didn't have enough daily usage testing to reveal all the different problems that a diverse userbase will reveal.

## Restoring the comfort zone in Gnome Shell

Besides the upgrade resetting all the Gnome Shell extensions, I also found that many of my keyboard shortcut changes were lost. Many of these I really liked from Pop Shell, which is an improvement over stock Gnome Shell IMO; I wish Cosmic kept improving the keyboard shortcuts instead of making them worse.

Changes I made once again:

- `Super+Right Click`: fixed with Gnome Tweaks: holding Super and Right Click allows the resizing of windows without having to target the very edge of the window for a control handle.
- `Ctrl+Super+Up/Down`: workspace switching up and down.
- `Super+<Direction>`: change focus between windows, default bound to other actions, re-enabling these required the Pop Shell extension to be enabled.
- `Super+m`: toggles maximization state for the current window.
- `Super+Escape`: lock the screen. (vs. the default of `Super-L`, now is used in VIM directional window focusing)

After keyboard shortcuts were corrected, I had to restore all the other little customizations I don't even remember making.

### My top bar is opaque?

How did this happen? I can't even remember what changes I made to do that...

[Here's a relevant extension](https://extensions.gnome.org/extension/1708/transparent-top-bar/) but it still doesn't feel right...

[This one is configurable!](https://extensions.gnome.org/extension/2588/fully-transparent-top-bar/) And it has all the options I needed to feel back at home.

Previously I didn't have to use an extension for this, but I like the options the extension gives me, so I'll stick with that now.

# The Cosmic mobile experience

> TODO

I haven't yet upgraded my mobile systems (two System76 laptops) to 21.04, but after I've had a chance to test those new trackpad gestures I will add that feedback here as well.
