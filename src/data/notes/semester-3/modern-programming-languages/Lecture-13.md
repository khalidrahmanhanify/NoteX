---
title: Introduction to Data Science and Linear Regression with Pandas, NumPy, and Scikit-learn
description: Learn the fundamentals of Data Science, including the roles of Pandas and NumPy for data manipulation and analysis. Explore DataFrames, data cleaning, preprocessing, and the complete machine learning workflow using Linear Regression with Scikit-learn to analyze data, make predictions, and visualize future trends.
lecture: Lecture 13
semester: semester-3
subject: modern-programming-languages
date: 2026-06-21
order: 4
---

# Introduction to Data Science and Linear Regression with Pandas, NumPy, and Scikit-learn

## Definition

**Data Science** is a multidisciplinary field that combines **statistics, mathematics, programming, data analysis, and machine learning** to extract meaningful insights and knowledge from both **structured** and **unstructured** data.

It helps organizations make better decisions by analyzing historical data and predicting future outcomes.

---

# What is Data Science?

## Definition

Data Science is the process of collecting, cleaning, analyzing, visualizing, and interpreting data to solve real-world problems.

It combines several fields including:

- Statistics
- Data Analysis
- Machine Learning
- Artificial Intelligence
- Programming

---

## Key Points

- Works with structured and unstructured data.
- Uses scientific methods and algorithms.
- Helps make predictions from historical data.
- Used in business, healthcare, finance, education, and many other fields.

---

## Real-World Applications

- Weather forecasting
- Population prediction
- Stock market analysis
- Disease detection
- Recommendation systems (Netflix, YouTube)
- Fraud detection
- Sales forecasting

---

## Data Science Workflow

```text
Collect Data
      ↓
Clean Data
      ↓
Analyze Data
      ↓
Build Model
      ↓
Predict Results
      ↓
Visualize Data
```

---

## Common Mistakes

- Using dirty or incomplete data.
- Ignoring missing values.
- Building a model without preprocessing.
- Using insufficient training data.

---

## Short Exam Notes

- Multidisciplinary field.
- Combines statistics + programming + machine learning.
- Goal: Extract useful knowledge from data.

---

# Pandas Library

## Definition

**Pandas** is an open-source Python library used for **data manipulation**, **analysis**, and **handling tabular data** efficiently.

Import Pandas:

```python
import pandas as pd
```

---

## Key Points

Pandas provides:

- DataFrames
- Series
- Reading CSV, Excel, JSON files
- Writing files
- Filtering data
- Sorting data
- Updating columns
- Deleting columns
- Handling missing values

---

## Reading a CSV File

```python
import pandas as pd

df = pd.read_csv("students.csv")
print(df)
```

---

## Writing to a CSV File

```python
df.to_csv("new_file.csv", index=False)
```

---

## Explanation

`pd.read_csv()` reads CSV files into a DataFrame.

`to_csv()` saves the DataFrame into a CSV file.

---

## Common Mistakes

- Forgetting `import pandas as pd`.
- Wrong file path.
- Incorrect column names.
- Forgetting `index=False` while exporting.

---

## Short Exam Notes

- Library for data analysis.
- Import:

```python
import pandas as pd
```

- Main object: **DataFrame**

---

# DataFrame

## Definition

A **DataFrame** is a two-dimensional table consisting of rows and columns.

It is the most important data structure in Pandas.

---

## Example

```python
import pandas as pd

data = {
    "Name": ["Ali", "Sara", "Ahmad"],
    "Age": [20, 21, 19]
}

df = pd.DataFrame(data)

print(df)
```

---

## Output

```text
    Name   Age
0    Ali    20
1   Sara    21
2  Ahmad    19
```

---

## Explanation

Each column has a name.

Each row has an index.

---

## Common Mistakes

- Different column lengths.
- Duplicate column names.

---

## Short Exam Notes

- Two-dimensional structure.
- Similar to an Excel sheet.

---

# NumPy Library

## Definition

**NumPy (Numerical Python)** is a Python library used for numerical computing and multidimensional arrays.

Import:

```python
import numpy as np
```

---

## Key Points

- Fast mathematical calculations.
- Multidimensional arrays.
- Matrix operations.
- Linear algebra.
- Scientific computing.

---

## Example

```python
import numpy as np

numbers = np.array([10,20,30,40])

print(numbers)
```

---

## Output

```text
[10 20 30 40]
```

---

## Explanation

`np.array()` creates a NumPy array.

---

## Common Mistakes

- Forgetting `import numpy as np`.
- Mixing lists and arrays.

---

## Short Exam Notes

- NumPy = Numerical Python.
- Mainly used for arrays and mathematics.

---

# Installing Scikit-learn

## Definition

**Scikit-learn** is a machine learning library for Python.

Installation

```bash
pip install scikit-learn
```

