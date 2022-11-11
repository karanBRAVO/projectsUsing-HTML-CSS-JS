console.log('Random Password Generator');

const generateButton = document.getElementById('generateButton');
const password = document.getElementById("password");
const askForN = document.getElementById("askForN");

const charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '?', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '~', ';', '-', '+'];

let n = 8;

askForN.addEventListener('click', function askForNumberOfDigits() {
    n = prompt('Set the digits in Random Password', '8');
    if (n < 8) {
        alert('8 or more digits in password are more safe');
        askForNumberOfDigits();
    }
    else if (n > 50) {
        alert('Maximum length is 50, contact the developer to change it.');
        askForNumberOfDigits();
    }
});

generateButton.addEventListener('click', function generate() {
    let new_password = null;

    for (let i = 0; i < n; i++) {
        let randIndex = Math.trunc(Math.random() * 100);

        if (randIndex > 50) {
            randIndex = 100 - randIndex;
        }
        else if (randIndex === 50) {
            randIndex = 50 - (Math.trunc(Math.random() * 10) + 1);
        }

        if (new_password == null) {
            new_password = charArr[randIndex];
        }
        else {
            new_password = new_password + charArr[randIndex];
        }
    }

    password.innerHTML = `${new_password}`;
});