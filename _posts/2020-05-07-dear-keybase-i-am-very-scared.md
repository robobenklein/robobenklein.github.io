---
layout: post
title: "Dear Keybase, I am very scared."
date: 2020-05-07 # date of publish (sorting value)
created: 2020-05-07 # date of creation (shown value, defaults to `date`)
modified: 2020-05-07 # date last updated (shown if different than created)
categories: security
description: "Zoom just acquired Keybase, and that doesn't make me feel too great about it..."
tags: [keybase, internet, software]
image:
  feature: 2020-05-07/keybase-zoom.png
  credit: Keybase Article
  creditlink: https://keybase.io/blog/keybase-joins-zoom
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
---

[Read Keybase's blog post here.](https://keybase.io/blog/keybase-joins-zoom)

If all you read is the intro text, take this quote:

> A bought-out company can never be trusted more than the parent company.

And unfortunately, Keybase, a company which I originally held in *extremely* high regard, just got bought by one which I personally have strong negative prejudice about.

And thus marks the downfall of Keybase's trust factor.

If this were the other way around: If Keybase acquired Zoom: I would be ecstatic, because I truly think Keybase has the ability to create a great end-to-end complete platform for all kinds of communication, but not quite the best possible platform, as you'll see lower down in this post.

Though luckily, not all is completely lost:



Because Keybase is such a security focused company they had the foresight to open source all their client applications and they took a very good approach to building the social network of trust.

So even though Keybase as a company may be compromised now, I still feel safe enough that I'm not going to immediately uninstall their apps from all my devices or revoke my personal device keys.

However for those Keybase users who were storing their private key(s) on Keybase's servers, I recommend you **stop using all encryption / decryption functions on the Keybase website.**

Someone else already beat me to explaining how hosting your keys on Keybase can become a security threat: [blog.filippo.io/on-keybase-dot-io-and-encrypted-private-key-sharing/](https://blog.filippo.io/on-keybase-dot-io-and-encrypted-private-key-sharing/)

But what's also important to note is that nothing currently stored on Keybase is at risk, though I will always recommend using Keybase's account lockdown mode to truly ensure a compromised Keybase website cannot accidentally cause harm.

# It's not about tech, it's about Trust

For most of the time Keybase has existed I've considered it an amazing platform that's fixed almost all the issues I had with turning public key crypto into something more social and friendly to newcomers, but even after all these years, there's still one thing I think the network was missing:

## Keybase needs Federation

Essentially, the users need the ability to run their own Keybase servers, including file storage, encrypted git, chat, calls, you name it. If Keybase pushes a feature, there should be a method to use that feature in a completely segmented network without depending on the Keybase servers.

And please note I am *not* talking about depending on Keybase servers just for identity purposes, I want to see users able to bypass the [250GB free user storage quota](https://book.keybase.io/docs/files#storage) or host their own chat and audio/video call server. They should be able to discover other and more relevant users by finding users on the same federated Keybase instance as themselves. In a perfect world there wouldn't be any reason not to join Keybase, if you don't trust anyone but yourself you can read every line of source code and run the federated Keybase instance on hardware you own.

I believe that federation of the Keybase network is directly in line with the desires of many crypto nerds, Keybase users, and fediverse members, and keeping Keybase.io as the default public node in the federation would still allow Keybase to operate as the for-profit company that it is.

## Federating Keybase

Alright, I've said what I want, but how are we going to get there?

First, I want to get an official response from Keybase the company on the topic of opening up the serverside software for federation.

There are apparently already discussions on this going back to 2014:

 - [keybase/keybase-issues/issues/162: Federation](https://github.com/keybase/keybase-issues/issues/162)
 - [keybase/client/issues/6374: "Server?"](https://github.com/keybase/client/issues/6374) - this issue is where a lot of the reactions are being posted

And in some related discussions I can find some not-so-great previous decisions being made that make me think Keybase might not be so open to the idea:

 - [On the topic of Keybase being a central authority on usernames](https://github.com/keybase/keybase-issues/issues/166#issuecomment-47928476)
 - [Using "secret sauce" to fight spammers and scammers is not a good approach...](https://github.com/keybase/client/issues/6374#issuecomment-477285994)

If you find more postings by Keybase employees or official statements please let me know so I can add them here.

## Alternatively, Forking

In the case that Keybase ends up being completely unresponsive or rejects the idea altogether, my personal opinion is that the open source community should get together to implement our own server backend.

I expect a lot of federation conventions would be taken from projects like Mastodon, especially the issue of username uniqueness, so it seems at first to be a project that would mostly involve replicating functionality directly from Keybase's APIs.

With an open, community-backed server implementation, we should be able to minimize the security risks by using the established, peer-reviewed, and open-source Keybase apps/clients as a fork source with just a few line changes to switch API endpoints to a user-defined address.
