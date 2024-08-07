$(document).on('ready', function () {
    $(".click_menu").click(function (event) {
        event.preventDefault();


        var anchor = $(this).attr('data-scroll');
        var x = $('#' + anchor).offset().top;
        var heightMenuBar = $('.navbar').outerHeight();
        $('html, body').animate({
            scrollTop: $('#' + anchor).offset().top - heightMenuBar
        }, 500);
    });

    });
