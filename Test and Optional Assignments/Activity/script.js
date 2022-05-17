function likebutton(id) {
    document.querySelector(id).innerText++;
}
function changeColor(id) {
    document.querySelector(id).style.backgroundColor="red";
}
function removeButton(element) {
    element.remove();
}