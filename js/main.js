$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slider__arrow slider__arrow_prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow_next"></div>',
    });
});