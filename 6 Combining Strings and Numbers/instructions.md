### Combining Strings and Numbers

In JavaScript, you can combine strings and numbers to create dynamic and meaningful messages. Template literals make this process easier and more readable, especially when you're dealing with multiple variables. Let's explore how you can use template literals to combine strings and numbers, followed by some exercises to put this into practice.

## Steps

1. Start by creating a variable called `name` and assign it a string value, such as your name.

    ```javascript
    const name = 'Chris';
    ```

2. Next, create a variable called `age` and assign it a number.

    ```javascript
    const age = 28;
    ```

3. Now, let's combine these two variables into a single message using a template literal.

    ```javascript
    const message = `${name} is ${age} years old.`;
    ```

4. Use `console.log()` to print the message to the console.

    ```javascript
    console.log(message);
    ```

5. Run your code in the terminal, and you should see something like this:

    ```
    Chris is 28 years old.
    ```

<details>
<summary>Full Code</summary>

```javascript
const name = 'Chris';
const age = 28;
const message = `${name} is ${age} years old.`;
console.log(message);
```
</details>

### Explanation

Template literals allow you to embed variables directly within your strings using `${}`. This makes your code cleaner and easier to read compared to traditional string concatenation with `+`.

### Exercise 1: Personalized Message

Let’s create a program that asks the user for their name and age, then prints a personalized message using template literals.

1. Use `prompt()` to ask the user for their name and store it in a variable `userName`.

    ```javascript
    const userName = prompt('What is your name?');
    ```

2. Use `prompt()` again to ask the user for their age and store it in a variable `userAge`.

    ```javascript
    const userAge = prompt('How old are you?');
    ```

3. Combine `userName` and `userAge` into a message using a template literal, and print it using `console.log()`.

    ```javascript
    const userMessage = `${userName} is ${userAge} years old.`;
    console.log(userMessage);
    ```

<details>
<summary>Full Code</summary>

```javascript
const userName = prompt('What is your name?');
const userAge = prompt('How old are you?');
const userMessage = `${userName} is ${userAge} years old.`;
console.log(userMessage);
```
</details>

### Exercise 2: Calculating Birth Year

Let’s take it a step further by calculating the user’s birth year based on their age, using template literals.

1. Start by asking the user for their age using `prompt()` and store it in a variable `age`.

    ```javascript
    const age = prompt('How old are you?');
    ```

2. Create a variable called `currentYear` and assign it the current year (e.g., `2024`).

    ```javascript
    const currentYear = 2024;
    ```

3. Calculate the user’s birth year by subtracting their age from the current year, and store it in a variable `birthYear`.

    ```javascript
    const birthYear = currentYear - age;
    ```

4. Create a message that combines the user’s birth year using a template literal, and print it using `console.log()`.

    ```javascript
    const birthYearMessage = `You were born in ${birthYear}.`;
    console.log(birthYearMessage);
    ```

5. Run the code and check the output in the console.

<details>
<summary>Full Code</summary>

```javascript
const age = prompt('How old are you?');
const currentYear = 2024;
const birthYear = currentYear - age;
const birthYearMessage = `You were born in ${birthYear}.`;
console.log(birthYearMessage);
```
</details>

### Important Notes

- **Input Validation:** When using `prompt()`, the input is always treated as a string. If you need to perform calculations with the input, consider converting it to a number using `parseInt()` or `Number()`.

- **Template Literals:** Using template literals (`` ` ``) provides a cleaner and more readable syntax compared to traditional string concatenation with `+`. It’s a best practice to use template literals whenever you're combining variables and strings.