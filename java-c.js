//START: Sticky navbar section

var navbar = document.getElementById("navbar1");

$(window).scroll(function() {
    if ($(this).scrollTop() > 370) {
        navbar.className += " sticky";
    } else {
        navbar.className = "navbar";
    }
})

//END: Sticky navbar section