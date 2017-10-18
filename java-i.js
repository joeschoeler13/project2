//START: Sticky navbar section

var navbar = $(".navbar");

$(window).scroll(function() {
    if ($(this).scrollTop() > 370) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
})

//END: Sticky navbar section