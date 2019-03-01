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




	$('.js__show-options-list').on('click', function (e) {
		e.preventDefault()
		$(this)
			.toggleClass('showed')
			.text($(this).text() == 'Смотреть все цвета' ? 'Скрыть цвета' : 'Смотреть все цвета')
		$(this).parent('.options-list-wrapper').toggleClass('open');
	});
	/*______ Слайдер в калькуляторе рассрочки ______*/

	$('#ui-slider').slider({
		range: "min",
		value: 100000,
		min: 1,
		max: 200000,
		step: 1,
		create: function (event, ui) {
			var val = $('#ui-slider').slider("value");
			var min = $('#ui-slider').slider("option","min");
			var max = $('#ui-slider').slider("option","max");

			$('.ui-slider-current-value span').html(val);
			$('.js__ui-slider').val(val);
			$('.ui-slider-min span').html(min);
			$('.ui-slider-max span').html(max);

			$('.js__ui-slider').on('change keyup', function (e) {
					var _self = $(this),
						inputValue = parseInt($(this).val(), 10);

						if(inputValue > max) {
							$('.ui-slider-current-value span').html(max);
							$('.js__ui-slider').val(max);
							$('#ui-slider').slider("value", inputValue)
						} else if (inputValue < min) {
							$('.ui-slider-current-value span').html(min);
							$('.js__ui-slider').val(min);
							$('#ui-slider').slider("value", inputValue)
						} else {
							$('.ui-slider-current-value span').html(inputValue);
							$('#ui-slider').slider("value", inputValue)
						};

			});
		},
		slide: function (event, ui) {
			$('.ui-slider-current-value span').html(ui.value);
			$('.js__ui-slider').val(ui.value);
		}
	})

});
