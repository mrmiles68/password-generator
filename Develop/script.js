// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numer = "0123456789";
var spec = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var charType = 0;
var assembly = "";
var passwordText = "";
var alphaLength = 25



// Write password to the #password input
function writePassword() {



  charType = Math.floor(Math.random() * 3);
  if (lowChoice && charType === 0) {
    charIndex = Math.floor(Math.random() * alphaLength);
    passwordText.concat(lower.charAt(charIndex));
  }
  if (upChoice && charType === 1) {
    charIndex = Math.floor(Math.random() * alphaLength);
    passwordText.concat(assembly, upper.charAt(charIndex));
  }
  if (numChoice && charType === 2) {
    charIndex = Math.floor(Math.random() * 9);
    passwordText.concat(assembly, numer.charAt(charIndex));
  }
  if (specialChoice && charType === 3) {
    charIndex = Math.floor(Math.random() * 30);
    passwordText.concat(assembly, spec.charAt(charIndex));
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Request user input
var lowChoice = confirm("Require Lowercase characters?");

var upChoice = confirm("Require Uppercase characters?");

var numChoice = confirm("Require Numerical characters?");

var specialChoice = confirm("Require Special characters?")

// Generate password length and run function
var passLength = Math.floor(Math.random() * 128) + 8;
for (i = 0; i < passLength; i++) {
  writePassword()
}
// check variables
console.log("place zero is " + lower[0])
console.log("place zero is " + upper[0])
console.log("place zero is " + numer[0])
console.log("place one is " + spec[1]);
console.log("length was " + passLength);
console.log("password is: " + passwordText);
console.log(passwordText);
// var passwordText = document.querySelector("#password");
// console.log(passwordTextElement);