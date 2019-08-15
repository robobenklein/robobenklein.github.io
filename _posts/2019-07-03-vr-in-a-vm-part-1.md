---
layout: post
title: "VR in a VM part 1: GPU PCIe Passthrough Experience"
date: 2019-07-03 # date of publish (sorting value)
created: 2019-07-03 # date of creation (shown value, defaults to `date`)
modified: 2019-07-03 # date last updated (shown if different than created)
categories: hardware
description: "A Guide / experience notes for getting my PCIe GPU Passthrough working."
tags: [hardware, vm, gpu, pcie]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: false
---

Alright, a few developments have occurred of importance:

I bought a Vega 56 GPU, meaning I now have two GPUs in my Triangulum desktop, the primary being the Vega 56, the one we're forwarding being the GTX 980. (Bought the 56 mostly as a personal upgrade for gaming & to get open drivers.)

I also received an Oculus room-scale setup from my uncle who is upgrading to a newer VR system! (THANKS!) This includes

Now since many VR titles for the Oculus have no hope of running on Linux (e.x. the controllers have no mapping at all, OpenHMD and OSVR both have different tracking protocols for it...) we're going to run the Oculus VR in a Windows VM that gets access to the GTX 980.

This article will be in sections, this first one is me working through the issues I encounter getting the whole system set up and working.


# Hardware support

For me to have a chance at PCIe passthrough I need some specific hardware, luckily I built Triangulum with this in mind for the future, so I am already set.

I have:

 - A system which supports SR-IOV with the IOMMU
 - A GPU not being used by the HOST system (Linux)
 - Enabled SR-IOV and the IOMMU both in the BIOS and Linux.

For that last part, I needed to modify the BIOS settings:

 - Turn SR-IOV on, no problem.
 - Force IOMMU on, since for some reason 'Auto' turns it off by default?

Then for the Linux side:

 - Add `amd_iommu=on` to the Linux cmdline.
 - *Remove* `iommu=soft` from the cmdline args, since otherwise I don't think Linux looks at the hardware IOMMU.

Now to verify I got it working I used the command: `dmesg | grep -i -e DMAR -e IOMMU` which when working showed some output like this:

```
[    0.000000] Command line: BOOT_IMAGE=/vmlinuz-5.0.0-20-generic root=/dev/mapper/ubuntu--vg-root ro amd_iommu=on
[    0.162641] Kernel command line: BOOT_IMAGE=/vmlinuz-5.0.0-20-generic root=/dev/mapper/ubuntu--vg-root ro amd_iommu=on
[    1.420534] AMD-Vi: Unable to write to IOMMU perf counter.
[    1.421388] iommu: Adding device 0000:00:01.0 to group 0
...
[    1.424720] iommu: Adding device 0000:12:00.0 to group 8
[    1.424812] iommu: Using direct mapping for device 0000:12:00.0
[    1.425073] iommu: Adding device 0000:15:00.0 to group 9
...
[    1.425536] iommu: Adding device 0000:39:00.0 to group 3
[    1.425785] AMD-Vi: Found IOMMU at 0000:00:00.2 cap 0x40
[    1.934309] AMD-Vi: AMD IOMMUv2 driver by Joerg Roedel <jroedel@suse.de>
[   30.523573] vboxpci: IOMMU found
```

Ah, nice! The VirtualBox DKMS driver got connected with the IOMMU, if we can use VirtualBox that'll make life easier since we can choose to forward specific USB 3.0 devices into a VM easily and at runtime. (The Oculus setup I've got uses 4x USB 3.0 ports)

Using this fancy command from the ArchWiki made me confident that this setup should work:

```bash
#!/bin/bash
shopt -s nullglob
for g in /sys/kernel/iommu_groups/*; do
    echo "IOMMU Group ${g##*/}:"
    for d in $g/devices/*; do
        echo -e "\t$(lspci -nns ${d##*/})"
    done;
done;
```

#
