
var hideQuiz = function() {
    console.log("hiding quiz...");
    var quizEl = document.querySelector(".quiz");
    quizEl.style.display = "none";
}

var showQuiz = function() {
    console.log("showing quiz...");
    hideStartPage();
    var quizEl = document.querySelector(".quiz");
    quizEl.style.display = "flex";
}

var hideStartPage = function() {
    console.log("hiding start page...");
    var startPageEl = document.querySelector(".start-page");
    startPageEl.style.display = "none";

}