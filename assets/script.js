// Assignment code here
var charsNumbers = "0123456789";
var charsLowerLetters= "abcdefghijklmnopqrstuvwxyz"
var charsUpperLetters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charsSpecial= "!@#$%^&*()_-=+"
var passwordLength= "";

var computerOption= ["Numbers","LowerLetters","UpperLetters","Special"];


var generatePassword= function(){
  var numberChecked= document.getElementById("charset1").checked
  var lowerLettersChecked= document.getElementById("charset2").checked
 var upperLettersChecked= document.getElementById("charset3").checked
  var specialChecked= document.getElementById("charset4").checked
  var passwordLength= document.getElementById("Quantity").value
  var password= "";
console.log (numberChecked);
console.log (passwordLength);
console.log(passwordLength)
if(!(numberChecked||lowerLettersChecked||upperLettersChecked||specialChecked)){
  alert("You must Choose Numbers, LowerLetters, UpperLetters, or Special")
return;
}
else {
  var checkedCharacters= "";
  if(numberChecked){
    checkedCharacters+=charsNumbers
  }
  if(lowerLettersChecked){
    checkedCharacters+=charsLowerLetters
  }
  if(upperLettersChecked){
    checkedCharacters+=charsUpperLetters
  }
  if(specialChecked){
    checkedCharacters+=charsSpecial
  }
  for (var i=0; i<passwordLength;i++){
    var randomNumber = Math.floor(Math.random()*checkedCharacters.length);
    password += checkedCharacters.substring(randomNumber,randomNumber +1);
    }
    console.log(password)
}
return password
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
