const displayDiv = document.querySelector("#display");
// displayDiv.innerText = "Some new value"; 
let num1 = "";
let num2 = "";
let op = "";

function press(num) {
    let num1 = num;
    displayDiv.innerHTML = num1;
    // console.log(num)
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = "0";
}

function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
    displayDiv.innerHTML = "0";
}

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let res = 0;
    switch(op) {
        case "+":
        res = a + b;
        break;
        case "-":
        res = a - b;
        break;
        case "*":
          res = a * b;
        break;
        case "/":
        res = a / b;
        break;
    }
    num1 = res;
    op = "";
    displayDiv.innerHTML = res;
    
}



