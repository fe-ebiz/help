$(function() {
  //공지사항 리스트 페이지번호
  $("#pagenation a").on("click", function() {
    var idx = $(this).index();
    var lastIdx = $(this).closest("div").find("a").length;
    lastIdx -- ;
    //console.log(lastIdx);
    if( idx != 0 && idx !=1 && idx != lastIdx && idx != lastIdx-1){
      $(this).addClass("on").siblings().removeClass("on");
    }
    event.preventDefault();
  });
});