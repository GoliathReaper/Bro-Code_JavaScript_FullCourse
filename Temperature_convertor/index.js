const temperature = document.getElementById("textBox")
const result = document.getElementById("result")
const celsius = document.getElementById("toCelsius")
const farenheit = document.getElementById("toFarenheit")
let temp;

function convert(){
  if(farenheit.checked){
    temp = Number(temperature.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } 
  else if(celsius.checked){
    temp = Number(temperature.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  }
  else{
    result.textContent = "Select a unit";
  }
  
}