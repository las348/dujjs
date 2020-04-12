//formulas to get characters
var specialOps = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
var upperOps = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var lowerOps = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
var numberOps = String.fromCharCode(Math.floor(Math.random() * 48) + 10);

//The split() method is used to split a string into an array of substrings, and returns the new array.
var specialArray = specialOps.split("");
var upperArray = upperOps.split("");
var lowerArray = lowerOps.split("");
var numberArray = numberOps.split("");

console.log(specialArray);
console.log(upperArray);
console.log(lowerArray);
console.log(numberArray);

//user input variables
var yesUpper;
var yesLower;
var yesNumber;
var yesSpecial;
var userLength;


//Object for user length. Objects can contain many values.
var userLength = {};

//contain user values
var newPassword = [];
var finalPassword;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

function writePassword() {
    generatePassword();
    passwordText.textContent = finalPassword;
}

//Prompt user for password options
function generatePassword() {
    var userLength = prompt("How long would you like your password to be? Must be between 8 and 128.");
    userLength = parseInt(userLength);

    if ((isNaN(userLength) === true) && (userLength >= 8) && (userLength <= 128)) {
        console.log("Value accepted");
    } else if (!(userLength)) {
        console.log("Start over");
        return;
    } else {
        alert("Not valid");
        generatePassword();
    }
    var includeUpper;
    var includeLower;
    var includeNum;
    var includeSpecial;
    yesSpecial = confirm("Would you like to include special characters?");
    yesUpper = confirm("Would you like to include uppercase letters?");
    yesLower = confirm("Would you like to include lowercase letters?");
    yesNumber = confirm("Would you like to include numbers?");

    if (!(yesSpecial) && !(yesUpper) && !(yesLower) && !(yesNumber)) {
        console.log("Not valid");
        alert("Not valid");
        return;
    } else {
        //Add user's input length 
        userInputOptions.passwordLength = userLength;
        console.log("User password length is " + userInputOptions.passwordLength);
        generatePassword();
    }
};


function randomElement(x) {
    return x[Math.floor(Math.random() * x.length)];
};

//Function that generates password from user's input
function generatePassword() {
    var possibleChars = [];
    var definiteChars = [];

    if (yesSpecial) {
        //Adding all possible
        for (var i = 0; i < specialArray.length; i++) {
            possibleChars.push(specialArray[i]);
        }
        //add possible to definite character list
        definiteChars.push(randomElement(specialArray));

        console.log(possibleChars);
        console.log(definiteChars);
    }
    if (yesUpper) {
        for (var i = 0; i < upperArray.length; i++) {
            possibleChars.push(upperArray[i]);
        }

        definiteChars.push(randomElement(upperArray));

        console.log(possibleChars);
        console.log(definiteChars);
    }
    if (yesLower) {
        for (var i = 0; i < lowerArray.length; i++) {
            possibleChars.push(lowerArray[i]);
        }

        definiteChars.push(randomElement(lowerArray));

        console.log(possibleChars);
        console.log(definiteChars);
    }
    if (yesNumber) {
        for (var i = 0; i < numberArray.length; i++) {
            possibleChars.push(numberArray[i]);
        }

        definiteChars.push(randomElement(numberArray));

        console.log(possibleChars);
        console.log(definiteChars);
    }
    //empty newPassword array.
    newPassword = [];

    //Define a for loop that iterates i times (i= the length of the password the user selected reduced by the number of items there are in the guarenteedCharacters array). 
    //Then concat all the return values and the items from the definiteChars array.
    for (var i = 0; i < (userLength.passwordLength - definiteChars.length); i++) {
        console.log(randomElement(possibleChars));
        newPassword.push(randomElement(possibleChars))
    }
    console.log(newPassword);
    //add on the guarenteed characters
    newPassword = newPassword.concat(definiteChars);
    console.log(newPassword);
    //create a string from the array containing the characters to make a password
    finalPassword = newPassword.join('');
    console.log(finalPassword);
}

//Attaches an event handler to the button id="generate". When the button is clicked, invoke the function generatePassword.
document.querySelector("#userPassword").addEventListener("click", writePassword); 