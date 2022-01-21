let mysql = require("mysql");
let faker = require("@faker-js/faker");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root", // your root username
  database: "join_us", // the name of your db
});

// SELECTING DATA
// let q = "SELECT COUNT(*) AS total FROM users ";

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
// 	console.log(results[0].total)
// });

// INSERTING DATA
// let q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
// 	console.log(results);
// });

// INSERTING DATA TAKE 2
let person = {
  email: faker.internet.email(),
  created_at: faker.date.past(),
};

connection.query("INSERT INTO users SET ?", person, function (error, result) {
  if (error) throw error;
  console.log(result);
});

connection.end();
