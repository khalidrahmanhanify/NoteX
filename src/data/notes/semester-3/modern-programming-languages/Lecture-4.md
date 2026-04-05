---
title: Data Structures in Python
description: All about Lists, Tuples, Dictionaries and sets and corresponding functions of each data structure.
lecture: Lecture 4
semester: semester-3
subject: modern-programming-languages
date: 2026-04-05
order: 13
---

# List in Python

A **list** is a collection of **heterogeneous, mutable, and ordered** elements.
A list is **similar to an array**, but **not exactly the same**. Python lists are **dynamic** and can store **different data types**, unlike arrays in many languages.

### Heterogeneous

This means we can store **different data types** at the same time.

```python
my_list = [1, 2, 3, "Hi", "How are you", True, None, 5.4]
```

### Mutable

Lists are **editable** (changeable).

```python
# String is not mutable
my_string = "Jhalid Rahman"
# my_string[0] = "K"  # Returns error

# Lists are mutable
my_list = ["J", "h", "a", "l", "i", "d"]
my_list[0] = "K"  # changes 'J' to 'K'
```

### Ordered

Lists maintain the **order of elements**.

---

# Creating Lists

There are two ways to create lists in Python.

### Using `[]`

```python
my_list = [1, 2, 3, "Hello", "How are you", True, False, None, 4.5]
```

### Using `list()`

```python
my_list = list([1, 2, 3, 4])
```

---

# Indexing

Lists support **positive and negative indexing**.

### Negative Indexing (Right indexing)

Starts from **-1 (last element)**

```python
print(my_list[-1])  # prints 4.5
```

### Positive Indexing (Left indexing)

Starts from **0**

```python
print(my_list[3])  # Prints "Hello"
```

---

# Slicing

```python
print(my_list[3:4])  # ['Hello']
```

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8]
print(my_list[::2])  # elements at even indices
```

---

# List Methods

### Difference Between Methods and Functions

**Definition:**

- **Function** → independent (e.g., `len()`)
- **Method** → belongs to an object (e.g., `list.append()`)

```python
cities = ["Kabul", "Jalal Abad", "Herat", "Zabul"]
```

---

### append()

Adds item to the **end** of list

```python
# cities[5] = "Mazar"  # error
cities.append("Mazar")
```

---

### insert()

```python
cities.insert(2, "Maidan Shar")
```

---

### pop()

Removes by **index** and **returns value**

```python
my_list.pop(2)
```

---

### remove()

Removes by **value**

```python
cities.remove("Zabul")
```

---

### extend()

Combines lists

```python
cities.extend(["Farah", "Kunar", "Kunduz"])
```

---

### del

```python
del cities[1]
```

`del` is **statement**, not function or operator.

---

### Useful List Functions

✅ **Added important ones**

```python
len(my_list)
min(my_list)
max(my_list)
sum(my_list)
sorted(my_list)
```

---

# Tuple

A tuple is a collection of **heterogeneous, immutable, ordered** elements.

**Explanation:**
Tuple is **not mainly used because it is faster**.
It is used when:

- Data **should not change**
- To **protect data**
- To use as **dictionary keys**
- Memory efficiency

```python
my_tuple = (1, 2, 3, "Hello", "Ahmad")

# my_tuple[0] = 100  # error (immutable)
```

---

# Creating Tuple

### Using `()`

```python
my_tuple = (1, 2, 3, "Hello", "Ahmad")
```

### Using `tuple()`

```python
my_tuple = tuple([1,2,3])
```

---

# Tuple Slicing

```python
my_tuple = (1, 2, 3, "Hello", "Ahmad")
my_tuple[2:]   # (3, 'Hello', 'Ahmad')
```

---

# Tuple Indexing

```python
my_tuple[3]  # 'Hello'
```

---

# Tuple Functions

### index()

```python
my_tuple.index("Ahmad")  # 4
```

### count()

```python
num = (1,1,1,1,2,2,2,3,3,4,5)
num.count(1)  # 4
```

---

# Dictionary

Dictionary is a collection of **key-value pairs**.

### Rules

- Keys must be **unique**
- Keys must be **immutable** (string, number, tuple)
- Dictionaries are **heterogeneous**
- Dictionaries are **ordered (Python 3.7+)**
  **Values can be mutable or immutable**

---

# Creating Dictionary

```python
words = {
    "book": "ketab",
    "pen": "qalam",
    "desk": "maiz",
}
```

Access value:

```python
words["book"]
```

---

# Dictionary Methods

### keys()

```python
words.keys()
```

### values()

```python
words.values()
```

### items()

```python
words.items()
```

---

# Set

A set is a collection of **heterogeneous, mutable, unordered** elements.

### Properties

- Elements are **unique**
- No indexing
- No slicing

---

# Creating Sets

```python
my_set = {1,2,2,2,3,3,4,5}
print(my_set)
```

Output:

```
{1,2,3,4,5}
```

---

# Set Methods

### intersection()

```python
set1.intersection(set2)
```

### union()

```python
set1.union(set2)
```

### difference()

```python
set1.difference(set2)
```

### issubset()

```python
set1.issubset(set2)
```

### issuperset()

```python
set1.issuperset(set2)
```

---

# Difference Between Python Data Types

**Table**

| Feature         | String   | List | Tuple | Dictionary     | Set  |
| --------------- | -------- | ---- | ----- | -------------- | ---- |
| Creation        | `'` `" ` | `[]` | `()`  | `{}`           | `{}` |
| Mutable         | No       | Yes  | No    | **Yes**        | Yes  |
| Ordered         | Yes      | Yes  | Yes   | 3.7+ Yes       | No   |
| Indexing        | Yes      | Yes  | Yes   | No (uses keys) | No   |
| Slicing         | Yes      | Yes  | Yes   | No             | No   |
| Unique elements | No       | No   | No    | Keys unique    | Yes  |

---

# ✅ Extra Important Exam Notes

### When to use each

Use **List** → when data changes
Use **Tuple** → when data fixed
Use **Dictionary** → key-value lookup
Use **Set** → unique values only
