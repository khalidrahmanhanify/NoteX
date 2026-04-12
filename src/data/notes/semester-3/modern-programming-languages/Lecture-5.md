---
title: Data Structures in Python
description: All about lists, tuples, dictionaries, and sets, along with their functions and usage.
lecture: Lecture 5
semester: semester-3
subject: modern-programming-languages
date: 2026-04-12
order: 12
---

Here is your **improved, corrected, and exam-ready version** of the notes.
All **corrections and important additions are clearly highlighted**.

---

# 📁 Files in Python (Improved Notes)

Python allows us to **work with files stored on the operating system (OS)** using built-in functions.

---

## 1. Opening Files

To open a file, we use:

```python
filehandler = open("filename_or_path", "mode")
```

### 📍 File Path Rules

- If the file is in the **same folder**, just use:

  ```python
  open("file.txt")
  ```

- If it's in another location, use the full path:

  ```python
  open("D:/folder/file.txt")
  ```

### ⚠️ ✅ Correction:

- ❌ _"Python can't use `\`"_ → **Not fully correct**
- ✅ **Correct:** Python _can_ use `\`, but it must be escaped (`\\`) or replaced with `/`

✔ Examples:

```python
"D:\\folder\\file.txt"   # correct
"D:/folder/file.txt"     # also correct
```

---

## 2. File Modes

| Mode | Description                                 |
| ---- | ------------------------------------------- |
| `r`  | Read (default). Error if file doesn't exist |
| `w`  | Write (overwrites file OR creates new file) |
| `a`  | Append (adds content at end)                |
| `r+` | Read + Write (file must exist)              |
| `w+` | Write + Read (overwrites file)              |
| `a+` | Append + Read                               |

---

## 3. Reading Files

```python
filehandler = open("myInfo.txt", "r")
print(filehandler.read())
```

### 🔹 Read specific number of characters:

```python
filehandler.read(20)
```

### ⚠️ Important Concept:

- Python uses a **cursor (pointer)** while reading files.
- After reading once, the cursor moves forward.

---

### 4. `seek()` Function

Moves the cursor to a specific position.

```python
filehandler.seek(0)
```

### ⚠️ ✅ Correction:

- ❌ _"seek() takes starting and ending value"_ → **Incorrect**
- ✅ **Correct:** `seek()` takes **only one required argument** (position)

✔ Correct usage:

```python
filehandler.seek(0)   # move to beginning
```

---

### 5. `tell()` Function

Returns current cursor position:

```python
filehandler.tell()
```

---

## 6. Writing to Files

```python
filehandler = open("file.txt", "w")
filehandler.write("Hello")
```

### ⚠️ Important Behavior:

- `w` mode **clears file ONLY ONCE when opened**
- After that, multiple `write()` calls **append in same session**

### ⚠️ ✅ Correction:

- ❌ _"After closing, write() wipes file again"_ → **Incorrect explanation**
- ✅ **Correct:** You **cannot write after closing the file**

✔ Correct:

```python
filehandler.close()
# filehandler.write("data") ❌ ERROR
```

---

## 7. Appending

```python
filehandler = open("file.txt", "a")
filehandler.write("New Data")
```

✔ Never deletes old content

---

## ⭐ Best Practice (NEW - IMPORTANT)

Instead of manually closing files:

```python
with open("file.txt", "r") as f:
    print(f.read())
```

✅ Automatically closes file
✅ Safer (important for exams + real coding)

---

# 🖥️ OS Module

To work with OS:

```python
import os
```

---

## Common OS Functions

### 1. Create Folder

```python
os.mkdir("NewFolder")
```

### 2. Remove Folder

```python
os.rmdir("NewFolder")
```

⚠️ Only works if folder is empty

---

### 3. Current Directory

```python
os.getcwd()
```

---

### 4. Change Directory

```python
os.chdir("D:/folder")
```

---

### ⭐ Additional Methods (ADDED)

These were used in your class but missing in notes:

```python
os.rename("old.txt", "new.txt")   # rename file
os.remove("file.txt")             # delete file
```

---

# 🔁 Control Statements in Python

---

## 1. `if` Statement

```python
if condition:
    # code
```

---

## 2. `if-else`

```python
if condition:
    # code
else:
    # code
```

---

## 3. `if-elif-else`

```python
if condition:
    # code
elif condition:
    # code
else:
    # code
```

---

## 4. Nested `if`

```python
if condition:
    if condition:
        # code
```

---

# 🔁 Loops in Python

---

## 1. `for` Loop

```python
for i in range(10):
    print(i)
```

✔ Used when iterations are known

---

## 2. `while` Loop

```python
i = 1
while i <= 10:
    print(i)
    i += 1
```

### ⚠️ ✅ Correction:

- ❌ Your example used:

  ```python
  while i >= 10
  ```

- ✅ **Correct condition:** `i <= 10`

---

## 3. `break` and `continue`

- `break` → stops loop
- `continue` → skips current iteration

---

## ⚠️ `for-else` Concept (IMPORTANT FIX)

- ❌ _Your note:_ "else runs when loop is stopped by break"
- ✅ **Correct:**

✔ `else` runs **ONLY when loop finishes normally (NO break)**

```python
for i in range(5):
    print(i)
else:
    print("Finished")
```

---

# 🧪 Important Observations from Your Class Code

### ✔ Reading twice:

```python
print(filehandler.read())
print(filehandler.read())  # empty because cursor is at end
```

---

### ✔ Writing:

```python
fh3 = open("abc.txt","w")
fh3.write("text")
```

---

### ✔ Appending:

```python
fh4 = open("abc.txt","a")
```

---

### ✔ Cursor:

```python
fh5.read(20)
fh5.tell()
fh5.seek(0)
```

---

### ✔ OS Operations Used:

```python
os.rename()
os.remove()
os.mkdir()
os.rmdir()
os.getcwd()
os.chdir()
```

---

# ✅ Final Summary (Exam Focus)

You should understand:

✔ File modes (`r`, `w`, `a`, etc.)
✔ Cursor behavior (`read`, `seek`, `tell`)
✔ Difference between `w` and `a`
✔ OS functions (`mkdir`, `remove`, etc.)
✔ Control statements (`if`, `elif`, `else`)
✔ Loops (`for`, `while`, `break`, `continue`)
✔ `for-else` concept (**very important**)
✔ `with open()` (**best practice**)

---

If you want, I can turn this into:

- 🔥 MCQs for exam practice
- 💻 Coding exercises
- 🧠 Quick revision sheet (1-page)
