//color array
//varaigbesl for HTML Elements
let containerE1 = document.getElementById("container")
let inputE1 = document.getElementById("color-in" )
//global viariable
let colors = [];
//event listener
inputE1.addEventListener("keydown", submitHandler)
 
function submitHandler(event){
  if (event.keyCode === 13) {
    //Create color array based on user input
    colors.push(inputE1.value);
    let newColor = inputE1.valuel;
    inputE1.value ="",
    displayColors(colors);

  }
}
function displayColors(colors) {
//Display all colors on the page
let divStr ="";
for (let i= 0; i < colors.length; i++) {

    divStr +=`<div style="background: ${colors[i]} "></div>`;
    console.log(divStr);
}
containerE1.innerHTML = divStr;
}
