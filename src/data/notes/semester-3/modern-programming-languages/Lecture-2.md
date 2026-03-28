---
title: Variables and Operators in Python
description: All about variables, naming conventions, operators and etc.
lecture: Lecture 2
semester: semester-3
subject: modern-programming-languages
date: 2026-03-08
order: 15
---

# Variables in Python

## Variable

A **variable** is a **name given to a memory location that stores a value**.

🔹 **Correction:** In Python, a variable does not directly represent the memory location itself; rather, it **references an object stored in memory**.

Example:

```python
age=20
name="Ali"
```

Here:

- `age` stores the value `20`
- `name` stores the value `"Ali"`

---

# Variable Naming Conventions

These are the **rules that must be followed when naming variables**.

### Rules

- Variable names **can contain**:
  - letters (`a-z`, `A-Z`)
  - digits (`0-9`)
  - underscore (`_`)
- A variable **cannot start with a digit**

❌ Invalid:

```python
2age=20
```

✔ Valid:

```python
age2=20
```

- We **cannot use Python keywords** as variable names.

🔹 **Correction:** Keywords are **reserved words**, not names with spaces.

Example keywords:

```python
if, else, for, while, class, def, return
```

❌ Invalid:

```python
for =10
```

- Variable names **cannot contain spaces**

❌ Invalid:

```python
student age
```

✔ Valid:

```python
student_age
```

- Variable names **cannot contain special characters**

❌ Invalid:

```python
age@
price$
```

✔ Valid:

```python
age
price_value
```

---

# Best Practices for Naming Variables

To write **clean and understandable code**, programmers follow these practices:

### 1. Use descriptive names

Avoid unclear names like:

```python
a=20
```

Better:

```python
student_age=20
```

This makes the code **easier to understand**.

---

# Naming Styles

There are different styles for writing variable names.

### 1. camelCase

The **first word starts with lowercase**, and every other word starts with a **capital letter**.

Example:

```python
ageOfStudent=20
```

---

### 2. PascalCase

The **first letter of every word is capitalized**.

Example:

```python
AgeOfStudent=20
```

🔹 **Addition:** PascalCase is often used for **class names in Python**, not variables.

---

### 3. snake_case

All letters are **lowercase**, and words are separated by `_`.

Example:

```python
age_of_student=20
```

🔹 **Important:**

`snake_case` is the **recommended style for variables and functions in Python (PEP 8 standard)**.

---

# Structure of Statements

Example in **Java**:

```python
inta=20;
intb=30;
intresult=a+b;
```

Explanation:

- `a + b` → **expression**
- `a` and `b` → **operands**
- `+` → **operator**
- The whole line → **statement**

🔹 **Addition:**

In **Python**, we write the same code without specifying the type:

```python
a=20
b=30
result=a+b
```

This is because **Python is a dynamically typed language**.

---

# Operators

An **operator** is a symbol that **performs an operation on operands**.

Example:

```python
a+b
```

- `a` and `b` → operands
- `+` → operator

---

# Boolean Expressions

A **Boolean expression** is an expression whose result is either:

- `True`
- `False`

Example:

```python
a>b
```

Result:

- `True` if `a` is greater than `b`
- `False` otherwise

---

# Relational Operators

Relational operators are used to **compare two values**.

Examples:

| Operator | Meaning               |
| -------- | --------------------- |
| `>`      | greater than          |
| `<`      | less than             |
| `>=`     | greater than or equal |
| `<=`     | less than or equal    |
| `==`     | equal to              |
| `!=`     | not equal             |

Example:

```python
a=10
b=20
print(a < b) # True
```

---

# Bitwise Operators

Bitwise operators work on the **binary representation of numbers**.

Steps of bitwise operation:

1. Convert numbers to **binary**
2. Apply the operation **bit by bit**

Example:

```python
a=5 # 101
b=3 # 011
print(a&b) # 1
```

---

# Symbols of Bitwise Operators

🔹 **Correction:** The NOT operator is `~`, not `-`.

| Operator | Name        |
| -------- | ----------- |
| `&`      | AND         |
| `        | `           |
| `^`      | XOR         |
| `~`      | NOT         |
| `>>`     | Right Shift |
| `<<`     | Left Shift  |

---

# Difference Between Bitwise and Logical Operators

| Bitwise                          | Logical                          |
| -------------------------------- | -------------------------------- |
| Works on **bits**                | Works on **Boolean expressions** |
| Operands are **integers**        | Operands are **Boolean values**  |
| Result is usually an **integer** | Result is **True or False**      |

---

# Logical Operators

Logical operators **combine multiple conditions**.

Comparison between Java and Python:

| Java | Python |
| ---- | ------ |
| `&&` | `and`  |
| `    |        |
| `!`  | `not`  |

Example:

```python
age=20
is_student=True

print(age>18andis_student)
```

---

# Identity Operators

Python has two identity operators:

- `is`
- `is not`

These operators **check whether two variables refer to the same object in memory**.

Example:

```python
a=20
b=20

print(a==b) # True (values are equal)
print(aisb) # True (same object in memory)
```

Example with different values:

```python
c=30
print(aisc) # False
```

🔹 **Important Note:**

`==` compares **values**, while `is` compares **object identity (memory reference)**.
