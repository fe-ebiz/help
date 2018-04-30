$(function() {
  //좌측 네비게이션
  $("#lnb li a").on("click", function() {
    var idx = $(this).parent().index();
    //console.log(idx);
    $(this).parent().addClass("on").siblings().removeClass("on");
    return false;
  });
  //계산비용클릭 시 노출
 /* $("#ers-p4 .btn").on("click", function() {
    $("#ers-prc-box").show();
    return false;
  });*/
});