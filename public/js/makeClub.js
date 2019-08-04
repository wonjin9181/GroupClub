$(document).ready(function () {
    let maker = localStorage.getItem('username')
    var password
    $("#submit").on("click", function () {
        event.preventDefault();

        var clubName = $("#clubName").val().trim();
        var clubMaker = maker;
        var clubLocation = $("#clubLocation").val().trim();
        var clubDescription = $("#clubDescription").val().trim();

        $.get("/api/users/" + maker, function (data) {
            console.log(data[0].password)
            password = data[0].password

            var newClub = {
                clubName,
                clubMaker,
                clubLocation,
                clubDescription,
                password
            }
            console.log(newClub)
            $.ajax({
                type: "POST",
                url: "/api/clubs",
                data: newClub

            }).then(function (data) {

                window.location.pathname = "/main.html";
            })
        })
    })



})