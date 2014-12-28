---
layout: page
title: "Alternative Controller Boards"
category: ref
date: 2014-11-21
order: 4
---

If you'd like to experiment with something other than an Arduino, we have some alternative computers that you can use.  These units all have their own advantages over the Arduino but will take some extra tinkering to get them working.

## Electronic Imp
The [Electronic Imp](https://electricimp.com/) is a WiFi-enabled controller packed into a SD card.  It has a couple of GPIO pins and it fits into tight spaces.  You need to use the [Tyrion](https://github.com/rwaldron/tyrion) firmware with it and the [imp-io](https://github.com/rwaldron/imp-io/) adapter for Johnny-Five.

## Beaglebone Black
The [Beaglebone Black](http://beagleboard.org/BLACK) is a serious piece of equipment.  This thing comes with its own IDE!  Once you get it hooked up to WiFi (using the USB adapter), you can connect to it with your browser and program the board via the Cloud9 IDE. Johnny-Five is really easy to use with this board with the [Beaglebone-IO](https://github.com/julianduque/beaglebone-io) adapter.

## Spark Core
The [Spark Core](http://docs.spark.io/) is a small chip with built-in WiFi and Arduino-compatible pin-outs.  It is easy to use with Johnny-five once you load the [Voodoospark firmware](https://github.com/voodootikigod/voodoospark#getting-started) and the [spark-io](https://github.com/rwaldron/spark-io/) adapter for Johnny-Five.

## Galileo
The [Intel Galileo](http://www.intel.com/content/www/us/en/do-it-yourself/galileo-maker-quark-board.html) is a board with Arduino sockets but it runs Linux.  Actually, this particular board runs Windows 8!  But Johnny-Five won't run on Windows on this device.  You'll have to load the Linux image and then use the [Galileo-io](https://github.com/rwaldron/galileo-io/) adapter for Johnny-Five.

## Tessel
The [Tessel](https://tessel.io/) is interesting.  It is a WiFi enabled chip which runs JavaScript.  It is the only non-Linux based board in the flock that runs JavaScript natively.  Well, kind of.  It actually transpiles all of your JavaScript to Lua.  Unfortunately, this process is not compatible with the flavor of JavaScript that Node uses (V8).  Because of this, it doesn't run Johnny-Five.  It is still fun to play with.  It also includes a Bluetooth Low Energy add-on as well as a 12-servo add-on.  Perhaps you can do something cool with this?

## Extra Arduinos
We also have several extra Arduino Unos for you to use.  Johnny-Five can support [multiple boards at the same time](https://github.com/rwaldron/johnny-five/wiki/Boards) so you aren't limited to a single board. You might also find a use for [remote-io](https://github.com/monteslu/remote-io) which allows you to remote-control Johnny-Five based devices.