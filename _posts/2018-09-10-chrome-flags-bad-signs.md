---
layout: post
title: "Chrome Flags: Bad Signs"
date: 2018-09-10 # date of publish (sorting value)
created: 2018-09-10 # date of creation (shown value, defaults to `date`)
modified: 2024-03-31 # date last updated (shown if different than created)
categories: internet
description:
tags: [chrome, internet, software]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
---

Today, Chrome 69 arrived on my daily driver.

I was not impressed.

You've probably heard, the internet is all over how Chrome started hiding the `www` and `m` subdomains, and further obfuscating the URL by hiding the protocol in an ealier release.

Today, I was horrified by the **round** design that plagued my omnibar. Who came up with that idea? I'd like to let them know that the current design trend is **still rectangular**, please do not put circles into my otherwise square-cornered UI.

However, today was not an uncommon occurrence for me, there have been multiple changes made to the Chrome defaults that I've disagreed with.

Luckily, most of these changes have Chrome Flags associated with them, so I'm not moving browsers *quite* yet.

Let's go over those flags:


Here we'll break down these changes by going through the Chrome Flags I have set to counter default choices which I disagree with:

### Smooth Scrolling

If you're using a trackpad on X11, you most likely already have 1-to-1 postitioning support from the mouse. When I have pixel-by-pixel realtime translation from my fingers to the screen - I don't want that realtime user feedback to be delayed by the smoothing animation.

For discrete scrolling with a mouse, I still find that I prefer the response time without smooth scrolling. Perhaps if there was an option to speed up the smoothing of the action, perhaps I would have kept it enabled.

### UI Layout for the browser's top chrome

> Toggles between 1) Normal - for clamshell devices, 2) Hybrid (previously touch) - middle point for devices with a touch screen, 3) Touchable - new unified interface for touch and convertibles (Chrome OS), 4) Material Design refresh and 5) Touchable Material Design refresh. Enabling #upcoming-ui-features forces the Material Design refresh option. – Mac, Windows, Linux, Chrome OS
> #top-chrome-md

This is where the ugly new circle-based UI came into play.

The Hybrid and Normal layouts currently go back to the more familiar address bar. Hybrid has slightly more padding for touch-enabled devices.

### Overscroll history navigation

This one became really annoying as I had 2-axis touchpad scrolling, and the threshold for left/right to activate the history navigation was too small, so I changed this to disabled.

For some reason, `Parallax` seems to be non-functional on my machine currently, so I'm not really sure if that's an improvement.

### New audio rendering mixing strategy

> Use the new audio rendering mixing strategy. – Mac, Windows, Linux, Android
> #new-audio-rendering-mixing-strategy

With the Chrome 69 update this seems to have changed my workflow quite a bit.

Originally, it was possible to control each tab's audio output as a different source via PulseAudio. Now, I have to disable this flag otherwise Chrome will combine all the sources into one sink.

As a another recent change, Chrome now also deliberately switches to the PulseAudio 'fallback' audio device every time it opens a new audio stream. I'm not sure whether I like or dislike this feature yet, as it's changed my workflow, but perhaps this change will end up being welcome in a few weeks time.

### Autoplay policy

> Policy used when deciding if audio or video is allowed to autoplay. – Mac, Windows, Linux, Chrome OS, Android
> #autoplay-policy

Please, set this to either 'User gesture required' or 'User gesture required for cross-origin iframes'.

This has been one of the best quality-of-life improvements for general everyday web usability.

### Parallel downloading

> Enable parallel downloading to accelerate download speed. – Mac, Windows, Linux, Chrome OS, Android
> #enable-parallel-downloading

Just forcing this on should be self-explanatory.

### Mark non-secure origins as non-secure

This is a personal preference kind of setting. I currently have this set to 'Mark dangerous on form edits' as that fits my use case well. (There are still some sites which haven't been able to move to HTTPS yet...)

### Allow WebRTC to adjust the input volume (chrome v123.0)
> added to this post 2024-03-31
`chrome://flags/#enable-webrtc-allow-input-volume-adjustment`

I keep a very close eye on my input volume and closely monitor it in EasyEffects / pavucontrol, I've balanced my levels by hand and I don't want zoom or teams chats changing that!

## More Flags

I have many other flags set, but those remaining are all personal preferences and won't apply to most use cases.

If something's changed in a later Chrome version that makes one of these points irrelevant, let me know!
