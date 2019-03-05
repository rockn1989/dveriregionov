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

});
