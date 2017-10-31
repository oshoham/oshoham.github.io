---
title: DIY 9V LED Flashlight
date: 2017-10-30 21:39:08
categories: Intro to Fabrication
tags:
  - Intro to Fabrication
  - Project Documentation
---

My first Intro to Fabrication assignment was to make a flashlight, where a "flashlight" could be anything that was portable, battery-powered, and created light. I chose to make a simple light out of a 9V battery clip, a tactile switch, and a large white LED in a holder that I scavenged from the junk shelf.

<img src="{% asset_path flashlight.gif %}" width="100%">

# References

I was inspired by [these](http://www.instructables.com/id/Tiny-9V-Clip-Flashlight/) [two](http://www.instructables.com/id/9V-LED-Flashlight/) Instructables for making 9V LED flashlights. I found these instructables by searching through the [flashlight Instructables](http://www.instructables.com/howto/flashlights/) page that Ben linked to in the [class notes](https://itp.nyu.edu/fab/intro_fab/week-1/).

# Materials

<img src="{% asset_path junk_shelf_light.JPG %}" width="100%" title="A large white LED in a weird plastic holder found on the junk shelf.">

<img src="{% asset_path junk_shelf_light_2.JPG %}" width="100%" title="Side view of the LED.">

<img src="{% asset_path 9V_battery.JPG %}" width="100%" title="A 9V battery.">

<img src="{% asset_path 220_ohm_resistor.JPG %}" width="100%" title="A 220Ω resistor, to prevent the LED from burning out from the excess voltage.">

<img src="{% asset_path tactile_switch.JPG %}" width="100%" title="A momentary tactile switch.">

<img src="{% asset_path 9V_battery_clip.JPG %}" width="100%" title="A battery clip for getting power and ground wires from the 9V battery. Not the actual battery clip that I used -- I forgot to take a picture of that one before I assembled the flashlight.">

# Tools

<img src="{% asset_path wire_cutters.JPG %}" width="100%" title="Wire cutters.">

<img src="{% asset_path hot_glue_gun.JPG %}" width="100%" title="Hot glue gun.">

# Testing the LED

To make sure that the LED still worked, I used some jumper cables to connect the LED to the battery clip, with a resistor in between. I read that most white LEDs work well at 3.3V and 25mA, and if you plugg those numbers into Ohm's Law (V / I = R), you get a resistance of (9V - 3.3V) / 0.025A = 228Ω, so a 220Ω resistor seemed like a reasonable choice.

<img src="{% asset_path jumper_cables.JPG %}" width="100%">

# Soldering and Hot Glueing

First, I cut off some excess plastic from the LED holder using a pair of wire cutters.

Next, I soldered the anode of the LED to a resistor, which was in turn soldered to one leg of the tactile switch. Then, I soldered the other leg of the switch to the battery clip's power wire, and the battery clip's ground wire to the LED's cathode. I also cut off the two unused legs of the switch.

Finally, I hot glued the switch and the LED holder to the top of the battery clip.

<img src="{% asset_path light_with_switch.JPG %}" width="100%" title="LED soldered to one leg of the switch with the resistor in between.">

<img src="{% asset_path assembled_light.JPG %}" width="100%" title="LED and switch soldered to power and ground of the battery clip and attached to the clip with hot glue.">

# Assembled Flashlight

<img src="{% asset_path assembled_light_side.JPG %}" width="100%" title="Assembled flashlight with 9V battery.">
