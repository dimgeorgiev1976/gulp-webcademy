// Функция initMap которая отрисует карту на странице
function initMap() {
	
	// Определяем клиент, чтобы после отключить перетаскивание карты на смартфонах.  Часть 1.
	var isDraggable;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isDraggable = false;
	} else {
		isDraggable = true;
	}

	// Определяем точки которые хотим показать на карте
	// var pos = {lat:51.524269, lng:-0.073770};
	var GeekLabel = {lat:51.525444, lng:-0.074479};
	var pos = {lat:51.524607, lng:-0.073941};
	// var GeekLabel = {lat:51.527518, lng:-0.075159};
	
	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	var map = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		
		// center - определяем точку на которой карта будет центрироваться
		// center: {lat:51.524269, -0.073770},
		center: pos,
		
		// zoom - определяет масштаб. 0 - видно всю планету. 18 - видно дома и улицы города.
		// zoom: 12,
		zoom: 18,

		// Дополнительные настройки

		// Удалить элементы управления картой
		disableDefaultUI: true,

		// Запретить увеличение карты по скроллу
		scrollwheel: false,

		// Отключить перетаскивание для смартфонов. Часть 2.
		// draggable: isDraggable,


		// Добавляем свои стили для отображения карты
		// Скины брать здесь: https://snazzymaps.com/
		 styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
	}); // map


	/* • • • • • Маркер и описание  • • • • • */

	// Создаем маркер на карте
	var marker = new google.maps.Marker({  
        position: pos,  
        map: map, 
        title: 'Geek Label London', 
        icon: 'img/bg/map-pin.png' 
    }); 
	// Создаем маркер Big на карте
	var markerBig = new google.maps.Marker({
	        position: GeekLabel,  
	        map: map, 
	        title: 'Большой Театр London', 
	        icon: 'http://rightblog.ru/wp-content/uploads/2016/07/theatre_icon.png'
	        // icon: 'img/icons/map-pin.png' 
	    }); 
	// Создаем наполнение для информационного окна
	  contentStringLondon = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">Geek Label</h1>'+
	      '<div id="bodyContent">'+
	      '<p>4th Floor, <br>' +
	      '<p>27 - 33 Bethnal Green Road <br>' +
	      '<p>Shoreditch <br>' +
	      '<p>London <br>' +
	      '<p>E1 6LA <br>' +
	      '</div>'+
	      '</div>';

	// Создаем информационное окно 
	var infowindowLondon = new google.maps.InfoWindow({
		content: contentStringLondon,
		Width: 400
	});

    // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker.addListener('click', function() {
		infowindowLondon.open(map, marker);
	});


	// Создаем информационное окно
    var infowindowBig = new google.maps.InfoWindow({
	    content: contentStringLondon,
	    maxWidth: 400
	  });
     // Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
      markerBig.addListener('click', function() {
        infowindowBig.open(map, markerBig);
      });


	// Прослушиватель событий для события mouseover
	  google.maps.event.addListener(marker, 'mouseover', function () { 
        var point = fromLatLngToPoint(markerBig.getPosition(), map); 
        $('#marker-geek').html(marker.tooltipContent ).css({ 
            'left': point.x-150,  
                'top': point.y+270  
          }).show(); 
        var pointGeek = fromLatLngToPoint(markerBig.getPosition(), map); 
	      $('#marker-tooltip').html(markerBig.tooltipContent ).css({ 
	          'left': pointGeek.x+180,  
	              'top': pointGeek.y+80
	        }).show();  
    }); 
	  // Прослушиватель событий для события mouseover
	  //   google.maps.event.addListener(markerBig, 'mouseover', function () { 
	  //     var point = fromLatLngToPoint(markerBig.getPosition(), map); 
	  //     $('#marker-tooltip').html(marker.tooltipContent ).css({ 
	  //         'left': point.x+180,  
	  //             'top': point.y+80
	  //       }).show();  
	  // }); 

	   // Создаем события mouseout на маркере, чтобы скрыть подсказку
		  google.maps.event.addListener(marker, 'mouseout', function () {  
        $('#marker-geek').hide();  
    }); 

      // Создаем события mouseout на маркере, чтобы скрыть подсказку
      // @media min-with 1200 tooltip  x+80 ; y-180 from 
     google.maps.event.addListener(marker, 'mouseout', function () {  
        $('#marker-tooltip').hide();  
    }); 
  		
  		// Создаем пиксельные latlng координаты для маркера  
  	   function fromLatLngToPoint(latLng, map) {  
	    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast()); 
	    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest()); 
	    var scale = Math.pow(2, map.getZoom()); 
	    var worldPoint = map.getProjection().fromLatLngToPoint(latLng); 
	    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale); 
	} 

	/* • • • • • Маркер и описание № 2 • • • • • */
  		// Создаем пиксельные latlng координаты для маркера  
	//  function fromLatLngToPoint(latLng, map) {  
	//     var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast()); 
	//     var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest()); 
	//     var scale = Math.pow(2, map.getZoom()); 
	//     var worldPoint = map.getProjection().fromLatLngToPoint(latLng); 
	//     return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale); 
	// } 

}





