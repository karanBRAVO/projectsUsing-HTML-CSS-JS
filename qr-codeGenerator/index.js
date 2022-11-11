console.log("QR-Code Generator");

const generateButton = document.getElementById("generateButton");
const qrCodeBox = document.getElementById("qrCodeBox");
const userInp = document.getElementById("userInp");
const qrCodeImg = document.getElementById("qrCodeImg");

generateButton.addEventListener('click', generateQRcode);

function generateQRcode() {
    let vals = String(userInp.value);

    if (vals.length > 0) {
        qrCodeBox.style.display = 'flex';
        qrCodeImg.src = ` https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${vals}`;
    }
    else {
        qrCodeBox.style.display = 'none';
    }
}