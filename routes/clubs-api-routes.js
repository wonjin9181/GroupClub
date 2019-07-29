var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/clubs", function(req, res) {
    db.Clubs.findAll({})
    .then(function(dbClubs) {
      res.json(dbClubs);
    });
  });

  // Create a new example
  app.post("/api/clubs", function(req, res) {
    db.Clubs.create(req.body)
    .then(function(dbClubs) {
      res.json(dbClubs);
    });
  });

  // Delete an example by id
  app.delete("/api/clubs/:id", function(req, res) {
    db.clubs.destroy({ where: { id: req.params.id } })
    .then(function(dbClubs) {
      res.json(dbClubs);
    });
  });
};
