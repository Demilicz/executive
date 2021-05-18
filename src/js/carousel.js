
@@include('./slick-slide/slick.min.js')

$(function() {

  $('.featured__slider').slick({
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          draggable: true
        }
      }
    ]
  });
});