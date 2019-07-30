$(document).ready(function(){

$("#submit").on("click", function(){
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

    $.ajax({
        type: "POST",
        url: "api/clubs"
    })
})




})