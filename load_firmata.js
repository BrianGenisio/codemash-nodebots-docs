var SerialPort = require("serialport");
var intel_hex = require('intel-hex');
var stk500 = require('stk500');
var async = require("async");
var fs = require('fs');

var usbttyRE = /(cu\.usb|ttyACM|COM\d+)/;

var data = fs.readFileSync('node_modules/stk500/arduino-1.0.6/uno/StandardFirmata.cpp.hex', { encoding: 'utf8' });

var hex = intel_hex.parse(data).data;

//uno
var pageSize = 128;
var baud = 115200;
var delay1 = 1; //minimum is 2.5us, so anything over 1 fine?
var delay2 = 1;
var signature = new Buffer([0x1e, 0x95, 0x0f]);
var options = {
  devicecode:0,
  revision:0,
  progtype:0,
  parmode:0,
  polling:0,
  selftimed:0,
  lockbytes:0,
  fusebytes:0,
  flashpollval1:0,
  flashpollval2:0,
  eeprompollval1:0,
  eeprompollval2:0,
  pagesizehigh:0,
  pagesizelow:pageSize,
  eepromsizehigh:0,
  eepromsizelow:0,
  flashsize4:0,
  flashsize3:0,
  flashsize2:0,
  flashsize1:0
};

SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {

    console.log("found " + port.comName);
 
    if(usbttyRE.test(port.comName))
    {

      console.log("trying" + port.comName);

      var serialPort = new SerialPort.SerialPort(port.comName, {
        baudrate: 115200,
        parser: SerialPort.parsers.raw
      }, false);

      var programmer = new stk500(serialPort);

      async.series([
        programmer.connect.bind(programmer),
        programmer.reset.bind(programmer,delay1, delay2),
        programmer.sync.bind(programmer, 3),
        programmer.verifySignature.bind(programmer, signature),
        programmer.setOptions.bind(programmer, options),
        programmer.enterProgrammingMode.bind(programmer),
        programmer.upload.bind(programmer, hex, pageSize),
        programmer.exitProgrammingMode.bind(programmer),
        programmer.disconnect.bind(programmer)
        
      ], function(error){
        if(error){
          console.log("programing FAILED: " + error);
          process.exit(1);
        }else{
          console.log("programing SUCCESS!");
          process.exit(0);
        }
      });

    }else{
      console.log("skipping " + port.comName);
    }

  });
});

