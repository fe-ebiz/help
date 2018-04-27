$(function () {
	/*체크박스*/
	$('.chk_box, .chk-box').click(function () {
		if ($(this).prop('checked')) {
			$(this).addClass('on');
		} else {
			$(this).removeClass('on');
		}
	});
	/*라디오박스*/
	$('.radio').click(function () {
		$(this).prop('checked', true).addClass("on").siblings().removeClass("on");
	});
	/*레이어팝업 닫기*/
	$('.layer_pop .pop_area .pop_close').click(function () {
		$(this).parents('.layer_pop').hide();
	});
	$('.layer-pop .pop-area .pop-close').click(function () {
		$(this).parents('.layer-pop').hide();
	});
	/*구매내역 탭메뉴*/
	$('.mypage .buy_list h5').click(function () {
		$(this).addClass('on').siblings('h5').removeClass('on');
		$('.mypage .buy_list h5, .mypage .buy_list .cont').removeClass('on');
		$(this).addClass('on').next().addClass('on');
	});
	/*아이디 비밀번호 찾기 탭메뉴*/
	$('.find h4').click(function () {
		$('.find h4, .find .cont').removeClass('on');
		$(this).addClass('on').next().addClass('on');
	});
	/*이용약관 탭메뉴*/
	$('.policy h3').click(function () {
		$('.policy h3, .policy div').removeClass('on');
		$(this).addClass('on').next().addClass('on');
	});


	$(window).resize(function(){
		var windowWid = $(window).width();
		var ul = $('.top-wrap .tb-nav');
		if( windowWid < 1100 ){
			widthOuto(ul);
		}else{
			ul.css({width : '100%'});
		}
	}).resize();


	/* 해더 기능 */
	headerFn();
});

/* 해더 기능 */
function headerFn() {
	var hd = $(".header"),
	hnb = $(".tab-hnb");
	
	hnb.click(function() {
		$(".header").toggleClass("active");
	});
}

//ul width
function widthOuto(itm){
	var liLen = itm.find('li').length-1;
	var liPlus = 0;

	for( var i = 0 ; i < liLen ; i++ ){
		liPlus += itm.find('li:eq('+i+')').outerWidth(true);
	}
	if( itm.width() < liPlus ){
		itm.css({width : (liPlus-20)+'px'});
	}else{
		itm.css({width : (liPlus+(liLen*3))+'px'});
	}
}

function login_naver() {
	window.name = 'help_nuri_w';
	window.domain = 'onbiz.co.kr';
	document.domain = 'onbiz.co.kr';

	var url = 'http://help.onbiz.co.kr/admin/naver.php';

	var pop_nvl = window.open(url, "login_naver", "width=500, height=500");
}

