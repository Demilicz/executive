
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


$(function() {

  $('.events__container ').slick({
    draggable: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
        }
      }
    ]
  });
});

$(function() {
  $('.countries__container').slick({
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    responsive: [

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
          draggable: true,
        }
      }
    ]
  });
});

$(function() {
  $('.testomonial__slider').slick({

    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    centerMode: true,
    variableWidth: true,

    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        }
      },

     
    ]
  });
});