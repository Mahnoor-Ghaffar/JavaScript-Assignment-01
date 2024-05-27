
////////////////Task-no 01
document.write('<p style="font-size: 30px;">Task-no 01<p>');


// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 10;
var num2 = 5;

var result = num1 + num2;

document.write("Sum of "+num1+" and "+num2+" is "+result);







////////////////Task-no 02
document.write('<p style="font-size: 30px;">Task-no 02<p>')


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

//for subtraction
var result1 = num1 - num2;

document.write("<br> Subtraction of "+num1+" and "+num2+" is "+result1);


//for division
var result2 = num1 / num2;

document.write("<br><br> Division of "+num1+" and "+num2+" is "+result2);

//for multiplication
var result3 = num1 * num2;

document.write("<br><br> Multiplication of "+num1+" and "+num2+" is "+result3);

//modulus
var result4 = num1 % num2;

document.write("<br><br> The remainder of "+num1+"  divided by  "+num2+" is "+result4);






////////////////Task-no 03
document.write('<p style="font-size: 30px;">Task-no 03<p>')


//3. Do the following using JS Mathematic Expressions
// a. document.write("Value after variable declaration is: " + myVariable + "<br>");
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


//a. variable declaration
var num3;


//b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("<br><br> Value after variable declaration is: " + num3);


//c. Initialize the variable with some number.
var num3 = 8;


//d. Showing the value of variable in browser.
document.write("<br><br> Initial value: " + num3);


// e. Increment the variable.

num3++;


// f. value of variable after increment.
document.write("<br><br> Value after increment is: " + num3);


// g. Add 7 to the variable.

num3 += 7;


// h.Value of variable after addition.
document.write("<br><br> Value after adding 7 is: " + num3);


// i. Decrement the variable.
num3--;


// j. Show the value of variable after decrement.
document.write("<br><br> Value after decrement is: " + num3);


// k. Show the remainder after dividing the variable’s value
// by 3.
var remai = num3 % 3;


// l. Output :
document.write("<br><br> The remainder is: " + remai);








////////////////Task-no 04
document.write('<p style="font-size: 30px;">Task-no 04<p>')

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


var ticketPrice = 600;

var tickets = 5;
var totalPrice = ticketPrice * tickets;

document.write("<br><br> Total cost to buy "+tickets +" tickets to a movie is "+ totalPrice + " PKR");







////////////////Task-no 05
document.write('<p style="font-size: 30px;">Task-no 05<p>')

// 5. Write a script to display multiplication table of any
// number in your browser.


//solved with loop
// var table8 = 8;

//loop for printing table
// var table = "";
// for (var i = 1; i <= 10; i++) {
//     table += `${table8} x ${i} = ${table8 * i}<br>`;
// }


// document.write(`<h3>Multiplication Table of ${table8}</h3>`);
// document.write(table);






//Defineug number
var tableOf_8 = 8;


document.write(`
${tableOf_8} x 1 = ${tableOf_8 * 1}<br>
${tableOf_8} x 2 = ${tableOf_8 * 2}<br>
${tableOf_8} x 3 = ${tableOf_8 * 3}<br>
${tableOf_8} x 4 = ${tableOf_8 * 4}<br>
${tableOf_8} x 5 = ${tableOf_8 * 5}<br>
${tableOf_8} x 6 = ${tableOf_8 * 6}<br>
${tableOf_8} x 7 = ${tableOf_8 * 7}<br>
${tableOf_8} x 8 = ${tableOf_8 * 8}<br>
${tableOf_8} x 9 = ${tableOf_8 * 9}<br>
${tableOf_8} x 10 = ${tableOf_8 * 10}<br>
`);






////////////////Task-no 06
document.write('<p style="font-size: 30px;">Task-no 06<p>')


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// a. Store a Celsius temperature into a variable
let celsiusTemperature = 30;

// b. Convert Celsius to Fahrenheit
let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;

