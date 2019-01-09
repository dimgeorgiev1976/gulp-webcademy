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
	// var pos = {lat:51.524729, lng:-0.074023};
	var pos = {lat:51.524607, lng:-0.073941};
	
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
		// Определяем позицию маркера
	    // position: pos,

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    // map: map,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    // title: 'Geek Label London',

	    // Укажем свою иконку для маркера
	    // icon: 'img/bg/map-pin.png'
	// });

	// Создаем наполнение для информационного окна
	  contentStringLondon = '<div id="content">'+
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

	  google.maps.event.addListener(marker, 'mouseover', function () { 
        var point = fromLatLngToPoint(marker.getPosition(), map); 
        $('#marker-tooltip').html(marker.tooltipContent ).css({ 
            'left': point.x+100,  
                'top': point.y-100  
        }).show();  
    }); 

     google.maps.event.addListener(marker, 'mouseout', function () {  
        $('#marker-tooltip').hide();  
    }); 

 function fromLatLngToPoint(latLng, map) {  
    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast()); 
    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest()); 
    var scale = Math.pow(2, map.getZoom()); 
    var worldPoint = map.getProjection().fromLatLngToPoint(latLng); 
    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale); 
} 

	// Создаем прослушивание, по клику на маркер - открыть инфо-окно infowindow
	marker.addListener('click', function() {
		infowindowLondon.open(map, markerGeekLabel);
	});



}




