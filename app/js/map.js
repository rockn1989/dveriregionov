'use strict';

$(function () {
	if($('div').is('#stores-map')) {
/*	  var myMap;
		ymaps.ready(init); 
		function init () {
			myMap = new ymaps.Map("stores-map", {
				center: [55.76, 37.64], 
				zoom: 6,
				controls: []
			});

			var Placemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'test',
				balloonContent: '<div class="balloon">CONTENT</div>'
			}, {
				iconLayout: 'default#image',
				iconImageSize: [47,47],
				iconImageOffset:[0, 0]
			});

			myMap.geoObjects.add(Placemark);

		}*/

		ymaps.ready(init);

		function init () {
			var storesMap = new ymaps.Map("stores-map", {
				center: [55.76, 37.64],
				zoom: 6,
				controls: [] 
			});

			var	clusterer = new ymaps.Clusterer({
				clusterIcons: {
					href: '/img/cluster.png',
					size: [47, 47]
				}
			});

			var getPointData = function (index) {
				return {
					balloonContentBody: 
					'<div class="cluster-section"><div class="cluster-header">Офис-склад в Строгино</div></div>'+
					'<div class="cluster-section"><div class="cluster-address"><div class="cluster-title icon-pin">Адрес:</div><p>Москва, район Строгино, ул. Маршала Прошлякова, вл. 6</p></div></div>'+
					'<div class="cluster-section"><div class="cluster-contacts">'+
					'<div class="uk-grid">'+
						'<div class="uk-width-1-2@m"><div class="cluster-title icon-phone_copy">Телефоны:</div><p>+7 (495) 162-82-02, 432-47-75</p></div>'+
						'<div class="uk-width-1-2@m"><div class="cluster-title">Оптовый отдел:</div><p>+7 (495) 756-38-27, 506-95-65</p></div></div></div></div></div>'+
					'<div class="cluster-section"><div class="cluster-time-work">'+
					'<div class="uk-grid">'+
						'<div class="uk-width-1-2@m"><div class="cluster-title icon-calendar">Режим работы</div><p>Понедельник—Воскресенье: с 9:00 до 21:00</p></div>'+
						'<div class="uk-width-1-2@m"><div class="cluster-title">Режим работы склада:</div><p>Понедельник—Пятница: с 9:00 до 18:00</p><p>Суббота: с 9:00 до 17:00</p><p>Воскресенье: выходной</p></div>'+
					'</div>'+
					'</div></div>'
				}
			};

			var getPointOptions = function () {
				return {
					preset: 'islands#violetIcon'
				};
			};

			var points = [
				[55.831903,37.411961], [55.763338,37.565466], [55.763338,77.565466], [55.744522,37.616378], [55.780898,37.642889]
			];

			var geoObjects = [];

	    for(var i = 0, len = points.length; i < len; i++) {
	        geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
	    };

	    clusterer.options.set({
	        gridSize: 80,
	        clusterDisableClickZoom: true
	    }); 

	    clusterer.add(geoObjects);
	    storesMap.geoObjects.add(clusterer);

	    storesMap.setBounds(clusterer.getBounds(), {
	        checkZoomRange: true
	    });			
		}

	};

	if($('div').is('#stores-detail-map')) {
	  var myMap;
		ymaps.ready(init); 
		function init () {
			myMap = new ymaps.Map("stores-detail-map", {
				center: [55.789859, 37.397676], 
				zoom: 16,
				controls: []
			});

			var Placemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: '',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/detail-map-icon.png',
				iconImageSize: [47,55],
				iconImageOffset:[0, 0]
			});

			myMap.geoObjects.add(Placemark);
	}};

	$('.stores-map__toggle').on('click', function (e) {
		e.preventDefault();
		$(this)
			.toggleClass('toggle')
			.siblings('#stores-map')
			.toggleClass('closed');

		$(this).text($(this).text() == 'Свернуть карту' ? 'Показать карту' : 'Свернуть карту')
	});

});
