console.log('Loaded!');

//change the value of maintext

var element = document.getElementById("main_text");
element.innerHTML = "new value";

var img = document.getElementById("madi");
var marginPixel=0;
function moveRight(){
    marginPixel = marginPixel + 1;
    img.style.marginLeft = marginPixel +"px";
    img.style.marginTop = marginPixel +"px";
}
img.onclick = function(){
    var intervL = setInterval(moveRight,50);
};