---
title: Advanced Tkinter GUI Components in Python
description: Learning advanced GUI programming with Tkinter including message boxes, assigning button actions, Combobox, CheckBox, and RadioButton widgets, along with practical form-based examples and user interaction handling.
lecture: Lecture 12
semester: semester-3
subject: modern-programming-languages
date: 2026-06-14
order: 6
---

# Data Visualization (Bar Charts, Scatter Plots, Pie Charts) and Working with CSV Files in Python

## Definition

### Data Visualization

Data visualization is the process of representing data graphically so that it is easier to understand, analyze, and identify patterns or trends. Python commonly uses the **Matplotlib** library for creating charts.

### CSV File

A **CSV (Comma-Separated Values)** file is a plain text file used to store tabular data. Each line represents a row, and commas separate the values in each column.

Example:

```csv
Name,Age,City
Ali,20,Kabul
Sara,22,Herat
Ahmad,19,Mazar
```

---

# 1. Bar Chart

## Definition

A **Bar Chart** is used to compare values among different categories using rectangular bars.

## Key Points

- Best for comparing categories.
- Bar height represents the value.
- Can be vertical or horizontal.
- Created using `plt.bar()`.

## Example Code

```python
import matplotlib.pyplot as plt

subjects = ["Math", "Physics", "English", "Programming"]
marks = [80, 70, 90, 95]

plt.bar(subjects, marks)

plt.title("Student Marks")
plt.xlabel("Subjects")
plt.ylabel("Marks")

plt.show()
```

## Explanation

- `plt.bar()` creates the bar chart.
- `title()` adds a chart title.
- `xlabel()` labels the x-axis.
- `ylabel()` labels the y-axis.
- `show()` displays the chart.

## Output

A vertical bar chart comparing marks in different subjects.

## Common Mistakes

- Different lengths of labels and values.
- Forgetting `plt.show()`.
- Incorrect data types.

## Short Exam Notes

- Used to compare categories.
- Function: `plt.bar(x, y)`
- Library: `matplotlib.pyplot`

---

# 2. Scatter Plot

## Definition

A **Scatter Plot** displays the relationship between two numerical variables using points.

## Key Points

- Shows correlation between variables.
- Each point represents one observation.
- Created using `plt.scatter()`.

## Example Code

```python
import matplotlib.pyplot as plt

hours = [1, 2, 3, 4, 5]
marks = [40, 55, 60, 75, 90]

plt.scatter(hours, marks)

plt.title("Study Hours vs Marks")
plt.xlabel("Study Hours")
plt.ylabel("Marks")

plt.show()
```

## Explanation

Each point represents:

```
(Study Hours, Marks)
```

Example:

```
(3,60)
```

means:

- Studied 3 hours
- Scored 60 marks

## Output

A graph containing several points showing the relationship between study hours and marks.

## Common Mistakes

- Unequal x and y lists.
- Using text instead of numbers.
- Forgetting `plt.show()`.

## Short Exam Notes

- Used to show relationships.
- Function: `plt.scatter(x, y)`

---

# 3. Pie Chart

## Definition

A **Pie Chart** shows how each category contributes to the whole using slices of a circle.

## Key Points

- Represents percentages.
- Total equals 100%.
- Created using `plt.pie()`.

## Example Code

```python
import matplotlib.pyplot as plt

languages = ["Python", "Java", "C++", "JavaScript"]
students = [40, 25, 20, 15]

plt.pie(students, labels=languages, autopct="%1.1f%%")

plt.title("Programming Language Popularity")

plt.show()
```

## Explanation

- `labels` displays category names.
- `autopct="%1.1f%%"` displays percentages.

## Output

A circular chart divided into slices representing each programming language.

## Common Mistakes

- Values not representing meaningful proportions.
- Missing labels.
- Forgetting `autopct`.

## Short Exam Notes

- Shows percentage distribution.
- Function: `plt.pie()`

---

# Working with CSV Files

## Definition

A **CSV (Comma-Separated Values)** file stores data in rows and columns using commas.

Example:

```csv
ID,Name,Age
1,Ali,20
2,Sara,22
3,Ahmad,19
```

Python provides the built-in **csv** module for reading and writing CSV files.

```python
import csv
```

---

# Reading Data from a CSV File

## Example CSV (students.csv)

```csv
Name,Age,Department
Ali,20,CS
Sara,22,IT
Ahmad,19,SE
```

## Example Code

```python
import csv

with open("students.csv", "r") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)
```

## Explanation

- `open()` opens the file.
- `"r"` means read mode.
- `csv.reader()` reads each row.
- Each row is returned as a list.

### Output

```
['Name', 'Age', 'Department']
['Ali', '20', 'CS']
['Sara', '22', 'IT']
['Ahmad', '19', 'SE']
```

---

# Writing Data into a CSV File

## Example Code

```python
import csv

data = [
    ["Name", "Age", "Department"],
    ["Ali", 20, "CS"],
    ["Sara", 22, "IT"],
    ["Ahmad", 19, "SE"]
]

with open("students.csv", "w", newline="") as file:
    writer = csv.writer(file)

    writer.writerows(data)

print("Data written successfully.")
```

## Explanation

- `"w"` opens the file for writing.
- `csv.writer()` creates a writer object.
- `writerows()` writes multiple rows.
- `newline=""` prevents extra blank lines (especially on Windows).

### Output

A file named `students.csv` is created containing:

```csv
Name,Age,Department
Ali,20,CS
Sara,22,IT
Ahmad,19,SE
```

---

# Advantages of CSV Files

- Simple and lightweight.
- Human-readable.
- Supported by Excel, Google Sheets, databases, and many programming languages.
- Easy to import and export data.
- Fast for storing tabular data.

---

# Common Mistakes

- Forgetting `import csv`.
- Opening a file in the wrong mode (`"r"` vs `"w"`).
- Forgetting `newline=""` when writing.
- Using the wrong file path.
- Assuming numbers read from CSV are integers (they are read as strings by default).

---

# Important Matplotlib Functions

| Function        | Purpose               |
| --------------- | --------------------- |
| `plt.bar()`     | Create a bar chart    |
| `plt.scatter()` | Create a scatter plot |
| `plt.pie()`     | Create a pie chart    |
| `plt.title()`   | Add chart title       |
| `plt.xlabel()`  | Label x-axis          |
| `plt.ylabel()`  | Label y-axis          |
| `plt.show()`    | Display the chart     |

---

# Important CSV Functions

| Function             | Purpose             |
| -------------------- | ------------------- |
| `csv.reader()`       | Read CSV data       |
| `csv.writer()`       | Write CSV data      |
| `writer.writerow()`  | Write one row       |
| `writer.writerows()` | Write multiple rows |

---

# Short Exam Notes (Quick Revision)

- **Bar Chart:** Compares categories using bars (`plt.bar()`).
- **Scatter Plot:** Shows relationships between two numerical variables (`plt.scatter()`).
- **Pie Chart:** Displays percentage distribution (`plt.pie()`).
- **CSV:** Comma-Separated Values; stores tabular data in plain text.
- Import CSV module using `import csv`.
- Read CSV with `csv.reader()`.
- Write CSV with `csv.writer()`.
- Use `newline=""` when writing CSV files.
- Always use `plt.show()` to display Matplotlib charts.
