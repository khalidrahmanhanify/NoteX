---
title: JavaScript DOM and Dynamic Webpage Manipulation
description: Understanding the Document Object Model (DOM), selecting and modifying HTML elements, working with text, attributes, classes, styles, creating and inserting elements, and performing basic form validation
lecture: Lecture 4
semester: semester-4
subject: web-technologies
date: 2026-09-16
order: 13
---

# JavaScript DOM

## Definition

The **Document Object Model (DOM)** is a programming interface that represents an HTML or XML document as a **hierarchical tree of nodes**.

When an HTML page is loaded in a browser, the browser creates a DOM representation of that page. JavaScript can then use the DOM to:

- Find HTML elements
- Read and change content
- Change attributes
- Change CSS styles
- Add and remove elements
- Validate form input
- Dynamically update the webpage

The `document` object is the main entry point for accessing the DOM.

---

## Key Points

### 1. DOM Tree

The DOM represents a webpage as a tree-like structure.

Important node relationships:

| Term              | Meaning                                                        |
| ----------------- | -------------------------------------------------------------- |
| **Document node** | Represents the complete HTML document                          |
| **Element node**  | Represents an HTML element such as `<p>`, `<div>`, or `<h1>`   |
| **Text node**     | Represents text inside an element                              |
| **Attribute**     | Additional information such as `id`, `class`, `src`, or `href` |
| **Parent**        | A node that contains another node                              |
| **Child**         | A node contained inside another node                           |
| **Sibling**       | Nodes that have the same parent                                |

Example:

```html
<ul>
  <li>Green</li>
  <li>Blue</li>
</ul>
```

Here:

- `<ul>` is the parent.
- Each `<li>` is a child of `<ul>`.
- The two `<li>` elements are siblings.
- `Green` and `Blue` are text nodes.

---

### 2. The `document` Object

`document` represents the currently loaded HTML document.

It allows JavaScript to find, create, and modify elements.

```javascript
console.log(document.title);

document.title = "My JavaScript Page";
```

The first statement reads the page title, while the second changes it.

---

### 3. Selecting Elements

JavaScript provides several methods for selecting elements.

#### `getElementById()`

Selects an element using its unique `id`.

```javascript
const title = document.getElementById("title");
```

If no matching element exists, it returns `null`.

---

#### `getElementsByName()`

Selects elements whose `name` attribute matches the supplied value.

```javascript
const inputs = document.getElementsByName("username");
```

It can return multiple elements.

---

#### `getElementsByTagName()`

Selects elements according to their HTML tag.

```javascript
const items = document.getElementsByTagName("li");
```

This selects all `<li>` elements.

---

#### `getElementsByClassName()`

Selects elements that contain a specified class.

```javascript
const laptops = document.getElementsByClassName("laptop");
```

Multiple elements can be returned.

---

#### `querySelector()`

Uses a **CSS selector** and returns the **first matching element**.

```javascript
const first = document.querySelector(".laptop");

if (first) {
  first.innerText = "First laptop";
}
```

Common selectors:

```javascript
document.querySelector("#title"); // ID
document.querySelector(".item"); // Class
document.querySelector("p"); // Tag
document.querySelector("ul li"); // li inside ul
```

---

#### `querySelectorAll()`

Uses a CSS selector and returns **all matching elements**.

```javascript
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  item.innerText = "Updated item";
});
```

### `querySelector()` vs `querySelectorAll()`

```text
querySelector()     → first matching element
querySelectorAll()  → all matching elements
```

Both methods use CSS selector syntax.

---

### 4. Changing Text

#### `innerText`

`innerText` gets or sets the **visible text** of an element.

```javascript
function changeText() {
  document.getElementById("loc").innerText = "Please do not clear this text";
}
```

If HTML markup is assigned to `innerText`, it is treated as ordinary text rather than HTML.

---

#### `textContent`

`textContent` gets or sets the text content of a node.

```javascript
const message = document.querySelector("#message");

message.textContent = "<strong>Hello</strong>";
```

The `<strong>` tags are treated as text and are **not rendered as HTML**.

For plain text, especially user-provided text, `textContent` is generally a good choice.

---

### 5. Changing HTML

#### `innerHTML`

`innerHTML` gets or sets the HTML markup inside an element.

