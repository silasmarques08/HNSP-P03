//1.1 create 9x9 table

function tableCreate(row, col) {
    let body = document.body;
    let tbl = document.createElement('table');
    tbl.style.width = '200px';
    tbl.style.border = '1px solid black';

    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < col; j++) {
            let td = tr.insertCell();
            td.appendChild(document.createTextNode(`${i},${j}`));
            td.style.border = '1px solid black';
        }
    }
    body.appendChild(tbl);
}

tableCreate(9, 9);



//1.2 import data and create 2D array

var array_number = require('./javascript_test_je1');
var arrayNumber1D = String(Object.values(array_number)).split(",");
var arrayNumber2D = new Array(arrayNumber1D.length);
for (var i = 0; i < arrayNumber1D.length; i++) {
    arrayNumber2D[i] = arrayNumber1D[i].split(" ");
}

//1.3 Fill



function tableFill(vector) {
    var table = document.querySelector("table");
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {

            td.appendChild(document.createTextNode(`${vector[i][j]}`));
        }
    }
    body.appendChild(tbl);
}