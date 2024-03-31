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

function passPrompt() {
  // initializing password variables and length
  var password = ""
  var length = 0

  // function to validate if the response is affirmative or negative. Function treats all responses besides yes as no and enables the conditional response to be utilized
  function validateResponse(response) {
    var normalResponse = response.toLowerCase().trim();
    return normalResponse === "yes" || normalResponse === "y";
  }

  //prompting for password 
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Please select a password length betwen 8 and 128 characters"))
  }

  // prompting to include the different types of characters to include in the password
  var includeLower = validateResponse(prompt("Should the password include lowercase letters?"))
  var includeUpper = validateResponse(prompt("Should the password include uppercase letters?"))
  var includeNumeric = validateResponse(prompt("Should the password include numbers?"))
  var includeSpecial = validateResponse(prompt("Should the password include special characters?"))
  console.log(includeLower, includeUpper, includeNumeric, includeSpecial)

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

  //generate the password via random selection
  for (var i = 0; i < length; i++) {
    var randomNum = Math.floor(Math.random() * characterSet.length)
    password += characterSet.charAt(randomNum)
  }
  console.log(password)
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = passPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
