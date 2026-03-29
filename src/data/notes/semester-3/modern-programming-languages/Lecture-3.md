---
title: String
description: All about strings in Python including creation, indexing, slicing, formatting, and common functions.
lecture: Lecture 3
semester: semester-3
subject: modern-programming-languages
date: 2026-03-29
order: 14
---

# String

## 1. Definition

A **string** is a **sequence of characters**.

## 2. Creating Strings (Single-line and Multi-line)

In Python, unlike numbers, strings are **not automatically recognized** as a specific type unless we create them explicitly. Strings can be created in two ways:

### Single-line Strings

You can create single-line strings using:

1. **Single quotes** `'...'`
2. **Double quotes** `"..."`

**Rules for using quotes:**

1. `He said, "I love Allah"` → Use **single quotes** for the string if it contains double quotes.
2. `This is Ali's pen` → Use **double quotes** if the string contains a single quote.
3. `He said, "This is Ali's pen"` → Use an **escape character `\`** if the string contains both single and double quotes:

```python
sentence = "He said, \"This is Ali's pen\""
```

### Multi-line Strings

You can create multi-line strings using:

1. **Triple single quotes** `'''...'''`
2. **Triple double quotes** `"""..."""`

Example:

```python
text = """This is a
multi-line
string."""
```

## 3. Indexing

Indexing is used to access individual characters in a string.

- **Left-to-right indexing**: Starts from `0`
- **Right-to-left indexing**: Starts from `-1` (last character)

Example:

```python
name = "Khalid Rahman"
print(name[0])  # Prints 'K'
print(name[-1]) # Prints 'n'
```

## 4. Slicing

Slicing allows extracting **substrings** from a string.

**Syntax:**

```python
string[start:end]       # From start index up to (but not including) end index
string[start:end:step]  # With a step to skip characters
string[:end]            # From beginning up to end index
string[start:]          # From start index to the end
string[:]               # Entire string
```

Example:

```python
text = "Khalid Rahman"
print(text[0:5])    # Prints 'Khali'
print(text[::2])    # Prints every second character
```

## 5. Formatting

Embedding variables inside strings can be done using **f-strings**:

```python
age = 23
print(f"Ahmad's age is {age}")  # Prints "Ahmad's age is 23"
```

## 6. Common String Functions

### `find()`

Finds the first occurrence of a substring. Returns `-1` if not found.

```python
name = "Khalid Rahman"
print(name.find("a"))  # 2
print(name.find("g"))  # -1
```

### `index()`

Works like `find()` but raises an **error** if not found.

```python
print(name.index("a"))  # 2
# print(name.index("g"))  # Raises ValueError
```

### `rfind()`

Searches from **right to left**. Returns `-1` if not found.

```python
print(name.rfind("a"))  # 11
```

### `rindex()`

Works like `rfind()` but raises an **error** if not found.

```python
print(name.rindex("a"))  # 11
# print(name.rindex("g"))  # Raises ValueError
```

### `len()`

Returns the **length** of the string:

```python
print(len(name))  # 13
```

### `upper()` / `lower()`

Converts the string to uppercase or lowercase:

```python
print(name.upper())  # 'KHALID RAHMAN'
print(name.lower())  # 'khalid rahman'
```

### `startswith()` / `endswith()`

Checks if the string **starts** or **ends** with a specific substring:

```python
print(name.startswith("K"))  # True
print(name.endswith("n"))    # True
```

### `strip()`, `lstrip()`, `rstrip()`

Removes spaces:

```python
name = "   Khalid Rahman   "
print(name.strip())   # "Khalid Rahman"
print(name.lstrip())  # "Khalid Rahman   "
print(name.rstrip())  # "   Khalid Rahman"
```
