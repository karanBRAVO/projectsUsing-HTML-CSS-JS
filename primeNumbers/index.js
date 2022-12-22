const myBox = document.getElementById("myBox");
const heading = document.getElementById("heading");

let number = 2;

function checkPrime(num) {
    let isPrime = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = 0;
        }
    }
    if (isPrime === 1) {
        return num;
    }
    else {
        return "|";
    }
}

function primeNumbers() {
    myBox.innerHTML += ` ${checkPrime(number)}`;
    number++;
}

setInterval(primeNumbers, 100);
