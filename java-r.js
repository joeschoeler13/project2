//START: sticky navbar section

var navbar = document.getElementById("navbar1");
var sticky = navbar.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//END: sticky navbar section

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