console.log("Table Printing");

const TableOf = document.getElementById("TableOf");
const upTo = document.getElementById("upTo");
const printBtn = document.getElementById("printBtn");
const showTableP = document.getElementById("showTableP");
const clearOutput = document.getElementById("clearOutput");
const clrOutputDiv = document.getElementById("clrOutputDiv");

printBtn.addEventListener('click', startTablePrinting);
function startTablePrinting() {
    showTableP.innerHTML = '';
    let table_of = TableOf.value;
    let up_to = upTo.value;
    let result = 0;

    if (table_of > 0 && up_to > 0) {
        for (let i = 1; i <= up_to; i++) {
            result = table_of * i;
            let para = document.createElement('p');
            para.innerText = `${table_of} x ${i} = ${result} `;
            showTableP.append(para);
            clrOutputDiv.style.display = 'block';
        }
    }
}

clearOutput.addEventListener('click', removeInnerHtml);
function removeInnerHtml() {
    showTableP.innerHTML = '';
    clrOutputDiv.style.display = 'none';
}

