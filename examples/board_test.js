var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var analogLow = five.Sensor({pin: "A0", freq: 500});
  var analogHigh = five.Sensor({pin: "A5", freq: 500});

  var led = five.Led(13);
  var servo = five.Servo(11);
  

  var lowData = analogLow.on("data", function() {
    console.log("LOW:  ", this.value);
  });

  var highData = analogHigh.on("data", function() {
    console.log("HIGH: ", this.value);
  });

  led.blink();
  servo.sweep();

  setTimeout(function() {
    lowData.removeAllListeners();
    highData.removeAllListeners();
    led.stop().off();
    servo.stop().center();

    setTimeout(function() {
      process.exit();
    }, 500);
    
  }, 4000);

});
