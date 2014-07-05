var Sequelize = require('sequelize');

module.exports = function(sequelize){
    var User = sequelize.define('user', {
        yammer_code: Sequelize.STRING 
    },{
        underscored: true,
        timestamps: true 
    });
    return User;
};
