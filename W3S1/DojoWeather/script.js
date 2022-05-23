function cityAlert(element) {
    alert("loading weather report...");
}

function dismiss(id) {
    document.querySelector(id).remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));

}
function convertTemp(element) {
    for(var i=1; i<=8; i++) {
        var tempSpan = document.querySelector(".temp" + i)
        var tempVal = tempSpan.innerText;
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}