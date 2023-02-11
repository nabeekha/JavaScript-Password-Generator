// Assignment code here
var finalPassword;

var generatePassword = document.getElementById("password");

function passPrompt(){
  var passLength = prompt("Please select a password length betwen 8 and 128 characters");
  var lowerCase = prompt("Should the password include lowercase letters?");
  var upperCase = prompt("Should the password include uppercase letters?");
  var numeric = prompt("Should the password include numbers?");
  var specChar = prompt("Should the password include special characters?");

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
