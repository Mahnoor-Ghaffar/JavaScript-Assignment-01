
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");

let fullName = firstName + " " + lastName;
alert(`Hello ${fullName}...!`);






document.write("<h2>Task No 2:-</h2>");
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

let favModel = prompt("Please enter your favorite mobile phone model:");

document.write("My favourite phone is :" +favModel+"<br>" +"Length of string :"+favModel.length);







document.write("<h2>Task No 3:-</h2>");
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let Pakistani = "Pakistani";
var findN = Pakistani.indexOf('n');
document.write(`String : ${Pakistani} <br> index of 'n' is ${findN}`);







document.write("<h2>Task No 4:-</h2>");
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let word = "Hello World";
let lastIndex = word.lastIndexOf('l');
document.write(`String : ${word} <br> index of 'n' is ${lastIndex}`);






document.write("<h2>Task No 5:-</h2>");
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
let word2 = "Pakistani";

document.write(`String : ${word2} <br> Character at index 3 is : ${word2.charAt(3)}`);







document.write("<h2>Task No 6:-</h2>");
// 6. Repeat Q1 using string concat() method.
let firstName1 = prompt("Please enter your first name:");
let lastName1 = prompt("Please enter your last name:");

document.write("Hello "+firstName1 + " " + lastName1);







document.write("<h2>Task No 7:-</h2>");
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let repStr = "Hyderabad";

let replace = repStr.replace("Hyder", "Islam");
document.write("City : " + repStr + "<br>");
document.write("After replacement: " + replace);







document.write("<h2>Task No 8:-</h2>");
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let  message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceand = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br>");
document.write("After Replacement: " + replaceand);






document.write("<h2>Task No 9:-</h2>");
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

let convert = "472";
document.write("Value :" +convert+" <br>Type : "+typeof convert);

let convertStr = parseInt(convert);
document.write("<br>Value :" +convertStr+" <br>Type : "+typeof convertStr);







document.write("<h2>Task No 10:-</h2>");
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

let userInput = prompt("Enter some text:");

let upperCase = userInput.toUpperCase();
document.write("User Input: " + userInput + "<br>Upper Case: " + upperCase);







document.write("<h2>Task No 11:-</h2>");
// 11. Write a program that takes user input. Convert and
// show the input in title case.

var inputForTitle = prompt("Enter some text:");

let titleCase = inputForTitle.charAt(0).toUpperCase() +inputForTitle.slice(1).toLowerCase();
document.write("User Input: " + titleCase + "<br> Title Case: " +titleCase);








document.write("<h2>Task No 12:-</h2>");
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


let num1 = 35.36;

let string = num1.toString();
let  result = string.replace('.', '');
document.write("Number: " + num1 + "<br>Result: " +result);








// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .



let userName = prompt("Enter your Input: ");
let invalidChars = [33, 44, 46, 64]; 

for (let i = 0; i < userName.length; i++) {
  let charCode = userName.charCodeAt(i);
  if (invalidChars.includes(charCode)) {
    alert("Please enter a valid username without special characters [@, ., !, ,]");
    break;
  }
}








document.write("<h2>Task No 14:-</h2>");
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

let userSearch = prompt("Enter an item to search:");
userSearch = userSearch.toLowerCase();
let findBakeryItems = bakeryItems.indexOf(userSearch);

if (findBakeryItems !== -1) {
  document.write(`${userSearch} is availabe at index ${findBakeryItems} in our bakery`);
} else {
  document.write(`We are sorry.${userSearch} is not availabel in our bakery`);
}









// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


var password = prompt("Enter your password: ");

var passwordLength = false;
var passwordChar = false;
var passwordInt = false;

for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    
    //For Checking if the character is an uppercase or lowercase letter
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        passwordChar = true;
    } 
    //For Checking if the character is a number
    else if (charCode >= 48 && charCode <= 57) {
        passwordInt = true;
    }
}

//For Check if the first character of the password is not a number
var passwordStart = !(password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57);

// Check if any of the validation conditions fail and display appropriate message
if (!passwordChar || !passwordInt || !passwordLength || !passwordStart) {
    alert("Invalid Password");
} 
// else
else {
    alert("Password Approved");
}








document.write("<h2>Task No 16:-</h2>");
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

let university = "University of Karachi";
let universityArray = university.split("");


for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}








document.write("<h2>Task No 17:-</h2>");
// 17. Write a program to display the last character of a user
// input.


let inputForLast = prompt("Enter a string:");

if (inputForLast) {
  document.write("User input : "+inputForLast+"<br>Last character of input is : "+inputForLast.slice(-1));
} else {
  document.write("You entered an empty string.");
}







document.write("<h2>Task No 18:-</h2>");
//18. You have a string “The quick brown fox jumps over the lazy dog”.
//Write a program to count number of occurrences of word “the” in given string.

var stringS = 'The quick brown fox jumps over the lazy dog';
stringS = stringS.toLowerCase();
var count = stringS.match(/the/g);
var length = count ? count.length : 0;

document.write('Text: ' + stringS + '<br>' + 'There are ' + length + ' occurrence(s) of the word "the"');
   