var xMove = 5;
var yMove = 1;
$(function(){

  $("#ball").click(function(e){
    console.log($("#ball").prop("x"));
    console.log($("#ball").prop("y"));
  });

  $(document).click(function(e){
    var xPos = $("#ball").offset().left+xMove;
    var yPos = $("#ball").prop("offsetTop")+yMove;
    $("#ball").prop("offsetLeft", xPos);
    $("#ball").prop("offsetTop", yPos);
    console.log(xPos);
    console.log(yPos);
    console.log($("#ball").prop("offsetLeft"));
    console.log($("#ball").prop("offsetTop"));
    console.log($("#ball").prop(properties);
    // var offsetString = "{ top: " + xPos +", left: "+ yPos +" }";
    // console.log(offsetString);
    // $("#ball").offset(offsetString);
    // $("#ball").css({ 'left': xPos , 'top': yPos  });
  });



//end of
});
//nothing else

// $('#img').css({ 'left': x + 'px', 'top': y + 'px' });