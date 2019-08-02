$(document).ready(function () {

    let usernames = []

    $("#createID").on("click", function (event) {
        event.preventDefault();



        let username = $("#username").val()
        let password = $("#password").val()
        let userList = []


        console.log(username, password)

        $.get("/api/users", function (data) {
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                userList.push(data[i])
            }
            console.log(userList)

            getUsername(userList)

            console.log(usernames)

            if (usernames.indexOf(username) > -1) {
                alert("USER NAME ALREADY EXISTS")
            }

            else {
                var newUser = {
                    username,
                    password
                }
                $.ajax({
                    type: "POST",
                    url: "/api/users",
                    data: newUser
                })
                    .then(function (data) {
                        console.log(data)
                        // alert("Your username is: " + data.username + "\nYour Password is: " + data.password)
                        window.location.pathname = "/main.html"
                    })
            }
        })
    })



    $("#login").on("click", function (event) {
        event.preventDefault();
        let username = $("#username").val()
        let password = $("#password").val()

        var url = "/api/users/"
        url += "?username=" + username



        $.get(url, function (data) {
            console.log(data)

            
            if (password === data[0].password) {
                window.location.pathname = "/main.html"
            }
            else{
                alert("Username or password does not exists")
            }

        })
    })




    var getUsername = function (userList) {
        for (var i = 0; i < userList.length; i++) {
            usernames.push(userList[i].username)
        }
        return
    }


})