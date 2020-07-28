const express = require("express");
const router = express.Router();
const db = require("../db");

//GET comments 
router.get("/", function(req, res, next) {
  db("SELECT * FROM comments ORDER BY id ASC;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});



//GET comments by flightId
router.get("/:flightId", function(req, res) {
  db(`SELECT * FROM comments WHERE flight_id=${req.params.flightId};`)
  .then(results => {
    res.send(results.data);
  })

  console.log("router get test");
  
});


//INSERT comment
router.post("/", function(req, res, next) {
  // console.log("req ", req);
  db(`INSERT INTO comments (flight_id, comment, date, user_id, tags) VALUES (${req.body.flightId}, '${req.body.comment}', '${req.body.date}', ${req.body.userId}, '${req.body.tags}' )`)
  .then(results => {
    res.send({message: "ok"});
  })
  .catch(err => res.status(500).send(err));
});



module.exports = router ;