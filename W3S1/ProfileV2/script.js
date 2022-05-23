function changeName(id) {
    document.querySelector(id).innerText="Jon Doe";

}

var noTodd = document.querySelector(".todd");
var minusCon = document.querySelector(".cr-num");
var addCon = document.querySelector(".con-num")

function addTodd() {
    noTodd.remove();
    minusCon.innerText--;
    addCon.innerText++;
}

function removeTodd() {
    noTodd.remove();
    minusCon.innerText--;
}

var noPhil = document.querySelector(".phil");

function addPhil() {
    noPhil.remove();
    minusCon.innerText--;
    addCon.innerText++;
}

function removePhil() {
    noTodd.remove();
    minusCon.innerText--;
}