var score = 0;
var scores = [];
var highScores = document.getElementById("highScores");
var startBtn = document.getElementById("start-button");
// created new element
var olCreate = document.createElement("ol");
var resetBtn = document.getElementById("resetBtn");
var resetEl = document.getElementById("resetBox");
// hides reset button on page
resetEl.style.visibility = "hidden";

// timer 
var timeLeft = 300;
// added event listener for click on function to start quiz and timer
function playGame() {
    // timer that counts down from 75
    var timer = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = "Timer: " + timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = "Timer: " + timeLeft + "second remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "Out of time!";
            // Use clearInterval() to stop the timer
            clearInterval(timer);
        }
        // clearing timer if finished before timer runs out
        if (questionIndex >= questions.length) {
            timerEl.textContent = "Time to spare!";
            clearInterval();
        }
    }, 1000);
};
    // created finish function. what  to say and how to calculate the number of true answers.
    function finish() {
        questionDiv.textContent = "";
        timerEl.textContent = "";

        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "You finished!!";

        questionDiv.appendChild(createH1);

        var createP = document.createElement("p");
        createP.setAttribute("p", "createP");
        createP.textContent =
            "You got " + score + "/" + questions.length + " correct!!";

        questionDiv.appendChild(createP);

        createForm();
    }
    // creating form to fill out for highscores after the game
    function createForm() {
        // creates form element to hold input and submit button
        var createForm = document.createElement("form");
        createForm.setAttribute("id", "create input");

        // create Input element and provide style and attributes
        var createInput = document.createElement("input");
        createInput.setAttribute("id", "createInput");
        createInput.setAttribute("name", "userName");
        createInput.setAttribute("placeholder", "Enter your name...");
        // button to hit after finishing input data
        var createBtn = document.createElement("button");
        createBtn.setAttribute("id", "createBtn");
        createBtn.setAttribute("type", "button");
        createBtn.textContent = "Save your score!";
        // saving content with event listener

        // added event listneer to what the user inputs
        createBtn.addEventListener("click", function (event) {
            event.preventDefault();
            localStorage.setItem("user", "createInput.value");
            console.log(createInput.value);
            highScores.style.visibility = "visible";
            questionDiv.style.visibility = "hidden";
            resetEl.style.visibility = "hidden";
        });

        // appending created elements to the page
        createForm.appendChild(createInput);
        createForm.appendChild(createBtn);
        questionDiv.appendChild(createForm);

        var submitBtn = document.getElementById("createBtn");
        submitBtn.addEventListener("click", function (event) {
            event.preventDefault();
            saveHighScore();
        });
    }
    // still need to create a place to store multiple score to be able to navigate too when clicking high score.array?user.push?
    function saveHighScore() {
        var finalScore = score / questions.length + timeLeft;
        var userName = document.getElementById("createInput").value;
        console.log("Username:" + userName);
        console.log("Score" + finalScore);
        var highScoreObject = {
            initals: userName,
            score: finalScore,
        };
        scores.push(highScoreObject);
        localStorage.setItem("highScores", JSON.stringify(scores));
        viewHighScore();
    }
    // Is this variable needed or how do i reference this data when view high scores is selected on the website.
    // var viewHighScore = document.getElementById("viewHighScore")
    function viewHighScore() {
        highScores.innerHTML = "";
        var localScoresStorage = JSON.parse(localStorage.getItem("highScores")) || [];
        console.log(localScoresStorage);
        for (var i = 0; i < localScoresStorage.length; i++) {
            var scoresDiv = document.createElement("div");
            scoresDiv.textContent = `${localScoresStorage[i].initals}: ${localScoresStorage[i].score} `;
            highScores.appendChild(scoresDiv);
        }
        resetEl.style.visibility = "visible";
    }

    // reset button functions and what to reset everything too!
    resetBtn.addEventListener("click", function () {
        score = 0;
        questionIndex = 0;
        timeLeft = 75;
        highScores.style.visibility = "hidden";
        questionDiv.style.visibility = "visible";
        resetEl.style.visibility = "hidden";
        startQuiz();
    });
