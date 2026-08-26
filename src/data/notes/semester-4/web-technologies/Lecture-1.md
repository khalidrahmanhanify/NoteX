---
title: Web Technologies
description: Introduction to JavaScript, its history, applications, variables, conditional statements, arrays, and loops
lecture: Lecture 1
semester: semester-4
subject: web-technologies
date: 2026-08-26
order: 16
---

# Web Technologies — Lecture 1

## Definition

JavaScript is a **high-level, dynamically typed programming language** mainly used to add **interactivity and dynamic behavior** to web pages.

- It runs in web browsers using a JavaScript engine.
- It can also run outside the browser using environments such as **Node.js**.
- It works together with:
  - **HTML** → structure/content
  - **CSS** → presentation/style
  - **JavaScript** → behavior/interactivity

- JavaScript supports multiple programming paradigms, including:
  - Event-driven programming
  - Functional programming
  - Object-oriented programming

> **Important correction:** JavaScript is standardized as **ECMAScript**. JavaScript and ECMAScript are often used interchangeably in introductory discussions, but ECMAScript is the language specification, while JavaScript is an implementation of that specification.

---

## Key Points

### 1. History of JavaScript

- Created in **1995** by **Brendan Eich** at Netscape Communications.
- Its original name was **Mocha**.
- It was later called **LiveScript**.
- It was eventually named **JavaScript**, partly for marketing reasons and to benefit from the popularity of Java at the time.
- **Netscape Navigator** was one of the first browsers to support JavaScript.
- In **1997**, JavaScript was standardized as **ECMAScript** by **Ecma International**.
- **ECMAScript 2015 (ES6)** introduced many important modern features, including:
  - `let` and `const`
  - Arrow functions
  - Classes
  - Modules
  - Promises

### 2. Why JavaScript?

JavaScript is widely used because:

- It runs in modern web browsers.
- It can be used for both **frontend and backend** development.
- It has a large ecosystem.
- Popular JavaScript frameworks/libraries include **React, Angular, and Vue.js**.
- It can be used to build:
  - Websites
  - Web applications
  - APIs
  - Server-side applications
  - Desktop applications
  - Mobile applications

### 3. Applications of JavaScript

JavaScript can be used for:

- Client-side form validation
- Dynamic menus and drop-downs
- Showing dates and times
- Creating clocks
- Showing dialogs such as:
  - `alert()`
  - `confirm()`
  - `prompt()`

- Responding to user events such as clicks and keyboard input
- Updating webpage content without reloading the entire page

---

# Variables in JavaScript

## Definition

A **variable** is a named reference used to store a value that a program can use and, depending on how it is declared, change during execution.

JavaScript variables can contain values such as:

- Numbers
- Strings
- Booleans
- Objects
- Arrays
- Functions
- And other JavaScript data types

---

## Key Points

JavaScript provides three main variable declarations:

| Declaration | Scope    | Can Reassign? | Can Redeclare in Same Scope? |
| ----------- | -------- | ------------: | ---------------------------: |
| `var`       | Function |           Yes |                          Yes |
| `let`       | Block    |           Yes |                           No |
| `const`     | Block    |          No\* |                           No |

- A `const` variable cannot be **reassigned**, but if it refers to an object or array, the contents of that object/array can still be modified.

### `var`

The older way of declaring variables.

```js
var x = 10;

x = 20; // allowed
var x = 30; // allowed
```

`var` is **function-scoped**, not block-scoped.

### `let`

Introduced with **ES6**.

```js
let age = 20;

age = 21; // allowed
// let age = 22; // Error in the same scope
```

`let` is **block-scoped**.

### `const`

Used when a variable should not be reassigned.

```js
const PI = 3.14;

// PI = 3.14159; // Error
```

`const` is also **block-scoped**.

---

## Example / Code

```js
var x = 10;
let y = 20;
const PI = 3.14;

console.log(x);
console.log(y);
console.log(PI);
```

---

## Explanation

The three declarations create variables with different rules.

- `x` can be reassigned and redeclared.
- `y` can be reassigned but cannot be redeclared in the same scope.
- `PI` cannot be reassigned or redeclared.

### Recommended modern practice

In modern JavaScript:

