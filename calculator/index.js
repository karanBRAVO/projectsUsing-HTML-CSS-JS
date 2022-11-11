console.log("*** Calculator ***");

let container = document.getElementById("container");

let num1 = '';
let num2 = '';
let opr = "+";

let answer = 0;

let factorial = 1;
let i;

function clear_all() {
    container.innerText = '';
    answer = 0;
    num1 = '';
    num2 = '';
    factorial = 1;
}

function remove_last() {
    container.innerText = container.innerText.replace(container.innerText.slice(-1), '');
}

function enter_value(value) {
    if (container.innerText.charAt(0) === "=") {
       clear_all();
    }
    container.innerText = container.innerText + value;
    
    if (container.innerText.indexOf(opr) === -1) {
        num1 = container.innerText;
    }
    else {
        num1 = container.innerText.slice(0, container.innerText.indexOf(opr));
        num2 = container.innerText.slice((container.innerText.indexOf(opr)+1)); 
    }
}

function enter_decimal() {
    if (container.innerText.charAt(0) === "=") {
        clear_all();
    }
    if (container.innerText.endsWith(".")) {
        container.innerText = container.innerText.replace(".", '.');
    }
    else {
        container.innerText = container.innerText + ".";
    }
}

function enter_operator(operator) {
    opr = operator;

    if (container.innerText.charAt(0) === "=") {
        container.innerText = container.innerText.replace("=", '');
    }

    if (container.innerText.endsWith("/")) {
        container.innerText = container.innerText.replace("/", opr);
    }
    else if (container.innerText.endsWith("*")) {
        container.innerText = container.innerText.replace("*", opr);
    }
    else if (container.innerText.endsWith("+")) {
        container.innerText = container.innerText.replace("+", opr);
    }
    else if (container.innerText.endsWith("-")) {
        container.innerText = container.innerText.replace("-", opr);
    }
    else if (container.innerText.endsWith("^")) {
        container.innerText = container.innerText.replace("^", opr);
    }
    else if (container.innerText.endsWith("!")) {
        container.innerText = container.innerText.replace("!", opr);
    }
    else if (container.innerText.endsWith("√")) {
        container.innerText = container.innerText.replace("√", opr);
    }
    else {
        container.innerText = container.innerText + opr;
    }
}

function calc_factorial(n) {
    for (i=1; i<=n; i++) {
        factorial = factorial * i; 
    }
    return factorial
}

function evaluate() {
    if (opr === "/") {
        answer = Number(num1) / Number(num2);
    }
    else if (opr === "*") {
        answer = Number(num1) * Number(num2);
    }
    else if (opr === "+") {
        answer = Number(num1) + Number(num2);
    }
    else if (opr === "-") {
        answer = Number(num1) - Number(num2);
    }
    else if (opr === "^") {
        answer = Number(num1) ** Number(num2);
    }
    else if (opr === "!") {
        answer = calc_factorial(Number(num1));
    }
    else if (opr === "√") {
        if (num1 !== '') {
            answer = Number(num1) * (Number(num2) ** 0.5);
        }
        else {
            answer = Number(num2) ** 0.5;
        }
    }
}

function show_answer() {
    if (container.innerText.startsWith("=")){
        num2 = '';
        num1 = '';
    }
    evaluate()
    container.innerText = ("=" + answer);
}