---
title: React Foundation
description: Introduction to React and its component-based architecture, including JSX, the Virtual DOM, functional and class components, props and validation, component composition, children props, event handling, conditional rendering, lists and keys, and an introduction to React Hooks
lecture: Lecture 8
semester: semester-4
subject: web-technologies
date: 2026-10-14
order: 9
---

# React Foundation

## Definition

React is a JavaScript library used to build user interfaces (UIs), especially for web applications. It was developed by Facebook, now Meta, and is maintained by Meta and the open-source community.

React uses a component-based architecture, where the user interface is divided into small, reusable pieces called components.

In this lecture, we studied React fundamentals, JSX, components, props, props validation, component composition, event handling, conditional rendering, and lists and keys. Hooks such as `useState` were introduced theoretically but were not practiced.

## Key Points

### 1. Introduction to React

- JavaScript library: React helps developers build user interfaces.
- Components: Reusable building blocks of a user interface.
- JSX: HTML-like syntax used to describe UI inside JavaScript.
- Virtual DOM: Helps React determine which parts of the UI need updating.
- Maintained by: Meta and the open-source community.

### 2. Why React?

React is useful because it provides:

- Reusable components: Write a component once and use it in multiple places.
- Efficient UI updates: React calculates changes and updates the relevant parts of the DOM.
- Component composition: Build complex interfaces from smaller components.
- Declarative UI: Describe what the UI should look like for a given state or set of props.

### 3. Single-Page Applications (SPA)

A Single-Page Application is a web application that typically loads one HTML document and updates its content dynamically as the user interacts with it.

- Uses JavaScript to update the interface.
- Commonly communicates with servers through APIs.
- Often exchanges data in JSON format.
- Can provide faster navigation after the initial load.

React can be used to build SPAs, but React itself is not limited to SPAs.

### 4. JSX

JSX stands for JavaScript XML. It is a syntax extension that allows developers to write HTML-like markup inside JavaScript.

Important rules:

- JSX expressions must return one parent element or a fragment (`<>...</>`).
- Use `{}` to insert JavaScript expressions.
- Use `className` instead of HTML's `class` attribute.
- Use camelCase for most event handlers, such as `onClick`.
- Close elements properly, including self-closing elements such as `<img />`.

### 5. Components

A component is a reusable piece of UI. Modern React primarily uses functional components.

Functional components are JavaScript functions that return JSX.

Class components are ES6 classes that extend `React.Component` and define a `render()` method. They remain supported, but functional components are preferred for most new React code.

### 6. Props

Props (properties) are inputs passed from a parent component to a child component.

- Props allow components to receive different data.
- Props are read-only from the receiving component's perspective.
- Props can contain strings, numbers, arrays, objects, functions, and JSX.
- The special `children` prop contains content placed between a component's opening and closing tags.

### 7. Props Validation

Props validation checks whether components receive values of expected types.

The `prop-types` package provides runtime validation for JavaScript React applications.

Common validators include:

- `PropTypes.string`
- `PropTypes.number`
- `PropTypes.bool`
- `PropTypes.array`
- `PropTypes.object`
- `PropTypes.func`

Use `.isRequired` when a prop is expected to be provided.

### 8. Component Composition

Component composition means combining smaller components to create larger interfaces.

Benefits include:

- Reusability
- Less duplicated code
- Easier maintenance
- Better organization

### 9. Event Handling

React events respond to user interactions.

Common event handlers include:

- `onClick`: Handles clicks.
- `onChange`: Handles changes to inputs.
- `onSubmit`: Handles form submission.

React event handlers receive functions. They should not be called immediately during rendering unless immediate execution is intended.

### 10. Conditional Rendering

Conditional rendering displays different UI depending on a condition.

Common techniques:

- `if` statements
- Ternary operator (`condition ? value1 : value2`)
- Logical AND (`&&`) for displaying content when a condition is true

### 11. Lists and Keys

React commonly uses JavaScript's `map()` method to render arrays as UI elements.