// Output the conversion result
document.write("<br></br> "+celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// c. Store a Fahrenheit temperature into a variable
let fahrenheitTemp = 70;

// d. Convert Fahrenheit to Celsius
let celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

// Output the conversion result
document.write("<br><br> "+ fahrenheitTemp + "°F is " + celsiusTemp + "°C");







////////////////Task-no 07
document.write('<p style="font-size: 30px;">Task-no 07<p>')


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges


// Store the prices of item 1
var item_1_Price = 1000;

// Store the prices of item 2
var item_2_Price = 800; 

//Ordered quantities of item 1
var item_1_quatity = 2;

//Ordered quantities of item 2
var item_2_quatity = 3;

//Shipping charges
var shippingCharges = 100; // PKR

// Calculate the total price of items
var total_Item_Price1 = item_1_Price * item_1_quatity;
var total_Item_Price2 = item_2_Price * item_2_quatity;

// Calculate the total cost including shipping charges
let totalCost = total_Item_Price1 + total_Item_Price2 + shippingCharges;

//Receipt
document.write('<h1 style="color:blue;">Shopping Cart </h1>');

document.write("<br><br> Price of item 1 is: " + item_1_Price + " PKR");

document.write("<br><br> Ordered quantity of item 1 is: " + item_1_quatity );

document.write("<br><br> Price of item 2 is: " + item_2_Price + " PKR");

document.write("<br><br> Ordered quantity of item 2 is: " + item_2_quatity);

document.write("<br><br> Shipping charges: " + shippingCharges + " PKR");

document.write("<br><br> Total Cost of your order is: " + totalCost + " PKR</h3>");








////////////////Task-no 08

document.write('<p style="font-size: 30px;">Task-no 08<p>')

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser.


// Store total marks and marks obtained by the student
var total_Marks = 550;
var marks_Obtained = 500;

// Compute the percentage
var percentage = (marks_Obtained / total_Marks) * 100;

// Display the result in the browser
document.write("<h1>Marks Sheet</h1>");

document.write("<br> Total Marks: " + total_Marks);
document.write("<br><br> Marks Obtained: " + marks_Obtained);
document.write("<br><br> Percentage: " + percentage.toFixed(2) + "%");






////////////////Task-no 09
document.write('<p style="font-size: 30px;">Task-no 09<p>')

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


let usDollars = 10;
let saudiRiyals = 25;

// Exchange rates
let usdToPkr = 104.80;
let srToPkr = 28;

// Convert the total currency to Pakistani Rupees in a single expression
//let totalPkr = (usDollars * usdToPkr) + (saudiRiyals * sarToPkrRate);

// Display the result in the browser
document.write("<h1>Currency Conversion</h1>");

document.write("<br> 10 US Dollars =  " + (usDollars * usdToPkr) + "  Pakistani Rupees and  25 Saudi Riyals =  " + (saudiRiyals * srToPkr) +"  Pakistani Rupees");






////////////////Task-no 10
document.write('<p style="font-size: 30px;">Task-no 10<p>')


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Initialize a variable with some number
var number = 10;

// Perform arithmetic operations in a single expression
var totalR = (((number + 5) * 10) / 2);

// Display the result
document.write("Result of arithmetic sequence: "+ totalR);







////////////////Task-no 11
document.write('<p style="font-size: 30px;">Task-no 11<p>')


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.


// Store the current year in a variable...
var currentYear =2024;

// Store their birth year in a variable........
var birthYear = 1990;

// Calculate their possible ages based on the stored values
var possibleAge1 = currentYear - birthYear;
var possibleAge2 = possibleAge1 + 1; 


document.write("<br><br>Current Year "+currentYear + "<br><br> Birth Year "+ birthYear)
// Display the calculated ages
document.write("<br><br> Possible ages based on stored values: "+ possibleAge1 + " or " + possibleAge2);






////////////////Task-no 12
document.write('<p style="font-size: 30px;">Task-no 12<p>')

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// Store the radius of the circle in a variable
var radius = 5; 

// Calculate properties of the circle
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius;

// Display the calculated properties

document.write('<h1>The Geometrizer</h1>')

document.write("<br>Radius of a circle: ", radius);
document.write("<br><br> The circumference is: ", circumference);
document.write("<br><br> The area is : ", area);






////////////////Task-no 13
document.write('<p style="font-size: 30px;">Task-no 13<p>')

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// Store your favorite snack into a variable
var favoriteSnack = "chocolate bars";

// Store your current age into a variable
var currentAge = 25;

// Store a maximum age into a variable
var maxAge = 80;

// Store an estimated amount per day (as a number)
var amountPerDay = 1; 

// Calculate how many units you would need for the rest of your life
var remainYears = maxAge - currentAge;
var totalSnacks = amountPerDay * remainYears * 365; // Assuming 365 days in a year

// Output 
document.write("<br> favoriteSnack: "+ favoriteSnack);
document.write("<br><br> Current Age: "+ currentAge);
document.write("<br><br> Estimated Maximum Age: "+ maxAge);
document.write("<br><br> Amount Of Snacks Per Day: "+amountPerDay );
document.write("<br><br> You will need "+"  " + totalSnacks + "  chocolate bars to last you until the ripe old age of  " + maxAge);
