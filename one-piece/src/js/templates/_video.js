/* click the video to extend it */
const setClickHandler = (id, fn) => {
    $(document).on("click", id, fn);
};

/* fetch video list source */
const fetchVideoSource =()=>{
    let searchDom = $('.series section');

    for (let i = 0, j = searchDom.length; i < j; i++) {

        let searchWord = searchDom.eq(i).find('h2').text();
        /*

                //Using this API requires the website domain, and I haven't have it yet. Therefore, I have to download the json file by "Try this API"
                searchWord = searchWord.toString().toLowerCase().replace(/\s/g, "%20");
                const myAPI = 'AIzaSyAr04qZG7V1gAIqvhS517XbFZnZdw2EOo4';
                let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=one%20piece' + searchWord + '&type=video&key=' + myAPI;

        */
        // these json files are fetched by Youtube search list API

        searchWord = searchWord.toString().toLowerCase().replace(/\s/g, "-");
        let url = '../json/' + searchWord + '.json';

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

export { setClickHandler, fetchVideoSource }

