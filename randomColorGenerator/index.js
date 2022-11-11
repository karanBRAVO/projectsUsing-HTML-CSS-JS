console.log('Random color generator');

const bg_color = document.getElementById("color");
const colorName = document.getElementById("colorName");
const reloadSite = document.getElementById('reloadSite');

// starting colors
getNewColors();

// get new colors when clicked
reloadSite.addEventListener('click', getNewColors);

// get colors after some milliseconds
setInterval(getNewColors, 1500);

// function
function getNewColors() {
    let r = Math.trunc(Math.random() * 1000);
    let g = Math.trunc(Math.random() * 1000);
    let b = Math.trunc(Math.random() * 1000);

    if (r > 255 || g > 255 || b > 255) {
        getNewColors();
    }
    if (r <= 255 && g <= 255 && b <= 255) {
        bg_color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        colorName.innerHTML = `rgb(${r}, ${g}, ${b})`;
    }
}
