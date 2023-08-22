---
layout: post
title: "Factorio 1.1: Trains, again"
date: 2021-01-06 # date of publish (sorting value)
created: 2021-01-06 # date of creation (shown value, defaults to `date`)
modified: 2022-01-24 # date last updated (shown if different than created)
categories: factorio
description: Factorio 1.1 introduced stop train limits! A simple feature has powerful use cases, including emulating parts of a logistic network.
tags: [factorio, gaming]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: cat-bgs/traingrid.png
comments: true
share: true
published: true
---

With Factorio 1.1 a simple yet game-changing feature was introduced: Train Stop Limits.

Normally I always stick to LTN or TSM, or <name another logisitic train mod here>, but now I'm feeling comfortable with a completely vanilla logisitic train network.

With just a few combinators we can emulate the logistic network with trains almost exactly. (Still no easy support for cargo-agnostic train deliveries though.)

So what does it take to have a logistic train network in unmodded Factorio?

Well turns out we can break down the steps fairly easily...


# Components of a Logistic Network

For our network we will define a few requirements:

 - Providers supply a single type of cargo
 - Requesters receive a single type of cargo
 - Trains only move when both supply and demand exist

This mimics the bot logistic system, but does not deal with the intricacies involved in buffer or active provider / storage chest situations. We only handle a single item per stop to avoid crazy long train schedules or deadlocks that could potentially stall the network.

