$(document).ready(function () {



    var clubList = $("#clubs")

    // getClubs()



    $("#search").on("click", function (event) {
        event.preventDefault();
    
        let value = $("#searchTerm").val().trim();

        getClubs(value)
        // getOneClub(name)
    })



    // function getOneClub(name) {


    //     $.get("/api/clubs/" + name,function(data){
    //         var rowsToAdd = [];
         
    //         console.log(data)
    //         for (var i = 0; i < data.length; i++) {
    //             rowsToAdd.push(createClubRow(data[i]));
    //         }
    //         renderClubList(rowsToAdd);
    //     })
    // }


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
        // var newTr = $("<tr style='width:200px'>");
        // newTr.data("club", clubData);

        var newCard = `
            <div class="card w-100 p-3">
            <div class="card-body">
              <h5 class="card-title">${clubData.clubName}</h5>
              <p class="card-text">${clubData.clubDescription}</p>
              <a href="/club.html" class="btn btn-info btn-sm">Club Page</a>
              <a href="#" class="delete-club btn btn-danger btn-sm" data-id= ${clubData.id}>Delete Club</a>
            </div>
          </div>  
        `
    
        return newCard;
    }

    function renderClubList(rows) {
        clubList.children().not(":last").remove();

        if (rows.length) {
       
            clubList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }


});