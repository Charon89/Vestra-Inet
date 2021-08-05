$(function () {
    // Home page
    $('.video-block').css({ paddingTop: $('.header').outerHeight() });

    // Services page
    $('.services-item').on('mouseenter', function () {
        $('.services-item').removeClass('accent');
        $(this).toggleClass('accent');
    });
    $('.services-item').on('mouseleave', function () {
        $(this).toggleClass('accent');
        setTimeout(() => {
            if (!$('.services-item').hasClass('accent')) {
                $('.services-item').eq(1).addClass('accent');
            }
        }, 2000);
    });

    if ($('.scroll-down-link').length)
        $('.scroll-down-link').on('click', function () {
            $('html, body').animate(
                {
                    scrollTop: $('.h-services').offset().top,
                },
                800
            );
        });

    // Google review hover handlers
    $('.google-review-item').hover(
        function (e) {
            $('.google-review-item').not(this).addClass('blur');
        },
        function (e) {
            $('.google-review-item').not(this).removeClass('blur');
        }
    );

    // Quote file upload handler
    $('.quote-upload-in').on('change', function (e) {
        let $input = $(this);
        let $parent = $(this).parent();
        if (this.files.length <= 0) {
            $input.prev().text('BROWSE').removeClass('active');
            $('.remove-file').remove();
        } else {
            $input
                .prev()
                .html(this.files[0].name)
                .addClass('active')
                .parent()
                .append(
                    `<span class="remove-file" title="Remove file">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0991 3.21115C13.2338 3.08541 13.3425 2.93434 13.4189 2.76656C13.4954 2.59877 13.538 2.41757 13.5445 2.23329C13.5509 2.04901 13.521 1.86527 13.4565 1.69255C13.392 1.51982 13.2942 1.36151 13.1685 1.22664C13.0429 1.09177 12.8919 0.982994 12.7243 0.906511C12.5566 0.830029 12.3756 0.787342 12.1915 0.780888C12.0073 0.774435 11.8237 0.804342 11.6511 0.8689C11.4786 0.933458 11.3204 1.0314 11.1856 1.15715L7.08096 4.98717L3.25406 0.877756C2.99799 0.615276 2.64945 0.463524 2.28301 0.454972C1.91658 0.446419 1.56135 0.581746 1.29334 0.831994C1.02533 1.08224 0.865829 1.42753 0.848969 1.79398C0.83211 2.16043 0.95923 2.51893 1.20313 2.79277L5.03003 6.90079L0.923965 10.7308C0.784447 10.8553 0.671188 11.0064 0.590839 11.1753C0.51049 11.3442 0.464671 11.5274 0.456075 11.7143C0.447478 11.9011 0.476276 12.0878 0.540778 12.2634C0.605281 12.4389 0.704186 12.5998 0.831685 12.7366C0.959184 12.8734 1.11271 12.9833 1.28323 13.0598C1.45376 13.1364 1.63786 13.1781 1.82471 13.1824C2.01156 13.1868 2.19739 13.1537 2.3713 13.0852C2.54521 13.0167 2.70369 12.9141 2.83742 12.7834L6.94208 8.95479L10.769 13.0628C10.8925 13.205 11.0435 13.3209 11.2127 13.4035C11.382 13.4861 11.5661 13.5337 11.7542 13.5436C11.9422 13.5534 12.1303 13.5253 12.3073 13.4609C12.4842 13.3964 12.6464 13.297 12.7841 13.1684C12.9219 13.0399 13.0323 12.885 13.109 12.7128C13.1856 12.5407 13.2268 12.3548 13.2301 12.1664C13.2335 11.978 13.1989 11.7908 13.1284 11.6161C13.0579 11.4413 12.953 11.2825 12.8199 11.1492L8.99441 7.04118L13.0991 3.21115Z" fill="${
                                    $input.hasClass('remove-red') ? 'red' : 'white'
                                }"/>
                            </svg>
                        </span>`
                );
            $('.remove-file').on('click', function (e) {
                $(this).parent().find('input').val('').trigger('change');
                $(this).remove();
            });
        }
    });

    $(`[data-fancybox].job`).fancybox({
        touch: false,
        beforeShow: function (instance, current) {
            console.info(instance);
            console.log(current);
            console.log(this.opts.title);
            $(current.src).find('.job-popup-position').text(this.opts.title);
            $(current.src).find(`[name="position"]`).val(this.opts.title);
        },
        afterClose: function (instance, current) {
            $(current.src).find('form').trigger('reset');
        },
    });

    // Quote submit handler
    $('.js-submit-inquire').on('click', function (e) {
        e.preventDefault();
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('minified');
            $('.video-block').css({ paddingTop: $('.header').outerHeight() });
        } else {
            $('.header').removeClass('minified');
            $('.video-block').css({ paddingTop: $('.header').outerHeight() });
        }
        if ($('.pm-sub-trigger').length > 0 && $(window).scrollTop() > 182) {
            $('.pm-sub-trigger').addClass('minified');
        } else {
            $('.pm-sub-trigger').removeClass('minified');
        }

        if ($('#port-filter').length)
            if ($('#port-filter').offset().top == $(window).scrollTop() + $('.header').height()) {
                $('#port-filter').addClass('is-pinned');
            } else $('#port-filter').removeClass('is-pinned');
        
        if ($(window).scrollTop() > 50) {
            $('.common-header.st').addClass('sticked');
            $('.common-header.st .common-header-inner').slideUp(300);
        } else {
            $('.common-header.st').removeClass('sticked');
            $('.common-header.st .common-header-inner').slideDown(300);
        }
    });

    let $menu = $('.responsive-menu-container');

    $('#responsive-menu-trigger').on('click', function () {
        $(this).toggleClass('open');
        $menu.slideToggle();
    });

    $('.responsive-sub-menu-trigger').on('click', function (e) {
        // e.preventDefault();
        console.log(e.target);
        if ($(this).hasClass('active-sub-menu')) {
            $(this).removeClass('active-sub-menu').find('.responsive-sub-menu').slideUp(300);
            return;
        }
        $('.responsive-sub-menu-trigger').removeClass('active-sub-menu').find('.responsive-sub-menu').slideUp(300);

        $(this).addClass('active-sub-menu').find('.responsive-sub-menu').slideToggle(300);
    });

    $(window).resize(function () {
        if ($(this).width() > 975) {
            $menu.hide();
        }
    });

    // Global effects initialization
    AOS.init();

    // Home page - team swiper
    if ($('.teamSwiper').length) {
        let teamSwiper = new Swiper('.teamSwiper', {
            autoHeight: true,
            spaceBetween: 20,
            loop: true,
            effect: 'fade',
            speed: 1000,
            fadeEffect: { crossFade: true },
            autoplay: {
                delay: 2500,
            },
            //  noSwiping: true,
            //  noSwipingClass:"teamSwiper .swiper-slide",
        });
    }
    if ($('.teamSwiperMobile').length) {
        let teamSwiperMobile = new Swiper('.teamSwiperMobile', {
            autoHeight: true,
            spaceBetween: 20,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            loop: true,
            freeMode: false,
            autoplay: {
                delay: 2500,
            },
            //  noSwiping: true,
            //  noSwipingClass:"teamSwiper .swiper-slide",
        });
    }
    if ($('.g-reviews-swiper').length)
        var gReviewsSwiper = new Swiper('.g-reviews-swiper', {
            slidesPerView: 1,
            // spaceBetween: 50,
            centerInsufficientSlides: true,
            centeredSlides: true,
            centeredSlidesBounds: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    if ($('.project-swiper').length)
        var swiper = new Swiper('.project-swiper', {
            effect: 'cube',
            grabCursor: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 5000,
            },
        });
    if ($('.corpSwiper').length)
        var swiper = new Swiper('.corpSwiper', {
            // slidesPerView: 4,
            slidesPerView: 'auto',
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                840: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                940: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    // About page go mobile section
    if ($('.goMobile-swiper').length) {
        var swiper = new Swiper('.goMobile-swiper', {
            autoHeight: true,
            loop: true,
            speed: 1500,
            spaceBetween: 100,
            slidesPerView: 1,
            autoplay: {
                delay: 5000,
            },
            effect: 'slide',
            fadeEffect: {
                crossFade: true,
            },
        });
        swiper.on('transitionStart', function (instance) {
            $(instance.$el).find('.mobile-ph').css({ right: '25%', opacity: 0 });
            $(instance.$el).find('.product-ph').css({ right: '5%', opacity: 0 });
        });
        swiper.on('transitionEnd', function (instance) {
            $(instance.$el).find('.mobile-ph').css({ right: '35%', opacity: 1 });
            $(instance.$el).find('.product-ph').css({ right: '13%', opacity: 1 });
        });
    }
    if ($('#pr-accordion').length)
        $('#pr-accordion').accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
        });
    $('.t-card').on('click', function () {
        $(this).toggleClass('anim');
    });
    // About page - accordion
    $('.accordion li').hover(
        function (e) {
            $(this).addClass('active');
        },
        function (e) {
            $(this).removeClass('active');
        }
    );

    if ($('.team-accord').length)
        $('.option').click(function () {
            $('.option').removeClass('active');
            $(this).addClass('active');
        });

    // About page parallax effect
    // if ($('.about-we-specialize').length) $('.about-we-specialize').parallax({ imageSrc: '/images/about-page/Commercial-industrial-webdesign.png', speed: 0.1, bleed: 0 });
    // Our -services - 3d - parallax effect
    // if ($('.single-service-section.experience-bg').length) $('.single-service-section.experience-bg').parallax({ imageSrc: '/images/services/Group 217.png', speed: 0.1 });
    // Service - corporate identity page
    // if ($('.corp-section2').length)
    //     $('.corp-section2').parallax({ imageSrc: '/images/services/corpIdentity/central-image-coroporate-identity-vestra-inet-toronto 1.jpg', speed: 0.1, bleed: 0 });

    // Services select block
    if ($('.services-select.type-of-system-select').length)
        $('.services-select.type-of-system-select').select2({
            placeholder: 'Type of system',
            // allowClear: true,
            minimumResultsForSearch: -1,
        });
    if ($('.services-select.pr-list-select').length)
        $('.services-select.pr-list-select').select2({
            placeholder: 'Project list',
            // allowClear: true,
            minimumResultsForSearch: -1,
        });
    // if ($('.services-select').length)
    //     $('.services-select').select2({
    //         placeholder: 'Select an option',
    //         minimumResultsForSearch: -1,
    //     });
    $('.services-select').on('select2:select', function (e) {
        var data = e.params.data;
        console.log($(data.element).data('url'));
        window.location = $(data.element).data('url');
    });

    // About page gallery
    if ($('.grid').length)
        $('.grid').masonry({
            itemSelector: '.grid-item',
            stagger: 30,
            gutter: 20,
            stamp: '.stamp',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true,
        });

    // Employment page
    $('.js-open-job').on('click', function (e) {
        e.preventDefault();
        let $this = $(this);
        $('.js-open-job').not(this).show(0);
        $this.hide(0);
        $('.job-item-hidden-content').slideUp(500);
        $(this).parent().find('.job-item-hidden-content').slideDown(500);
    });
    $('.js-close-job').on('click', function (e) {
        e.preventDefault();
        let $this = $(this);
        $(this).closest('.job-item-hidden-content').slideUp(500);
        $this.closest('.job-item').find('.js-open-job').show();
    });

    $('.tablink').on('click', function (e) {
        openLink($(this), $(this).data('q-rel'));
    });

    // Marketing page - tabs
    function openLink(obj, id) {
        var i, x, tablinks;
        x = document.getElementsByClassName('tab-block');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        tablinks = document.getElementsByClassName('tablink');
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }
        $(obj).addClass('active');
        document.getElementById(id).style.display = 'flex';
    }
});
