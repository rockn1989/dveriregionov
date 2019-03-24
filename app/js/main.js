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


		if(!tabSlider.hasClass('slick-initialized')) {
			tabSlider.slick({
				arrows: true,
				dots: false,
				cssEase: 'ease',
				lazyLoad: 'ondemand',
				autoplay: false,
				autoplaySpeed: 4000,
				speed: 800,
				slidesToShow: 5,
				slidesToScroll: 4,
				prevArrow: tabSliderWrapper.find('.slide-prev'),
				nextArrow: tabSliderWrapper.find('.slide-next'),
				responsive: [
					{
						breakpoint: 1500,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1300,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 1025,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							infinite: true,
						}
					},
					{
						breakpoint: 940,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		} else {
			if($(window).outerWidth() >= 968) {
				tabSlider.slick('reinit');
			}
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


	if($('form').is('.call-spec')) {
		$('form.call-spec').validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				tel: {
					required: true
				}
			},
			messages: {
				tel: "Заполните поле",
				email: "Заполните поле"
			}
		});

	};

	if($('form').is('.callback-modal')) {
		$('form.callback-modal').validate({
			rules: {
				tel: {
					required: true
				}
			},
			messages: {
				tel: "Заполните поле"
			}
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

	$('[data-role="toggle-list"]').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('div[class^="uk-width"]'),
			siblingsList = blockParent.find('.footer__list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});


	/*______ Отключение UIKIT анимации для мобильных устройств ______*/

/*	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		};
	});*/



	/*______ Rating Star ______*/

	var $reviews = $('.review');

	$.each($reviews, function (i, el) {
		var $rating = $(el).find('.rating'),
			inputList = $(el).find('input[type="radio"]'),
			inputLength = inputList.length,
			j = inputLength-1,
			k= 0;
		for (j; j >= 0; j--,k++ ) {
			$(inputList).eq(k).attr('id','star'+i+'-'+(j+1));
			$(inputList).eq(k).prop('value',j+1);
			$(inputList).eq(k).prop('name','rating'+i);
			$(inputList).eq(k).next('label').attr('for','star'+i+'-'+(j+1));
		}
	});


	/*______ Полифил для Object-fit ______*/
	
	objectFitImages();


	/*______ Полифил для SVG ______*/

	svg4everybody();


	/*______ Show modal on mousemove ______*/

	var ShowModal = {
		lastTime : 0,
		windowSizes: {},
		timer: null,
		initModal: false,
		modal: UIkit.modal($("#call-spec")),
		addModalEvents: {
			show: function () {
				UIkit.util.on($("#call-spec"), 'show', function () {
					this.initModal = true;
					clearInterval(this.timer);
				});
			},
			hide: function () {
				UIkit.util.on($("#call-spec"), 'hide', function () {
					this.initModal = false;
				});
			}
		},
		init: function () {

			this.setWindowSize();

			if(this.windowSizes.width >= 1100) {
				this.addModalEvents.show();
				this.addModalEvents.hide();

				$(document).on('mousemove', this.mouseMove.bind(this));
			};

		},
		setWindowSize:  function () {
			this.windowSizes.width = $(window).innerWidth();
			this.windowSizes.height = $(window).innerHeight();
		},
		getWindowSize: function () {
			console.log(this.windowSizes.width + ':'+ this.windowSizes.height)
		},
		mouseMove: function (e) {

			if(Date.now() - this.lastTime >= 300) {

				if(((this.windowSizes.width - e.clientX) <= 100) && (e.clientY <= 100) && this.initModal === false) {

					var modal = this.modal;

					this.timer = setTimeout(function () {
						modal.show();
					}, 300);

				}

				this.lastTime = Date.now();
			};
		}
	};

	ShowModal.init();

});
