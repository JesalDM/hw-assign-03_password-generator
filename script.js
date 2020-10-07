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



// Prompt the user for password criteria desired and create a new array that includes only those characters that are desired by the user
  // Prompt to enter the desired password length
  var lengthValue = prompt("Please enter the desired password length. It should be between 8-128 (both inclusive) characters.");
  // Converting string to a number
  var length = parseInt(lengthValue);

  // Validate if answer is a number and the number entered is between 8 and 128
  // Used while loop to handle multiple instances of invalid number entered
  while((isNaN(length)) || (length<8 || length>128)){
    lengthValue = prompt("Please enter a valid number. It should be between 8-128 (both inclusive) characters.")
    var length = parseInt(lengthValue);
  }

  // Confirm with the user which character types does he want to include in the password
    // Create an array of objects with questions as a property that can be looped through. 
    // Another property "corrArr" is added to each object that represents corresponding character type group array for the related question.
    var charTypeQuestions = [
      {q:'Do you want to include lower case letters in your password?', corrArr: lowerCaseAlpha},
      {q:'Do you want to include upper case letters in your password?', corrArr: upperCaseAlpha},
      {q:'Do you want to include special characters in your password?', corrArr: specialChar},
      {q:'Do you want to include numbers in your password?', corrArr: numbers}
    ]

  //Created an empty array that will hold the user desired characters for the password  
  var userChar=[];

  //Created a function that: 
      //loops through the questions, 
      //adds the user response as a property to the charTypeQuestions, and 
      //concatenates the corresponding arrays where user response is true, to build a complete list of all possible user desired characters

  function buildUserCharArr(){
    // loop through the questions
    for (i=0; i<charTypeQuestions.length; i++){
      var userAns = confirm(charTypeQuestions[i].q);            
      // if yes,
      if(userAns===true){
      // store user response as true
        charTypeQuestions[i].a=true;
      // concatenate corresponding array with userChar array
        userChar = userChar.concat(charTypeQuestions[i].corrArr)
      } else {
      // if false, store user response as false, do not concatenate the corresponding array
        charTypeQuestions[i].a=false;
      }
    }
  }

  buildUserCharArr();


  // Validate that at least one character type has been selected by the user
     

  


// Create a function for generate password
      // Use Math.random() method to generate a password from the new Array of possible characters based on user password criteria

      // Ensure that from all character types that user wanted in his password, at least 1 character from each charcter type group is included in the random password generated



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
