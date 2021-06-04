---
layout: post
title: "KUB's municipal broadband is exactly what Knoxville needs"
date: 2021-05-25 # date of publish (sorting value)
created: 2021-05-29 # date of creation (shown value, defaults to `date`)
modified: 2021-06-04 # date last updated (shown if different than created)
categories: internet
description: "KUB is planning to bring municipal broadband to Knoxville, finally! Here's what I think,"
tags: [knoxville, internet, isp]
image:
  feature: 2021-05-25/IMG_20200729_172332.jpg
  credit: My home server Klapaucius
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

KUB hosted a public forum on Wednesday, May 26th in order to bring in opinions on it's new plan to roll out municipal broadband to the greater Knox County area, basically everywhere KUB currently services.

Even before I attended this forum, I had a very strong opinion in favor of municipal broadband, and I don't think anyone will be surprised to hear how I agree that the current oligopoly in the ISP space is seriously hurting America as a whole.

Most people who aren't voicing their support for municipal broadband either don't know the whole picture or are on the side of the greedy and consumer-disrespecting private Internet Service Providers. (ISP)

I highly recommend anyone in the area of influence of KUB [read their documentation on the matter](https://www.kub.org/about/about-kub/kub-service-areas/century-ii/meter-modernization/broadband-services-public-forum), which shows not only the plan itself but supports it with real-world examples such as Chattanooga's municipal broadband and the rates of Knoxville's current limited selection of providers.

I attended the in-person forum to show support for KUB's rollout plan and was happy to see the majority in strong support of the plan.


Notably showing their support in person include the Mayor, plenty of scientists and engineers, and the under-served rural representation.

Part of me was expecting a few of the corporate / political type to show up in opposition, but there was a pleasant lack of monopoly-supporting lackeys there.

The few viewpoints against the rollout I heard had to do with how KUB was funding part of this rollout: the electrical division is loaning to the fiber division and making a slight increase (~9%, of which 4.5% is directly used for fiber) to the electrical bills.

To me this makes sense, since I know how the electrical division was already in need of a portion of the fiber length to be laid in order to improve communication among their systems. (Improving resiliency and recovery for everyone.) In fact even without the internet service the electrical division would still want to roll it's own fiber or make improvements to it's systems, which is where the other 4.5% increase is expected to go.

## By the numbers

However, even if we do say that electric users are affected by the 9% increase to their electric bill, almost all of those electric subscribers also subscribe to some kind of internet service where the rates will be far cheaper by more than the extra 9% they'd be paying from their electric.

Let's say you're someone who's already in a well-serviced area and are currently subscribed to AT&T or Comcast's gigabit service.

| Service | Cost before KUB fiber | Cost after KUB fiber |
| --- | --- | --- |
| Electric | $120 | 130.8 |
| Internet Only | Comcast: $116,<br> AT&T: $80 | KUB: $65 |
| Electric + Internet total | $200 to $236 | $195.8 |

So in the end, even those with existing good service *still save money* even with the electric rate increase. If we assume that the existing ISPs lower their rates to compete, then we can even assume that you won't even have to change internet providers if you don't want to.

Now that I've shown the case for those in well-serviced areas, as soon as we look at the under-served and monopolized areas of Knoxville we quickly realize that many are without any decent service at all. For those people I am sure that anyone working a modern job or was stuck at home for the pandemic would be willing to spare an extra $10 to go from (IMO) garbage internet service to a reasonable internet expectation for the 21st century.

Here is a real data comparison for my own prior residence:

| Service | Cost before KUB fiber | Cost after KUB fiber |
| --- | --- | --- |
| Electric | $140 | 152.6 |
| Internet Only | Comcast's 100/6 plan: $60 | KUB: $65 |
| Electric + Internet total | $200 | $217.6 |

So, for $17.6 more per month, I can have 10 *times* the download speed, and *more than 150x the upload speed*. I don't think there's any doubt which I would choose. Keep in mind these numbers include running my personal server rack, most normal people don't use as much electricity as I do, so their total cost will of course be lower.

However if we were to switch from the ~~equivalent~~ closest plan by speed (Comcast's gigabit, still not symmetric) which is normally $116/month we would save a huge chunk of money by switching to KUB. Keep in mind speeds above 100mbit/s were not even available at this household until very recently.

## At the forum

The other common complaints I heard were about the forum format itself, I guess it was less of a forum and more of a public speaking to the board, since questions were not being answered live. Instead the questions asked to the technical team after the public speakers were done will be posted to KUB's website.

Amongst the questions asked were some fairly technical ones, including inquiring about the availability of public IPv4 addresses, by one of the 4 or 5 server-rack-at-home / likeminded homelab crew. I have a lot of similar questions, but none will really change view that the municipal broadband will benefit everyone here in some way.

Especially interesting to myself is that they included not only plans for symmetric 1gbit, but also were already planning 2.5gbit plans. Hopefully I'll be done upgrading my homelab networking to 10gig before KUB manages to bring that out to my residence.

# FAQ Posted!

[KUB posted the answers to many of the questions asked during the forum.](https://www.kub.org/about/about-kub/kub-service-areas/century-ii/meter-modernization/broadband-services-public-forum/broadband-public-forum-questions-responses)

Notably they covered a lot of the points of worry from electric customers, as they clarify that the electric division will be installing fiber for their own purposes anyways and also explain how the plan will benefit the whole area.

They directly addressed the higher electric rates concern explaining that those rate increases are for improvements to the existing infrastructure, which just happens to also include the addition of a smaller portion of fiber that would also be useful for the internet plan.

> KUB is planning to install fiber on its electric system regardless of the outcome of the approval process related to broadband.
>
> Installing the fiber backbone on the electric system will improve reliability, efficiency, and prepare KUB for the evolving uses of electricity at homes and in businesses. This same fiber would also position KUB to provide broadband services if the plan is approved.
