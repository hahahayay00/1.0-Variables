# Instructions

Let's learn how to get user input in JavaScript using the `prompt` function.

## Steps

1. Create a variable `userAge` and use the `prompt` function to ask for the user's age:

```javascript
const userAge = prompt('How old are you? ');
```

2. Now, let's use template literals to create a personalized message with the user's input:

```javascript
const userAge = prompt('How old are you? ');
const message = `Wow, you're ${userAge} years old!`;
```

3. Add a `console.log` to display the message:

```javascript
const userAge = prompt('How old are you? ');
const message = `Wow, you're ${userAge} years old!`;
console.log(message);
```

4. Run the code. You should see a prompt in the console:

```
How old are you?
```

5. Enter your age (for example, 25) and press Enter. You'll then see the output:

```
Wow, you're 25 years old!
```

<details>
<summary>Full code</summary>

```javascript
const userAge = prompt('How old are you? ');
const message = `Wow, you're ${userAge} years old!`;
console.log(message);
```
</details>

## Understanding the `prompt` Function

The `prompt` function in JavaScript:

1. Displays a dialog box with a message and an input field.
2. Pauses the execution of the code until the user enters a value and clicks OK.
3. Returns the user's input as a string.

### Important Notes:

- The `prompt` function always returns a string, even if the user enters a number.
- If you need to perform calculations with the input, you'll need to convert it to a number using functions like `parseInt()` or `parseFloat()`.
- In many modern environments, especially server-side JavaScript, `prompt` is not available. It's primarily used in browser-based applications.

### Example with Number Conversion:

```javascript
const userAgeStr = prompt('How old are you? ');
const userAge = parseInt(userAgeStr);
const futureAge = userAge + 10;
console.log(`In 10 years, you'll be ${futureAge} years old!`);
```

This script converts the user's input to a number, adds 10 to it, and displays the result.