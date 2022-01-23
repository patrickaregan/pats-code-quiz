# patrickaregan.github.io/pats-code-quiz
Pat's Code Quiz

## Description
- This project is a coding quiz built with HTML, CSS and JavaScript.
- When the user starts the quiz the first question it presented and a timer starts with 75 seconds.
- The timer ticks down every second and when the user gets a question wrong it subtracts 10 seconds.
- There are five questions and each is worth 20 points.
- When the users reaches the last question their points are added up and they can enter their initials and submit their score to the High Scores, which are saved in local storage.
- If the timer gets to zero before the last question the quiz is over and the user just has to accept whatever points they have at that time.
- It was great making this code quiz because I could have to take one of these in a coding interview in the future. Not all of the questions in my quiz are related to coding but the point is to learn about HTML/CSS/JavaScript in the process of making the quiz. Also to be prepared for a timed coding quiz if I ever have to take one for a job.
- In coding bootcamp I learned three things that helped me complete this project.
- The first is from CSS where you can make a div or section invisible by setting display to none. This is different from setting visibility to false becase the real estate on the page is made available when you set disply to none and that is what I needed to show the different questions at different times.
- The second thing I learned about was local storage and saving objects to it using JSON.stringify. This was used to save the high scores.
- The third thing I learned about was setInterval. This javascript function lets you run a function every second, or whaterver interval you choose. This is how I implemented the timer. The function it calls decrements the timer counter, updates the time in the timer HTML element and when the timer counter reaches zero it calls the gameOver function to end the game by moving to the all done screen so the user can enter initials.

## Screenshot
![Pat's Coding Quiz Challenge](assets/images/screenshot.png)


## Link
[https://patrickaregan.github.io/pats-coding-quiz/](https://patrickaregan.github.io/pats-coding-quiz/)


