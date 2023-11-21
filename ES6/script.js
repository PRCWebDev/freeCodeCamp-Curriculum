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
! ES6 Course Curriculum
"ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.

Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.

ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules."
*/

////////////////////////////////////////
//  ? Compare Scopes of the var and let Keywords
// function checkScope() {
//   let i = 'function scope';
//   if (true) {
//     let i = 'block scope';
//     console.log('Block scope i is: ', i);
//   }
//   console.log('Function scope i is: ', i);
//   return i;
// }

// console.log(checkScope());
////////////////////////////////////////

////////////////////////////////////////
//  ? Mutate an Array Declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//   // Using s = [2, 5, 7] would be invalid
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
//   return s;
//   // Only change code above this line
// }
// editInPlace();
// console.log(editInPlace());
////////////////////////////////////////

////////////////////////////////////////
//  ? Prevent Object Mutation
// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Arrow Functions to Write Concise Anonymous Functions
// var magic = function () {
//   return new Date();
// };
// const magic = () => new Date();
////////////////////////////////////////

////////////////////////////////////////
//  ? Write Arrow Functions with Parameters
// // var myConcat = function (arr1, arr2) {
// //   return arr1.concat(arr2);
// // };

// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));
////////////////////////////////////////

////////////////////////////////////////
//  ? Set Default Parameters for Your Functions
// // Only change code below this line
// const increment = (number, value = 1) => number + value;
// // Only change code above this line
// console.log(increment(2, 2));
// console.log(increment(2));
////////////////////////////////////////

////////////////////////////////////////
//  ? Use the Rest Parameter with Function Parameters
// const sum = (...args) => {
//   const argz = [...args];
//   let total = 0;
//   for (let i = 0; i < argz.length; i++) {
//     total += argz[i];
//   }
//   return total;
// };

// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2));
// console.log(sum());
////////////////////////////////////////

////////////////////////////////////////
//  ? Use the Spread Operator to Evaluate Arrays In-Place
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1]; // Change this line

// console.log(arr2);
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Destructuring Assignment to Extract Values from Objects
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// // Only change code below this line
// const { today, tomorrow } = HIGH_TEMPERATURES;
// // Only change code above this line

// console.log(today, tomorrow);
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Destructuring Assignment to Assign Variables from Objects
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// // Only change code below this line
// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// // Only change code above this line

// console.log(highToday, highTomorrow);
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Destructuring Assignment to Assign Variables from Nested Objects
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// // Only change code below this line
// // const lowToday = LOCAL_FORECAST.today.low;
// // const highToday = LOCAL_FORECAST.today.high;
// const {
//   today: { low: lowToday, high: highToday },
// } = LOCAL_FORECAST;
// // Only change code above this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Destructuring Assignment to Assign Variables from Arrays
// let a = 8,
//   b = 6;
// // Only change code below this line
// [a, b] = [b, a];

// console.log(a, b);
////////////////////////////////////////

////////////////////////////////////////
//  ? Destructuring via rest elements
// function removeFirstTwo(list) {
//   const [a, b, ...shortList] = list;
//   return shortList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(removeFirstTwo([1, 2, 3, 4, 5]));
// // console.log(removeFirstTwo());
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Destructuring Assignment to Pass an Object as a Function's Parameters
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// // Only change code below this line
// const half = ({ max, min }) => (max + min) / 2.0;
// // Only change code above this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Create Strings using Template Literals
// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
//   }
//   console.log(failureItems);
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
////////////////////////////////////////

////////////////////////////////////////
//  ? Write Concise Object Literal Declarations Using Object Property Shorthand
// const createPerson = (name, age, gender) =>
//   // Only change code below this line
//   ({ name, age, gender });
//   // Only change code above this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Write Concise Declarative Functions with ES6
// // Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   },
// };
// // Only change code above this line
// bicycle.setGear(3);
// console.log(bicycle.gear);
////////////////////////////////////////

////////////////////////////////////////
//  ? Use class Syntax to Define a Constructor Function
// // Only change code below this line
// class Vegetable {
//   constructor(vegetableType) {
//     this.name = vegetableType;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'
////////////////////////////////////////

////////////////////////////////////////
//  ? Use getters and setters to Control Access to an Object
// // Only change code below this line
// class Thermostat {
//   constructor(tempF) {
//     this.tempF = tempF;
//   }

//   get temperature() {
//     return (5 / 9) * (this.tempF - 32);
//   }

//   set temperature(tempC) {
//     this.tempF = (tempC * 9.0) / 5 + 32;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(temp, thermos);
////////////////////////////////////////

////////////////////////////////////////
//  ? Create a Module Script
// <script type="module" src="index.js"></script>
////////////////////////////////////////

////////////////////////////////////////
//  ? Use export to Share a Code Block
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// };

// const lowercaseString = (string) => {
//   return string.toLowerCase();
// };

// export { uppercaseString, lowercaseString };
////////////////////////////////////////

////////////////////////////////////////
//  ? Reuse JavaScript Code Using import
// import { uppercaseString, lowercaseString } from './string_functions.js';
// // Only change code above this line
// uppercaseString('hello');
// lowercaseString('WORLD!');
////////////////////////////////////////

////////////////////////////////////////
//  ? Use * to Import Everything from a File
// import * as stringFunctions from './string_functions.js';

// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");
////////////////////////////////////////

////////////////////////////////////////
//  ? Create an Export Fallback with export default
// export default function subtract(x, y) {
//   return x - y;
// }
////////////////////////////////////////

////////////////////////////////////////
//  ? Import a Default Export
// import subtract from './math_functions.js';
// // Only change code above this line

// subtract(7, 4);
////////////////////////////////////////

////////////////////////////////////////
//  ? Create a JavaScript Promise
// const makeServerRequest = new Promise((resolve, reject) => {});
////////////////////////////////////////

////////////////////////////////////////
//  ? Complete a Promise with resolve and reject
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer;

//   if (responseFromServer) {
//     resolve('We got the data'); // Change this line
//   } else {
//     reject('Data not received'); // Change this line
//   }
// });
////////////////////////////////////////

////////////////////////////////////////
//  ? Handle a Fulfilled Promise with then
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve('We got the data');
//   } else {
//     reject('Data not received');
//   }
// });

// makeServerRequest.then((result) => {
//   console.log(result);
// });
////////////////////////////////////////

////////////////////////////////////////
//  ? Handle a Rejected Promise with catch
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to false to represent an unsuccessful response from a server
//   let responseFromServer = false;

//   if (responseFromServer) {
//     resolve('We got the data');
//   } else {
//     reject('Data not received');
//   }
// });

// makeServerRequest.then((result) => {
//   console.log(result);
// });

// makeServerRequest.catch((error) => {
//   console.log(error);
// });
////////////////////////////////////////