```javascript
const box = document.querySelector("#box");

box.innerHTML = "<strong>Hello</strong>";
```

The `<strong>` element is interpreted as HTML.

**Security warning:** Do not directly insert untrusted user input with `innerHTML`, because it can introduce **Cross-Site Scripting (XSS)** vulnerabilities.

---

### 6. `innerText` vs `textContent` vs `innerHTML`

| Property      | Purpose                                      |
| ------------- | -------------------------------------------- |
| `innerText`   | Reads/sets rendered visible text             |
| `textContent` | Reads/sets text content without parsing HTML |
| `innerHTML`   | Reads/sets HTML markup                       |

Example:

```javascript
element.innerText = "<b>Hello</b>";
```

Displays the characters:

```text
<b>Hello</b>
```

Whereas:

```javascript
element.innerHTML = "<b>Hello</b>";
```

renders:

**Hello**

---

### 7. Changing Attributes

HTML attributes provide additional information about elements.

Common attributes include:

- `id`
- `class`
- `href`
- `src`
- `alt`
- `title`
- `disabled`
- `data-*`

#### `getAttribute()`

Reads an attribute:

```javascript
const link = document.querySelector("a");

console.log(link.getAttribute("href"));
```

#### `setAttribute()`

Changes or adds an attribute:

```javascript
link.setAttribute("href", "https://example.com");
```

#### `removeAttribute()`

Removes an attribute:

```javascript
link.removeAttribute("title");
```

---

### 8. Direct Attribute Properties

Many common attributes can also be accessed directly as properties.

```javascript
const image = document.querySelector("img");

image.alt = "University building";
```

For an input:

```javascript
const input = document.querySelector("input");

input.value = "Khalil";
input.disabled = false;
```

Examples include:

```javascript
img.src;
img.alt;
input.value;
input.disabled;
link.href;
```

---

### 9. Working with Classes

#### `className`

`className` gets or sets the **entire** `class` attribute.

```javascript
const box = document.querySelector("#box");

box.className = "box active";
```

Be careful: assigning `className` replaces the existing class list.

---

#### `classList`

`classList` is used to work with individual classes.

Important methods:

```javascript
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");

console.log(box.classList.contains("active"));

box.classList.replace("old", "new");
```

| Method       | Purpose                                     |
| ------------ | ------------------------------------------- |
| `add()`      | Adds a class                                |
| `remove()`   | Removes a class                             |
| `toggle()`   | Adds/removes depending on whether it exists |
| `contains()` | Checks whether a class exists               |
| `replace()`  | Replaces one class with another             |

---

### 10. Changing CSS Styles

JavaScript can change inline CSS using the `style` property.

```javascript
const title = document.querySelector("h1");

title.style.color = "blue";
title.style.fontSize = "32px";
title.style.backgroundColor = "lightgray";
```

CSS property names are written in **camelCase**:

```text
background-color → backgroundColor
font-size        → fontSize
margin-top       → marginTop
```

For many style changes, using CSS classes with `classList` is usually cleaner and easier to maintain.

---

### 11. Creating Elements

`document.createElement()` creates a new DOM element.

```javascript
const li = document.createElement("li");

li.textContent = "Windows";
li.classList.add("os-item");

console.log(li);
```

The element exists in memory, but it is not visible on the webpage until it is inserted into the DOM.

---

### 12. Inserting Elements

#### `appendChild()`

Adds a node as the last child.

```javascript
const list = document.querySelector("#osList");

const li = document.createElement("li");

li.textContent = "Windows";

list.appendChild(li);
```

#### Other insertion methods

```javascript
element.append(...)
element.prepend(...)
element.before(...)
element.after(...)
```

- `append()` → adds content at the end
- `prepend()` → adds content at the beginning
- `before()` → inserts content before an element
- `after()` → inserts content after an element

---

### 13. DOM Manipulation Workflow

A typical DOM manipulation process is:

1. **Select** an existing element.
2. **Read** its content or attributes if necessary.
3. **Modify** its text, HTML, attributes, styles, or classes.
4. **Create** new elements if necessary.
5. **Insert** new elements into the DOM.
6. **Remove** elements when they are no longer required.

---

### 14. JavaScript Form Validation

JavaScript can inspect form values before a form is submitted.

Example:

