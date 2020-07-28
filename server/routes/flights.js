const express = require("express");
const router = express.Router();
const db = require("../db");

//GET flights 
router.get("/", function(req, res, next) {
  db("SELECT * FROM flights ORDER BY id ASC;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});