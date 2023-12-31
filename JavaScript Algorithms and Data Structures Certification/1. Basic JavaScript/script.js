'use strict';

////////////////////////////////////////
// Using Better Comments Extension - Better Comments Extension Legend:
//  * Better Comments Extension Legend
//  ? Better Comments Extension Legend
//  ! Better Comments Extension Legend
//  todo: Better Comments Extension Legend
/** 
@param MyParam the parameter for this method
*/
////////////////////////////////////////

/*
! Basic JavaScript Course Curriculum
"JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.

In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more."
*/

////////////////////////////////////////
//  ? Comment Your JavaScript Code
// This is an in-line comment.

/* This is a
multi-line comment */
////////////////////////////////////////

////////////////////////////////////////
//  ? Declare JavaScript Variables
// var myName;
////////////////////////////////////////

////////////////////////////////////////
//  ? Storing Values with the Assignment Operator
// Setup
// var a;
// // Only change code below this line
// a = 7;
////////////////////////////////////////

////////////////////////////////////////
//  ? Assigning the Value of One Variable to Another
// Setup
// var a;
// a = 7;
// var b;
// // Only change code below this line
// b = a;
////////////////////////////////////////

////////////////////////////////////////
//  ? Initializing Variables with the Assignment Operator
// var a = 9;
////////////////////////////////////////

////////////////////////////////////////
//  ? Declare String Variables
// var myFirstName = 'Lorem';
// var myLastName = 'Ipsum';
////////////////////////////////////////

////////////////////////////////////////
//  ? Understanding Uninitialized Variables
// Only change code below this line
// var a = 5;
// var b = 10;
// var c = 'I am a';
// // Only change code above this line
// a = a + 1;
// b = b + 5;
// c = c + ' String!';
////////////////////////////////////////

////////////////////////////////////////
//  ? Understanding Case Sensitivity in Variables
// Variable declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;
// // Variable assignments
// studlyCapVar = 10;
// properCamelCase = 'A String';
// titleCaseOver = 9000;
////////////////////////////////////////

////////////////////////////////////////
//  ? Explore Differences Between the var and let Keywords
// let catName;
// let quote;
// let catSound;
// function catTalk() {
//   'use strict';

//   catName = 'Oliver';
//   catSound = 'Meow!';
//   quote = catName + ' says ' + catSound;
// }
// catTalk();
////////////////////////////////////////

////////////////////////////////////////
//  ? Declare a Read-Only Variable with the const Keyword
// const FCC = 'freeCodeCamp'; // Change this line
// let fact = 'is cool!'; // Change this line
// fact = 'is awesome!';
// console.log(FCC, fact); // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Add Two Numbers with JavaScript
// const sum = 10 + 10;
////////////////////////////////////////

////////////////////////////////////////
//  ? Subtract One Number from Another with JavaScript
// const difference = 45 - 33;
////////////////////////////////////////

////////////////////////////////////////
//  ? Multiply Two Numbers with JavaScript
// const product = 8 * 10;
////////////////////////////////////////

////////////////////////////////////////
//  ? Divide One Number by Another with JavaScript
// const quotient = 66 / 33;
////////////////////////////////////////

////////////////////////////////////////
//  ? Increment a Number with JavaScript
// let myVar = 87;
// Only change code below this line
// myVar++;
////////////////////////////////////////

////////////////////////////////////////
//  ? Decrement a Number with JavaScript
// let myVar = 11;
// // Only change code below this line
// myVar--;
////////////////////////////////////////

////////////////////////////////////////
//  ? Create Decimal Numbers with JavaScript
// const ourDecimal = 5.7;
// // Only change code below this line
// const myDecimal = 2.22;
////////////////////////////////////////

////////////////////////////////////////
//  ? Multiply Two Decimals with JavaScript
// const product = 2.0 * 2.5;
////////////////////////////////////////

////////////////////////////////////////
//  ? Divide One Decimal by Another with JavaScript
// const quotient = 4.4 / 2.0; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Finding a Remainder in JavaScript
// const remainder = 11 % 3;
////////////////////////////////////////

////////////////////////////////////////
//  ? Compound Assignment With Augmented Addition
// let a = 3;
// let b = 17;
// let c = 12;
// // Only change code below this line
// a += 12;
// b += 9;
// c += 7;
////////////////////////////////////////

