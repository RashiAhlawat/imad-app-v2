// console.log('Loaded!');

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
 
 //Create request   
  var request = XMLHttpRequest();
  
  //Action to be performed after request is made
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE)
      {
          if(request.status === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }
      
  };
  
  // Make a request
  request.open("GET","http://rashiahlawat.imad.hasura-app.io/counter", true);
  request.send(null);
    
     
};