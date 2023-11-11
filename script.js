// Assignment code here
var generateBtn = document.querySelector("#generate");
//  Variables for password criteria
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to generate password based on user input and returns password
function generatePassword () {
  // Variables for password
  let password = "";
  let passwordOptions = "";
  // Variables for user input
  let passwordLength = prompt("How many characters would you like your password to be? (8-128)");
  let passwordLowerCase; 
  let passwordUpperCase;
  let passwordNumbers;
  let passwordSpecial;


  console.log(passwordLowerCase, passwordUpperCase, passwordNumbers, passwordSpecial);

// Check is password length is between 8 and 128
// If true, ask user for password criteria

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return;
  } else {
    passwordLowerCase = confirm("Would you like to include lowercase letters?");
    passwordUpperCase = confirm("Would you like to include uppercase letters?");
    passwordNumbers = confirm("Would you like to include numbers?");
    passwordSpecial = confirm("Would you like to include special characters?");
  }

  if (!passwordLowerCase && !passwordUpperCase && !passwordNumbers && !passwordSpecial) {
    alert("Please select at least one character type.");
    return;
  } else {
    if (passwordLowerCase) {
      passwordOptions += lowercase;
    }
    if (passwordUpperCase) {
      passwordOptions += uppercase;
    }
    if (passwordNumbers) {
      passwordOptions += numbers;
    }
    if (passwordSpecial) {
      passwordOptions += special;
    }
  }

  // Generate password based on user input
  for (let i = 0; i < passwordLength; i++) {
    password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  }
// Returns password
  return password;
}

generateBtn.addEventListener("click", writePassword);
