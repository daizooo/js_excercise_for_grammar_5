function issOddNumber(number) {
  return number % 2 !== 0;
}

console.log(issOddNumber(9));
console.log(issOddNumber(14));


function factorial(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4));
console.log(factorial(5));
