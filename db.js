var mysql = require('mysql');

exports.init = function(config) {
    var connection = mysql.createConnection(config.db);

    return connection;
};