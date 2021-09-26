$(document).ready(function () {
    $('.carousel__inner').slick({
        dots: false,
        speed: 300,
        // adaptiveHeight: true,                                            attention at Path
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/chevron_right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content')
            .removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('fast');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast');
    });

    // $('.button_mini').on('click', function () {
    //     $('.overlay, #order').fadeIn('fast');
    // });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('fast');
        });
    });

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");

            $('form').trigger('reset');
        })
    })

    // Smooth scroll and pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    })

    $("a[href='#up']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px"});
        return false;
    });

    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
});