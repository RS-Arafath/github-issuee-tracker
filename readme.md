 # 📌 Description

GitHub Issues Tracker is a front-end web app that lets you create, view, and manage project issues in a familiar GitHub-style dashboard. Whether you're managing a personal project or keeping tabs on a small team's bugs and tasks, this tool gives you a simple and focused interface to stay organized.

**Live Demo:** [github-issuee-tracker.vercel.app](https://github-issuee-tracker.vercel.app/)

---

## ✨ Features

- 📋 **Issue Dashboard** — View all your issues in one place
- ➕ **Create New Issues** — Quickly add new issues with a single click
- 🔍 **Filter by Status** — Toggle between All, Open, and Closed issues
- 📊 **Issue Count Display** — See at a glance how many issues exist
- 🎨 **GitHub-inspired UI** — Familiar and intuitive design

---

## 🛠️ Tech Stack

- **HTML5** — Page structure
- **CSS3** — Styling and layout
- **JavaScript** — Dynamic behavior and state management
- **Vercel** — Deployment and hosting
---

# Answering Some Question:-

# 1️⃣ What is the difference between var, let, and const?

## JavaScript Variable Declarations: var, let, and const

## var
The var keyword is the traditional way to declare variables. It is
**function-scoped**, meaning a variable declared inside a function is available
throughout that entire function.

### Example

```javascript
var name = 'Arafath';
var snack = 'himel'; // No error, snack is overwritten
```

## let
The let keyword was introduced to fix issues with var. It is block-scoped,
meaning it only exists within the nearest set of curly braces {};

### Example
```Javascript
let score = 10;
 let score = 20; // Error: 'score' has already been declared
```

## const
Like let, const is block-scoped. It is used for variables that should remain constant and never be reassigned.
Initialization: must assign a value at the moment of declaration.
Immutability:cannot point the variable to a new value.

#### Objects & Arrays: still modify the contents of an object or array, but you cannot replace the entire object or array with a new one.

### Example:
```javascript
const PI = 3.14159;
// PI = 3; // Error: Assignment to constant variable

const colors = ["red", "blue"];
colors.push("green"); // its work;git
// colors = ["yellow"]; // Error: Assignment to constant variable
```
---
# 2️⃣ What is the spread operator (...)?
## Spread Operator (...)

The **spread operator (`...`)** is used to **expand or unpack elements** from an array, object, or iterable into individual items.

### Example with Array
```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
// [1, 2, 3, 4, 5]
```

### Example with Object
```javascript
const user = { name: "Arafath", age: 22 };
const updatedUser = {
  ...user,
  country: "Bangladesh"
};
console.log(updatedUser);
// { name: "Arafath", age: 20, country: "Bangladesh" }
```

### Common Uses
- Copy arrays or objects
- Merge arrays or objects
- Add new elements or properties

---

# 3️⃣ Difference between map(), filter(), and forEach()

These three methods are used to work with arrays in JavaScript.

### map()
- Creates a **new array**
- Transforms each element

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
// [2, 4, 6]
```

### filter()
- Creates a **new array**
- Returns elements that **match a condition**

```javascript
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);
// [2, 4]
```

### forEach()
- **Does not create a new array**
- Used to **run a function for each element**

```javascript
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});
```

### Quick Difference
| Method   | Returns New Array | Main Use |
|---------|------------------|---------|
| map()   |  Yes | Transform elements |
| filter()|  Yes | Select elements |
| forEach()|  No | Execute code for each item |

---

# 4️⃣ What is an arrow function?

An **arrow function** is a shorter way to write functions in JavaScript.  
It uses the **`=>` (arrow) syntax** and makes the code more concise.

### Example
```javascript
const greet = () => {
  console.log("Hello");
};
greet();
```

### With Parameters
```javascript
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));
// 5
```

### Short Form 

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));
// 12
```

### Key Points
- Uses `=>` instead of the `function` keyword  
- Shorter and cleaner syntax  
- Often used in **callbacks and array methods**
---

# 5️⃣ What are template literals?

**Template literals** are a way to write strings in JavaScript using **backticks (` `)** instead of quotes.  
They allow you to **embed variables and expressions inside a string easily**.

### Example
```javascript
const name = "Arafath";
const message = `Hello, ${name}!`;
console.log(message);
// Hello, Arafath!
```

### Multiple Lines
Template literals also support **multi-line strings**.

```javascript
const text = `This is line one
This is line two
This is line three`;
console.log(text);
```

### Key Points
- Uses **backticks (` `)** instead of `' '` or `" "`
- Allows **variable interpolation** using `${}`
- Supports **multi-line strings**
---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ and deployed on Vercel.