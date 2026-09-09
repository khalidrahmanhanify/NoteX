---
title: JavaScript Closure, Objects, Strings, Date Object, and BOM
description: JavaScript closures, objects and object properties, arrays of objects, string methods, Date objects and methods, and the Browser Object Model (BOM)
lecture: Lecture 3
semester: semester-4
subject: web-technologies
date: 2026-09-09
order: 14
---

# JavaScript Closure, Objects, Strings, Date Object, and BOM

## Definition

This lecture covers several important JavaScript concepts:

- **Closures** — functions that retain access to variables from their outer scope.
- **Objects** — collections of key-value pairs used to represent structured data.
- **Strings** — sequences of characters with many built-in methods.
- **Date Object** — used to create, read, and modify dates and times.
- **Browser Object Model (BOM)** — provides JavaScript access to browser-related features through the `window` object.

---

# Closure

## Definition

A **closure** occurs when an inner function remembers and can access variables from its outer function's scope even **after the outer function has finished executing**.

The important idea is:

> A closure allows a function to remember variables from the environment where it was created.

## Key Points

- Closures are created when a function is defined inside another function.
- The inner function can access variables from the outer function.
- Those variables remain available even after the outer function finishes.
- Closures are commonly used for:
  - Data privacy
  - Counters
  - Function factories
  - Maintaining state

## Example / Code

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

## Explanation

When `createCounter()` executes:

```js
let count = 0;
```

creates the variable `count`.

The function then returns another function:

```js
return function () {
  count++;
  return count;
};
```

The returned function forms a **closure** over `count`.

Even though `createCounter()` has already finished executing, the returned function still has access to `count`.

Every time `counter()` is called:

```js
count++;
```

increases the same `count` variable.

## Output

```text
1
2
3
```

The important point is that `count` is **not recreated** every time `counter()` is called.

---

# JavaScript Objects

## Definition

A JavaScript **object** is a collection of related data and functionality represented using **key-value pairs**.

Example:

```js
const student = {
  id: 20,
  name: "Khalid",
  department: "BIT",
};
```

Here:

- `id`, `name`, and `department` are **properties**.
- `20`, `"Khalid"`, and `"BIT"` are their corresponding **values**.

JavaScript is often described as an **object-based language**, and objects are fundamental to the language. However, saying "almost everything is an object" is an oversimplification because JavaScript also has primitive values such as strings, numbers, booleans, `null`, `undefined`, `symbol`, and `bigint`.

## Key Points

### Creating an Object

Objects are commonly created using curly braces `{}`:

```js
const std = {
  key: "value",
  name: "Khalid",
};
```

The general syntax is:

```js
const objectName = {
  property: value,
};
```

A property's key is normally a string or symbol. When using object literal syntax, JavaScript allows keys to be written without quotation marks.

### Accessing Properties

There are two main ways.

**1. Dot notation**

```js
console.log(std.name);
```

**2. Bracket notation**

```js
console.log(std["name"]);
```

Bracket notation is especially useful when the property name is stored in a variable:

```js
const property = "name";

console.log(std[property]);
```

### Adding Properties

```js
std.age = 20;
std.dept = "BIT";
```

### Updating Properties

```js
std.name = "Khalid Rahman";
```

### Deleting Properties

```js
delete std.age;
```

### Methods

A function stored as an object property is commonly called a **method**.

```js
std.greeting = function () {
  console.log("Hello!");
};

std.greeting();
```

### Destructuring

**Object destructuring** extracts properties from an object and stores their values in variables.

```js
const std = {
  name: "Khalid",
  age: 20,
};

const { name, age } = std;

console.log(name);
console.log(age);
```

This is equivalent to getting:

```js
const name = std.name;
const age = std.age;
```

---

# Accessing Object Properties Using a Loop

## Example / Code

The `for...in` loop can be used to iterate over an object's enumerable property keys.

```js
const person = {
  name: "Ali",
  age: 28,
  gender: "Male",
};

for (const key in person) {
  console.log(key + " ------ " + person[key]);
}
```

## Explanation

During each iteration, `key` contains the **property name**.

For example:

```text
name
age
gender
```

To get the corresponding value, use:

```js
person[key];
```

Bracket notation is important here because `key` is a variable.

Do **not** write:

```js
person.key;
```

because that looks for a property literally named `"key"`.

## Output

```text
name ------ Ali
age ------ 28
gender ------ Male
```

---

# Array of Objects

## Definition

An **array of objects** is an array where each element is an object.

## Example / Code

```js
const students = [
  { id: 12, name: "Ali" },
  { id: 45, name: "Samar" },
  { id: 23, name: "Haron" },
];
```

Each element is an object:

```js
students[0];
students[1];
students[2];
```

You can access their properties using:

```js
console.log(students[0].name);
```

## Output

```text
Ali
```

You can also loop through the array:

