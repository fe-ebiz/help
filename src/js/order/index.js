$(function () {
	//리뷰 슬라이드
	reviewSliderFn();

});

function reviewSliderFn() {
	var wW = $(window).innerWidth();
		
	if ( wW < 768 ) {
		var reviewSlider = $('#review-slider').bxSlider({
			adaptiveHeight: true,
			slideWidth: 290,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 10,
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
			nextText: '',
			prevText: ''
		});
	} 
	if ( wW >= 768 && wW < 1100 ) {
		var reviewSlider = $('#review-slider').bxSlider({
			slideWidth: 630,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 10,
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
			nextText: '',
			prevText: ''
		});
	} 
	if ( wW >= 1100 ) {
		var reviewSlider = $('#review-slider').bxSlider({
			slideWidth: 512,
			minSlides: 2,
			maxSlides: 2,
			slideMargin: 10,
			nextSelector: '#slider-next',
			prevSelector: '#slider-prev',
			nextText: '',
			prevText: ''
		});
	}
	
	$(window).resize(function () {
		var wW = $(window).innerWidth();
		
		if ( wW < 768 ) {
			reviewSlider.reloadSlider({
				adaptiveHeight: true,
				slideWidth: 290,
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 10,
				nextSelector: '#slider-next',
				prevSelector: '#slider-prev',
				nextText: '',
				prevText: ''
			});
		} 
		if ( wW >= 768 && wW < 1100 ) {
			reviewSlider.reloadSlider({
				slideWidth: 630,
				minSlides: 1,
				maxSlides: 1,
				slideMargin: 10,
				nextSelector: '#slider-next',
				prevSelector: '#slider-prev',
				nextText: '',
				prevText: ''
			});
		} 
		if ( wW >= 1100 ) {
			reviewSlider.reloadSlider({
				slideWidth: 512,
				minSlides: 2,
				maxSlides: 2,
				slideMargin: 10,
				nextSelector: '#slider-next',
				prevSelector: '#slider-prev',
				nextText: '',
				prevText: ''
			});
		}
	});
}