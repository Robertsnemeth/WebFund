let displayDiv = document.querySelector("#display");
// displayDiv.innerText = "Some new value"; 

const press = (num) => {
    displayDiv.innerText+=num.innerText;
}

const clr = () => {
    displayDiv.innerText = "";
}

let input = press;
let number1 = input
let number2 = input+{add, subtract, multiply, divide}
let operator = document.querySelector(".operator")

let result;

const calculate = () => {
    if(operator.innerText == '+') {
    result = number1 + number2;
    }
}



