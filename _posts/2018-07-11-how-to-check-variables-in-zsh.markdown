---
layout: post
title: How to Check Variables in ZSH
modified: 2018-07-13
categories: zsh
description:
tags: [zsh]
image:
  feature: #filename in images/ for post header
  credit: #text to show as image credit
  creditlink: #when credit is clicked.
  background: #filename in images/ to use as page background
comments: false
share: true
published: true
date: 2018-07-11T19:49:37-04:00
---

You normally just `[[ $VAR == "Value" ]]`, right? Well what about if the variable is set to an empty scalar? (`VAR=""`)

It gets interesting, but for the TLDR; use `if (( ${+VAR} ));` to check if it is set.

Now onto why this is the preferred form (about performance)...


There are three common methods for checking if variables are **set**. (This is different from whether they contain information.)

The three methods (commonly known) are:

## `[[ -v VAR ]]`

This only works in ZSH 5.3+, normally I would recommend against this in most cases, but if you are *absolutely certain* it will only ever run on newer versions of ZSH, use this one.

It is the fastest that I currently know of, but I don't use it because ZSH 5.1 is still fairly common.

## `typeset -p VAR >/dev/null 2>&1`

This actually has pretty bad performance by comparison, but is still used in some cases. I have yet to find any reason why this should be preferred.

## `(( ${+VAR} ))`

My personal preferred way to check that variables are set. Also works well for assoc. array values, especially when checking for commands like so:

```zsh
if (( ${+commands[apt]} )); then
  echo Apt is available.
fi
```

# Performance and speed

For this, I wrote a small test script:

```zsh
#!/bin/zsh

N=2000000
local SOME_VARIABLE
SOME_VARIABLE="something"

TIMEFMT=$'\nreal\t%E\nuser\t%U\nsys\t%S'

echo
echo "typeset -p:"
time (repeat $N { typeset -p "SOME_VARIABLE" > /dev/null 2>&1 })

echo
echo '${+var}:'
time (repeat $N { (( ${+SOME_VARIABLE} )) })

echo
echo '[[ -v var ]]'
time (repeat $N { [[ -v SOME_VARIABLE ]] })

echo
echo "Variable NOT set: "
unset SOME_VARIABLE

echo
echo "typeset -p:"
time (repeat $N { typeset -p "SOME_VARIABLE" > /dev/null 2>&1 })

echo
echo '${+var}:'
time (repeat $N { (( ${+SOME_VARIABLE} )) })

echo
echo '[[ -v var ]]'
time (repeat $N { [[ -v SOME_VARIABLE ]] })

```

And the clear winner here is `[[ -v`, but it's important to see how close the math `((${+` function check is. `typeset` doesn't really compare well here in terms of performance.

```
typeset -p:

real	19.75s
user	9.50s
sys	10.01s

${+var}:

real	1.02s
user	1.02s
sys	0.00s

[[ -v var ]]

real	0.37s
user	0.37s
sys	0.00s

Variable NOT set:

typeset -p:

real	25.78s
user	14.87s
sys	10.65s

${+var}:

real	1.02s
user	1.02s
sys	0.00s

[[ -v var ]]

real	0.31s
user	0.31s
sys	0.00s

```

# Update: With Functions

As of recently exploring ZSH performance for P9K, I've found a much better way to check a variable's existence via a function. (For whatever reason that may be required.)

```
# P9K's old defined function:
defined () {
	local varname="$1"
	typeset -p "$varname" > /dev/null 2>&1
}

# My new version:
def () {
  [[ ! -z "${(tP)1}" ]]
}

# performance of
defined VAR
# vs
def VAR

```

This resulted in a 2 to almost 40 times speedup depending on the systems I tried this on. A function call in itself is already an overhead, but at least this way it was much faster than making the call to `typeset` again.

In case you're wondering how my `def` function works, it's fairly simple:

```
${(tP)variable} - gives a string
  (  )          - shell variable expansion flags
  (t )          - report type of variable: is blank / empty for unset variables,
                  'scalar' for var="", array for var=(), etc
  ( P)          - perform double expansion on the variable,
                  meaning it takes the var's value as the name of a variable
  (  )variable  - var with name of another variable to check
```

This is potentially preferable to ((${+ since we can dynamically name variables depending on other states, for example, we can now check for variables like:

```
if def PROMPT_COLOR_$RETVAL
```

Which can now use different envvars depending on `RETVAL`.
