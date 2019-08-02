var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // Load index page
  app.get("/main.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  // Load example page and pass in an example by id
  app.get("/makeclub", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeClub.html"))
  });

  app.get("/club", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/club.html"));
  });
};
