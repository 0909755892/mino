// Main
$(document).ready(function () {
	// Phần Slider
	$('.home_baner01 .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		dots: false,
		autoplay: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	});
	$('.home_baner .owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		items: 1,
		dots: false,
		autoplay: true,
		
	});





});
