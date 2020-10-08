$(document).ready(function() {
	$('.btn').click(function(event) {
		$('.bmv').css('display','none');
	});

	$('.bmv-btn').click(function(event) {
		$('.bmv').css('display','block');
	});

	$('.btn').click(function(event) {
		$('.block').removeClass('active')
		var num = $(this).attr('data-num');
		$('#block'+num).addClass('active')
	});
	

	
});