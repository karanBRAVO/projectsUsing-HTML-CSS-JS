console.log("<--- DIGITAL CLOCK -->");

const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const msec = document.getElementById("msec");
const dated = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const timeConvention = document.getElementById("timeConvention");

function UpdateWindow() {
    let date = new Date();

    // hours
    if (date.getHours() < 10) {
        hrs.innerHTML = "0" + date.getHours();
    }
    else {
        hrs.innerHTML = date.getHours();
    }
    // minutes
    if (date.getMinutes() < 10) {
        min.innerHTML = "0" + date.getMinutes();
    }
    else {
        min.innerHTML = date.getMinutes();
    }
    // seconds
    if (date.getSeconds() < 10) {
        sec.innerHTML = "0" + date.getSeconds();
    }
    else {
        sec.innerHTML = date.getSeconds();
    }
    // milliseconds
    msec.innerHTML = date.getMilliseconds();

    // am and pm
    if (date.getHours() < 12) {
        timeConvention.innerText = 'AM';
    }
    else {
        timeConvention.innerText = 'PM';
    }

    // date
    if (date.getDate() < 10) {
        dated.innerText = "0" + date.getDate();
    }
    else {
        dated.innerText = date.getDate();
    }
    // month
    if (date.getMonth() < 9) {
        month.innerText = "0" + (Number(date.getMonth()) + 1);
    }
    else {
        month.innerText = (Number(date.getMonth()) + 1);
    }
    // year 
    year.innerText = date.getFullYear();
}

setInterval(UpdateWindow, 1);