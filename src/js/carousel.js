
@@include('./slick-slide/slick.min.js')

$(function() {

  $('.featured__slider').slick({
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          draggable: true,
        }
      }
    ]
  });
});