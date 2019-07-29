var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/makeclub", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeClub.html"))
  });

  // Render 404 page for any unmatched routes
  app.get("/club/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/club.html"));
  });
};
