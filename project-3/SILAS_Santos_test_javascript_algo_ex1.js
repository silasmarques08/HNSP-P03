var array_number = import('javascript_test_je1');

// 1.1 create 9x9 table

function tableCreate(row, col) {
    let body = document.body;
    let tbl = document.createElement('table');

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


function fillTable(data) {
    var arrayNumber1D = String(data).split(",");
    var arrayNumber2D = new Array(arrayNumber1D.length);
    for (var i = 0; i < arrayNumber1D.length; i++) {
        arrayNumber2D[i] = arrayNumber1D[i].split(" ");
    }

    var tableContent = document.querySelectorAll("td");
    var rows = new Array(arrayNumber2D.length);
    for (var i = 0; i = arrayNumber2D.length; i++) {
        rows[i] = tableContent.slice((i * arrayNumber2D.length), ((1 + i) * arrayNumber2D));
    }

    for (var i = 0; i = arrayNumber2D.length; i++) {
        for (var j = 0; j = arrayNumber2D.length; j++) {
            rows[i][j].textContent = arrayNumber2D[i][j];
        }
    }
}

fillTable(array_number);