```javascript
const username = document.querySelector("#username");
const message = document.querySelector("#message");

if (username.value.trim() === "") {
  message.textContent = "Username is required.";
} else {
  message.textContent = "Valid input.";
}
```

`trim()` removes whitespace from the beginning and end of the string.

Client-side validation improves the user experience, but it is **not a security boundary**. A server must validate untrusted input again.

---

## Example / Code

### Complete DOM Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>

  <body>
    <h1 id="title">Operating Systems</h1>

    <ul id="osList">
      <li class="os-item">Android</li>
      <li class="os-item">iOS</li>
    </ul>

    <button id="btn">Add Windows</button>

    <script>
      const title = document.querySelector("#title");
      const list = document.querySelector("#osList");
      const button = document.querySelector("#btn");

      title.textContent = "Mobile Operating Systems";

      button.addEventListener("click", function () {
        const li = document.createElement("li");

        li.textContent = "Windows";
        li.classList.add("os-item");

        list.appendChild(li);
      });
    </script>
  </body>
</html>
```

---

## Explanation

When the page loads:

1. `querySelector("#title")` selects the `<h1>`.
2. `querySelector("#osList")` selects the `<ul>`.
3. `querySelector("#btn")` selects the button.
4. `textContent` changes the heading.
5. When the button is clicked, JavaScript creates a new `<li>`.
6. `textContent` gives the new element its text.
7. `classList.add()` gives it a CSS class.
8. `appendChild()` inserts it into the `<ul>`.
9. The browser automatically updates the displayed webpage.

This demonstrates the basic DOM pattern:

```text
Select → Modify/Create → Insert → Browser updates page
```

---

## Output (if any)

Initially:

```text
Mobile Operating Systems

• Android
• iOS

[Add Windows]
```

After clicking **Add Windows**:

```text
Mobile Operating Systems

• Android
• iOS
• Windows

[Add Windows]
```

---

## Common Mistakes

### 1. Confusing `querySelector()` and `querySelectorAll()`

```javascript
document.querySelector(".item");
```

selects only the **first** matching element.

```javascript
document.querySelectorAll(".item");
```

selects **all** matching elements.

---

### 2. Forgetting `#` and `.` in CSS selectors

```javascript
document.querySelector("#title"); // ID
document.querySelector(".title"); // class
document.querySelector("h1"); // tag
```

---

### 3. Using `innerHTML` for untrusted input

Avoid:

```javascript
element.innerHTML = userInput;
```

when `userInput` is untrusted.

Prefer:

```javascript
element.textContent = userInput;
```

when you only need to display text.

---

### 4. Replacing all classes accidentally

This:

```javascript
element.className = "active";
```

replaces the existing class list.

If you only want to add a class:

```javascript
element.classList.add("active");
```

---

### 5. Creating an element but not inserting it

This creates an element:

```javascript
const li = document.createElement("li");
```

But it will not appear on the page until it is inserted:

```javascript
list.appendChild(li);
```

---

### 6. Assuming client-side validation is secure

JavaScript validation can be bypassed.

Therefore:

```text
Client-side validation → better user experience
Server-side validation  → security/trust boundary
```

---

## Short Exam Notes

- **DOM** = Document Object Model.
- DOM represents an HTML document as a **tree of nodes**.
- `document` is the main entry point to the DOM.
- `getElementById()` → selects by ID.
- `getElementsByName()` → selects by `name`.
- `getElementsByTagName()` → selects by tag.
- `getElementsByClassName()` → selects by class.
- `querySelector()` → returns the **first** CSS-selector match.
- `querySelectorAll()` → returns **all** CSS-selector matches.
- `innerText` → visible text.
- `textContent` → text without HTML parsing.
- `innerHTML` → reads/writes HTML markup.
- `getAttribute()` → reads an attribute.
- `setAttribute()` → changes/adds an attribute.
- `removeAttribute()` → removes an attribute.
- `className` → replaces the complete class attribute.
- `classList` → manages individual classes.
- `createElement()` → creates a new element.
- `appendChild()` → adds a node as the last child.
- `append()` / `prepend()` → add content at the end/beginning.
- `before()` / `after()` → insert around an element.
- Client-side validation improves UX but **does not replace server-side validation**.
- **Basic DOM workflow:** Select → Read/Modify → Create → Insert.
