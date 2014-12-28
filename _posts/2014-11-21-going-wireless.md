---
layout: page
title: "Going Wireless"
category: ref
date: 2014-11-21
order: 2
---

Having your bot tethered to your computer via USB can be a real drag (lolz).  You may want to try going wireless.  We have some limited options for you.  They will take some tinkering with to get working, but they might be the advantage you are looking for.

## Bluetooth
We have about 6 JY-MCU Bluetooth to Serial adapters that can be used to make your bot wireless.  They take a bit of work to get going, and they can be finicky.  See the [JY MCU Bluetooth notes for Johnny-Five](https://github.com/rwaldron/johnny-five/wiki/JY-MCU-Bluetooth-Serial-Port-Module-Notes) for more information.

## Alternative Boards
Some of the alternative boards have built-in WiFi.  They include the SparkCore, The BeagleBone Black, The Electronic Imp, and The Tessel.  If you use one of those devices, you can achieve wireless control.  See the [Alternative Controller Boards]({{ site.baseurl }}/ref/controller-boards.html) for more information.

## WiFi
We have 5 ESP8266 WiFi to Serial adapters.  These crazy $4 units have their own GPIO pins and can be used standalone or connected to an arduino.  Only problem: we don't know how to use them.  There is an entire [community of hackers](http://www.esp8266.com/) who play with this chip.  Perhaps you will figure out something awesome to do with these?

## RF
We have two nRF24L01 RF modules that can be used to communicate.  We've never tried to get them working, so they will require some tinkering.  


