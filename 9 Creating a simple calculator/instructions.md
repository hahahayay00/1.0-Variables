### Creating a Simple Calculator

Let’s create a simple calculator in JavaScript that performs basic arithmetic operations like multiplication. This will be a great way to apply what you’ve learned about variables, math operations, and `console.log()`.

We’ll start by building a calculator that multiplies two numbers. Then, you’ll be challenged to add more operations on your own!

## Steps (Level 1)

1. Start by creating two variables, `num1` and `num2`, and assign them any numbers you want to multiply.

    ```javascript
    const num1 = 8;
    const num2 = 5;
    ```

2. Now, multiply these two numbers and store the result in a new variable called `result`.

    ```javascript
    const result = num1 * num2;
    ```

3. Use `console.log()` to display the result of the multiplication.

    ```javascript
    console.log(`The result of multiplying ${num1} and ${num2} is: ${result}`);
    ```

4. Run your code in the terminal. You should see something like this:

    ```
    The result of multiplying 8 and 5 is: 40
    ```

<details>
<summary>Full Code for Level 1</summary>

```javascript
const num1 = 8;
const num2 = 5;
const result = num1 * num2;
console.log(`The result of multiplying ${num1} and ${num2} is: ${result}`);
```
</details>

### Try It Yourself: Other Operations

Now that you've seen how to multiply two numbers, try adding the other basic operations yourself! Here's what your output should look like for each:

- **Addition**:

    ```
    The result of adding 8 and 5 is: 13
    ```

- **Subtraction**:

    ```
    The result of subtracting 5 from 8 is: 3
    ```

- **Division**:

    ```
    The result of dividing 8 by 5 is: 1.6
    ```

Try coding these operations on your own. You can follow the same pattern as the multiplication example above.

---

## Level 2 Challenge: User Input Calculator

For the next challenge, let’s make the calculator more interactive by asking the user to input the two numbers. We’ll only show you the expected output, so try to code it yourself!

### Steps

1. Use `prompt()` to ask the user for two numbers.
2. Perform the multiplication operation with the user inputs.
3. Display the result using `console.log()`.

### Expected Output for Level 2:

- **If the user inputs 7 and 3**:

    ```
    The result of multiplying 7 and 3 is: 21
    ```

Try to code this yourself! Once you’ve done that, you can expand your calculator to include other operations as well.

---

<details>
<summary>Full Code for Level 2</summary>

```javascript
const num1 = parseFloat(prompt('Enter the first number:'));
const num2 = parseFloat(prompt('Enter the second number:'));

const result = num1 * num2;
console.log(`The result of multiplying ${num1} and ${num2} is: ${result}`);
```
</details>

---

By now, you should have a basic calculator that can multiply two numbers, either using predefined values or by taking user input. Feel free to expand on this by adding more operations or features.