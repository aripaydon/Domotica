const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

const io = new Server(server);

const baud = 9600; // Raspberry Pi Pico -> 115200 || Arduino Uno -> 9600 


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(_path.join(__dirname + '/public/index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('dato', (msg) => {
        console.log(msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(1919, () => {
    console.log('listening on *:1919');
});

//var http = createServer(app);
var fs = require('fs');
//var io = require('socket.io')(http)
 var Gpio = require('onoff').Gpio;
 var LED = new Gpio(11,'out'),
     LED1 = new Gpio(9,'out'),
     LED2 = new Gpio(10,'out'),
     LED3 = new Gpio(27,'out'),
     LED4 = new Gpio(17,'out'),
     LED5 = new Gpio(4,'out'),
     LED6 = new Gpio(5,'out'),
     LED7 = new Gpio(22, 'out');

//http.listen(1919);

//function handler(req, res) {
  //fs.readFile(__dirname + '/public/index2.html', function (err, data) {
   // if (err) {
     // res.writeHead(404, { 'Content-Type': 'text/html' });
     // return res.end("404 Not Found");
    //}
   // res.writeHead(200, { 'Content-Type': 'text/html' });
   // res.write(data);
   // return res.end();
  //});
//}

 LED.writeSync(1);
 LED1.writeSync(1);
 LED2.writeSync(1);
 LED3.writeSync(1);
 LED4.writeSync(1);
 LED5.writeSync(1);
 LED6.writeSync(1);
 LED7.writeSync(1);

 io.sockets.on('connection', function (socket) {
  socket.on('domo', function (data) {
     switch (data) {
       case '0000':
         LED.writeSync(0);
         break;
       case '0001':
         LED.writeSync(1);
         break;
       case '0010':
         LED1.writeSync(0);
         break;
       case '0011':
         LED1.writeSync(1);
         break;
       case '0100':
         LED2.writeSync(0);
         break;
       case '0101':
         LED2.writeSync(1);
         break;
       case '0110':
         LED3.writeSync(0);
         break;
       case '0111':
         LED3.writeSync(1);
         break;
       case '1000':
         LED4.writeSync(0);
         break;
       case '1001':
         LED4.writeSync(1);
         break;
       case '1010':
         LED5.writeSync(0);
         break;
       case '1011':
         LED5.writeSync(1);
         break;
       case '1100':
         LED6.writeSync(0);
         break;
       case '1101':
         LED6.writeSync(1);
         break;
       case '1110':
         LED7.writeSync(0);
         break;
       case '1111':
         LED7.writeSync(1);
         break;
     }
  });
});

process.on('SIGINT', function () {
   LED.writeSync(1);
   LED.unexport();
   LED1.writeSync(1);
   LED1.unexport();
   LED2.writeSync(1);
   LED2.unexport();
   LED3.writeSync(1);
   LED3.unexport();
   LED4.writeSync(1);
   LED4.unexport();
   LED5.writeSync(1);
   LED5.unexport();
   LED6.writeSync(1);
   LED6.unexport();
   LED7.writeSync(1);
   LED7.unexport();
   process.exit();
});