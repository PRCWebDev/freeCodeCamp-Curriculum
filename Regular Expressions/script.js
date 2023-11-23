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
// let difficultSpelling = 'Mississippi';
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Characters that Occur Zero or More Times
// let chewieQuote = 'Aaaaaaaaaaaaaaaarrrgh!';
// // Only change code below this line
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Find Characters with Lazy Matching
// let text = '<h1>Winter is coming</h1>';
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Find One or More Criminals in a Hunt
// let reCriminals = /C+/; // Change this line
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Beginning String Patterns
// let rickyAndCal = 'Cal and Ricky both like racing.';
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Ending String Patterns
// let caboose = 'The last car on a train is the caboose';
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match All Letters and Numbers
// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = '42';
// let varNames = 'important_var';
// longHand.test(numbers);
// shortHand.test(numbers);
// longHand.test(varNames);
// shortHand.test(varNames);

// let quoteSample = 'The five boxing wizards jump quickly.';
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Everything But Letters and Numbers
// let shortHand = /\W/;
// let numbers = '42%';
// let sentence = 'Coding!';
// console.log(numbers.match(shortHand));
// console.log(sentence.match(shortHand));

// let quoteSample = 'The five boxing wizards jump quickly.';
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match All Numbers
// let movieName = '2001: A Space Odyssey';
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match All Non-Numbers
// let movieName = '2001: A Space Odyssey';
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Restrict Possible Usernames
/*
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
Usernames can only use alphanumeric characters.
The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
Change the regex userCheck to fit the constraints listed above.
*/
// let username = 'JackOfAllTrades';
// let userCheck = /^[a-z][a-z]+\d*$|[a-z]\d\d+$/gi; // Change this line
// let result = userCheck.test(username);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Whitespace
// let sample = 'Whitespace is important in separating words';
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Match Non-Whitespace Characters
// let sample = 'Whitespace is important in separating words';
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Specify Upper and Lower Number of Matches
// let ohStr = 'Ohhh no';
// let ohRegex = /Oh{3,6}\sno/; // Change this line
// let result = ohRegex.test(ohStr);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Specify Only the Lower Number of Matches
// let haStr = 'Hazzzzah';
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Specify Exact Number of Matches
// let timStr = 'Timmmmber';
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Check for All or None
// let favWord = 'favorite';
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Positive and Negative Lookahead
// let password = 'abc123';
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// console.log(checkPass.test(password));

// let sampleWord = 'astronaut';
// let pwRegex = /(?=\w\w{5,})(?=\D*\d\d+)/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Check For Mixed Grouping of Characters
// let myString = 'Eleanor Roosevelt';
// let myRegex = /(Eleanor|Franklin D.)\sRoosevelt/; // Change this line
// let result = myRegex.test(myString); // Change this line
// // After passing the challenge experiment with myString and see how the grouping works

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Reuse Patterns Using Capture Groups
// let repeatNum = '42 42 42';
// let reRegex = /^(\d+) \1 \1(?!.)/; // Change this line
// let result = reRegex.test(repeatNum);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Use Capture Groups to Search and Replace
// let str = 'one two three';
// let fixRegex = /(\w+) (\w+) (\w+)/; // Change this line
// let replaceText = '$3 $2 $1'; // Change this line
// let result = str.replace(fixRegex, replaceText);

// console.log(result);
////////////////////////////////////////

////////////////////////////////////////
//  ? Remove Whitespace from Start and End
let hello = '   Hello, World!  ';
let wsRegex = /(^\s+|\s+$)/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line

console.log(result);
////////////////////////////////////////
