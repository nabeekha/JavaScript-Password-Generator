// Assignment code here
var finalPassword;
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generatePassword = document.getElementById("password");

function passPrompt(){
  var passLength = prompt("Please select a password length betwen 8 and 128 characters");

  var lowerCase = prompt("Should the password include lowercase letters?");
  if (lowerCase === "yes"){
    var returnLower = "";

    for (var i = 0, a = lowerLetters.length; i < lowerLetters.length; i++) {
      returnLower = lowerLetters.charAt(Math.floor(Math.random() * a ));
    }
  }

  var upperCase = prompt("Should the password include uppercase letters?");
  if (upperCase === "yes"){
    var returnUpper = "";

    for (var i = 0, a = upperLetters.length; i < upperLetters.length; i++) {
      returnUpper = upperLetters.charAt(Math.floor(Math.random() * a ));
    }
  }

  var numeric = prompt("Should the password include numbers?");
  if (numeric === "yes"){
    var returnNum = "";

    for (var i = 0, a = numbers.length; i < numbers.length; i++) {
      returnNum = numbers.charAt(Math.floor(Math.random() * a ));
    }
  }

  var specChar = prompt("Should the password include special characters?");
  if (specChar === "yes"){
    var returnSpec = "";

    for (var i = 0, a = specialChar.length; i < specialChar.length; i++) {
      returnSpec = specialChar.charAt(Math.floor(Math.random() * a ));
    }
  }


  alert(finalPassword);
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
