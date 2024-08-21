// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const num1 = parseFloat(prompt('Enter the first number:'));
const num2 = parseFloat(prompt('Enter the second number:'));

const result1 = num1 * num2;
console.log(`The result of multiplying ${num1} and ${num2} is :${result1}`);
const result2 = num1 + num2;
console.log(`The result of addition ${num1} and ${num2} is :${result2}`);
const result3 = num1 - num2;
console.log(`The result of subtraction ${num1} and ${num2} is :${result3}`);
const result4 = num1 / num2;
console.log(`The result of division ${num1} and ${num2} is :${result4}`);


