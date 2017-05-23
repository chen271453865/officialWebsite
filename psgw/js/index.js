$(document).ready(function($) {
	$('.totop').click(function(event) {
		/* Act on the event */
		$('html,body').animate({'scrollTop': '0',},'slow');
	});
});