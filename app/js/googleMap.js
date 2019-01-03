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
	// var myLatLng = {lat:51.524269, lng:-0.073770};
	// var myLatLng = {lat:51.524729, lng:-0.074023};
	var myLatLng = {lat:51.524607, lng:-0.073941};
	
	// В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
	var myMap = new google.maps.Map(document.getElementById('map'), {
		// При создании объекта карты необходимо указать его свойства
		
		// center - определяем точку на которой карта будет центрироваться
		// center: {lat:51.524269, -0.073770},
		center: myLatLng,
		
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
		 styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]}]
              
	}); // map


	/* • • • • • Маркер и описание  • • • • • */

	// Создаем маркер на карте
	var markerGeekLabel = new google.maps.Marker({

		// Определяем позицию маркера
	    position: myLatLng,

	    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
	    map: myMap,

	    // Пишем название маркера - появится если навести на него курсор и немного подождать
	    title: 'Geek Label London',

	    // Укажем свою иконку для маркера
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
	markerGeekLabel.addListener('click', function() {
		infowindowLondon.open(myMap, markerGeekLabel);
	});

}




