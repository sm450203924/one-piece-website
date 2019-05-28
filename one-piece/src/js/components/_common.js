// When the user scrolls down 50px from the top of the document, show the button
const scrollFunction =()=> {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#toTopBtn').show();
    } else {
        $('#toTopBtn').hide();
    }
};

// When the user clicks on the button, scroll to the top of the document
const toTo = () => {
    $('#toTopBtn').click(function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
};

const getHtmlDocName =()=> {
    let strUrl = window.location.href;
    strUrl = strUrl.substring(strUrl.lastIndexOf("/") + 1);
    return strUrl;
};

// when click the menu ,active the corresponding item
const activeMenu = () => {
        const menuItem = $('.nav-item');
        for(let i = 0, j = menuItem.length; i<j; i++ ){
            if(menuItem.eq(i).find('.nav-link').attr("href").toString()==getHtmlDocName()){
                menuItem.removeClass('active');
                menuItem.eq(i).addClass('active');
                let titleVal = "ONE PIECE - " + menuItem.eq(i).find('.nav-link').text();
                $(document).attr("title", titleVal);
            }
        }
    };

export {scrollFunction, toTo, activeMenu};
