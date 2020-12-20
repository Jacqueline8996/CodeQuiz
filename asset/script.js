//getting elements //
var highscoreEL = document.querySelector(".highscore");
var timerEL = document.querySelector(".time");
var questtionEl = document.querySelector(".question");
var buttonEl =document.querySelector("#choice");
var timeLeft = 100;
var Questions = ["what is the purpose of bootstrap?","What is an array?", "what is the correct syntax to end a comand?",
"what type of language is Javascript?"];
//var A1 = [];
//var quiz = {
//    what is the purpose of bootstrap :"",
//};


//timer for quiz

//start timer 
buttonEl.addEventListener("click", scoreKeeper);

function scoreKeeper(){
    
    buttonEl = setInterval(function(){
        timerEl.textContent = "Score:" + timeLeft ;
        timeLeft--;

        if (timeLeft === 0) {
        timerEl.textContent = "";
        clearInterval(buttonEl)
        }

    }, 1000);
    
}

function startgame(){
    scoreKeeper();

}

buttonEl.addEventListener("click",startgame);
