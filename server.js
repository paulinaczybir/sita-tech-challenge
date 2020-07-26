// const express = require('express');
// const path = require('path');
// const bodyParser = require("body-parser");

// const app = express();

// const comments = require('./server/routes/comments');

// app.use(bodyParser.json());

// // Middleware to connect server with the distribution
// // app.use(express.static(path.join(_dirname, 'dist')));


// app.use('/comments', comments);

// app.get('*', (req, res) => {

//   // res.sendFile(path.join(_dirname, 'dist/index.html'));
//   res.json({ message: "Welcome to the application." });

// })



// app.listen(4600, (req, res) => {

//   console.log('RUNNING');

// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// set port, listen for requests
app.listen(4600, () => {
  console.log("Server is running on port 4600.");
});