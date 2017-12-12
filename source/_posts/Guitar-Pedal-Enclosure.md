---
title: Guitar Pedal Enclosure
date: 2017-11-30 11:18:14
categories: Intro to Fabrication
tags:
  - Intro to Fabrication
  - Project Documentation
---

For the fourth week of Intro to Fabrication, we were asked to make a project enclosure, and...I went a little crazy with this assignment. In class, Ben mentioned powder-coated aluminum guitar pedal enclosures as a possibility, and I got really excited, because I've been playing guitar for most of my life, and it never occurred to me that I could make my own effects pedals.

I decided to make a 4-track audio looper pedal. The interface includes 4 stomp switches to control recording and playback for each loop track, 4 NeoPixel LED rings to show playback progress for each loop, a volume knob, another stomp switch for turning the pedal on and off, and an LED for indicating on/off status. I also intended to add two 1/4" mono audio jacks for input and output and a 9V power jack, but I ran out of time and wasn't able to drill the necessary holes before class.

<img src="{% asset_path enclosure.JPG %}" width="100%" title="Aluminum enclosure with acrylid lid and pedal interface.">

The case of the enclosure is powder-coated aluminum, but the lid of the enclosure is laser-cut acrylic, because I wanted to prototype my interface design before irrevocably drilling any holes in the powder-coated aluminum lid.

I consider this project half-done -- I got overly ambitious with this, especially because I had to go home for Thanksgiving break and didn't have access to the shop until the Monday before class.

# Files

<a href="{% asset_path guitar-petal-lid.ai %}" target="_blank">Illustrator file for laser cutting/etching the enclosure lid</a>
<a href="{% asset_path neopixel-ring-mount.stl %}" target="_blank">STL file for 3D printing the NeoPixel ring mount</a>

UPDATE: I [redesigned the NeoPixel ring mount](https://www.thingiverse.com/thing:2687012) to prevent the ring from rotating.

# Materials

- [1 Blemished Powder Coated Aluminum Enclosure](http://www.pedalpartsplus.com/product-p/r1032l.htm)
- [1 3PDT True Bypass Pedal Switch](http://www.pedalpartsplus.com/product-p/9008.htm)
- [4 DPDT Pedal Switches](http://www.pedalpartsplus.com/product-p/9001.htm)
- 1 10K Potentiometer
- [1 Pointer Knob](http://www.pedalpartsplus.com/product-p/10000.htm)
- [1 Panel Mount DC Power Jack](http://www.pedalpartsplus.com/product-p/6004.htm)
- [2 Panel Mount Mono 1/4" Audio Jacks](http://www.pedalpartsplus.com/product-p/6010.htm)
- [4 Pack of Rubber Feet](http://www.pedalpartsplus.com/product-p/2014.htm)
- [1 5mm LED Bezel](http://www.pedalpartsplus.com/product-p/5000.htm)
- 1 5mm Red LED
- [4 Adafruit NeoPixel 16 LED Rings](https://www.adafruit.com/product/1463)

# Process

The aluminum enclosure came with a set of countersunk screws, but I didn't want to use those with an acrylic lid as that would require drilling into the acrylic with a countersink bit. Instead, I decided to use socket cap hex screws which would hopefully sit flush with the acrylic lid. I measured the original screws with a caliper (although now I know that I should have used a [thread pitch gauge](https://www.amazon.com/Grip-Thread-Pitch-Gauge-SAE/dp/B004ROIU2A)) and found that they were 10mm M3 screws, and then I went to Home Depot and bought the equivalent socket cap screws.

## 3D Printing

While waiting for my components to arrive, I started working on a 3D printed mounting bracket for the NeoPixel LED rings. I wanted to mount the NeoPixel rings underneath the lid, to prevent damage to the LEDs when a user steps on the pedal switches. I adapted [these](https://www.thingiverse.com/thing:2610761) [two](https://www.thingiverse.com/thing:642970) designs from Thingiverse into a model with M3 screw holes, to re-use the screws that I'd already bought.

<img src="{% asset_path neopixel_mount_vectorworks.png %}" width="100%" title="Modeling the NeoPixel ring mount in Vectorworks.">

<img src="{% asset_path neopixel_mount_cura.png %}" width="100%" title="Prepraing the NeoPixel ring mount for 3D printing in Cura.">

<img src="{% asset_path 3D_print.gif %}" width="100%" title="3D printing the NeoPixel ring mount.">

<img src="{% asset_path neopixel_ring_mount.JPG %}" width="100%" title="Finished mount with a NeoPixel ring.">

## Designing the Interface

Once all of my components arrived, I measured the dimensions of the enclosure lid using a caliper, as well as the diameters of the switches, potentiometer, and LED bezel. I also found a [data sheet for the enclosure](https://cdn.shopify.com/s/files/1/1353/1185/files/1032L_Data_Sheet.pdf?5822845524302031551) that I checked my measurements against. I then used these measurements to make a laser cut design in Vectorworks.

<img src="{% asset_path vectorworks.png %}" width="100%" title="Lid design in Vectorworks.">

<img src="{% asset_path illustrator.png %}" width="100%" title="Lid design laid out for laser cutting in Illustrator.">

## Laser Cutting

I had to do a few test cuts in cardboard in order to get the placement of all of the screw holes exactly right.

<img src="{% asset_path cardboard.JPG %}" width="100%" title="Cardboard prototype of the lid.">

Once I had all of the holes positioned correctly, I did a cut in black acrylic. One mistake that I made here was to take the paper off of the acrylic before cutting & etching -- this led to smudges from dust created by etching. In my design, I intended to etch a ring around each screw hole to allow the screw heads to recess into the lid, but in practice I found that the etching was time-intensive and didn't lead to great results.

<img src="{% asset_path laser_etching.gif %}" width="100%" title="Laser etching screw indentations.">

<img src="{% asset_path lid_in_acrylic.JPG %}" width="100%" title="Lid in black acrylic.">

## Putting it Together

Finally, I attached all of my panel-mount components and my NeoPixel ring mounts.

<img src="{% asset_path ring_mount_attached.JPG %}" width="100%" title="Screwing on the NeoPixel ring mount.">

<img src="{% asset_path closeup.JPG %}" width="100%" title="Switch for one loop track with the NeoPixel ring underneath.">

<img src="{% asset_path top_view.JPG %}" width="100%" title="The assembled enclosure.">

# Next Steps

My next steps for this project would be to drill holes in the aluminum enclosure for the audio and power jacks, to playtest the interface design, to redesign the NeoPixel mounts to prevent the rings from sliding around, and eventually to re-do the interface in the original aluminum lid.
