console.log("Dictionary app");

const userInputBox = document.getElementById("userInputBox");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener('click', () => {
    let givenWord = userInputBox.value;
    console.log(givenWord);
});

let text = "Type-your-word-here...";
let wordIndex = 0;
let word = "";
function mvFwdPlaceholder() {
    if (wordIndex >= text.length) {
        word = "";
        wordIndex = 0;
    }
    word = word + text[wordIndex];
    userInputBox.placeholder = word;
    wordIndex++;
}
setInterval(mvFwdPlaceholder, 200);