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


//START: map and locations

var locations = [
    [
        "Concardis GmbH",
        50.138253, 
        8.583813
    ],
    [
    	"Rameder Anhaengerkupplungen und Autoteile GmbH",
        50.583336, 
        11.47229
    ],
    [
        "University of Victoria",
        48.465256, 
        -123.312910
    ]
]

var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(15, 0),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

var cnt = 0

for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        cnt++
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
        }
    })(marker, i));
}

//END: map and locations

//START: Scrool Up Button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("ScrollUpButton").style.display = "block";
    } else {
        document.getElementById("ScrollUpButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//END: Scroll Up Button