Each item should have a stable, unique `key` prop so React can track items when the list changes.

### 12. Hooks (Theoretical Introduction)

Hooks allow functional components to use React features such as state and effects.

The lecture introduced `useState`, but it was not practiced.

```jsx
const [state, setState] = useState(initialValue);
```

- `state`: Current state value.
- `setState`: Function used to update the state.
- `initialValue`: Initial state value.

## Example / Code

### 1. Creating a React Project with Vite

Run these commands in the terminal:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

Explanation:

- `npm create vite@latest my-app`: Creates a new project using Vite.
- `cd my-app`: Enters the project directory.
- `npm install`: Installs dependencies.
- `npm run dev`: Starts the development server.

When prompted by Vite, select React and JavaScript if those are the technologies you want to use.

### 2. JSX

```jsx
function Welcome() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to my application.</p>
    </div>
  );
}

export default Welcome;
```

### 3. Functional Component

```jsx
function Welcome() {
  return <h1>Hello</h1>;
}
```

### 4. Class Component

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}

export default Welcome;
```

### 5. Props

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Ali" />
      <Welcome name="Sara" />
    </div>
  );
}

export default App;
```

### 6. Props Validation

Install the package:

```bash
npm install prop-types
```

Example:

```jsx
import PropTypes from "prop-types";

function User({ name, age }) {
  return (
    <p>
      {name} ({age})
    </p>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default User;
```

### 7. Component Composition

```jsx
function Header() {
  return <h1>My App</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to the app.</p>
    </div>
  );
}

export default App;
```

### 8. Children Props

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>Description</p>
    </Card>
  );
}

