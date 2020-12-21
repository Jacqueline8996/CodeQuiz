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
var highscoreTable = document.querySelector("HighscoreTable");
var highscoreRow = document.querySelector("userInfoRow");
var sec = 10;
var zero = 0
var quizObj = [
    {
        "Questions":"what is the purpose of bootstrap?",
        "Answer1":"template to build website",
        "Answer2":"fancy boots",
        "Answer3":"items",
        "Answer4":"documents"
    },
    {
        "Questions":"What is an array?",
        "Answer1":"a boquet of flowers",
        "Answer2":"code",
        "Answer3":"a list",
        "Answer4":"a object"
    },
    {
        "Questions":"Which languages do not use semi-colons to end code?",
        "Answer1":"c++",
        "Answer2":"python",
        "Answer3":"javascript",
        "Answer4":"java"
    },
    {
        "Questions":"What version of HTML are we on?",
        "Answer1":"HTML4",
        "Answer2":"HTML5",
        "Answer3":"HTML7",
        "Answer4":"HTML6"
    },


];
var quest = ["what is the purpose of bootstrap?","What is an array?","Which languages do not use semi-colons to end code?","What version of HTML are we on?"];
var a1 = ["template to build website","fancy boots","items","documents"];
var a2 = ["a boquet of flowers","a boquet of flowers","code","a list","a object"];
var a3 =["c++","python","javascript","java"];
var a4 = ["HTML4","HTML5","HTML7","HTML6"];


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
};

//function to display highscore
function highscoreDis(){
    console.log("i am in highscoreDis")
    scr = "highscore.html"
    
};


function quizStart(){
    var score = startTimer();
    
    for (i = 0; i < quest.length; i++) {
        var que = quest[i];
        console.log(que);
        cardTitleEl.textContent.que;
        for (i2 = 0; i2 < a1.length; i2++) {
            var ans = a1[i2];
            console.log[ans];
        };
        
    };

};
//function displayStart(){
//};

function startgame(){
    quizStart();

};
//When star is pressed it start the game 
startEl.addEventListener("click",startgame);

//displayStart();