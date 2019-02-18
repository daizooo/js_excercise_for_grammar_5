function isOddNumber(num) {
  if (num % 2 === 1) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }
}

console.log(isOddNumber(9));
console.log(isOddNumber(14));


const factorial = function (num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}

const factorialchallenge = (num) => {
  if (num <= 0) {
    return 1;
  }
  return num * factorialchallenge(num - 1);
}

console.log(factorial(4));
console.log(factorial(5));

console.log(factorialchallenge(4));
console.log(factorialchallenge(5));
