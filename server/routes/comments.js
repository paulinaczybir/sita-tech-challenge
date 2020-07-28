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
  db(`SELECT * FROM comments WHERE flightId=${req.params.flightId};`)
  .then(results => {
    res.send(results.data);
  })

  console.log("router get test");
  
});


//INSERT comment
router.post("/", function(req, res, next) {
  // console.log("req ", req);
  db(`INSERT INTO comments (flightId, comment, date, userId) VALUES (${req.body.flightId}, '${req.body.comment}', '${req.body.date}', ${req.body.userId})`)
  .then(results => {
    res.send({message: "ok"});
  })
  .catch(err => res.status(500).send(err));
});



module.exports = router ;