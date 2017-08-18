//Business Logic
var pong = function (number){

  var ping =[];

  for(var i = 1; i<=number; i++){
    if(i%3 ===0){
      ping.push("ping")
    }else{
      ping.push(i);
    }
  };
  return ping;
};







// User Interface
$(document).ready(function(){
  $("form#pong").submit(function(event){
    event.preventDefault();
    var usersNumber = parseInt($("input#number").val());
    console.log(usersNumber);
    var result = $("#result").text(pong(usersNumber));
  });
});
