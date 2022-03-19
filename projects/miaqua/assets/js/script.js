$(document).ready(function() {

    $(window).scroll(function() {
        // sticky navbar on scroll script

        if (this.scrollY > 200) {
            $('.navbar').addClass("change-navbar-bg");
        } else {
            $('.navbar').removeClass("change-navbar-bg");
        }



    });



    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }


    })

    $('.carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }


    })


});