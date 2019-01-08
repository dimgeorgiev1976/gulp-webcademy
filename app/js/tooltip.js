(function () {

    var pos = new google.maps.LatLng(51.524607, -0.073941);

    var map = new google.maps.Map($('#map')[0], {
        center: pos,
        zoom: 17,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
    }); 

    var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Geek Label London',
        icon: 'img/bg/map-pin.png'
    });

        // Создаем наполнение для информационного окна
    var contentStringLondon = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Geek Label</h1>'+
          '<div id="bodyContent">'+
          '<p>4th Floor, <br>' +
          '<p>27 - 33 Bethnal Green Road <br>' +
          '<p>Shoreditch <br>' +
          'London </p>'+
          'E1 6LA</p>'+
          '</div>'+
          '</div>';
    
    // Создаем информационное окно
    var infowindowLondon = new google.maps.InfoWindow({
        content: contentStringLondon,
        Width: 400
    });


    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
    });

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
    google.maps.event.addListener(marker, 'mouseover', function () {
        var point = fromLatLngToPoint(marker.getPosition(), map);
        $('#marker-tooltip').html(marker.tooltipContent ).css({
            'left': point.x,
                'top': point.y
        }).show();
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        $('#marker-tooltip').hide();
    });
    
})();

function fromLatLngToPoint(latLng, map) {
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
}