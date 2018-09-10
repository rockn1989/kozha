'use strict';

$(function () {

	/*______ Catalog Scrollbar ______*/

	if($('.filter').length) {
		$('.filter .group-list').mCustomScrollbar({
			axis: "y",
			theme: "siteTheme",
			scrollInertia: 300
		});
	};


	/*______ Catalog toggle mobile filter ______*/
	$('.js__toggle-filter').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$('.filter-form-wrapper').slideToggle('350')
	})


	/*______ Catalog toggle group-list ______*/

	$('.js__group-title-toggle').on('click', function() {
		var _self = $(this),
			$parent = _self.closest('fieldset');
		if(_self.hasClass('open-title')) {
			_self.removeClass('open-title');
			$parent.find('.group-list').stop(true, true).slideUp(350);
		} else {
			_self.addClass('open-title');
			$parent.find('.group-list').stop(true, true).slideDown(350);
		};

	});


	/*______ Catalog custom select ______*/

	$.each($('.js__custom-select'), function (i, el) {
		$(el).select2({
			minimumResultsForSearch: -1,
			dropdownPosition: 'below',
			theme: $(el).attr('theme')
		});
	});


	/*______ Card checking Favorite ______*/

	$('.js__check-favorite').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('check');
	});

});
