---
title: Introduction to GUI Programming with Tkinter in Python
description: Learning the basics of GUI development in Python using Tkinter, including creating windows, adding labels, buttons, entry fields, message boxes, and handling user interactions through simple event-driven programming with practical examples.
lecture: Lecture 9
semester: semester-3
subject: modern-programming-languages
date: 2026-05-31
order: 8
---

# GUI Programming with Tkinter (Python)

## Definition

**GUI (Graphical User Interface)** programming allows users to interact with software using visual elements such as **windows, buttons, labels, text boxes, and menus** instead of typing commands.

**Tkinter** is Python’s built-in library for creating GUI applications.

---

## Key Points

### 1. What is GUI?

Software applications are usually developed in three phases:

1. **Understanding the problem**
2. **Designing the solution**
3. **Implementing the solution**

A **GUI application** uses graphical components such as:

- Windows
- Buttons
- Labels
- Text fields
- Message boxes

Example:
A **flight reservation system**, **calculator**, or **bank system** can be created using GUI.

---

### 2. What is Tkinter?

**Tkinter** is Python’s standard GUI package.

It acts as an interface between Python and the **Tk GUI toolkit**.

Key facts:

- Built into Python (no installation needed)
- Easy to create windows and GUI elements
- Used to make desktop applications

Import Tkinter:

```python
from tkinter import *
```

---

### 3. Creating a Window

To create a GUI window:

1. Create the main window using `Tk()`
2. Set title
3. Set size using `geometry()`
4. Run the application using `mainloop()`

### Example / Code

```python
from tkinter import *

window = Tk()

window.title("Bank Account")
window.geometry("400x350")

window.mainloop()
```

---

## Explanation

### `Tk()`

Creates the main application window.

### `title()`

Sets the title of the window.

### `geometry()`

Sets the window size.

Format:

```python
"widthxheight"
```

Example:

```python
"400x350"
```

means:

- Width = 400
- Height = 350

### `mainloop()`

Keeps the window open and running.

---

## Output (if any)

A window appears with:

- Title: **Bank Account**
- Size: **400 × 350**

---

## 4. Adding Labels

A **Label** is used to display text in a GUI.

### Example / Code

```python
from tkinter import *

window = Tk()

window.title("Bank Account")
window.geometry("400x350")

label1 = Label(window, text="Account Number")
label1.pack()

window.mainloop()
```

---

## Explanation

### `Label()`

Syntax:

```python
Label(parent_window, text="Text Here")
```

Example:

```python
Label(window, text="Account Number")
```

Creates a label with text.

### `pack()`

Places the label automatically inside the window.

---

## Output (if any)

A label saying:

```text
Account Number
```

appears in the window.

---

## 5. Setting Size of Text in Labels

You can change text size using the `font` property.

### Example / Code

```python
from tkinter import *

window = Tk()

window.geometry("400x350")

label1 = Label(
    window,
    text="Bank Account",
    font=("Arial", 20)
)

label1.pack()

window.mainloop()
```

---

## Explanation

```python
font=("Arial", 20)
```

means:

- Font style = Arial
- Font size = 20

---

## Output (if any)

Large text:

```text
Bank Account
```

appears.

---

## 6. Setting Locations of Components

To place GUI elements at exact positions, we use:

```python
place()
```

It uses **x** and **y coordinates**.

### Example / Code

```python
from tkinter import *

window = Tk()
window.geometry("400x350")

label1 = Label(window, text="Username")
label1.place(x=50, y=100)

window.mainloop()
```

---

## Explanation

```python
place(x=50, y=100)
```

means:

- Move 50 pixels horizontally
- Move 100 pixels vertically

This gives precise control over positioning.

---

## Output (if any)

The label appears at a fixed position.

---

## 7. Adding Buttons

Buttons allow users to perform actions.

### Example / Code

```python
from tkinter import *

window = Tk()

window.geometry("400x350")

button1 = Button(window, text="Submit")
button1.place(x=150, y=200)

window.mainloop()
```

---

## Explanation

### `Button()`

Syntax:

```python
Button(parent, text="Button Text")
```

Creates a clickable button.

---

## Output (if any)

A **Submit** button appears.

---

## 8. Adding Entry Fields

**Entry fields** are used to take input from the user.

### Example / Code

```python
from tkinter import *

window = Tk()

window.geometry("400x350")

label1 = Label(window, text="Name")
label1.place(x=50, y=50)

entry1 = Entry(window)
entry1.place(x=150, y=50)

window.mainloop()
```

---

## Explanation

### `Entry()`

Creates a text input box.

User can type data into it.

Example:

```python
entry1.get()
```

Gets the value entered by the user.

---

## Output (if any)

A text field appears where the user can type.

---

## 9. Message Boxes

A **Message Box** is used to show information, warnings, or errors.

### Example / Code

```python
from tkinter import *
from tkinter import messagebox

def show_message():
    messagebox.showinfo(
        "Success",
        "Account Created Successfully"
    )

window = Tk()

window.geometry("400x350")

button1 = Button(
    window,
    text="Create Account",
    command=show_message
)

button1.pack()

window.mainloop()
```

---

## Explanation

### `messagebox.showinfo()`

Shows a popup message.

Format:

```python
messagebox.showinfo(title, message)
```

### `command=show_message`

Runs the function when button is clicked.

---

## Output (if any)

When button is clicked:

A popup appears:

```text
Success
Account Created Successfully
```

---

## Practice 1: Bank Account Window

### Example / Code

```python
from tkinter import *

window = Tk()

window.title("Bank Account")
window.geometry("400x350")

title_label = Label(
    window,
    text="Bank Account",
    font=("Arial", 18)
)
title_label.place(x=120, y=20)

label1 = Label(window, text="Account Number")
label1.place(x=50, y=100)

label2 = Label(window, text="Account Holder")
label2.place(x=50, y=140)

window.mainloop()
```

---

## Practice 2: Entry + Button Window

### Example / Code

```python
from tkinter import *
from tkinter import messagebox

def submit():
    name = entry1.get()

    messagebox.showinfo(
        "Information",
        f"Hello {name}"
    )

window = Tk()

window.title("User Form")
window.geometry("400x350")

label1 = Label(window, text="Enter Name")
label1.place(x=50, y=100)

entry1 = Entry(window)
entry1.place(x=150, y=100)

button1 = Button(
    window,
    text="Submit",
    command=submit
)
button1.place(x=150, y=150)

window.mainloop()
```

---

## Common Mistakes

### 1. Forgetting `mainloop()`

Wrong:

```python
window = Tk()
```

Correct:

```python
window.mainloop()
```

Without it, the window closes immediately.

---

### 2. Wrong geometry format

Wrong:

```python
window.geometry(400,350)
```

Correct:

```python
window.geometry("400x350")
```

Must be inside quotes.

---

### 3. Forgetting parent window

Wrong:

```python
Label(text="Hello")
```

Correct:

```python
Label(window, text="Hello")
```

---

### 4. Forgetting `command=`

Wrong:

```python
Button(window, text="Click")
```

Correct:

```python
Button(window, text="Click", command=myFunction)
```

---

## Short Exam Notes (very concise revision points)

- **GUI** = Graphical User Interface.
- **Tkinter** = Python’s built-in GUI library.
- Import Tkinter:

```python
from tkinter import *
```

- `Tk()` → create window
- `title()` → set title
- `geometry()` → set size
- `Label()` → display text
- `Button()` → clickable button
- `Entry()` → input field
- `place(x,y)` → exact position
- `messagebox.showinfo()` → popup message
- `mainloop()` → keeps GUI running
