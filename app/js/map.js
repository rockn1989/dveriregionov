'use strict';

$(function () {
	if($('div').is('#stores-map')) {
	  var myMap;
	  ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
	  function init () {
	    myMap = new ymaps.Map("stores-map", {
	      center: [55.76, 37.64], // Координаты центра карты
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

	    myMap.geoObjects.add(Placemark)

	  }
	}
});
