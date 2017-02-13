console.log('Loaded!');

//change the value of maintext

// var element = document.getElementById("main_text");
// element.innerHTML = "new value";

// var img = document.getElementById("madi");
// var marginPixel=0;
// function moveRight(){
//     marginPixel = marginPixel + 1;
//     img.style.marginLeft = marginPixel +"px";
//     img.style.marginTop = marginPixel +"px";
// }
// img.onclick = function(){
//     var intervL = setInterval(moveRight,50);
// };

var button = document.getElementById("counter");
var counter =0;
button.onclick = function (){
    // var request = XMLHttpRequest();
    
    
counter = counter + 1;
var span = document.getElementById("count");
span.innerHTML = counter.toString();
     
};