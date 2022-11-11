console.log('Guess the number game.');

const userInp = document.getElementById("userInp");
const para = document.getElementById("para");
const button = document.getElementById("submitButton");

// variables
let actual_number = undefined;  // actual number what user has to guess
let guessCount = 0;  // stores the number of times user guessed

// starting random number
getActualNum();

// button click event
button.addEventListener('click', check);

// functions
userInp.onfocus = function removePlaceholder() {
    userInp.placeholder = '';
    userInp.style.boxShadow = 'inset 0px 0px 6px grey';
};

userInp.onblur = function getPlaceholder() {
    userInp.placeholder = 'what do you guessed it to be';
    userInp.style.boxShadow = 'none';
};

function getActualNum() {
    actual_number = Math.trunc(Math.random() * 1000);
}

function check() {
    let vals = String(userInp.value);

    if (vals.length != 0) {
        guessCount++;

        if (vals == actual_number) {
            changeInnerText(`Good Job | GuessCount: ${guessCount} | Click the heading to start new game.`);
        }
        else if (vals < actual_number) {
            changeInnerText('Actual number is greater than your guessed number')
        }
        else {
            changeInnerText('Actual number is smaller than your guessed number')
        }
    }
    else {
        changeInnerText(`please enter a number in range [0, 1000]`);
    }
    userInp.value = '';
}

function changeInnerText(text) {
    para.innerText = text;
}