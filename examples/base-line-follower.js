var five = require("johnny-five");
var fs = require("fs");
var board = new five.Board();

board.on("ready", function () {
    var stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    
    var wheels = {
        left: new five.Servo({ pin: 9, type: 'continuous' }),
        right: new five.Servo({ pin: 10, type: 'continuous' }),
        completeStop: function () {
            wheels.left.center();
            wheels.right.center();
        },
        goForward: function () {
            wheels.left.ccw();
            wheels.right.cw();
	        console.log("goForward");
        },
        turnLeft: function () {
            wheels.left.center();
            wheels.right.cw();
            console.log("turnLeft");
        },
        turnRight: function () {
            wheels.left.ccw();
            wheels.right.center();
            console.log("turnRight");
        }
    };
	wheels.completeStop();
    
    var calibrating = true;
    var eyes = new five.IR.Reflect.Array({
        emitter: 13,
        pins: ["A0", "A1", "A2", "A3", "A4", "A5"]
    });
    eyes.enable();
    
    console.log("Hit enter to begin calibration...");
    stdin.once("keypress", function () {
        // Start calibration
        // All sensors need to see the extremes so they can understand what a line is,
        // so move the eyes over the materials that represent lines and not lines during calibration.
        eyes.calibrateUntil(function () { return !calibrating; });
        
        console.log("When calibration is complete, hit enter");
        setImmediate(function () {
            stdin.once("keypress", function () {
                // Stop calibration
                calibrating = false;
                
                setImmediate(function() {
	                console.log("Place the bot on the course and press enter to begin line following...");
	                stdin.once("keypress", function() {
		                // Start watching the line and driving
		                eyes.on("line", function(err,line) {
			                if (line < 250) {
				                wheels.turnRight();
			                } else if (line > 4750) {
				                wheels.turnLeft();
			                } else {
				                wheels.goForward();
			                }
			                console.log(line);
		                });

		                setImmediate(function() {
			                stdin.once("keypress", function() {
				                // Stop the bot and quit
				                eyes.removeAllListeners();
				                wheels.completeStop();
				                // Need to give time for the signals to get to the wheels
				                setTimeout(function() { process.exit(0); }, 250);
			                });
		                });
	                });
                });
            });
        });
    });

    // Include this line to have access to the components at the command line
    //    this.repl.inject({ wheels: wheels, eyes: eyes });
});
