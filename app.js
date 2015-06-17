var express = require('express')
var logger = require('morgan');
var app = express()
var swig = require('swig')

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
swig.setDefaults({ cache: false });
// create "middleware"
app.use( logger('dev') );

console.log('server on')

app.get('/', function (req, res) {
  
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});
app.get('/any', function (req, res) {
  res.send('Hello any!');
});

app.listen(3000)
