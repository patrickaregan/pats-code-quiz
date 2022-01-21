
// Object to hold game related data
var gameState = {
    questionIndex: 0
}

var hideQuiz = function() {
    console.log("hiding quiz...");
    var question01 = document.querySelector(".question01");
    var question02 = document.querySelector(".question02");
    question01.style.display = "none";
    question02.style.display = "none";
}

var hideStartPage = function() {
    console.log("hiding start page...");
    var startPageEl = document.querySelector(".start-page");
    startPageEl.style.display = "none";

}

var startQuiz = function() {
    console.log("starting quiz...");
    hideStartPage();
    var question01 = document.querySelector(".question01");
    var question02 = document.querySelector(".question02");
    question01.style.display = "flex";
    gameState.questionIndex = 1;
    console.log("GameState.QuestionIndex: " + gameState.questionIndex);
}



/* High Scores */

var goBackToQuiz = function() {
    window.location.href = "./index.html";
}