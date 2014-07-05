var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'event_attract'
    },
    port: 3000,
    db: 'mysql://root@localhost/event_attract'
  },

  test: {
    root: rootPath,
    app: {
      name: 'event_attract'
    },
    port: 3000,
    db: 'mysql://root@localhost/event_attract'
  },

  production: {
    root: rootPath,
    app: {
      name: 'event_attract'
    },
    port: 3000,
    db: 'mysql://root@localhost/event_attract'
  }
};

module.exports = config[env];
