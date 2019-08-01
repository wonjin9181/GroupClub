db = require("../models");

module.exports = function(app) {

    app.get("/api/users",function(req, res){

        db.Users.findAll({})
        .then(function(data){
            res.json(data);
        })
    })

    app.post("/api/users", function(req, res){
        db.Users.create(req.body)
        .then(function(data){
            res.json(data);
        })
    })

    app.get("/api/users/password", function(req, res){
        db.Users.findAll({
            where:{
                username : req.body.username,
                password :req.body.password
            }
        })
        .then(function(data){
            res.json(data)
            res.status(200)
        })
    })
    



}