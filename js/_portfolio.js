$(function () {
    if ($('.portfolio-cards').length) {
        $('.portfolio-cards').css('opacity', 1);
        

        cards = $('.portfolio-cards');

        cards.masonry({
            isFitWidth: true,
            itemSelector: '.portfolio-cards a',
        });

        $.fn.inView = function () {
            var visibleArea = $(window).scrollTop() + $(window).height();
            var objEndPos = $(this).offset().top + $(this).height() - 200;
            return visibleArea >= objEndPos && $(window).scrollTop() <= objEndPos ? true : false;
        };

        var loopActive = true;

        setInterval(function () {
            console.log("I")
            if (loopActive && $('.portfolio-cards').inView()) {
                loopActive = false;
                $.ajax({
                    url: $('.portfolio-cards').attr('data-url'),
                    type: 'POST',
                    dataType: 'json',
                    data: { page: cards.attr('data-page'), category: cards.attr('data-category') },
                    beforeSend: function () {
                        $('.ajax-loader').show();
                    },
                    success: function (data) {
                        if (data.page > 0) {
                            $('.portfolio-cards').attr('data-page', data.page);
                            var el = $(data.html);
                            cards.masonry().append(el).masonry('appended', el);
                            $('.ajax-loader').hide();
                            // setInterval(function () {
                            //     cards.masonry();
                            // }, 100);
                            loopActive = true;
                        }

                        if (data.html == '') {
                            loopActive = false;
                        }
                    },
                });
            }
        }, 500);
    }

    if ($('.photography-cards').length) {
        const cards = $('.photography-cards');
        cards.css('opacity', 1);

        cards.masonry({
            isFitWidth: true,
            itemSelector: '.photography-cards a',
        });

        $(window).resize(function () {
            cards.masonry({
                isFitWidth: true,
                itemSelector: '.photography-cards a',
            });
        });
    }
});
