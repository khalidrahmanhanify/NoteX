---
title: Asynchronous JavaScript
description: Understanding asynchronous JavaScript, synchronous and asynchronous execution, Promises and their states, Promise handling, async/await, Fetch API, GET and POST requests, error handling, array destructuring, and common tools for asynchronous operations
lecture: Lecture 6
semester: semester-4
subject: web-technologies
date: 2026-09-30
order: 11
---

# Asynchronous JavaScript

## Definition

**Asynchronous JavaScript** is a programming approach that allows time-consuming tasks to run without blocking the main JavaScript thread.

This means JavaScript can start an operation—such as fetching data from a server—and continue executing other code while waiting for the operation to finish.

**Main purpose:** Keep applications responsive and prevent the user interface (UI) from freezing.

---

## Key Points

### 1. Synchronous vs Asynchronous

| Synchronous                               | Asynchronous                                |
| ----------------------------------------- | ------------------------------------------- |
| Executes tasks sequentially               | Allows waiting operations to complete later |
| Each task can block the next task         | Other code can continue while waiting       |
| Can cause UI freezing for slow operations | Helps keep the UI responsive                |
| Example: normal sequential code           | Example: `fetch()`, `setTimeout()`          |

### 2. Example of Asynchronous Execution

```javascript
console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");
}, 1000);

console.log("Task 3");
```

### 3. Promise

A **Promise** is a JavaScript object that represents the eventual result of an asynchronous operation.

A Promise has three states:

- **Pending** — operation is still in progress.
- **Fulfilled** — operation completed successfully.
- **Rejected** — operation failed.

### 4. Promise Methods

- `.then()` → handles a fulfilled Promise.
- `.catch()` → handles a rejected Promise.
- `.finally()` → runs after the Promise settles, regardless of success or failure.

### 5. Async/Await

`async` and `await` provide a cleaner way to work with Promises.

- `async` makes a function return a Promise.
- `await` pauses execution **inside the async function** until the Promise settles.
- `try...catch` is commonly used for error handling.

### 6. Fetch API

The **Fetch API** is a modern browser API for making HTTP requests.

It can be used for:

- `GET` requests
- `POST` requests
- Sending and receiving JSON
- Communicating with APIs

It is generally easier to use than the older `XMLHttpRequest` API.

### 7. Destructuring

**Destructuring** allows values to be extracted directly from arrays or objects.

---

## Example / Code

### 1. Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed.");
  }
});
```

### 2. Handling a Promise

```javascript
myPromise
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done."));
```

### 3. Async/Await

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

### 4. GET Request with Fetch

```javascript
async function getData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();

  console.log(data);
}

getData();
```

### 5. POST Request with Fetch

```javascript
fetch("https://api.example.com/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ key: "value" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### 6. Checking Fetch Errors

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
```

### 7. Array Destructuring

```javascript
const arr = ["ali", "ahmad"];

const [name1, name2] = arr;

console.log(name1);
console.log(name2);
```

---

## Explanation

### Asynchronous Execution

For:

```javascript
console.log("Task 1");

setTimeout(() => console.log("Task 2"), 1000);

console.log("Task 3");
```

JavaScript produces:

1. `Task 1` is printed.
2. `setTimeout()` schedules `Task 2`.
3. JavaScript continues immediately.
4. `Task 3` is printed.
5. After approximately 1 second, `Task 2` is printed.

The important point is that `setTimeout()` **does not block the rest of the code**.

### Promise Flow

A Promise can be thought of as a placeholder for a future result:

```text
Pending
   ↓
 ┌───────────┐
 ↓           ↓
Fulfilled   Rejected
```

For example, requesting data from a server may initially produce a pending Promise. When the server responds, the Promise becomes fulfilled or rejected.

### Async/Await

Consider:

```javascript
const response = await fetch(url);
```

`await` waits for the Promise to settle before continuing **that async function**. It does not freeze the entire JavaScript application.

### Important Fetch Detail

`fetch()` rejects its Promise for certain request/network failures, but an HTTP error such as **404 or 500 does not automatically reject the Promise**.

Therefore, checking:

```javascript
if (!response.ok) {
  throw new Error("Request failed");
}
```

is important when you want HTTP error statuses to enter your `catch` block.

### Promise vs Async/Await

| Feature              | Promises                        | Async/Await                           |
| -------------------- | ------------------------------- | ------------------------------------- |
| Syntax               | `.then()`, `.catch()`           | `await`, `try...catch`                |
| Readability          | Moderate                        | Usually easier                        |
| Error handling       | `.catch()`                      | `try...catch`                         |
| Underlying mechanism | Promise                         | Still uses Promises                   |
| Advantage            | Useful for chaining/composition | Easier to read sequential async logic |

**Important:** `async/await` does not replace or eliminate Promises. It is syntax built around Promises.

### Destructuring

Given:

```javascript
const arr = ["ali", "ahmad"];
const [name1, name2] = arr;
```

JavaScript assigns:

```text
name1 → 'ali'
name2 → 'ahmad'
```

Destructuring is especially useful when working with data returned from APIs.

### Tools for Asynchronous Operations

Common JavaScript libraries/tools include:

- **Axios** — HTTP client for making API requests.
- **Lodash** — utility library; not specifically an asynchronous library.
- **Bluebird** — Promise library with additional Promise-related features.

---

## Output

For:

```javascript
console.log("Task 1");

setTimeout(() => console.log("Task 2"), 1000);

console.log("Task 3");
```

Output:

```text
Task 1
Task 3
Task 2
```

For the destructuring example:

```text
ali
ahmad
```

---

## Common Mistakes

1. **Thinking asynchronous means multiple JavaScript threads.**
   JavaScript's main execution is generally single-threaded; asynchronous behavior is coordinated through browser/runtime mechanisms and the event loop.

2. **Thinking `await` blocks the entire program.**
   It pauses the execution of the current `async` function, not the whole application.

3. **Forgetting `await response.json()`.**

   ```javascript
   const data = await response.json();
   ```

   `response.json()` itself returns a Promise.

4. **Assuming `fetch()` rejects for every HTTP error.**
   Check `response.ok` when appropriate.

5. **Using `await` outside an appropriate async context.**
   In common code, `await` is used inside an `async` function, although modern JavaScript also supports top-level `await` in ES modules.

6. **Confusing Promise states.**
   A Promise is either pending, fulfilled, or rejected.

7. **Thinking async/await is a completely different mechanism from Promises.**
   `async/await` works on top of Promises.

8. **Using `Lodash` as an asynchronous library.**
   Lodash is primarily a general-purpose utility library.

---

## Short Exam Notes

- **Asynchronous JavaScript:** Allows operations to complete later without blocking the main execution flow.
- **Synchronous:** Operations execute sequentially and can block later operations.
- **Promise:** Represents the eventual result of an asynchronous operation.
- **Promise states:** Pending → Fulfilled or Rejected.
- **`.then()`** → handles success.
- **`.catch()`** → handles errors/rejection.
- **`.finally()`** → executes after settlement regardless of outcome.
- **`async`** → makes a function return a Promise.
- **`await`** → waits for a Promise inside an async function.
- **Fetch API:** Used for HTTP requests.
- **`response.json()`** → reads the response body as JSON and returns a Promise.
- **`response.ok`** → indicates whether the HTTP response status is successful.
- **POST request:** Usually specifies `method`, `headers`, and `body`.
- **Destructuring:** Extracts values directly from arrays or objects.
- **Async/await is built on Promises.**
- **Main benefit:** Better responsiveness and cleaner asynchronous code.
