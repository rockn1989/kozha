'use strict';

$(function () {

	/*______ Слайдер на главной ______*/

	$('.main-slider .slider').slick({
		infinity: true,
		dots: true,
		arrows: true,
		autoplay: true,
		cssEase: 'ease',
		autoplaySpeed: 5000,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: 'progressive',
		prevArrow: $(this).find('.slide-prev'),
		nextArrow: $(this).find('.slide-next')
	});


	/*______ Слайдер продукции ______*/

	$('.main-products-slider .slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		lazyLoad: 'progressive',
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
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
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
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

	$('.products-slider .slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		lazyLoad: 'progressive',
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
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


	/*______ Слайдер с брендами ______*/

	$('.brands-slider .slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 6,
		autoplay: true,
		cssEase: 'ease',
		autoplaySpeed: 5000,
		speed: 1000,
		slidesToScroll: 1,
		lazyLoad: 'progressive',
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-left"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-right"></i></div>',
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});


	/*______ Слайдеры на детальной ______*/

	 $('.detail-product-big-slider .slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		lazyLoad: 'progressive',
		asNavFor: '.detail-product-preview-slider .slider',
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

	$('.detail-product-preview-slider .slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.detail-product-big-slider .slider',
		dots: false,
		infinity: true,
		centerMode: false,
		lazyLoad: 'progressive',
		focusOnSelect: true,
		vertical: true,
		prevArrow: '<div class="btn-slide slick-prev"><i class="icon-arrow-up"></i></div>',
		nextArrow: '<div class="btn-slide slick-next"><i class="icon-arrow-down"></i></div>',
		responsive: [
		{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				vertical: false,
				centerPadding: '0',
				centerMode: false
			}
		},
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				vertical: false,
				centerPadding: '10px',
				centerMode: true
		}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				vertical: false,
				centerPadding: '20px',
				centerMode: true
			}
		},
	]
	});

});
