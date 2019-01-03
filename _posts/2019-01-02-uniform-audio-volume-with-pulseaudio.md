---
layout: post
title: "Uniform audio volume with Pulseaudio"
date: 2019-01-02 # date of publish (sorting value)
created: 2019-01-02 # date of creation (shown value, defaults to `date`)
modified: 2019-01-02 # date last updated (shown if different than created)
categories: audio
description:
tags: [software, ubuntu, pulseaudio, audio, ladspa]
image:
  feature: 2019-01-02/GIFrecord_2019-01-02_201528.gif
  credit: pavucontrol view
  creditlink: /images/2019-01-02/GIFrecord_2019-01-02_201528.gif
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
---

I hate the lack of volume uniformity across the web, YouTube videos range from far too quiet to far too loud, Bandcamp has no adjustment of it's own, even in Discord individuals can be four times louder than another, and changing volume levels for every different video I watched finally got to me.

So now, I never have to touch the volume controls on a video every again.

> at least IN THEORY; I still end up doing so by habit occasionally...

Here's how you can also have always-level audio on Ubuntu 18.04:


### Get dependencies

You'll need to have Pulse's LADSPA plugin installed so it can be loaded, and we'll need the LADSPA plugin itself, which is in package `swh-plugins`.

```
sudo apt install swh-plugins
```

### Find the master audio device

Here you'll need the internal name of the device Pulseaudio should link the new sink to, for this you will have to filter through some terminal output to find the name of a device:

```
$ pacmd list-sinks | grep 'name:'
name: <alsa_output.pci-0000_10_00.1.hdmi-stereo-extra2>
name: <alsa_output.usb-Nuforce_Inc._NuForce_USB_Audio-01.iec958-stereo>
name: <alsa_output.usb-Logitech_Logitech_G933_Gaming_Wireless_Headset-00.analog-stereo>
name: <alsa_output.pci-0000_38_00.6.iec958-stereo>
```

Here you can see my audio devices, I'm using the Nuforce uDAC3 here, but you need to find your own device name here.

Once you have that name like `alsa_output.usb-Nuforce_Inc._NuForce_USB_Audio-01.iec958-stereo` in my case, we can initialize the LADSPA plugin:

### Load the sink and specify options

The command form looks like:

```shell
pacmd load-module \
  module-ladspa-sink sink_name=ladspa_normalized_with_gain \
  master="${PA_DEVICE_NAME}" \
  plugin=fast_lookahead_limiter_1913 \
  label=fastLookaheadLimiter \
  control=${GAIN},${UPPER_LIMIT},${ATTENUATION_TIME}
```

My values look like this:

```shell
pacmd load-module module-ladspa-sink sink_name=ladspa_normalized_with_gain \
  master="alsa_output.usb-Nuforce_Inc._NuForce_USB_Audio-01.iec958-stereo" \
  plugin=fast_lookahead_limiter_1913 \
  label=fastLookaheadLimiter \
  control=0.1,-20,1.0
```

In this example I'm pushing the DB limit and the attenuation time near their limits. Much lower for the limit or much longer for the time and the plugin might not load successfully.

If you also want audio volume to be increased, bump the first gain argument until comfortable, but note that you might lose a sense of loudness variety.

If the load fails or you want to change the sink, unload the module:

```
pacmd unload-module module-ladspa-sink
```

And then try again with different values.

### Enjoy balanced audio:

Done! After the sink is loaded you should be able to change it's output using `pavucontrol` (PulseAudio VolUme Control).

Here's mine in action, limiting the volume of a very loud YouTube video while my Discord chat bypasses the limiter:

![LADSPA Plugin GIF](/images/2019-01-02/GIFrecord_2019-01-02_200817.gif)
