/////////////////Task-no 01

//1. Declare a variable called age & assign to it your age. Show
//your age in an alert box.

var age = 22;

alert("I'm " +age+" years old");



/////////////////Task-no 02

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visit = 14;

alert("You have visited this site "+visit+" times");





/////////////////Task-no 03

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var myBirthYear = 2001;

document.write(`<span style="font-size: 24px;">My birth year is ${myBirthYear}<br> <br> Data type of my declared variable is number <span>`);

/////////////////Task-no 04

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”


var visitorName = "Miss Tayyaba";
var productTitle = "T-shirt";
var quantity = 3;

var message5 = `<br><br> ${visitorName} ordered ${quantity} ${productTitle}(s) on Mahnoor's Clothing store.`;

document.write(message5);


