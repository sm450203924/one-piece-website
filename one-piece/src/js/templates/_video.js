/* click the video to extend it */
const setClickHandler = (id, fn) => {
    $(document).on("click", id, fn);
};

/* fetch video list source */
const fetchVideoSource = () => {
    let searchDom = $('.series section');

    for (let i = 0, j = searchDom.length; i < j; i++) {

        let searchWord = searchDom.eq(i).find('h2').text();

        //Using youtube search list API to get video list
        searchWord = searchWord.toString().toLowerCase().replace(/\s/g, "%20");
        const myAPI = 'AIzaSyCYNjPwG5IddBh9YgnlzIYfY1RXhOygfKM';
        let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=one%20piece' + searchWord + '&type=video&key=' + myAPI;

        $.ajax({
            url: url,
            async: false,
            type: "GET",
            success: function (data) {

                let itemList = data.items;
                for (let item in itemList) {

                    let itemTitle = itemList[item].snippet.title;
                    itemTitle = itemTitle.toString().replace(/\s/g, "&nbsp;");
                    let itemVideo = itemList[item].id.videoId;
                    let itemThumbnails = itemList[item].snippet.thumbnails.medium.url;

                    searchDom.eq(i).find('.row').append(
                        "<div class='col-md-4'><div class='vid-wrap' title=" + itemTitle + " ><div class='vid youtube' ytSrc=" + itemVideo + " style='background-image: url(" + itemThumbnails + ")'></div><h3>" + itemTitle + "</h3></div></div>"
                    );
                }
            }
        });
    }
};

export {setClickHandler, fetchVideoSource}

