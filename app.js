let mysql = require("mysql");
let faker = require("@faker-js/faker");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your root username
  database: "join_us", // the name of your db
});

let q = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});

connection.end();
