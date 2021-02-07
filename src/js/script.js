$(document).ready(function(){
    $('.slider__wrapper').slick({
        speed: 1000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slider/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slider/arrow-next.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
});