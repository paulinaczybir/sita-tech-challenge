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



//GET one comment by id
router.get("/:id", function(req, res) {

  console.log("router get test");
  
});


//INSERT comment
router.post("/", function(req, res, next) {
  db(`INSERT INTO comments (flight_id, comment, date, user_id, tags) VALUES (${req.body.flight_id}, '${req.body.comment}', '${req.body.date}', ${req.body.user_id}, '${req.body.tags}' )`)
  .then(results => {
    res.send({message: "ok"});
  })
  .catch(err => res.status(500).send(err));
});



module.exports = router ;