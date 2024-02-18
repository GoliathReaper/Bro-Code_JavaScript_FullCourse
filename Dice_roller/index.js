function diceRoll(){
  const numDice = document.getElementById("diceRoll").value;
  let result = document.getElementById("result");
  let newDice = [];
  let newImage = [];

  for(let i = 0; i < numDice; i++){
    newDice.push(Math.floor((Math.random() * 6) + 1));
    }
  result.textContent = "dice: " + newDice;
}