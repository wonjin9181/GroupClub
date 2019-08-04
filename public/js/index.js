$(document).ready(function () {



    var clubList = $("#clubs")

    let value = $("#searchTerm").val().trim();

    getClubs(value)

    $("#search").on("click", function (event) {
        event.preventDefault();

        value = $("#searchTerm").val().trim();

        getClubs(value)

    })



    function getClubs(value) {
        let url = "/api/clubs";

        url += "?search=" + value
        $.get(url, function (data) {
            var rowsToAdd = [];

            console.log(data)

            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createClubRow(data[i]));
            }
            renderClubList(rowsToAdd);
        });
    }

    function createClubRow(clubData) {

        var newCard = `
            <div class="card w-100 p-3">
            <div class="card-body">
              <h5 class="card-title">${clubData.clubName}</h5>
              <p class="card-text">${clubData.clubDescription}</p>
              <p class="card-text"">${clubData.clubMaker}</p>

              <a href="/club.html" class="go-to-club btn btn-info btn-sm" data-id= ${clubData.id}>Club Page</a>

              <a href="#" class="delete-club btn btn-danger btn-sm" data-id= ${clubData.id} data-maker=${clubData.clubMaker}>Delete Club</a>
            </div>
          </div>  
        `

        return newCard;
    }

    function renderClubList(rows) {
        clubList.children().remove();

        if (rows.length) {

            clubList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    

});