$(document).ready(function () {
    $("#clubs").on("click", ".delete-club", function () {
        let id = $(this).attr("data-id")
        console.log(id);

        $.ajax({
            type: "DELETE",
            url: "/api/clubs/" + id
        })
            .then(function () {
                location.reload();
                console.log("Success")
            });
    });
})
