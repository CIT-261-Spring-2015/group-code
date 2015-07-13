
window.onload = addClickDraw;
function addClickDraw(){
      var c = document.getElementById("flipContainer");
      c.addEventListener("click", flip);
}

function flip(){
    var c = document.getElementById("flipContainer");
    c.classList.add("flipped");
    addClickDiscard();
}


function addClickDiscard(){
       var c = document.getElementById("flipContainer");
       c.addEventListener("click", discard);
}

function discard(){
    var c = document.getElementById("flipContainer");
    c.classList.add("discard");
    console.log("It worked");
     
}