# patrickaregan.github.io/pats-code-quiz
Pat's Code Quiz

## Description
- This project is a coding quiz built with HTML, CSS and JavaScript.
- When the user starts the quiz the first question is presented and a timer starts with 75 seconds.
- The timer ticks down every second and when the user gets a question wrong it subtracts 10 seconds.
- There are five questions and each is worth 20 points.
- When the users reaches the last question their points are added up and they can enter their initials and submit their score to the High Scores, which are saved in local storage.
- If the timer gets to zero before the last question the quiz is over and the user just has to accept whatever points they have at that time and they can submit their initials.
- It was great making this code quiz because I may have to take one in an interview in the future. Not all of the questions in my quiz are related to coding but the point is to learn about HTML/CSS/JavaScript in the process of making the quiz. Also to be prepared for a timed coding quiz if I ever have to take one for a job.
- In coding bootcamp I learned two things that helped me complete this project:
- The first was about local storage and saving objects to it using JSON.stringify. This is how I saved the high scores. I created a high score object with two properties, initials and score, and stored those in a high scores (plural) array and then stored that array to local storage. I also had to read the local storage and get the high scors back into an array so that I could append the next set of initials and score to the high scores.
- The second thing I learned about was setInterval. This javascript function lets you run a function every second, or whaterver interval you choose. This is how I implemented the timer. The function it calls decrements the timer counter, updates the time in the timer HTML element and when the timer counter reaches zero it calls the gameOver function to end the game by moving to the all done screen so the user can enter initials.

## Screenshot
![Pat's Coding Quiz Challenge](assets/images/screenshot.png)


## Link
[https://patrickaregan.github.io/pats-coding-quiz/](https://patrickaregan.github.io/pats-coding-quiz/)


