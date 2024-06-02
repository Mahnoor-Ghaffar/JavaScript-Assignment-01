document.write("<h2>Task No 1:-</h2>");
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number.

let positiveInt = Number(prompt("Please enter a positive integer:"));

let roundOf = Math.round(positiveInt);
let mFloor = Math.floor(positiveInt);
let mCeil = Math.ceil(positiveInt);

document.write('Number :'+positiveInt+'<br>');
document.write('Round off value :'+roundOf+'<br>');
document.write('Floor value :'+mFloor+'<br>');
document.write('ceil value :'+mCeil+'<br>');






document.write("<h2>Task No 2:-</h2>");
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number.

let floatingNum = Number(prompt("Please enter a positive integer:"));

let roundOfN = Math.round(positiveInt);
let mFloorN = Math.floor(positiveInt);
let mCeilN = Math.ceil(positiveInt);

document.write('Number :'+positiveInt+'<br>');
document.write('Round off value :'+roundOfN+'<br>');
document.write('Floor value :'+mFloorN+'<br>');
document.write('ceil value :'+mCeilN+'<br>');











document.write("<h2>Task No 3:-</h2>");
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5.

var num = Number(prompt('Enter number :'));
var absoluteVal =Math.abs(num);
document.write('The absolute value of '+num+'  is '+absoluteVal);







document.write("<h2>Task No 4:-</h2>");
// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 

let diceValue = Math.floor(Math.random() * 6) + 1;
document.write('Random die value : '+diceValue);




document.write("<h2>Task No 5:-</h2>");
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser.

let coinValue = Math.floor(Math.random() * 2) + 1;
document.write(coinValue);

if(coinValue<2){
    document.write(coinValue+'<br>'+' random coin value : Tails')
}
else{
    document.write(coinValue+'<br>'+' random coin value : Heads')
}






document.write("<h2>Task No 6:-</h2>");
// 6. Write a program that shows a random number between 1
// and 100 in your browser.


let random = Math.floor(Math.random() * 100) + 1;
document.write('random number between 1 and 100:'+random);






document.write("<h2>Task No 7:-</h2>");
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


var weight=Number(prompt('Enter your weight in kilogramas'));
document.write('The weight of userr is '+weight.toFixed(1)+' kilograms');





document.write("<h2>Task No 8:-</h2>");
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let randomNo = Math.floor(Math.random() * 10) + 1;
let numberGuess = Number(prompt("Please enter a number between 1 and 10:"));


if (randomNo === numberGuess) {
    alert('Congratulations  you entered the same number')
} 
else if (numberGuess === isNaN) {
    alert("Please enter a valid number between 1 and 10.")
}
else {
    alert(`Sorry, the secret number was ${randomNo}. Better luck next time!`)
}