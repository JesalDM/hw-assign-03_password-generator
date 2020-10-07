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
      var lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      //Array for upperCase
      var upperCaseAlpha = ['A', 'B', 'C', 'D',	'E', 'F', 'G', 'H', 'I', 'J',	'K', 'L', 'M', 'N', 'O','P', 'Q',	'R', 'S',	'T', 'U',	'V','W','X', 'Y', 'Z'];
      //Array for specialCharacters
      var specialChar = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
      //Array for numbers
      var numbers = ['0',	'1',	'2',	'3',	'4',	'5',	'6',	'7',	'8',	'9']

// Prompt the user for password criteria desired
      // Prompt to enter the desired password length


      // Validate if answer is a number and the number entered is between 8 and 128


      // Prompt/Confirm with the user which character types does he want to include in the password
      // Loop all the character type questions using an array. 
        // Created an array of objects with questions as a property, to leave room for adding the user responses as another property that will be needed in future
        var charTypeQuestions = [
          {q:'Do you want to include lower case letters in your password?'},
          {q:'Do you want to include upper case letters in your password?'},
          {q:'Do you want to include special characters in your password?'},
          {q:'Do you want to include numbers in your password?'}
        ]

        // Loop the questions using for-loop
        
        

        
// Validate that at least one character type has been selected by the user


// Create an array with possible characters based on user response of the desired character types to be included
      // Define an empty array
      var possibleChar=[];

      // Push/concatenate the arrays of the desired character types into the new array created


// Create a function for generate password
      // Use Math.random() method to generate a password from the new Array of possible characters based on user password criteria

      // Ensure that from all character types that user wanted in his password, at least 1 character from each charcter type group is included in the random password generated



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
