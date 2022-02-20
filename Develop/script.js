// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
// var numeric = ["0123456789"];
// var symbols = ["!@#$%^&*()-_=+{};:,<.>/?`~"];



function generatePassword() {
  var charLength = parseInt(prompt("How many characters should your password be? Pick a number between 8-128.")); 
    if (charLength < 8) {
      window.alert("Your password is too short. Pick a number between 8-128.");
      return null;

    }else if (charLength > 128) {
      window.alert("Your password is too long. Pick a number between 8-128.");
      return null;
      
    }else if (Number.isNaN(charLength)) {
      window.alert("Please enter a number between 8-128 and no other characters.")
    }
  
  var upperCase = window.confirm("Should your password include uppercase letters?");

  var lowerCase = window.confirm("Should your password contain lowercase letters?");

  var numberic = window.confirm("Should your password contain numbers?");

  var symbols = window.confirm("Should your password contain special characters?");

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
