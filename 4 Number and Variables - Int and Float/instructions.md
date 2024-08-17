### Number Variables: Int and Float

Numbers in JavaScript can be stored in variables just like strings. There are 2 types of numbers, whole numbers (integers) and numbers with decimal points (floats)

 Let's dive into how you can use both integers and floats in your code.

## Steps

1. Start by creating a variable called `age` and assign it a whole number (an integer).

    ```javascript
    const age = 30;
    ```

2. Now, let's create another variable called `height` and assign it a decimal number (a float).

    ```javascript
    const height = 5.9;
    ```

3. Use `console.log()` to print both `age` and `height` to the console.

    ```javascript
    console.log(age);
    console.log(height);
    ```

4. Run your code in the terminal, and you should see both values displayed:

    ```
    30
    5.9
    ```

<details>
<summary>Full Code</summary>

```javascript
const age = 30;
const height = 5.9;
console.log(age);
console.log(height);
```
</details>

### Explanation of Int and Float

- **Int (Integer):** An integer is a whole number with no decimal point. Examples include `1`, `42`, and `1000`. Integers are useful for counting or any scenario where you don't need fractions.
  
- **Float (Floating-point number):** A float is a number that includes a decimal point. Examples are `3.14`, `0.5`, and `2.718`. Floats are essential for calculations that require precision, such as measurements or financial calculations.

### Important Notes

- **Mixing Int and Float:** You can perform math operations with both integers and floats together. The result will usually be a float if at least one of the numbers is a float.
  
- **Precision of Floats:** Be aware that floating-point numbers can sometimes behave unpredictably in JavaScript due to how they are stored. For instance, `0.1 + 0.2` might not exactly equal `0.3`. This is a quirk of many programming languages, not just JavaScript.

By understanding how to work with both integers and floats, you can handle a wide range of numeric operations in your code. Whether you're dealing with ages, distances, or prices, you'll know how to store and manipulate these numbers correctly.