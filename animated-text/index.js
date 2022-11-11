console.log("Animated-Text");

const automatedText = document.getElementById("automatedText");

const careers = ["IAS", "IPS", "Web Developer", "Data Scientist", "Freelancer", "YouTuber", "Android Developer", "Game Developer", "Artist", "Lawyer", "Doctor"];

let careersIndex = 0;
let careerIndex = 0;

function updateText() {
    automatedText.innerHTML = `Careers: ${careers[careersIndex].slice(0, careerIndex)}`;

    if (careerIndex > careers[careersIndex].length) {
        careerIndex = 0;
        careersIndex++;
    }

    if (careersIndex == careers.length) {
        careersIndex = 0;
    }

    careerIndex++;
}

setInterval(updateText, 400);
