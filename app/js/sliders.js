
$(function() {

	$('.main-slider .slider').slick({
		arrows: true,
		dots: true,
		infinity: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: false,
		autoplaySpeed: 2000,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.main-slider').find('.slide-prev'),
		nextArrow: $('.main-slider').find('.slide-next'),
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 1,
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


	$('.tab-slider').each(function (i, el) {
		if(i == 0 ) {
			var slider = $(el).find('.slider');
				slider.slick({
				arrows: true,
				dots: false,
				cssEase: 'ease',
				lazyLoad: 'ondemand',
				autoplay: false,
				autoplaySpeed: 4000,
				speed: 800,
				slidesToShow: 5,
				slidesToScroll: 4,
				prevArrow: $(this).find('.slide-prev'),
				nextArrow: $(this).find('.slide-next'),
				responsive: [
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
		};
	});


	$('.brands-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		autoplay: true,
		fade: false,
		autoplaySpeed: 3500,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slide-prev gray"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="slide-next gray"><i class="icon-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 940,
				settings: {
					slidesToShow: 3,
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


	/*______ Detail sliders ______*/

	 $('.detail-big-slider .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		lazyLoad: 'ondemand',
		fade: true,
		asNavFor: '.detail-preview-slider .slider',
		responsive: [
		{
			breakpoint: 959,
			settings: {
			centerMode: true,
			centerPadding: '180px',
			}
		},
		{
			breakpoint: 767,
			settings: {
				centerMode: false,
				centerPadding: '0px',
			}
		},
	]
	});

	$('.detail-preview-slider .slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.detail-big-slider .slider',
		dots: false,
		infinity: true,
		centerMode: false,
		lazyLoad: 'ondemand',
		focusOnSelect: true,
		vertical: true,
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-right"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
		responsive: [
		{
			breakpoint: 1245,
			settings: {
				slidesToShow: 3,
				vertical: true
			}
		},
		{
			breakpoint: 1244,
			settings: {
				slidesToShow: 3,
				vertical: false,
		}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				vertical: false,
			}
		},
	]
	});


	$('.detail-furniture-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: false,
		autoplaySpeed: 3500,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.detail-furniture-slider').find('.slide-prev'),
		nextArrow: $('.detail-furniture-slider').find('.slide-next')
	});

	$(window).on('orientationchange', function () {
		$('.detail-product-preview-slider').slick('resize');
	});


	/*______ Products Slider ______*/

	var sliderWrapper = $('.products-slider');

	$('.products-slider').each(function (i, el) {
		var slider = $(el).find('.slider');
		slider.slick({
			arrows: true,
			dots: false,
			autoplay: false,
			fade: false,
			autoplaySpeed: 2000,
			speed: 600,
			slidesToShow: 4,
			lazyLoad: 'ondemand',
			prevArrow: $(this).find('.slide-prev'),
			nextArrow: $(this).find('.slide-next'),
			responsive: [
				{
					breakpoint: 1220,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 1220,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});	

	})


});
