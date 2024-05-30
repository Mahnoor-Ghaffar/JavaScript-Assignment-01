// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

//Declaration
let multiDArr = [[],[],[]];

// multiDArr[0].push("HTML","CSS","Bootstrap");
// multiDArr[1].push("JS","Node.js","MongoDB");
// multiDArr[2].push("Express.js","React","TS");

//console.log(multiDArr);


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let matrix = [
    [0,1, 2, 3],
    [1,0,1,2],
    [2,1,0,1]
];

console.log(matrix);



document.write("<h2>Task No 3:-</h2>");
// 3. Write a program to print numeric counting from 1 to 10.

for (let i=1;i < 11; i++) {
    document.write(i+" ,")
}



document.write("<h2>Task No 4:-</h2>");
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let tableNum = parseFloat(prompt("Please enter any number to print multiplication table:",5));
let tableLength = parseFloat(prompt("Enter the length of the table:",10));

for (let i = 1; i <= tableLength; i++) {
    ans = tableNum * i;
    document.write(`${tableNum} x ${i} = ${ans} <br>`)
}



document.write("<h2>Task No 5:-</h2>");
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple", "banana", "mango", "orange","strawberry"];

for (let f = 0; f < fruits.length; f++) {
    document.write(`Element at index ${f} is ${fruits[f]} <br>`);
}



document.write("<h2>Task No 6:-</h2>");
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//Counting
document.write("<br><br>Counting<br><br>");
for (let i = 1; i < 16; i++) {
    document.write(i+", ");
}

// Reverse counting
document.write("<br><br>Reverse counting<br><br>");

for (let i = 10; i >= 1; i--) {
    document.write(i+", ");
}

//Even
document.write("<br><br>Even<br><br>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i+", ");
}

//Odd
document.write("<br><br>Odd<br><br>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i+", ");
}

// Series 2k to 20k
document.write("<br><br>Series<br><br>");
// for (let i = 2; i <= 20; i += 2) {
//     document.write(`${i}k, `);
// }

for (let i = 2000; i <= 20000; i+=2000) {
    document.write(i + ", ");
}



document.write("<h2>Task No 7:-</h2>");
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

//Taking input
let userInput = prompt("Enter an item to search:");


let search = ["cake", "apple pie", "cookie", "chips", "patties"];

userInput = userInput.toLowerCase();
let indexNO = search.indexOf(userInput);
if (indexNO !== -1) {
    document.write(`<br>${userInput} is available at index ${indexNO} in our bakery`);
} else {
    document.write(`<br>${userInput} is not found in the list.`)
}



document.write("<h2>Task No 8:-</h2>");
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let largestNo = [24, 53, 78, 91, 12];

document.write(`<br>Array Items : ${largestNo}`)
document.write("<br>The largest number is : "+Math.max(...largestNo));



document.write("<h2>Task No 9:-</h2>");
// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

let smallestNo = [24, 53, 78, 91, 12];

document.write(`<br>Array Items : ${smallestNo}`)
document.write("<br>The smallest number is : "+Math.min(...smallestNo));



document.write("<h2>Task No 10:-</h2>");
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.


for (let i = 5; i <= 100; i+=5) {
    document.write(i+" ,");
}