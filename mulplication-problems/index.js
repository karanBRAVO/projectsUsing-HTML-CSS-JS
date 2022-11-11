console.log("Multiplication Problems");

const question = document.getElementById("question");
const user_answer = document.getElementById("user_answer");
const msg = document.getElementById("msg");
const user_score = document.getElementById("user_score");
const user_timeTaken = document.getElementById("user_timeTaken");

let score = 0;
let actual_answer = undefined;
let time_taken = undefined;
let actual_time_taken = undefined;

let initial_hrs = undefined;
let initial_min = undefined;
let initial_sec = undefined;

let final_hrs = undefined;
let final_min = undefined;
let final_sec = undefined;

let hrs = undefined;
let min = undefined;
let sec = undefined;

// starting question
getQuestion();
// starting score
showScore();

// removes the message from screen
user_answer.onfocus = function clearMsg() {
    msg.innerHTML = '';
    user_timeTaken.innerHTML = '';
}

// runs on giving correct answer
function getQuestion() {
    // get time when question is shown
    const now_time = new Date();

    if (now_time.getHours() < 10) {
        initial_hrs = '0' + now_time.getHours();
    }
    else {
        initial_hrs = now_time.getHours();
    }
    if (now_time.getMinutes() < 10) {
        initial_min = '0' + now_time.getMinutes();
    }
    else {
        initial_min = now_time.getMinutes();
    }
    if (now_time.getSeconds() < 10) {
        initial_sec = '0' + now_time.getSeconds();
    }
    else {
        initial_sec = now_time.getSeconds();
    }

    let num1 = Math.trunc(Math.random() * 100);
    let num2 = Math.trunc(Math.random() * 100);

    actual_answer = num1 * num2;
    question.innerHTML = `What is: ${num1}x${num2}?`;
}

// show score
function showScore() {
    user_score.innerHTML = `Score: ${score}`;
}

// runs when submit button is clicked
function checkAnswer() {
    // get time when answer is submitted
    const now_time = new Date();
    if (now_time.getHours() < 10) {
        final_hrs = '0' + now_time.getHours();
    }
    else {
        final_hrs = now_time.getHours();
    }
    if (now_time.getMinutes() < 10) {
        final_min = '0' + now_time.getMinutes();
    }
    else {
        final_min = now_time.getMinutes();
    }
    if (now_time.getSeconds() < 10) {
        final_sec = '0' + now_time.getSeconds();
    }
    else {
        final_sec = now_time.getSeconds();
    }

    time_taken = String(Number(String(final_hrs) + String(final_min) + String(final_sec)) - Number(String(initial_hrs) + String(initial_min) + String(initial_sec)));

    // convert time taken to seconds
    if (time_taken.length <= 2) {
        actual_time_taken = time_taken;
    }
    else if (time_taken.length == 3) {
        min = time_taken.slice(0, 1);
        sec = time_taken.slice(1, 3);
        actual_time_taken = (min * 60) + Number(sec);
    }
    else if (time_taken.length == 4) {
        min = time_taken.slice(0, 2);
        sec = time_taken.slice(2, 4);
        actual_time_taken = (min * 60) + Number(sec);
    }
    else if (time_taken.length == 5) {
        hrs = time_taken.slice(0, 1);
        min = time_taken.slice(1, 3);
        sec = time_taken.slice(3, 5);
        actual_time_taken = (hrs * 60 * 60) + (min * 60) + Number(sec);
    }
    else {
        hrs = time_taken.slice(0, 2);
        min = time_taken.slice(2, 4);
        sec = time_taken.slice(4, 6);
        actual_time_taken = (hrs * 60 * 60) + (min * 60) + Number(sec);
    }

    // checking answer
    if (user_answer.value == actual_answer) {
        score++;
        getQuestion();
        showScore();
        msg.innerHTML = `Good :)`;
        user_timeTaken.innerHTML = ` You took ${actual_time_taken} seconds`;
        user_answer.value = '';
    }
    else {
        score--;
        showScore();
        msg.innerHTML = `Try again :(`;
        user_answer.value = '';
    }
}
