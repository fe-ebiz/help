$(function () {
  /*체크박스*/
  $('.chk_box, .chk-box').click(function () {
    if ($(this).prop('checked')) {
      $(this).addClass('on');
    } else {
      $(this).removeClass('on');
    }
  });
  /*라이도박스*/
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
});