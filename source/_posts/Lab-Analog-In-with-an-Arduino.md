---
title: 'Lab: Analog In with an Arduino'
date: 2017-09-23 21:34:03
categories:
  - Physical Computing
tags:
  - Physical Computing
  - Physical Computing Labs
---

One part of this lab gave me some trouble: the last section, where we're supposed to have two force sensitive resistors controlling the brightness of two LEDs.

I was able to get the circuit and code working, but for some reason, whenever I squeezed one FSR, the resistance of the other adjacent FSR would also decrease by a small amount, allowing a small amount of voltage (in the range of 0.04V - 0.06V) to get through to the Arduino and turn on the corresponding LED.

{% html5video '100%' '100%' %} {% asset_path IMG_6137.mov %} {% endhtml5video %}

I'm not sure why this is happening...The circuits that measure the resistance of the FSRs should be independent from one another, so it's not clear to me why one would affect the other.
