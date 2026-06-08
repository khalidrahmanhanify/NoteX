---
title: Advanced Tkinter GUI Components in Python
description: Learning advanced GUI programming with Tkinter including message boxes, assigning button actions, Combobox, CheckBox, and RadioButton widgets, along with practical form-based examples and user interaction handling.
lecture: Lecture 10
semester: semester-3
subject: modern-programming-languages
date: 2026-05-31
order: 7
---

# GUI Components in Tkinter (Message Box, Combobox, CheckBox, RadioButton)

## Definition

Tkinter provides several GUI widgets to create interactive applications.

These widgets help users:

- View messages (**Message Box**)
- Select options from a list (**Combobox**)
- Choose true/false options (**CheckBox**)
- Select one option among many (**RadioButton**)

---

## Key Points

### 1. Message Box in Tkinter

A **Message Box** is used to display popup messages to users.

Examples:

- Information messages
- Warning messages
- Error messages

To use message boxes, import:

```python
from tkinter import messagebox
```

or

```python
import tkinter.messagebox
```

---

## Example / Code

```python
from tkinter import *
from tkinter import messagebox

def show_message():
    messagebox.showinfo(
        "Success",
        "Account Created Successfully"
    )

window = Tk()

window.title("Bank Account")
window.geometry("400x350")

button1 = Button(
    window,
    text="Click Me",
    command=show_message
)

button1.pack()

window.mainloop()
```

---

## Explanation

### `messagebox.showinfo()`

Used to display information.

Syntax:

```python
messagebox.showinfo(title, message)
```

Example:

```python
messagebox.showinfo(
    "Success",
    "Account Created Successfully"
)
```

When the button is clicked, a popup appears.

### `command=show_message`

Connects the button to a function.

When button is clicked:

```python
show_message()
```

runs automatically.

---

## Output (if any)

A popup window appears:

```text
Success
Account Created Successfully
```

---

## 2. Assigning Actions to Buttons

Buttons become useful when they perform actions.

To assign actions:

1. Create a function
2. Pass it inside `command=`

---

## Example / Code

```python
from tkinter import *

def say_hello():
    print("Hello User")

window = Tk()

window.geometry("400x350")

button1 = Button(
    window,
    text="Click",
    command=say_hello
)

button1.pack()

window.mainloop()
```

---

## Explanation

### Step 1: Create a function

```python
def say_hello():
    print("Hello User")
```

This function runs some action.

### Step 2: Connect button

```python
command=say_hello
```

Important:

Do **not** write:

```python
command=say_hello()
```

because it runs immediately.

Correct:

```python
command=say_hello
```

---

## Output (if any)

When button is clicked:

```text
Hello User
```

prints in terminal.

---

## 3. Combobox

A **Combobox** is an Entry widget with a **drop-down menu**.

Users can choose one item from a list.

To use Combobox:

```python
from tkinter.ttk import *
```

---

## Example / Code

```python
from tkinter import *
from tkinter.ttk import *

window = Tk()

window.title("City Selection")
window.geometry("400x350")

cities = ["Kabul", "Herat", "Balkh"]

combo = Combobox(
    window,
    values=cities
)

combo.place(x=120, y=100)

window.mainloop()
```

---

## Explanation

### `values=`

Stores list items.

Example:

```python
cities = [
    "Kabul",
    "Herat",
    "Balkh"
]
```

These appear in the dropdown menu.

### `Combobox()`

Creates a dropdown selection box.

---

## Output (if any)

A dropdown menu appears with:

- Kabul
- Herat
- Balkh

---

## 4. CheckBox (Checkbutton)

A **CheckBox** is used for **Boolean data**.

Meaning:

- **Checked = True**
- **Unchecked = False**

Users can select multiple checkboxes.

---

## Example / Code

```python
from tkinter import *

window = Tk()

window.geometry("400x350")

python_var = IntVar()

check1 = Checkbutton(
    window,
    text="Python",
    variable=python_var
)

check1.pack()

window.mainloop()
```

