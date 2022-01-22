// Object to hold game state
var gameState = {
    questionIndex: 0,
    correctAnswers: 0,
    question01Result: "You got the previous question WRONG! Try harder on this one.",
    question02Result: "You got the previous question WRONG! Try harder on this one.",
    question03Result: "You got the previous question WRONG! Try harder on this one.",
    question04Result: "You got the previous question WRONG! Try harder on this one.",
    question05Result: "You got the previous question WRONG!",
    questionValue: 20,
    timeLeft: 75,
    timerInterval: 1000
}

var timerEl = document.querySelector("#timer");
timerEl.innerHTML = "Time: " + gameState.timeLeft;

// Timer
var timeReview = function() {
    //console.log("Time remaining: " + gameState.timeLeft);
    gameState.timeLeft--;
    timerEl.innerHTML = "Time: " + gameState.timeLeft;
    if (gameState.timeLeft < 1) {
        gameOver();
    }
}

var timerIntervalID = "";


// variable array to hold high scores
var highScores = [];

// function to load high scores
var loadHighScores = function() {
    highScores = localStorage.getItem("high-scores");
    
    if (!highScores) {
        highScores = [];
        return false;
    }

    highScores = JSON.parse(highScores);

}

// Functions to show or hide the sections
var hideQuiz = function() {
    //console.log("hiding quiz...");
    var question01 = document.querySelector(".question01");
    var question02 = document.querySelector(".question02");
    var question03 = document.querySelector(".question03");
    var question04 = document.querySelector(".question04");
    var question05 = document.querySelector(".question05");
    var allDone = document.querySelector(".all-done");
    question01.style.display = "none";
    question02.style.display = "none";
    question03.style.display = "none";
    question04.style.display = "none";
    question05.style.display = "none";
    allDone.style.display = "none";
}

var hideStartPage = function() {
    //console.log("hiding start page...");
    var startPageEl = document.querySelector(".start-page");
    startPageEl.style.display = "none";
}

var startQuiz = function() {
    //console.log("starting quiz...");
    hideStartPage();
    var question01 = document.querySelector(".question01");
    question01.style.display = "flex";
    gameState.questionIndex = 1;
    console.log("You are on question: " + gameState.questionIndex);
    timerIntervalID = setInterval(timeReview, gameState.timerInterval);
}


// functions to handle the answers to the questions
var handleQuestion01 = function(event) {
    // Check the answer
    var answer = event.target.dataset.answer;
    if (answer == 3) {
        console.log("You got the answer correct!");
        gameState.correctAnswers++;
        gameState.question01Result = "You got the previous question CORRECT! Keep going.";
    } else {
        console.log("You got the answer wrong!");
    }
    // Now move to the next question
    // advance game state to next question
    gameState.questionIndex++; 
    // update the result element
    var question01ResultEl = document.querySelector("#question01Result");
    question01ResultEl.innerText = gameState.question01Result;
    // hide the previous question and show the next one
    var question01 = document.querySelector(".question01");
    var question02 = document.querySelector(".question02");
    question01.style.display = "none";
    question02.style.display = "flex";
    // log the number of correct answers so far
    console.log("Correct answers so far: " + gameState.correctAnswers);
}

var handleQuestion02 = function(event) {
    // Log what question we are on
    console.log("You are on question: " + gameState.questionIndex);
    // Check the answer
    var answer = event.target.dataset.answer;
    if (answer == 3) {
        console.log("You got the answer correct!");
        gameState.correctAnswers++;
        gameState.question02Result = "You got the previous question CORRECT! Keep going.";
    } else {
        console.log("You got the answer wrong!");
    }
    // Now move to the next question
    // advance game state to next question
    gameState.questionIndex++; 
    // update the result element
    var question02ResultEl = document.querySelector("#question02Result");
    question02ResultEl.innerText = gameState.question02Result;
    // hide the previous question and show the next one
    var question02 = document.querySelector(".question02");
    var question03 = document.querySelector(".question03");
    question02.style.display = "none";
    question03.style.display = "flex";
    // log the number of correct answers so far
    console.log("Correct answers so far: " + gameState.correctAnswers);
}

var handleQuestion03 = function(event) {
    // Log what question we are on
    console.log("You are on question: " + gameState.questionIndex);
    // Check the answer
    var answer = event.target.dataset.answer;
    if (answer == 2) {
        console.log("You got the answer correct!");
        gameState.correctAnswers++;
        gameState.question03Result = "You got the previous question CORRECT! Keep going.";
    } else {
        console.log("You got the answer wrong!");
    }
    // Now move to the next question
    // advance game state to next question
    gameState.questionIndex++; 
    // update the result element
    var question03ResultEl = document.querySelector("#question03Result");
    question03ResultEl.innerText = gameState.question03Result;
    // hide the previous question and show the next one
    var question03 = document.querySelector(".question03");
    var question04 = document.querySelector(".question04");
    question03.style.display = "none";
    question04.style.display = "flex";
    // log the number of correct answers so far
    console.log("Correct answers so far: " + gameState.correctAnswers);
}

