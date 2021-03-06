// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var length = Number(prompt("How many characters would you like your password to be? Enter a number between 8 and 128"));

//ask for character type
var charType = prompt("Enter a character type: lowercase, uppercase, special, numeric, all");

//generate password
function generatePassword() {
  
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if(charTypeLower === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if(charTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if(charTypeLower === "numeric") {
    charSet = "0123456789";
  } else if(charTypeLower === "special") {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if(charTypeLower === "all") {
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  //returns the value
  var returnVal = "";
  for (var i = 0; i < length; i++) {
    
    returnVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return returnVal;
}
alert(generatePassword());