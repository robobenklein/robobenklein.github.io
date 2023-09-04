---
layout: post
title: "FDAC@UTK: SSH & Container tutorial"
date: 2023-09-04 # date of publish (sorting value)
created: 2023-09-04 # date of creation (shown value, defaults to `date`)
modified: 2023-09-04 # date last updated (shown if different than created)
categories: utk
description: Robo's tutorial for the FDAC class setup
tags: [utk, tutorial]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: false
published: true
hidden: true
---

# Practice 0

Welcome to CS445/545. This assignment is designed to get you familiar with how the rest of the class assignments will be completed.

## Background Info

### What the heck is a "container"?

For this class you'll be using your own docker container which runs on one of our servers. You can learn more about docker containers, but what you really want to know is:

- The container gives everyone in the class the same software environment to work
- It's separate from our server's software and other students' containers
  - This means you are able to install and manage whatever additional software you might want without affecting other students or our host system.
- By default it runs a jupyter notebook which is preinstalled for you.

### SSH Keys

You will require an SSH key for this class, I (robobenklein) personally recommend ED25519 keys, but any SSH key will do.

Generating keys: <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>

SSH keys always come in two parts:

- Private key: NEVER share this with anyone, it should ALWAYS remain private and you will never need to send the private part to anyone, GitHub, the TAs, or otherwise.
- Public key: this is the key part normally ending in `.pub`, it should be plain text that you can copy and share with other people freely:
  - You should upload this public part to your github account at <https://github.com/settings/keys>

### SSH Agent Forwarding

While we don't require any specific SSH client (putty, openssh, or otherwise) your SSH client of choice should support SSH Agent Forwarding and TCP Forwarding. (most of them do)

Using SSH Agent Forwarding allows you to use your SSH key on your local machine while working in your container or another server of choice.

GitHub has a guide for it, but I'll also cover how to enable it later in this guide.

<https://docs.github.com/en/authentication/connecting-to-github-with-ssh/using-ssh-agent-forwarding>


# Setup Instructions

## Fork the Practice0 repo

To start, **fork** the Practice0 repository to your own github account. What you name your fork is not important.

## Set up access to your container

Assuming you've completed all instructions to get added to the students repo and set up your SSH key with GitHub, we can now log in to your container.

It might take the TA or the professor a bit before the containers get started at the beginning of class, so don't be surprised if you're super fast and can't log in the same day you got your `students` repo PR merged.

I am going to proceed with the assumption we're using OpenSSH, which is the default on basically every Linux/Unix system, including Hydra, WSL, macOS and basically every Linux distro.

You should have your private and public key parts stored in `~/.ssh`, in that same directory we'll make a new file (if you don't already have one) called `config` at `~/.ssh/config`. (No file extension)

In it we can place this configuration in order to access your container:

```ssh
# This is my (robobenklein) example. Update your values with your own:
Host fdac
  Hostname da3.eecs.utk.edu # replace with the hostname of the server running the docker containers for this year.
  Port 7701 # replace with your port from Ports.md in the students repo
  User bklein3 # in case your local machine username is different from your NetID, you can set it here
  ForwardAgent yes # enable SSH Agent Forwarding so you can use your local agent keys on your container securely.
  LocalForward 8888:localhost:8888 # enable TCP forwarding from your machine port 8888, to the container's port 8888
```

With that in place, you should be able to use `ssh fdac` to log in to your container. If your key has been properly imported to your container by the TA or professor, you should **not** have to enter your password.

## Clone your Practice0 fork

> Commands in this section are expected to be run inside your container.

Now that you can log in to your container, `ssh-add -l` should list your SSH key you added to GitHub, **if not**: go back and ensure you have set up your SSH Agent and SSH Agent Forwarding properly.

You can `mkdir` and `cd` into whatever directory you want to work in, then clone your fork using the SSH URL found under the green 'Code' dropdown button.

Once you have that URL (something like `git@github.com:YOUR_USERNAME/Practice0.git`), clone it!

```bash
git clone git@github.com:YOUR_USERNAME/fdac23-Practice0.git # replace the URL!!!
```

And then you can `cd` into `Practice0`. `git status` should show you the status of your cloned repo. From now on I'll call this cloned repo your 'local' one, to differentiate from the 'remote' one that GitHub hosts.

## Configure your container git client

Since your container is essentially a blank copy of the template OS, you'll need to configure it before using it to commit changes to git.

Set your name and username with:

```
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

Notes:

- You can use almost anything for "Your Name", but I recommend using your actual name, GitHub username, or something else that people know you by. It will show up in the commit history of a repo when other people clone it, but won't be shown on GitHub, assuming you correctly set your email:
- You need to set your email to something that GitHub has on file at: <https://github.com/settings/emails> in order to make sure your commits are linked with your GitHub account.

Set up your default editor if you don't like vi (vi is set by default)
```
git config --global core.editor nano
git config --global core.editor vim
```

# Complete the notebook assignment

You should now be able to continue with the rest of the instructions that include:

- Copying the `Practice0.ipynb` notebook to your own `your-netid.ipynb`.
- Edit / complete the notebook, which should be available at <http://localhost:8888> assuming you set up SSH TCP Forwarding correctly.
  - In case your notebook process dies or becomes unresponsive, your can kill it with `kill -TERM $(pgrep 'jupyter')` and restart it using `bash /bin/notebook.sh`
  - If you start a second notebook process by accident, or want to use your own, you might end up with one listening on the next available port like 8889, you will need to adjust your ssh config or add the SSH TCP local forwarding argument to the command you used to log in: `-L 8889:localhost:8889`. (Syntax is local port on your machine, remote target host, then remote target port)
- Commit your changes (avoid adding / committing any changes to the original notebook you copied!)
- Push them to your fork.
- Make a PR for your changes.

