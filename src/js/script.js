$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: false,
        speed: 300,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/chevron_right_solid.png"></button>',
        resposive: [
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