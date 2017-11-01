---
title: Phyiscal Computing Final Project Ideas
date: 2017-10-31 19:35:38
categories:
  - Physical Computing
tags:
  - Physical Computing
---

# Glove MIDI Controllers

One idea that I've been thinking about, straight out of [Phyiscal Computing's Greatest Hits](http://www.tigoe.net/blog/category/physicalcomputing/176/), is a pair of MIDI controller gloves. One glove would control drum beats via tapping:

<img src="{% asset_path tap.gif %}" width="100%" title="Tapping gesture for playing drums.">

The other glove would control the pitch of synth pad notes by sliding your fingers across a surface:

<img src="{% asset_path slide.gif %}" width="100%" title="Sliding gesture for controlling the pitch of notes.">

I'm imagining that the synth glove would trigger a note continuously while your finger was in contact with a surface, even if you weren't sliding your finger to change the pitch. I still need to do some research to determine whether I'd need additional sensors beyond force-sensitive resistors to sense a sliding motion.

I'd also like to provide some sort of visual and/or haptic/rumble feedback to user when notes are triggered. Visual feedback could be something like LEDs near the fingertips that light up when notes are triggered.

I'd also like to make these gloves wireless if possible, so I'd have to look into sending MIDI data over Bluetooth or WIFI.

It might be unrealistic to try to make two working gloves in time for the final, in which case I would just pick one of the two to work on, but I like the idea of a pair that can be combined to play rhythm and melody simultaneously.

I also think that this project would benefit from collaboration, as it's pretty technically complicated in scope.

# Drawing Machine

Another idea that I've been thinking about is building a wall-mounted tension-controlled drawing machine, in the vein of Jürg Lehni's [Hektor](http://juerglehni.com/works/hektor) and [Viktor](http://juerglehni.com/works/viktor) projects.

{% vimeo 15820929 %}

{% vimeo 16379803 %}

However, in order for this to qualify as a Physical Computing final project, I would need to come up with a way to make it physically interactive.

One way to make it interactive could be to use a Kinect and/or computer vision to detect the contours of a person's body or face, and have the machine draw those contours, adjusting the drawing if the person moves. So, if you were to stand perfectly still, the machine would draw you accurately, but if you moved, you'd end up with a distorted drawing.

This is also a technically complicated project that would benefit from collaboration.
