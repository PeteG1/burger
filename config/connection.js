
var mysql = require("mysql");


var connection;
// var PORT = process.env.PORT || 3000;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};


connection.connect();
module.exports = connection;
