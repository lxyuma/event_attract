var express = require('express'),
    path = require('path');

var conf = require('./config/conf');
var app = express();

app.set('view engine', 'ejs');
app.set('views', conf.root + '/app/views');

require('./config/routes')(app);
require('./config/err')(app);
require('./config/express')(app, conf);

module.exports = app;
