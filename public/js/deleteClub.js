$(document).ready(function () {
    $("#clubs").on("click", ".delete-club", function () {
        let username = localStorage.getItem('username')
        let id = $(this).attr("data-id")
        let maker = $(this).attr("data-maker")
        console.log(username)
        console.log(maker)
        if (maker === username) {
            console.log(id);
            $.ajax({
                type: "DELETE",
                url: "/api/clubs/" + id
            })
                .then(function () {
                    location.reload();
                    console.log("Success")
                });
        }
        else{
            alert("you are not authorized")
        }
    });
})
