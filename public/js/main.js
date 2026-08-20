
$(document).ready(function () {

    $("[data-modal]").on('click', function (event) {

        event.stopPropagation(); // Останавливаем всплытие, чтобы клик не срабатывал на document

        let modal = $("#" + $(this).data("modal"));
        let buttonOffset = $(this).offset();
        let buttonHeight = $(this).outerHeight();
        let buttonWidth = $(this).outerWidth();

        // Если кликнули на другую кнопку, закрываем все модальные окна перед открытием нового
        $(".modal").not(modal).removeClass("visible");

        if (!modal.hasClass("visible")) {
            modal.css({
                top: buttonOffset.top + buttonHeight + 5 + "px", // Чуть ниже кнопки
                left: buttonOffset.left - (modal.outerWidth() - buttonWidth) + "px" // Выравнивание
            }).addClass("visible");
        } else {
            modal.removeClass("visible");
        }
    })

    $(document).on("click", function () {
        $(".modal").removeClass("visible");
    });

    $(".modal").on("click", function (event) {
        event.stopPropagation();
    });

    $(window).on("resize", function () {
        if ($('.modal').hasClass('visible')) {
            $('.modal').removeClass('visible');
        }
    });

    $(document).on("scroll", function () {
        if ($('.modal').hasClass('visible')) {
            $('.modal').removeClass('visible');
        }
    });

});

// Open compatibility window with click

$(document).on("click", "#show-compatibility", function (event) {

    event.stopPropagation();

    const button = this;
    const rect = button.getBoundingClientRect();
    const modal = $(".compatibility-popup-modal");

    if (modal.hasClass("invisible")) {

        modal.css({
            top: rect.bottom + 5 + "px",
            left: rect.left + "px"
        }).removeClass("invisible");

    } else {

        modal.addClass("invisible");
    }
});

//Open compatibility window with mouseover
$(document).on("mouseenter", "#show-compatibility", function () {

    const button = this;
    const modal = $(".compatibility-popup-modal");

    // const offset = button.offset();
    const rect = button.getBoundingClientRect();

    modal.css({
        top: rect.top + 5 + "px",
        left: rect.left + "px"
    }).removeClass("invisible");

});


$(document).on("mouseleave", "#show-compatibility, #compatibility-popup-modal", function () {
    setTimeout(function () {
        $(".compatibility-popup-modal").addClass("invisible");
    }, 100);


    /*
    setTimeout(function () {

        if (
            !$("#show-compatibility:hover").length &&
            !$(".compatibility-popup-modal:hover").length
        ) {
            $(".compatibility-popup-modal").addClass("invisible");
        }

    }, 10);
    */

});

//Brake Kits Slider

$('.slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000
});

// Fluid slider

$('#fluid-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('#fluid-slider-btn-next').on('click', function () {
    $('.fluid-slider').slick('slickNext');
});

$('#fluid-slider-btn-prev').on('click', function () {
    $('.fluid-slider').slick('slickPrev');
})

// Tools slider
$('#tools-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
})


