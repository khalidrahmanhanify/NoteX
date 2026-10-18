---
title: Modern JavaScript and Browser Storage
description: Understanding modern JavaScript features including template literals, optional chaining, nullish coalescing, JavaScript modules, JSON serialization and parsing, and browser storage using Local Storage and Session Storage, with practical examples of persistent data storage
lecture: Lecture 7
semester: semester-4
subject: web-technologies
date: 2026-10-07
order: 10
---

# Modern JavaScript and Browser Storage

## Definition

Modern JavaScript provides features that make code shorter, safer, and easier to maintain. Browser Storage allows web applications to save data in the user's browser for later use.

Topics covered in this lecture:

- Template Literals
- Optional Chaining (`?.`)
- Nullish Coalescing (`??`)
- JavaScript Modules (`import` and `export`)
- JSON
- Local Storage and Session Storage
- Practical To-Do List using Local Storage

## Key Points

### 1. Template Literals

Template literals allow strings to contain variables, expressions, and multiple lines. They use backticks (`` ` ``) instead of single or double quotes.

- `${expression}` inserts a variable or evaluates an expression inside a string.
- They support multiline strings.

### 2. Optional Chaining (`?.`)

Optional chaining safely accesses object properties that might not exist.

- Returns `undefined` if the value before `?.` is `null` or `undefined`.
- Prevents errors when accessing missing nested properties.

### 3. Nullish Coalescing (`??`)

The nullish coalescing operator provides a default value only when the left-hand operand is `null` or `undefined`.

### 4. JavaScript Modules

Modules organize JavaScript code into separate files and allow code reuse.

- `export`: Makes variables and functions available to other modules.
- `export default`: Provides the module's default export.
- `import`: Imports exported values from another module.
- Named exports require curly braces when imported.
- Default imports do not require curly braces.
- Browser scripts using `import` must use `type="module"`.

### 5. JSON (JavaScript Object Notation)

JSON is a text-based format used to exchange and store structured data.

- `JSON.stringify()`: Converts a JavaScript value into a JSON string.
- `JSON.parse()`: Converts a valid JSON string into a JavaScript value.

JSON supports objects, arrays, strings, numbers, booleans, and `null`.

### 6. Local Storage and Session Storage

Both APIs store key-value pairs in the browser. Their values are stored as strings.

| Feature               | Local Storage                                       | Session Storage                            |
| --------------------- | --------------------------------------------------- | ------------------------------------------ |
| Lifetime              | Until cleared                                       | Normally until the tab's page session ends |
| After closing the tab | Data remains                                        | Data is normally cleared                   |
| Data format           | Strings                                             | Strings                                    |
| Methods               | `setItem()`, `getItem()`, `removeItem()`, `clear()` | Same methods                               |

Objects and arrays should generally be converted to JSON strings before being stored.

## Example / Code

### 1. Template Literals

```js
const name = "Alice";
const role = "Developer";

const greeting = `Hello, ${name}!
You are a ${role}.
Next year, you will be a Senior ${role}.`;

const math = `2 + 2 = ${2 + 2}`;

console.log(greeting);
console.log(math);
```

### 2. Optional Chaining

```js
const user = {
  name: "Ahmad",
  address: {
    city: "Kabul",
  },
};

console.log(user.name);
console.log(user?.address?.city);
console.log(user?.contact?.phone);
```

### 3. Nullish Coalescing

```js
let name = "Mansoor";
let age = 0;

// Logical OR
const name1 = name || "Guest";
const age1 = age || "Unknown";

console.log(`Name: ${name1}, Age: ${age1}`);

// Nullish Coalescing
const name2 = name ?? "Guest";
const age2 = age ?? "Unknown";

console.log(`Name: ${name2}, Age: ${age2}`);
```

### 4. Modules

File: `mymath.js`

```js
const add = (a, b) => {
  return a + b;
};

const multi = (a, b) => {
  return a * b;
};

const PI = 3.14;

export default PI;
export { add, multi };
```

File: `Module.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Modules</title>
  </head>
  <body>
    <script type="module">
      import myPI from "./mymath.js";
      import { add, multi } from "./mymath.js";

      console.log(myPI);
      console.log(add(23, 14));
      console.log(multi(12, 45));
    </script>
  </body>
</html>
```

### 5. JSON

File: `JSON.html`

```html
<script>
  let obj = {
    name: "Ahmad",
    dept: "BIT",
  };

  console.log(obj);

  const stringObj = JSON.stringify(obj);
  console.log(stringObj);

  const originalObj = JSON.parse(stringObj);
  console.log(originalObj);
</script>
```

### 6. Local Storage: Student Records

File: `task.html`

```html
<script>
  let students = JSON.parse(localStorage.getItem("students")) || [];

  function addStudent(name, dept) {
    students.push({ name, dept });

    localStorage.setItem("students", JSON.stringify(students));
  }
</script>
```

Example usage:

```js
addStudent("Ahmad", "BIT");
addStudent("Mansoor", "BCS");

console.log(students);
```

### 7. To-Do List Project

File: `todolist.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To-Do List</title>
  </head>
  <body>
    <div>
      <input type="text" id="task" placeholder="Task..." />
      <input type="text" id="priority" placeholder="Priority" />
      <button id="addBtn">Add</button>
    </div>

    <div id="showTasks"></div>

    <script src="./taskfunction.js"></script>
  </body>
</html>
```

File: `taskfunction.js`

```js
const taskInput = document.querySelector("#task");
const priorityInput = document.querySelector("#priority");
const addBtn = document.querySelector("#addBtn");
const showTask = document.querySelector("#showTasks");

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", () => {
  const tv = taskInput.value.trim();
  const pv = priorityInput.value.trim();

  if (tv === "" || pv === "") {
    alert("Please add details");
    return;
  }

  taskList.push({
    task: tv,
    priority: pv,
  });

  localStorage.setItem("tasks", JSON.stringify(taskList));

  taskInput.value = "";
  priorityInput.value = "";

  displayTask();
});

