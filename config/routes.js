module.exports = function(app){
    var routes = require('../server/controllers/index');
    var users  = require('../server/controllers/users');
    var login  = require('../server/controllers/login');

    app.use('/', routes);
    app.use('/users', users);
    app.use('/login', login);

};
