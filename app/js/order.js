'use strict';

$(function () {

	/*______ Валидация формы ______*/

	if($('form').is('.order-form')) {

		$('.order-form').validate({
			messages: {
				name: "Обязательноe поле",
				email: "Обязательноe поле",
				tel: "Обязательноe поле",
			},
		});
	};

	/*______ Переключение между типами заказов ______*/

	var $radioContent = $('.radio-content');

	$('.radio-wrapper').on('click', 'input' , function () {
		var blockId = this.id;

		if(blockId == 'delivery') {
			$radioContent.addClass('toggle');
			$radioContent.find('.radio-pickup').fadeOut('350', function () {
				$radioContent.find('.radio-delivery').fadeIn('350');
				$radioContent.removeClass('toggle');
			});
		}

		if(blockId == 'pickup') {
			$radioContent.addClass('toggle');
			$radioContent.find('.radio-delivery').fadeOut('350', function () {
				$radioContent.find('.radio-pickup').fadeIn('350');
				$radioContent.removeClass('toggle');
			});
		};

	});


	/*______ Яндекс карта ______*/

ymaps.ready(init);

function init() {

 var myMap = new ymaps.Map('mapBranch', {
   center: [55.7768, 37.5864],
   controls: ['zoomControl'],
   zoom: 14
 });

 function clickGoto() {
   // Проставляем активный класс
   $('.js__go-to').removeClass('active');
   $(this).addClass('active');

   // адрес
   var branch = this.getAttribute('data-goto');

   // получение координат по адресу - асинхронная функция
   var myGeocoder = ymaps.geocode(branch);

   myGeocoder.then(
     function(res) {
       coords = res.geoObjects.get(0).geometry.getCoordinates();

       // переходим по координатам
       myMap.panTo(coords, {
         flying: true,
         timingFunction: 'linear',
         duration: 600,
         checkZoomRange: true
       });
       // добавляем маркер
       var placeMark = new ymaps.Placemark(coords, {
         balloonContent: branch
       }, {
         iconLayout: 'default#image',
         iconImageHref: '../img/pic-map.png',
         iconImageSize: [35, 50],
         iconImageOffset:  [-17, -50]
       });
       myMap.geoObjects.add(placeMark);
     },
     function(err) {
       alert('Ошибка');
     }
   );
   return false;
 }

 // навешиваем обработчики
 var col = document.getElementsByClassName('js__go-to');
 for (var i = 0, n = col.length; i < n; ++i) {
   col[i].onclick = clickGoto;
 }

 // имитируем клик по первому элементу в списке после загрузки
 $('.js__go-to').eq(0).click()
}

});
