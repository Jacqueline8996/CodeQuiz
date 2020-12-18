//getting elements //
var highscoreEL = document.querySelector(".highscore");
var timerEL = document.querySelector(".time");
var questtionEl = document.querySelector(".question");
var startTime = 100


//timer for quiz

//start timer 
var timeInterval = setInterval(function() {
    timerEl.textContent = "Score:" + timeLeft ;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "";
      
      clearscore(timeInterval);
    }

  }, 1000);