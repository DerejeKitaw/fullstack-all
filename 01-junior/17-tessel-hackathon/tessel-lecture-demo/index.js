const tessel = require('tessel');
const accel = require('accel-mma84').use(tessel.port.A);
const servo = require('servo-pca9685').use(tessel.port.B);
const express = require('express');

const app = express();

app.use(express.static(__dirname));
app.use(express.json());

app.get('/accelerometer', (req, res) => {
  accel.getAcceleration((err, arr) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({
        x: arr[0],
        y: arr[1],
        z: arr[2]
      });
    }
  });
});

app.put('/servo', (req, res) => {
  servo.move(1, req.body.position);
  res.sendStatus(204);
});

servo.on('ready', () => {
  servo.configure(1, 0.05, 0.12, () => {
    const port = 8080;
    app.listen(port, () => {
      console.log('Listening on port', port);
    });
  });
});

