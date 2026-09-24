---
title: JavaScript Events and Event Handling
description: Understanding JavaScript events, mouse and keyboard events, addEventListener(), the event object, form and input events, form validation, event bubbling, and event delegation
lecture: Lecture 5
semester: semester-4
subject: web-technologies
date: 2026-09-23
order: 12
---

# JavaScript Events

## Definition

A **JavaScript event** is an action or occurrence detected by the browser, such as a mouse click, key press, form submission, or change in an input field.

**Event handling** is the process of listening for these events and executing a function when they occur.

**Basic idea:**

```text
User Action → Event → Event Handler → JavaScript Code → Result
```

---

## Key Points

### 1. Common Event Categories

| Category          | Examples                                                  |
| ----------------- | --------------------------------------------------------- |
| Mouse events      | `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove` |
| Keyboard events   | `keydown`, `keyup`                                        |
| Form/Input events | `input`, `change`, `focus`, `blur`, `submit`              |

---

### 2. Mouse Events

- `click` — fires when an element is clicked.
- `dblclick` — fires when an element is double-clicked.
- `mouseover` — fires when the pointer enters an element.
- `mouseout` — fires when the pointer leaves an element.
- `mousemove` — fires when the pointer moves over an element.
- `mousedown` — fires when a mouse button is pressed.
- `mouseup` — fires when a mouse button is released.

Mouse events are commonly used to create interactive user interfaces.

---

### 3. Keyboard Events

- `keydown` — fires when a key is pressed.
- `keyup` — fires when a key is released.

The event object provides useful information:

```javascript
e.key;
```

Returns the actual key value.

Examples:

```text
"a"
"Enter"
"Escape"
```

```javascript
e.code;
```

Returns the physical key's code.

Example:

```text
"KeyA"
"Enter"
"Space"
```

> `keypress` is deprecated. Prefer `keydown` and `keyup`.

---

### 4. `addEventListener()`

`addEventListener()` is the modern way to attach an event handler to an element.

### Syntax

```javascript
element.addEventListener("event", function);
```

### Example

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

You can attach **multiple listeners** to the same event:

```javascript
btn.addEventListener("click", () => {
  console.log("First handler");
});

btn.addEventListener("click", () => {
  console.log("Second handler");
});
```

When the button is clicked, both handlers run.

### Advantages

- Keeps JavaScript separate from HTML.
- Allows multiple handlers.
- Makes interactive behavior easier to organize.
- Listeners can later be removed with `removeEventListener()`.

---

## Example / Code

### Mouse Event Example

```html
<button id="btn">Click Me</button>

<div id="box">Move the mouse here</div>

<script>
  const btn = document.getElementById("btn");
  const box = document.getElementById("box");

  btn.addEventListener("click", () => {
    console.log("Button clicked");
  });

  box.addEventListener("mouseover", () => {
    console.log("Mouse entered");
  });

  box.addEventListener("mouseout", () => {
    console.log("Mouse left");
  });

  box.addEventListener("mousemove", () => {
    console.log("Mouse is moving");
  });
</script>
```

---

### Keyboard Event Example

```javascript
document.addEventListener("keydown", (e) => {
  console.log("Key:", e.key);
  console.log("Code:", e.code);
});

document.addEventListener("keyup", (e) => {
  console.log("Key released:", e.key);
});
```

If the user presses `A`:

```text
e.key  → "a"
e.code → "KeyA"
```

If the user presses Enter:

```text
e.key  → "Enter"
e.code → "Enter"
```

---

## Explanation

When the user performs an action, the browser creates an **event**.

For example:

```text
User clicks button
        ↓
Browser detects click
        ↓
"click" event occurs
        ↓
Event listener runs
        ↓
Callback function executes
```

The callback function is the code that should run when the event occurs.

---

# The Event Object

## Definition

When an event occurs, JavaScript can provide an **event object** containing information about that event.

It is commonly written as `e` or `event`.

### Example

```javascript
button.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.type);
});
```

### Important Properties

| Property          | Meaning                                                 |
| ----------------- | ------------------------------------------------------- |
| `e.target`        | The element that originally triggered the event         |
| `e.currentTarget` | The element whose event listener is currently executing |
| `e.type`          | The type of event                                       |
| `e.key`           | The key pressed in a keyboard event                     |
| `e.code`          | The physical key code                                   |

### Important Difference

Consider:

```javascript
parent.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
});
```

If a button inside the parent is clicked:

```text
e.target         → button
e.currentTarget  → parent
```

This distinction becomes especially important when learning **event delegation**.

---

# Form and Input Events

## Key Points

### `input`

Fires whenever the input's value changes.

```javascript
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});
```

Useful for live validation and search.

### `change`

Fires when an input's value changes and the change is committed.

### `focus`

Fires when an input becomes active.

