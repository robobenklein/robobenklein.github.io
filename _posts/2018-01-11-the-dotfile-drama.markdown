---
layout: post
title: The Dotfile Drama
modified:
categories: dotfiles
description:
tags: [linux, github]
image:
  feature: code_blend_tile.jpg #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: cat-bgs/hex-parallel-tri.png #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2018-01-16T20:47:32-05:00
---

Oh gosh what happened to my configs...

I swear they're around here somewhere.


Now a lot of power users already know the question, "What do you use to manage your dotfiles?"

But a surprising amount of people who spend time customizing their dotfiles don't know about the numerous tools that are available to help you manage them.

Git is obviously a very popular backend for these tools, however you don't need to be super experienced with it, as there are a lot of tools that simplify the experience and can do a lot for reducing the amount of work you have to do managing them yourself.

I used to be in that position.

Originally I had my git repo in `~/code/configs/` and I would just manually symlink or hardlink out the configs I needed for a specific system.

I spent way too much time doing the symlink dance on new systems, or updating the changes on all the systems when I would fix a small bug.

So my first idea: make a shell script that will do the setup for me. This was a good idea in theory, however [my execution was *very* poor](https://github.com/robobenklein/configs/blob/e523ef92bdfe146d7759b82d27092d6901a6d595/get-my-omz.sh) since I didn't spend that much time on design.

This script was not idempotent in any way, meaning I still had to make manual edits whenever I had to fix a partial install.

It also did not do setup properly on graphical vs non-graphical systems. This was something that was important because I had GUI tools configs alongside my standard shell dotfiles.

## Looking for a solution

At first, I started browsing for solutions, some of the first few resources I found online:

 * [dotfiles.github.io](https://dotfiles.github.io/#general-purpose-dotfile-utilities)
 * [Webpro's Awesome List](https://github.com/webpro/awesome-dotfiles#tools)
 * [ArchWiki on Dotfiles](https://wiki.archlinux.org/index.php/Dotfiles)

## Trying YADM

At first I tried YADM, which was working well until I got to the per-device filters.

I also happen to keep my Team Fortress 2 configs in the repo as well, since "hey why not just VCS everything right?"

These are stored on a separate drive, mounted in my home at `~/unhexium/`, but obviously I don't want that folder being created on the non-graphical systems. With YADM there wasn't enough configuration for me to change the behavior to how I wanted it.

The other aspect that I didn't like so much was the fact that YADM used the home directory as the primary git repo, meaning I couldn't rename paths or files to make them easier to edit or see inside the repo.

So after a few days of trying it out, YADM wasn't for me.

## Trying [Dotbot](https://github.com/anishathalye/dotbot)

I won't go too much into what Dotbot does, you can read that on [it's page](https://github.com/anishathalye/dotbot), but Dotbot is what I think I'll stick with.

It uses a YAML or JSON configuration file, which I really appreciate because it makes the system very tunable to individual needs.

It works as a submodule with a boot/install script that's also idempotent.

Along with that, it supports the use of custom commands to be run, which makes it easy to incorporate other submodules into the repo. (For example, I have antigen as a submodule that gets initialized with the install script.)

So now even if Dotbot doesn't support a feature I want, I can just code a new plugin and dotbot can pass all the information needed to it! Plus, it's Python based and is version agnostic!

So since Dotbot covers all my use cases well and is still very flexible, I think I'll be sticking with it for the long run.

As I'm still getting everything tracked, you can follow my dotfile adventure from my github repo, for whatever reason you'd want to do that...

[GitHub.com/**robobenklein**/**configs**](https://github.com/robobenklein/configs)
