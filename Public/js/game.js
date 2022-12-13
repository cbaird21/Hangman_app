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

const wordData = [
  {
    word: "cowboy hat",
  },
  {
    word: "yeehaw",
  },
  {
    word: "howdy",
  },
];



// weavy messenger js from documentation; needs backend to function
const weavy = new Weavy({
  url: "{WEAVY_BACKEND_URL}",
  tokenFactory: async () => "{ACCESS_TOKEN}",
});

let messengerButton = document.getElementById("messenger-button");
let messengerContainer = document.getElementById("messenger-container");

let messenger = weavy.app({
  type: "messenger",
  container: messengerContainer,
  open: false,
  badge: true,
});

// Let the button toggle the messenger on click
messengerButton.addEventListener("click", () => messenger.toggle());

// Add/remove classes on the container when the messenger is opened or closed
messenger.on("app-open", () => messengerContainer.classList.add("open"));
messenger.on("app-close", () => messengerContainer.classList.remove("open"));

// Update your UI with badge count from the messenger
messenger.on("badge", (e, badge) => {
  messengerButton.innerText = "Unread conversations: " + badge.count;
});