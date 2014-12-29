---
layout: page
title: "Adding Line-Following Sensors"
category: tut
date: 2014-11-21
order: 4
---

## What you need

To build a line-following bot, you will need to add a sensor array to the reference kit. To do so, you will need:

 - (1) [Reference kit bot](http://nodebots.codemash.org/tut/building-the-reference-bot.html)
 - (1) IR Reflectance Sensor Array
 - (1) Female-to-female ribbon cable with at least 9 wires
 - Padded double-sided tape
 
As with the reference kit, you are encouraged to pursue your own design when adding line-following to your bot. However, this is an example of how you can simply extend a bot to make it a line-follower.

## Orient the sensor array
Before attaching the sensor, make sure it is oriented correctly. The pins should be pointing up toward the chassis and the sensors (small black rectangles) down toward the ground. In addition, considering that the front of the bot is where the wheels and servos reside, pin 1 should be toward the left wheel, pin 6 toward the right.

## Attach the sensor array to your chassis

![Line follower front view](/assets/nodebot-assemble/line-follower-front.jpg)

As shown in the preceding image, use strips of padded double-sided tape to mount the sensor array between the wheels at the front of the bot. Ensure that the array sits within one quarter of an inch of the line to be followed by doubling up the padded tape as needed (or using some other padding material).

## Connect the sensor array to the Ardiuno

Using the ribbon cable, connect the sensor array to the Arduino board according to the following wiring diagram (the wire coloring matches that of the provided photos).

![Line follower wiring](/assets/wirings/sensor-array.jpg)

The following image shows the Arduino end of the connections.
![Line follower wiring view](/assets/nodebot-assemble/line-follower-wiring.jpg)

## Reprogram your bot

Now that the hardware is ready, you need to program your bot to follow a line. The following code provides a useful starting point for your line-following bot.

**bot.js**

<script src="http://gist-it.appspot.com/github/BrianGenisio/codemash-nodebots-docs/blob/master/examples/base-line-follower.js"></script>

**__NOTE:__** When you run this code (`node bot.js`), the wheels may start spinning.  They have been centered, so this means they need to be trimmed until they stop spinning.  Use a screwdriver and trim them until they are silent.

### Resources:
- [Johnny-Five Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Johnny-Five Servo Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Johnny-Five IR Reflectance Array Docs](https://github.com/rwaldron/johnny-five/wiki/IR.Reflect.Array)
- [Reading Keypresses](http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin)
