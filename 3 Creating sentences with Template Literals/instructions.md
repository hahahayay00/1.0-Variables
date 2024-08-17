### Version 2: Creating Dynamic Greetings with Template Literals

# Dynamic Greetings with Template Literals

In this lesson, you'll learn how to create dynamic messages using template literals. Template literals make it easier to combine variables and text, especially when working with strings.

## Steps

1. Start by creating a variable `name` and assign it your first name.

    ```javascript
    const name = 'Alice';
    ```

2. Create a greeting message using template literals. Assign it to a variable called `greeting`.

    ```javascript
    const greeting = `Hello, ${name}! Welcome to the course.`;
    ```

3. Print the `greeting` variable to the console.

    ```javascript
    console.log(greeting);
    ```

4. Run your code in the terminal. It should display a personalized greeting message.

    ```
    Hello, Alice! Welcome to the course.
    ```

<details>
<summary>Full Code</summary>

```javascript
const name = 'Alice';
const greeting = `Hello, ${name}! Welcome to the course.`;
console.log(greeting);
```

</details>

## Explanation of Template Literals

Template literals are a feature in JavaScript that allows you to embed variables directly into strings. They are enclosed by backticks (`` ` ``) and use `${}` for embedding variables.

### Important Notes

- **Why Template Literals?** They provide a cleaner and more readable syntax compared to traditional string concatenation.
- **Best Practice:** Use template literals when you need to combine multiple variables or include expressions within a string. This will make your code easier to read and maintain.

## Explanation of Dynamic Content

Creating dynamic content in programming means generating output that can change based on the values of variables or user input. Instead of hardcoding specific text or values, you use variables to hold data, which can be altered during the execution of the program, leading to different outputs each time.

#### Example of Dynamic Content:

Imagine you are building a personalized greeting card generator. Instead of creating a separate card for each person, you can create one template and fill in the details using variables.

```javascript
const recipientName = 'Emily';
const message = `Dear ${recipientName}, wishing you a wonderful day!`;
console.log(message);
```

In this example, the `recipientName` variable can be changed to any other name, and the greeting message will adjust accordingly. 

- If `recipientName` is set to `'Emily'`, the output will be:
  ```
  Dear Emily, wishing you a wonderful day!
  ```

- If `recipientName` is changed to `'James'`, the output will be:
  ```
  Dear James, wishing you a wonderful day!
  ```

This is what we mean by "dynamic content"—the content changes dynamically based on the values you provide, making your code more flexible and reusable.