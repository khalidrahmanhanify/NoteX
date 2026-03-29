---
title: Python Programming
description: What is Python Programming, History of Python, Compiler, Interpreter.
lecture: Lecture 1
semester: semester-3
subject: modern-programming-languages
date: 2026-03-08
order: 16
---

# Python Programming Notes (Corrected & Improved)

## 1. What is Python Programming?

Python is a **high-level, general-purpose programming language** used for many types of software development such as **web development, data science, automation, artificial intelligence, and scripting**.

- It was created by **Guido van Rossum**.
- **First released in 1991**.
- Python is known for its **simple and readable syntax**, which makes it easy to learn.

✅ **Added:** Python supports **multiple programming paradigms**, including:

- **Procedural programming**
- **Object-Oriented Programming (OOP)**
- **Functional programming**

# 2. History of Python

There are **not only two types of Python**, but **two major versions**.

## Python 2

- Released on **October 16, 2000**.
- Widely used for many years.
- The **last version of Python 2 was Python 2.7**, released in **2010**.
- **Official support ended on January 1, 2020**.

Because of this, Python 2 is **no longer recommended for new projects**.

## Python 3

- First released in **2008**.
- It introduced **major improvements and changes** compared to Python 2.

Python 3 is **not fully backward compatible with Python 2**, meaning some Python 2 code will not work in Python 3 without modification.

✔ Python 3 is **actively developed and updated**, which is why it is the **main version used today**.

# 3. Difference Between Compiler and Interpreter

## Interpreter

An **interpreter** translates and executes the code **line by line**.

Characteristics:

- Code is **executed immediately**.
- **No separate machine-code file is created**.
- If an error occurs, the program **stops at that line**.

Examples of interpreted languages:

- **Python**
- **JavaScript**
- **Ruby**

⚠️ **Improvement:**

Python actually **compiles code to bytecode internally**, then executes it using an interpreter.

## Compiler

A **compiler** translates the **entire program at once** into **machine code** before execution.

Characteristics:

- Translation happens **once**.
- The compiled program is **saved as an executable file**.
- Execution is **usually faster** because translation is already done.

Examples of compiled languages:

- **C**
- **C++**
- **Go**

# 4. Difference Between Static and Dynamic

⚠️ **Clarification:** These terms are commonly used when talking about **typing in programming languages**.

## Static

In **static typing**, the **data type of a variable must be declared before using it**, and it usually **cannot change later**.

Example (C++):

```
intage =20;
```

Characteristics:

- Type is **checked at compile time**
- Fewer runtime errors
- Faster execution

Examples:

- **C**
- **C++**
- **Java**

## Dynamic

In **dynamic typing**, the **data type is determined automatically while the program runs**.

Example (Python):

```
age=20
age="twenty"
```

Characteristics:

- **Type is determined at runtime**
- Easier and faster to write code
- More flexible but may cause runtime errors

Examples:

- **Python**
- **JavaScript**
- **Ruby**

# Quick Summary

| Concept     | Description                                     |
| ----------- | ----------------------------------------------- |
| Python      | High-level general-purpose programming language |
| Python 2    | Released 2000, support ended 2020               |
| Python 3    | Released 2008, currently maintained             |
| Interpreter | Executes code line by line                      |
| Compiler    | Converts entire program to machine code first   |
| Static      | Type fixed before execution                     |
| Dynamic     | Type determined during execution                |