////////////////////////////////////////
//  ? Compound Assignment With Augmented Subtraction
// let a = 11;
// let b = 9;
// let c = 3;
// // Only change code below this line
// a -= 6;
// b -= 15;
// c -= 1;
////////////////////////////////////////

////////////////////////////////////////
//  ? Compound Assignment With Augmented Multiplication
// let a = 5;
// let b = 12;
// let c = 4.6;
// // Only change code below this line
// a *= 5;
// b *= 3;
// c *= 10;
////////////////////////////////////////

////////////////////////////////////////
//  ? Compound Assignment With Augmented Division
// let a = 48;
// let b = 108;
// let c = 33;
// // Only change code below this line
// a /= 12;
// b /= 4;
// c /= 11;
////////////////////////////////////////

////////////////////////////////////////
//  ? Escaping Literal Quotes in Strings
// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Quoting Strings with Single Quotes
// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
////////////////////////////////////////

////////////////////////////////////////
//  ? Escape Sequences in Strings
// const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine'; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Concatenating Strings with Plus Operator
// const myStr = 'This is the start. ' + 'This is the end.'; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Concatenating Strings with the Plus Equals Operator
// let myStr = 'This is the first sentence. ';
// myStr += 'This is the second sentence.';
////////////////////////////////////////

////////////////////////////////////////
//  ? Constructing Strings with Variables
// Only change code below this line
// const myName = 'Radu';
// const myStr = 'My name is ' + myName + ' and I am well!';
////////////////////////////////////////

////////////////////////////////////////
//  ? Appending Variables to Strings
// Change code below this line
// const someAdjective = 'lorem ipsum';
// let myStr = 'Learning to code is ';
// myStr += someAdjective;
////////////////////////////////////////

////////////////////////////////////////
//  ? Find the Length of a String
// Setup
// let lastNameLength = 0;
// const lastName = 'Lovelace';
// // Only change code below this line
// lastNameLength = lastName.length;
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Bracket Notation to Find the First Character in a String
// // Setup
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";
// // Only change code below this line
// firstLetterOfLastName = lastName[0]; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Understand String Immutability
// // Setup
// let myStr = "Jello World";
// // Only change code below this line
// myStr = "Hello World"; // Change this line
// // Only change code above this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Bracket Notation to Find the Nth Character in a String
// // Setup
// const lastName = "Lovelace";
// // Only change code below this line
// const thirdLetterOfLastName = lastName[2]; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Bracket Notation to Find the Last Character in a String
// // Setup
// const lastName = 'Lovelace';
// // Only change code below this line
// const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Bracket Notation to Find the Nth-to-Last Character in a String
// // Setup
// const lastName = "Lovelace";
// // Only change code below this line
// const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Word Blanks
// const myNoun = 'dog';
// const myAdjective = 'big';
// const myVerb = 'ran';
// const myAdverb = 'quickly';
// // Only change code below this line
// const wordBlanks =
//   'My ' + myAdjective + ' ' + myNoun + ' ' + ' ' + myVerb + ' ' + myAdverb; // Change this line
// // Only change code above this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
// const myArray = ['lorem', 123];
////////////////////////////////////////

////////////////////////////////////////
//  ? Nest one Array within Another Array
// Only change code below this line
// const myArray = [['lorem', 123], 456, 'ipsum'];
////////////////////////////////////////

////////////////////////////////////////
//  ? Access Array Data with Indexes
// const myArray = [50, 60, 70];
// const myData = myArray[0];
////////////////////////////////////////

////////////////////////////////////////
//  ? Modify Array Data With Indexes
// // Setup
// const myArray = [18, 64, 99];
// // Only change code below this line
// myArray[0] = 45;
////////////////////////////////////////

////////////////////////////////////////
//  ? Access Multi-Dimensional Arrays With Indexes
// const myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];
// const myData = myArray[2][1];
////////////////////////////////////////

////////////////////////////////////////
//  ? Manipulate Arrays With push Method
// // Setup
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ];
// // Only change code below this line
// myArray.push(['dog', 3]);
////////////////////////////////////////

