$(function() {
    
	$(window).resize(function () {
		var wW = $(window).innerWidth();
		
		if ( wW < 1100 ) {
            $('#lnb').css({'display' : 'none'});
        }else{
            $('#lnb').css({'display' : 'block'});
        }
    })
    
    //서브메뉴
    $('#lnb li').on('click', function(){
        if( $(this).hasClass('yet') ){
            
        }else{
            if( $(this).hasClass('on') ){
                
            }else{
                var liIndex = $('#lnb li').index(this)+1;

                $('#lnb').find('li').removeClass('on');
                $(this).addClass('on');
                $('section[id^="tab-sec-"]').css({'display' : 'none'});
                $('#tab-sec-'+liIndex).css({'display' : 'block'});
                
                //모바일
                var wW = $(window).innerWidth();

                if ( wW < 1100 ) {
                    $('.lnb-txt-box').removeClass('on');
                    $('.lnb-txt-box').siblings('#lnb').slideUp();
                }
                    
                var chgTxt = $(this).text();
                $('.lnb-txt-box .lnb-txt').text(chgTxt);
            }
        }
    });
    
    //모바일서브메뉴
    $('.lnb-txt-box a').on('click', function(){
        $(this).parent().toggleClass('on');
        $(this).parent().siblings('#lnb').slideToggle();
    });
    
})