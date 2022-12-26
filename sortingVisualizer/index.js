console.log("Sorting Visualizer");

const newArrBtn = document.getElementById("newArrBtn");
const bubbleSortBtn = document.getElementById("bubbleSortBtn");
const insertionSortBtn = document.getElementById("insertionSortBtn");
const selectionSortBtn = document.getElementById("selectionSortBtn");
const mergeSortBtn = document.getElementById("mergeSortBtn");
const quickSortBtn = document.getElementById("quickSortBtn");
const visualizerCont = document.getElementById("visualizerCont");

// to get new array
newArrBtn.addEventListener('click', () => {
    location.reload();
});

// to call bubble sort function on button click
bubbleSortBtn.addEventListener('click', () => {
    bubbleSort(arr);
});
// to call insertion sort function on button click
insertionSortBtn.addEventListener('click', () => {

});
// to call selection sort function on button click
selectionSortBtn.addEventListener('click', () => {
    selectionSort(arr);
});
// to call merge sort function on button click
mergeSortBtn.addEventListener('click', () => {

});
// to call quick sort function on button click
quickSortBtn.addEventListener('click', () => {

});

// unsorted array
let arr = [30, 10, 1, 45, 16, 23, 55, 12, 34, 2];

// creating an array by creating a div element
for (let i = 0; i < arr.length; i++) {
    let divEle = document.createElement('div');
    divEle.className = "rodStyle";
    divEle.id = `rod_${i + 1}`;
    visualizerCont.appendChild(divEle);
}

// creating variables for all rods
const rod_1 = document.getElementById("rod_1");
const rod_2 = document.getElementById("rod_2");
const rod_3 = document.getElementById("rod_3");
const rod_4 = document.getElementById("rod_4");
const rod_5 = document.getElementById("rod_5");
const rod_6 = document.getElementById("rod_6");
const rod_7 = document.getElementById("rod_7");
const rod_8 = document.getElementById("rod_8");
const rod_9 = document.getElementById("rod_9");
const rod_10 = document.getElementById("rod_10");

// making an array of all div
let eleArr = [rod_1, rod_2, rod_3, rod_4, rod_5, rod_6, rod_7, rod_8, rod_9, rod_10];

// creating a dictionary of div element that is rod
let dict = {};
for (let i = 0; i < arr.length; i++) {
    dict[`rod_${i + 1}`] = eleArr[i];
}

// changing the length of element accrording to array
function changeHeight() {
    for (let i = 0; i < arr.length; i++) {
        dict[`rod_${i + 1}`].style.height = `${arr[i] * 5}px`;
    }
}
// calling it initially
changeHeight();

// swapping function
function swap(arr, index_1, index_2) {
    let temp = arr[index_1];
    arr[index_1] = arr[index_2];
    arr[index_2] = temp;
}

let waitTime = 400;

// bubble sort function
async function bubbleSort(g_arr) {
    for (let k = 1; k <= g_arr.length; k++) {
        let i;
        for (i = 0; i < g_arr.length - k; i++) {
            dict[`rod_${(i) + 1}`].style.background = "red";
            dict[`rod_${(i + 1) + 1}`].style.background = "darkgreen";

            await sleep(waitTime);

            if (g_arr[i] > g_arr[i + 1]) {
                swap(g_arr, i, i + 1);
                changeHeight();
            }

            await sleep(waitTime);

            dict[`rod_${(i) + 1}`].style.background = "yellow";
            dict[`rod_${(i + 1) + 1}`].style.background = "yellow";

            await sleep(waitTime);
        }
        dict[`rod_${i + 1}`].style.background = "blue";
    }
}

// selection sort function
async function selectionSort(g_arr) {
    for (let i = 0; i < g_arr.length; i++) {
        dict[`rod_${i + 1}`].style.background = "orange";
        await sleep(waitTime);
        for (let j = i + 1; j < g_arr.length; j++) {
            dict[`rod_${j + 1}`].style.background = "green";
            await sleep(waitTime);
            if (g_arr[j] < g_arr[i]) {
                swap(g_arr, i, j);
                changeHeight();
                await sleep(waitTime);
            }
            await sleep(waitTime);
            dict[`rod_${j + 1}`].style.background = "yellow";
        }
        await sleep(waitTime);
        dict[`rod_${i + 1}`].style.background = "darkcyan";
    }
}

// sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


