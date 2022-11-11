console.log("Real Time-letter counter");

const inputField = document.getElementById("inputField");
const typedLetters = document.getElementById("typedLetters");
const remainingLetters = document.getElementById("remainingLetters");

function realTimeLetterCount() {
    if (inputField.value.length >= 100) {
        inputField.value = inputField.value.slice(0, 100);
    }
    typedLetters.innerHTML = `Typed: ${inputField.value.length}`;
    remainingLetters.innerHTML = `Remaining: ${100-inputField.value.length}`;
}

setInterval(realTimeLetterCount, (1/6));
