// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numer = "0123456789";
var spec = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var charType = 0;
var assembly="";
var passwordText="";


console.log(spec.length);

// Write password to the #password input
function writePassword() {
  charType = Math.floor(Math.random() * 3);
  if (lowchoice === "y" && charType === 0)
   {
  charIndex = Math.floor(Math.random() * 26);
  passwordText.concat(assembly.charAt(charIndex));
  }
  if (upchoice === "y" && charType === 1)
   {
    charIndex = Math.floor(Math.random() * 26);
    passwordText.concat(assembly,upper.charAt(charIndex));
  }
  if (numchoice === "y" && charType === 2)
   {
      charIndex = Math.floor(Math.random() * 9);
      passwordText.concat(assembly,numer.charAt(charIndex));
  }
  if (spechoice === "y" && charType === 3)
   {
        charIndex = Math.floor(Math.random() * 31);
        passwordText.concat(assembly,spec.charAt(charIndex));
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Request user input
var lowchoice = prompt("Require Lowercase characters? (Y/N)")
lowchoice=lowchoice.toLowerCase()
if (lowchoice != "y" && lowchoice !="n") {
  lowchoice="y";
} 
var upchoice = prompt("Require Uppercase characters? (Y/N)")
upchoice=upchoice.toLowerCase()
if (upchoice != "y" && upchoice !="n") {
  upchoice="y";
} 
var numchoice = prompt("Require Numerical characters? (Y/N)")
numchoice=numchoice.toLowerCase()
if (numchoice != "y" && numchoice !="n") {
  numchoice="y";
} 
var spechoice = prompt("Require Special characters? (Y/N)")
spechoice=spechoice.toLowerCase()
if (spechoice != "y" && spechoice !="n") {
  spechoice="y";
} 


var length = Math.floor(Math.random() * 128) + 8;
for (i=0; i < length; i++) {
writePassword()
}
console.log("length was " + length)
console.log("password is: " + passwordText)
console.log(assembly)