$(document).ready(function(){

let username = $("#username").val()
let password = $("#password").val()
let userList = []
let usernames = []

$("#createID").on("click", function(event){
    event.preventDefault();

    $.get("/api/users", function(data){

        for(var i = 0; i< data.length; i++){
            userList.push(data[i])
        }

        getUsername(userList)

        if(usernames.indexOf(username)){
            alert("USER NAME ALREADY EXISTS")
        }

        else{
            var newUser = {
                username,
                password
            }
            $.ajax({
                type: "POST",
                url: "/api/users",
                data: newUser
            })
            .then(function (data){
                alert("Your username is: " + data[0].username + "\nYour Password is: " + data[0].password)
                window.location.pathname="/index.html"
            })
        }
    })
})



$("#login").on("click", function(event){
    event.preventDefault();

    // var url = "/api/users/"
    // // url += "?username=" + username
   var newUser ={
       username,
       password
   }

    $.ajax({
        type:"GET",
        url:"/api/users/password",
        data: newUser
    })
    .then(function(data){
        console.log(data)
        window.location.pathname="/index.html"
    })
})




var getUsername = function (userList) {
    for (var i = 0; i < userList.length; i++) {
        usernames.push(data[i].username)
    }
}


})