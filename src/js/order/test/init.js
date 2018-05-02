$(function() {
  //선택 
  $("#choice li p").on("click", function() {
    $("#choice li p").removeClass("on");
    $(this).addClass("on");
  });
  //모두 동의 하기
  $("#chk-all").on("click", function() {
    var isChecked = $(this).prop("checked");
    //console.log(isChecked);
    if ($(this).prop('checked')) {
      $(this).closest("div").find("input[type='checkbox']").addClass('on');
    } else {
      $(this).closest("div").find("input[type='checkbox']").removeClass('on');
    }
    $(this).closest("div").find("input[type='checkbox']").prop("checked", isChecked);
    //console.log($("#chk1").prop("checked"));
    //console.log($("#chk2").prop("checked"));
    //console.log($("#chk3").prop("checked"));
  });
});