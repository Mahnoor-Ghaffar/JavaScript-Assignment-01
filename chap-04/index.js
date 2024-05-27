/////////////////Task-no 01

// 1. Declare 3 variables in one statement.

var variable1, variable2, variable3;




/////////////////Task-no 02

//2. Declare 5 legal & 5 illegal variable names.

//...........legal...............

// camelCase which is standard in JavaScript.
var decVar;

//Starting with a dollar sign is allowed.
var $abc;

// Starting with an underscore is acceptable in JavaScript.
var _abc;

//numbers after the first character which is legal in JavaScript variable names.

var abc23;

//underscore_case
var user_age = 30;

//.............illegal.............

//Cannot start with a number. 
//var 123abc;

// Cannot contain hyphens.
// var my-name;

//Reserved keyword in JavaScript and cannot be used as a variable name.
//var var;
//var function;

//cannot contains a space
//var my name;

//Variable names cannot start with any special character except for the ($,_) in JavaScript.
//var @abc; 


/////////////Task-no 03

//3. Display this in your browser

document.write(`<span style="font-size: 50px;color:blue;">Rules for naming JS variables</span><br>`)
document.write(`<br><span style="font-size: 30px;">1. Variable names can only contain <em style="color: blue;"> letters </em>,<em style="color: blue;"> Numbers</em>, <em style="color: blue;"> Underscores</em>, and <em style="color: blue;"> Dollar signs</em>. For example : $my_1stVariable </span>`)
document.write(`<br><br><span style="font-size: 30px;">Variables must begin with a <em style="color: blue;"> letter</em>, <em style="color: blue;"> underscore</em>, or <em style="color: blue;"> dollar sign</em>. For example $name, _name, or name. </span>`)
document.write(`<br><br><span style="font-size: 30px;">Variable names are case <em style="color: blue;"> sensitive</em>. </span>`)
document.write(`<br><br><span style="font-size: 30px;">Variable names should not be JS <em style="color: blue;"> keywords</em>. </span>`)