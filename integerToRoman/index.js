const userInp = document.getElementById("userInp");
const convertBtn = document.getElementById("convertBtn");
const outPut = document.getElementById("outPut");

convertBtn.addEventListener('click', () => {
    let g_integer = parseInt(userInp.value);
    let f_value = convertToRoman(g_integer);
    outPut.innerHTML = `${f_value}`;
});

function convertToRoman(num) {
    let romanArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let intArr = [1, 5, 10, 50, 100, 500, 1000];
    let romanVal = "";

    for (let i = 0; i < intArr.length; i++) {
        if (num === intArr[i]) {  // 1,5,10,50,100,500,1000
            return romanArr[i];
        }
        else if (num === intArr[i] - 1 && intArr[i] != 1) {  // 4,9,49,99,499,999
            romanVal = romanArr[0] + romanArr[i];
            return romanVal;
        }
    }

    if (num > 1 && num < 4) {  // 2,3
        for (let j = 0; j < num; j++) {
            romanVal += romanArr[0];
        }
        return romanVal;
    }

    if (num > 5 && num < 9) {  // 6,7,8
        num -= 5;
        romanVal = romanArr[1];
        for (let j = 0; j < num; j++) {
            romanVal += romanArr[0];
        }
        return romanVal;
    }
}