////////////////////////////////////////
//  ? Manipulate Arrays With pop Method
// // Setup
// const myArray = [
//   ['John', 23],
//   ['cat', 2],
// ];
// // Only change code below this line
// const removedFromMyArray = myArray.pop();
////////////////////////////////////////

////////////////////////////////////////
//  ? Manipulate Arrays With shift Method
// // Setup
// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ];
// // Only change code below this line
// const removedFromMyArray = myArray.shift();
////////////////////////////////////////

////////////////////////////////////////
//  ? Manipulate Arrays With unshift Method
// // Setup
// const myArray = [
//   ['John', 23],
//   ['dog', 3],
// ];
// myArray.shift();
// // Only change code below this line
// myArray.unshift(['Paul', 35]);
////////////////////////////////////////

////////////////////////////////////////
//  ? Shopping List
// const myList = [
//   ['l', 1],
//   ['o', 2],
//   ['r', 3],
//   ['e', 4],
//   ['m', 5],
// ];
////////////////////////////////////////

////////////////////////////////////////
//  ? Write Reusable JavaScript with Functions
// function reusableFunction() {
//   console.log('Hi World');
// }
// reusableFunction();
////////////////////////////////////////

////////////////////////////////////////
//  ? Passing Values to Functions with Arguments
// function functionWithArgs(param1, param2) {
//   console.log(param1 + param2);
// }
// functionWithArgs(1, 2);
////////////////////////////////////////

////////////////////////////////////////
//  ? Return a Value from a Function with Return
// function timesFive(num) {
//   return num * 5;
// }
////////////////////////////////////////

////////////////////////////////////////
//  ? Global Scope and Functions
// // Declare the myGlobal variable below this line
// let myGlobal = 10;
// function fun1() {
//   oopsGlobal = 5; // Assign 5 to oopsGlobal here
// }
// // Only change code above this line
// function fun2() {
//   let output = '';
//   if (typeof myGlobal != 'undefined') {
//     output += 'myGlobal: ' + myGlobal;
//   }
//   if (typeof oopsGlobal != 'undefined') {
//     output += ' oopsGlobal: ' + oopsGlobal;
//   }
//   console.log(output);
// }
////////////////////////////////////////

////////////////////////////////////////
//  ? Local Scope and Functions
// function myLocalScope() {
//   // Only change code below this line
//   const myVar = 'lorem';
//   console.log('inside myLocalScope', myVar);
// }
// myLocalScope();

// // Run and check the console
// // myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);
////////////////////////////////////////

////////////////////////////////////////
//  ? Global vs. Local Scope in Functions
// // Setup
// const outerWear = 'T-Shirt';

// function myOutfit() {
//   // Only change code below this line
//   const outerWear = 'sweater';
//   // Only change code above this line
//   return outerWear;
// }

// myOutfit();
////////////////////////////////////////

////////////////////////////////////////
//  ? Understanding Undefined Value returned from a Function
// // Setup
// let sum = 0;

// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
// function addFive() {
//   sum = sum + 5;
// }
// // Only change code above this line

// addThree();
// addFive();
////////////////////////////////////////

////////////////////////////////////////
//  ? Assignment with a Returned Value
// // Setup
// let processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line
// processed = processArg(7);
////////////////////////////////////////

////////////////////////////////////////
//  ? Stand in Line
// function nextInLine(arr, item) {
//   // Only change code below this line
//   arr.push(item);
//   return arr.shift();
//   // Only change code above this line
// }

// // Setup
// let testArr = [1, 2, 3, 4, 5];

// // Display code
// console.log('Before: ' + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After: ' + JSON.stringify(testArr));
////////////////////////////////////////

////////////////////////////////////////
//  ? Understanding Boolean Values
// function welcomeToBooleans() {
//   // Only change code below this line
//   return true; // Change this line
//   // Only change code above this line
// }
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  // if (wasThatTrue) return 'Yes, that was true';
  // return 'No, that was false';
  // Only change code above this line
}
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Equality Operator
// // Setup
// function testEqual(val) {
//   if (val == 12) {
//     // Change this line
//     return 'Equal';
//   }
//   return 'Not Equal';
// }

// testEqual(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Strict Equality Operator
// // Setup
// function testStrict(val) {
//   if (val === 7) {
//     // Change this line
//     return 'Equal';
//   }
//   return 'Not Equal';
// }

