// function to go back to main page
var goBackToQuiz = function() {
    window.location.href = "./index.html";
}


// get high scores
var loadHighScores = function() {
    highScores = localStorage.getItem("high-scores");

    if (!highScores) {
        highScores = [];
        return false;
    }

    highScores = JSON.parse(highScores);
    
    var highScoreListEl = document.querySelector("#high-score-list");

    for (var i = 0; i < highScores.length; i++) {
        console.log(highScores[i].initials + " - " + highScores[i].score);
        var listItemEl = document.createElement("li");
        var counter = i + 1;
        listItemEl.innerHTML = counter + ". " + highScores[i].initials + " - " + highScores[i].score;
        highScoreListEl.appendChild(listItemEl);
    }

}

loadHighScores();
