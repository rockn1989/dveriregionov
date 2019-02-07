
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
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next'),
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
});