// testStrict(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Practice comparing different values
// // Setup
// function compareEquality(a, b) {
//   if (a === b) { // Change this line
//     return "Equal";
//   }
//   return "Not Equal";
// }

// compareEquality(10, "10");
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Inequality Operator
// // Setup
// function testNotEqual(val) {
//   if (val != 99) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testNotEqual(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Strict Inequality Operator
// // Setup
// function testStrictNotEqual(val) {
//   if (val !== 17) { // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testStrictNotEqual(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Greater Than Operator
// function testGreaterThan(val) {
//   if (val > 100) {
//     // Change this line
//     return 'Over 100';
//   }

//   if (val > 10) {
//     // Change this line
//     return 'Over 10';
//   }

//   return '10 or Under';
// }

// testGreaterThan(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Greater Than Or Equal To Operator
// function testGreaterOrEqual(val) {
//   if (val >= 20) {
//     // Change this line
//     return '20 or Over';
//   }

//   if (val >= 10) {
//     // Change this line
//     return '10 or Over';
//   }

//   return 'Less than 10';
// }

// testGreaterOrEqual(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Less Than Operator
// function testLessThan(val) {
//   if (val < 25) {
//     // Change this line
//     return 'Under 25';
//   }

//   if (val < 55) {
//     // Change this line
//     return 'Under 55';
//   }

//   return '55 or Over';
// }

// testLessThan(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparison with the Less Than Or Equal To Operator
// function testLessOrEqual(val) {
//   if (val <= 12) {
//     // Change this line
//     return 'Smaller Than or Equal to 12';
//   }

//   if (val <= 24) {
//     // Change this line
//     return 'Smaller Than or Equal to 24';
//   }

//   return 'More Than 24';
// }

// testLessOrEqual(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparisons with the Logical And Operator
// function testLogicalAnd(val) {
//   // Only change code below this line

//   if (val >= 25 && val <= 50) {
//     return 'Yes';
//   }

//   // Only change code above this line
//   return 'No';
// }

// testLogicalAnd(10);
////////////////////////////////////////

////////////////////////////////////////
//  ? Comparisons with the Logical Or Operator
// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val < 10 || val > 20) {
//     return 'Outside';
//   }

//   // Only change code above this line
//   return 'Inside';
// }

// testLogicalOr(15);
////////////////////////////////////////

////////////////////////////////////////
//  ? Introducing Else Statements
// function testElse(val) {
//   let result = '';
//   // Only change code below this line

//   if (val > 5) {
//     result = 'Bigger than 5';
//   } else {
//     result = '5 or Smaller';
//   }

//   // Only change code above this line
//   return result;
// }

// testElse(4);
////////////////////////////////////////

////////////////////////////////////////
//  ? Introducing Else If Statements
// function testElseIf(val) {
//   if (val > 10) {
//     return 'Greater than 10';
//   } else if (val < 5) {
//     return 'Smaller than 5';
//   } else {
//     return 'Between 5 and 10';
//   }
// }

// testElseIf(7);
////////////////////////////////////////

////////////////////////////////////////
//  ? Logical Order in If Else Statements
// function orderMyLogic(val) {
//   if (val < 5) {
//     return 'Less than 5';
//   } else if (val < 10) {
//     return 'Less than 10';
//   } else {
//     return 'Greater than or equal to 10';
//   }
// }

// orderMyLogic(7);
////////////////////////////////////////

////////////////////////////////////////
//  ? Chaining If Else Statements
// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) return 'Tiny';
//   else if (num < 10) return 'Small';
//   else if (num < 15) return 'Medium';
//   else if (num < 20) return 'Large';
//   else if (num >= 20) return 'Huge';
//   else return 'Change Me';
//   // Only change code above this line
// }

// testSize(7);
////////////////////////////////////////

////////////////////////////////////////
//  ? Golf Code
// const names = [
//   'Hole-in-one!',
//   'Eagle',
//   'Birdie',
//   'Par',
//   'Bogey',
//   'Double Bogey',
//   'Go Home!',
// ];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes === 1) return names[0];
//   else if (strokes <= par - 2) return names[1];
//   else if (strokes === par - 1) return names[2];
//   else if (strokes === par) return names[3];
//   else if (strokes === par + 1) return names[4];
//   else if (strokes === par + 2) return names[5];
//   else if (strokes >= par + 3) return names[6];
//   else return 'Change Me';
//   // Only change code above this line
// }

