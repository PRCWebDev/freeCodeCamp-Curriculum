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
! Basic Data Structures Course Curriculum
"Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.

In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data."
*/

////////////////////////////////////////
//  ? Use an Array to Store a Collection of Data
// let yourArray = ['one', 2, 'three', true, false]; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Access an Array's Contents Using Bracket Notation
// let myArray = ['a', 'b', 'c', 'd']; // Only change code below this line
// myArray[1] = 'asd'; // Only change code above this line
// console.log(myArray);
////////////////////////////////////////

////////////////////////////////////////
//  ? Add Items to an Array with push() and unshift()
// function mixedNumbers(arr) {
//   arr.unshift('I', 2, 'three');
//   arr.push(7, 'VIII', 9);
//   return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));
////////////////////////////////////////

////////////////////////////////////////
//  ? Remove Items from an Array with pop() and shift()
// function popShift(arr) {
//   let popped = arr.pop(); // Change this line
//   let shifted = arr.shift(); // Change this line
//   return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));
////////////////////////////////////////

////////////////////////////////////////
//  ? Remove Items Using splice()
// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1, 4);
// // Only change code above this line
// console.log(arr);
////////////////////////////////////////

////////////////////////////////////////
//  ? Add Items Using splice()
// function htmlColorNames(arr) {
//   // Only change code below this line
//   arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
//   // Only change code above this line
//   return arr;
// }

// console.log(
//   htmlColorNames([
//     'DarkGoldenRod',
//     'WhiteSmoke',
//     'LavenderBlush',
//     'PaleTurquoise',
//     'FireBrick',
//   ])
// );
////////////////////////////////////////

////////////////////////////////////////
//  ? Copy Array Items Using slice()
// function forecast(arr) {
//   // Only change code below this line
//   return arr.slice(2, 4);
// }
// // Only change code above this line

// console.log(
//   forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])
// );
////////////////////////////////////////

////////////////////////////////////////
//  ? Copy an Array with the Spread Operator
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));
////////////////////////////////////////

////////////////////////////////////////
// ? Combine Arrays with the Spread Operator
// function spreadOut() {
//   let fragment = ['to', 'code'];
//   let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
//   return sentence;
// }

// console.log(spreadOut());
////////////////////////////////////////

////////////////////////////////////////
// ? Check For The Presence of an Element With indexOf()
// function quickCheck(arr, elem) {
//   // Only change code below this line
//   return arr.indexOf(elem) >= 0 ? true : false;
//   // Only change code above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate Through All an Array's Items Using For Loops
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );
////////////////////////////////////////

////////////////////////////////////////
//  ? Create complex multi-dimensional arrays
// let myNestedArray = [
//   // Only change code below this line
//   true,
//   [0, 1],
//   ['asd', [false, 'deep']],
//   [[['deeper', -1]]],
//   [[[['deepest']]]],
//   // Only change code above this line
// ];
////////////////////////////////////////

////////////////////////////////////////
//  ? Add Key-Value Pairs to JavaScript Objects
// const foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
// };

// // Only change code below this line
// foods['bananas'] = 13;
// foods.grapes = 35;

// const strawberries = 'strawberries';
// foods[strawberries] = 27;
// // Only change code above this line

// console.log(foods);
////////////////////////////////////////

////////////////////////////////////////
//  ? Modify an Object Nested Within an Object
// let userActivity = {
//   id: 23894201352,
//   date: 'January 1, 2017',
//   data: {
//     totalUsers: 51,
//     online: 42,
//   },
// };

// // Only change code below this line
// userActivity.data.online = 45;
// // Only change code above this line

// console.log(userActivity);
////////////////////////////////////////

////////////////////////////////////////
//  ? Access Property Names with Bracket Notation
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   return foods[scannedItem];
//   // Only change code above this line
// }

// console.log(checkInventory('apples'));
////////////////////////////////////////

////////////////////////////////////////
//  ? Use the delete Keyword to Remove Object Properties
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };

// // Only change code below this line
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// // Only change code above this line

// console.log(foods);
////////////////////////////////////////

////////////////////////////////////////
//  ? Check if an Object has a Property
// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   return (
//     userObj.hasOwnProperty('Alan') &&
//     userObj.hasOwnProperty('Jeff') &&
//     'Sarah' in userObj &&
//     'Ryan' in userObj
//   );
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));
////////////////////////////////////////

////////////////////////////////////////
//  ? Iterate Through the Keys of an Object with a for...in Statement
// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(allUsers) {
//   // Only change code below this line
//   let count = 0;
//   for (const user in allUsers) {
//     if (allUsers[user].online) count++;
//   }
//   return count;
//   // Only change code above this line
// }

// console.log(countOnline(users));
////////////////////////////////////////

////////////////////////////////////////
//  ? Generate an Array of All Object Keys with Object.keys()
// let users = {
//   Alan: {
//     age: 27,
//     online: false,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: false,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   return Object.keys(obj);
//   // Only change code above this line
// }

// console.log(getArrayOfUsers(users));
////////////////////////////////////////

////////////////////////////////////////
//  ? Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: ['Sam', 'Kira', 'Tomo'],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  let addAFriend = userObj.data.friends;
  userObj.data.friends.push(friend);
  return addAFriend;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
////////////////////////////////////////
