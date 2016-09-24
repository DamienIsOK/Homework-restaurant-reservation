//npm install first

//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

var reservations = [];

var checker = require('./reserve.js');

//Express data handling
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type : 'application/vdn.api+json' }));

//==================================


// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/tables', function(req, res) {
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reserve.html'));
});


app.post('/reserve', function(req, res) {
  // reservations.push(req.body);
  var newReservation = req.body;
  reservations.push(newReservation);
  res.json(checker.availability(reservations));
});
// ===================================

app.listen(PORT, function() {
  console.log("listening on port " + PORT);
});