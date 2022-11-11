console.log("Sum of N inputs");

alert("Minus(-) will subtract number entered from the Till now sum")

const outputBox = document.getElementById("outputBox");
const userInput = document.getElementById("userInput");
const sumIcon = document.getElementById("sum");
const minusIcon = document.getElementById("minus");
const showHis = document.getElementById("showHis");

let sum = 0;

sumIcon.addEventListener('click', findSum);
function findSum() {
    if (userInput.innerHTML.length > 0) {
        showHis.style.display = 'block';
        showHis.innerHTML = showHis.innerHTML + (userInput.innerHTML + '+');
    }
    sum = sum + Number(userInput.innerHTML);
    outputBox.innerText = `${sum}`;
    clearAll();
}

minusIcon.addEventListener('click', findDif);
function findDif() {
    if (userInput.innerHTML.length > 0) {
        showHis.style.display = 'block';
        showHis.innerHTML = showHis.innerHTML + ('(-' + userInput.innerHTML + ')+');
    }
    sum = sum - Number(userInput.innerHTML);
    outputBox.innerHTML = `${sum}`;
    clearAll();
}

function addText(text) {
    if (userInput.innerHTML.length > 0) {
        userInput.innerHTML = userInput.innerHTML + text;
    }
    else {
        userInput.innerText = text;
    }
}

function addTwoZero() {
    userInput.innerHTML = userInput.innerHTML + '00';
}

function clearAll() {
    userInput.innerHTML = '';
}

function del() {
    if (userInput.innerHTML.length > 0) {
        userInput.innerHTML = `${userInput.innerHTML.slice(0, -1)}`;
    }
}