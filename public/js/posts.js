$(document).ready(function () {
    let username = localStorage.getItem('username')
    let postList = $("#postList")
    console.log(username)

    getPost()

    function getPost() {
        let clubId = $("#clubDiv").data("id")
        $.get("/api/posts/" + clubId, function (data) {
            var rowsToAdd = [];

            console.log(data)

            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createPostRow(data[i]));
            }
            renderPostList(rowsToAdd);
        })
    }

    function createPostRow(postData) {

        var newCard = `
            <div class="card w-100 p-3" id="postCard">
            <div class="card-body">
              <h5 class="card-title">${postData.title}</h5>
              <p class="card-text">${postData.body}</p>
              <p class="card-text">${postData.createdAt}</p>
              <p class="card-text"  id="postMaker" data-id="${postData.username}">${postData.username}</p>
              <a href="#" class="delete-post btn btn-danger btn-sm" data-id= ${postData.id}>Delete Post</a>
            </div>
          </div>  
        `

        return newCard;
    }

    function renderPostList(rows) {
        // postList.children().remove();
        postList.prepend(rows);

    }

    $("#postList").on("click", ".delete-post", function () {
        let id = $(this).data('id');
        let username = localStorage.getItem('username')
        console.log($("#postMaker").data('id'))

        if ($("#postMaker").data('id') === username) {
        $.ajax({
            type: "DELETE",
            url: "/api/posts/" + id
        })
            .then(function () {
                location.reload();
                console.log("Success")
            });
        }
        else{
            alert("You are not authorized")
        }
    })





    $("#submitPost").on("click", function (event) {
        event.preventDefault();

        let title = $("#title").val();
        let body = $("#description").val();
        let clubId = $("#clubDiv").data("id")
        console.log(title);
        console.log(body)
        console.log(clubId)
        console.log("username"+ username)
        let post = {
            title,
            body,
            clubId,
            username
        }

        $.ajax({
            type: "POST",
            url: "api/posts",
            data: post
        })
            .then(function (data) {
                window.location.reload()
            })



    })






})