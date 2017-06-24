---
layout: post
title: Docker Steam Gaming From Achernetsov
modified:
categories:
description:
tags: [nvidia, docker, ubuntu, steam, gaming, reddit]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2017-06-24T18:14:46-04:00
---

Just browsing reddit one day, [when this comes along.](https://github.com/achernetsov/dockerized-steam)

This looks interesting, so [I said I would test it out](https://www.reddit.com/r/linux_gaming/comments/6j4tt8/docker_image_for_nvidiaalsa_host_with_winetricks/), let's get started.

First things first, we need to get our nvidia docker evironment going. I'm on Ubuntu Zesty 17.04, so we need to get docker-ce from the 'edge' branch since there isn't a stable release yet.

Nvidia-docker also doesn't yet have support, but that's no problem, we can build a package ourselves from their repo.

```bash
git clone git@github.com:NVIDIA/nvidia-docker.git
cd nvidia-docker
vim Dockerfile.deb
```
Make changes from [https://github.com/NVIDIA/nvidia-docker/issues/234](https://github.com/NVIDIA/nvidia-docker/issues/234)  
Change FROM line to use 16.04 instead of 14.04  
Generate a deb install file:
```bash
make deb
cd dist
# install it
sudo dpkg -i nvidia-docker_1.0.1-1_amd64.deb
```
Here I got errors from the systemctl call, that it can't run the nvidia-docker service.

Let's find out why...
```
Jun 24 18:23:36 robo-unseptium systemd[1]: Starting NVIDIA Docker plugin...
-- Subject: Unit nvidia-docker.service has begun start-up
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- Unit nvidia-docker.service has begun starting up.
Jun 24 18:23:36 robo-unseptium nvidia-docker-plugin[27553]: /usr/bin/nvidia-docker-plugin | 2017/06/24 18:23:36 Loading NVIDIA unified memory
Jun 24 18:23:36 robo-unseptium nvidia-docker-plugin[27553]: /usr/bin/nvidia-docker-plugin | 2017/06/24 18:23:36 Error: Could not load UVM kernel module. Is nvidia-modprobe installed?
Jun 24 18:23:36 robo-unseptium systemd[1]: nvidia-docker.service: Main process exited, code=exited, status=1/FAILURE
Jun 24 18:23:36 robo-unseptium systemd[1]: Failed to start NVIDIA Docker plugin.
-- Subject: Unit nvidia-docker.service has failed
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- Unit nvidia-docker.service has failed.
--
-- The result is failed.
Jun 24 18:23:36 robo-unseptium systemd[1]: nvidia-docker.service: Unit entered failed state.
Jun 24 18:23:36 robo-unseptium systemd[1]: nvidia-docker.service: Failed with result 'exit-code'.
Jun 24 18:23:37 robo-unseptium systemd[1]: nvidia-docker.service: Service hold-off time over, scheduling restart.
Jun 24 18:23:37 robo-unseptium systemd[1]: Stopped NVIDIA Docker plugin.
-- Subject: Unit nvidia-docker.service has finished shutting down
-- Defined-By: systemd
-- Support: http://www.ubuntu.com/support
--
-- Unit nvidia-docker.service has finished shutting down.
```

And then the nvidiaa-docker program says:

```
# nvidia-docker run --rm nvidia/cuda nvidia-smi
Using default tag: latest
latest: Pulling from nvidia/cuda
75c416ea735c: Already exists
c6ff40b6d658: Already exists
a7050fc1f338: Already exists
f0ffb5cf6ba9: Already exists
be232718519c: Already exists
8e7bf9dcddb1: Pull complete
0781c1d5c5b1: Pull complete
049ee96d6fe0: Pull complete
2924c3d4132d: Pull complete
4a8e58a7e9a6: Pull complete
Digest: sha256:aefed8a257faf5f5637c654bc17675bed7e3c95b06bc5b6cdae19082c90be984
Status: Downloaded newer image for nvidia/cuda:latest
nvidia-docker | 2017/06/24 18:30:02 Error: Could not load UVM kernel module. Is nvidia-modprobe installed?
```

So this seems like an easy fix...

```bash
sudo apt install nvidia-modprobe
# Now reinstall the nvidia-docker to make sure it exits zero:
sudo dpkg -i nvidia-docker_1.0.1-1_amd64.deb
# (no errors should be reported)
```

Now let's try running that test again:

```bash
nvidia-docker run --rm nvidia/cuda nvidia-smi
Sat Jun 24 22:34:02 2017       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 375.66                 Driver Version: 375.66                    |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 970M    Off  | 0000:01:00.0      On |                  N/A |
| N/A   44C    P8     8W /  N/A |    774MiB /  3008MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID  Type  Process name                               Usage      |
|=============================================================================|
+-----------------------------------------------------------------------------+
```

Wonderful! It worked!

Now that we have our dependencies installed, let's try out that [docker image from achernetsov](https://github.com/achernetsov/dockerized-steam).

From the README:

```markdown
# example of running windows steam
1. clone this repo to use run.sh script: ```git clone https://github.com/achernetsov/dockerized-steam && cd dockerized-steam```
2. create directory to persist /home/wine between container sessions: ```mkdir wine-home```
3. run nvidia-docker-plugin: ```sudo nvidia-docker-plugin```
4. run achernetsov/winetricks: ```cd winetricks && ./run.sh```; after this command you will be inside container shell: ```wine@myhost:~$```
5. init wine prefix, for example: ```WINEPREFIX="$HOME/win32" WINEARCH=win32 wine wineboot```
6. download steam installator: wget https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe
7. install steam: ```WINEPREFIX="$HOME/win32" WINEARCH=win32 wine SteamSetup.exe```
8. run steam ```WINEPREFIX="$HOME/win32" WINEARCH=win32 wine [path to steam.exe inside win32]```
```

Seems straighforward, let's get at it!

```bash
git clone git@github.com:achernetsov/dockerized-steam.git
cd dockerized-steam
mkdir wine-home
# (nvidia-docker-plugin already running)
cd winetricks
```

Now before you run that `run.sh` you should look it over to make sure that it's correct for your setup.

If you've been following this tutorial, you should be good to go.

```bash
./run.sh
Using default tag: latest
latest: Pulling from achernetsov/winetricks
bd97b43c27e3: Pull complete
6960dc1aba18: Pull complete
2b61829b0db5: Pull complete
1f88dc826b14: Pull complete
73b3859b1e43: Pull complete
ddc2e61fc9e2: Pull complete
783bfa71a573: Pull complete
68c5d41a0562: Pull complete
b224aa3266a1: Pull complete
ba89a847f145: Pull complete
dfe3c86af4e5: Pull complete
6e4cc24c5bf0: Pull complete
950bc6858b52: Pull complete
Digest: sha256:486e298eb869e2f9ad3967d4009ba1b9c3d1d71d6ef29246d24c2e0c1ab399f2
Status: Downloaded newer image for achernetsov/winetricks:latest
wine@robo-unseptium:/$
```

It worked! We're in a docker shell from nvidia-docker!

Let's get steam and wine set up:

```bash
WINEPREFIX="$HOME/win32" WINEARCH=win32 wine wineboot
```

If you see a wine install prompt, then you know that the X session forwarding is working from the docker container, just follow the prompts to install.

```bash
wine@robo-unseptium:/$ WINEPREFIX="$HOME/win32" WINEARCH=win32 wine wineboot
wine: created the configuration directory '/home/wine/win32'
# more output from the command
[...]
err:winediag:SECUR32_initNTLMSP ntlm_auth was not found or is outdated. Make sure that ntlm_auth >= 3.0.25 is in your path. Usually, you can find it in the winbind package of your distribution.
fixme:iphlpapi:NotifyIpInterfaceChange (family 0, callback 0x6a0cb608, context 0x938728, init_notify 0, handle 0x116e794): stub
err:winediag:xrandr12_init_modes Broken NVIDIA RandR detected, falling back to RandR 1.0. Please consider using the Nouveau driver instead.
wine: configuration in '/home/wine/win32' has been updated.
wine@robo-unseptium:/$
```

I'm using proprietary Nvidia drivers, not Nouveau, and it managed to find xrandr 1.0 instead so I don't think those errors are going to be a problem.

As we see after that, looks like the wine setup worked.

```bash
cd /home/wine
wget https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe
WINEPREFIX="$HOME/win32" WINEARCH=win32 wine SteamSetup.exe
# just set up steam as you would normally
# then,
WINEPREFIX="$HOME/win32" WINEARCH=win32 wine win32/drive_c/Program\ Files/Steam/Steam.exe
# if it's "file not found" you'll have to figure out where Steam installed to,
# somewhere under $HOME/win32/drive_c probably
```

Alright, we got Steam running inside a docker container with Nvidia graphics acceleration, now what?

Install some windows-only games!

Hmm, it seems I don't own many of those, let's just see what I can get installed without waiting for any huge downloads,

Let's try... 140:

![GetThreadContext Failed](/images/wine-gc-error-thread-context.png)

Alright, maybe not 140,  
How about TIS-100?

![GetThreadContext Failed](/images/wine-gc-error-thread-context.png)

Hmm, alright, let's look for something else...

What about Super Hexagon?

![That works](/images/super-hexagon-docker-wine-working.png)

Good, at least one game worked. Although there's still no audio yet.

### To be continued...

This post is a work in progress of my own adventure trying to get things to work.

Most likely, I haven't gotten past here in my own endeavors.

I'll update here when I make progress.
