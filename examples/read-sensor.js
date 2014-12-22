var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  (new five.Led(11)).strobe();

  var input = new five.Sensor("A0");

  input.on("data", function() {
    console.log(this.value);
  });
});
