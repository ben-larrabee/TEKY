$(document).ready(function() {

  $("button#add").click(function(ev){
    var newCar = $("#newcar").val();
    if(!newCar) return;
    $("#list").append("<li>"+ newCar + "</li><button id ='remove'>x</button>");
    $("#newcar").val("");

  });
  
  $("#hideMe").hide();

  $("#list").click("button.remove",(function(ev){
    $(ev.target).parent().remove();
  }));


});