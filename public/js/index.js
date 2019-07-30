$(document).ready(function () {

    $("#makeClub").on("click", function () {
        window.location.href = "/makeClub"
    })

    $("#search").on("click", function () {
        var id = $("searchItem").val().trim();

        getClubs(id)
    })



    function getClubs(id) {

        if (id) {
            $.ajax({
                method: "GET",
                url: "/api/authors/" + id
            })
                .then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var newCard = `
                    <div class="card w-75">
                    <div class="card-body">
                      <h5 class="card-title">${data[i].clubName}</h5>
                      <p class="card-text">${data[i].clubDescription}</p>
                      <a href="#" class="btn btn-primary">Button</a>
                    </div>
                  </div>  
                `
                        $("#clubs").append(newCard)
                    }

                })
        }
        else {
            $.ajax({
                method: "GET",
                url: "/api/authors"
            })
                .then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        var newCard = `
                    <div class="card w-75">
                    <div class="card-body">
                      <h5 class="card-title">${data[i].clubName}</h5>
                      <p class="card-text">${data[i].clubDescription}</p>
                      <a href="#" class="btn btn-primary">Button</a>
                    </div>
                  </div>  
                `
                        $("#clubs").append(newCard)
                    }
                })

        }
    }








});