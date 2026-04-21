---
title: Functions and Object-Oriented Programming in Python
description: Understanding functions in Python including creation, calling, parameters, scope, and introduction to classes and objects for basic object-oriented programming.
lecture: Lecture 6
semester: semester-3
subject: modern-programming-languages
date: 2026-04-19
order: 11
---

# Functions in Python

## Definition

A **function** in Python is a reusable block of code that performs a specific task. It can take input (parameters), process it, and return an output. Functions help avoid repetition and make code organized and modular.

---

## Key Points

- Defined using the `def` keyword
- Can take parameters (inputs)
- Can return values using `return`
- Must be called (invoked) to execute
- Improves readability and reusability

---

## Example / Code

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)
```

---

## Explanation

- `def add(a, b):` → defines a function named `add`
- `a` and `b` are parameters
- `return a + b` → sends result back to caller
- `add(3, 5)` → function call
- Output is stored in `result`

---

## Output

```
8
```

---

## Common Mistakes

- Forgetting to call the function
- Missing `return` when a value is needed
- Incorrect indentation
- Using variables not defined inside the function

---

## Short Exam Notes (very concise revision points)

- Function = reusable code block
- Use `def` to define
- Use `()` to call
- Use `return` to send result

---

# Function Creation & Calling

## Definition

Creating a function means defining it, and calling means executing it.

---

## Key Points

- Define using `def`
- Call using function name with parentheses
- Arguments are passed during call

---

## Example / Code

```python
def greet(name):
    print("Hello", name)

greet("Khalid")
```

---

## Explanation

- Function `greet` takes `name`
- When called, it prints greeting

---

## Output

```
Hello Khalid
```

---

## Common Mistakes

- Not passing required arguments
- Using wrong function name

---

## Short Exam Notes

- Define → `def`
- Call → `function_name()`

---

# Arbitrary Number of Arguments (`*args`)

## Definition

Allows a function to accept **any number of positional arguments**.

---

## Key Points

- Use `*args` (commonly named)
- Stored as a tuple
- Useful when number of inputs is unknown

---

## Example / Code

```python
def add(*n):
    return sum(n)

print(add(1, 2, 3, 4, 5))
```

---

## Explanation

- `*n` collects all values into a tuple
- `sum(n)` adds all elements

---

## Output

```
15
```

---

## Common Mistakes

- Forgetting `*`
- Treating `n` as a list instead of tuple

---

## Short Exam Notes

- `*args` = multiple inputs
- Stored as tuple

---

# Default Parameters

## Definition

Default parameters allow a function to use a **predefined value** if no argument is passed.

---

## Key Points

- Defined using `=`
- Optional during function call
- Must come after non-default parameters

---

## Example / Code

```python
def power(num, power=2):
    return num ** power

print(power(2, 3))
print(power(3))
```

---

## Explanation

- First call → uses power = 3
- Second call → uses default power = 2

---

## Output

```
8
9
```

---

## Common Mistakes

- Placing default before non-default parameters
- Confusing default with fixed value

---

## Short Exam Notes

- Default → `param=value`
- Used if argument not provided

---

# Variable Scope

## Definition

Scope determines where a variable can be accessed.

---

## Key Points

- Python follows LEGB rule:
  - **L**ocal
  - **E**nclosing
  - **G**lobal
  - **B**uilt-in

---

## Example / Code

```python
x = 10  # Global

def outer():
    x = 20  # Enclosing
    def inner():
        x = 30  # Local
        print(x)
    inner()

outer()
```

---

## Explanation

- Python checks variables in order: Local → Enclosing → Global → Built-in
- `inner()` prints local `x = 30`

---

## Output

```
30
```

---

## Common Mistakes

- Assuming global variable changes automatically
- Confusing local and enclosing variables

---

## Short Exam Notes

- LEGB rule
- Local > Enclosing > Global > Built-in

---

# `global` Keyword

## Definition

Used to modify a global variable inside a function.

---

## Key Points

- Without `global`, a new local variable is created
- With `global`, original variable is modified

---

## Example / Code

```python
x = 90

def f1():
    global x
    x = 900

f1()
print(x)
```

---

## Explanation

- `global x` tells Python to use global variable
- Value is updated globally

---

## Output

```
900
```

---

## Common Mistakes

- Writing `global x = 900` ❌ (invalid syntax)
- Forgetting `global` when modifying

---

## Short Exam Notes

- `global` modifies global variable
- Must be declared inside function

---

# Classes and Objects

## Definition

- **Class**: Blueprint/template for creating objects
- **Object**: Instance of a class

---

## Key Points

- Classes define properties and behaviors
- Objects use those definitions
- Use `class` keyword
- Python uses indentation (not `{}`)

---

## Example / Code

```python
class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello", self.name)

p1 = Person("Khalid")
p1.greet()
```

---

## Explanation

- `__init__` → constructor
- `self` → refers to current object
- `p1` is an object of class `Person`

---

## Output

```
Hello Khalid
```

---

## Common Mistakes

- Using `{}` instead of indentation
- Forgetting `self`
- Not calling methods correctly

---

## Short Exam Notes

- Class = blueprint
- Object = instance
- `__init__` = constructor
- `self` required
