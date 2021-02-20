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
var lowChoice = true;
var upChoice = confirm("Require Uppercase characters?");
var numChoice = confirm("Require Numerical characters?");
var specialChoice = confirm("Require Special characters?");

var passLength = prompt("Length of Password? (8 - 128)")
while (passLength < 8 || passLength > 128) {
  passLength = prompt("Length of Password? (8 - 128)")
}

// Write password to the #password input
function writePassword() {
  // choose character type
  charType = Math.floor(Math.random() * 4);

  // determine character added
  if (lowChoice && charType === 0) {
    charIndex = Math.floor(Math.random() * alphaLength);
    passwordText += lower.charAt(charIndex);
  }

  if (upChoice && charType === 1) {
    charIndex = Math.floor(Math.random() * alphaLength);
    passwordText += upper.charAt(charIndex);
  }


  if (numChoice && charType === 2) {
    charIndex = Math.floor(Math.random() * 9);
    passwordText += numer.charAt(charIndex);
  }

  if (specialChoice && charType === 3) {
    charIndex = Math.floor(Math.random() * 30);
    passwordText += spec.charAt(charIndex);
  }
  // make sure password is correct length
  if (!lowChoice && charType === 0) {
    i--;
  }
  if (!upChoice && charType === 1) {
    i--;
  }
  if (!numChoice && charType === 2) {
    i--;
  }
  if (!specialChoice && charType === 3) {
    i--;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  // Loop function based on user input
  passwordText = "";
  for (i = 0; i < passLength; i++) {

    writePassword()
  }
  document.getElementById('password').value = passwordText;

});
