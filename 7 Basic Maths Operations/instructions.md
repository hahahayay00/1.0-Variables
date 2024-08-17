### Basic Math Operations

Math is an essential part of programming, and JavaScript makes it easy to perform basic math operations like addition, subtraction, multiplication, and division. These operations are fundamental building blocks that you'll use frequently in your code. Let’s explore how to perform these operations with variables.

## Steps

1. Start by creating two variables, `num1` and `num2`, and assign them some numbers.

    ```javascript
    const num1 = 10;
    const num2 = 5;
    ```

2. Now, let’s perform some basic math operations using these variables.

    - **Addition:** Combine `num1` and `num2` using the `+` operator.

    ```javascript
    const sum = num1 + num2;
    console.log(`Sum: ${sum}`);
    ```

    - **Subtraction:** Subtract `num2` from `num1` using the `-` operator.

    ```javascript
    const difference = num1 - num2;
    console.log(`Difference: ${difference}`);
    ```

    - **Multiplication:** Multiply `num1` and `num2` using the `*` operator.

    ```javascript
    const product = num1 * num2;
    console.log(`Product: ${product}`);
    ```

    - **Division:** Divide `num1` by `num2` using the `/` operator.

    ```javascript
    const quotient = num1 / num2;
    console.log(`Quotient: ${quotient}`);
    ```

3. Run your code in the terminal. You should see the results of the math operations:

    ```
    Sum: 15
    Difference: 5
    Product: 50
    Quotient: 2
    ```

<details>
<summary>Full Code</summary>

```javascript
const num1 = 10;
const num2 = 5;

const sum = num1 + num2;
console.log(`Sum: ${sum}`);

const difference = num1 - num2;
console.log(`Difference: ${difference}`);

const product = num1 * num2;
console.log(`Product: ${product}`);

const quotient = num1 / num2;
console.log(`Quotient: ${quotient}`);
```
</details>

### Explanation

JavaScript uses standard math operators to perform basic calculations:

- **Addition (`+`)**: Adds two numbers together.
- **Subtraction (`-`)**: Subtracts the second number from the first.
- **Multiplication (`*`)**: Multiplies two numbers.
- **Division (`/`)**: Divides the first number by the second.

These operations can be performed with any numbers stored in variables. You can even chain operations together, though it’s important to remember the order of operations (PEMDAS: Parentheses, Exponents, Multiplication and Division (left-to-right), Addition and Subtraction (left-to-right)).

### Important Notes

- **Order of Operations**: JavaScript follows the standard mathematical order of operations. Use parentheses `()` to control the order when necessary.
  
    ```javascript
    const result = (num1 + num2) * 2;  // Adds first, then multiplies
    console.log(`Result: ${result}`);
    ```

- **Division by Zero**: Be careful with division, especially with zero. Dividing by zero will result in `Infinity` or `NaN` (Not a Number) in JavaScript.

- **Decimals:** These operations also work with decimal numbers (floats). For example:

    ```javascript
    const num1 = 10.5;
    const num2 = 2.5;
    const sum = num1 + num2;
    console.log(`Sum: ${sum}`);  // Sum: 13
    ```

Understanding these basic math operations is key to performing more complex calculations as you advance in programming. Practice these until they become second nature!