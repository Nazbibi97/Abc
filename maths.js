var userInput = prompt(" What are you searching for \r 1.Tables \r 2.Backword Counting \r 3.Forword Counting\r Please make sure the characters are written same"
)

if (userInput=== "Tables"){
  var tableof = +prompt( "Enter a number the table you want" )
var startNum = +prompt("Enter the starting number")
var endNum = +prompt("Enter the number you want to end")
document.write(`<div style=" text-align:center; font-weight: bold;
   font-style: oblique;
   text-align: center;
   margin: auto;
   margin-top:2em;">
       <img src="./giphy.gif" alt="" style="width: 20rem; height: 200px; border:4px solid slateblue"><h2>Tables</h2>
  </div>`)
for (var i = startNum;  i<= endNum; i++){

  document.write("<center>"+tableof + " X " + i + " = " + (tableof*i)+"</center>"+ "</br>")
 
}


}
else if (userInput === "Backword Counting"){
  var backCount = +prompt( "Enter a number  for starting the backword counting  you want" )
var endNum = +prompt("Enter the number you want to end")
document.write(`<div style=" text-align:center;font-style: oblique;
   text-align: center;
   margin: auto;
   margin-top:2em;">
       <img src="./giphy.gif" alt="" style="width: 20rem; height: 200px; "><h2>Backword Counting</h2></div>`)

for(var j = backCount;  j >=  endNum; j--){
document.write("<center>"+ j +"</center>" + "</br>");

}
}
else if (userInput === "Forword Counting"){
  var forCount = +prompt( "Enter a number  for starting the forword counting  you want" )
var endNum = +prompt("Enter the number you want to end")
document.write(`<div style=" text-align:center;font-style: oblique;
   text-align: center;
   margin: auto;
   margin-top:2em;">
       <img src="./giphy.gif" alt="" style="width: 20rem; height: 200px; "><h2>Forword Counting</h2></div>`)

for(var j = forCount;  j <= endNum; j++){
document.write("<center>"+ j +"</center>" + "</br>");

}

}
else {
  document.writedocument.write(`<div style=" text-align:center;"><h2>Sorry This is not Available</h2></div>`)
}
// var tableof = +prompt( "Enter a number the table you want" )
// var startNum = +prompt("Enter the starting number")
// var endNum = +prompt("Enter the number you want to end")
// for (var i = startNum;  i<= endNum; i++){
//   document.write("<center>"+tableof + " X " + i + " = " + (tableof*i)+"</center>"+ "</br>")
 
// }



// ------------- backword
// var backCount = +prompt( "Enter a number  for starting the backword counting  you want" )
// var endNum = +prompt("Enter the number you want to end")
// for(var j = backCount;  j >=  endNum; j--){
// document.write("<center>"+ j +"</center>" + "</br>");

// }
// ------------- forward
// var forCount = +prompt( "Enter a number  for starting the forword counting  you want" )
// var endNum = +prompt("Enter the number you want to end")
// for(var j = forCount;  j <= endNum; j++){
// document.write("<center>"+ j +"</center>" + "</br>");

// }
