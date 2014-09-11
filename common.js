/* Config file */
var config = require('./config.js');
var conf = new config();

/* MySQL Database */
// var db = require('./db').init(conf);
var db = null;

exports.conf = conf;
exports.db = db;