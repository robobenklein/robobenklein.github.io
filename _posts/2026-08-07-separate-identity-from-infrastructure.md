---
layout: post
title: "We should separate identity from infrastructure"
date: 2026-08-07 # date of publish (sorting value)
created: 2026-08-07 # date of creation (shown value, defaults to `date`)
modified: 2026-08-07 # date last updated (shown if different than created)
categories: fedi
description:
tags: [fedi, fediverse, matrix, mastodon, internet]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: false
---

Here's my maybe-not-so-crazy-after-all idea: personal identity should be fully separate from infrastructure.

What am I talking about? I'm talking about the server part of a fediverse username (@robobenklein@fosstodon.org), the service provider part of an email address (@gmail.com), or the numerous other combinations of [username] on [specific service instance].

Infrastructure is what handles data, it moves messages, stores chats and media, and connects people, however infrastructure is something we *build* and something that inevitably *cannot last forever*.

Whether that be DNS registrations which are designed to expire, or physical servers which cost $$$ to operate, maintaining infrastructure is an ongoing effort that has far too many failure modes. Physical street addresses change, phone numbers are reused, infrastructure of all kinds naturally is replaced because it uses space and resources.

Meanwhile, *identity* is something relatively permanent, there are no costs associated with *being me*, and while eventually I will die, my name didn't stop referring to me just because the server hosting my identity stopped operating.



As a digital world example, "robobenklein on Keybase" is an identity: it tells you who, but unfortunately depends on Keybase. Just "robobenklein" (while relatively unique) is insufficient to uniquely identify me: impersonators, fakes, mistakes, and alternate platforms are just a few problems.

So there are a few problems to solve:

1. How to find the real "robobenklein" you're looking for?
2. How does infrastructure avoid being abused or misused?
3. How does identity persist while infrastructure churns?

# Identity Verification

When you hear "Identity Verification" in this day and age your mind probably skips to uploading a government ID to a platform. That system is inherently flawed for a number of reasons, from privacy and anonymity to centralization of power.

In the real world humans don't operate this way, they operate on trust. If I meet one person on the street named "Dave" that name doesn't mean much to me, even if they show me a valid physical ID. If my friend Bob introduces me to Dave, that immediately forms a minimum level of trust that Dave is more likely to be the correct "Dave" that I want to talk to.

Keybase attempted to address this problem with Followers, which was a cryptographic implementation of a "vouch", which is similar to a statement saying "robobenklein on Keybase" is who they say they are. While Keybase has an abundance of other limitations, this aspect made it very easy to gain a basic level of trust for someone you haven't met, because one of your friends vouched for them (at some level at least).

GPG has a similar system of vouching for a person's identity in the form of Key Signatures. Because trust varies it has a native system for signature validity levels: from *"I haven't checked this key"* to *"I have met this person and confirmed their key myself"*.

And most wonderfully notable is that *GPG does not depend on any infrastructure*! Instead of a single authority dictating who owns a certain name, other users (hopefully including some people you trust) vouch that a GPG key belongs to the person it claims to be.

## "Vouch"

This concept is not new, and in fact it's even implemented in places where there *is* a central authority dictating name ownership:

- [Literally called "vouch"](https://github.com/mitchellh/vouch), a method for building trust in an open source community
- Discord, with it's "Friends in Common" view on a user profile
- Twitter profiles that showed a "also followed by ..." list
- Steam with it's "you have (N) friends in common" and list
- LinkedIn with it's "shared connections"
- Mastodon that shows a "followed by [...]" snippet when viewing a profile

And all this works because it is the natural form of how humans interpret identity and form trust.

# Infrastructure is a necessity

Let's take a look at GPG again, when I said "does not depend on any infrastructure" there was some nuance missing from that statement. While you *can* use any means of communication or message delivery you want, baked into the protocol itself is the "email" field of a user.

Inherently and by design, email is an identity scoped to specific infrastructure, which means if the email server @example.com goes offline, that identity is essentially voided as well. When you signed someone's GPG key you implied they were in control of said email address, but unfortunately *infrastructure is temporary* and that may no longer be the case after the domain expires or the server host turns evil.

GPG keys have expiry (which you should be using) but signatures don't! Of course, GPG has a host of other usability and user-friendliness issues that are far more prevalent than just signing and trust, so let's look at something aimed more towards the mainstream: Matrix.

## Case study: Matrix & Mastodon

Matrix and Mastodon are both open protocols that aim to put people first. People > Protocols > Platforms

However, both ecosystems end up putting the *Platform* part at the same level as *People*!

I argue that this should not be the case: I want to be rid of the server name part of Matrix and Mastodon usernames.

And no I'm not just talking about visually, I mean at the Protocol and People levels, the server should not be a centralized authority on the ownership of a username: Platforms (Infrastructure) are just a means to end: they move messages and data between People.

Two people can absolutely be named "Ben Klein", but in the digital world we need something unique for every Person (or machine, actor, etc) in order for the protocols and infrastructure to do their job at privacy and security. Lucky for us, lots of smart people have already invented really good cryptographic systems that are hard at work in GPG, Matrix, Signal, and many other E2EE chat systems. We already have the technology to handle this, and the human element of trust to distinguish between them based on human metrics instead of algorithmic ones.

## Why not fully P2P?

This deserves to be fully argued in a post which I am still in the process of writing, but suffice to say that P2P systems are inherently weak against abuse by automated systems. In a federated web there are a few people who maintain infrastructure for a large number of others, meaning moderation and similar defensive tasks can be effectively specialized and more easily coordinated.

P2P systems have also been historically very difficult to get to critical adoption rates required for them to be universally accessible. While GPG, Meshtastic, and similar may be described as fully P2P, in reality we still see sources of authority (admins of platforms or small groups of staff) taking at least a minimal role in moderation or maintenance, such as verifying emails before allowing public keys to be uploaded or blocking known spam accounts.

Federated systems are in the sweet spot of censorship prevention, reliability, community, but when your personal identity is still tied to specific instances of infrastructure then there will always be issues as time marches on.

# I don't want to start from scratch

To be clear, I love what existing Federated Platforms and Protocols are achieving, and I don't want to throw that all away, however such fundamental changes like disassociating identity from platforms may require some fundamental changes that could be incompatible with how current federated protocols operate.

Maybe to bridge the gap in the interim projects like [Keyoxide](https://keyoxide.org/) could fulfill an important role in identity and trust, and potentially make migration to my ideal future system easier.
