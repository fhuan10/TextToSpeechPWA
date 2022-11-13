const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new mdc.topAppBar.MDCTopAppBar(topAppBarElement);

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));

let bttn1 = document.querySelector("#moo");
let bttn2 = document.querySelector("#meow");
let bttn3 = document.querySelector("#croak");
let speakerBttn = document.querySelector("#speakerBtn");
let playBttn = document.querySelector("#playBtn");

// When the user clicks on Moo button, the computer will say "moo moo moo"
bttn1.addEventListener("click", (event) => {
  let utterance = new SpeechSynthesisUtterance("Moo moo moo");
  speechSynthesis.speak(utterance);
})

// When the user clicks on Meow button, the computer will say "meow meow meow"
bttn2.addEventListener("click", (event) => {
  let utterance = new SpeechSynthesisUtterance("Meow meow meow");
  speechSynthesis.speak(utterance);
})

// When the user clicks on the Croak button, the button will say "Croak the Frog"
bttn3.addEventListener("click", (event) => {
  let utterance = new SpeechSynthesisUtterance("Croak the Frog");
  speechSynthesis.speak(utterance);
})

// Take the text from the button and say it out loud
speakerBttn.addEventListener("click", (event) => {
  let text = document.querySelector("#speakerBtn").textContent;
  console.log(text);
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
})

// Textfield
const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));

// Get the text from the textfield for the computer to say
playBttn.addEventListener("click", (event) => {
  let userText = document.querySelector(".mdc-text-field__input").value;
  console.log(userText);
  let utterance = new SpeechSynthesisUtterance(userText);
  speechSynthesis.speak(utterance);
})

// Another textField
const textField2 = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field.mdc-text-field--filled'));
