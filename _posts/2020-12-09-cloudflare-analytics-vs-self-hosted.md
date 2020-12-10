---
layout: post
title: "CloudFlare analytics vs Self-Hosted"
date: 2020-12-09 # date of publish (sorting value)
created: 2020-12-09 # date of creation (shown value, defaults to `date`)
modified: 2020-12-09 # date last updated (shown if different than created)
categories: web
description: Trying out both privacy-focused analytics solutions on this site.
tags: [web, internet, cloudflare, matomo]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

[CloudFlare just opened up it's Web Analytics to everyone.](https://blog.cloudflare.com/privacy-first-web-analytics/)

Their proposal is that their solution is far more privacy friendly compared to other conventional analytics like Google, which totally makes sense, but how does it compare to my current choice: Matomo?


From an end user's perspective who doesn't trust either myself or CloudFlare more than the other, I would say that CloudFlare's approach is much better than Matomo.

For now I'm running both, and I'll compare the results after a month or so to see if there's a significant difference in counting visits or pageviews.

If people agree with me that CloudFlare seems like the better approach for general privacy, I'll end up turning off my own Matomo instance once CloudFlare offers multiple properties per user.
