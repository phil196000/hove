//QUESTION 1

// const isEven = function (inputNumber) {
//   // Write your code here
// };
const isEven = (inputNumber) => {
  if (Number.isInteger(inputNumber)) {
    return inputNumber % 2 === 0 ? true : false;
  }
};
console.log(isEven(4));
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
console.log(isPrime(9));
