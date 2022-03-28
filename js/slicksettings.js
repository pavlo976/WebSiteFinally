$('.team-carousel').slick({
    arrows: false,
    autoplay: true,
    mobileFirst: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    cssEase: 'ease-in-out',
    fade: true,
    focusOnSelect: true,
    lazyLoad: 'progressive',
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                fade: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                fade: false
            }
        }
    ]
  });
  