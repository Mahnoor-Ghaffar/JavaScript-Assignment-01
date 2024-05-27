/////////////////Task-no 01
console.log("Task no 1");


// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter.

//I have tried this q in another way

// Write a program that takes a character (number or string)
//Here, I'm trying to handle both strings and nuumber at once.


// var character = prompt("Enter a number or a string:");

// var number = parseFloat(character); 

// if (!isNaN(number)) {
//     console.log("You entered a number: " + number);
// } else if(isNaN(character)) {
//     if (character === character.toUpperCase()) {
//         console.log("You entered a string and the "+character + " is an uppercase letter.");
//     }else{
//         console.log("You entered a string and the "+character + " is an lower letter.");
//     }
// }


//Method No 02 solved with ASCII table
var character = prompt("Enter a number or a string: ");
var val = character.charCodeAt(0);

if(val >=65 && val <=90){
    console.log("You entered a string and the "+character + " is an uppercase letter.");
} else if(val >=97 && val <=122){
    console.log("You entered a string and the "+character + " is an lower letter.");
}
 else if(val >=48 && val <=57){
    console.log("You entered a number: " + number);
} else {
    console.log("Given input is not a number or a letter: " + number);
}



/////////////////Task-no 02
console.log("Task no 2");

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num_chk1 = +prompt("Please enter first number:");
var num_chk2 = +prompt("Please enter second number:");


if (num_chk1 > num_chk2) {
    console.log(num_chk1 + " is larger than " + num_chk2);
} else if (num_chk1 < num_chk2) {
    console.log(num_chk1 + " is Smaller than " +num_chk2);
} else {
    console.log("Both numbers are equal.");
}




/////////////////Task-no 03
console.log("Task no 3");

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

//getting number input
var number = +prompt("Enter a number:");

// Check if the number is positive, negative, or zero
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}




/////////////////Task-no 04
console.log("Task no 4");


// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise.


var vowel = prompt("Enter any character to check if it is a vowel or not.");

vowel = vowel.toLowerCase();

if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u') {
    console.log("The character "+vowel+" is a vowel = "+true);
} else {
    console.log("The character "+vowel+" is not a vowel = "+false);
}





/////////////////Task-no 05
console.log("Task no 5");

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


// Correct password stored in a variable
var correctPassword = "Password1234";

// Asking user to enter their password
var enteredPassword = prompt("Please enter your password:");


if (enteredPassword === null || enteredPassword === "") {
    console.log("Please enter your password.");
} else if(enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
   console.log("Incorrect password.");
}





/////////////////Task-no 06
console.log("Task no 6");

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
    console.log(greeting);
}





/////////////////Task-no 07
console.log("Task no 7");

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.

var time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm):");

// Check different cases using if, else if, and else statements
if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night!");
} else {
    console.log("Invalid time entered.");
}
