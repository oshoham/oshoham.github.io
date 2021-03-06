---
title: Lunar Lander Controller
date: 2018-01-30 18:03:06
tags: Tangible Interaction Workshop
categories: Tangible Interaction Workshop
---

For the 1st Tangible Interaction Workshop assignment, we were asked to make a controller for a [browser version of the classic arcade game _Lunar Lander_](http://moonlander.seb.ly/).

<img src="{% asset_path lunar-lander.jpg %}" width="100%">

The controls for this version of the game are:
- Click the left mouse button to start.
- Rotate clockwise and counter-clockwise using the right and left arrow keys, respectively.
- Fire the thruster using the up arrow key.

# Components

I chose to use a [momentary toggle switch](https://www.amazon.com/gp/product/B000CO7IJK/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) to control the thruster and a [rotary encoder with a built-in momentary switch](https://www.adafruit.com/product/377) to control the rotation and handle the mouse click. I needed a microcontroller that could be programmed to be a USB HID device in order to act as a keyboard and mouse, so I went with an [Adafruit Feather 32u4](https://learn.adafruit.com/adafruit-feather-32u4-bluefruit-le) that I had lying around from a previous project. I also used an [Adafruit Perma-Proto Half-sized Breadboard PCB](https://www.adafruit.com/product/1609) for the circuit, and used [female headers](https://www.adafruit.com/product/598) to avoid soldering the microcontroller directly to the perfboard.

<img src="{% asset_path switch.jpg %}" width="100%" title="Momentary toggle switch.">

# Enclosure

Once I'd sourced my components, the next step was to design the interface and enclosure. I decided to go with a standoffs-and-panels approach (as described in the [Intro to Fabrication notes](https://itp.nyu.edu/fab/intro_fab/week-4-enclosures/)), using [black nylon hex standoffs](https://www.amazon.com/gp/product/B07214815H/) and [1/8" white matte acrylic](https://www.canalplastic.com/collections/plexi-sheets/products/7508-white-opaque-p95-acrylic-sheet?variant=32918636814). I designed the panels in Vectorworks, then cut them out on the 75 Watt Epilog laser cutter.

<img src="{% asset_path vectorworks.jpg %}" width="100%" title="Panel design in Vectorworks.">

Before I cut the panels in acrylic, I did a test cut in cardboard to make sure that my measurements were correct.

<img src="{% asset_path cardboard-1.jpg %}" width="100%">

<img src="{% asset_path cardboard-2.jpg %}" width="100%">

Once I was sure that everything checked out, I cut and etched the panels in the white matte acrylic. I left the paper on the acrylic when etching, so that I could paint over the etched text in black acrylic paint later.

<img src="{% asset_path acrylic.jpg %}" width="100%">

<img src="{% asset_path paint-1.jpg %}" width="100%" title="Painting the top panel.">

<img src="{% asset_path paint-2.jpg %}" width="100%" title="Waiting for the paint to dry.">

# Circuit

At this point, the fabrication was pretty much done, and it was time to work on the circuit. First, I soldered wires to my components and prototyped the circuit on a breadboard. I made sure to use pins 2 and 3 for the rotary encoder, as the [Encoder library](https://www.pjrc.com/teensy/td_libs_Encoder.html) works best with hardware interrupt pins, and pins 2 and 3 are both [interrupt pins on the Adafruit Feather 32u4](https://learn.adafruit.com/adafruit-feather-32u4-bluefruit-le/pinouts#logic-pins). Once I was sure everything was working, I soldered the wiring to the Perma-Proto PCB and assembled the controller.

<img src="{% asset_path lunar-lander-circuit.jpg %}" width="100%" title="Circuit diagram for the controller.">

# Putting it Together

<img src="{% asset_path assembled-1.jpg %}" width="100%" title="Top view of the assembled controller.">

<img src="{% asset_path assembled-2.jpg %}" width="100%" title="Perma-Proto PCB mounted on standoffs in the controller.">

<img src="{% asset_path assembled-3.jpg %}" width="100%">

# Code

The code for controlling the up arrow key and left mouse click using the two momentary switches was pretty straightforward. The more complicated part was mapping the rotary encoder's rotation to the left and right arrow keys. Initially, turning the rotary encoder would only rotate the lander by a small amount, because each turn of the knob only "pressed" the corresponding arrow key for a short amount of time. The solution to this was to add a short delay between pressing the key and releasing the key, with the length of the delay proportional to the amount of rotation generated by each turn.

{% gist d60aa7594115b4ba8b722f6d539c183f %}

# Playtesting

{% html5video '100%' '100%' %} {% asset_path playtest.mp4 %} {% endhtml5video %}

# Files

[Arduino source code](https://gist.github.com/oshoham/d60aa7594115b4ba8b722f6d539c183f)
<a href="{% asset_path lunar-lander.ai %}" target="_blank">Illustrator file for laser cutting the enclosure</a>
<a href="{% asset_path lunar-lander.fzz %}" target="_blank">Fritzing sketch for the circuit diagram</a>
