$(function() {
    //공지사항 리스트 페이지번호
    $("#pagenation_1 a, #pagenation_2 a").on("click", function() {
        var idx = $(this).index();
        var lastIdx = $(this).closest("div").find("a").length;
        lastIdx -- ;
        //console.log(lastIdx);
        if( idx != 0 && idx !=1 && idx != lastIdx && idx != lastIdx-1){
            $(this).addClass("on").siblings().removeClass("on");
        }
        event.preventDefault();
    });
    
    //마이페이지, 아이디/비밀번호 찾기 - 탭 메뉴
    $('.admin-tab li').on('click', function () {
        if( $(this).hasClass('on') ){
            //console.log('true')
        }else{
            var liIndex = $('.admin-tab li').index(this)+1;

            $('.admin-tab').find('li').removeClass('on');
            $(this).addClass('on');

            $('div[id^="tab-cont"]').css({'display' : 'none'});
            $('#tab-cont-'+liIndex).css({'display' : 'block'});
        }
    });
});