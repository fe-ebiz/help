$(function() {

    //서비스 리뷰 슬라이드
    serviceSliderFn();
    
});

function serviceSliderFn() {
    var serviceSlider = $('#service-slider').bxSlider({
        slideWidth : 'auto',
        startSlide : 0,
        moveSlides : 3,
        minSlides : 3,
        maxSlides : 3,
        slideMargin : 10,
        nextSelector : '#slider-next',
        prevSelector : '#slider-prev',
        nextText : '',
        prevText : ''
    });
    
    var wW = $(window).width();
    
    if( wW < 1100 ){
        serviceSlider.reloadSlider({
            slideWidth : 'auto',
            startSlide : 0,
            moveSlides : 1,
            minSlides : 1,
            maxSlides : 1,
            slideMargin : 10,
            nextSelector : '#slider-next',
            prevSelector : '#slider-prev',
            nextText : '',
            prevText : ''
        });
    }else{
        serviceSlider.reloadSlider({
            slideWidth : 'auto',
            startSlide : 0,
            moveSlides : 3,
            minSlides : 3,
            maxSlides : 3,
            slideMargin : 10,
            nextSelector : '#slider-next',
            prevSelector : '#slider-prev',
            nextText : '',
            prevText : ''
        });
    }
    
    $(window).resize(function(){
        var wW = $(window).width();

        if( wW < 1100 ){
            serviceSlider.reloadSlider({
                slideWidth : 'auto',
                startSlide : 0,
                moveSlides : 1,
                minSlides : 1,
                maxSlides : 1,
                slideMargin : 10,
                nextSelector : '#slider-next',
                prevSelector : '#slider-prev',
                nextText : '',
                prevText : ''
            });
        }else{
            serviceSlider.reloadSlider({
                slideWidth : 'auto',
                startSlide : 0,
                moveSlides : 3,
                minSlides : 3,
                maxSlides : 3,
                slideMargin : 10,
                nextSelector : '#slider-next',
                prevSelector : '#slider-prev',
                nextText : '',
                prevText : ''
            });
        }
    })
}