export default App;
```

### 9. Event Handling

```jsx
function App() {
  function handleClick() {
    alert("Clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

export default App;
```

### 10. Conditional Rendering

Using an `if` statement:

```jsx
function Message({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back</h1>;
  }

  return <h1>Please log in</h1>;
}
```

Using a ternary operator:

```jsx
function Message({ isLoggedIn }) {
  return <h1>{isLoggedIn ? "Welcome back" : "Please log in"}</h1>;
}
```

### 11. Lists and Keys

```jsx
function App() {
  const students = ["Ali", "Sara", "John"];

  return (
    <ul>
      {students.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
```

### 12. useState (Theory Only)

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

## Explanation

### 1. JSX and Rendering

JSX describes the UI that a component should return. React processes JSX and renders the resulting elements into the browser DOM.

For example:

```jsx
<h1>Hello, React!</h1>
```

This describes a heading element. JSX resembles HTML, but it follows JavaScript and JSX syntax rules.

### 2. Functional vs. Class Components

| Feature           | Functional Component | Class Component              |
| ----------------- | -------------------- | ---------------------------- |
| Syntax            | JavaScript function  | ES6 class                    |
| Returning UI      | Returns JSX          | Uses `render()`              |
| State and effects | Hooks                | State and lifecycle methods  |
| Complexity        | Generally simpler    | Generally more verbose       |
| Modern usage      | Preferred            | Supported, often legacy code |

### 3. Props

In the example:

```jsx
<Welcome name="Ali" />
```

The parent passes `"Ali"` through the `name` prop. Inside `Welcome`, `props.name` contains `"Ali"`.

Props let the same component display different information without duplicating its structure.

### 4. Props Validation

`User.propTypes` defines the expected types of props.

- `name: PropTypes.string.isRequired` expects a string and marks it as required.
- `age: PropTypes.number` expects a number if supplied.

PropTypes provides development-time warnings; it does not automatically prevent invalid values or replace all runtime validation. In modern React, PropTypes is optional, and TypeScript is another common approach to type checking.

### 5. Component Composition and Children

The `App` component uses `Header` rather than duplicating the heading markup.

In the `Card` example, everything between `<Card>` and `</Card>` is passed through the `children` prop. This makes `Card` reusable for different content.

### 6. Event Handling

In this example:

```jsx
<button onClick={handleClick}>Click me</button>
```

React calls `handleClick` when the user clicks the button.

Writing `onClick={handleClick()}` would call the function immediately during rendering instead of passing the function for later execution.

### 7. Conditional Rendering

The `Message` component receives `isLoggedIn` as a Boolean prop.

- If it is `true`, the component displays `Welcome back`.
- If it is `false`, it displays `Please log in`.

Both the `if` statement and ternary operator can implement this behavior.

### 8. Lists and Keys

The `map()` method processes every student name and returns an `<li>` element.

The `key` identifies each list item among its siblings. For lists that can change, use a stable unique ID where possible instead of an array index or a value that may change.

### 9. Virtual DOM

The Virtual DOM is a conceptual representation of UI elements used by React's rendering system.

A simplified rendering process is:

1. A component renders its UI description.
2. When relevant props or state change, React renders the component again.
3. React reconciles the new result with the previous one.
4. React commits the necessary changes to the browser DOM.

React does not necessarily update only one changed DOM node in every situation; the exact work depends on reconciliation and the component structure.

### 10. useState

`useState(0)` creates a state variable with an initial value of `0`.

When the button is clicked, `setCount(count + 1)` requests a state update. React then renders the component again with the updated value.

This example is included because the slide introduced it, but Hooks were not practiced in class, according to the lecture coverage.

## Output (if any)

### 1. JSX and Functional Components

```text
Hello, React!
Welcome to my application.
```

### 2. Props

```text
Hello, Ali!
Hello, Sara!
```

### 3. Props Validation

For `<User name="Ahmad" age={20} />`, the component displays:

```text
Ahmad (20)
```

### 4. Component Composition

```text
My App
Welcome to the app.
```

### 5. Children Props

```text
Title
Description
```

Both lines appear inside the card container.

### 6. Event Handling

Clicking the button displays an alert:

```text
Clicked!
```

### 7. Conditional Rendering

If `isLoggedIn` is `true`:

```text
Welcome back
```

If `isLoggedIn` is `false`:

```text
Please log in
```

### 8. Lists and Keys

```text
Ali
Sara
John
```

These names appear as three list items.

### 9. useState

Initially, the counter displays `0`. Each click on Increase increments the displayed number by one.

## Common Mistakes

1. Returning multiple JSX elements without a single parent or fragment.
2. Using `class` instead of `className` in JSX.
3. Forgetting to close JSX elements.
4. Treating props as values that a child component should modify directly.
5. Importing a default export with curly braces or a named export without them.
6. Writing `onClick={handleClick()}` instead of `onClick={handleClick}` when the function should run on a click.
7. Forgetting the `key` prop when rendering lists.
8. Using unstable keys that change between renders.
9. Assuming PropTypes prevents all invalid data at runtime.
10. Assuming React is itself a complete routing solution for every SPA; routing commonly requires an additional library.
11. Assuming the Virtual DOM always makes every application faster; performance depends on the application and implementation.
12. Assuming Hooks such as `useState` are ordinary functions that can be called anywhere. Hooks must follow React's Rules of Hooks.

## Short Exam Notes (very concise revision points)

- React: JavaScript library for building user interfaces.
- Component: Reusable piece of UI.
- JSX: HTML-like syntax inside JavaScript.
- SPA: Updates application content without requiring a full page load for every navigation.
- Virtual DOM: Helps React reconcile UI changes.
- Functional component: Function that returns JSX.
- Class component: Class extending `React.Component` with a `render()` method.
- Props: Read-only inputs passed from parent to child.
- PropTypes: Runtime prop validation and development warnings.
- Composition: Combining small components into larger interfaces.
- Children: Content passed between a component's tags.
- Events: `onClick`, `onChange`, `onSubmit`.
- Conditional rendering: `if`, ternary (`? :`), and `&&`.
- Lists: Use `map()` to create elements and stable `key` values to identify items.
- Hooks: Allow functional components to use React features.
- useState: Manages component state; introduced theoretically in this lecture but not practiced.
- Vite: Tool used to create and run the React development project.
