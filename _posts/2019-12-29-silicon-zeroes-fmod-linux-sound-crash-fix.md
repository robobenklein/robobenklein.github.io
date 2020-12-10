---
layout: post
title: "Silicon Zeroes FMOD Linux Sound Crash Fix"
date: 2019-12-29 # date of publish (sorting value)
created: 2019-12-29 # date of creation (shown value, defaults to `date`)
modified: 2019-12-29 # date last updated (shown if different than created)
categories: gaming
description: "How to fix the FMOD crash on Linux in Silicon Zeroes"
tags: [crash, linux, gaming, fmod, pulseaudio]
image:
  feature: 2019-12-29/crash.png
  credit: The crash screen
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: true
share: true
published: true
---

Just bought Silicon Zeroes (I know I'm late to the game, been too busy in Zachtronics land) and I'm met with this screen...


![](/images/2019-12-29/crash.png)

Well it's not a great first start experience, but luckily someone encountered a similar problem in 2018: [github.com/PleasingFungus/Silicon-Zeroes/issues/127](https://github.com/PleasingFungus/Silicon-Zeroes/issues/127)

But hey, at least it's better than *Prime Mover* which crashes on startup without any indication to why. I even looked at the strace attempts, but that's not the game this post is about.

So with that, I'm mostly making this post for my own reference down the road, and as a guide for those who don't immediately understand how an `LD_PRELOAD` library works.

# Fix it

Drop the code in a `.c` file:

```c
// gcc -shared -fpic -Os -o /tmp/Si0s.so this.c -ldl
#define _GNU_SOURCE 1
#include <dlfcn.h>
#include <stdlib.h>
#include <stdio.h>

int FMOD_System_GetNumDrivers(void *, int *);
int FMOD_System_GetDriverInfo(void *, int, char *, int, void *, int *, int *, int *);
int FMOD_System_SetDriver(void *, int);

int FMOD_System_Create(void** sys)
{
  __typeof(FMOD_System_Create) *real_create = dlsym(RTLD_NEXT, "FMOD_System_Create");
  if (!real_create) {
    fprintf(stderr, "dlsym: %s\n", dlerror());
    abort();
  }
  int ret, drv, numdrv;
  if ((ret = real_create(sys)))
    return ret;
  const char *drvstr = getenv("FMODSUX_SETDRIVER");
  if (drvstr && sscanf(drvstr, "%d", &drv) == 1)
    FMOD_System_SetDriver(*sys, drv);
  else if (!FMOD_System_GetNumDrivers(*sys, &numdrv))
    for (drv = 0; drv < numdrv; drv++) {
      char namebuf[50];
      int rate, mode, nch;
      if (!FMOD_System_GetDriverInfo(*sys, drv, namebuf, sizeof namebuf, 0, &rate, &mode, &nch))
	printf("%2d: mode %d, %d/%dch: %s\n", drv, mode, rate, nch, namebuf);
    }
  return 0;
}
```

Now compile that into a shared library for our system:

```bash
gcc -shared -fpic -Os -o $HOME/SOME/PATH/Si0s.so THAT_FILE.c -ldl
```

Of course you should replace the path with somewhere that you'll remember why it's there.

Then in your launch options, set the `LD_PRELOAD` envvar there:

![](/images/2019-12-29/launchopts.png)

`LD_PRELOAD=$HOME/???/Si0s.so %command%`, s/???/wherever you put the compiled file.

And now you should be good to go!

Perhaps this should be added to the game's libraries...

If the dev ever reads this, just edit SiliconZeroes.sh:

```patch
diff --git a/SiliconZeroes.sh b/SiliconZeroes.sh.new
index d4c717d..9488d13 100755
--- a/SiliconZeroes.sh
+++ b/SiliconZeroes.sh.new
@@ -1,3 +1,4 @@
 #!/bin/sh
 export LD_LIBRARY_PATH="libraries:$LD_LIBRARY_PATH"
+export LD_PRELOAD="libraries/fmodsounddevfix.so $LD_PRELOAD"
 exec ./rawexec "$@"

```

And distribute a copy of that library with the fixed function override.
