---
title: Web Technologies
description: Introduction to JavaScript, its history, applications, variables, conditional statements, arrays, loops, functions, operators, and array methods
lecture: Lecture 2
semester: semester-4
subject: web-technologies
date: 2026-09-02
order: 15
---

# JavaScript Operators, Functions, Rest/Spread, and Array Methods

## Definition

This topic covers several important JavaScript concepts used to write shorter, reusable, and more efficient code:

- **Ternary Operator** — a short form of `if...else`.
- **Functions** — reusable blocks of code.
- **Rest Operator** — collects multiple values into an array.
- **Spread Operator** — expands an iterable into individual values.
- **Array Methods** — built-in methods for adding, removing, searching, transforming, and filtering array elements.

---

## Key Points

### 1. Ternary Operator

The **ternary operator** is a concise way to write a simple `if...else` statement.

### Syntax

```js
condition ? valueIfTrue : valueIfFalse;
```

It works as follows:

1. JavaScript evaluates the condition.
2. If the condition is `true`, the first value is returned.
3. If the condition is `false`, the second value is returned.

---

### 2. Functions in JavaScript

A **function** is a reusable block of code designed to perform a particular task.

Instead of writing the same code repeatedly, we write it once inside a function and **call** the function whenever we need it.

Functions can:

- Accept **parameters**
- Perform operations
- Return a **value**
- Be called multiple times

There are several ways to create functions in JavaScript.

#### Function Declaration

A function declaration uses the `function` keyword.

```js
function functionName(parameters) {
  // function body
}

functionName(arguments);
```

Example:

```js
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Khalid"));
```

---

#### Function Expression

A function expression stores a function inside a variable.

```js
const functionName = function (parameters) {
  // function body
};

functionName(arguments);
```

Example:

```js
const greet = function (name) {
  return `Hello, ${name}`;
};

console.log(greet("Khalid"));
```

**Important:** A function expression is not callable before its initialization.

---

### 3. Arrow Functions

An **arrow function** is a shorter syntax for writing functions.

```js
const functionName = (parameters) => {
  // function body
};
```

Arrow functions can use either an **explicit return** or an **implicit return**.

#### Explicit Return

When using `{ }`, you normally need the `return` keyword to return a value.

```js
const square = (number) => {
  return number * number;
};
```

This is useful when the function contains multiple statements.

```js
const calculate = (number) => {
  const result = number * 2;
  console.log(result);

  return result;
};
```

#### Implicit Return

When an arrow function contains a single expression, the expression can be returned automatically by removing `{ }`.

```js
const square = (number) => number * number;
```

It is equivalent to:

```js
const square = function (number) {
  return number * number;
};
```

Parentheses can also be omitted when there is only **one parameter**:

```js
const square = (number) => number * number;
```

---

### 4. Rest Operator

The **rest operator** is represented by `...`.

It collects multiple remaining values into a single **array**.

It is commonly used in function parameters.

```js
function sum(...numbers) {
  console.log(numbers);
}
```

Calling:

```js
sum(1, 2, 3, 4);
```

produces:

```text
[1, 2, 3, 4]
```

The important idea is:

> **Rest collects multiple values into one array.**

The rest parameter must be the **last parameter**.

```js
function example(first, ...others) {
  console.log(first);
  console.log(others);
}
```

---

### 5. Spread Operator

The **spread operator** is also represented by `...`, but its purpose is the opposite of rest.

It **expands** an iterable, such as an array, into individual values.

Example:

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2, 100];

console.log(arr3);
```

Output:

```text
[1, 2, 3, 4, 100]
```

The important idea is:

> **Spread expands values. Rest collects values.**

A useful comparison:

```js
// Rest: collects
function example(...numbers) {}

// Spread: expands
const numbers = [...arr1, ...arr2];
```

---

## Example / Code

### Ternary Operator

```js
const age = 20;

const result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

### Output

```text
Adult
```

---

### Functions

```js
function add(a, b) {
  return a + b;
}

const result = add(5, 3);

console.log(result);
```

### Output

```text
8
```

---

### Rest Operator

```js
function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
```

### Output

```text
10
```

---

### Spread Operator

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
```

### Output

```text
[1, 2, 3, 4]
```

---

# Array Methods

## Definition

JavaScript arrays provide built-in methods that make it easier to manipulate and process array data.

---

## Key Points

### `push()`

Adds one or more elements to the **end** of an array.

```js
const numbers = [1, 2];

numbers.push(3);

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

**Returns:** the new length of the array.

---

### `pop()`

Removes the **last** element from an array.

```js
const numbers = [1, 2, 3];

numbers.pop();

console.log(numbers);
```

Output:

```text
[1, 2]
```

**Returns:** the removed element.

