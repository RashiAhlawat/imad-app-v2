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
var inputName = document.getElementById("name");
var Name = inputName.value;
var button = document.getElementById("submit_but");
button.onclick = function(){
    
 var names = ["name1","name2","name3","name4"];   
 var list ="";
 for(var i=0; i< names.length ;i++)
 {
     list += "<li>" +names[i] +"</li>";
 }
 var span = document.getElementById("nameList");
 span.innerHTML = list;
    
};



var button = document.getElementById("counter");
var counter =0;
button.onclick = function (){
 
 //Create request   
  var request = new XMLHttpRequest();
  
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