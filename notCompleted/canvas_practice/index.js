console.log("Canvas Practice");

const canvas = document.getElementById("canvas");
canvas.style.backgroundColor = "black";
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100vh';

const ctx = canvas.getContext("2d");

let num = 0;
let numberOfIterations = 2451;

let xPos;
let yPos;

let dist = 3;

let rect_height = 2;
let rect_width = rect_height;

let arrowMoved = 1;
let arrowMoveCounter = 1;
let counter = 0;

let start_xPos;
let start_yPos;
let end_xPos;
let end_yPos;

function animate() {

    num++;

    if (num == 1) {
        xPos = canvas.width / 2;
        yPos = canvas.height / 2;
    }
    else {
        start_xPos = xPos;
        start_yPos = yPos;

        if (arrowMoved % 2 != 0) {  // odd
            if (arrowMoveCounter == 1) {
                xPos += dist;
            }
            else if (arrowMoveCounter == 2) {
                yPos -= dist;
            }
        }
        else if (arrowMoved % 2 == 0) {  // even
            if (arrowMoveCounter == 1) {
                xPos -= dist;
            }
            else if (arrowMoveCounter == 2) {
                yPos += dist;
            }
        }

        end_xPos = xPos;
        end_yPos = yPos;
    }

    if (num != 1) {
        counter++;

        if (counter == arrowMoved) {
            arrowMoveCounter++;
            counter = 0;
        }
        
        if (arrowMoveCounter > 2) {
            arrowMoved++;
            arrowMoveCounter = 1;
        }
    }

    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.strokeStyle = 'white';
    ctx.font = "10px sans-serif";

    // draw line
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    ctx.moveTo(start_xPos, start_yPos);
    ctx.lineTo(end_xPos, end_yPos);
    ctx.stroke();

    // Draw prime number spiral
    if (num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0 && num != 1) {
        ctx.fillRect(xPos - 1, yPos - 1, rect_width, rect_height);
        // ctx.fillText(num, xPos + 2, yPos - 2);
    }
    else if (num == 2 || num == 3 || num == 5 || num == 7) {
        ctx.fillRect(xPos - 1, yPos - 1, rect_width, rect_height);
        // ctx.fillText(num, xPos + 2, yPos - 2);
    }
    
    // Draw Natual Number Spiral
    // ctx.fillRect(xPos - 1, yPos - 1, rect_width, rect_height);
    // ctx.fillText(num, xPos + 2, yPos - 2);

    if (num != numberOfIterations) {
        requestAnimationFrame(animate);
    }
}

animate();