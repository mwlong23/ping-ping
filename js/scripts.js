//Business Logic
var pong = function (number){
  var result =[];

  for(var i = 1; i<=number; i++){
    if(i%3 ===0 && i %5 ===0){
      result.push("Ping-pong")
    }else if (i %3 ===0) {
      result.push("ping");
    }else if (i %5 ===0) {
      result.push("pong");
    }else{
      result.push(i);
    };
  };
  return result;
};





// User Interface
$(document).ready(function(){
  $("form#pong").submit(function(event){
    event.preventDefault();
    var usersNumber = parseInt($("input.number").val());
    console.log(usersNumber);
    var pingPongArray = pong(usersNumber);
    // var bullets = $("#bullets").text(resultsBullets(pingPongArray));
    console.log("pingPongArray:"+pingPongArray.length + ":"+ "userNumber:"+usersNumber.length)

    var elements = [];
    for(x = 0; x < pingPongArray.length; x++) {
        var element = $('<li>'+pingPongArray[x]+'</li>');
        elements.push(element);
    }
    $("#result").show();
    $('#bullets').append(elements);
    $("#rules").hide();
    $(".number").append(usersNumber);


  });
});
