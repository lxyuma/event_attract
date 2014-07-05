module.exports = function(app){
    var routes = require('../app/controllers/index');
    var users  = require('../app/controllers/users');

    app.use('/', routes);
    app.use('/users', users);

};
