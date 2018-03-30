---
layout: post
title: Nobody Uses cd Anymore
modified:
categories: linux
description:
tags: [zsh, linux, shell]
image:
  feature: features/cd-wasting-time-olivier.png
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2018-03-29T20:41:09-04:00
---

This article is due at least in part as a response to Olivier Lacan's post,

["cd is Wasting Your Time"](https://olivierlacan.com/posts/cd-is-wasting-your-time)
{: style="font-size: 120%; text-align: center;"}

After finding this post in r/Linux, I felt I agreed with the comments more so than the article. It's fairly obvious that most Linux power users rarely ever touch `cd` when working in their interactive shell, and Olivier's examples only made us cringe harder.

Take a look at the first few examples he gave of what a 'routine' shell use log might look like, and tell me that's really how you want to use your shell?

If you know me well, you've probably already heard of the slew of tricks I have up my `.zshrc`, but as it turns out, most of those tricks aren't really that tricky!


Here are a few major tips for simplifying your commute around your filesystems!

# Z (jump around)

We don't need any external dependencies for something as simple as a frecency-logging autojump command, do we?

Sure, I can understand if you would like the feature to open a GUI file browser somewhere, but 99% of the time I just want to go somewhere I am commonly or was frequently.

Z (or similar shell-scripted dirjumper) is a much better alternative for *many* use cases for a few reasons:

 * **It's a shell script.** There are no additional dependencies, requirements, or anything else to install. You don't need to apt install it like you might for autojump.
 * **It's still just a shell script.** You can bring it with you wherever you take your `.zshrc` (for example, in my configs git repo)
 * **It doesn't use another language like Python.** It'll be slightly faster and definitely take up less total install space.
 * **It's already in many frameworks.** For example, Oh-My-Zsh already has a version of Z bundled, just add one character to your plugins array!

Otherwise, Z works like you'd expect it to:

<script src="https://asciinema.org/a/SZuneF9aLcfA8gOpophSWSLVd.js" id="asciicast-SZuneF9aLcfA8gOpophSWSLVd" async></script>

You can find Z in various places:

 * Oh-My-Zsh plugin: [github.com/**robbyrussell/oh-my-zsh/plugins/z**](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/z)
 * Rupa's standalone plugin: [github.com/**rupa/z**](https://github.com/rupa/z)  for Antigen & friends *(note: not just for zsh! bash support as well)*
 * Or just download one and drop it into your local config folder

If you find you're still stuck on autojump, or don't have a jump plugin, that's perfectly fine, because I still have more tricks for you:

# Enable Zsh's Enhanced Globbing

One of the core strengths of Zsh is it's human-oriented options, such as command correction and improved completions.

Now, I'm not here to give a full tutorial, you can find a more complete guide by searching, or check out [this cool guide I found](http://reasoniamhere.com/2014/01/11/outrageously-useful-tips-to-master-your-z-shell/).

In short - enable the enhanced and partial globbing features if you haven't already. (commonly `setopt extended_glob`)

This allows you to go from normal shell expansion to something like this (with autocd enabled):

<script src="https://asciinema.org/a/wWb9Qpkc87rVLnmE3r0SqHpZ9.js" id="asciicast-wWb9Qpkc87rVLnmE3r0SqHpZ9" async></script>

Notice how I no longer have to even both pressing tab more than once! Just type in the least amount of information to get a unique path and Zsh will handle the rest!

There's a whole world of other globbing qualifiers, but there are too many to list here. Go take a look at the [ZSH manual on Expansion](http://zsh.sourceforge.net/Doc/Release/Expansion.html#Expansion).

# The *directory stack*

I really didn't understand the power here until recently, and I highly recommend learning to use this well.

When set up properly, (done automatically in many cases by zsh frameworks), you'll have an amazing tool at your disposal for keeping track of your current shell session's directories!

See for yourself:

<script src="https://asciinema.org/a/mhRr6oZZO9tTbEFo2UZEZgSGF.js" id="asciicast-mhRr6oZZO9tTbEFo2UZEZgSGF" async></script>

Here I'm using the `d` function that I have in my zshrc:

```
# unalias because OMZ had it set so that we couldn't pass args to `dirs`
unalias d                                                                              
function d () {                                                                        
  if [[ -n $1 ]]; then                                                                 
    dirs "$@"                                                                          
  else                                                                                 
    dirs -v | head -10                                                                 
  fi                                                                                   
}              
# adds zsh autocompletion for the function
compdef _dirs d
```

The numbers are likely already bound in your shell! Go ahead and try it out, command `dirs` will always show you your current directory stack in zsh list form.

## Afterword

Hopefully you'll find at least one of these tips helpful. If you find yourself using another method for everyday directory cruising, I'd love to hear about it, shoot me a link!