In order to support this method we need a few additional requirements:

 - Without any active Providers or Requesters, Trains need somewhere to be (they can't stack in a roboport like bots can)
 - No global circuit network (we won't run circuit networks across every Station)

Since disabling all stops for a train by circuit condition causes the train to immediately halt, we can't use that method without jamming our whole train network, so instead every stop needs to use the train limits only.

So given these restrictions, I've formulated a strategy for what I believe to be an extremely useful approach to create vanilla logistic train networks. (**VLTN**)

# Logistic Emulation Rules

 1. Never allow a higher Stop Limit than can fit in your Stop's stacker
 1. Never circuit-disable a provider Stop (always use Stop Limit instead)
 1. Never have more trains of a type than there are total train spots, minus one

## Maximum Stop Limit

Just as the case with non-logistic train stops, we need to make sure that we don't allow more trains in a station's stacker than it can support in order to prevent deadlocks on a main line.

Since we're going to be controlling the stop limit via a circuit we will need additional logic to ensure the max stop limit is respected. This is done using a simple comparison: output the lower value of (max stop limit, current desired limit).

## Do not circuit-disable a stop

Normally it would be easier to just toggle the station on and off depending on whether it's needing items, but doing a simple boolean approach does not work well to request only as many trains as desired, while it may work for a single station for awhile, there are other problems as well.

Most importantly, if both the requester and provider get circuit-disabled at the same time a train moving between them will freeze and stall the line it's on.

Instead we will simply bring the stop's limit to zero, this allows trains currently en-route to finish their trip even after the request has been satisfied. This prevents stalled trains sitting on the main lines.

## Never have more trains than available spots

For a single item type, make sure you never have more trains than could fit in all available slots, otherwise deadlocks will occur. Keeping at least one spot open for each item type will ensure that trains can keep flowing.

As an example, if I have a 3-spot iron provider and a 3-slot iron requester, I should not have more than 5 trains servicing iron requests.

To help alleviate this, it's possible to add a refuel or depot stacker stop, but I think that is not a great approach in terms of required travel-per-request efficiency.

### Warning about "available" vs "total" slots

I noticed a common pattern of misuse for these designs, so I felt the need to clarify here, some engineers are placing more trains on the line than there exist *available* slots, but less than the *total* slots.

Available slot: one which is currently open and ready to receive a train, meaning the cargo is ready to be loaded/unloaded or can enter a stacker as soon as the train arrives.

Total slots: this is the combined number of "stackers" or the combined total of the Maximum Stop Limits for all stations.

Simplified Example:

- 3 iron ore outposts, each with a max limit of 1 train, they aren't always ready to load an entire train, so they often have 0 available slots.
- 2 iron ore requesters, each with a max limit of 2 trains,

In this example, there are 3 + 2 * 2 total slots, however if we put 7 trains in the loop it'll obviously get stuck. What some people don't realize is that it can get stuck with even 5 trains!

Let's say 2 of your 3 iron ore patches dry up and don't have enough for a final load, your maximum available slots will be reduced by 2. Now that you only have 5 available slots, you can see how 5 trains would end up causing a deadlock and you can no longer deliver any iron ore from the patch that is still full!

In order to avoid this, if a station can "dry up" (or you dismantle one), be sure that the remaining number of trains servicing that resource is less than the number of stations that will remain operating.

My simplified recommendation is to limit the train count to your requester slots and no more, because any more than that and if a provider stops functioning you may end up in a deadlock situation. Of course, if you are confident neither the requester nor provider will ever dry up, it's possible to have up to the total slots, although not without some risks or potential efficiency losses. Needing more throughput should not be an excuse to add more trains though, use parallel stations or larger stackers depending on the bottleneck.

# Building the VLTN

## Requesters

{% capture images %}
  /images/factorio/requester.png
{% endcapture %}
{% include gallery images=images cols=1 caption="8k/trainload, 2 train limit VLTN Requester Station" %}

```
0eNrVWN1yozYUfhWNbguOwQ62udiZnWl2bzb9cbJXuxlGhmNbE5CoEEnTDA/Q9+iT9Ul6JPxDbBxDutuZ3tgW6Hzn5zufOPiZLtIScsWFpuEzTaCIFc81l4KGdA6/lVBoUORGM3ONLKUi03vCNWTFRSpZQphIiE+0YlyQlGdcD8jGrCBzGd+DJh9KSK2lXgO5NTsHX8VX8X5pkPOUxZCB0A6JpVjyVanAbjQ+iKqhyCPXa8KIgBXG8QBElNkCjdGn2YqGhWZC449swQXTUg3IDXo2N21oNtSC/wFbE2Aq5QaZKYTOQPO4YU1Y0fSGq0dIUxu1q+RCLkDcp8AFdSg3zmn45ZkWfCVYaqqon3LA8pkMcIdgmVnZONxCy5xWaCYS+J2GXuW0GD5wpUu8srOtd7jzhqXfy3LasBz1svQbluPqzqFIFddYOpuzXTxFNR2Yzt7apLtaaxe/DGguC1531TNFpMuJQ59o6I5niJ5wBXF902Z1AOp3Bp11Bx11BQ287qDjzqCj7qCXnUEvu4MGO9BUrniB3e/Ga5SDq7aSb+NssPUQDC7Rx2ZvtOQpGtQNse3rHb6yZ4C7xDMAIWNZmoPGG1Z3LVFNdlZcFKDORTGxUTQyHbdgTneY21PC3eu8BT44De+b+IVWMo0WsGYPHAHQqpl+Z1ldG1ltquE3RH1nLwtR+ywMkmc+VgpANCXHExrOcHvVkvNs5y2DhJeZCyniKSQ5lym8mnTNbOcIpg3vZu0h8TFXccl1vTYRYjSAfbuQpa2SF7Rx7w13QScQ8wTUqzwFwxcBn2dpAxrhvYTvMltyhQ3cmbVPhrUCDEbUl+osZ8rmEtJ3uEeWOi91b5T8KbJdEy2VzCIuEIOGWpVQnaBNQXJImucfkeS003tMp3MOCcPwT7bL4X7/RAN7+/Nj/3x+XbfTvW6r9g7YI/27JgAWrxt9sD1W0PV0OMS2lDkotpmgLt7ANDZZ1e8UOCBleJKUbs3QTon/Nn1O/of6/PvPv97G2zdTqHeok7MUn1LwsKdCh2c8jzq2y6ivggPvhYKbj/Xvq+frtzSNJbup9B/+A6W3HZ+vkjk+xc647bXk9Jg66SThArCCWkYWkoZLlhbg1A4i4yCHHgW+rVnRNVoR2XfLWkgbzM21fuXuU+1Ry8MKY9Jbyj//9Mv854/z99fXVz+S+dWvn69ubq/MO9pxvfdDvJndcda2Ra8DPy77+PQMGrShBz3nvYaDenx6MZ/N7sxpYl9ew8a/Aw5N2QKH+JBO7y/8T+T4z4HHi8YLP+5/wKm47pepN57M/Ik/nHjexK+qfwBS65eg
```
{: .clicktocopycode onclick="copyCodeBlockText(this);"}

> TLDR: set trainload size in leftmost divider, set negative request and max train limit in the constant combinator.

For the requester our combinator process is so:

 1. Figure out how many trainloads we desire.
 1. Compare the desired demand to the maximum demand.
 1. Output the minimum of the desired and the maximum.

The first step is simple, we just take the requested number of items and divide by the size of a trainload, we use a negative number to represent *demand* for an item.

In order to output the minimum we require two combinators for the comparison, one for the case where we're below the maximum, and one for the case where the desired trainloads is greater than the maximum.

## Providers

{% capture images %}
  /images/factorio/provider.png
{% endcapture %}
{% include gallery images=images cols=1 caption="8k/trainload, 2 train limit VLTN Provider Station" %}

```
0eNrVV9tum0AQ/RW0r4XEYGwuD5UqJaoqxW2UXl4qC2FYx6vALloWq5blD+h/9Mv6JZ0FYmO8OOBGlfoSZ2Hn7MycM8PsFi2SAmecUIH8LYpxHnGSCcIo8tE9Z2sSY659FqF8pC0Z19wnjQic5loGLwQPCdW1hKREaFa1zK+QjkjEaI7871uUk0caJhJcbDIMqNIadtAwlavSxMgFy9AOzGiMfyDf3OkKwzXhooAne9tqh3HfsLQGWboNy/EgS6thae/mOsJUEEFwFXO52AS0SBeYQzgHaxnu40oY8CNBM5aTKtlbBEgTR0cb5Bs2JADFhOOoellG1QK1eoN6/UHHfUGnZn9QuzfouD/opDfopD/odA8q5StCKoyIpQtCQ8G4IrPTqxp87F1NjuEhaMAQnCXBAq/CNQEAsFqSRGDeURldYptJsUWskDVqNaQ+Lx9TWp2ZSyRT/nnkGNOmEEmMfAe27xQxO/vTUhyTIjVwAnicREbGEnw2aLcMurcH08bpcu2CLeFRQUS5NKWD4AwGMhesKJNk2nOFy+7e5ZATsUqxAG/PEuUeiNqpiTkgBfA6Jvt4loTnIujNFQ6jlaQrxxImeNYROD0ajXTEoGuGdXu9BmNWiKwYAH+HJIlDWD/OuXeacx1Z0pzjuG1sjhQMKfjw9l7GOJIfjLNkTEdH8mmWpJqaGvTveLlrkDK08NIs5GUsPnp7AWc1SrYJyhoOlpylAaGAgXzBC9xFaD9GdDXxJ8Wlv0htLQQlXHu/1SEFue8SLXj/oRZ+//x1WQW/lhq88xy7J5R1aMUbpgWvjduSltmva5jm0DY+NY/a+Mtf29dq6rNLBFMS3ez3b/5Bv1fV6dm67ixkSzWid45sbUI6yjfHkEHBghIS+cswybFeHRDIAzI8IMFfKlZEhZYH5S2kKqIas342LN1Dsm0quiL4JJ4p//rx/uHT+4d3s9ntjQb/fvtwc/uAVOk+TN5yjDWiVZnzyu/TrNvdg+dUhW4PHPIaB1Rf6aOpzJnLVlLe4/zG/VFHSbjAkGbkPl1bd1r7+ggb1jD7VvpwTdvxLMcaOabpWLvdHySy7ME=
```
{: .clicktocopycode onclick="copyCodeBlockText(this);"}

Providers are basically the exact same setup, but this time a positive number from the stop's buffer is used as the supply, so we simply divide the supply by the train size as the desired stop limit.

The circuitry for the maximum stop limit is the same, so you could even just reprogram the requester as a provider.

# Bringing the system together

With a functioning Requester and Provider, we're ready to start deploying these stations and using them.

{% capture images %}
  /images/factorio/trainstops.png
  /images/factorio/trains.png
{% endcapture %}
{% include gallery images=images cols=2 caption="Some trains servicing Iron and Copper Ore routes" %}

You can deploy as many of these stations as you want, and keep adding copies of the same train for an item so long as you don't add more trains than your stops can handle. I recommend refueling at either the provider or requester instead of using a fuel depot so that you can cut down even further on network congestion.

Eventually I'll add a complete blueprint book with a few different trainload capacities, but for now all you really need to get started is the two blueprints I left above.

{% include copycodeblock.html %}
