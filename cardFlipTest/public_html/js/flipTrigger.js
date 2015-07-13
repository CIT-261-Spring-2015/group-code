window.onload = addClickDraw;
//Add click event listener for the drawing of a card animation function
function addClickDraw() {
    var c = document.getElementById("flipContainer");
    c.addEventListener("click", flip);
}

//Add click event listener for the discarding of a card animation function
//function addClickDiscard() {
//    var d = document.getElementById("flipContainer");
//    
//    
//    d.addEventListener("click", flip);
//}

//Add the css animation class
function flip() {
    var c = document.getElementById("flipContainer");
    c.classList.add("flipped");
}