---

### `unshift()`

Adds one or more elements to the **beginning** of an array.

```js
const numbers = [2, 3];

numbers.unshift(1);

console.log(numbers);
```

Output:

```text
[1, 2, 3]
```

**Returns:** the new length of the array.

---

### `shift()`

Removes the **first** element from an array.

```js
const numbers = [1, 2, 3];

numbers.shift();

console.log(numbers);
```

Output:

```text
[2, 3]
```

**Returns:** the removed element.

---

### `slice()`

Creates a **shallow copy of a portion** of an array.

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log(result);
```

Output:

```text
[20, 30, 40]
```

The second index is **not included**.

```text
slice(start, end)
             ↑
        not included
```

Unlike `push()`, `pop()`, `shift()`, and `unshift()`, `slice()` **does not modify the original array**.

---

### `includes()`

Checks whether an array contains a particular value.

It returns either `true` or `false`.

```js
const fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana"));
console.log(fruits.includes("mango"));
```

Output:

```text
true
false
```

---

### `map()`

`map()` creates a **new array** by applying a function to every element of the original array.

Example:

```js
const numbers = [5, 3, 8];

const squared = numbers.map((number) => number * number);

console.log(squared);
```

Output:

```text
[25, 9, 64]
```

The original array remains:

```text
[5, 3, 8]
```

`map()` is commonly used when you want to **transform every element**.

---

### `filter()`

`filter()` creates a **new array containing only the elements that satisfy a condition**.

Example:

```js
const numbers = [3, 4, 7, 12, 17];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);
```

Output:

```text
[4, 12]
```

The callback must produce a truthy/falsy result:

- `true` → element is included
- `false` → element is excluded

---

## Explanation

### Rest vs Spread

Although both use `...`, they perform opposite operations.

| Rest                                            | Spread                                               |
| ----------------------------------------------- | ---------------------------------------------------- |
| Collects values                                 | Expands values                                       |
| Produces an array when used as a rest parameter | Produces individual values                           |
| Commonly used in function parameters            | Commonly used with arrays/objects/function arguments |
| `function test(...values)`                      | `[...array]`                                         |

Think of it as:

```text
REST   → many values → one array
SPREAD → one array   → many values
```

---

### Mutating vs Non-Mutating Array Methods

Some array methods **change the original array**, while others create a new result.

**Mutate the original array:**

```text
push()
pop()
shift()
unshift()
```

**Do not mutate the original array:**

```text
slice()
map()
filter()
includes()
```

This distinction is important when working with arrays.

---

## Common Mistakes

### 1. Confusing `=` with a condition

Incorrect:

```js
age = 18 ? "Adult" : "Minor";
```

Usually, you want a comparison:

```js
age >= 18 ? "Adult" : "Minor";
```

---

### 2. Forgetting `return`

Incorrect:

```js
const square = (number) => {
  number * number;
};
```

Correct:

```js
const square = (number) => {
  return number * number;
};
```

Or use implicit return:

```js
const square = (number) => number * number;
```

---

### 3. Confusing Rest and Spread

Remember:

```js
function test(...numbers) {
  // REST → collects
}
```

```js
const numbers = [...array];
// SPREAD → expands
```

---

### 4. Thinking `map()` modifies the original array

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);
```

`doubled` is a new array. `numbers` remains unchanged.

---

### 5. Using `map()` when you need `filter()`

If you want to **transform** every element:

```js
numbers.map((n) => n * 2);
```

If you want to **select** certain elements:

```js
numbers.filter((n) => n > 5);
```

---

### 6. Forgetting that `slice()` excludes the end index

```js
const numbers = [10, 20, 30, 40];

numbers.slice(1, 3);
```

Result:

```text
[20, 30]
```

Index `3` is not included.

---

## Short Exam Notes

- **Ternary:** `condition ? trueValue : falseValue`
- **Function:** reusable block of code.
- **Function declaration:** `function name() {}`
- **Function expression:** `const name = function() {}`
- **Arrow function:** `const name = () => {}`
- **Explicit return:** uses `return`.
- **Implicit return:** single expression automatically returns.
- **Rest `...`:** collects values into an array.
- **Spread `...`:** expands values.
- **`push()`** → add to end.
- **`pop()`** → remove from end.
- **`unshift()`** → add to beginning.
- **`shift()`** → remove from beginning.
- **`slice()`** → copy part of an array; end index excluded.
- **`includes()`** → checks existence; returns Boolean.
- **`map()`** → transforms every element and returns a new array.
- **`filter()`** → selects elements based on a condition and returns a new array.
- **Rest = collect; Spread = expand.**
- `push/pop/shift/unshift` mutate the original array; `slice/map/filter/includes` do not.
