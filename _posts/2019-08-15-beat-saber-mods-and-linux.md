---
layout: post
title: "Beat Saber Mods and Linux"
date: 2019-08-15 # date of publish (sorting value)
created: 2019-08-15 # date of creation (shown value, defaults to `date`)
modified: 2019-08-15 # date last updated (shown if different than created)
categories: vr
description: "Get a full modded Beat Saber experience on Linux"
tags: [vr, steam, wine, proton, vive]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
---

So you've probably heard that I've recently started using an HTC Vive I acquired (or you're somebody I've never met...) and I also love rhythm games, so you see where this is going.

Beat Saber works great on it's own with my new PC (details in a previous post: Triangulum) but I needed more out of the game, since I'm used to the custom community, songs, skins, etc from OSU (Lazer!).

It's not too hard to get everything working, just needs some extra tweaks here and there.

For quick reference, the programs I will be using are:

 - Protontricks: [github.com/Sirmentio/protontricks](https://github.com/Sirmentio/protontricks)
 - BeatDrop: [github.com/StarGazer1258/BeatDrop](https://github.com/StarGazer1258/BeatDrop)
 - Steam Proton v4.11-2

That's all you'll need! Now let's get started!


# Step 1: Install and run Beat Saber once

Before doing anything, run the game normally at least once. Simple, I know, but I've had to reinstall a few times when I messed up.

# Step 2: Use Protontricks to install BeatDrop

 1. Launch protontricks via `protontricks --gui`
 2. Select Beat Saber,
 3. Select default wine prefix
 4. Open a terminal for debugging
 5. `wine /tmp/beatdrop-setup-*.exe` Replace with path to the beatdrop installer you downloaded.
 6. Install BeatDrop for the system (not user)
 7. **Don't** run beatdrop.

# Step 3: Apply fixes to the wine prefix

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

# Step 4: Open BeatDrop and install mods

Using the same debugging terminal we opened via protontricks, launching BeatDrop can be done with `wine Program\ Files/beatdrop/beatdrop.exe`

Then simply install mods as usual, starting with BSIPA. You should see the green 'patched successfully' notification.

# Step 5: Don't run BeatDrop and Beat Saber at the same time

Before trying to launch Beat Saber, make sure you close out any programs running in the protontricks session we started, otherwise there could be conflicts with Steam's usage of the wine prefix at the same time.

# You're done!

Now when you launch Beat Saber, everything should work as expected! If not, *please* ping me on GitHub (you can make an issue on [my .github.io](https://github.com/robobenklein/robobenklein.github.io)), [Steam](https://steamcommunity.com/id/robobenklein/) (leave a profile comment), [Discord](https://discord.gg/0u3n2P3AmId0Ldy4) or email.
