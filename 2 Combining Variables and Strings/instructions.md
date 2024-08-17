# Combining Strings and Variables

In this lesson, you'll learn how to create sentences by combining strings and variables. This is a fundamental concept in programming that allows you to create dynamic content based on the values stored in your variables.

## Steps

1. Start by creating a variable `firstName` and assigning it your first name.

    ```javascript
    const firstName = 'John';
    ```

2. Next, create another variable `lastName` and assign it your last name.

    ```javascript
    const lastName = 'Doe';
    ```

3. Now, combine `firstName` and `lastName` into a new variable called `fullName` using string concatenation.

    ```javascript
    const fullName = firstName + ' ' + lastName;
    ```

4. Use `console.log` to print `fullName` to the console.

    ```javascript
    console.log(fullName);
    ```

5. Run your code in the terminal. It should display your full name.

    ```
    John Doe
    ```

<details>
<summary>Full Code</summary>

```javascript
const firstName = 'John';
const lastName = 'Doe';
const fullName = firstName + ' ' + lastName;
console.log(fullName);
```

</details>

## Explanation

String concatenation is a way to combine multiple strings into one by using `+`. In the example above, we combined the `firstName` and `lastName` variables with a space in between (`' '`).

### Important Notes

- **Reminder on `const` and `let`:** Use `const` when the value of the variable will not change throughout your program. Use `let` if the value is expected to change.
- **Avoid Hardcoding:** Instead of writing the full name directly, we use variables. This approach is more flexible and allows for easier updates.