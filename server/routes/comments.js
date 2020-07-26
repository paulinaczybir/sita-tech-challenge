// const app = express();

//GET comments 
// router.get("/", function(req, res, next) {
//   db("SELECT * FROM allTrips ORDER BY id ASC;")
//   .then(results => {
//     res.send(results.data);
//   })
//   .catch(err => res.status(500).send(err));
// });



//GET one comment by id
// router.get("/:id", function(req, res, next) {
//   db(`SELECT * FROM allTrips WHERE id=${req.params.id};`)
//   .then(results => {
//     res.send(results.data[0]);
//   })
//   .catch(err => res.status(500).send(err));
// });

//INSERT comment
// router.post("/", function(req, res, next) {
//   // req.body === {destination: "Madrid"}
//   db(`INSERT INTO allTrips (destination, departureDate, returnDate, necessaryDocuments, hotelName, hotelLocation) VALUES ('${req.body.destination}', '${req.body.departureDate}', '${req.body.returnDate}', '${req.body.necessaryDocuments}', '${req.body.hotelName}', '${req.body.hotelLocation}' )`
//   )
//   .then(results => {
//     getTrips(res)
//   })
//   .catch(err => res.status(500).send(err));
// });


// create table flights (id int, destination text null, PRIMARY KEY(id));
// create table comments (id int auto_increment, flight_id int null, comment text null, date text null, user_id int null, tags text null, FOREIGN KEY (flight_id) REFERENCES flights(id) ON DELETE CASCADE, PRIMARY KEY(id));
