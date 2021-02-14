var clearElem = document.querySelector("#clear-score");
var tableElem = document.querySelector(".HighscoreTable");
var rowElem = document.querySelector(".userInfoRow");

jsarray = JSON.parse(localStorage.getItem("quizTaker"));



function displaySave(){

    let saveUser = JSON.parse(localStorage.getItem("testTaker"));
    // var saveIndex = jsarray.length - 1

    

    if (saveUser != null && saveUser.length > 0){

        for (i = 0; i < saveUser.length ; i++){

            var names = saveUser[i][0];
            var score = saveUser[i][1];
            var num = i +1;

            rowElem.innerHTML = (num)+"."+ "  Name:   "+ names +"_______________ "+ "Score:    "+ score ;
            tableElem.appendChild(rowElem);
        }

        

    }else{

        clearUser = [];
        localStorage.setItem("testTaker", JSON.stringify(clearUser));
    }
}

function clearUser(){

    
    localStorage.setItem("testTaker", JSON.stringify(" "));

}

displaySave();
clearElem.addEventListener("click",clearUser);