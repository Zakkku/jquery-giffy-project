$(function () {

    var $gifArea = $("#gif-area");
    var $searchInput = $("#search");
    var $body = $("body");
    var $bodyWidth = $body.css("width");


    //console.log($bodyWidth);

    $("form").on("submit", function (e) {
        e.preventDefault();
        var searchTerm = $searchInput.val();
        $searchInput.val("");
        $.get(
            "https://api.giphy.com/v1/gifs/search",
            {
                q: searchTerm,
                api_key: "7GiHOt3hMHzPDngEkHMVrdx76YuRv8UY"
            }
        ).then(function (res) {
            var numResults = res.data.length;
            if (numResults) {
                var randomIdx = Math.floor(Math.random() * numResults);
                var $newCol = $("<div>", { class: "new-col" });
                var $newGif = $("<img>", {
                    src: res.data[randomIdx].images.original.url,
                    class: "new-gif"
                });
                $newCol.append($newGif);
                $gifArea.append($newCol);
                if (parseInt($bodyWidth) >= 769) {
                    $gifArea.css("background-color", "#2196F3")
                }

                // if (parseInt($bodyWidth) >= 769) {
                //     console.log("You are on tablet or desktop view");
                // } else {
                //     console.log("You are on mobile view")
                // }

            }
        });
    });

    $("#remove").on("click", function () {
        $gifArea.empty();
        $gifArea.css("background-color", "black");
    });

});