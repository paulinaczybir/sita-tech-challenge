const mysql = require("mysql");

dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "arbuz",
  DB: "sita_flights"
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
  "CREATE TABLE flights (id int, destination text null, PRIMARY KEY(id));",
  "CREATE TABLE comments (id int auto_increment, flight_id int null, comment text null, date text null, user_id int null, tags text null, FOREIGN KEY (flight_id) REFERENCES flights(id) ON DELETE CASCADE, PRIMARY KEY(id)); "  
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