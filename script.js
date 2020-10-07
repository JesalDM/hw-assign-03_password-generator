// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Define all the character type groups as arrays
      //Array for lowerCase

      //Array for upperCase

      //Array for specialCharacters

      //Array for numbers


// Prompt the user for password criteria desired
      // Prompt to enter the desired password length


      // Validate if answer is a number and the number entered is between 8 and 128


      // Prompt/Confirm with the user which character types does he want to include in the password
      // Loop all the character type questions using an array


// Validate that at least one character type has been selected by the user


// Create an array with possible characters based on user response of the desired character types to be included
      // Define an empty array


      // Push/concatenate the arrays of the desired character types into the new array created


// Create a function for generate password
      // Use Math.random() method to generate a password from the new Array of possible characters based on user password criteria

      // Ensure that from all character types that user wanted in his password, at least 1 character from each charcter type group is included in the random password generated



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
