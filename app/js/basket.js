
$(function () {

	/*______ Удаление товара из коризины ______*/

	var $orderList= $('.order-list');

	$('.js__delete-product').on('click', function (e) {
		e.preventDefault();
		var $elementId = $(this).closest('.product').attr('id');
		
		// Отправка запроса на удаление
		$orderList.addClass('preload');

		$orderList.find('#'+$elementId).remove();

		// После удаление элемента
		$orderList.removeClass('preload');
	});

});
