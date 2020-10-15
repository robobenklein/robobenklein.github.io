---
layout: post
title: "OpenMPI Across UTK's Hydra Machines"
date: 2020-10-14 # date of publish (sorting value)
created: 2020-10-14 # date of creation (shown value, defaults to `date`)
modified: 2020-10-14 # date last updated (shown if different than created)
categories: utk
description:
tags: [linux, mpi, utk, hpc]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
hidden: true # don't show on frontpage
---

Most of us don't have access to a compute cluster, nor even a dedicated server to run projects on, but a lot of us have access to Linux-based lab computers provided by our school.

So as part of a class on parallel computing, shouldn't everybody be able to test their code across the school computers? Of course! However I haven't seen good documentation from any of these classes specific to Hydra, so I'll write up a complete 'zero-to-hero' post on running OpenMPI programs across our lab machines.


# Requirements

## Access to the machines

First off you'll need remote SSH access to the lab machines in question. At UTK each Hydra machine has it's own public IPv4 address with SSH access enabled, so no problems there.

As part of getting access, you should set up SSH key-based auth. I recommend you only keep your key on your personal machine, since I personally would not trust keeping a private key on a shared system.

To ensure that you can still use this key to connect between the lab systems you'll want to enable Agent Forwarding, which allows you to use your local key on remote servers without storing your private key there.

Here's a recommended config for hydra:

```
Host hydra*
  Hostname %h.eecs.utk.edu
  User YOUR_NETID
  ForwardAgent yes
  ServerAliveInterval 120
  KeepAlive yes
  IdentityFile=~/path/to/your/private_key
```

Now you should be able to `ssh hydra0` without typing in your netID password. Then while logged into a hydra machine, you should be able to ssh into any other hydra machine once again without needing your password.

## Installing OpenMPI

We obviously don't have any access to install programs into the system-wide root, so instead we'll just stick to the standard `~/.local` prefix.

Find newer release download URLs from [MPI's download page.](https://www.open-mpi.org/software/ompi/v4.0/)

```shell
mkdir -p ~/tmp
cd ~/tmp
wget https://download.open-mpi.org/release/open-mpi/v4.0/openmpi-4.0.5.tar.bz2
tar xvf openmpi-4.0.5.tar.bz2
cd openmpi-4.0.5
./configure --prefix=$HOME/.local --enable-picky --disable-debug --with-platform=optimized --enable-visibility --enable-contrib-no-build=vt --enable-mpirun-prefix-by-default --with-cma --without-memkind
make -j$(nproc)
make install
```

## Build a hostfile

Now we need to choose a set of hosts to run across. For Hydra it's easy since they're all numerically identified.

With ZSH I can generate a hostfile with a single command:

```shell
z=(hydra{1..30}); print ${(j.\n.)z} > hosts
```

Now if you need to narrow down the list (i.e. to use a square number of processes) just delete some lines from that `hosts` file.

For programs requiring a square number of hosts (like this CS462 homework) I'd recommend selecting 4, 8, or 16 machines. Keep in mind which systems other people are using, since you're sharing CPU time with everyone.

In order to discover who's using what machines (and to select lesser-used nodes) I wrote [a script](https://github.com/robobenklein/configs/blob/master/sbin/whosonhydra) to summarize who's logged in where.

# Running your programs

For the ease of copy-pasting by CS462 students the program will be `hw_tester -vt large3.dat`, replace with whatever program / args yours is.

If you're lucky, just `mpirun --hostfile hosts ./hw_tester -vt large3.dat` will work, however Hydra users are **not so lucky**.

## Hydra limitations

So instead I had to dig around a bit to find a few key pieces of info:

We need to avoid selecting the wrong network interface to use: I ended up adding combinations of `--mca btl_tcp_if_exclude virbr0,lo,virbr0-nic` to exclude unwanted interfaces and `--mca btl_base_verbose 100` to increase the verbosity of the network setup so I could debug further.

Then I found that the default port range couldn't be bound to on the Hydra machines, so we need to increase the starting port (`--mca btl_tcp_port_min_v4 MIN_PORT_NUM`) and also reduce the port range it selects from. (`--mca btl_tcp_port_range_v4 PORT_RANGE_SIZE`)

Keep in mind that we don't want to overlap with anybody else's port range who might also be following this tutorial, so I'd recommend choosing a starting port number somewhere between `18000` and `28000` in increments of 100. (`--mca btl_tcp_port_range_v4 100`)

So in the end I was able to successfully run my program with:

```shell
mpirun --mca btl_tcp_if_exclude virbr0,lo,virbr0-nic --mca btl_tcp_port_min_v4 21200 --mca btl_tcp_port_range_v4 100 --hostfile hosts -npernode 1 ./hw_tester -vt large3.dat
```
