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

//var userLength;

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  var userLength = prompt("Choose length of password, between 8 and 128");
  if (userLength === ">= 8" && "<= 128") {
    prompt("Should I include special characters?");
  } else {
    alert("Start over");
  }
})




//uppercase
if (true) {
  confirm("Should I include an uppercase letter?");
 else {
    alert("Start over");
  }
}

//lowercase
if (true) {
  confirm("Should I include a lowercase letter?");
 else {
    alert("Start over");
  }
}

//numeric
if (true) {
  confirm("Should I include a number?");
 else {
    alert("Start over");
  }
}


