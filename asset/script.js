//getting elements //
var startEl = document.querySelector("#start-button");
var viewScoreEL = document.querySelector(".highscore");
var timerEL = document.querySelector(".time");
var questtionEl = document.querySelector(".question");
var buttonEl =document.querySelector("#choice");
var cardEl =document.querySelector(".card");
var cardTitleEl =document.querySelector(".card-title");
var cardOptionsEl =document.querySelector(".card-options");
var rowScores = document.querySelector(".userInfoRow");
var goBackEl = document.querySelector(".Go-Back");
var sec = 10;
var zero = 0
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
        timerEL.innerHTML='Time:'+ sec
        sec--;

        if (sec < 0) {
            timerEL.innerHTML='Time:'+ zero
            clearInterval(timer);
        }
       
    }, 1000);
}

//function to display highscore
function highscoreDis(){
    console.log("i am in highscoreDis")
    scr = "highscore.html"
    
}

function goBack() {
    window.history.go(-1);
}

//Startscreen display
function displayStart(){
    navbarDisplay();
    cardTitleEl.textContent ="Code Quiz Challenge";
    cardOptionsEl.textContent ="Try to answer the following questions within the following time limit Keep in mind that incorrect answer will be penalized your score time by 10 seconds";
    

}

function navbarDisplay(){
    timerEL.innerHTML='Time:'+ zero;
    viewScoreEL.innerHTML="View Highscore";

    if(true){
        viewScoreEl.addEventListener("click",highscoreDis);
        highscoreDis();
    }
}

function quizStart(){
    var score = startTimer();
    cardEl.cle
    for (i = 0; i < Questions.length; i++) {
        cardTitleEl.textContent = Questions[i]
        
        
        i += 1;
    }
    return score;


}

function startgame(){
    quizStart();

}
//When star is pressed it start the game 
startEl.addEventListener("click",startgame);

displayStart();