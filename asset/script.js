//getting elements //
var startEl = document.querySelector("#start-button");
var highscoreEL = document.querySelector(".highscore");
var timerEL = document.querySelector(".time");
var questtionEl = document.querySelector(".question");
var buttonEl =document.querySelector("#choice");
var sec = 10;
var Questions = ["what is the purpose of bootstrap?","What is an array?", "what is the correct syntax to end a comand?",
"what type of language is Javascript?"];
//var A1 = [];
//var quiz = {
//    what is the purpose of bootstrap :"",
//};


//timer for quiz
function startTimer(){
    //start the counting in miliseconds
    var timer = setInterval(function(){
        //add this to HTML
        timerEL.innerHTML='Time:'+sec;
        sec--;
        if (sec < 0) {
            timerEL.innerHTML='Time:'+ 0
            clearInterval(timer);
        }
        console.log('i am out');
    }, 1000);
}


function startgame(){
    startTimer();

}

startEl.addEventListener("click",startgame);
