---
layout: post
title: "Why Android Gesture Navigation Sucks"
date: 2023-03-26 # date of publish (sorting value)
created: 2023-03-26 # date of creation (shown value, defaults to `date`)
modified: 2023-03-26 # date last updated (shown if different than created)
categories:
description:
tags: []
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: false
---

**Why** can I not get used to Android's gesture navigation? **Why** have I still been using 2-button navigation up until [AOSP broke it](https://calyxos.org/news/2023/03/23/march-update-bugfix/#navigation)? And **why** does gesture navigation actually perform **worse** in terms of user experience?

Well, I haven't been able to run a proper user study on it yet, but in short, *interactions that require user input delay are bad*.

If you ever work in UI/UX, please NEVER use *speed of interaction* or *timing delay* as an input. You should *never* assume the speed at which users should be required to interact.


So, why does Android's gesture navigation suck in particular? It's because viewing the application switcher requires an **indeterminate delay in user input**.

As a refresher, here are the system navigation options, in order: Three Button, Two Button, and Gesture.

{% capture images %}
  /images/android-sysnav/threebutton2.gif
  /images/android-sysnav/twobutton2.gif
  /images/android-sysnav/gesture2.gif
{% endcapture %}
{% include gallery images=images cols=3 caption="Android 13 system navigation animations" %}

For gesture navigation notice specifically the part:

> Swipe up and hold to view recent apps

And note how this causes many usability frustrations when you want to be **fast**:

- If you don't hold long enough, you're sent back to the home screen
- There's no binary indication *when* you can *stop holding*
  - (You can configure a vibration when the timeout completes, but vibration is **not** acceptable as an only means, devices may not have it in hardware or turned on)
  - The only indication of "action complete" is when another app shows up from the left: this is not binary as the animation is *not at all aligned* with when the action timeout is reached
- There's no option to change the timeout: you are forced to be "average" in terms of human speed
  - Faster users or powerusers are now slower to switch apps
  - Slower users must "get good", and *must* speed up for accurate inputs

And if you're **slow**:

- Choosing between "home" and "switcher" actions takes planning or unnecessary familiarity (have you ever seen a new smartphone user try gesture nav?)
- Older or less physically speedy users will often accidentally trigger switcher when intending for home.


# Why did 2 button navigation still work?

Because it didn't rely on *time* as an input factor:
- Home: touch and release
- Switcher: touch and slide up

Note that neither of those actions depends on *timing* in any way, it starts on press down, as soon as the finger either moves or leaves the screen the input is registered and the action is known.

# Why 2 buttons instead of 3?

3 button navigation always placed one of the 3 Android navigation actions in a "no-good" touch zone of a mobile phone's display.[^bad_3button] Even one of the 3 extremely commonly used navigation actions being in a bad spot hinders the accessibility.

With 2-button, all three navigation actions could be located within the comfort range of a user's thumb, which is even more important as phone screen sizes *keep increasing*, which I also do not like, but that's a different issue.

# Why don't more people care?

There's been plenty of research into humans waiting for computers,[^computer-perception-delays] however most of this research is behind *waiting on the computer*, and does not really cover the case when users are *actively interacting* like having a finger moving across the screen.

While many people won't consciously notice, we already have interfaces like [Zed](https://zed.dev/) and [Alacritty](https://alacritty.org/) that are advertising their response latency in milliseconds. Real humans can feel the difference[^input-latency-delays] already below a hundred milliseconds, but often can't immediately explain why a system might feel slow.

# Why write this post?

To answer the question at the beginning:

> **Why** can I not get used to Android's gesture navigation?

When AOSP / Google broke the 2-button navigation I had been using, I switched to gesture nav thinking it shouldn't be too difficult to switch, but I was wrong. Immediately after switching I noticed how often I would swipe too fast and end up "pressing the home button" instead. This got really annoying very quickly and forced me back to 3-button for the time, which has it's own problems I wrote about above. (Especially on the Motorola Edge, which has a giant screen and extreme edge curves, making the other navigation experiences even worse.)

# What about iOS?

