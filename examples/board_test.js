var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  (new five.Sensor("A7")).on("data", function() {
    console.log(this.value);
  });

});