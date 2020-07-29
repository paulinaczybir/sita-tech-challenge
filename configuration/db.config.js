require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

dbConfig = {
  HOST: DB_HOST,
  USER: DB_USER,
  PASSWORD: DB_PASS,
  DB: DB_NAME 
};


// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
})
 

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");


let sql = [
  "DROP TABLE if exists comments; ",
  "DROP TABLE if exists flights; ",
  "CREATE TABLE flights (id int auto_increment, origin text null, destination text null, PRIMARY KEY(id));",
  "CREATE TABLE comments (id int auto_increment, flightId int null, comment text null, date text null, userId int null, FOREIGN KEY (flightId) REFERENCES flights(id) ON DELETE CASCADE, PRIMARY KEY(id)); ",
  "INSERT INTO flights (origin, destination) VALUES ('Barcelona', 'Berlin')",
  "INSERT INTO flights (origin, destination) VALUES ('Berlin', 'Barcelona')",
  "INSERT INTO flights (origin, destination) VALUES ('Madrid', 'Rome')",
  "INSERT INTO flights (origin, destination) VALUES ('Rome', 'Madrid')",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (1, 'Great service.', '15/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (1, 'The service could be better.', '18/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (2, 'The flight was great, no troubles at all.', '29/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (2, 'Great flight.', '24/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (2, 'Flight was delayed.', '29/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (3, 'Happy journey.', '15/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (3, 'Amazing crew!', '19/07/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (4, 'Nice crew.', '16/06/2020', 123)",
  "INSERT INTO comments (flightId, comment, date, userId) VALUES (4, 'The service was rude, we are not happy with the journey.', '24/06/2020', 123)"
];

sql.forEach(e => { 
  connection.query(e, function(err, result) {
    if (err) throw err;
    console.log(`Query was successful: "${e}"`); 
  });
});
console.log("Closing...");

connection.end();
});


module.exports = connection;