- Prefer **`const`** by default.
- Use **`let`** when the value needs to be reassigned.
- Avoid `var` in new code unless there is a specific reason to use it.

---

# Conditional Statements

## Definition

Conditional statements allow a program to **make decisions** by executing different code depending on whether a condition is true or false.

JavaScript provides several conditional structures:

1. `if`
2. `if...else`
3. `if...else if...else`
4. `switch`

---

## Example / Code

### 1. `if` Statement

Used when code should execute only when a condition is true.

```js
const marks = 80;

if (marks === 80) {
  console.log("Your grade is B");
}
```

### 2. `if...else`

Used when there are two possible paths.

```js
const marks = 50;

if (marks > 59) {
  console.log("You are pass");
} else {
  console.log("You are fail");
}
```

### 3. `if...else if...else`

Used when multiple conditions need to be checked.

```js
const page = "Contact";

if (page === "About") {
  console.log("You are on the About page");
} else if (page === "Home") {
  console.log("You are on the Home page");
} else if (page === "Contact") {
  console.log("You are on the Contact page");
} else {
  console.log("Wrong page selected");
}
```

### 4. `switch`

Useful when one value needs to be compared against several possible cases.

```js
const grade = "A";

switch (grade) {
  case "A":
    console.log("You have Grade A");
    break;

  case "B":
    console.log("You have Grade B");
    break;

  case "C":
    console.log("You have Grade C");
    break;

  default:
    console.log("You are fail");
}
```

---

## Explanation

The condition in an `if` statement is evaluated as either **truthy or falsy**.

For example:

```js
const age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

Because `20 >= 18` is `true`, the code inside the `if` block executes.

### `===` vs `==`

The slides use `==`, but modern JavaScript generally recommends **strict equality (`===`)**.

```js
5 == "5"; // true
5 === "5"; // false
```

`===` checks both **value and type**, making it safer and more predictable.

---

## Output

For:

```js
const page = "Contact";
```

the output is:

```text
You are on the Contact page
```

For:

```js
const grade = "A";
```

the output is:

```text
You have Grade A
```

---

# Arrays in JavaScript

## Definition

An **array** is an ordered collection of values stored under a single variable.

JavaScript arrays are **zero-indexed**, meaning the first element has index `0`.

> **Important correction:** JavaScript arrays should not be described simply as values stored in "contiguous memory locations." JavaScript arrays are high-level dynamic objects, and their internal implementation is engine-dependent. For introductory purposes, think of an array as an **ordered collection of elements accessed by numeric indexes**.

---

## Key Points

An array can contain multiple values:

```js
const students = ["Ali", "Ahmad", "Kareem"];
```

The indexes are:

| Index | Value      |
| ----: | ---------- |
|   `0` | `"Ali"`    |
|   `1` | `"Ahmad"`  |
|   `2` | `"Kareem"` |

### Array Literal

The most common way to create an array is with `[]`.

```js
const numbers = [1, 2, 3, 4];
```

Your original note had:

```js
const arr [1, 2, 3, 4]
```

This is incorrect because the assignment operator `=` is missing.

Correct:

```js
const arr = [1, 2, 3, 4];
```

---

## Accessing Array Elements

```js
const arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
```

---

## Updating Array Elements

Even when an array is declared with `const`, its elements can be changed.

```js
const arr = [1, 2, 3, 4];

arr[0] = 10;

console.log(arr);
```

---

## Output

```text
[10, 2, 3, 4]
```

This demonstrates an important distinction:

```js
const arr = [1, 2, 3];

arr[0] = 10; // allowed

// arr = [4, 5, 6]; // Error
```

`const` prevents reassignment of the **array variable**, but it does not make the array immutable.

---

# Creating Arrays with `new Array()`

## Example / Code

An array can also be created using the `Array` constructor.

### Empty Array

```js
const emp = new Array();

emp[0] = "Saleem";
emp[1] = "Zabi";
emp[2] = "Raihan";

console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);
```

### Constructor with Values

```js
const emp = new Array("Mahmood", "Rabi", "Saber");

