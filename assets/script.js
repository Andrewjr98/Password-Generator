// Assignment code here
var charsNumbers = "0123456789";
var charsLowerLetters= "abcdefghijklmnopqrstuvwxyz"
var charsUpperLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charsSpecial= "!@#$%^&*()_-=+"
var passwordLength= "";
var password= "";
var computerOption= ["Numbers","LowerLetters","UpperLetters","Special"];


var generatePassword= function(){
var userChoice= prompt(" Select types of Characters ");
var userChoiceLength= prompt(" Select 8 to 128 characters ");
console.log (userChoice);
console.log (userChoiceLength);
var passwordLength= userChoiceLength
console.log(passwordLength)
if(!computerOption.includes(userChoice)){
  alert("You must Choose Numbers, LowerLetters, UpperLetters, or Special")
return;
}
else if (userChoice==computerOptions){
  writePassword();
}
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
