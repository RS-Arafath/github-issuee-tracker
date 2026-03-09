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