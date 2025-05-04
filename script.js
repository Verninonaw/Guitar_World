$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass("dis");
    } else {
        $('header').removeClass("dis");
    }
});
