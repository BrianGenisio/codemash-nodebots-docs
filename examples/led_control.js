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
    var min = initialValue - sway;
    var max = initialValue + sway;
    var percentage = (value - min) / (max - min);

    // Keep the percentage between 0 and 1
    percentage = percentage > 1 ? 1 : percentage;
    percentage = percentage < 0 ? 0 : percentage;

    console.log("setting LED to " + (percentage * 100).toFixed(0) + "%");
    led.brightness(255 * percentage);
  }
});