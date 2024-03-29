---
layout: post
title: "Beat Saber Mods and Linux"
date: 2022-03-18 # date of publish (sorting value)
created: 2019-08-15 # date of creation (shown value, defaults to `date`)
modified: 2022-03-18 # date last updated (shown if different than created)
categories: vr
description: "Get a fullly modded, improved Beat Saber experience on Linux"
tags: [vr, steam, wine, proton, vive]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

> Updated Mar. 18, 2022 with [instructions about how to downgrade game versions]({% post_url 2019-08-15-beat-saber-mods-and-linux %}#downgrading-to-older-game-versions) while mods are being updated, because ScoreSaber only supports 1.19.0 right now.

[Geefr has released a new GUI mod installer for Linux!](https://github.com/geefr/beatsaber-linux-goodies) I recommend you use that now instead of the terminal / scripts option detailed in this post.

# Old mod install method:

> 1.3.0 broke mods again! Use [these scripts](https://github.com/geefr/beatsaber-linux-goodies/tree/master/scripts) to get them working again!
> Read further below to see more details about this update

So you've probably heard that I've recently started using an HTC Vive I acquired (or you're somebody I've never met...) and I also love rhythm games, so you see where this is going.

Beat Saber works great on it's own with my new PC (details in a previous post: Triangulum) but I needed more out of the game, since I'm used to the custom community, songs, skins, etc from OSU (Lazer!).

It's not too hard to get everything working, just needs some extra tweaks here and there.

For quick reference, the programs I will be using are:

 - Protontricks: [github.com/Sirmentio/protontricks](https://github.com/Sirmentio/protontricks)
 - BeatDrop: [github.com/StarGazer1258/BeatDrop](https://github.com/StarGazer1258/BeatDrop)
 - Steam Proton v4.11-2

That's all you'll need! Now let's get started!


## Step 1: Install and run Beat Saber once

Before doing anything, run the game normally at least once. Simple, I know, but I've had to reinstall a few times when I messed up.

## Step 2: Use Protontricks to install BeatDrop

 1. Launch protontricks via `protontricks --gui`
 2. Select Beat Saber,
 3. Select default wine prefix
 4. Open a terminal for debugging
 5. `wine /tmp/beatdrop-setup-*.exe` Replace with path to the beatdrop installer you downloaded.
 6. Install BeatDrop for the system (not user)
 7. **Don't** run beatdrop.

## Step 3: Apply fixes to the wine prefix

 1. Use the same protontricks gui as before, but this time open RegEdit.
 2. Get this file: [github.com/Vash63/bsmodinstaller.py: winhttp.reg](https://github.com/Vash63/bsmodinstaller.py/blob/master/winhttp.reg)
 3. Import that file via the RegEdit menu.

Next, if you want to use SongCore, (in most cases you do) you need to do an additional step:

```
cd "~/.local/share/Steam/steamapps/compatdata/620980/pfx/drive_c/users/steamuser/Local Settings"
mkdir -p "LocalLow/Hyperbolic Magnetism/Beat Saber"
```

Replace the ~/.local with your Steam library install location you used for Beat Saber.

This should fix SongCore not allowing you to play custom songs.

## Step 4: Open BeatDrop and install mods

Using the same debugging terminal we opened via protontricks, launching BeatDrop can be done with `wine Program\ Files/beatdrop/beatdrop.exe`

Then simply install mods as usual, starting with BSIPA. You should see the green 'patched successfully' notification.

## Step 5: Don't run BeatDrop and Beat Saber at the same time

Before trying to launch Beat Saber, make sure you close out any programs running in the protontricks session we started, otherwise there could be conflicts with Steam's usage of the wine prefix at the same time.

## You're done!

Now when you launch Beat Saber, everything should work as expected! If not, *please* ping me on GitHub (you can make an issue on [my .github.io](https://github.com/robobenklein/robobenklein.github.io)), [Steam](https://steamcommunity.com/id/robobenklein/) (leave a profile comment), [Discord](https://discord.gg/0u3n2P3AmId0Ldy4) or email.

# BeatSaber 1.3 Update

Alright, this latest update requires even more workarounds this time, but luckily someone's already published a script to modify the proton instance:

[github.com/geefr/beatsaber-linux-goodies](https://github.com/geefr/beatsaber-linux-goodies/tree/master/scripts)

Use the `bs-linux-modfix.sh` script to fix it up, it'll handle the weird library / winhttp workarounds required now.

Also, the same guy made a fork of BeatDrop with native Linux releases! [Check it out!](https://github.com/geefr/BeatDrop/releases)

# Downgrading to older game versions

So for whatever reason you want to grab an old release of Beat Saber? There have been many tools and scripts made for Windows that do this automatically, so here's how you can do so on Linux.

## Start steam in console mode

Run steam from a terminal with `steam -console`, this will give us a steamcmd console within the steam window itself that we can use for a few commands.

## Download an old depot of the game

> Based on instructions from [a reddit post](https://www.reddit.com/r/Steam/comments/611h5e/guide_how_to_download_older_versions_of_a_game_on/)

Locate a manifest ID for the version of the game you want to download from [here using SteamDB](https://steamdb.info/depot/620981/manifests/).

Once you've got that, the command to download the old Beat Saber depot in the steam console (*not the terminal*) should look like:

```
download_depot 620980 620981 6558821762131072991
```

Remember to replace the last command argument with the manifestID for the version you want to download.

It might take a while to run, but this should eventually give you some output, similar to:

```
] download_depot 620980 620981 6558821762131072991
Downloading depot 620981 (758 MB) ...
Depot download complete : "/home/robo/.steam/debian-installation/ubuntu12_32\steamapps\content\app_620980\depot_620981" (320 files, manifest 6558821762131072991)
```

Once it's downloaded, you'll have to copy it over your current install's files, remember to keep a backup of any custom songs you want to keep!

For me, the command I use is:

```bash
rsync -a ~/.steam/debian-installation/ubuntu12_32/steamapps/content/app_620980/depot_620981/* ~/.steam/debian-installation/steamapps/common/Beat\ Saber/
```

## Continue modding as normal!

Once the old version has been copied over, boot the game once, then just run the same process you use to install mods for the older game version.

If you don't already have a method to install Beat Saber mods on Linux, take a look at [Beataroni by geefr](https://github.com/geefr/beatsaber-linux-goodies).
