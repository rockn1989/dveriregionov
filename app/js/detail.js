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




	/*______ раскрытие списков с картинками в табах ______*/

	$('.js__show-options-list').on('click', function (e) {
		e.preventDefault();
		var parent = $(this).parent('.scroll-wrapper'),
				optionsList = parent.find('.options-list');
		$(this)
			.toggleClass('showed')
			.text($(this).text() == 'Смотреть все цвета' ? 'Свернуть' : 'Смотреть все цвета');
		if(!parent.hasClass('open')) {
			parent.addClass('open');
			optionsList.mCustomScrollbar({
				axis: "y",
				setHeight: 500
			});
		} else {
			parent.removeClass('open');
			optionsList.mCustomScrollbar("destroy").css('height','155px');
		}

	});


	$('.options-list').on('click','.options-list__item', function (e) {
		e.preventDefault();
		$(this).toggleClass('active check').siblings('.options-list__item').removeClass('active check');
	});



	/*______ Инициализация ленивой подгрузки картинок в табах ______*/


	$('.detail-small-tabs .tab-sw').on('click', 'li', function () {
		$('ul.uk-switcher img.lazy').lazy({
				bind: "event"
		});
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


	/*______ Select Error ______*/

	$('.js__card-buy').on('click', function (e) {
		e.preventDefault();
		$.each($('.detail-card select'), function (i, el) {
			var optionlist = $(el).find('option');

			$.each(optionlist, function (i, el) {

				if($(el).prop('selected') == true && $(el).val() == 'default') {
					console.log($(el).val());
					$(el)
						.parents('.custom-select-wrapper')
						.find('.custom-tooltip')
						.addClass('error');
					return false;
				} else {
					$(el)
						.parents('.custom-select-wrapper')
						.find('.custom-tooltip')
						.removeClass('error');
				};
			});
		})
	});

	$('.custom-select select').on('change', function () {
		$(this).val() != 'default' ? $(this).parent('.custom-select').siblings('.custom-tooltip').removeClass('error') 
		: $(this).parent('.custom-select').siblings('.custom-tooltip').addClass('error');
	});


	/*______ Detail scroll table ______*/

	$('.detail-scroll-table').mCustomScrollbar({
			axis: "y",
			setHeight: 200
		});

});
