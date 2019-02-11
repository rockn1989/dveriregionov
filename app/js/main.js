'use strict';

$(function() {	


	/*______ Tabs events ______*/

	var $ukSwitcherTabs = $('[uk-switcher]').eq(0),
		$ukSwitcherTabsContent = $ukSwitcherTabs.siblings('ul.uk-switcher');

	$('.tab-sw').on('click', 'li', function (e) {

		e.preventDefault();

		var idx = $('.tab-sw li').index($(this)),
				li = $ukSwitcherTabsContent.find('li.uk-active'),
		tabSliderWrapper  = li.find($('.tab-slider')),
		tabSlider = li.find('.tab-slider .slider');



		/*______ В первом табе слайдер инициализируется при загрузке страницы ______*/

		if(idx == 0) {
			tabSlider.slick('reinit');
		}

		if(!tabSlider.hasClass('slick-initialized')) {
			tabSlider.slick({
				arrows: true,
				dots: false,
				cssEase: 'ease',
				lazyLoad: 'ondemand',
				autoplay: false,
				autoplaySpeed: 4000,
				speed: 800,
				slidesToShow: 4,
				slidesToScroll: 4,
				prevArrow: tabSliderWrapper.find('.slide-prev'),
				nextArrow: tabSliderWrapper.find('.slide-next')
			});
		} else {
			tabSlider.slick('reinit');
			return false;
		};
	})

	/*______ Modal Search ______*/


	var $pageSeacrh = UIkit.modal('#page-search', {
		beforeshow: function() {
			$('.page-search-modal .uk-modal-dialog').css('marginTop',$('.js__toggle-search').offset().top +'px');
		}
	});
	

	$('.js__toggle-search').on('click', function (e) {
		e.preventDefault();
		var _self = $(this);

			$pageSeacrh.beforeshow();
		$('html, body').animate({
			scrollTop: 0
		}, 350, function () {

			$pageSeacrh.show();
			$('.page-search-modal .uk-modal-dialog').find('input[type="text"]').focus();
		});
	});


	/*______ Lazy Load ______*/

	$('.lazy').lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		placeholder: "../img/ajax-loader.gif",
		onError: function(element) {
				console.log('error loading ' + element.data('src'));
		}
	});

	/*______ Раскрытие подменю (левая навигация) ______*/

	$('.js__toggle-sublist-nav').on('click', function (e) {
		e.preventDefault();
		$(this)
			.toggleClass('open')
			.parents('li')
			.find('.left-sublist-nav')
			.stop()
			.slideToggle('350');
	});

	/*______ Показывать форму на мобильных устройствах ______*/

	var $mobileForm = $('.mobile-form');

	$('.js__show-form').on('click', function (e) {
		e.preventDefault();
		$mobileForm.slideToggle('350').find('input').focus();
	})


	/*______ Маска формы ______*/

	$('.js__input-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	/*______ Валидация формы ______*/

	if($('form').is('.default-form')) {

		$('.default-form').validate({
			rules: {
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				email: "Обязательноe поле",
			},
		});
	};


	/*______ Открытие мобильного подменю ______*/

	$('.js__menu-sublist-toggle').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('a'),
			siblingsList = blockParent.siblings('.menu-sublist');

		if(blockParent.hasClass('open')) {
			siblingsList.stop().slideUp('350', function () {
				blockParent.removeClass('open');
			});
		} else {
			siblingsList.stop().slideDown('350', function () {
				blockParent.addClass('open');
			});
		}

		self.toggleClass('open');
	});


	/*______ Открытие мобильного подменю в футере ______*/

	$('[data-role="toggle-list"] i').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.parent().find('.footer__list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});


	/*______ Отключение UIKIT анимации для мобильных устройств ______*/

/*	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		};
	});*/


	/*______ Полифил для Object-fit ______*/
	
	objectFitImages();


	/*______ Полифил для SVG ______*/

	svg4everybody();

});