- iOS doesn't even have the option to change navigation styles!
- "Reduce motion" accessibility option doesn't speed anything up or get rid of transitions, it just replaces them with fade in/out, which makes it even more difficult for me to tell how the transition is progressing.

Although I have not tested this myself, Apple's site notes that iPad navigation is the same gesture controls as the iPhone, but I'm assuming this is the same situation that an Android tablet would have: a lack of haptic feedback. Without this feedback the app switcher requires *indeterminate delays* and thus I think contributes to a poor user experience.

# Other related problems

### Gnome Shell and animation speed

The whole reason behind why the [Gnome Shell Impatience extension](https://extensions.gnome.org/extension/277/impatience/) exists is because the default animation speed was too slow for speedy users.

This is one half of the issue with Android gesture navigation, where only the faster users are affected: speedy users must wait for the animation to complete before new inputs can be accepted.

Android's case is worse, because it applies to *both* slower and faster users.

### High-latency mouse movement or remote desktop

While high latency alone is not often enough to cause the same issue as Android has, adding **jitter** results in a very similar problem. With a jittery connection the timing factor is again *indeterminate*, as in, "how long do you wait for the mouse to stop moving?"

Many remote desktop clients don't give you any feedback about inputs that are in-flight to the remote end, just as the Android gesture navigation doesn't give you any feedback about how long you've waited for the

To prove my point that they are similar issues, notice how the high jitter connection also affects *both* the speedy users and the less acclimated users: speedy users must wait for the system's delay, and less accurate or acclimated users must spend additional effort re-positioning the mouse when they don't get the movement or input right the first time.

I suggest that both Android gesture navigation and distant remote desktop connections suffer from **human-indeterminate delays**, which I personally find to be extremely annoying and frustrating compared to other UI/UX shortcomings.

Both situations can be improved simply by giving the human operator a *clear and obvious* indication of the event timing. (When the action timeout occurs for Android, and when all inputs have been processed on the other end for remote desktop)


---

# Footnotes

A site being listed here does not mean I think it's a great site, just that it is relevant and might have useful information if you are looking for more.

I suggest using a tool like Privacy Badger, and you might want to use an adblocker.

[^bad_3button]: 3-button navigation doesn't fit the "thumb zone":
    - "Mobile Touch Targets: Actual Device Handling Debunks Assumptions" [www.cssneed.com/thot-MobileTouch.html](https://www.cssneed.com/thot-MobileTouch.html)
    - "Modern Touch-Friendly Design" [addyosmani.com/blog/touch-friendly-design/](https://addyosmani.com/blog/touch-friendly-design/)
    - "Does Your Mobile Site Pass the Thumb Zone Test?" [www.volusion.com/blog/does-your-mobile-site-pass-the-thumb-zone-test/](https://www.volusion.com/blog/does-your-mobile-site-pass-the-thumb-zone-test/)

[^computer-perception-delays]: Humans waiting on slow computers
    - SE post about long or unnatural delays [ux.stackexchange.com/questions/82485/whats-the-longest-acceptable-delay-before-an-interaction-starts-to-feel-unnatur](https://ux.stackexchange.com/questions/82485/whats-the-longest-acceptable-delay-before-an-interaction-starts-to-feel-unnatur)
    - "Handling Delays" [www.uxmatters.com/mt/archives/2018/07/handling-delays.php](https://www.uxmatters.com/mt/archives/2018/07/handling-delays.php)
    - "Response Times" [www.humanfactors.com/newsletters/response_times.asp](https://www.humanfactors.com/newsletters/response_times.asp)

[^input-latency-delays]: Measurable and perceptible delays in user interaction lead to a difficult-to-diagnose and worse experience
    - Typometer: a tool to measure visual latency from text editors [pavelfatin.com/typometer/](https://pavelfatin.com/typometer/)
    - CHI15 paper on touch latency: [www.tactuallabs.com/papers/howMuchFasterIsFastEnoughCHI15.pdf](https://www.tactuallabs.com/papers/howMuchFasterIsFastEnoughCHI15.pdf)
    - Dan Luu's blog post about input latency: [danluu.com/input-lag/](https://danluu.com/input-lag/)
