---
layout: page
title: "Building the Reference Kit"
category: tut
date: 2014-11-21
order: 3
---
The kit you were given includes the following components:

- (1) [SainSmart Uno Arduino Clone](http://www.sainsmart.com/sainsmart-uno-r3-atmega328-au-development-board-compatible-with-arduino-uno-r3.html)
- 5mm Wood Platform -- (1) 3" x 6.75" panel and (2) 2.5" wheels
- (2) [Continuous Rotation Servos](http://www.amazon.com/NEEWER%C2%AE-Spring-SM-S4306R-Interface-degree/dp/B00EDESABU#)
- (1) [5/8" Ball Caster](http://www.amazon.com/TruePower-Roller-Ball-Transfer-Bearings/dp/B009KAQVWC/ref=sr_1_4)
- (1) [Small Breadboard](http://www.amazon.com/SYB-170-Color-Board-Small-Bread/dp/B00ARUF2JM/ref=sr_1_2)
- (6) [Solderless Breadboard Wires](http://www.amazon.com/Wosang-Solderless-Flexible-Breadboard-Jumper/dp/B005TZJ0AM/ref=pd_bxgy_e_img_y)
- (2) [3-pin Headers](http://www.amazon.com/5pcs-Angle-Single-Header-Strip/dp/B0079SK5MO/ref=sr_1_4)
- (1) 10' USB Cable (A to B)
- (1) 9v Battery
- (1) 9v to 2.1mm Battery Clip
- (4) Zipties
- (6) #6x3/8" Self-Drilling Screws
- (1) LED
- (1) 220 Ohm Resitor
- (1) 10K Potentiometer

You are encouraged to build your bot however you want, but this is how you can build it without any modifications from the original design.

### Lay out your parts
You want to get a feel for where everything will go.  Lay your major components out on the board and rough-in where you think you'd like them to go.

![Rough-out the parts](/assets/nodebot-assemble/nodebot-rough-out.JPG)

### Attach your wheels to your servos
The easiest way to do this is to remove the servo horn and attach the horn to the wheels using the self-drilling screws.  The holes in the servo horn are smaller than the screws but these things make quick work of the plastic and go right through to the wood.  Just make sure they are centered. Reattach the horns when you are done.

![Attach the wheels to the servo horns](/assets/nodebot-assemble/nodebot-attach-wheels-to-servo.JPG)

### Attach the servos to your chassis
Use two of the zip-ties to attach your servos to your chassis.  After they are tight, trim any excess.

![Mark your servo location](/assets/nodebot-assemble/nodebot-mark-servo-location.JPG)
![Attach the servos with zip-ties](/assets/nodebot-assemble/nodebot-attach-servos.JPG)

### Attach the caster wheel to the bottom of the chassis
The self-drilling screws are really useful for this.

![Attach the front caster wheel](/assets/nodebot-assemble/nodebot-attach-caster2.JPG)

### Attach the Arduino and Breadboard
Affix the Arduino using double-stick tape.  Affix the breadboard using the attached mounting tape.

![Affix the boards](/assets/nodebot-assemble/nodebot-attach-boards.JPG)

### Mount the battery
Using double-stick tape, affix the battery to the bot.  Connect it to the Arduino using the 9v clip.  You may also find it useful to lay the battery on its side between the servos.

![Affix the battery](/assets/nodebot-assemble/nodebot-attach-battery.JPG)

### Power the servos from the board
You are not likely to keep the servos here permanently, but this is a good starting point.  Pins 9 and 10 support PWM signals, which are best for servos.  You can connect them to the SVG pin headers for now.  The white leads are the "signal" for the SVG pins.

![Power the servos](/assets/nodebot-assemble/nodebot-plug-servos.JPG)

Your servos may start spinning now.  If that happens, you can trim them using the screws on the back of the servos.  You may need to do this again once you have hooked your system up to the software.

![Trim the servos](/assets/nodebot-assemble/nodebot-calibrate.JPG)

### Start programming your bot!

Now you have a working bot.  You can plug your USB cable into the board and get started.  Here is a good starting point:

**bot.js**

<script src="http://gist-it.appspot.com/github/BrianGenisio/codemash-nodebots-docs/blob/master/examples/base-sumobot.js"></script>

**__NOTE:__** When you run this code (`node bot.js`), the wheels may start spinning.  They have been centered, so this means they need to be trimmed until they stop spinning.  Use a screwdriver and trim them until they are silent.

### Resources:
- [Johnny-Five Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Johnny-Five Servo Docs](https://github.com/rwaldron/johnny-five/wiki/Servo)
- [Reading Keypresses](http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin)

![Start Programming](/assets/nodebot-assemble/nodebot-program-bot.JPG)