// golfScore(5, 4);

// console.log(golfScore(5, 4));
// console.log(golfScore(4, 1));
// console.log(golfScore(1, 4));
// console.log(golfScore(1, 1));
////////////////////////////////////////

////////////////////////////////////////
//  ? Selecting from Many Options with Switch Statements
// function caseInSwitch(val) {
//   let answer = '';
//   // Only change code below this line
//   switch (val) {
//     case 1:
//       answer = 'alpha';
//       break;
//     case 2:
//       answer = 'beta';
//       break;
//     case 3:
//       answer = 'gamma';
//       break;
//     case 4:
//       answer = 'delta';
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }

// caseInSwitch(1);
////////////////////////////////////////

////////////////////////////////////////
//  ? Adding a Default Option in Switch Statements
// function switchOfStuff(val) {
//   let answer = '';
//   // Only change code below this line
//   switch (val) {
//     case 'a':
//       answer = 'apple';
//       break;
//     case 'b':
//       answer = 'bird';
//       break;
//     case 'c':
//       answer = 'cat';
//       break;
//     default:
//       answer = 'stuff';
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }

// switchOfStuff(1);
////////////////////////////////////////

////////////////////////////////////////
//  ? Multiple Identical Options in Switch Statements
// function sequentialSizes(val) {
//   let answer = '';
//   // Only change code below this line
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = 'Low';
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = 'Mid';
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = 'High';
//       break;
//   }
//   // Only change code above this line
//   return answer;
// }

// sequentialSizes(1);
////////////////////////////////////////

////////////////////////////////////////
//  ? Replacing If Else Chains with Switch
// function chainToSwitch(val) {
//   let answer = '';
//   // Only change code below this line

//   switch (val) {
//     case 'bob':
//       answer = 'Marley';
//       break;
//     case 42:
//       answer = 'The Answer';
//       break;
//     case 1:
//       answer = 'There is no #1';
//       break;
//     case 99:
//       answer = 'Missed me by this much!';
//       break;
//     case 7:
//       answer = 'Ate Nine';
//       break;
//   }

//   // Only change code above this line
//   return answer;
// }

// chainToSwitch(7);
////////////////////////////////////////

////////////////////////////////////////
//  ? Returning Boolean Values from Functions
// function isLess(a, b) {
//   // Only change code below this line
//   return a < b;
//   // Only change code above this line
// }

// isLess(10, 15);
////////////////////////////////////////

////////////////////////////////////////
//  ? Return Early Pattern for Functions
// // Setup
// function abTest(a, b) {
//   // Only change code below this line
//   if (a * b < 0) return undefined;
//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2, 2);
////////////////////////////////////////

////////////////////////////////////////
// //  ? Counting Cards
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--;
//       break;
//   }

//   if (count > 0) {
//     return count + ' Bet';
//   } else {
//     return count + ' Hold';
//   }
//   // Only change code above this line
// }

// cc(2);
// cc(3);
// cc(7);
// cc('K');
// cc('A');
////////////////////////////////////////

////////////////////////////////////////
//  ? Build JavaScript Objects
// const myDog = {
//   // Only change code below this line
//   name: 'Lorem',
//   legs: 3,
//   tails: 1,
//   friends: ['Ipsum', 'Dolor', 'Sit'],
//   // Only change code above this line
// };
////////////////////////////////////////

////////////////////////////////////////
//  ? Accessing Object Properties with Dot Notation
// // Setup
// const testObj = {
//   hat: 'ballcap',
//   shirt: 'jersey',
//   shoes: 'cleats',
// };

// // Only change code below this line
// const hatValue = testObj.hat; // Change this line
// const shirtValue = testObj.shirt; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Accessing Object Properties with Bracket Notation
// // Setup
// const testObj = {
//   'an entree': 'hamburger',
//   'my side': 'veggies',
//   'the drink': 'water',
// };

// // Only change code below this line
// const entreeValue = testObj['an entree']; // Change this line
// const drinkValue = testObj['the drink']; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Accessing Object Properties with Variables
// const dogs = {
//   Fido: 'Mutt',
//   Hunter: 'Doberman',
//   Snoopie: 'Beagle',
// };

