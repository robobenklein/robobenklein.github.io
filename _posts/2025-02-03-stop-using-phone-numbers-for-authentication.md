---
layout: post
title: "Stop using phone numbers for authentication"
date: 2025-02-03 # date of publish (sorting value)
created: 2025-02-03 # date of creation (shown value, defaults to `date`)
modified: 2025-02-03 # date last updated (shown if different than created)
categories: security
description:
tags: [sms, authentication, auth, security]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: false
---

For some reason the use of phone numbers for security or authentication purposes has become pervasive in recent years; I am regularly reminded of that fact when I come across Discord servers requiring verified phone numbers to participate.

SMS as a second factor has largely been proven to be useful for increasing security, however it's still not as secure as TOTP or HOTP auth, thanks to a variety of factors including wireless sniffing and social engineering attacks with the carrier. This leads me into my main point of this post:

**Phone numbers should be treated like street addresses or apartment numbers**, while current trends seem to suggest that most people think of them like email addresses.


Phone numbers are naturally a limited resource due to their length and format, much like properties along a residential street. The ownership of a phone number and of a house will naturally change over time, and are generally governed under an authority larger than a single person, whether that be a cellular provider like T-Mobile or your local government that collects property taxes. In general, keeping and/or maintaining a phone number or a property cost *money*, and sometimes that amount is significant enough that someone who needs it can't afford it.

This is in stark contrast to that of e-mail, where the number of addresses are almost limitless! The cost of having an email address exclusive to yourself for your entire life can be literally nothing; even professionally secure providers like ProtonMail allow free accounts! And if you're really intent on owning your own email stack for real, the cost of a domain name per year is less than half of what many common cellular phone plans cost *per month*!

# So why do we keep using phone numbers?

In the USA and similar countries (EU/Canada/etc with regulated telecommunications) phone numbers are a relatively simple, familiar way to verify that a person is more likely to be a human and not an automated internet bot. I want to say that phone numbers are a way to verify that a person *has money*, but that's basically always a side effect and isn't the primary goal of SMS verification. (leaving out the arguments here about governments requiring or providing phones...)

Any internet bot can create an email address, and heck I even have multiple domains with wildcard email routing, so I have a realistically *infinite* number of email addresses for an indistinguishably small cost per address. Phone numbers however are *expensive* per line to maintain, and being so much more costly means that bots are far less likely to start (ab)using them, and it wouldn't be *economically feasible* for the bots to keep doing whatever-nefarious-action that a company wanted to stop. (e.g. creating lots of fake accounts on your service)

Hence, most companies that deal with real money in situations with significant security or information risks will default to using phone numbers for a second factor of authentication: banks, payment apps like PayPal/Cashapp/etc, finance and trading providers even including the likes of CoinBase, or even some apps which pay *you*.

Notably in the majority of these situations these are the same companies / providers that would also require your physical address for tax, liability, or reporting purposes. In this way, phone numbers are simply faster and more convenient compared to sending snail mail.

But here's a *BIG* difference: we're already used to physical addresses changing over time, and we have laws and systems to deal with it. Snail mail has laws protecting it (don't open someone else's mail, etc), methods to deal with changes (mail forwarding, return addresses, informed/signature-on delivery, etc), and overall those same types of companies I mentioned above are encouraging users to keep their addresses and information up to date.

So if everyone's already used to physical addresses, why are phone numbers such a different case?

# Problems of using phone numbers

Because of the speed, cost, and convenience of SMS compared to snail mail it has become a nearly ubiquitous standard of communication. I mean, just imagine what snail mail would look like with the same metrics: a piece of paper appears in your hands within seconds and costs fractions of a cent to send automatically? Clearly if such a solution existed people would use it for similar purposes as SMS 2FA is used today.

But unfortunately, SMS has all the same problems as sending snail mail, and is even less commonly understood (as a technology) by the general populace.

## Physical & Interception attacks

Phone numbers can be stolen just as easily as mail can be taken from a mailbox. Sure, there are countermeasures, but on average someone only needs to pop the SIM card out of a device and transfer it, just as someone would drive up and grab the letters from the mailbox. Both of these attacks leave evidence however, after all, something trackable went missing!

This is in stark contrast to email; no passer-by can intercept or 'steal' your emails (of course, assuming the system is implemented properly for all scenarios) and only your courier would have had access to the mail being sent or received.

I look forward to the more general adoption of eSIMs over physical cards, because they will provide protection via encryption (and perhaps authentication?) instead of just physical possesion. If someone physically snatches your phone, they wouldn't have access to the eSIM in the same way they wouldn't have access to the TOTP 2FA secrets either. (though I will still always be worried about vulnerabilities in the tech)

Recent improvements and newer technologies like 5G are also moving in the right direction to fix up the horrid cellular phone security, much like security envelopes for snail mail have become commonplace, newer cellular communication tech is making SMS and calls more secure. Heck, cellular security used to be so bad it was like writing a postcard - everyone could see what was written! Clearly though, taking into account the recent horrifying example with the FBI's call logs being leaking, we still have a long way to go.

# Egregious examples

If you know of more examples to list here please tell me about them!

## Allowing single-factor SMS login

This is the worst offender in my opinion, these companies use SMS as a single factor of authentication, meaning anyone who gets access to your phone number can log in. Linking your phone number in these cases actually *reduces* your overall account security. (assuming you have good practice in other facets like password strength)

Discord (via 'Forgot Password' with phone number) is the biggest example I am constantly reminded of, considering how many servers I see or hear about "phone number verification is required to chat". Sorry, I am *not* going to lower the security of my account just to participate in your space. Even if they fix the top-level security problems, I still wouldn't want to give my phone number to Discord for privacy reasons.

[Cash App](https://cash.app/help/3130-accessing-your-account) is another surprising example here, but luckily I don't think a phone number is required to access any features/functionality.

Also unexpectedly, while researching this case I found [Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-sms-signin) supports this as a "feature", well I sure hope this feature never gets used.

## Using SMS as the primary and only auth factor

Using a phone number as the primary ID is no better than sending snail mail to "whoever is at this address". Given enough advancements in cellular and telecommunications technology, the security of these examples won't be much better than that of regular SMS.

Just take a look at [Signal's example](https://web.archive.org/web/20250129222034/https://support.signal.org/hc/en-us/articles/4850133017242-Twilio-Incident-What-Signal-Users-Need-to-Know), where a major incident with Twilio means that your "secure" messages could have been going to a malicious actor instead.

## SMS is the only available second auth factor

Looking at you Twilio (and now Sendgrid), where the *only* available second factor is via SMS. So long as it's purely the *second* factor and never the primary or only auth method, I don't think there's too much security risk. *However* I do think it's terribly inconvenient: TOTP secrets can be held by multiple devices, stored offline in backups, and work without an internet connection; SMS is just less reliable in terms of access and easier to lose.
