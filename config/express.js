var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

module.exports = function(app, conf) {
    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(require('node-compass')({mode: 'expanded'}));
    app.use(express.static(path.join(__dirname, 'public')));
    //app.use(express.compress());
    //app.use(express.favicon(config.root + '/app/public/img/favicon.ico'));

};

