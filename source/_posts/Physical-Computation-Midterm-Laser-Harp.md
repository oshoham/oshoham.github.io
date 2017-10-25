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

{% html5video '100%' '100%' %} {% asset_path laser_harp_2.mp4 %} {% endhtml5video %}

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

# Buying Components

We decided that we wanted to have seven strings so that our harp could play a musical scale, so we knew that we needed at least seven laser diodes and seven light sensors. We ended up buying a cheap [10-pack of red 5mW laser diodes](https://www.amazon.com/GeeBat-10pcs-Laser-Module-Lasers/dp/B01ITK4PEO) and a [20-pack of photodiodes](https://www.amazon.com/gp/product/B00M1PMHO4) on Amazon. We also bought some [MIDI jacks](https://www.amazon.com/gp/product/B00OE7JU88/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1) that we didn't end up using, because we later decided to send MIDI over the Arduino's USB port for simplicity and ease of fabrication.

# Prototyping the Circuits

{% asset_img laser_diode_photosensor_test.gif "Testing sensitivity of a photodiode to the beam from a laser diode." %}

{% asset_img 5V_power_with_10_laser_diodes.jpg "Testing that the Arduino could power all 10 laser diodes simultaneously." %}

# Fabrication

We designed the enclosure in Adobe Illustrator, including holes for our components and the Arduino's USB port, and then laser cut all of the parts out of [matboard from Blick Art Materials](https://www.dickblick.com/products/crescent-decorative-matboard-grays-and-blacks/).

{% asset_img measuring_photodiode.jpg "Measuring the dimensions of a photodiode." %}

{% asset_img fab_test.JPG "Testing hole sizes for the photodiodes." %}

{% asset_img illustrator_design.jpg "Enclosure parts laid out in Illustrator for laser cutting." %}

{% asset_img laser_cutting.gif "Laser cutting the enclosure." %}

{% asset_img wiring.JPG "Wiring running up the side of the enclosure." %}

{% asset_img inserting_lasers.JPG "Inserting the laser diodes into the enclosure." %}

{% asset_img aligning_lasers.JPG "Aligning the laser diodes to the photodiodes." %}

# Code

{% gist f352a4627e7b0a9f6c5941fad8a1a590 laser_harp.ino %}

# Serial to MIDI to Ableton Live

Since our Arduino wrote MIDI data to serial over USB instead of a MIDI jack, we needed to run an additional program to convert route the MIDI data from serial to a virtual MIDI port on one of our computers. We used SpikenzieLabs' [Serial-MIDI Converter](http://spikenzielabs.com/SpikenzieLabs/Serial_MIDI.html) to do this.

{% asset_img virtual_midi_port.png "Enabling the virtual MIDI port on OS X." %}

{% asset_img serial_to_midi.png "Serial-MIDI Converter." %}

We also used Kurt Revis' [MIDI Monitor](https://www.snoize.com/MIDIMonitor/) to verify that we were actually sending MIDI data to a virtual MIDI port.

{% asset_img midi_monitor.png "MIDI Monitor." %}

Once that was working, the last thing that we had to do was configure Ableton Live to read from the virtual MIDI port.

{% asset_img ableton_live_midi_settings.png "Ableton Live MIDI settings configuration." %}

{% asset_img ableton_live.png "MIDI instruments in Ableton Live." %}
