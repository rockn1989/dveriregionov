
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
		var slider = $(el).find('.slider');;
			slider.slick({
			arrows: true,
			dots: false,
			cssEase: 'linear',
			lazyLoad: 'ondemand',
			autoplay: false,
			speed: 400,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: $(this).find('.slide-prev'),
			nextArrow: $(this).find('.slide-next')
		})
	});

	$('.brands-slider .slider').slick({
		arrows: true,
		dots: false,
		infinity: true,
		cssEase: 'linear',
		lazyLoad: 'ondemand',
		autoplay: false,
		fade: false,
		autoplaySpeed: 2000,
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
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

});
