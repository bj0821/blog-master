// var Client = require('mysql').Client;
// var Client = new Client();

// client.user = 'root';
// client.password = 'root';
var settings = require('../settingsm'),
Db = require('mysql').Db,
Connection = require('mysql').Connection,
Server = require('mysql').Server;
module.exports = new Db(settingsm.db, new Server(settingsm.host, settingsm.port), {safe: true});
