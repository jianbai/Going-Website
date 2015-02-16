$(document).ready(function() {

// Smooth scrolling

	$('#scroller').click(function() {

		$('html, body').animate({
			scrollTop: $('#walkthrough').offset().top + $('html, body').scrollTop()
		}, 800);

	});

});