// const myDog = 'Hunter';
// const myBreed = dogs[myDog];
// console.log(myBreed);

// // Setup
// const testObj = {
//   12: 'Namath',
//   16: 'Montana',
//   19: 'Unitas',
// };

// // Only change code below this line
// const playerNumber = 16; // Change this line
// const player = testObj[playerNumber]; // Change this line
// console.log(player);
////////////////////////////////////////

////////////////////////////////////////
//  ? Updating Object Properties
// // Setup
// const myDog = {
//   name: 'Coder',
//   legs: 4,
//   tails: 1,
//   friends: ['freeCodeCamp Campers'],
// };

// // Only change code below this line
// myDog.name = 'Happy Coder';
// console.log(myDog.name);
////////////////////////////////////////

////////////////////////////////////////
//  ? Add New Properties to a JavaScript Object
// const myDog = {
//   name: 'Happy Coder',
//   legs: 4,
//   tails: 1,
//   friends: ['freeCodeCamp Campers'],
// };

// myDog.bark1 = 'woof';
// myDog['bark2'] = 'woof-woof';
// console.log(myDog, myDog.bark1, myDog['bark2']);
////////////////////////////////////////

////////////////////////////////////////
//  ? Delete Properties from a JavaScript Object
// // Setup
// const myDog = {
//   name: 'Happy Coder',
//   legs: 4,
//   tails: 1,
//   friends: ['freeCodeCamp Campers'],
//   bark: 'woof',
// };

// // Only change code below this line
// delete myDog.tails;
// console.log(myDog);
////////////////////////////////////////

////////////////////////////////////////
//  ? Using Objects for Lookups
// // Setup
// function phoneticLookup(val) {
//   let result = '';

//   // Only change code below this line
//   // switch (val) {
//   //   case 'alpha':
//   //     result = 'Adams';
//   //     break;
//   //   case 'bravo':
//   //     result = 'Boston';
//   //     break;
//   //   case 'charlie':
//   //     result = 'Chicago';
//   //     break;
//   //   case 'delta':
//   //     result = 'Denver';
//   //     break;
//   //   case 'echo':
//   //     result = 'Easy';
//   //     break;
//   //   case 'foxtrot':
//   //     result = 'Frank';
//   // }

//   const lookup = {
//     alpha: 'Adams',
//     bravo: 'Boston',
//     charlie: 'Chicago',
//     delta: 'Denver',
//     echo: 'Easy',
//     foxtrot: 'Frank',
//   };

//   result = lookup[val];
//   // Only change code above this line
//   return result;
// }

// phoneticLookup('charlie');
// console.log(phoneticLookup('charlie'));
////////////////////////////////////////

////////////////////////////////////////
//  ? Testing Objects for Properties
// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) return obj[checkProp];
//   return 'Not Found';
//   // Only change code above this line
// }
////////////////////////////////////////

////////////////////////////////////////
//  ? Manipulating Complex Objects
// const myMusic = [
//   {
//     artist: 'Billy Joel',
//     title: 'Piano Man',
//     release_year: 1973,
//     formats: ['CD', '8T', 'LP'],
//     gold: true,
//   },
// ];

// myMusic.push({
//   artist: 'Basd',
//   title: 'Pasd',
//   release_year: 1983,
//   formats: ['CD1', '8T1', 'LP1'],
//   gold: false,
// });

// console.log(myMusic);
////////////////////////////////////////

////////////////////////////////////////
//  ? Accessing Nested Objects
// const myStorage = {
//   car: {
//     inside: {
//       'glove box': 'maps',
//       'passenger seat': 'crumbs',
//     },
//     outside: {
//       trunk: 'jack',
//     },
//   },
// };

// const gloveBoxContents = myStorage.car.inside['glove box'];
// console.log(gloveBoxContents);
////////////////////////////////////////

////////////////////////////////////////
//  ? Accessing Nested Arrays
// const myPlants = [
//   {
//     type: 'flowers',
//     list: ['rose', 'tulip', 'dandelion'],
//   },
//   {
//     type: 'trees',
//     list: ['fir', 'pine', 'birch'],
//   },
// ];

