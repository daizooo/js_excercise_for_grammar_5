function isOddNumber(number) {
  return number % 2 !== 0;
}

console.log(isOddNumber(9));
console.log(isOddNumber(14));


let result = 1;
const factorial = function (num) {
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorial(4));
console.log(factorial(5));


function factorialChallenge(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialChallenge(num - 1);
}

console.log(factorialChallenge(4));
console.log(factorialChallenge(5));
