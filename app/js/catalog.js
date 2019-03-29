'use strict';

$(function () {

	/*______ Catalog custom select ______*/

	$.each($('.js__custom-select'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			dropdownPosition: 'below',
			theme: $(el).attr('theme')
		});
	});

	$('.js__toggle-filter').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.mobile-filter').slideToggle('350');
	})

	var cardHeight = [];

	$('.catalog-body .card .card-wrapper').each(function (i, el) {
		return cardHeight.push($(el).outerHeight());
	});

	cardHeight.sort(function(a, b) {
		return b - a;
	});

	$('.catalog-body .card .card-wrapper').map(function (i, el) {
		$(el).css('minHeight', cardHeight[0] + 'px')
	});

	$.each($('.catalog-body .card'), function (i, el) {
		$(el).css('height',$(el).find('.card-wrapper').outerHeight()+'px');
	});

});
