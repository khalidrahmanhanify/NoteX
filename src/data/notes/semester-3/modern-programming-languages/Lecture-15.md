---
title: Python Modules, Packages, and Modular Programming
description: Learn how to organize Python programs using modules and packages. Understand modular programming, the differences between `import` and `from`, creating and using custom modules, Python namespaces, package imports, module reloading with `reload()`, and best practices for writing reusable and maintainable code.
lecture: Lecture 15
semester: semester-3
subject: modern-programming-languages
date: 2026-07-05
order: 2
---

# Python Modules, Packages, and Modular Programming

## Definition

A **module** in Python is a file containing Python code that can define **functions, classes, variables, and executable statements**. Modules help organize code into smaller, reusable parts, making programs easier to understand and maintain.

A module is simply a Python file (`.py`) that can be imported and used in another Python program.

Example:

```
math_module.py
```

This file itself is a module.

---

# Python Modules

## Key Points

- Each Python file is considered a module.
- Modules organize related code together.
- Modules support code reuse.
- Modules can contain:
  - Functions
  - Classes
  - Variables
  - Executable code

- Modules are imported using:
  - `import`
  - `from ... import`

---

## Example: Creating a Module

### File: `module1.py`

```python
def greeting(name):
    print("Hello", name)

x = 100
```

### Using the Module

File: `main.py`

```python
import module1

module1.greeting("Ali")

print(module1.x)
```

---

## Explanation

When we import `module1`, Python loads all functions and variables defined inside it.

Output:

```
Hello Ali
100
```

---

## Common Mistakes

- Wrong module name.
- Module file not in the same directory.
- Forgetting `.py` extension while creating files.
- Importing functions incorrectly.

---

## Short Exam Notes

- Module = Python file containing reusable code.
- Used for code organization and reuse.
- Imported using `import`.

---

# Packages in Python

## Definition

A **package** is a collection of related Python modules organized inside a directory structure.

A package can contain:

- Modules
- Sub-packages
- Sub-sub-packages

Example:

```
Phone/
│
├── __init__.py
├── camera.py
├── battery.py
└── contacts.py
```

Here, `Phone` is a package.

---

## Key Points

- Packages organize multiple modules.
- Improve large project structure.
- Allow hierarchical organization.
- A package usually contains an `__init__.py` file.

---

## Example Package Import

Directory:

```
Dir1/
│
├── __init__.py
└── a.py
```

Import:

```python
import Dir1.a
```

---

## Common Mistakes

- Missing `__init__.py`.
- Incorrect folder structure.
- Wrong import path.

---

## Short Exam Notes

- Package = collection of modules.
- Used for organizing large applications.

---

# Modular Programming

## Definition

**Modular programming** is a programming approach where a large program is divided into smaller independent modules.

Each module performs a specific task.

---

## Example

Instead of creating one large program:

```
Student Management System
```

Divide it into:

```
student.py
database.py
login.py
reports.py
```

---

## Advantages of Modular Programming

### 1. Simplicity

Large programs become easier to understand.

### 2. Maintainability

Changes can be made in individual modules without affecting the whole program.

### 3. Reusability

The same module can be used in multiple programs.

---

## Short Exam Notes

- Breaks large programs into smaller parts.
- Improves readability and maintenance.

---

# Why Use Modules?

## Key Points

Modules provide:

### 1. Code Reuse

Functions and classes can be reused in different programs.

Example:

```python
import math

print(math.sqrt(25))
```

---

### 2. Namespace Management

Modules create separate namespaces to avoid naming conflicts.

Example:

```
module1.function()
module2.function()
```

Both functions can have the same name.

---

### 3. Shared Services and Data

Modules can store common:

- Functions
- Variables
- Classes
- Configurations

---

## Short Exam Notes

Modules provide:

- Code reuse
- Organization
- Namespace separation

---

# Importing Modules

## Import Statement

The `import` statement loads the complete module.

Syntax:

```python
import module_name
```

Example:

```python
import math

print(math.pi)
```

---

## Explanation

The whole module object is imported.

Access members using:

```python
module_name.attribute
```

---

# From Import Statement

## Definition

`from` imports specific functions, classes, or variables from a module.

Syntax:

```python
from module_name import object
```

---

## Example

```python
from math import sqrt

print(sqrt(16))
```

