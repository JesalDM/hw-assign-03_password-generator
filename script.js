// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Step 1 - Define all the character type groups as arrays
// Array for lowerCase
var lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array for upperCase
var upperCaseAlpha = ['A', 'B', 'C', 'D',	'E', 'F', 'G', 'H', 'I', 'J',	'K', 'L', 'M', 'N', 'O','P', 'Q',	'R', 'S',	'T', 'U',	'V','W','X', 'Y', 'Z'];
// Array for specialCharacters
var specialChar = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
// Array for numbers
var numbers = ['0',	'1',	'2',	'3',	'4',	'5',	'6',	'7',	'8',	'9']



// Step 2 - Prompt the user for password criteria desired and create a new array that includes only those characters that are desired by the user
// Step 2.1 - Prompt to enter the desired password length and convert the string to a number
var lengthValue = prompt("Please enter the desired password length. It should be between 8-128 (both inclusive) characters.");
var length = parseInt(lengthValue);

// Step 2.2 - Validate if answer is a number and the number entered is between 8 and 128
// Used while loop to handle multiple instances of invalid number entered
while((isNaN(length)) || (length<8 || length>128)){
  lengthValue = prompt("Please enter a valid number. It should be between 8-128 (both inclusive) characters.")
  var length = parseInt(lengthValue);
}

// Step 2.3 - Confirm with the user which character types does he want to include in the password
// Create an array of objects with questions as a property that can be looped through. 
// Another property "corrArr" is added to each object that represents corresponding character type group array for the related question.
var charTypeQuestions = [
  {q:'Do you want to include lower case letters in your password?', corrArr: lowerCaseAlpha},
  {q:'Do you want to include upper case letters in your password?', corrArr: upperCaseAlpha},
  {q:'Do you want to include special characters in your password?', corrArr: specialChar},
  {q:'Do you want to include numbers in your password?', corrArr: numbers}
]

// Step 2.4 - Created an empty array that will hold the user desired characters for the password  
var userChar=[];

/* Step 2.5 - Created a function that: 
      loops through the questions, 
      adds the user response as a property to the charTypeQuestions, and 
      concatenates the corresponding arrays where user response is true, to build a complete list of all possible user desired characters*/

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

// Step 2.6 - Ensuring that the userChar array gets populated with user desired characters
buildUserCharArr();


// Step 2.7 - Validate that at least one character type has been selected by the user
// if userChar array is empty, indicating user hasn't selected any character type
if(userChar.length===0){
  //alert the user to select at least 1 and loop through all the questions and the entire process of populating the userChar array again 
  alert("You need to choose at least 1 character type to generate the password.");
  buildUserCharArr();
}


// Step 3 - Create a function for generate password

// Step 3.1 - Use Math.random() method to generate a password from the new Array of possible characters based on user password criteria

// Step 3.2 - Ensure that from all character types that user wanted in his password, at least 1 character from each charcter type group is included in the random password generated



//  Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
