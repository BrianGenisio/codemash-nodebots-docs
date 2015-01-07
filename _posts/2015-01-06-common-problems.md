---
layout: page
title: "Common Problems"
category: tut
date: 2015-01-06
order: 5
---

## Windows error when installing NPM:
> Error: ENOENT, stat `C:\Users\You\AppData\Roaming`

We're not sure why this happens, but it [sure is popular](http://stackoverflow.com/questions/25093276/node-js-windows-error-enoent-stat-c-users-rt-appdata-roaming-npm).  NPM can't find the folder that it is complaining about.  Create the folder, and it fixed the problem.

## You can't connect to the board in Windows
Sometimes, you need to specify your COM Port because it isn't automatically detected.  It is easy to [tell Johnny-Five which port to use](https://github.com/rwaldron/johnny-five/blob/master/docs/board-with-port.md).  

```js
board = new five.Board({
  port: "COM3"
});
```

You can open up the Arduino studio to see which port it finds.

## You get disconnected from the board when changing the rotation of your servo
This happens because your servos are drawing a lot of current through the board.  Your 9V battery is regulated down to 5V on the board, but when the current draw is too high, it can wreck havok on your board.

To solve this, you can power your servos directly from the battery instead of from the board.  You'll have to use more wires and your breadboard, but you will get a less noisy, more reliable system.

If you power your servos directly from a 9V battery, you are actually over-powering your components.  If you are willing to take the risk of buringing out your servos, then you will get a power boost.  If you'd rather not, you can get a 4xAA power source (6V) from the lab, or use a 5V regulator chip from the lab.

This is what your circuit will look like when the servos are directly connected:

![direct power wiring]({{ site.baseurl }}/assets/wirings/direct-power-servos.png)