// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// vars for types of data based on user input
var inputUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var inputLower = "abcdefghijklmnopqrstuvwxyz";
var inputNumeric = "0123456789";
var inputSymbols = "#$%&()*+<=>?@";
var inputChar = ""

function generatePassword() {

  // Ask user for number of characters in their password
  var charLength = prompt("How many characters should your password be? Pick a number between 8-128."); 
    if (charLength < 8) {
      window.alert("Your password is too short. Pick a number between 8-128.");

    }else if (charLength > 128) {
      window.alert("Your password is too long. Pick a number between 8-128.");
      
    }else if (Number.isNaN(charLength)) {
      window.alert("Please enter a number between 8-128 and no other characters.");
    
  
  // Ask user for confirmation of types of characters contained in password

    }else {
        var upperConfirm = window.confirm("Should your password contain uppercase letters?");
        if (upperConfirm) {
          inputChar +=  inputUpper
        };

        var lowerConfirm = window.confirm("Should your password contain lowercase letters?");
        if (lowerConfirm) {
          inputChar += inputLower  
        };

        var numericConfirm = window.confirm("Should your password contain numbers?");
        if (numericConfirm) {
          inputChar += inputNumeric 
        };

        var symbolConfirm = window.confirm("Should your password contain special characters?");
        if (symbolConfirm) {
          inputChar += inputSymbols   
        };
        if (inputUpper === false 
          && inputLower === false 
          && inputNumeric === false 
          && inputSymbols === false) {
            window.alert("You must choose at least one type of selector.");
            generatePassword();
        }
    }

  var randomPassword = "";
  for (var i = 0; i < charLength; i++) {
    randomPassword += inputChar.charAt(Math.floor(Math.random() * inputChar.length))
  }
  return randomPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
