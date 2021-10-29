---
layout: page
title: "Why I hate Microsoft"
date: 2020-10-24 # date of publish (sorting value)
created: 2020-10-24 # date of creation (shown value, defaults to `date`)
modified: 2020-10-24 # date last updated (shown if different than created)
categories: viewpoints
permalink: /viewpoints/microsoft/
description: "I have a lot of reasons why I hate Microsoft, maybe you'd care to read them?"
tags: []
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: false
published: true
---

This is by no means a complete list of reasons why you should also hate Microsoft, just the ones that make up my own opinion.

# Companies and Products

[This is only a *small* subset.](https://en.wikipedia.org/wiki/List_of_mergers_and_acquisitions_by_Microsoft)

## Skype (2011)

Back in middle school Skype was *the* method for staying in touch and gaming online.

It's not a secret that Skype isn't interested in privacy[^skype-privacy] and should never be trusted to communicate anything.

Now I will laugh at you if you say you use Skype in any serious capacity, even if it's required by your company.

## Minecraft (2014)

I grew up playing this game starting in 2010 (purchased August 30 to be specific) and it took up a huge portion of my life, leading to me hosting servers and starting my company Robosane.

I was plenty angry when Microsoft bought it, and completely ignoring Linux support when pushing bedrock edition just made me more sour.

Now they're requiring Microsoft accounts[^minecraft-microsoft-account] to play a game that I bought 10 years ago, forcing new terms of service I don't agree with of course.

I recommend everyone jump ship to [Minetest](https://www.minetest.net/).

## LinkedIn (2016)

I never really used LinkedIn much before Microsoft bought it, but I am certainly not appreciative of how it's trying to become a social network for sharing news and basically charges people to let them spy on their connections.

Seriously, what other "social network" literally gives notifications about another user *viewing your profile*???

Other than that, I'm somewhat thankful that Microsoft left it alone[^microsoft-linkedin] instead of digging it deep into their ecosystem.

At least it doesn't require a Microsoft account... guess I'll keep my profile up on it for now.

## GitHub (2018)

Pre-acquisition I was a total GitHub fanboy, I have the octocat stickers, figurine, and it was my immediate response to all code version control questions.

Post-acquisition it has grown to become a major vendor lock-in headache and is only pushing Microsoft service integration harder.

Serious restrictions to open source freedom have also been seen like accounts from specific countries being outright blocked[^github-blocking-by-nationality] and violations of the code of conduct causing entire repositories to go missing[^github-coc-deletion].

Since Microsoft is trying to compete in so many markets companies that use GitHub and also compete with Microsoft products are a really unfavorable position. It being a privately-owned platform means they could pull the rug out at any minute if they wanted to, but before the acquisition I wasn't worried about watching my own footing.

As an example for the rug being pulled out, take youtube-dl as an example. Even though the program and library itself were completely legal, it being used for illegal activities got it removed: <https://github.com/github/dmca/blob/master/2020/10/2020-10-23-RIAA.md> Just wait until a similar logic starts being applied to every open-source social network frontend or software reverse-engineering tools. I would call this "losing the slippery slope argument".

Further reading: [Why not GitHub? by Tom Ryder](https://sanctum.geek.nz/why-not-github.html) (includes cool alternative suggestions!)

# Software

## VSCode

While I'm thankful for Microsoft supporting the open source community, it really does feel like the "embrace, extend, extinguish" argument is accurate for this context.

If you take one thing away from this argument: **VSCode is NOT open source**. In fact you have to agree to a length set of terms and conditions to use VSCode downloaded from Microsoft's site.[^vscode-proprietary]

While plenty of people have taken the open source portion of the editor (which is a transgression in itself, being named just `code`) and compiled it into a freely licensed binary (VSCodium) many of the extensions that make VSCode truly useful are locked under Microsoft's proprietary licenses and only work on proprietary VSCode as downloaded from Microsoft.[^vscode-proprietary]

There are alternative options available: <https://opensource.com/article/20/6/open-source-alternatives-vs-code>

## .NET

Let me preface this by clearly stating that I do not use .NET for any real work or projects, and at this rate I don't think I want to start doing so.

I don't think this is the first time that Microsoft has angered the open source community, but this one certainly raised some voices: Microsoft chose to limit access to an incredibly useful feature in .NET 6 to their own paid products.[^microsoft-net-feature]

It's important to note that it's not "remove the feature entirely" but "restrict the feature to our paid product". Essentially the "extinguish" portion of the triple-E strategy where they want to lock in more people to their ecosystem.

## Windows

I really wish people realized just how bad it is. Not even speaking from a software quality perspective, but from a privacy and rights perspective it's a nightmare as well.

You can ask a lot of people about why Windows sucks and get a wide range of answers, so I'll leave this section deliberately sparse. You can find plenty of reasons on any search engine.

<!-- # Political -->

---

# More readings

Have I not convinced you yet?

[Microsoft's Software is Malware](https://www.gnu.org/proprietary/malware-microsoft.en.html) from the GNU is quite a nice read to summarize each point quickly.

"[Microsoft, there is a way to win our trust](https://davelane.nz/microsoft-there-way-win-our-trust)" by Dave Lane covers the "Microsoft <3's Linux" topic pretty well.

---

# Footnotes

Please use a privacy tool (like Privacy Badger) or an adblocker for some of these links.

Just because I link to a website here *does not* mean I endorse the site or content. Make your own judgement.

[^skype-privacy]: Skype has earned it's bad reputation:
     - <https://slate.com/technology/2012/07/skype-won-t-comment-on-whether-it-can-now-eavesdrop-on-conversations.html>
     - <https://yourstory.com/2019/08/tech-microsoft-skype-user-privacy-ai>
     - <https://www.theverge.com/2019/8/14/20805801/microsoft-privacy-policy-change-humans-listen-skype-cortana-voice-recording>
     - <https://www.zdnet.com/article/is-skype-snooping-on-your-conversations/>
     - <https://www.businessinsider.com/skype-accused-of-spying-2013-1>
     - <https://www.cnet.com/news/hackers-taunt-skype-stop-spying-on-people/>

[^minecraft-microsoft-account]: I already paid for Minecraft and now you take it from me:
     - <https://www.minecraft.net/en-us/article/java-edition-moving-house>
     - <https://www.theverge.com/2020/10/22/21527647/minecraft-microsoft-account-mojang-java>
     - <https://www.zdnet.com/article/microsoft-says-starting-next-year-all-minecraft-users-will-have-to-have-a-microsoft-account-to-play/>
     - <https://games.slashdot.org/story/20/10/22/2352236/minecraft-will-require-a-microsoft-account-to-play-in-2021>
     - <https://www.pcgamer.com/minecraft-java-edition-will-require-a-microsoft-account-from-next-year/>

[^microsoft-linkedin]: LinkedIn is still mostly ok at least:
     - <https://www.wired.com/2017/03/now-we-know-why-microsoft-bought-linkedin/>
     - <https://www.cnbc.com/2019/12/27/linkedin-ceo-jeff-weiner-is-ok-with-microsofts-hands-off-approach.html>
     - <https://brand24.com/blog/microsoft-bought-linkedin/>
     - <https://www.cnbc.com/2019/12/27/linkedin-ceo-jeff-weiner-is-ok-with-microsofts-hands-off-approach.html>

[^github-blocking-by-nationality]: GitHub is **not** an open platform:
     - Iranian devs: <https://github.com/1995parham/github-do-not-ban-us>
     - <https://www.theverge.com/2019/7/29/8934694/github-us-trade-sanctions-developers-restricted-crimea-cuba-iran-north-korea-syria>
     - <https://techcrunch.com/2019/07/29/github-ban-sanctioned-countries/>
     - <https://www.zdnet.com/article/github-starts-blocking-developers-in-countries-facing-us-trade-sanctions/>

[^github-coc-deletion]: Certainly applying the code of conduct irregularly:
     - <https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3>

[^vscode-proprietary]: VSCode and it's most useful extensions are proprietary:
     - <https://underjord.io/the-best-parts-of-visual-studio-code-are-proprietary.html>
     - <https://code.visualstudio.com/license>
     - <https://opensource.stackexchange.com/questions/4288/is-microsoft-vs-code-really-open-source>

[^microsoft-net-feature]: Microsoft and the .NET development feature being restricted to a paid-only IDE:
     - <https://www.theverge.com/2021/10/22/22740701/microsoft-dotnet-hot-reload-removal-decision-open-source> and then <https://www.theverge.com/2021/10/23/22742282/microsoft-dotnet-hot-reload-u-turn-response>
     - <https://then24.com/2021/10/23/microsoft-rolls-back-controversial-net-change-after-open-source-community-outcry/>
     - <https://hitechglitz.com/microsoft-returns-controversial-net-change-after-outcry-from-the-open-source-community/>
     - <https://winbuzzer.com/2021/10/25/microsoft-reverses-controversial-decision-to-remove-hot-reload-from-net-6-xcxwbn/>
