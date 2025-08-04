---
layout: post
title: "Why I love Signal but don't use it"
date: 2025-07-15 # date of publish (sorting value)
created: 2025-07-15 # date of creation (shown value, defaults to `date`)
modified: 2025-07-15 # date last updated (shown if different than created)
categories: security
description:
tags: [signal, security, chat, messaging]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: false
---

When people ask me what chat platforms I recommend, Signal is almost always in that list, but yet I don't use it myself... what's up with that?

With the TLDR being "because it uses phone numbers for identification", and the actual answer being much more complicated, we need to lay out a few concepts to explain why:



# Distinct terminology and functionality

"Security" is an overly broad term, it is often composed of lots of different concepts including Encryption, Authentication, Privacy, Trust, etc...

## Signal is undefeated at Encryption

Signal's cryptography implementation is honestly impressive. I don't hold any kind of background in formal cryptographic mathematics, but Signal's implementation has garnered support from many parties already. Signal excels at encryption as it uses a lot of cool tech, including actually-useful buzzwords like forward-secrecy, and I don't believe I will see Signal's encryption broken in many lifetimes.

## Signal excels at being Trustworthy

Here, I'm talking about 'trust' as in "doing what they say they will" and proving it. Signal has earned trust from myself and many others for many factors, some highlights of which include a fully open source encryption implementation, proving their data retention policies by means of court-ordered subpoenas, and creating some wonderful public writings such as their blog.

There are not many companies that I will inherently trust, yet Signal has earned it's spot on my list, though being a non-profit gave it a little bit of a head-start.

## Signal is good at Privacy

Signal is good, but not excellent at privacy. Why? Phone numbers.

> Oh boy, here he goes rambling about phone numbers again...

Well of course! Phone numbers are probably the most *misused* bit of identifying information about a person there is! Let's address just this point to start with: Privacy.

Signal has already proven that the only information it keeps about a user is their phone number, however in most countries a phone number is enough to track someone down, identify them, or even to run some nefarious digital or social attacks. Many others have already commentated that Signal is for privacy and not anonymity, but personally anonymity is not a reason or requirement for me to use Signal.

Phone numbers are kind of like street addresses, where they identify a location, but instead of a possible group of people, it normally is attached to a singular person, which follows them around in their pocket. If you're in a position of power (let's say, a hostile government or cell carrier) then it is trivial to locate a person's device just because it's using a cellular connection.

Take note at how every other online chat platform uses usernames, generally allowing real people to sign up and use a service with much greater anonymity and privacy. (yes I'm aware signal added usernames, but phone numbers are still required) Using usernames as the primary identifier also has some other benefits, which I'll cover in the next section.

## Signal is bad at Authentication

> But couldn't you just use a throwaway number to sign up?

You could, but this is a bad idea.

To prove this point, simply take a look at the US government's own recent failure to use Signal properly: an unintended user was mistakenly added to a private group. I'll remind you again that humans are not good at remembering long numerical chains, and we certainly aren't perfect at interacting with computers, hence attacks like typosquatting are possible and are a real security problem.

But even after we've copy-pasted the numbers, here's the big takeaway, people: **Phone numbers are *designed to change*!**

What a concept! Compare this to all the other chat systems which I actually use: usernames are unique to a person (not a device or carrier), and encryption keys are *revocable* (or automatically rotate).

Phone numbers are kinda like street addresses, in that someone else at the same address can get your mail. But while reading mail addressed to someone else is at least against the law, no such featherweight protections even exist for phone numbers. When someone else with that old phone number sets up Signal, it no longer identifies *you*.

I'll skip all the other security problems around phone numbers, including but not limited to carrier attacks, sim swapping, MITM'ing the cell connection, and straight up theft of a device.

But all that is kinda the point... phone numbers are *so* problematic for authentication that if I could use Signal without one, I'd be using Signal yesterday!

# What do I actually use?

## Matrix

Matrix is cool, but it's not as good as Signal at:

- Encryption: Matrix's encryption is optional, and requires some deliberate effort from the user to set up
- Privacy: your messages (although encrypted) make their way across other federated Matrix servers which you may not know about
- Trust: this moreso depends on the homeserver you choose, or you could even run your own, but you still have to trust both your own and the other person's homeserver enough to get your messages across and hopefully not sell your conversation timestamps and activity to sketchy third parties.

Matrix does some things better though, which are important to me:

- Authentication: matrix uses usernames, and while homeserver domain names could change, usernames are designed to be unique for a user and not to be re-used or transferred.
- Federation: meaning I am not dependent on a single company (e.g. Signal, Discord, etc) to keep using the platform as a whole
- Privacy: what! again! Yes, Matrix is both better and worse at Signal than privacy, because while Signal keeps as little data as possible, you can use Matrix completely anonymously (\*with some effort)

## Keybase

Keybase is kind of end-of-life, as it's parent company (which I *don't* particularly trust) essentially put it on life support. (at which point that 'federation' point becomes really important!) So I can't really *recommend* it now, yet I am still using it on a regular basis...

What's cool though is that Keybase still does *really well* in terms of encryption, authentication, and does "good enough" at trust and privacy. Keybase uses usernames as the primary and notably *irrevocable* and *nontransferable* user identifier. This would probably lead to some name-squatting issues in the future (domain names expire for good reason), but this had some wonderful effects like provably secure chats: if you know that even if 'dave' left Keybase, nobody else could ever take that username.

The Keybase client also did a ton of extra work that largely went underappreciated in my eyes, like the social web of trust or the ability to follow other users' public sigchains, thus ensuring effortless key rotations. Compared to PGP which involved signing and updating trusted identities, rotating or revoking keys manually, etc, Keybase made this easy for normal people, which even Matrix is struggling to do.

# Why don't I use {% raw %}&lt;thing&gt;{% endraw %}?

It is surprisingly difficult to contact me, honestly I'm a bit of a pain to work with socially and certainly an annoyance to "normal people" who asked one too many questions by mistake.

I *generally* avoid platforms where:

- The client is not open source: I need to be able to trust the things that run on my computer, and "open source" is the fastest & easiest (but not only) way to earn my trust.
  - Notable exceptions: Steam/Discord[^discord-with-a-jail], because I generally *trust* these companies to do what they say they will at face value, and not, I dunno, harvest data for ads
  - like, *ahem*, [WhatsApp](https://www.mozillafoundation.org/en/blog/a-cheat-sheet-for-whatsapp-privacy/)
- Encryption is not supported:
  - Telegram is an interesting example case here, because it does not even enable encryption by default or support it in group chats or channels
  - SMS/MMS, phone calls, etc: this certainly does make it really annoying for people to try and contact me, as I basically want to avoid texts whenever possible.
- Authentication is poor:
  - Signal lives here, phone numbers should not be used for primary identification.
  - RCS chats (cellular) fall into this category too, which technically now support E2E encryption, but that's useless if I can't confirm that Bob is the person on the other end before sending a message.
