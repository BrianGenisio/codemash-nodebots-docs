var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  (new five.Led(11)).pulse(1000);

});