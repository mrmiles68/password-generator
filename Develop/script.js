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
var lowChoice = confirm("Require Lowercase characters?");
var upChoice = confirm("Require Uppercase characters?");
var numChoice = confirm("Require Numerical characters?");
var specialChoice = confirm("Require Special characters?");

var passLength = prompt("Length of Password? (8 - 128)")
while (passLength < 8 || passLength > 128) {
  passLength = prompt("Length of Password? (8 - 128)")
}
// Write password to the #password input
function writePassword() {



  charType = Math.floor(Math.random() * 3);
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

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {

  for (i = 0; i < passLength; i++) {

    writePassword()

  }
  document.getElementById('password').value = passwordText;
  console.log("place zero is " + lower[0])
  console.log("place zero is " + upper[0])
  console.log("place zero is " + numer[0])
  console.log("place one is " + spec[1]);
  console.log("length was " + passLength);
  console.log("password is: " + passwordText);
  console.log(passwordText);

});

// Request user input





// Generate password length and run function
// var passLength = Math.floor(Math.random() * 128) + 8;
// for (i = 0; i < passLength; i++) {
//   writePassword()
// }
// document.getElementById('password').value = passwordText;

// check variables

// var passwordText = document.querySelector("#password");
// var passwordText = document.querySelector("#password");
// console.log(passwordTextElement);