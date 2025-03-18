    $(document).ready(function() {
        $(".nav-link").click(function() {
            $(".nav-link").removeClass("active");
            $(this).addClass("active");
        });

        $(".custon-faq-question").click(function() {
            $(".custom-faq-answer").addClass("d-none").fadeOut(200);

            let answer = $(this).next(".custom-faq-answer");
            answer.removeClass("d-none").fadeIn(300);
        });

        // slick slider
        $(".watch-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            fade: true,
            adaptiveHeight: true,
            prevArrow: $(".prev-btn"),
            nextArrow: $(".next-btn"),
        });
    });