var handleQuestion04 = function(event) {
    // Log what question we are on
    console.log("You are on question: " + gameState.questionIndex);
    // Check the answer
    var answer = event.target.dataset.answer;
    if (answer == 4) {
        console.log("You got the answer correct!");
        gameState.correctAnswers++;
        gameState.question04Result = "You got the previous question CORRECT! Keep going.";
    } else {
        console.log("You got the answer wrong!");
    }
    // Now move to the next question
    // advance game state to next question
    gameState.questionIndex++; 
    // update the result element
    var question04ResultEl = document.querySelector("#question04Result");
    question04ResultEl.innerText = gameState.question04Result;
    // hide the previous question and show the next one
    var question04 = document.querySelector(".question04");
    var question05 = document.querySelector(".question05");
    question04.style.display = "none";
    question05.style.display = "flex";
    // log the number of correct answers so far
    console.log("Correct answers so far: " + gameState.correctAnswers);
}

var handleQuestion05 = function(event) {
    // Log what question we are on
    console.log("You are on question: " + gameState.questionIndex);
    // Check the answer
    var answer = event.target.dataset.answer;
    if (answer == 1) {
        console.log("You got the answer correct!");
        gameState.correctAnswers++;
        gameState.question05Result = "You got the previous question CORRECT!";
    } else {
        console.log("You got the answer wrong!");
    }
    // Now move to the next question
    // advance game state to next question
    gameState.questionIndex++; 
    // update the result element
    var question05ResultEl = document.querySelector("#question05Result");
    question05ResultEl.innerText = gameState.question05Result;
    // hide the previous question and show the next one
    var question05 = document.querySelector(".question05");
    var allDone = document.querySelector(".all-done");
    question05.style.display = "none";
    allDone.style.display = "flex";
    // log the number of correct answers so far
    console.log("Correct answers so far: " + gameState.correctAnswers);
    // Show the final score
    var finalScore = gameState.correctAnswers * gameState.questionValue;
    var finalScoreEl = document.querySelector(".final-score");
    finalScoreEl.innerText = "Your final score is " + finalScore + ".";
    // Clear the timer interval
    clearInterval(timerIntervalID);
}
// end functions to handle the answers to the questions

// function for handling the form
var handleFormSubmit = function() {
    var initialsEl = document.querySelector("#initials");
    var initials = initialsEl.value;
    var finalScore = gameState.correctAnswers * gameState.questionValue;
    //console.log(initials + " - " + finalScore);
    if (!initialsEl.value) {
        window.alert("Please enter your initials!");
    } else {
        var highScore = {
            initials: initialsEl.value,
            score: finalScore
        }
        // add score to end of array
        highScores.push(highScore);
        // Sort the array before adding to local storage
        highScores.sort(function (a, b) {
            return a.score - b.score;
        })
        // Reverse the array before adding to local storage so that the highest values are on top.
        highScores.reverse();
        // Add to local storage
        localStorage.setItem("high-scores", JSON.stringify(highScores));
        window.location.href = "./high-scores.html"
    }
}

// function for game over due to running out of time.
var gameOver = function() {
    // Clear the timer interval
    clearInterval(timerIntervalID);
    // hide everything
    hideQuiz()
    hideStartPage();
    // show the all done section
    var allDone = document.querySelector(".all-done");
    allDone.style.display = "flex";
    // Show the final score
    var finalScore = gameState.correctAnswers * gameState.questionValue;
    var finalScoreEl = document.querySelector(".final-score");
    finalScoreEl.innerText = "Your final score is " + finalScore + ".";
    // Clear the timer interval
    clearInterval(timerIntervalID);


}


// Add event listeners
// questions
var question01El = document.querySelector(".question01");
var question02El = document.querySelector(".question02");
var question03El = document.querySelector(".question03");
var question04El = document.querySelector(".question04");
var question05El = document.querySelector(".question05");
question01El.addEventListener("click", handleQuestion01);
question02El.addEventListener("click", handleQuestion02);
question03El.addEventListener("click", handleQuestion03);
question04El.addEventListener("click", handleQuestion04);
question05El.addEventListener("click", handleQuestion05);

loadHighScores();