// const secondTree = myPlants[1].list[1];
// console.log(secondTree);
////////////////////////////////////////

////////////////////////////////////////
//  ? Record Collection
// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// };

// function updateRecords(records, id, prop, value) {
//   if (!value) {
//     delete records[id][prop];
//   } else if (prop != 'tracks') {
//     records[id][prop] = value;
//   } else {
//     if (!records[id].hasOwnProperty('tracks')) {
//       records[id].tracks = [];
//     }
//     records[id].tracks.push(value);
//   }

//   console.log(records);
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate with JavaScript While Loops
// // Setup
// const myArray = [];

// // Only change code below this line
// let i = 5;
// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }
// console.log(myArray);
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate with JavaScript For Loops
// // Setup
// const myArray = [];

// // Only change code below this line
// for (let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }
// console.log(myArray);
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate Odd Numbers With a For Loop
// // Setup
// const myArray = [];

// // Only change code below this line
// for (let i = 1; i < 10; i++) {
//   if (i % 2 !== 0) {
//     myArray.push(i);
//   }
// }
// console.log(myArray);
////////////////////////////////////////

////////////////////////////////////////
//  ? Count Backwards With a For Loop
// // Setup
// const myArray = [];

// // Only change code below this line
// for (let i = 9; i > 0; i--) {
//   if (i % 2 !== 0) {
//     myArray.push(i);
//   }
// }
// console.log(myArray);
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate Through an Array with a For Loop
// // Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }
// console.log(total);
////////////////////////////////////////

////////////////////////////////////////
//  ? Nesting For Loops
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   console.log(product);
//   // Only change code above this line
//   return product;
// }

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate with JavaScript Do...While Loops
// // Setup
// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 5);

// console.log(myArray);
////////////////////////////////////////

////////////////////////////////////////
//  ? Replace Loops using Recursion
// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Only change code above this line
// }

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));
////////////////////////////////////////

////////////////////////////////////////
//  ? Profile Lookup
// // Setup
// const contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       }
//       return 'No such property';
//     }
//   }
//   return 'No such contact';
//   // Only change code above this line
// }

// console.log(lookUpProfile('Akira', 'likes'));
// console.log(lookUpProfile('Bob', 'number'));
// console.log(lookUpProfile('Akira', 'address'));
// console.log(lookUpProfile('Kristian', 'lastName'));
// console.log(lookUpProfile('Sherlock', 'likes'));
// console.log(lookUpProfile('Harry', 'likes'));
////////////////////////////////////////

////////////////////////////////////////
//  ? Generate Random Fractions with JavaScript
// function randomFraction() {
//   // Only change code below this line

//   return Math.random();

//   // Only change code above this line
// }
// console.log(randomFraction());
////////////////////////////////////////

////////////////////////////////////////
//  ? Generate Random Whole Numbers with JavaScript
// function randomWholeNum() {
//   return Math.floor(Math.random() * 10);
// }

// console.log(randomWholeNum());
////////////////////////////////////////

////////////////////////////////////////
//  ? Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {
//   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// }

// console.log(randomRange(1, 10));
// console.log(randomRange(1, 2));
////////////////////////////////////////

////////////////////////////////////////
//  ? Use the parseInt Function
// function convertToInteger(str) {
//   return parseInt(str);
// }

// console.log(convertToInteger('0056'));
////////////////////////////////////////

////////////////////////////////////////
//  ? Use the parseInt Function with a Radix
// function convertToInteger(str) {
//   return parseInt(str, 2);
// }

// console.log(convertToInteger('10011'));
////////////////////////////////////////

////////////////////////////////////////
//  ? Use the Conditional (Ternary) Operator
// function checkEqual(a, b) {
//   return a === b ? 'Equal' : 'Not Equal';
// }

// checkEqual(1, 2);
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Multiple Conditional (Ternary) Operators
// function checkSign(num) {
//   return num > 0 ? 'positive' : num !== 0 ? 'negative' : 'zero';
// }

// checkSign(10);0
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Recursion to Create a Countdown
// Only change code below this line
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     // console.log(n);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(5));

// Only change code above this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    // console.log(startNum, endNum);
    countArray.push(endNum);
    return countArray;
  }
}

console.log(rangeOfNumbers(1, 5));
////////////////////////////////////////
