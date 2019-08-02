db = require("../models");

module.exports = function(app) {

    app.get("/api/users",function(req, res){
        
        var value = req.query.username
        var expression = {}
        console.log(value)
        if (value){
            expression = {
                where: {
                    username: value
                }
            }
        }
        db.Users.findAll(expression)
        .then(function(data){
            console.log(data)
            res.json(data);
        })
    })

    app.post("/api/users", function(req, res){
        db.Users.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(function(data){
            res.json(data);
        })
    })

    app.get("/api/users/:id", function(req, res){
        id = req.params.id

        db.Users.findAll({
            where:{
                username:id
            }
        })
        .then(function(data){
            res.json(data)
        })
    })


}