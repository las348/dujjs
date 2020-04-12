//formulas to get characters
var specialOps = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var upperOps = String.fromCharCode(26) + 65;
var lowerOps = String.fromCharCode(26) + 97;
var numberOps = String.fromCharCode(48) + 10;

//The split() method is used to split a string into an array of substrings, and returns the new array.
var upperArr = upperOps.split("");
var lowerArr = lowerOps.split("");
var numberArr = numberOps.split("");
var specialArr = specialOps.split("");

console.log(upperArr);
console.log(lowerArr);
console.log(numberArr);
console.log(specialArr);

//user input variables
var yesUpper;
var yesLower;
var yesNumber;
var yesSpecial;
var userLen;

//Store password length selected by user
var userInput = {};
var newPassword = [];
var finalPassword;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword() {
    getPasswordOptions();
    passwordText.textContent = finalPassword;
}


//placeholder (x) to add user input and make random. 
function randomElement(x) {
    return x[Math.floor(Math.random() * x.length)];
};

//Function that generates password from user's input
function generatePassword() {
    var includeChars = [];
    var guaranteedCharacters = [];

    if (yesSpecial) {
        //Adding all possible
        for (var i = 0; i < specialArr.length; i++) {
            includeChars.push(specialArr[i]);
        }
        //add possible to guaranteed character list
        guaranteedCharacters.push(randomElement(specialArr));

        console.log(includeChars);
        console.log(guaranteedCharacters);
    }
    if (yesNumber) {
        for (var i = 0; i < numberArr.length; i++) {
            includeChars.push(numberArr[i]);
        }

        guaranteedCharacters.push(randomElement(numberArr));

    }
    if (yesLower) {
        for (var i = 0; i < lowerArr.length; i++) {
            includeChars.push(lowerArr[i]);
        }
        guaranteedCharacters.push(randomElement(lowerArr));

    }
    if (yesUpper) {
        for (var i = 0; i < upperArr.length; i++) {
            includeChars.push(upperArr[i]);
        }
        guaranteedCharacters.push(randomElement(upperArr));
    }
    //empty newPassword array
    newPassword = [];
    //concat values
    for (var i = 0; i < (userInput.passwordLength - guaranteedCharacters.length); i++) {
        console.log(randomElement(includeChars));
        newPassword.push(randomElement(includeChars))
    }
    console.log(newPassword);
    //add on the guarenteed characters
    newPassword = newPassword.concat(guaranteedCharacters);
    console.log(newPassword);
    //create a string from the array containing the characters to make a password
    finalPassword = newPassword.join('');
    console.log(finalPassword);
}


document.querySelector("#userPassword").addEventListener("click", writePassword); 

function getPasswordOptions() {
    userLen = prompt("How long would you like your password to be? Between 8 and 128.");
    userLen = parseInt(userLen);

    if ((typeof userLen === 'number') && (userLen >= 8) && (userLen <= 128)) {
        console.log("Value accepted");
    } else if (!(userLen)) {
        console.log("Not valid");
        return;
    } else {
        alert("Not valid");

        getPasswordOptions();
    }

    yesSpecial = confirm("Would you like to include special characters?");
    yesUpper = confirm("Would you like to include uppercase letters?");
    yesLower = confirm("Would you like to include lowercase letters?");
    yesNumber = confirm("Would you like to include numbers?");


    if (!(yesSpecial) && !(yesUpper) && !(yesLower) && !(yesNumber)) {
        console.log("Not valid");
        alert("Not valid");

        return;
    } else {
        userInput.passwordLength = userLen;
        console.log("User password length is " + userInput.passwordLength);
        generatePassword();
    }
};