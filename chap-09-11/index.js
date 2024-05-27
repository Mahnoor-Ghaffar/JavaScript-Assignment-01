/////////////////Task-no 01
document.write('<p style="font-size: 30px;">Task-no 01<p>');
document.write('<p>check output in alert box<p>');


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”


// Prompt the user to enter the city name
var cityName = prompt("Enter the city name:");

// Check if the entered city name is "Karachi"
if (cityName.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome!");
}





/////////////////Task-no 02
document.write('<p style="font-size: 30px;">Task-no 02<p>');
document.write('<p>check output in alert box<p>');


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

//Take input from user.
var gender = prompt("Please enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Invalid input. Please enter either 'male' or 'female'.");
}






/////////////////Task-no 03
document.write('<p style="font-size: 30px;">Task-no 03<p>');

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// Get input color from the user
let color = prompt("Enter the color of the road traffic signal (red, yellow, or green):");
let message;

//Taking 
switch (color.toLowerCase()) {
    case 'red':
        message = "Stop! The traffic signal is red.";
        break;
    case 'yellow':
        message = "Prepare to stop or clear the intersection. The traffic signal is yellow.";
        break;
    case 'green':
        message = "You can go. The traffic signal is green.";
        break;
    default:
        message = "Invalid color entered. Please enter red, yellow, or green.";
}

document.write("<table>");
document.write("<thead style='background-color: lightblue;'>");
document.write("<tr><th>Color</th><th>Message</th></tr>");
document.write("</thead>");
document.write("<tbody>");
document.write(`<tr><td>${color}</td><td>${message}</td></tr>`);
document.write("</tbody>");
document.write("</table>");






/////////////////Task-no 04
document.write('<p style="font-size: 30px;">Task-no 04<p>');

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    
//Taking input
var remainingFuel = +prompt("Enter the remaining fuel in your car (in litres):");

//using if else statement
if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car.");
} else {
    document.write("Your fuel level is sufficient.");
}





/////////////////Task-no 05
document.write('<p style="font-size: 30px;">Task-no 05<p>');
document.write('<p>check output in alert box<p>');


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }          //true

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");     //false
}         


var c = 12;
if (c++ === 13){
alert("condition 1 is true");           //false
}                 

if (c === 13){
 alert("condition 2 is true");           //true
}
if (++c < 14){
 alert("condition 3 is true");           //false
}
if(c === 14){
 alert("condition 4 is true");           //true
}
    



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");                //true
}

if (true){
 alert("True");                          //true
}
if (false){
 alert("False");                          //false
}


if("car" < "cat"){
 alert("car is smaller than cat");          //true
}




/////////////////Task-no 06
document.write('<p style="font-size: 30px;">Task-no 06<p>');

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade 


var marksObtained = +prompt("Enter Obtained Mraks");
var totalMarks = +prompt("Enter Total Mraks");

var percentage = marksObtained / totalMarks * 100;
percentage = percentage.toFixed(2)

document.write("<br><br> Total Marks : "+totalMarks);
document.write("<br><br> Marks Obtained : "+marksObtained);
document.write("<br><br> Percentage : "+percentage+"%");



if(percentage >= 80){
    document.write("<br><br> Grade : A-One <br><br> Excellent");
}
else if(percentage >= 70){
    document.write("<br><br> Grade : A <br><br> Good");
}
else if(percentage >= 60){
    document.write("<br><br> Grade : B <br><br> You need to improve");
}
else{
    document.write("<br><br> Fail <br><br> Sorry");
}








/////////////////Task-no 07
document.write('<p style="font-size: 30px;">Task-no 07<p>');

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Storing a secret number 
const secretNumber = 9;

 // Prompt the user to guess the number
const userGuess = +prompt("Guess the secret number (between 1 and 10):");


// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer"); 
} else if (userGuess + 1 === secretNumber) {
    document.write("Close enough to the correct answer");
}else {
    document.write("Sorry, incorrect guess. The correct answer was: " + secretNumber);
}





/////////////////Task-no 08
document.write('<p style="font-size: 30px;">Task-no 08<p>');


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


const number = prompt("Enter a number  to check whether the given number is divisible by 3:"); 

if (number % 3 === 0) {
    document.write(`${number} is divisible by 3.`); 
} else {
    document.write(`${number} is not divisible by 3.`);
}





/////////////////Task-no 09
document.write('<p style="font-size: 30px;">Task-no 09<p>');

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// getting number from user
const numberForChk = +prompt("Enter a number to check the number is even or odd:"); 


if (numberForChk % 2 === 0) {
    document.write(`${numberForChk} is an even number.`);
} else {
    document.write(`${numberForChk} is an odd number.`); 
}





/////////////////Task-no 10
document.write('<p style="font-size: 30px;">Task-no 10<p>');

// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
const temperature = +prompt("Enter the temperature:"); 

if (temperature > 40) {
    document.write("It's too hot outside."); 
} else if (temperature > 30) {
    document.write("The Weather today is Normal."); 
} else if (temperature > 20) {
    document.write("Today’s Weather is cool.");
} else if (temperature > 10) {
    document.write("OMG! Today’s weather is so Cool.");
} else {
    document.write("It's freezing outside."); 
}







/////////////////Task-no 11
document.write('<p style="font-size: 30px;">Task-no 11<p>');

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

//Taking input
var user_Input1_For_cal = +prompt("Enter your first number");
var user_Input2_For_cal = +prompt("Enter your second number");
var operator = prompt("Enter any operator(+, -, *, /, %)");

//Performing operation
var addition = user_Input1_For_cal + user_Input2_For_cal;
var subtraction = user_Input1_For_cal - user_Input2_For_cal;
var multiplication = user_Input1_For_cal * user_Input2_For_cal;
var division = user_Input1_For_cal / user_Input2_For_cal;
var modulos = user_Input1_For_cal % user_Input2_For_cal;

//if statements
if(operator == "+") {
    document.write(`Sum of  ${user_Input1_For_cal} and ${user_Input2_For_cal} is = ${addition}`)
}
if(operator == "-") {
    document.write(`Subtraction of  ${user_Input1_For_cal} and ${user_Input2_For_cal} is = ${subtraction}`)
}
if(operator == "*") {
    document.write(`Multiplication of  ${user_Input1_For_cal} and ${user_Input2_For_cal} is = ${multiplication}`)
}
if(operator == "/") {
    document.write(`Division of  ${user_Input1_For_cal} and ${user_Input2_For_cal} is = ${division}`)
}
if(operator == "%") {
    document.write(`Remainder of  ${user_Input1_For_cal} and ${user_Input2_For_cal} is  = ${modulos}`)
}
else{
    document.write("Invalid operator")
}