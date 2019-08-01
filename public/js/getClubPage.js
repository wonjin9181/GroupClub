$(document).ready(function () {
    $("#clubs").on("click", ".go-to-club", function () {
        let id = $(this).attr("data-id");
        console.log(id);

        $.ajax({
            type: "GET",
            url: "/api/clubs/" + id
        })
            .then(function (response) {
                console.log(response);
                localStorage.setItem('clubinfo', JSON.stringify(response));
                window.location.pathname = '/club';
            });
    });
})