```javascript
input.addEventListener("focus", () => {
  console.log("Input focused");
});
```

### `blur`

Fires when an input loses focus.

### `submit`

Fires when a form is submitted.

**Important:** Attach the `submit` listener to the **form**, rather than relying only on the submit button.

---

# Basic Form Validation

## Definition

**Form validation** checks whether user input satisfies required rules before the application processes it.

Common validation rules include:

- Required fields cannot be empty.
- Email should have a reasonable format.
- Password should meet a minimum length.
- Numbers should be within an allowed range.

## Example / Code

```html
<form id="form">
  <input id="name" type="text" placeholder="Name" />
  <input id="email" type="email" placeholder="Email" />
  <input id="password" type="password" placeholder="Password" />

  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!name || !email || password.length < 8) {
      console.log("Invalid input");
      return;
    }

    console.log("Form is valid");
  });
</script>
```

## Explanation

Normally, submitting a form can cause the browser to perform its default submission behavior.

```javascript
e.preventDefault();
```

prevents that default behavior so JavaScript can process the form itself.

The validation then checks the values before continuing.

---

# Event Bubbling

## Definition

**Event bubbling** means an event starts at the element where it occurred and then propagates upward through its parent elements.

For example:

```html
<div id="parent">
  <button id="child">Click Here</button>
</div>
```

If the button is clicked:

```text
Button handler
      ↓
Parent handler
      ↓
Higher parent
      ↓
Document
```

### Example

```javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Button clicked");
});
```

Clicking the button can produce:

```text
Button clicked
Parent clicked
```

### Stopping Bubbling

If you do not want the event to continue propagating:

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("Button clicked");
});
```

---

# Event Delegation

## Definition

**Event delegation** is a technique where one event listener is placed on a parent element to handle events originating from its children.

It works because of **event bubbling**.

## Example / Code

```html
<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

```javascript
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log("Clicked:", e.target.textContent);
  }
});
```

## Explanation

Instead of adding three separate listeners:

```javascript
html.addEventListener(...);
css.addEventListener(...);
javascript.addEventListener(...);
```

we add **one listener** to the `<ul>`.

When an `<li>` is clicked:

```text
<li> clicked
      ↓
event bubbles
      ↓
<ul> listener receives event
      ↓
e.target identifies the <li>
```

### Why Use Event Delegation?

- Fewer event listeners.
- Cleaner code.
- Useful for lists containing many elements.
- Works particularly well with dynamically created elements.

---

# Todo List Example

Event delegation is especially useful for a Todo List.

```javascript
const list = document.querySelector(".todo-list");

list.addEventListener("click", (e) => {
  if (e.target.matches(".delete-btn")) {
    e.target.parentElement.remove();
  }
});
```

One listener can handle delete buttons for existing **and dynamically added** Todo items.

---

## Common Mistakes

### 1. Calling the function immediately

❌ Wrong:

```javascript
button.addEventListener("click", sayHello());
```

This executes the function immediately.

✅ Correct:

```javascript
button.addEventListener("click", sayHello);
```

Or:

```javascript
button.addEventListener("click", () => {
  sayHello();
});
```

---

### 2. Using `keypress`

❌ Avoid:

```javascript
document.addEventListener("keypress", ...);
```

✅ Prefer:

```javascript
document.addEventListener("keydown", ...);
```

or:

```javascript
document.addEventListener("keyup", ...);
```

---

### 3. Listening only to the submit button

For form handling, prefer:

```javascript
form.addEventListener("submit", ...);
```

rather than only:

```javascript
button.addEventListener("click", ...);
```

This also handles submission through keyboard interaction.

---

### 4. Forgetting `preventDefault()`

If JavaScript should control the form submission:

```javascript
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

---

### 5. Confusing `target` and `currentTarget`

```text
target         → element that triggered the event
currentTarget  → element whose listener is executing
```

---

### 6. Creating too many listeners

For large or dynamic lists, consider **event delegation** instead of attaching a listener to every child.

---

# Short Exam Notes

- **Event:** An action detected by the browser.
- **Event handler:** Code/function executed in response to an event.
- `click` → mouse click.
- `dblclick` → double click.
- `mouseover` → pointer enters an element.
- `mouseout` → pointer leaves an element.
- `mousemove` → pointer moves.
- `keydown` → key pressed.
- `keyup` → key released.
- `keypress` → deprecated; avoid it.
- `addEventListener()` → attaches an event listener.
- `e.target` → element that triggered the event.
- `e.currentTarget` → element running the listener.
- `e.type` → event type.
- `e.key` → actual keyboard key.
- `submit` → form submission event.
- `preventDefault()` → prevents the browser's default action.
- **Event bubbling:** event propagates from target toward ancestors.
- `stopPropagation()` → stops propagation.
- **Event delegation:** one parent listener handles child events.
- Event delegation relies on **event bubbling**.
