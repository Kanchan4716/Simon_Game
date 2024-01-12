     var buttonColours=["red", "blue", "green", "yellow"];
      //
     var gamePattern=[];
     //
     var userClickedPattern=[];
      //array
      var level =0;
      //
      var started =false;
///////////////////////////////////////////////////////////////
function checkAnswer(currentLevel){
 if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
     console.log("sucesss");
     if(gamePattern.length===userClickedPattern.length){
          setTimeout(function () {
               nextSequence();
             }, 1000);
     }
 }
 else{ 
     console.log("wrong");
     playSound("wrong");

        $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
     startOver();
     
 }
 
}
//////////////////////////////////////////////////////////////
     $(".btn").click(function(){
        //
        var userChosenColour = $(this).attr("id");
        //
       
        userClickedPattern.push(userChosenColour);
        //
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        
     });
////////////////////////////////////////////////////////////////     
function nextSequence(){
     userClickedPattern = [];
     var randomNumber=Math.floor(Math.random()*4);
     //randomnumber
     var randomChosenColour = buttonColours[randomNumber];
     //pushing buttoncolors in to gamepattern
     gamePattern.push(randomChosenColour);

     $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
      //adding flash to the buttons

     playSound(randomChosenColour);
     //adding audio 
     level++;
     //
     $("#level-title").text("Level " + level);

     }     
/////////////////////////////////////////////////////////////////
function playSound(name){
          var audio=new Audio("sounds/" +name +".mp3");
          audio.play();
     }       
////////////////////////////////////////////////////////////////
function animatePress(currentColour){

     $("." + currentColour).addClass("pressed");

     setTimeout(function () {
          $("#" + currentColour).removeClass("pressed");
        }, 100);
}
////////////////////////////////////////////////////////////////
$(document).keypress(function(){
     if(!started){
     $("#level-title").text("Level " +level);
      nextSequence();
      started=true;

     }
 });
//////////////////////////////////////////////////////////////////
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
