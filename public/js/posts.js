$(document).ready(function () {

    let postList = $("#postList")

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
            <div class="card w-100 p-3">
            <div class="card-body">
              <h5 class="card-title">${postData.title}</h5>
              <p class="card-text">${postData.body}</p>
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

        $.ajax({
            type: "DELETE",
            url: "/api/posts/" + id
        })
            .then(function () {
                location.reload();
                console.log("Success")
            });
    })





    $("#submitPost").on("click", function (event) {
        event.preventDefault();

        let title = $("#title").val();
        let body = $("#description").val();
        let clubId = $("#clubDiv").data("id")
        console.log(title);
        console.log(body)
        console.log(clubId)

        let post = {
            title,
            body,
            clubId
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