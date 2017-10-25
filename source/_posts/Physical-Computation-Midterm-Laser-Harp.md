---
title: 'Physical Computing Midterm: Laser Harp'
date: 2017-10-24 22:16:13
categories:
  - Physical Computing
tags:
  - Physical Computing
  - Project Documentation
---

For the midterm for Physical Computing, [Alan Peng](https://medium.com/physical-computing-by-boys-on-hudson) and I built a laser harp MIDI controller.



# Inspiration

After we were assigned as partners, Alan and I spent some time brainstorming about what we wanted to make. We came across [Klanglichter](https://vimeo.com/128600307), a really beautiful laser harp project made by Tobias Kreter and Onat Hekimoglu, and were inspired to try and make a similar instrument. We decided to make our laser harp a MIDI controller, so that we could combine our serial communication lab and midterm assignments into one project.

We did some research and found [several](http://www.instructables.com/id/Frameless-Laser-Harp/) [different](http://www.instructables.com/id/Quick-Arduino-MIDI-Laser-Harp/) [Instructables](http://www.instructables.com/id/13-Note-MIDI-Laser-Harp-Controlled-by-Arduino/) on making an Arduino-controlled laser harp. There seemed to be two different approaches that we could take:
1. A frameless laser harp that used a single, powerful laser reflected off of a mirror attached to a rapidly rotating DC motor to create the illusion of multiple laser beams.
2. A framed laser harp that used multiple lasers, each pointing at somet type of light sensor (photoresistors, phototransistors, or photodiodes).

We decided to go with the second approach, because we were a little nervous about working with powerful lasers that could potentially blind us or others and a DC motor that would require more than 5V of power.

# Sketches

Our first step was to sketch out a few rough ideas of what the harp might look like:

{% asset_img sketching_1.JPG "A (very) rough sketch showing where we thought the components would be located." %}

{% asset_img sketching_3.JPG "Another sketch showing the angled design that we ended up going with." %}

# Buying Components and Prototyping the Circuits

We decided that we wanted to have seven strings so that our harp could play a musical scale, so we knew that we needed at least seven laser diodes and seven light sensors. We ended up buying a cheap [10-pack of red 5mW laser diodes](https://www.amazon.com/GeeBat-10pcs-Laser-Module-Lasers/dp/B01ITK4PEO) and a [20-pack of photodiodes](https://www.amazon.com/gp/product/B00M1PMHO4) on Amazon. We also bought some [MIDI jacks](https://www.amazon.com/gp/product/B00OE7JU88/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1) that we didn't end up using, because we later decided to send MIDI over the Arduino's USB port.


