'use strict';

$(function() {

	function preloadImg (targetElement) {

		var _self = $(targetElement);

		_self.each(function(i, el) {

			var imgSrc = $(el).find('[data-bg-preload]').css('background-image') || $(el).find('img');


			// Если картинка лежит фоном

			if(typeof imgSrc == 'string') {
				var src = imgSrc.replace(/(^url\()|(\)$|[\"\'])/g, ''),
					img = $('<img>').attr('src', src).on('load', function() {
						_self.removeClass('preload');
					});
			} else {

				// Если картинка лежит через тег img

				$.each(imgSrc, function (i, el) {
					var src = $(el).attr('src');
					$('<img>').attr('src', src).on('load', function() {
						_self.removeClass('preload')
					});
				});
			}

		});
	};


	preloadImg('div.preload');

	$('.lazy').lazy({
		scrollDirection: 'vertical',
		effect: 'fadeIn',
		visibleOnly: true,
		placeholder: "../img/ajax-loader.gif",
		onError: function(element) {
				console.log('error loading ' + element.data('src'));
		}
	});


	/*______ Показывать список городов ______*/

	$('.js__geo-name-toggle').on('click', function (e) {
		e.preventDefault();
		
		var $geoParent = $(this).closest('div.stores__geo'),
			$geoRegionsList = $geoParent.find('ul'),
			_self = $(this);

		_self.toggleClass('active');
		$geoRegionsList.toggleClass('open');

		$geoRegionsList.on('click', 'a' , function (e) {
			e.preventDefault();
			$geoParent.find('.js__geo-name-toggle').text($(this).text());
			$geoRegionsList.removeClass('open');
			_self.removeClass('active');
		});

	});


	/*______ Поиск на главной ______*/

	var time;

	$('.main-search').on('click', function (e) {

		$(this).addClass('open');

		time = setTimeout(function () {
			$(document).on('click keyup', hiddenSearchForm);
		}, 100);

		$(this).find('input[type="text"]').focus();
		
	})

	function hiddenSearchForm (e) {
		var form = document.querySelector('.main-search'),
			input = document.querySelector('.main-search input'),
				btn = document.querySelector('.main-search button');

		if((e.which == 27) || (e.target != input && e.target != btn) && $(form).hasClass('open')) {
				$(input).val('');
				$(form).removeClass('open');
				$(document).unbind('click keyup', hiddenSearchForm);
				clearInterval(time);
		};
	};


	/*______ Показывать форму на мобильных устройствах ______*/

	var $mobileForm = $('.mobile-form');

	$('.js__show-form').on('click', function (e) {
		e.preventDefault();
		$mobileForm.slideToggle('350').find('input').focus();
	})

	/*______ Навигация на мобильном ______*/

	$('.navbar-close').on('click', function (e) {
		e.preventDefault();
		var $parent = $(this).closest('.uk-nav__inner');
		$parent.addClass('hidden')
	})


	/*______ Маска формы ______*/

	$('.js__mask-phone').mask('+7 999 999-99-99', {clearIfNotMatch: true}).focus(function (e) {
		if (!$(this).val()) {
			$(this).val('+7 ');
		}
	});


	/*______ Валидация формы ______*/

	if($('form').is('.subscribe-form')) {

		$('.subscribe-form').validate({
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

	/*______ Левый сайдбар ______*/

	$('.js__toggle-navbar').on('click', 'i', function (e) {
		e.preventDefault();
		var _self = $(this),
			$parent = $(this).closest('li');

			$parent.find('ul').stop(true, true).slideToggle('350');
			$parent.find('a').toggleClass('active');

	});

	/*______ Левый сайдбар адаптация ______*/

	$('.navbar-title').on('click', function (e) {
		e.preventDefault();
		if($(window).outerWidth() >= 960) {
			return false;
		} 
		var _self = $(this),
			$parent = $(this).closest('div.navbar-left__inner');
			console.log(_self);
			$parent.find('ul.navbar-list').stop(true, true).slideToggle('350');
			_self.toggleClass('open');

	});


	/*______ Открытие мобильного подменю ______*/

	$('.js__menu-sublist-toggle').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.closest('a'),
			siblingsList = blockParent.siblings('.uk-nav__inner.hidden');
			siblingsList.removeClass('hidden');
	});


	/*______ Открытие мобильного подменю в футере ______*/

	$('[data-role="toggle-list"] i').on('click', function (e) {
		e.preventDefault();
		var self = $(this),
			blockParent = self.parent('[data-role="toggle-list"]'),
			siblingsList = blockParent.parent().find('.footer-nav-list');

		self.toggleClass('open');
		siblingsList.stop().slideToggle('350');
	});


	/*______ Отключение UIKIT анимации для мобильных устройств ______*/

/*	UIkit.on('beforeready.uk.dom', function () {
		if (UIkit.$win.width() < 767 && $('html').hasClass('uk-touch')) {
			UIkit.$('[data-uk-scrollspy]').removeAttr('data-uk-scrollspy');
		};
	});
*/

	/*______ Полифил для Object-fit ______*/
	
	objectFitImages();


});
