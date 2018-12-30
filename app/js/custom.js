   
$(document).ready(function(){
var map,
	desktopScreen = Modernizr.mq( "only screen and (min-width:1024px)" ),
	zoom = desktopScreen ? 18 : 17,
	scrollable = draggable = !Modernizr.hiddenscroll || desktopScreen;

function initMap() {
	var myLatLng = {lat: 48.855510, lng: 2.365505};
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: zoom,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: scrollable,
		draggable: draggable,
		styles: [{"stylers": [{ "saturation": -100 }]}],
	});

 };

  // Функция для создать маркер  для Google maps API 

        marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(51.525037,-0.074361),
         icon: 'http://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=xxx%7c5680FC%7c000000&.png' 
         '../img/bg/map-pin.png'  null = default icon
      });
});


