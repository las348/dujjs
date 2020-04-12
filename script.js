//formulas to get characters
var special = function getSpecial() {
  symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
var upper = function getUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var lower = function getLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var number = function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 48) + 10);
}

//console.log(finalPass);
//console.log(generateFinal());

// console.log("it worked " + finalPassword);
//var finalPassword = addPassword(userLength.index);
//passwordText.textContent = finalPassword;

/*array of formula functions
function randomFunc() {
  special: getSpecial,
  upper: getUpper,
  lower: getLower,
  number: getNumber
}*/


// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

/*function generatePassword() {
var 
// if (yesSpecial == true && yesUpper == true && yesLower == true && yesNumber == true)
password = passwordGenerator.generate(userLength.index); 
}*/


/*ORIG CODE
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
  }*/

/*
var yesSpecial = [];
var yesUpper = [];
var yesLower = [];
var yesNumber = [];
*/
// Add event listener to generate button
document.querySelector("#userPassword").addEventListener("click", function writePassword() {
  var userLength = [];
  var userLength = parseInt(prompt("How long would you like the password to be?", ""));

  var yesChar = (upper() + lower() + special() + number());
  console.log(yesChar);
  var finalPass = yesChar[10];
  console.log(finalPass);

  if ((userLength >= 8) && (userLength <= 128)) {
    var yesSpecial = confirm("Should I include special characters?");
  } else {
    alert("Start over");
  }
  if (yesSpecial == true) {
    var yesUpper = confirm("Should I include an upper case letter?");
  } else {
    alert("Start over");
  }
  if (yesUpper == true) {
    var yesLower = confirm("Should I include a lower case letter?");
  } else {
    alert("Start over");
  }
  if (yesLower == true) {
    var yesNumber = confirm("Should I include a number?");
  } else {
    alert("Start over");
  }
  if (yesNumber == true) {
    passwordText.value = finalPass;
  } else {
    alert("Start over");
  }
});