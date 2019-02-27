'use strict';

$(function () {

	/*______ Переключение карточек с ценой (детальная) ______*/

	$('.type-of-prices').on('click', '.item', function () {

		if($(this).hasClass('checked')) {
			$(this).removeClass('checked');
		} else {
			$('.type-of-prices .item').removeClass('checked')
			$(this).toggleClass('checked');
		}
	});


	/*______ Тип открытия двери ______*/

	$('.type-of-doors').on('click', '.item', function () {
		$(this).addClass('active').siblings('.item').removeClass('active');
	});


	/*______ Переключение цветов (квадраты) ______*/

	var $colorName = $('.color-square-value span');

	$('.colors-list').on('click', 'a', function (e) {
		e.preventDefault();
		$('.colors-list a').removeClass('active');
		$(this).addClass('active');
		updateColor($(this).data('color'), function () {
			// Ajax-запрос для обновления слайдера
		});
	});

	function updateColor(color, callback) {
		var colorValue = color || 'Некорректный цвет';
		$('.color-square-value span').text(color);
		callback();
	};

	/*______ Показать/скрыть дополнительные цвета (квадраты) ______*/

	var $colorsList = $('.add-colors-wrapper .colors-list');

	$('.js__show-add-colors').on('click', function (e) {
		e.preventDefault()
		$(this)
			.toggleClass('showed')
			.text($(this).text() == 'Показать еще цвета' ? 'Скрыть цвета' : 'Показать еще цвета')
		$colorsList.slideToggle('250');
	});

});
