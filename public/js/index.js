$(document).ready(function () {



    var clubList = $("#clubs")

    getClubs()



    $("#search").on("click", function () {

        var name = $("#searchTerm").val().trim();

        console.log(name)

        getOneClub(name)
    })



    function getOneClub(name) {

        $.get("/api/clubs/:" + name,function(data){
            var rowsToAdd = [];
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createClubRow(data[i]));
            }
            renderClubList(rowsToAdd);
        })
    }

    function getClubs() {
        $.get("/api/clubs", function (data) {
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
              <a href="#" class="btn btn-info btn-sm">Button</a>
              <button><a style='cursor:pointer;color:red' class='delete-club'>Delete Club</a></button>
            </div>
          </div>  
        `
        // newTr.append(newCard);
        // newTr.append("<td><a href='/blog?club_id=" + clubData.id + "'>Go to Posts</a></td>");
        // newTr.append("<td><a href='/cms?club_id=" + clubData.id + "'>Create a Post</a></td>");
        // newTr.append("");
        return newCard;
    }

    function renderClubList(rows) {
        clubList.children().not(":last").remove();
        // clubContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            clubList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }


});