display = document.getElementById("display");
var op = "";
function pressNumber(num) {
    display.innerHTML = display.innerHTML + num;
}

function add() {
    num1 = parseInt(display.innerHTML);
    op = "+";
    display.innerHTML = "";
}
function subtract() {
    num1 = parseInt(display.innerHTML);
    op = "-";
    display.innerHTML = "";
}
function multiply() {
    num1 = parseInt(display.innerHTML);
    op = "x";
    display.innerHTML = "";
}
function divide() {
    num1 = parseInt(display.innerHTML);
    op = "/";
    display.innerHTML = "";
}
function equals() {
    num2 = parseInt(display.innerHTML);
    if (op === "+") {
        result = num1 + num2;
    }
    else if (op === "-") {
        result = num1 - num2;
    }
    else if (op === "x") {
        result = num1 * num2;
    }
    else if (op === "/") {
        result = num1 / num2;
    }
    else {
        result = "fokiu"
    }
    display.innerHTML = result;
}