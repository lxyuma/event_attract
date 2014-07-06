module.exports = function(app){
    var routes = require('../server/controllers/index');
    var users  = require('../server/controllers/users');

    app.use('/', routes);
    app.use('/users', users);

};
