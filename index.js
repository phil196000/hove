//QUESTION 1

// const isEven = function (inputNumber) {
//   // Write your code here
// };
const isEven = (inputNumber) => {
  if (Number.isInteger(inputNumber)) {
    return inputNumber % 2 === 0;
  }
};

console.log(isEven(11));
//QUESTION 2
// * Question 2
// This function should return true if inputNumber is does not have multiples beside 1 and itself only, otherwise return false
// */
// const isPrime = function(inputNumber) {
// // Write your code here
// }
const isPrime = (inputNumber) => {
  for (var i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) return false;
  }
  return inputNumber > 1;
};
// console.log(isPrime(9));

//QUESTION 3
/**
* Question 3
You are required to complete the function below so that it checks if a string contain a number(s) in it.



* For example: For inputString=Alex, return false
* For inputString=Amazon49, return true
*/
// const containsNumbers = function (inputString) {
//   // Write your code here
// };
const containsNumbers = (inputString) => /[0-9]/.test(inputString);
console.log("regular expression:", containsNumbers("abcd"));

//QUESTION 4
/**
* Question 4
* Your are required to complete the below function to determine if string inputString is a palindrome string or not. The function is expected to return true if the string it palindrom otherwise return false.



Example : For inputString = 101 , we should get true
* For inputString = abba, return true
* For inputString = abbb, return false
*/
// const isPalindrome = function(inputString) {
// // Write your code here
// }
const isPalindrome = (inputString) =>
  inputString === [...inputString].reverse().join("");
console.log(isPalindrome("abbab"));

// Example : Encoding "Alex@702" will result in "Nyrk@702"
// You can read more on how rot13 works here https://en.wikipedia.org/wiki/ROT13
// */
// const rot13Encoding = function(inputString) {
// // Write your code here
// }
const rot13Encoding = (inputString) => {
  let alphabets = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  let rotEncoded = "";
  for (c in inputString) {
    let char = inputString[c];
    let chatRot13 = alphabets[alphabets.indexOf(char.toLowerCase()) + 13];
    let charToAdd = alphabets.includes(char.toLowerCase())
      ? char === char.toUpperCase()
        ? chatRot13.toUpperCase()
        : chatRot13.toLowerCase()
      : char;
    // rotEncoded = rotEncoded + charToAdd;
    rotEncoded += charToAdd;
  }
  return rotEncoded;
};
console.log(rot13Encoding("Nyrk@702"));

/**
* Question 6
Given: an array containing hashes of names
Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an *ampersand.



Example:



*list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'



*list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'



*list([ {name: 'Bart'} ])
// returns 'Bart'



*list([])
// returns ''
*/

const formattedFunc = (list) => {
  let formatted = "";
  if (Array.isArray(list)) {
    list.forEach((item, index) => {
      formatted +=
        list.length > 1
          ? list.length - 1 !== index
            ? `${item.name}${
                list.length < 3 ? "" : index !== list.length - 2 ? "," : ""
              } `
            : `& ${item.name}`
          : item.name;
    });
  }
  return formatted;
};
console.log("formatted", formattedFunc([]));
/**
* Question 7
Bonus React question. Write a Fuction Component that takes in a property object and returns an element that say;
"My name is prop.firstName, I am a prop.collegeName and i can't wait to start at ACA"
*/

const IntroComponent = (props) => (
  <div>
    My name is {props.firstName}, I am a {props.collegeName} and i can't wait to
    start at ACA
  </div>
);
<IntroComponent firstName="Philemon" collegeName="MIT" />;
