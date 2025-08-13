window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
	// Attach carousels with explicit settings (no breakpoints so counts stay fixed)
	bulmaCarousel.attach('#traffic-carousel', {
		slidesToScroll: 1,
		slidesToShow: 2,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		breakpoints: []
	});

	bulmaCarousel.attach('#building-carousel', {
		slidesToScroll: 1,
		slidesToShow: 2,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		breakpoints: []
	});

	bulmaSlider.attach();
})