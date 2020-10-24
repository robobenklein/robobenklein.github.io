---
layout: post
title: "KeyField: a dream of a Federated Keybase"
date: 2020-10-24 # date of publish (sorting value)
created: 2020-10-24 # date of creation (shown value, defaults to `date`)
modified: 2020-10-24 # date last updated (shown if different than created)
categories:
description:
tags: []
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: false
---

My own article addressing my concerns of Keybase's acquisition is still on the first page of Google results for "keybase federation" so clearly nobody's gunning for that potential marketing niche, which makes sense because it's not easy to turn a profit from a federated software.

Which is why I'm going to lay out my plans here, even if I never realize them, perhaps someone else can pick up my slack.

For now I'm naming this dream of mine KeyField, because it's not just one *base* anymore, it's like a starfield. And if I ever get to the point where I'm generating graphs of users and homeservers I think it'll live up to it's name quite quickly.

But until then, let me explain this dream of mine:


# A Federated Keybase

I'm going to keep referring to Keybase because I hold it in very high regard and it has shown to be at least somewhat successful, so it serves as a good comparison point.

I also refer to Keybase specifically because it's base set of features are what I want to implement first:

 - Chat between users
 - Chat within secured groups
 - Chat within public groups
 - Profile / User discoverability
 - User verification and authentication
 - Social chains of trust

And when I speak of federated I refer to platforms like Matrix and Mastodon, where a user joins a homeserver which federates with other homeservers.

## KeyField Homeservers

KeyField Homeservers will be the foundation of the backbone for the network, they will serve a few roles:

 - Federate messages between users
 - Distribute messages for groups
 - Host a public profile of a user for discovery
 - Keep data in cache so that users do not need to keep their own devices online 24/7
 - (down the road) store the user's encrypted files for sync
 - (maybe?) relay voice/video data or setup p2p connections

## KeyField user accounts

Notably I do not think that user IDs should be tied to a specific homeserver, I not like that Mastodon and Matrix usernames always include the domain of the homeserver, but I understand why it's needed.

Instead of linking accounts to a specific homeserver I'd like to find a method that allows a single user, identified by their account/master key, to move between homeservers at will.

This might come at the cost of discoverability though, since a PGP key fingerprint is always far worse for memorization than an email address.

I suspect I will end up with a hybrid approach, where the user ID is only needed to locate the profile, and once you add another user to your contacts it will save the key ID internally, and update the user ID upon receiving a verifiable update from the user's master key.
