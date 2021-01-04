//getting elements //
var startEl = document.querySelector("#start-button");
var viewScoreEL = document.querySelector(".highscore");
var timerEL = document.querySelector(".time");
var mainQuestEl = document.querySelector(".quizQuest");
var questtionEl = document.querySelector(".questions");
var buttonEl = document.querySelector("#choice");
var startDisEl = document.querySelector("#startWindow");
//var cardEl =document.querySelector(".card");
//var cardTitleEl =document.querySelector(".card-title");
//var cardOptionsEl =document.querySelector(".card-options");
var choicesEl = document.querySelector(".choices");
var responseEl = document.querySelector(".response");
var rowScores = document.querySelector(".userInfoRow");
var highscoreTable = document.querySelector("HighscoreTable");
var highscoreRow = document.querySelector("userInfoRow");
var sec = 10;
var zero = 0;
var count = 0;
//remove object
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
var listAns = [a1,a2,a3,a4];



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

//determins if the answer is right or wrong
function rightWrong(choice){
 
    console.log("in right or wrong to check choice", choice);

    if (choice === a1[0] || choice === a2[3] || choice === a3[1] || choice === a4[3] ){
        var result = document.createElement("div");
        result.innerHTML = "Right choice"
        responseEl.appendChild(result);
        responseEl.style.visibility = "visible";
        clickedButton = true;

       
    }
    else{
        var result = document.createElement("div");
        result.innerHTML = "Wrong choice"
        responseEl.appendChild(result);
        responseEl.style.visibility = "visible";
        clickedButton = true;
        
    }
    
    console.log("did you cick if", clickedButton);

    count = increment();
    console.log("did you cick if", count);
    return clickedButton
};

function getValue (){

    var userClick = event.target.innerHTML;
    console.log("yourchoice is ", userClick);
    rightWrong(userClick);
    clickedButton = true;
    console.log("did you cick if", clickedButton);
};

// prints out the choices
function displayButtons(list){


    for (var i = 0; i < list.length ; i++){
    
        //goes through the list printing out the buttons
        var option = document.createElement("button");
        option.setAttribute("class","button");
        option.setAttribute("id","choiceBtn");
        option.innerHTML = list[i];
        choicesEl.appendChild(option);
        console.log("options", option.innerHTML);
        option.addEventListener("click",getValue);
       
    }
    
};

function increment(){
    count ++
    return count;

};
function displayQuestion(list){
    var Questprompt = document.createElement("h2");
    Questprompt.setAttribute("class","questionsAsk");
    Questprompt.innerHTML = list;
    questtionEl.appendChild(Questprompt);
};
function emptyQuest(){

    mainQuestEl.removeChild(mainQuestEl.firstChild);

};

function displayQuiz(){
    displayQuestion(quest[count]);
    displayButtons(listAns[count]);

};

//goes through the quiz 
function quizThrough(){
    

    //displayQuestion(quest[count]);
   // displayButtons(listAns[count]);
   // var clickedButton = true;
    var clickedButton = false;
    console.log("count begfor",count);





    while(count < quest.length){

        
            console.log("count", count);
            console.log("in while");
            console.log("did you cick 2", clickedButton);
            //question asked 
            //var Questprompt = document.createElement("h2");
            //Questprompt.setAttribute("class","questionsAsk");
            //Questprompt.innerHTML = quest[count];
            //questtionEl.appendChild(Questprompt);
            //displayQuestion(quest[count]);
           // displayButtons(listAns[count]);
            displayQuestion(quest[count]);
            displayButtons(listAns[count]);
            
            if (clickedButton == true){
                console.log("did you cick if", clickedButton);
                
                //displayQuestion(quest[count]);
                //displayButtons(listAns[count]);
                count = increment();
                clickedButton = false;

            }

            
            count ++;
            clickedButton = false;


    };



    console.log("count", count);
    console.log("out of while");


  
}


function quizStart(){
   
    startDisEl.style.visibility = "hidden";
    questtionEl.style.visibility = "visible";
    var score = startTimer();
    var i1 = 0
    quizThrough();

    
};



function startgame(){
    quizStart();

};
//When star is pressed it start the game 
startEl.addEventListener("click",startgame);


//displayStart();