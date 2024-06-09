
// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = [];






// 2. Declare an empty array using JS object notation to store
// student names in future.

var studentNames2 = new Array();





//3. Declare and initialize a strings array.
var stringsArray = ["Mahnoor", "Maryam", "Aqsa", "Faryal"];





//4. Declare and initialize a numbers array.
var numbersArray = [1, 2, 3, 4, 5];





// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, true, false];





// 6. Declare and initialize a mixed array.
var mixedArray = ["Alena", 42, true,undefined];





document.write("<h2>Task No 7:-</h2>");
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD).

// Declare and initialized the array
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

//print List Method 1

document.write("<h2>Qualifications:</h2>");
for (var i = 0; i < qualifications.length; i++) {
    document.write(qualifications[i]+ "<br>");
}


//print List Method 2
// document.write(qualifications[0]+ "<br>");
// document.write(qualifications[1]+ "<br>");
// document.write(qualifications[2]+ "<br>");
// document.write(qualifications[3]+ "<br>");
// document.write(qualifications[4]+ "<br>");
// document.write(qualifications[5]+ "<br>");
// document.write(qualifications[6])+ "<br>";
// document.write(qualifications[7]+ "<br>");




document.write("<h2>Task No 8:-</h2>");
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, 

// student names
var studentNames = ["Maryam", "Aqsa", "Faryal"];

//scores of students
var scores = [430, 380, 450];

//PERCENTAGE
var percentage1 = (scores[0] / 500) * 100;
var percentage2 = (scores[1] / 500) * 100;
var percentage3 = (scores[2] / 500) * 100;

document.write("<br> Scored of " +studentNames[0] +" is "+ scores[0] + " Percentage: " + percentage1.toFixed(2) + "%"+ "<br>");
document.write("Scored of " +studentNames[1] +" is "+ scores[1] + " Percentage: " + percentage2.toFixed(2) + "%"+ "<br>");
document.write("Scored of " +studentNames[2] +" is "+ scores[2] + " Percentage: " + percentage3.toFixed(2) + "%"+ "<br>");







document.write("<h2>Task No 9:-</h2>");
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// Array with color names
var colors = ["Red", "Green", "Blue"];

document.write('<br><br><b>Array Elements:</b> ' + colors + "<br><br>");


// Taking color to add to the beginning
var colorToAddStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddStart);
//Updated array
document.write("<b>After adding color to the beginning:</b> " + colors + "<br><br>");


// Taking color to add to the end
var colorToAddEnd = prompt("Enter a color to add to the end:");
// Add color to the end of the array
colors.push(colorToAddEnd);
// Updated array
document.write("<b>After adding color to the end:</b> " + colors + "<br><br>");


// Add two more colors to the beginning of the array
colors.unshift("Purple", "Yellow");
//Updated array
document.write("<b>After adding two more colors to the beginning:</b> " + colors + "<br><br>");

// Delete the first color
colors.shift();
//Updated array
document.write("<b>After deleting the first color:</b> " + colors + "<br><br>");

// Delete the last color
colors.pop();
// Updated array
document.write("<b>After deleting the last color:</b> " + colors + "<br><br>");


// Asking the user at which index to add a color and the color name
var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
var colorToAdd = prompt("Enter the color to add:");
// Add color to the desired position/index
colors.splice(indexToAdd, 0, colorToAdd);
//updated array
document.write("<b>After adding a color at index " + indexToAdd + ":</b> " + colors + "<br><br>");

// Ask the user at which index to delete color(s) and how many colors to delete
var indexToDelete = parseInt(prompt("Enter the index to delete color(s) from:"));
var deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
// Removing the specified number of colors
colors.splice(indexToDelete, deleteCount);
//updated array
document.write("<b>After deleting " + deleteCount + " color(s) from index " + indexToDelete + ":</b> " + colors + "<br><br>");




document.write("<h2>Task No 10:-</h2>");
// 10. Write a program to store student scores in an array &
// sort the array in </b> using Array’s sort
// method.

//student scores array
var studentScores = [87, 65, 92, 78, 88, 70, 95, 82, 75, 90];

// Sort scores in ascending order by using sort method
studentScores.sort((a, b) => a - b);

document.write("<b>Array in Ascending order</b> : "+studentScores +"<br><br>");





document.write("<h2>Task No 11:-</h2>");
// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array

// city names Array
var cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];


var selectedCities = cities.slice(1, 4);

// Print both arrays
document.write("<b>Cities Orignal array: </b>"+cities);
//copy
document.write("<br><b>Selected Cities array copy: </b>"+ selectedCities);



document.write("<h2>Task No 12:-</h2>");
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

document.write("<br><br><b> Array: </b>"+ arr+"<br><b> String: </b>"+singleString);




document.write("<h2>Task No 13:-</h2>");
document.write("<h3>First In First Out:-</h3>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var fifoArr = [];

fifoArr.unshift("Keyboard");
fifoArr.unshift("Mouse");
fifoArr.unshift("Printer");
fifoArr.unshift("Monitor");

document.write("<br>"+fifoArr.shift() +"<br>Out"); 
document.write("<br>"+fifoArr.shift() +"<br>Out"); 
document.write("<br>"+fifoArr.shift() +"<br>Out"); 
document.write("<br>"+fifoArr.shift() +"<br>Out"); 




document.write("<h2>Task No 14:-</h2>");
document.write("<h3>Last InFirst Out:-</h3>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var fifoArr2 = [];

fifoArr2.unshift("Keyboard");
fifoArr2.unshift("Mouse");
fifoArr2.unshift("Printer");
fifoArr2.unshift("Monitor");

document.write("<br>"+fifoArr2.pop() +"<br>Out :"); 
document.write("<br>"+fifoArr2.pop() +"<br>Out :"); 
document.write("<br>"+fifoArr2.pop() +"<br>Out :"); 
document.write("<br>"+fifoArr2.pop() +"<br>Out :"); 



document.write("<h2>Task No 15:-</h2>");
// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// Array 
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write(`<option value="${phoneManufacturers[i]}"> ${phoneManufacturers[i]}</option>`)
}

document.write("</select>");

 document.write("<br><br><br><br><br><br><br><br><br><br><br><br>");