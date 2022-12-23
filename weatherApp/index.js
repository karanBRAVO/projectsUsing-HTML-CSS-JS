const changeLocation = document.getElementById("changeLocation");
const locationLayerContainer = document.getElementById("locationLayerContainer");
const closeBtn = document.getElementById("closeBtn");

changeLocation.addEventListener('click', () => {
    locationLayerContainer.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    locationLayerContainer.style.display = 'none';
}); 