var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var wins = 0;
var losses = 0;
var dashes = [];
var hangmanPic = 0;
var hangmanImg = $("#hangman-pic");

const wordData = [
  {
    word: "cowboy-hat",
  },
  {
    word: "yeehaw",
  },
  {
    word: "howdy",
  },
];

function startGame() {
  populateLetterButtons();
}

// creates cards from the letters in the alphabet array
function populateLetterButtons() {
  //populate buttons inside a table
  // tr = table row
  let newTr = $("<tr>");
  // new row created every 7 letters
  // call data-name(alphabet letter)
  for (let i = 0; i < alphabet.length; i++) {
    if (i === 0 || i % 7 === 0) {
      newTr = $("<tr>");
      newTr.append(`
        <td>
          <div class="card rounded mx-auto letters" data-name="${
            alphabet[i]
          }" data-state="false">
            <div class="card-body" >
              <h5 class="text-center">${alphabet[i].toUpperCase()}</h5>
            </div>
          </div>
        </td>
        `);
    } else {
      newTr.append(`
        <td>
          <div class="card rounded mx-auto letters" data-name="${
            alphabet[i]
          }" data-state="false">
            <div class="card-body" >
              <h5 class="text-center">${alphabet[i].toUpperCase()}</h5>
            </div>
          </div>
        </td>
        `);
    }
    $("#letterCardsInATable").append(newTr);
  }
}

function guessALetter(guess) {
  guessedLetters.push(guess);

  // $('#lettersGuessed').text(guessedLetters.join(', '));
  if (lettersInWord.includes(guess)) {
    lettersInWord.forEach((letter, index) => {
      if (letter === guess) {
        lettersAndBlanks[index] = guess;
      }
    });
    // console.log(lettersInWord);
    // console.log(lettersAndBlanks);
    $("#current-word").text(lettersAndBlanks.join(" "));
  } else {
    guessesLeft--;
    hangmanPic++;
    $("#guessesLeft").text(guessesLeft);
    renderFrog();
  }
  // console.log(guess);
}

// this function renders frog based on wrong guesses var hangmanPic
function renderFrog() {
  if (hangmanPic === 1) {
    hangmanImg.attr("src", "/assets/kermit3.png")
  } else if (hangmanPic === 2) {
    hangmanImg.attr("src", "/assets/kermit4.png")
  } else if (hangmanPic === 3) {
    hangmanImg.attr("src", "/assets/kermit5.png")
  } else if (hangmanPic === 4) {
    hangmanImg.attr("src", "/assets/kermit6.png")
  } else if (hangmanPic === 5) {
    hangmanImg.attr("src", "/assets/kermit7.png")
  } else if (hangmanPic === 6) {
    hangmanImg.attr("src", "/assets/kermit8.png")
  } else if (hangmanPic === 7) {
    hangmanImg.attr("src", "/assets/kermit.png")         
  } else if (hangmanPic === 0) {
    hangmanImg.attr("src", "/assets/haticon.png")
  }
};  

// function addDash() {
//   for (let index = 0; index < lettersAndBlanks[0].length; index++) {
//     const dash = "_";
//     var noDash = " ";
//     if(lettersAndBlanks[0][index] === noDash) {
//       dashes.push("-");
//     } else if (lettersAndBlanks[0][index] !== noDash) {
//       dashes.push(dash)
//     }
//   }
//   for (i = 0; i < dashes.length; i++) {
//     $("#current-word").append(dashes[i]);
//   }
// }

function checkWin() {
  const dashCheck = lettersAndBlanks.indexOf("_");

  if (dashCheck === -1) {
    wins++
    // add high score to db
    console.log("win");
    $("#wins").text(wins);
    $("<h1>")
  }
}

function checkLose() {
  if (guessesLeft === 0) {
    wins = 0;

  }
}

function reset() {
  lettersInWord = [];
  lettersAndBlanks = [];
  hangmanPic = 0;
  guessesLeft = 7;
  guessedLetters = [];
  // input random word
  // randomWord = snapshot.val()[Math.floor(Math.random() * 672)].word; //reset HAS TO live inside because of this line
  $.ajax({
    url: "/api/game/word",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    let randomWord = response.word;
    lettersInWord = randomWord.split("");
    lettersInWord.forEach((letter) => {
      // lettersAndBlanks.push("_");
      if ((letter) === "-") {
        lettersAndBlanks.push("-")
      } else {
        lettersAndBlanks.push("_")
      }
    });
    // // $("#losses").text(losses);
    // // $("#guessesLeft").text(guessesLeft);
    // // TODO add hint to html
    $("#current-word").text(lettersAndBlanks.join(" "));
    $("#current-word").css("display", "block");
    $("#letterCardsInATable").empty();
    populateLetterButtons();
  })

}

$("#letterCardsInATable").on("click", ".letters", function () {
  //change the color when card is clicked
  let that = this;
  $(that).attr("data-state", true);
  if ($(that).data("state")) {
    $(that).addClass("bg-secondary");
  }
  let guess = $(that).data("name");
  // guessedLetters is defined in reset()
  if (!guessedLetters.includes(guess)) {
    guessALetter(guess);
    // setTimeout(roundState, 50);
  }
  checkWin();
});

// weavy messenger js from documentation; needs backend to function
// const weavy = new Weavy({
//   url: "{WEAVY_BACKEND_URL}",
//   tokenFactory: async () => "{ACCESS_TOKEN}",
// });

// let messengerButton = document.getElementById("messenger-button");
// let messengerContainer = document.getElementById("messenger-container");

// let messenger = weavy.app({
//   type: "messenger",
//   container: messengerContainer,
//   open: false,
//   badge: true,
// });

// // Let the button toggle the messenger on click
// messengerButton.addEventListener("click", () => messenger.toggle());

// // Add/remove classes on the container when the messenger is opened or closed
// messenger.on("app-open", () => messengerContainer.classList.add("open"));
// messenger.on("app-close", () => messengerContainer.classList.remove("open"));

// // Update your UI with badge count from the messenger
// messenger.on("badge", (e, badge) => {
//   messengerButton.innerText = "Unread conversations: " + badge.count;
// });

$(".start-btn").on("click", reset);
$(".reset-btn").on("click", reset);


// pull word/phrase data from db
// have user choose between words and phrases
// add you win/lose feedback
