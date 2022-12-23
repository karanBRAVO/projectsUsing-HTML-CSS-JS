const userInp = document.getElementById("userInp");
const convertBtn = document.getElementById("convertBtn");
const outPut = document.getElementById("outPut");
const mean = document.getElementById("mean");
const tpCont = document.getElementById("tpCont");
const hideBtnDiv = document.getElementById("hideBtnDiv");

mean.addEventListener('click', () => {
    tpCont.style.display = 'block';
});

hideBtnDiv.addEventListener('click', () => {
    tpCont.style.display = 'none';
});

convertBtn.addEventListener('click', () => {
    let g_integer = parseInt(userInp.value);
    let f_value = convertToRoman(g_integer);
    outPut.innerHTML = `${f_value}`;
});

let romanArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let intArr = [1, 5, 10, 50, 100, 500, 1000];

// main function -> entry point
function convertToRoman(num) {
    let f_romanVal = "";

    if (num < 0 || num > 3999) {
        return "Enter a Non-Zero Integer less than 3999";
    }

    if ((num <= intArr[2] && num > 0) || num == intArr[3] || num == intArr[3] - 1 || num == intArr[4] || num == intArr[4] - 1 || num == intArr[5] || num == intArr[5] - 1 || num == intArr[6] || num == intArr[6] - 1) {
        f_romanVal = genCalc(num);
        return f_romanVal;
    }

    if (num > intArr[2] && num < intArr[3] - 1) {
        num -= intArr[2];
        f_romanVal = romanArr[2];
        f_romanVal += genCalc(num);
        return f_romanVal;
    }

    if (num > intArr[3] && num < intArr[4] - 1) {
        num -= intArr[3];
        f_romanVal = romanArr[3];
        f_romanVal += genCalc(num);
        return f_romanVal;
    }
    
    if (num > intArr[4] && num < intArr[5] - 1) {
        num -= intArr[4];
        f_romanVal = romanArr[4];
        f_romanVal += genCalc(num);
        return f_romanVal;
    }
    
    if (num > intArr[5] && num < intArr[6] - 1) {
        num -= intArr[5];
        f_romanVal = romanArr[5];
        f_romanVal += genCalc(num);
        return f_romanVal;
    }
    
    if (num > intArr[6] && num <= 3999) {
        num -= intArr[6];
        f_romanVal = romanArr[6];
        f_romanVal += genCalc(num);
        return f_romanVal;
    }
}

// general calculation->recursion
function genCalc(num) {
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

    if (num > intArr[0] && num < intArr[1] - 1) {  // 2,3
        for (let j = 0; j < num; j++) {
            romanVal += romanArr[0];
        }
        return romanVal;
    }

    if (num > intArr[1] && num < intArr[2] - 1) {  // 6,7,8
        num -= intArr[1];
        romanVal = romanArr[1];
        for (let j = 0; j < num; j++) {
            romanVal += romanArr[0];
        }
        return romanVal;
    }

    if (num > intArr[2] && num < intArr[3] - 1) {  // 11,12,13,14,15,16,17,18,19,20,.......,49-1
        num -= intArr[2];
        romanVal = romanArr[2];
        romanVal += genCalc(num);
        return romanVal;
    }

    if (num > intArr[3] && num < intArr[4] - 1) {  // 51,52,53,54,55,56,57,58,59,60,............,99-1
        num -= intArr[3];
        romanVal = romanArr[3];
        romanVal += genCalc(num);
        return romanVal;
    }

    if (num > intArr[4] && num < intArr[5] - 1) {  // 101,102,103,104,105,106,107,108,109,110,.........,499-1
        num -= intArr[4];
        romanVal = romanArr[4];
        romanVal += genCalc(num);
        return romanVal;
    }

    if (num > intArr[5] && num < intArr[6] - 1) {  // 501,502,503,504,505,506,507,508,509,510,..............,999-1
        num -= intArr[5];
        romanVal = romanArr[5];
        romanVal += genCalc(num);
        return romanVal;
    }

    if (num > intArr[6] && num <= 3999) {  // 1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,.................,3999-1
        num -= intArr[6];
        romanVal = romanArr[6];
        romanVal += genCalc(num);
        return romanVal;
    }
}