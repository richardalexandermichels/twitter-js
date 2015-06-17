var express = require('express')
var logger = require('morgan');
var app = express()

// create "middleware"
app.use( logger('dev') );

console.log('server on')

app.get('/', function (req, res) {
  res.send('Hello earth!');
});
app.get('/any', function (req, res) {
  res.send('Hello any!');
});

app.listen(3000)