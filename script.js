$(function () {

    var $gifArea = $("#gif-area");
    var $searchInput = $("#search");

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
            }
        });
    });

    $("#remove").on("click", function () {
        $gifArea.empty();
    });

});