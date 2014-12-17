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
    var sway = 10;
    var brightness = five.Fn.map(value, initialValue - sway, initialValue + sway, 0, 255);

    console.log("setting LED to " + brightness);
    led.brightness(brightness);
  }
});