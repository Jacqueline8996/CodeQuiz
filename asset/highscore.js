var clearElem = document.querySelector("#clear-score");
var tableElem = document.querySelector(".HighscoreTable");
var rowElem = document.querySelector(".userInfoRow");
let saveUser = JSON.parse(localStorage.getItem("testTaker"));
jsarray = JSON.parse(localStorage.getItem("quizTaker"));

//displays past saved highscores
function displaySave(){
    if (saveUser != null && saveUser.length > 0){
        for (i = 0; i < saveUser.length ; i++){
            var names = saveUser[i][0];
            var score = saveUser[i][1];
            var num = i +1;
            rowElem.innerHTML = (num)+"."+ "  Name:   "+ names +"_______________ "+ "Score:    "+ score ;
            tableElem.appendChild(rowElem);
        }

    }
    else{

        clearUser = [];
        localStorage.setItem("testTaker", JSON.stringify(clearUser));
        tableElem.innerHTML = " ";
    }
}

//clears the user data
function clearUser(){
    
    localStorage.setItem("testTaker", JSON.stringify([]));
    tableElem.innerHTML = " ";
}

//looks if there is any data in 
if(jsarray == []) {
    tableElem.innerHTML = " ";
}else{
    displaySave();

}

//listen for clear button click
clearElem.addEventListener("click",clearUser);