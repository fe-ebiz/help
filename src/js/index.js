$(function() {

  //리뷰 슬라이드
  $('#review-slider').bxSlider({
    /*auto: true,*/
    slideWidth: 512,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 10,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '',
    prevText: ''
  });
  //서비스 리뷰 슬라이드
  $('#service-slider').bxSlider({
    /*auto: true,*/
    slideWidth: 948,
    /*minSlides: 1,
    maxSlides: 1,*/
    slideMargin: 10,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '',
    prevText: ''
  });
  

});