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

const wins = 0;
const losses = 0;
const dashes = [];

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
    $("#guessesLeft").text(guessesLeft);
  }
  // console.log(guess);
}

function addDash() {
  for (let index = 0; index < lettersAndBlanks[0].length; index++) {
    const dash = "_";
    var noDash = " ";
    if(lettersAndBlanks[0][index] === noDash) {
      dashes.push("-");
    } else if (lettersAndBlanks[0][index] !== noDash) {
      dashes.push(dash)
    }
  }
  for (i = 0; i < dashes.length; i++) {
    $("#current-word").append(dashes[i]);
  }
}

function reset() {
  lettersInWord = [];
  lettersAndBlanks = [];
  // input random word
  // randomWord = snapshot.val()[Math.floor(Math.random() * 672)].word; //reset HAS TO live inside because of this line
  randomWord = wordData[0].word;
  guessesLeft = 7;
  guessedLetters = [];
  lettersInWord = randomWord.split("");
  lettersInWord.forEach((letter) => {
    // lettersAndBlanks.push("_");
    if ((letter) === "-") {
      lettersAndBlanks.push("-")
    } else {
      lettersAndBlanks.push("_")
    }
  });
  addDash();
  //generate html
  // TODO add html to game handlebars
  // $("#wins").text(wins);
  // $("#losses").text(losses);
  // $("#guessesLeft").text(guessesLeft);
  $("#current-word").text(lettersAndBlanks.join(" "));
  $("#current-word").css("display", "block");
  $("#letterCardsInATable").empty();

  populateLetterButtons();
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
