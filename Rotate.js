// for Clockwise Rotation..
function myFunc1() {

    var t1 = document.getElementById("input").value.split("#");

    
    if (t1[0] != parseInt(t1[0]) || t1[1] != parseInt(t1[1]) || t1[2] != parseInt(t1[2]) || t1.length > 3) {
        alert("Please give valid input... e.g.-3#4#5")
    }
    else if (t1[0] < 1 || t1[1] < 1) {
        alert("Number of Rows and Column should be greater than 0");
    }
    else {
        let row = t1[0], col = t1[1], st = t1[2];

        var table = "<table>";

        let a = [];
        for(let i =0 ; i < (t1[0]*t1[1]); i++){
            a[i] = [];
        }

        subFunc1(row, col, st, a);

        var table = "<table>";
        for (let i = 0; i < row; i++) {
            table += "<tr>";
            for (let j = 0; j < col; j++)
                table += "<td>" + a[i][j] + "</td>";
            table += "</tr>";
        }
        table += "</table>"
        document.getElementById("out").innerHTML = table;
    }
}

function subFunc1(row, col, st, a) {

    let val = st;
    let rows = 0, cols = 0;    // rows - starting row index , cols - starting column index

    while (rows < row && cols < col) {

        for (let i = cols; i < col; i++) {
            a[rows][i] = val++;
        }
        rows++;

        for (let i = rows; i < row; i++) {
            a[i][col - 1] = val++;
        }
        col--;

        if (rows < row) {
            for (let i = col - 1; i >= cols; i--) {
                a[row - 1][i] = val++;
            }
            row--;
        }

        if (cols < col) {
            for (let i = row - 1; i >= rows; i--) {
                a[i][cols] = val++;
            }
            cols++;
        }
    }
}

// for Anticlockwise Rotation..
function myFunc2() {

    var t1 = document.getElementById("input").value.split("#");

    
    if (t1[0] != parseInt(t1[0]) || t1[1] != parseInt(t1[1]) || t1[2] != parseInt(t1[2]) || t1.length != 3) {
        alert("Please give valid input... e.g.-3#4#5")
    }
    else if (t1[0] < 1 || t1[1] < 1) {
        alert("Number of Rows and Column should be greater than 0");
    }
    else {
        let row = t1[0], col = t1[1], st = t1[2];

        var table = "<table>";

        let a = Array.from(Array(100), () => new Array(100));

        subFunc2(row, col, st, a);

        var table = "<table>";
        for (let i = 0; i < row; i++) {
            table += "<tr>";
            for (let j = 0; j < col; j++)
                table += "<td>" + a[i][j] + "</td>";
            table += "</tr>";
        }
        table += "</table>"
        document.getElementById("out").innerHTML = table;
    }

}
function subFunc2(row, col, st, a) {

    let val = st;
    let rows = 0, cols = 0;    // rows - starting row index , cols - starting column index

    while (rows < row && cols < col) {

        for (let i = col - 1; i >= cols; i--) {
            a[rows][i] = val++;
        }
        rows++;

        for (let i = rows; i < row; i++) {
            a[i][cols] = val++;
        }
        cols++;

        if (rows < row) {
            for (let i = cols; i < col; i++) {
                a[row - 1][i] = val++;
            }
            row--;
        }

        if (cols < col) {
            for (let i = row - 1; i >= rows; i--) {
                a[i][col - 1] = val++;
            }
            col--;
        }
    }
}