or

```bash
pip3 install scikit-learn
```

---

## Import

```python
from sklearn.linear_model import LinearRegression
```

---

## Short Exam Notes

- Used for Machine Learning.
- Contains many algorithms.
- Linear Regression is included.

---

# Linear Regression

## Definition

Linear Regression is a supervised machine learning algorithm used to predict continuous numerical values by finding the relationship between two variables.

---

## Types

### 1. Simple Linear Regression (SLR)

Uses one independent variable.

Example

```text
Study Hours → Marks
```

---

### 2. Multiple Linear Regression

Uses multiple independent variables.

Example

```text
Hours + Attendance + Assignments → Marks
```

---

## Mathematical Formula

```text
y = mx + c
```

Where

- y = Predicted value
- x = Independent variable
- m = Slope
- c = Intercept

---

## Import

```python
from sklearn.linear_model import LinearRegression
```

---

## Example

```python
from sklearn.linear_model import LinearRegression
import numpy as np

x = np.array([[1],[2],[3],[4],[5]])
y = np.array([2,4,6,8,10])

model = LinearRegression()

model.fit(x,y)

prediction = model.predict([[6]])

print(prediction)
```

---

## Output

```text
[12.]
```

---

## Explanation

The model learns the relationship:

```text
y = 2x
```

When

```text
x = 6
```

Prediction becomes

```text
12
```

---

## Common Mistakes

- Not reshaping input data.
- Training with dirty data.
- Using categorical values directly.

---

## Short Exam Notes

- Used for prediction.
- Works with continuous values.
- Import using:

```python
from sklearn.linear_model import LinearRegression
```

---

# Predicting Future Information

## Machine Learning Workflow

### Step 1

Collect Data

↓

### Step 2

Clean the Data

- Remove missing values
- Remove duplicates
- Select useful columns

↓

### Step 3

Build the Model

```python
model = LinearRegression()
```

↓

### Step 4

Train the Model

```python
model.fit(X,Y)
```

↓

### Step 5

Predict Future

```python
model.predict()
```

↓

### Step 6

Visualize Results

Use Matplotlib

---

## Example Workflow

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

df = pd.read_csv("population.csv")

X = df[["Year"]]
Y = df["Population"]

model = LinearRegression()

model.fit(X,Y)

future = model.predict([[2050]])

print(future)
```

---

## Explanation

The model learns the trend from historical population data and estimates the population in the year **2050**.

---

## Plotting Data

```python
plt.scatter(X,Y)

plt.plot(X, model.predict(X), color="red")

plt.xlabel("Year")
plt.ylabel("Population")

plt.show()
```

---

## Output

A scatter plot showing the original data points with a straight regression line representing the predicted trend.

---

## Common Mistakes

- Using unclean data.
- Incorrect feature selection.
- Predicting before training.
- Forgetting to reshape data.

---

# World Bank Population Dataset

Example source:

- Afghanistan Population Data (World Bank)
- Population by Country (Kaggle)

These datasets can be used to train Linear Regression models and predict future population growth.

---

# Complete Machine Learning Process

```text
Import Libraries
        ↓
Read Dataset
        ↓
Create DataFrame
        ↓
Clean Data
        ↓
Select Features (X)
        ↓
Select Target (Y)
        ↓
Train Model
        ↓
Predict Future Values
        ↓
Visualize Results
```

---

# Frequently Used Libraries

| Library      | Purpose                           |
| ------------ | --------------------------------- |
| Pandas       | Data manipulation and analysis    |
| NumPy        | Numerical computations and arrays |
| Matplotlib   | Data visualization                |
| Scikit-learn | Machine learning algorithms       |

---

# Frequently Used Functions

| Function          | Purpose                |
| ----------------- | ---------------------- |
| `pd.read_csv()`   | Read a CSV file        |
| `pd.DataFrame()`  | Create a DataFrame     |
| `model.fit()`     | Train the model        |
| `model.predict()` | Predict values         |
| `plt.scatter()`   | Create a scatter plot  |
| `plt.plot()`      | Draw a regression line |

---

# Short Exam Notes (Quick Revision)

- **Data Science:** Extracts knowledge from structured and unstructured data.
- **Pandas:** Used for data manipulation and analysis (`import pandas as pd`).
- **DataFrame:** Two-dimensional table with rows and columns.
- **NumPy:** Library for numerical computing and multidimensional arrays (`import numpy as np`).
- **Scikit-learn:** Machine learning library (`pip install scikit-learn`).
- **Linear Regression:** Predicts continuous numerical values using a linear relationship.
- **Machine Learning Workflow:** Collect → Clean → Build → Train → Predict → Visualize.
- **Key Methods:** `read_csv()`, `DataFrame()`, `fit()`, `predict()`, `scatter()`, and `plot()`.
