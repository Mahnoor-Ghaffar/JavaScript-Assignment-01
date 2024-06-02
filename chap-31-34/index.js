document.write("<h2>Task No 1:-</h2>");
// 1. Write a program that displays current date and time in
// your browser.

let date=new Date();
document.write(date);






document.write("<h2>Task No 2:-</h2>");
// 2. Write a program that alerts the current month in words.
// For example December.

let date2=new Date();
let month=date.getMonth();

monthsList = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
document.write('Current Month :'+monthsList[month]);






document.write("<h2>Task No 3:-</h2>");
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

let daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date3 = new Date();
let getDay = date.getDay();
alert(`Today is ${daysName[getDay]}`);




document.write("<h2>Task No 4:-</h2>");
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

let daysName1 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let date4 = new Date();
let getDay1 = date.getDay();
let currentDay = daysName1[getDay1];
console.log(currentDay);

switch (currentDay) {
    case Sunday:
    case Saturday:
        alert ("It's Fun day");
        break;
    default:
        alert("Today is " + currentDay)
}