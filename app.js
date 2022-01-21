let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your root username
  database: "join_us", // the name of your db
});

let q = "SELECT COUNT(*) AS total FROM users ";

connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].total);
});

connection.end();
