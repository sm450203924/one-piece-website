let searchTerm = 'one piece';

const wikipediaSearch = (searchTerm)=> {
    let url =
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        searchTerm +
        "&format=json&callback=?";
    $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",

        success: function (data) {
            for (let i = 0; i < data[1].length; i++) {
                $('#wikipedia-contain').append("<div class='search_result row'><a target='blank' class='col-md-3' href=" + data[3][i] + "><h3>" + data[1][i] + "</h3></a>" + "<p class='col-md-9'>" + data[2][i] + "</p></div>");
            } //for loop ends
            searchTerm = '';

        },
        error: function (error) {
            alert("Please connect to the network");
        }
    }); //ajax ends
};//click function ends

const clickSearch = () =>{
    $(".profile_word button.more").click(function () {

        wikipediaSearch(searchTerm);

        $("#wikipedia-contain").slideToggle();
    });
};

export{clickSearch};