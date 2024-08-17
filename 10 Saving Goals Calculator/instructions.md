# Savings Goal Calculator

If you're planning to save up for something special, here's how you can figure out how much you need to save each week or month to reach your goal.

## Helpful Hints
### Print formatted strings
To print a statement in a format, for example:
```
My name is {name}
```
Here is how:
```javascript
const name = 'David';
console.log(`My name is ${name}`);
```
This will print out: 
```
My name is David
```

### Prompt
If you want to create a variable called `name` and assign it to the `prompt` function with the prompt: `"What is your name?"`

```javascript
const name = prompt("What is your name?");
```

---

Here is the code exercise with camel case variable names:

## Level 1: Calculate Weekly Savings

1. Create a variable called `totalGoal` and assign it to the `prompt` function with the prompt: `"What is your total savings goal?"`
2. Create a variable called `weeks` and assign it to the `prompt` function with the prompt: `"How many weeks do you plan to save?"`
3. Create a variable called `perWeek` and assign it the value of `totalGoal` divided by `weeks`.
4. Print the statement in this format:
```
To reach your goal, you need to save $${perWeek} per week.
```

Output (assuming user inputted `500` as `totalGoal` and `10` as `weeks`):
```
To reach your goal, you need to save $50 per week.
```

<details>
<summary>Answer</summary>

```javascript
const totalGoal = prompt("What is your total savings goal?");
const weeks = prompt("How many weeks do you plan to save?");
const perWeek = totalGoal / weeks;
console.log(`To reach your goal, you need to save $${perWeek} per week.`);
```
</details>

## Level 2: Calculate Monthly Savings

5. Create a variable called `months` and assign it to the `prompt` function with the prompt: `"How many months do you plan to save?"`
6. Create a variable called `perMonth` and assign it the value of `totalGoal` divided by `months`.
7. Print the statement in this format:
```
To reach your goal, you need to save $${perMonth} per month.
```

Output (assuming user inputted `500` as `totalGoal` and `5` as `months`):
```
To reach your goal, you need to save $100 per month.
```

<details>
<summary>Answer</summary>

```javascript
const totalGoal = prompt("What is your total savings goal?");
const weeks = prompt("How many weeks do you plan to save?");
const perWeek = totalGoal / weeks;
console.log(`To reach your goal, you need to save $${perWeek} per week.`);

const months = prompt("How many months do you plan to save?");
const perMonth = totalGoal / months;
console.log(`To reach your goal, you need to save $${perMonth} per month.`);
```
</details>

## Level 3: Compare Weekly and Monthly Savings

8. Create a variable called `comparison` and assign it the value of `perMonth` minus `perWeek` multiplied by 4 (assuming 4 weeks in a month).
9. Print the statement in this format:
```
The difference between saving weekly and monthly is $${comparison}.
```

Output (assuming user inputted `500` as `totalGoal`, `10` as `weeks`, and `5` as `months`):
```
The difference between saving weekly and monthly is $-50.
```

<details>
<summary>Answer</summary>

```javascript
const totalGoal = prompt("What is your total savings goal?");
const weeks = prompt("How many weeks do you plan to save?");
const perWeek = totalGoal / weeks;
console.log(`To reach your goal, you need to save $${perWeek} per week.`);

const months = prompt("How many months do you plan to save?");
const perMonth = totalGoal / months;
console.log(`To reach your goal, you need to save $${perMonth} per month.`);

const comparison = perMonth - (perWeek * 4);
console.log(`The difference between saving weekly and monthly is $${comparison}.`);
```
</details>
