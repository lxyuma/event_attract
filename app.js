var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize');

var conf = require('./config/conf');
var app = express();

var sequelize = new Sequelize(conf.db);
var modelsPath = __dirname + '/server/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    var model = require(modelsPath + '/' + file)(sequelize);
    if (app.get('env') === 'development') {
        model.sync();
    };
  }
});

app.set('view engine', 'ejs');
app.set('views', conf.root + '/server/views');
app.use(express.static(path.join(__dirname, 'public')));

require('./config/routes')(app);
require('./config/err')(app);
require('./config/express')(app, conf);

module.exports = app;
