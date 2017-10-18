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