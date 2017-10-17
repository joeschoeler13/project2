//START: sticky navbar section

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//END: sticky navbar section


//START: map and locations

var locations = [
    [
        "David Strong Building",
        48.464801,
         -123.313539
    ],
    [
    	"Cornett Building",
        48.464246, 
        -123.313446
    ],
    [
        "Business Economics Building",
        48.465256, 
        -123.312910
    ]
]

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: new google.maps.LatLng(48.464551, -123.312732),
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
        infowindow.setContent("LAT: " + locations[i][1] + /n "LONG: " + locations[i][2]);
        infowindow.open(map, marker);
        }
    })(marker, i));
}

//END: map and locations