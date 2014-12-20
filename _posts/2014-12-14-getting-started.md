---
layout: page
title: "Getting Started"
class: getting-started
category: tut
date: 2014-12-23
order: 1
---

This guide is intended to get you familiar with using Johnny-Five to control inputs and outputs of your Arduino.  This section is completely optional, but it is a good way to start.  Do as much as you'd like, or jump right into building your bot.  Your choice!

## Make an LED blink!
First step, let's make sure everything is working.  You will be running JavaScript on your computer which will communicate to your Arduino board via Serial.

In this example, we'll just get an LED to blink.

0. Make sure you've installed Node ([prerequisites]({{ site.baseurl }}/tut/prerequisites.html)) 
0. Connect your Arduino to your computer via USB
0. Open up a command prompt and create a folder to work in
0. From there, install Johnny-Five: `npm install johnny-five`.  This will install into your "node_modules" folder.
0. Create a file called "bot.js" and add the [LED Blink Code](#ledblink).
0. Wire up an LED (provided) to pin 11 with a resistor (provided) in serial to ground.
0. Run your bot: `node bot.js`.  You should see the LED blinking!

<a name="ledblink"></a>
**LED Blink Code:**

```javascript
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  (new five.Led(11)).strobe();
});
```

**LED Blink Wiring:**

![LED Wiring Diagram]({{ site.baseurl }}/assets/wirings/led.png)

## Make the LED pulse
In the last example, you told the LED to turn on and off.  Internally, the `strobe()` method just turns the pin high and low over time.  We'd like to change this program to fade in and out over time.  Instead of going high or low, you will be using the PWM (pulse width modulation) features of the board.  You can set the values to anywhere between `0` and `255` which will create a "square wave" with a duty cycle that simulates a "percentage on".  

Give it a try.  Change `strobe()` to `brightness(100)` and re-run your script.  Change the value from `100` to something else like `50` or `200`.  Notice how the LED brightness is controlled!

Now, change `brightness(100)` to `pulse(1000)`.  You are telling your LED to pulse between `0` and `255` over a 1-second interval.

## Read Input using a Potentiometer
A potentiometer (included) is a device that allows you to physically alter the resistance by turning a screw or sliding a lever.  It is a lot like a variable, but in hardware!  The included potentiometer is variable between 0ohm and 10Kohm over 20 full turns.  It has three pins.  The center pin will be variable and the outside pins will measure x or 10k-x.  

If you send a voltage from one outside pin to the ground of the other outside pin, the middle pin becomes a "voltage divider".  If you attach the center pin to an analog input on your Arduino, you can read the value (`0` through `1023`).

0. Put the potentiometer on your breadboard.
0. Connect the 5V line from your Arduino to one of the end pins of your potentiometer.
0. Connect the Ground line from your Arduino to the other end pin of your potentiometer
0. Connect the center pin of your potentiometer to the "Analog 0" (A0) pin on your Arduino.  [Wiring Diagram](#potinput_wiring)
0. Modify your "bot.js" file to include the [Potentiometer Input Code](#potinput) code.
0. Run your bot code and see the results on the screen.  Turn the potentiometer and see how the values change.  The changes are small.  Remember that this component is variable over 20 turns.

<a name="potinput"></a>
**Potentiometer Input Code:**

```javascript
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  (new five.Led(11)).strobe();

  var input = new five.Sensor("A0");

  input.on("data", function() {
    console.log(this.value);
  });
});
```

<a name="potinput_wiring"></a>
**Potentiometer Input Wiring:**

![Potentiometer Wiring Diagram]({{ site.baseurl }}/assets/wirings/led_control.png) 

## Control the LED using the Potentiometer
Now that you know how to control the brightness of your LED and you know how to read an input, let's put these two together.  You want small changes in your potentiometer to adjust your LED brightness, so you need to do some translation.  

Basically, you want to take the input value (between `0` and `1023`) and translate it to a value between `0` and `255`.  But you don't want to do a direct translation.  You'd have to change the potientometer a lot to see a little change.  

Instead, you can store the initial value and translate a swing of a small change to a percentage of the LED brightness.

0. Modify your "bot.js" code to include the [LED Control Code](#led_control)
0. Run your new code and see the brightness change by rotating the potentiometer.

<a name="led_control"></a>
**LED Control Code:**

```javascript
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var input = new five.Sensor("A0");
  var led = new five.Led(11);
  var initialValue;

  input.on("data", function() {
    if(initialValue === undefined) {
      initialValue = this.value;
    }

    setLed(this.value);
  });

  function setLed(value) {
    // sway +/- points to control the LED
    var sway = 50;
    var brightness = five.Fn.map(value, initialValue - sway, initialValue + sway, 0, 255);

    console.log("setting LED to " + brightness);
    led.brightness(brightness);
  }
});
```
