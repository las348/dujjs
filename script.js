// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//formulas to get characters
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
var getLength = ((userInitial >= 8) && (userInitial <= 128));

console.log(getSpecial());
console.log(getUpper());
console.log(getLower());
console.log(getNumber());

var getCharacters = {
  "special": "getSpecial",
  "upper": "getUpper",
  "lower": "getLower",
  "number": "getNumber",
  "length": "getLength",
};



// Add event listener to generate button
document.querySelector("#userPassword").addEventListener("click", function () {
  var userLength = prompt("How long should the password be?");
  var userInitial = parseInt(userLength);
  if ((userInitial >= 8) && (userInitial <= 128)) {
    var yesSpecial = confirm("Should I include special characters?");
  } else {
    alert("Start over");
  }
  if (yesSpecial == true) {
    var yesUpper = confirm("Should I include an upper case letter?");
  } else {
    alert = "Start over";
  }
  if (yesUpper == true) {
    var yesLower = confirm("Should I include a lower case letter?")
  } else {
    alert("Start over");
  }
  if (yesLower == true) {
    var yesNumber = confirm("Should I include a number?");
  } else {
    alert("Start over");
  }
  if (yesNumber == true) {
    resultPassword = "2";
  } else {
    alert("Start over");
  }
  document.getElementById("password").innerHTML = resultPassword;
  });


