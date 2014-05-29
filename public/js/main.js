$(document).on('ready', function() {
console.log('test');

	$('.unpaid').on('click', function() {

		$(this).parent().addClass('active').siblings().removeClass('active');

		console.log($(this).parent());
		$('#orders tbody tr').removeClass('hidden').each(function(el, index) {
			console.log($(this));
			if($(this).attr('data-financial-status')==='paid'){
				$(this).addClass('hidden')
			}

		});
			// console.log('unpaid');
	});

	$('.paid').on('click', function() {

		$(this).parent().addClass('active').siblings().removeClass('active');

		$('#orders tbody tr').removeClass('hidden').each(function(el, index) {
			console.log($(this));
			if($(this).attr('data-financial-status')!=='paid'){
				$(this).addClass('hidden')
			}
		});
		// console.log('paid');
	});

	$('.shipped').on('click', function() {

		$(this).parent().addClass('active').siblings().removeClass('active');

		$('#orders tbody tr').removeClass('hidden').each(function(el, index) {
			console.log($(this));
			if($(this).attr('data-ship-status')!=='fulfilled'){
				$(this).addClass('hidden')
			}
		});
		// console.log('shipped');
	});

	$('.all-orders').on('click', function() {

		$(this).parent().addClass('active').siblings().removeClass('active');

		$('#orders tbody tr').removeClass('hidden');
		// console.log('all-orders');

	});

});