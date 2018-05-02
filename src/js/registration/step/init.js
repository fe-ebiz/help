$(function() {
    
    //tab
    $('.electro-tab li').on('click', function(){
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = $('.electro-tab li').index(this)+1;
            
            $('.electro-tab').find('li').removeClass('on');
            $(this).addClass('on');
            $('section[class^="electro-sec"]').css({'display' : 'none'});
            $('.electro-sec-'+liIndex).css({'display' : 'block'});
        }
    });
})