'use strict';

$(function () {

	/*______ Check colors ______*/

	$('.detail-colors-list').on('click', 'li', function (e) {
		e.preventDefault();

		$('.detail-colors-list li').removeClass('active');
		$(this).addClass('active');

		var $colorBox = $(this).closest('.detail-product-section').find('.section-value'),
				$color = $(this).find('a').data('color');
				console.log($color);
		$colorBox.text($color)
	});


	/*______ Check sizes ______*/

	$('.detail-sizes-list').on('click', 'span', function () {
		$('.detail-sizes-list span').removeClass('active');
		$(this).addClass('active')
	});


	/*______ Detail popup-table sizes ______*/

	$('.js__table-toggle').on('click', function (e) {
		e.preventDefault();
		$(this).closest('.detail-table-size-btn').toggleClass('active');
		$(this).closest('.detail-product-section').find('.detail-table-wrapper').toggleClass('active');
	});

	$('.detail-table-wrapper .close').on('click', closePopupTable);

	function closePopupTable () {
		var $parent = $(this).closest('.detail-product-section')
		$parent.find('.detail-table-wrapper').toggleClass('active');
		$parent.find('.detail-table-size-btn').toggleClass('active');
	};

});
