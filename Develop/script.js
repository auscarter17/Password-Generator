// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// vars for types of data based on user input
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numeric = ["0123456789"];
var symbols = ["!@#$%^&*()-_=+{};:,<.>/?`~"];



function generatePassword() {
  var password = "";
  var inputChar = "";
  // Ask user for number of characters in their password
  var charLength = parseInt(prompt("How many characters should your password be? Pick a number between 8-128.")); 
    if (charLength < 8) {
      window.alert("Your password is too short. Pick a number between 8-128.");
      return (generatePassword());

    }else if (charLength > 128) {
      window.alert("Your password is too long. Pick a number between 8-128.");
      return (generatePassword());
      
    }else if (Number.isNaN(charLength)) {
      window.alert("Please enter a number between 8-128 and no other characters.");
      return (generatePassword());
    }
  
  // Ask user for confirmation of types of characters contained in password
  var inputUpper = window.confirm("Should your password include uppercase letters?");
    if (inputUpper) {
      inputChar += inputLower;
    }

  var inputLower = window.confirm("Should your password contain lowercase letters?");
    if (inputLower) {
      inputChar += inputLower;
    }

  var inputNumeric = window.confirm("Should your password contain numbers?");
    if (inputNumeric) {
      inputChar += inputNumeric;
    }

  var inputSymbols = window.confirm("Should your password contain special characters?");
    if (inputSymbols) {
      inputChar += inputSymbols;
    }

  if (!inputUpper 
  && !inputLower
  && !inputNumeric
  && !inputSybols) {
    window.alert("You must choose at least one type of selector.");
    return (generatePassword());
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  var passwordText = document.querySelector("#password");
  passwordText.length = charLength;
  passwordText.value = password;
  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