```js
for (const student of students) {
  console.log(student.id, student.name);
}
```

## Output

```text
12 Ali
45 Samar
23 Haron
```

---

# Strings in JavaScript

## Definition

A **string** is a primitive value representing a sequence of characters.

Strings can contain:

- Letters
- Numbers
- Spaces
- Symbols
- Special characters

## Example / Code

```js
const str = "Hello World";
```

Strings can be created using:

```js
const str1 = "Hello";
const str2 = "Hello";
```

JavaScript also supports **template literals**:

```js
const name = "Ali";
const message = `Hello ${name}`;
```

## Key Points

Strings are **immutable** in JavaScript.

This means string methods do not modify the original string. Instead, they normally return a new string.

```js
const str = "Hello";

const newStr = str.toUpperCase();

console.log(str);
console.log(newStr);
```

## Output

```text
Hello
HELLO
```

---

# String Methods

## `replace()`

Replaces a matching part of a string with another value.

```js
const str = "Hello World";

console.log(str.replace("Hello", "Hi"));
```

### Output

```text
Hi World
```

By default, `replace()` replaces only the **first matching occurrence** when using a string as the search value.

---

## `slice()`

Extracts part of a string and returns a new string.

```js
const str = "Hello World";

console.log(str.slice(0, 5));
```

### Output

```text
Hello
```

Negative indexes count from the end:

```js
console.log(str.slice(-5));
```

### Output

```text
World
```

The same basic slicing concept applies to arrays.

---

## `toLowerCase()`

Converts a string to lowercase.

```js
const str = "HELLO";

console.log(str.toLowerCase());
```

### Output

```text
hello
```

---

## `toUpperCase()`

Converts a string to uppercase.

```js
const str = "hello";

console.log(str.toUpperCase());
```

### Output

```text
HELLO
```

---

## `toString()`

Returns a string representation of a value or object.

```js
const number = 100;

console.log(number.toString());
```

### Output

```text
"100"
```

---

## `split()`

Splits a string into an array based on a specified separator.

```js
const str = "Hello World";

console.log(str.split(" "));
```

### Output

```js
["Hello", "World"];
```

To split every character:

```js
console.log(str.split(""));
```

---

## `trim()`

Removes whitespace from the beginning and end of a string.

```js
const str = "   Hello World   ";

console.log(str.trim());
```

### Output

```text
Hello World
```

`trim()` does not remove spaces between words.

---

# JavaScript Date Object

## Definition

The **Date object** is a built-in JavaScript object used to work with dates and times.

## Example / Code

```js
const date = new Date();
```

This creates a `Date` object representing the current date and time.

You can also create a date using individual components:

```js
const date = new Date(2026, 8, 9);
```

### Important

The month parameter is **zero-indexed**:

```text
0  → January
1  → February
2  → March
...
8  → September
```

Therefore:

```js
new Date(2026, 8, 9);
```

represents **September 9, 2026**.

## Other Forms

```js
new Date();
```

Current date and time.

```js
new Date(milliseconds);
```

Creates a date based on milliseconds since the Unix epoch.

```js
new Date(dateString);
```

Creates a date from a date string.

```js
new Date(year, month, day, hours, minutes, seconds, milliseconds);
```

Creates a date using individual components.

---

# Date Get Methods

## Key Points

| Method              | Purpose                                 |
| ------------------- | --------------------------------------- |
| `getFullYear()`     | Gets the year                           |
| `getMonth()`        | Gets the month, `0–11`                  |
| `getDate()`         | Gets the day of the month, `1–31`       |
| `getDay()`          | Gets the day of the week, `0–6`         |
| `getHours()`        | Gets the hour, `0–23`                   |
| `getMinutes()`      | Gets minutes, `0–59`                    |
| `getSeconds()`      | Gets seconds, `0–59`                    |
| `getMilliseconds()` | Gets milliseconds, `0–999`              |
| `getTime()`         | Gets milliseconds since January 1, 1970 |
| `Date.now()`        | Gets the current timestamp              |

### Important Difference

Do not confuse:

```js
getDate();
```

with:

```js
getDay();
```

`getDate()` gives the **day of the month**.

```text
1 – 31
```

`getDay()` gives the **day of the week**.

```text
0 – Sunday
1 – Monday
2 – Tuesday
...
6 – Saturday
```

---

# Date Set Methods

## Definition

Set methods are used to modify parts of an existing `Date` object.

## Key Points

```js
date.setDate(15);
date.setFullYear(2027);
date.setHours(10);
date.setMilliseconds(500);
date.setMinutes(30);
date.setMonth(5);
date.setSeconds(45);
date.setTime(0);
```

For example:

```js
const date = new Date();

date.setFullYear(2030);

console.log(date);
```

The year of the existing date object is changed to `2030`.

---

# Browser Object Model (BOM)

## Definition

