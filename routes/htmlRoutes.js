var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/makeclub", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeClub.html"))
  });

  app.get("/club/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/club.html"));
  });
};
