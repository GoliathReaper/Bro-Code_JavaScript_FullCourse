function randomPassword(){
  const lowerCase = document.getElementById("lowerCase").checked;
  const upperCase = document.getElementById("upperCase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;
  const passwordLength = document.getElementById("diceRoll").value;

  const charLowercase = "abcdefghijklmnopqrstuvwxyz";
  const charUppercase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charNumbers = "1234567890";
  const charSymbols = "~!@$#%$^&*()_+{}:<>?/";
  
  let allowedChars = "";
  let newPassword = [];
  console.log(lowerCase ? charLowercase: "")
  allowedChars += lowerCase ? charLowercase: "";
  allowedChars += upperCase ? charUppercase: "";
  allowedChars += numbers ? charNumbers: "";
  allowedChars += symbols ? charSymbols: "";
  console.log(allowedChars);
  if(allowedChars.length === 0){
    result.textContent = "Please select any one charactors";
  }
  else if(allowedChars){
    for(let i = 0; i < Number(passwordLength); i++){
      newPassword.push(allowedChars[Math.floor((Math.random() * allowedChars.length))]);
      }
    result.textContent = "Password: " + newPassword.join("");
  }
}




