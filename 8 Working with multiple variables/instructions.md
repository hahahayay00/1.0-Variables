### Working with Multiple Variables

In programming, it's common to work with multiple variables at once. You might need to combine their values, perform operations on them, or use them together to create more complex logic. Understanding how to manage multiple variables effectively is an important skill.

Let’s explore how to work with multiple variables by creating and manipulating them in different ways.

## Steps

1. Start by creating three variables: `length`, `width`, and `height`. Assign them numerical values that could represent the dimensions of a box.

    ```javascript
    const length = 10;
    const width = 5;
    const height = 8;
    ```

2. Let’s calculate the volume of the box by multiplying these three variables together. Store the result in a new variable called `volume`.

    ```javascript
    const volume = length * width * height;
    console.log(`Volume: ${volume}`);
    ```

3. Now, calculate the surface area of the box using the formula: 
   
    ```
    Surface Area = 2 * (length * width + width * height + height * length)
    ```

    Store the result in a variable called `surfaceArea`.

    ```javascript
    const surfaceArea = 2 * (length * width + width * height + height * length);
    console.log(`Surface Area: ${surfaceArea}`);
    ```

4. Let’s create a summary message that includes all these variables and their calculated values. Use a template literal to combine them into a single string.

    ```javascript
    const summary = `The box has dimensions of ${length}x${width}x${height}, a volume of ${volume}, and a surface area of ${surfaceArea}.`;
    console.log(summary);
    ```

5. Run your code in the terminal. You should see a detailed summary of the box’s dimensions, volume, and surface area.

    ```
    The box has dimensions of 10x5x8, a volume of 400, and a surface area of 340.
    ```

<details>
<summary>Full Code</summary>

```javascript
const length = 10;
const width = 5;
const height = 8;

const volume = length * width * height;
console.log(`Volume: ${volume}`);

const surfaceArea = 2 * (length * width + width * height + height * length);
console.log(`Surface Area: ${surfaceArea}`);

const summary = `The box has dimensions of ${length}x${width}x${height}, a volume of ${volume}, and a surface area of ${surfaceArea}.`;
console.log(summary);
```
</details>

### Explanation

When working with multiple variables, you can perform various operations and calculations using their values. In this example, we calculated the volume and surface area of a box using three different variables. We then combined these variables into a summary message using a template literal.

### Important Notes

- **Consistency in Variable Names:** When working with multiple variables, use clear and consistent names that describe their purpose. This makes your code easier to read and understand.
  
- **Using Parentheses in Calculations:** In more complex calculations, use parentheses `()` to ensure that operations are performed in the correct order according to the mathematical order of operations.

- **Combining Variables:** Template literals (`` ` ``) make it easy to combine multiple variables into a single string. This is especially useful when you need to create dynamic messages or summaries.

### Exercise: Box Calculator

Let’s create a small program where the user inputs the dimensions of a box, and the program calculates and displays the volume and surface area.

1. Use `prompt()` to ask the user for the `length`, `width`, and `height` of the box. Convert the input values to numbers using `parseFloat()`.

    ```javascript
    const length = parseFloat(prompt('Enter the length of the box:'));
    const width = parseFloat(prompt('Enter the width of the box:'));
    const height = parseFloat(prompt('Enter the height of the box:'));
    ```

2. Calculate the volume and surface area using the same formulas as above.

    ```javascript
    const volume = length * width * height;
    const surfaceArea = 2 * (length * width + width * height + height * length);
    ```

3. Display a summary message using `console.log()`.

    ```javascript
    const summary = `The box has dimensions of ${length}x${width}x${height}, a volume of ${volume}, and a surface area of ${surfaceArea}.`;
    console.log(summary);
    ```

4. Run the code and input different dimensions to see how the calculations change.

<details>
<summary>Full Code</summary>

```javascript
const length = parseFloat(prompt('Enter the length of the box:'));
const width = parseFloat(prompt('Enter the width of the box:'));
const height = parseFloat(prompt('Enter the height of the box:'));

const volume = length * width * height;
const surfaceArea = 2 * (length * width + width * height + height * length);

const summary = `The box has dimensions of ${length}x${width}x${height}, a volume of ${volume}, and a surface area of ${surfaceArea}.`;
console.log(summary);
```
</details>