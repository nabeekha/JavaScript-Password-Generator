// Assignment code here

// intial variables used to store each type of character
var finalPassword;
//initially tried separating each category of characted into an individual set
// Now trying to combine into a single array and have the loops sort through a specific part of the longer array
var allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generatePassword = document.getElementById("password");

function passPrompt() {
  var password = ""
  var length = 0

  //prompting for password 
while (length < 8 || length > 128 || isNaN(length)) {
  length = parseInt(prompt("Please select a password length betwen 8 and 128 characters"))
}

  var lowerCase = prompt("Should the password include lowercase letters?")
  var upperCase = prompt("Should the password include uppercase letters?")
  var numeric = prompt("Should the password include numbers?")
  var specChar = prompt("Should the password include special characters?")

  // Build the character set based on user choices
  var characterSet = "";
  if (includeLower) {
    characterSet += lowerLetters;
  }
  if (includeUpper) {
    characterSet += upperLetters;
  }
  if (includeNumeric) {
    characterSet += numbers;
  }
  if (includeSpecial) {
    characterSet += specialChar;
  }

  // //character set based on user choices
  // var characterSet = ""
  // if (lowerCase === "yes"){
  //   var returnLower = "";

  //   for (var i = 0, a = lowerLetters.length; i < lowerLetters.length; i++) {
  //     returnLower = allCharacters.charAt(Math.floor(Math.random() * a ));
  //   }
  // }

  // if (upperCase === "yes"){
  //   var returnUpper = "";

  //   for (var i = 0, a = upperLetters.length; i < upperLetters.length; i++) {
  //     returnUpper = upperLetters.charAt(Math.floor(Math.random() * a ));
  //   }
  // }

  // if (numeric === "yes"){
  //   var returnNum = "";

  //   for (var i = 0, a = numbers.length; i < numbers.length; i++) {
  //     returnNum = numbers.charAt(Math.floor(Math.random() * a ));
  //   }
  // }

  // if (specChar === "yes"){
  //   var returnSpec = "";

  //   for (var i = 0, a = specialChar.length; i < specialChar.length; i++) {
  //     returnSpec = specialChar.charAt(Math.floor(Math.random() * a ));
  //   }
  // }

  //generate the password via random selection
  for (var i=0; i< length; i++) {
    var randomNum = Math.floor(Math.random() * characterSet.length)
    password += characterSet.charAt(randomNum)
  }

  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
