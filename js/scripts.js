$(function() {
  $("form").submit(function() {
    var name = $("#name").val();
    var description = $("#description").val();
    var startTime = $("#start-time").val();
    var endTime = $("#end-time").val();
    var date = $("#date").val();

    window.open("confirm.html", "_blank");


    $(window).ready(function() {
      $(".name").text(name);
      $(".description").text(description);
      $(".date").text(date);
      $(".start-time").text(startTime);
      $(".end-time").text(endTime);
    });
  });
});