---

## Explanation

### `Checkbutton()`

Creates a checkbox.

### `IntVar()`

Stores checkbox value.

Values:

```text
1 = Checked
0 = Unchecked
```

Example:

```python
python_var.get()
```

Gets current value.

---

## Output (if any)

A checkbox appears:

```text
☑ Python
```

or

```text
☐ Python
```

---

## 5. RadioButton

**Radio Buttons** are used when users must choose **only one option** among multiple choices.

Example:

Choose gender:

- Male
- Female

Only one can be selected.

---

## Example / Code

```python
from tkinter import *

window = Tk()

window.geometry("400x350")

gender = StringVar()

radio1 = Radiobutton(
    window,
    text="Male",
    variable=gender,
    value="Male"
)

radio2 = Radiobutton(
    window,
    text="Female",
    variable=gender,
    value="Female"
)

radio1.pack()
radio2.pack()

window.mainloop()
```

---

## Explanation

### `variable=`

Connects radio buttons together.

### `value=`

Stores selected option.

Example:

If user selects:

```text
Male
```

then:

```python
gender.get()
```

returns:

```text
Male
```

---

## Output (if any)

User sees:

```text
○ Male
○ Female
```

Only one can be selected at a time.

---

## Practice 3

### Create a Student Registration Window

Requirements:

- Window size: **400 × 350**
- Add:
  - Name Entry
  - City Combobox
  - Subject CheckBox
  - Gender RadioButton
  - Submit Button
  - Message Box

### Example / Code

```python
from tkinter import *
from tkinter import messagebox
from tkinter.ttk import *

def submit():

    name = entry_name.get()
    city = city_combo.get()
    gender_value = gender.get()

    messagebox.showinfo(
        "Student Information",
        f"Name: {name}\n"
        f"City: {city}\n"
        f"Gender: {gender_value}"
    )

window = Tk()

window.title("Student Form")
window.geometry("400x350")

# Name
Label(window, text="Name").place(x=50, y=50)

entry_name = Entry(window)
entry_name.place(x=150, y=50)

# City
Label(window, text="City").place(x=50, y=100)

city_combo = Combobox(
    window,
    values=["Kabul", "Herat", "Balkh"]
)
city_combo.place(x=150, y=100)

# Checkbox
python_var = IntVar()

Checkbutton(
    window,
    text="Python",
    variable=python_var
).place(x=150, y=140)

# Gender
gender = StringVar()

Radiobutton(
    window,
    text="Male",
    variable=gender,
    value="Male"
).place(x=150, y=180)

Radiobutton(
    window,
    text="Female",
    variable=gender,
    value="Female"
).place(x=220, y=180)

# Submit button
Button(
    window,
    text="Submit",
    command=submit
).place(x=150, y=240)

window.mainloop()
```

---

## Common Mistakes

### 1. Forgetting to import `messagebox`

Wrong:

```python
messagebox.showinfo()
```

Correct:

```python
from tkinter import messagebox
```

---

### 2. Writing function with brackets

Wrong:

```python
command=myFunction()
```

Correct:

```python
command=myFunction
```

---

### 3. Forgetting ttk import for Combobox

Wrong:

```python
Combobox()
```

Correct:

```python
from tkinter.ttk import *
```

---

### 4. Using different variables for radio buttons

Wrong:

```python
variable=a
variable=b
```

Correct:

All radio buttons must use **same variable**.

```python
variable=gender
```

---

## Short Exam Notes (very concise revision points)

- `messagebox` → popup messages
- Import:

```python
from tkinter import messagebox
```

- `command=functionName` → button action
- `Combobox()` → dropdown menu
- Import:

```python
from tkinter.ttk import *
```

- `Checkbutton()` → true/false selection
- `Radiobutton()` → one selection only
- `IntVar()` → stores integer value
- `StringVar()` → stores text value
- `.get()` → gets user input
