const express = require("express");
const bodyParser = require("body-parser");

const commentsRouter = require('./server/routes/comments');
const flightsRouter = require('./server/routes/flights');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next)=> {
  console.log(req.method, req.url, req.body);
  next();
})

app.use('/api/comments', commentsRouter);
app.use('/api/flights', commentsRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// set port, listen for requests
app.listen(4600, () => {
  console.log("Server is running on port 4600.");
});

