// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//formulas for characters
function getSpecial() {
  symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 48) + 10);
}

console.log(getSpecial());
console.log(getUpper());
console.log(getLower());
console.log(getNumber());

var getCharacters = {
  "special": "getSpecial",
  "upper": "getUpper",
  "lower": "getLower",
  "number": "getNumber",
};


var userLength = prompt("How long should the password be?");
  var passLength = parseInt((userLength >= 8) && (userLength <= 128));
 
// Add event listener to generate button
document.querySelector("#userPassword").addEventListener("click", promptMe); 
function promptMe() {
  var userLength = prompt("How long should the password be?");
  var userInitial = parseInt(userLength);
  if ((userInitial >= 8) && (userLength <= 128)) {
    confirm("Should I include special characters?");
   } else {
    alert("Start over");
   }
   if (true) {
    confirm("Should I include an upper case letter?");
   } else {
    alert = "Start over";
   }
   if (true) {
    confirm("Should I include a lower case letter?")
   } else {
    alert("Start over");
   }
   if (true) {
    confirm("Should I include a number?");
   } else {
    alert("Start over");
   }
};