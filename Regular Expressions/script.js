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
! Regular Expressions Course Curriculum
"Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want."
*/

////////////////////////////////////////
//  ? Using the Test Method
// let myString = 'Hello, World!';
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Literal Strings
// let waldoIsHiding = 'Somewhere Waldo is hiding in this text.';
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match a Literal String with Different Possibilities
// let petString = 'James has a pet cat.';
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Ignore Case While Matching
// let myString = 'freeCodeCamp';
// let fccRegex = /FrEeCoDeCamp/i; // Change this line
// let result = fccRegex.test(myString);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Extract Matches
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Find More Than the First Match
// let testStr = 'Repeat, Repeat, Repeat';
// let ourRegex = /Repeat/;
// console.log(testStr.match(ourRegex));

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// console.log(testStr.match(repeatRegex));

// let twinkleStar = 'Twinkle, twinkle, little star';
// !!! You can have multiple flags on your regex like /search/gi
// let starRegex = /Twinkle/gi; // Change this line !!!
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Anything with Wildcard Period
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./; // Change this line
// let result = unRegex.test(exampleStr);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Single Character with Multiple Possibilities
// let bigStr = 'big';
// let bagStr = 'bag';
// let bugStr = 'bug';
// let bogStr = 'bog';
// let bgRegex = /b[aiu]g/;
// console.log(bigStr.match(bgRegex));
// console.log(bagStr.match(bgRegex));
// console.log(bugStr.match(bgRegex));
// console.log(bogStr.match(bgRegex));

// let quoteSample =
//   'Beware of bugs in the above code; I have only proved it correct, not tried it.';
// let vowelRegex = /[aeiou]/gi; // Change this line !!! Note: Be sure to match both upper- and lowercase vowels. (aka (/i))
// let result = quoteSample.match(vowelRegex); // Change this line

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Letters of the Alphabet
// let quoteSample = 'The quick brown fox jumps over the lazy dog.';
// let alphabetRegex = /[a-z]/gi; // Change this line !!! Note: Be sure to match both upper- and lowercase. (aka (/i))
// let result = quoteSample.match(alphabetRegex); // Change this line

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Numbers and Letters of the Alphabet
// let quoteSample = 'Blueberry 3.141592653s are delicious.';
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Single Characters Not Specified
// let quoteSample = '3 blind mice.';
// let myRegex = /[^0-9aeiou]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Characters that Occur One or More Times
let difficultSpelling = 'Mississippi';
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Characters that Occur Zero or More Times

////////////////////////////////////////

////////////////////////////////////////
//  ? Find Characters with Lazy Matching

////////////////////////////////////////

////////////////////////////////////////
//  ? Find One or More Criminals in a Hunt

////////////////////////////////////////

////////////////////////////////////////
//  ? Match Beginning String Patterns

////////////////////////////////////////

////////////////////////////////////////
//  ? Match Ending String Patterns

////////////////////////////////////////

////////////////////////////////////////
//  ? Match All Letters and Numbers

////////////////////////////////////////

////////////////////////////////////////
//  ? Match Everything But Letters and Numbers

////////////////////////////////////////

////////////////////////////////////////
//  ? Match All Numbers

////////////////////////////////////////

////////////////////////////////////////
//  ? Match All Non-Numbers

////////////////////////////////////////

////////////////////////////////////////
//  ? Restrict Possible Usernames

////////////////////////////////////////

////////////////////////////////////////
//  ? Match Whitespace

////////////////////////////////////////

////////////////////////////////////////
//  ? Match Non-Whitespace Characters

////////////////////////////////////////

////////////////////////////////////////
//  ? Specify Upper and Lower Number of Matches

////////////////////////////////////////

////////////////////////////////////////
//  ? Specify Only the Lower Number of Matches

////////////////////////////////////////

////////////////////////////////////////
//  ? Specify Exact Number of Matches

////////////////////////////////////////

////////////////////////////////////////
//  ? Check for All or None

////////////////////////////////////////

////////////////////////////////////////
//  ? Positive and Negative Lookahead

////////////////////////////////////////

////////////////////////////////////////
//  ? Check For Mixed Grouping of Characters

////////////////////////////////////////

////////////////////////////////////////
//  ? Reuse Patterns Using Capture Groups

////////////////////////////////////////

////////////////////////////////////////
//  ? Use Capture Groups to Search and Replace

////////////////////////////////////////

////////////////////////////////////////
//  ? Remove Whitespace from Start and End

////////////////////////////////////////
