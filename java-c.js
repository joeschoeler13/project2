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


//START: Mail-submitted

function submitform() {
    alert("Thank you very much! \n We received your message and will now start working on it. \n We will get back to you as soon as possible.")
}

//END: Mail submitted