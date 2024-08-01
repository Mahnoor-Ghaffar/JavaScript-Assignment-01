console.log("Task No 01");
//////////////////////////Q no 1
// Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.


function reversesArray(arr=[1,2,3,4,5]){
    return arr.reverse()
    }
    
    
    let array= [100,200,300,400,500,600,700,800];
    console.log(reversesArray())
    console.log("Reversed Array = "+reversesArray(array));
    
    
    
    console.log("Task No 02");
    /////////////////////////////////Q no 2
    // 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
    // function that takes an array as an input and returns an array. But if all goes according
    // to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
    // useful when combing through data and looking for clever ways to eliminate “bad
    // data.”
    function negNumber(arr) {
        let sepr= arr.filter(num => num >= 0);
        return sepr;
    }
    
    
    let numBers = [1, -2, 3, -4, 5, -6, 7];
    console.log("After filtering out negative numbers:", negNumber(numBers));
    
    
    
    console.log("Task No 03");

    //////////////////////////////////Q no 3
    // Return the number of vowels in a string. Create a function that’ll return an integer of
    // the number of vowels found in a string. This is a great way to practice determining the
    // features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
    // to determine what datasets (or just strings) consist of.
    function countVowels(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        
        let count = 0;
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        
       
        return count;
    }
    
    
    let str = "Hello World";
    console.log("Number of vowels in the string:", +countVowels(str));
    
    
    
    
    
    
    
    console.log("Task No 04");
    //////////////////////////////Q no 4
    // Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
    // sequences of characters that reads the same forward and backward (like the words
    // “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
    // and returns a Boolean indicating whether the string is a palindrome. Test your
    // function with different strings to ensure it works correctly.
    function isPalindrome(str) {
       let cleanedStr = '';
        for (let char of str) {
            if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                cleanedStr += char.toLowerCase();
            }
        }
    
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedStr;
    }

    console.log("Palindrome check is",isPalindrome("SJDJ"));
    console.log("Palindrome check is",isPalindrome("kayak"));
    
    
    
    
    
    
    
    
    console.log("Task No 05");
    /////////////////////Q no 5
    // Write a JavaScript program to check whether two given integer values are in the
    // range 50 - 99 (inclusive). Return true if either of them falls within the range.
    function range(value) {
        return value >= 50 && value <= 99;
    }
    
    function checkRange(num1, num2) {
        return range(num1) || range(num2);
    }
    
    console.log("Checking if either 55 or 100 is within the range 50-99:",checkRange(55, 100)); 
    
    
    
    
    
    
    
    console.log("Task No 06");
    ////////////////////////////Q no 6
    //  6. Write a JavaScript program to get the minimum value of an array, after mapping each
    // element to a value using the provided function.
    function getMinValue(arr) {
        const mappedArray = arr.map(num => num * 2);
        const minValue = Math.min(...mappedArray);
        return minValue;
    }
    
    const numbers = [1, 2, 3, 4];
    const result = getMinValue(numbers);
    console.log("The minimum value after mapping each element is = ",result);
    
      
    
    
    
    console.log("Task No 07");
    ////////////////////////////////Q no 7
    // 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
    // characters of a given original string. The string length must be 3 and above.
    
    function StingC(originalString) {
        
        if (originalString.length >= 3) {
            let Chars = originalString.slice(-3);
            let updatedS = Chars.repeat(4);
            
            return updatedS;
        } else {
            return '';
        }
    }
    
    console.log("updated string of 4 copies of the last 3 characters is =",StingC('abcdef')); 
    
    
    
    
    
    
    console.log("Task No 08");
    ///////////Q no 8
    // 8. Write a JavaScript program to find the types of a given angle.
    // Acute angle: An angle between 0 and 90 degrees.
    // Right angle: An 90 degree angle.
    // Obtuse angle: An angle between 90 and 180 degrees.
    // Straight angle: A 180 degree angle.
    
    
    
    function angleType(angle) {
        if (angle > 0 && angle < 90) {
            return `${angle} degrees is an Acute angle.`;
        } else if (angle === 90) {
            return "90 degrees is a Right angle.";
        } else if (angle > 90 && angle < 180) {
            return `${angle} degrees is an Obtuse angle.`;
        } else if (angle === 180) {
            return "180 degrees is a Straight angle.";
        } else {
            return "Invalid angle. Angle must be between 0 and 180 degrees.";
        }
    }
    
    console.log(angleType(50)); 
    
    
    
    
    
    
    console.log("Task No 09");
    ////////////////////////////////Q no 9
    // 9. Write a JavaScript program to find the smallest round number not less than a given
    // value. Note: A round number is informally considered to be an integer that ends with
    // one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
    function smallestRN(value) {
            if (value % 10 === 0) {
                return value;
            } else {
                return Math.ceil(value / 10) * 10;
            }
    }

    const num = 592;
    console.log(`The smallest round number of ${num} is ${smallestRN(num)}.`); 
    
    
    
    
    console.log("Task No 10");
    //10. Write a JavaScript program to find the index of an array item in a for loop.
    
    function findIndex(arr, item) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1; 
    }
    
    
    let arr = ["Apple","Mango"]
    console.log("Find index",findIndex(arr,"Mango"))
    