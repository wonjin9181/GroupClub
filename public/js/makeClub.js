$(document).ready(function () {

    $("#submit").on("click", function () {
        event.preventDefault();

        var clubName = $("#clubName").val().trim();
        var clubMaker = $("#clubMaker").val().trim();
        var clubLocation = $("#clubLocation").val().trim();
        var clubDescription = $("#clubDescription").val().trim();


        var newClub = {
            clubName,
            clubMaker,
            clubLocation,
            clubDescription
        }

        console.log(newClub)


        $.ajax({
            type: "POST",
            url: "/api/clubs",
            data: newClub

        }).then(function (data) {

            window.location.pathname = "/";
        })
    })




})