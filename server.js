const express = require("express");
const bodyParser = require("body-parser");

const commentsRouter = require('./server/routes/comments');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', commentsRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// set port, listen for requests
app.listen(4600, () => {
  console.log("Server is running on port 4600.");
});