---

## Difference Between Import and From Import

| import                | from import              |
| --------------------- | ------------------------ |
| Imports entire module | Imports specific objects |
| Requires module name  | Direct access to object  |
| Uses dot operator     | No dot operator          |

Example:

```python
import math

math.sqrt(25)
```

vs

```python
from math import sqrt

sqrt(25)
```

---

# Creating Custom Modules

## Example

File: `small.py`

```python
x = 42

y = [42, 2]
```

---

Using the module:

```python
import small

print(small.x)
print(small.y)
```

---

## Output

```
42
[42, 2]
```

---

# How Import Works in Python

The first time Python imports a module, it performs three steps:

## Step 1: Find Module File

Python searches for the module file.

Example:

```
module.py
```

---

## Step 2: Compile Module

Python converts code into bytecode.

```
.py → .pyc
```

---

## Step 3: Execute Module

Python runs the module code and creates objects.

---

## Short Exam Notes

Import process:

1. Find file
2. Compile bytecode
3. Execute code

---

# Namespace in Python

## Definition

A **namespace** is a container that stores names of variables, functions, and classes.

Every module has its own namespace.

---

## Viewing Namespace

### dir()

Displays available names.

Example:

```python
import math

print(dir(math))
```

---

### vars()

Displays namespace dictionary.

Example:

```python
import math

print(vars(math))
```

---

## Short Exam Notes

- Namespace prevents naming conflicts.
- `dir()` shows available objects.
- `vars()` returns namespace dictionary.

---

# Module Naming Conflicts

## Problem

Suppose two modules have the same function name.

### A.py

```python
def func():
    print("A")
```

### B.py

```python
def func():
    print("B")
```

---

### C.py

```python
from A import *
from B import *

func()
```

---

## Output

```
B
```

---

## Explanation

The second import replaces the first function.

The last imported name is used.

---

## Solution

Use module names:

```python
import A
import B

A.func()
B.func()
```

---

# Reloading Modules

## Definition

Normally, Python loads a module only once during program execution.

If the module changes, Python still uses the old version.

`reload()` forces Python to load the updated module again.

---

## Syntax

```python
reload(module)
```

---

## Example

```python
import module1

reload(module1)
```

---

## Uses

- Testing changed code.
- Dynamic customization.
- Development purposes.

---

## Short Exam Notes

- Import runs only once.
- `reload()` loads the module again.

---

# Package Imports

## Definition

Package imports allow importing modules from folders.

Example structure:

```
Project
│
├── Dir1
│   ├── __init__.py
│   └── a.py
│
└── main.py
```

---

Import:

```python
import Dir1.a
```

---

## Access Function

```python
Dir1.a.function()
```

---

# The `__init__.py` File

## Definition

`__init__.py` identifies a directory as a Python package.

Example:

```
Package/
|
├── __init__.py
└── module.py
```

---

## Purpose

- Makes Python recognize packages.
- Controls package initialization.
- Can contain package-level code.

---

# Complete Module Workflow

```
Create Module
      ↓
Write Functions / Classes
      ↓
Import Module
      ↓
Use Functions and Variables
      ↓
Reuse in Other Programs
```

---

# Important Python Module Concepts

| Concept     | Purpose                    |
| ----------- | -------------------------- |
| Module      | Single Python file         |
| Package     | Collection of modules      |
| import      | Import complete module     |
| from import | Import specific object     |
| Namespace   | Stores names               |
| dir()       | Shows available objects    |
| vars()      | Shows namespace dictionary |
| reload()    | Reload module              |

---

# Common Mistakes

- Creating modules with invalid names.
- Importing from wrong directory.
- Forgetting `__init__.py` in packages.
- Using duplicate names from different modules.
- Importing unnecessary objects.

---

# Short Exam Notes (Quick Revision)

- A **module** is a Python file containing reusable code.
- A **package** is a collection of modules.
- Modular programming divides large programs into smaller parts.
- Modules improve:
  - Code reuse
  - Maintainability
  - Organization

- Use:

```python
import module
```

to import a complete module.

- Use:

```python
from module import function
```

to import specific objects.

- `dir()` displays module contents.
- `vars()` displays namespaces.
- `reload()` reloads an already imported module.
- `__init__.py` makes a directory a Python package.
