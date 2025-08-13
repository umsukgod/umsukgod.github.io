window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var defaultOptions = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', defaultOptions);
    
    // Override options for specific carousels if they have data attributes
    $('.carousel').each(function() {
        var $carousel = $(this);
        var slidesToShow = $carousel.data('slides-to-show');
        var slidesToScroll = $carousel.data('slides-to-scroll');
        
        if (slidesToShow || slidesToScroll) {
            var customOptions = { ...defaultOptions };
            if (slidesToShow) customOptions.slidesToShow = slidesToShow;
            if (slidesToScroll) customOptions.slidesToScroll = slidesToScroll;
            
            // Reinitialize this specific carousel with custom options
            var carouselId = $carousel.attr('id');
            if (carouselId) {
                bulmaCarousel.attach('#' + carouselId, customOptions);
            }
        }
    });
    
    bulmaSlider.attach();
})
