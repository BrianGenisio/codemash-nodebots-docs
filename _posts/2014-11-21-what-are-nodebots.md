---
layout: page
class: what-is-nodebots
title: "What Are NodeBots?"
category: doc
date: 2014-11-21
order: 0
---

![CodeMash logo]({{ site.baseurl }}/assets/nodebots.png)

[NodeBots](http://nodebots.io) are any kind of physical machine powerd by JavaScript and [Node.js](http://nodejs.org).  These "bots" can be drones, vehicles, sumos, humanoids, robot arms, connected thermostats, pretty LED arrays, weather stations, augmented clothing, or anything else you can imagine combining software with hardware and electronics.

Although this event will use Arduinos, the "brains" of a NodeBot can be any microcontroller that can run JavaScript or communicate to a controller running JavaScript.  These "brains" can include (but are not limited by) [Arduinos](http://arduino.cc), [Raspberry Pis](http://www.raspberrypi.org), [Spark Cores](https://www.spark.io/), [Electronic Imps](https://electricimp.com/), [Galileos](http://www.intel.com/content/www/us/en/do-it-yourself/galileo-maker-quark-board.html), [Edisons](http://www.intel.com/content/www/us/en/do-it-yourself/edison.html), and [BeagleBones](http://beagleboard.org/black).

We will be using [Johnny-Five](https://github.com/rwaldron/johnny-five), a JavaScript library for controlling your bot.  We like Johnny-Five because it is a very nice abstraction for the hardware, making the programming of these devices extremely accessible.  Some have called it "jQuery for hardware" because it tries to abstract the hardware details away from you and give you a standardized API for accessing devices like servos, motors, reflectance arrays, relays, shift registers, etc.

<div id="carousel-example-generic" class="carousel slide col-md-8 col-md-offset-2" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="/assets/hacking.jpeg" />
    </div>
    <div class="item">
      <img src="/assets/soccer.jpeg" />
    </div>
    <div class="item">
      <img src="/assets/alf.jpeg" />
    </div>
    <div class="item">
      <img src="/assets/pinky.jpeg" />
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>