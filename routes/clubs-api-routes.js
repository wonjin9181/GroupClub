var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/clubs", function (req, res) {
    console.log(req.query)
    var value = req.query.search
    var expression = {}
    console.log(value)

    if (value) {
      expression = {
        where: {
          clubName: value
        }
      }
    }

    db.Clubs.findAll(expression)
      .then(function (dbClubs) {

        res.json(dbClubs);

      });
  });


  // app.get("/api/clubs/:name", function (req, res) {
  //   console.log("This: " + req.params.name)
  //   db.Clubs.findAll({
  //     where: {
  //       clubName: req.params.name
  //     }
  //   })
  //     .then(function (dbClubs) {
  //       console.log(dbClubs)
  //       res.json(dbClubs);
  //     });
  // });



  // Create a new example
  app.post("/api/clubs", function (req, res) {
    db.Clubs.create(req.body)
      .then(function (dbClubs) {
        res.json(dbClubs);
      });
  });



  // Delete an example by id

  app.delete("/api/clubs/:id", function (req, res) {
    console.log("------------", req.params.id)
    db.Clubs.destroy({ where: { id: req.params.id } })
      .then(function (dbClubs) {
        res.json(dbClubs);
      });

  });

  app.get("/api/clubs/:id", function (req, res) {
    console.log("------------", req.params.id)
    db.Clubs.findOne({ where: { id: req.params.id } })
      .then(function (dbClubs) {
        res.json(dbClubs);
      });

  });
};
