### Variables and `console.log()`

Let’s get started with one of the basics: variables and how to see their values in the console. Variables are like containers where you can store data. Think of them as labels you can attach to different pieces of information.

For example, you might want to store your name or your favorite number in a variable. Once you have a variable, you can do all sorts of things with it—like printing it out to see what’s inside. 

That’s where `console.log()` comes in handy. We use `console.log()` when we want to show the value inside a variable.

## Steps

1. First, let’s create a variable called `name` and assign it your name as a string.

    ```javascript
    const name = 'Alex';
    ```

2. Next, we want to see what’s stored in our `name` variable. To do that, we use `console.log()`.

    ```javascript
    console.log(name);
    ```

3. Run your code in the terminal, and you should see your name displayed like this:

    ```
    Alex
    ```

4. Now, let’s create another variable called `age` and assign it a number.

    ```javascript
    const age = 25;
    ```

5. Again, use `console.log()` to print the value of `age`.

    ```javascript
    console.log(age);
    ```

6. Run the code, and you’ll see your age displayed in the console:

    ```
    25
    ```

<details>
<summary>Full Code</summary>

```javascript
const name = 'Alex';
console.log(name);

const age = 25;
console.log(age);
```
</details>

### Explanation of Variables and `console.log()`

- **Variables**: These are like storage boxes with labels. You can store different kinds of information in them, such as text (strings) or numbers.
  
- **`console.log()`**: This is a simple way to display information in the console. It helps you check the value of your variables or debug your code. This is very important as you go through the course!

### Important Notes

- **Using `const` and `let`:** Use `const` when you don’t plan to change the value of the variable. If you need to update the value later, use `let`.
  
- **Best Practice:** Always name your variables clearly so it’s easy to understand what data they hold. For example, `name` and `age` are clear and descriptive.