console.log(emp[0]);
console.log(emp[1]);
console.log(emp[2]);
```

---

## Explanation

Although `new Array()` works, **array literals are generally preferred** because they are simpler and easier to read:

```js
const students = ["Ali", "Ahmad", "Kareem"];
```

instead of:

```js
const students = new Array("Ali", "Ahmad", "Kareem");
```

### Important `Array` constructor behavior

Be careful with:

```js
new Array(4);
```

This creates an array with **length 4**, rather than an array containing the number `4`.

```js
new Array(4); // length: 4
new Array(4, 5); // [4, 5]
```

For this reason, array literals are usually clearer.

---

# Loops in JavaScript

## Definition

A **loop** repeatedly executes a block of code while a specified condition is satisfied.

Loops are useful when we need to perform the same operation multiple times.

JavaScript provides several types of loops:

- `for`
- `while`
- `do...while`

It also provides other iteration mechanisms, such as `for...of` and array methods such as `forEach()`.

---

## `for` Loop

### Definition

A `for` loop is commonly used when we know how to control the number of iterations, usually with a counter.

### Syntax

```js
for (initialization; condition; update) {
  // code to repeat
}
```

### Example / Code

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Explanation

The three parts are:

```js
let i = 0;
```

**Initialization** — creates the counter.

```js
i < 5;
```

**Condition** — determines whether the loop should continue.

```js
i++;
```

**Update** — increases the counter after each iteration.

### Output

```text
0
1
2
3
4
```

---

# `while` Loop

## Definition

A `while` loop repeatedly executes code **while its condition is true**.

## Example / Code

```js
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

## Explanation

The condition is checked **before** each iteration.

If the condition is initially false, the loop may execute **zero times**.

---

# `do...while` Loop

## Definition

A `do...while` loop executes its block first and checks the condition afterward.

## Example / Code

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```

## Explanation

Unlike `while`, a `do...while` loop always executes its body **at least once**, because the condition is checked after the first execution.

---

# Common Mistakes

### 1. Forgetting `=` when creating an array

❌ Incorrect:

```js
const arr [1, 2, 3];
```

✅ Correct:

```js
const arr = [1, 2, 3];
```

### 2. Forgetting that arrays are zero-indexed

```js
const arr = ["A", "B", "C"];
```

- `arr[0]` → `"A"`
- `arr[1]` → `"B"`
- `arr[2]` → `"C"`

### 3. Confusing `const` with immutable arrays

```js
const numbers = [1, 2, 3];

numbers[0] = 10; // allowed
```

But:

```js
numbers = [4, 5, 6]; // Error
```

### 4. Using `==` when `===` is more appropriate

Prefer:

```js
if (marks === 80)
```

over:

```js
if (marks == 80)
```

### 5. Forgetting `break` in `switch`

Without `break`, execution can continue into the next case.

```js
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
}
```

### 6. Creating an infinite loop

Always make sure the loop's condition can eventually become false.

❌ Example:

```js
let i = 0;

while (i < 5) {
  console.log(i);
}
```

Here, `i` never changes, so the condition remains true.

---

# Short Exam Notes

- **JavaScript** → high-level language used mainly for web development and interactivity.
- Created in **1995** by **Brendan Eich** at Netscape.
- **ECMAScript** → standardized specification of JavaScript.
- **ES6 / ECMAScript 2015** → major modernization of JavaScript.
- **HTML** → structure.
- **CSS** → presentation.
- **JavaScript** → behavior/interactivity.
- **Node.js** → allows JavaScript to run outside the browser.
- **`var`** → function-scoped; can be redeclared and reassigned.
- **`let`** → block-scoped; can be reassigned but not redeclared in the same scope.
- **`const`** → block-scoped; cannot be reassigned.
- **Array** → ordered collection of values.
- Arrays are **zero-indexed**.
- `arr[0]` → first element.
- Array literal → `const arr = [1, 2, 3]`.
- `new Array()` → another way to create arrays, but literals are generally preferred.
- **`if`** → executes code when a condition is true.
- **`if...else`** → chooses between two paths.
- **`if...else if...else`** → checks multiple conditions.
- **`switch`** → selects between multiple cases.
- **`for`** → commonly used with a counter.
- **`while`** → checks condition before execution.
- **`do...while`** → executes once before checking the condition.
- Prefer **`===`** over `==` for equality comparisons.