function displayTask() {
  showTask.replaceChildren();

  for (const t of taskList) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const strong = document.createElement("strong");

    strong.textContent = t.priority;
    p.append(strong, document.createTextNode(` ${t.task}`));
    div.appendChild(p);
    showTask.appendChild(div);
  }
}

displayTask();
```

## Explanation

### 1. Template Literals

Backticks allow multiline strings and variable interpolation.

```js
const name = "Alice";
console.log(`Hello, ${name}!`);
```

The `${name}` expression is replaced with the value of the variable.

### 2. Optional Chaining

```js
user?.address?.city;
```

JavaScript checks each optional link. If `user` or `user.address` is `null` or `undefined`, the expression returns `undefined` instead of throwing a property-access error.

### 3. Nullish Coalescing

In the example, `age` is `0`.

- `age || "Unknown"` returns `"Unknown"` because zero is falsy.
- `age ?? "Unknown"` returns `0` because zero is not nullish.

Use `??` when values such as `0`, `false`, or an empty string are valid.

### 4. Modules

The `mymath.js` file exports a default value (`PI`) and two named functions (`add` and `multi`).

```js
export default PI;
export { add, multi };
```

The HTML file imports these values and calls the functions. Run the example through a local web server because JavaScript modules may not work correctly when opened directly using `file://`.

### 5. JSON

The JSON example follows three steps:

1. Create a JavaScript object.
2. Use `JSON.stringify()` to convert the object into a string.
3. Use `JSON.parse()` to convert the string back into an object.

This process is useful for sending data to APIs and saving structured data in browser storage.

### 6. Student Records

The statement below retrieves previously saved students:

```js
let students = JSON.parse(localStorage.getItem("students")) || [];
```

If no student data exists, the program uses an empty array.

The `addStudent()` function adds a new student object and saves the updated array as a JSON string.

### 7. To-Do List

The project combines several JavaScript concepts:

- `querySelector()` selects HTML elements.
- `addEventListener()` handles button clicks.
- `.value` retrieves input values.
- `.trim()` removes surrounding whitespace.
- Arrays store multiple tasks.
- Objects store each task's description and priority.
- `JSON.stringify()` converts the task array into a string.
- `localStorage.setItem()` saves the tasks.
- `displayTask()` displays the saved tasks on the page.

The program loads previously saved tasks when the page opens. After a new task is added, it saves the updated array and refreshes the display.

The code uses `textContent` and DOM element creation to display user input safely instead of inserting it directly through `innerHTML`.

## Output (if any)

### 1. Template Literals

```js
Hello, Alice!
You are a Developer.
Next year, you will be a Senior Developer.
2 + 2 = 4
```

### 2. Optional Chaining

```
Ahmad
Kabul
undefined
```

### 3. Nullish Coalescing

```
Name: Mansoor, Age: Unknown
Name: Mansoor, Age: 0
```

### 4. Modules

```
3.14
37
540
```

### 5. JSON

The string output is:

```js
{"name":"Ahmad","dept":"BIT"}
```

The first and third console outputs display the JavaScript object.

### 6. Student Records

After calling `addStudent("Ahmad", "BIT")`, the array contains:

```js
[
  {
    name: "Ahmad",
    dept: "BIT",
  },
];
```

The data is also saved in Local Storage under the key `"students"`.

### 7. To-Do List

If the user enters `Complete assignment` as the task and `High` as the priority, the page displays:

```
High Complete assignment
```

The task remains available after reloading the page because it was saved in Local Storage.

## Common Mistakes

1. Using single or double quotes instead of backticks for template literal interpolation.
2. Confusing optional chaining (`?.`) with nullish coalescing (`??`).
3. Assuming `??` replaces every falsy value.
4. Importing a default export using curly braces.
5. Forgetting `type="module"` when using imports in browser scripts.
6. Storing objects directly in Local Storage without using `JSON.stringify()`.
7. Parsing invalid JSON without handling the error.
8. Assuming Local Storage is private or secure enough for passwords and sensitive authentication data.
9. Using `localStorage.clear()` when only one key should be removed.
10. Inserting untrusted user input with `innerHTML`, which can introduce cross-site scripting (XSS) vulnerabilities.
11. Forgetting to save an updated array back to Local Storage.
12. Using a different JavaScript filename in the HTML script reference.

## Short Exam Notes (very concise revision points)

- Template literals: Backticks and `${}`.
- Optional chaining (`?.`): Safely accesses properties; returns `undefined` when an optional link is nullish.
- Nullish coalescing (`??`): Fallback for `null` or `undefined`.
- Logical OR (`||`): Fallback for any falsy value.
- Modules: `export` shares values; `import` uses them.
- Default export: Imported without curly braces.
- Named export: Imported with curly braces.
- JSON: `stringify()` converts to JSON text; `parse()` converts JSON text to a JavaScript value.
- Local Storage: Persists until cleared.
- Session Storage: Normally lasts for the tab's page session.
- Storage methods: `setItem()`, `getItem()`, `removeItem()`, `clear()`.
- To-do list: Combines DOM manipulation, events, arrays, objects, JSON, and Local Storage.