The **Browser Object Model (BOM)** provides JavaScript with objects and methods for interacting with the **web browser environment**.

The main BOM object is:

```js
window;
```

In a browser, many global functions and properties are available through `window`.

For example:

```js
window.alert("Hello");
```

can usually be written simply as:

```js
alert("Hello");
```

## Key Points

Important objects and properties associated with the browser environment include:

```text
window
├── document
├── location
├── history
├── navigator
├── screen
├── innerWidth
└── innerHeight
```

### Important Distinction

The **BOM** is about interacting with the browser environment.

The **DOM (Document Object Model)** specifically represents and allows JavaScript to manipulate the HTML document.

For example:

```js
document.querySelector("h1");
```

is primarily a **DOM** operation.

---

# Window Object Properties

## `window.innerWidth`

Returns the width of the browser's viewport in pixels.

```js
console.log(window.innerWidth);
```

## `window.innerHeight`

Returns the height of the browser's viewport in pixels.

```js
console.log(window.innerHeight);
```

---

# Window Object Methods

## `alert()`

Displays a message dialog.

```js
alert("Hello!");
```

The user normally sees the message with an **OK** button.

---

## `confirm()`

Displays a confirmation dialog.

```js
const result = confirm("Are you sure?");
```

It returns:

```js
true;
```

if the user selects OK, and:

```js
false;
```

if the user selects Cancel.

---

## `prompt()`

Displays a dialog asking the user to enter a value.

```js
const name = prompt("Enter your name:");

console.log(name);
```

The returned value is generally a **string**, or `null` if the user cancels.

---

## `open()`

Can request that the browser open a URL or window.

```js
window.open("https://example.com");
```

Modern browsers may restrict or block this depending on popup-blocking rules and whether it was triggered by a user action.

---

## `close()`

Requests that the current browser window be closed:

```js
window.close();
```

However, browsers generally prevent scripts from closing windows or tabs that the script did not open.

---

## `setTimeout()`

Executes a function **once after a specified delay**.

```js
setTimeout(function () {
  console.log("Hello");
}, 2000);
```

The delay is specified in milliseconds.

```text
1000 ms = 1 second
2000 ms = 2 seconds
```

### Output

After approximately 2 seconds:

```text
Hello
```

---

# Common Mistakes

### 1. Thinking a closure copies the variable

A closure does not simply make a copy of the value. The inner function retains access to the variable through its lexical environment.

### 2. Confusing `person.key` and `person[key]`

```js
person.key;
```

looks for a property literally named `"key"`.

```js
person[key];
```

uses the value stored in the `key` variable.

### 3. Forgetting that `getMonth()` starts at 0

```js
getMonth();
```

returns:

```text
0 = January
11 = December
```

### 4. Confusing `getDate()` and `getDay()`

```js
getDate() → day of month
getDay()  → day of week
```

### 5. Assuming string methods modify the original string

Strings are immutable.

```js
const str = "hello";

str.toUpperCase();

console.log(str);
```

Output:

```text
hello
```

You need to store the returned value:

```js
const newStr = str.toUpperCase();
```

### 6. Confusing `for...in` and `for...of`

For objects:

```js
for (const key in person) {
  console.log(key);
}
```

For iterable values such as arrays:

```js
for (const value of students) {
  console.log(value);
}
```

### 7. Thinking BOM and DOM are the same

- **BOM** → browser environment
- **DOM** → HTML document structure

---

# Short Exam Notes

- **Closure:** An inner function that retains access to variables from its outer lexical scope after the outer function has finished.
- **Object:** Collection of key-value pairs.
- **Property:** A named value belonging to an object.
- **Method:** A function stored as an object property.
- **Dot notation:** `object.property`
- **Bracket notation:** `object["property"]` or `object[property]`
- **Add property:** `object.age = 20`
- **Update property:** `object.age = 25`
- **Delete property:** `delete object.age`
- **Destructuring:** `const { name } = object`
- **`for...in`:** Iterates over enumerable property keys.
- **Array of objects:** An array whose elements are objects.
- **String:** Immutable sequence of characters.
- **`replace()`:** Replaces matching text.
- **`slice()`:** Extracts part of a string.
- **`split()`:** Converts a string into an array based on a separator.
- **`trim()`:** Removes whitespace from both ends.
- **`toUpperCase()`:** Converts to uppercase.
- **`toLowerCase()`:** Converts to lowercase.
- **`new Date()`:** Creates a Date object.
- **`getMonth()`:** Returns `0–11`.
- **`getDate()`:** Returns day of month `1–31`.
- **`getDay()`:** Returns weekday `0–6`.
- **BOM:** Browser Object Model.
- **Main BOM object:** `window`
- **`alert()`:** Displays a message.
- **`confirm()`:** Returns `true` or `false`.
- **`prompt()`:** Gets user input as a string or `null`.
- **`setTimeout()`:** Executes a function once after a delay.
