// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const totalGoal = prompt("What is your total savings goal?");
const weeks = prompt("How many weeks do you plan to save?");
const perWeek = totalGoal / weeks ;
console.log (`To reach your goal, you need to save $${perWeek} per week.`);
const months = prompt("How many months do you plan to save?");
const perMonth = totalGoal / months;
console.log(`To reah your goal, you need to save $${perMonth} per month.`);
const comparison = perMonth - (perWeek * 4);
console.log(`The difference between weekly and monthly is $${comparison}.`);

