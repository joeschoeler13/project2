//START: Responsive navbar section

function myFunction() {
    var x = document.getElementById("navbar1");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

//END: Responsive navbar section


//START: Scrool Up Button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ScrollUpButton").style.display = "block";
    } else {
        document.getElementById("ScrollUpButton").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//END: Scroll Up Button