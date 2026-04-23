---
title: Matrix Operations like Summation, Averaging, and Transformations
description: Understanding how matrices compute sums, averages, and act as functions to transform vectors.
lecture: Lecture 7
semester: semester-3
subject: linear-algebra
date: 2026-04-23
order: 10
---

# Summation of Vectors and Matrices

## Definition

**Summation of a matrix or vector** means adding elements either:

- **Column-wise** (most common in data analysis)
- **Row-wise**

A powerful method uses a **vector of ones** to compute sums and averages using matrix multiplication.

---

## Key Points

- A **matrix** ( $X\_{n \times m}$ ) has:
  - ( $n$ ) rows (observations)
  - ( $m$ ) columns (features)

- To compute **column sums**:

  $$
  1_n^T \cdot X
  $$

  where ( $1_n^T = [1\ 1\ 1\ ...\ 1]$ ) (row vector of size (1 \times n))

- To compute **column averages**:

  $$
  \frac{1}{n} \cdot 1_n^T \cdot X
  $$

- This works because:
  - Multiplying by a vector of ones adds all rows together

---

## Example / Code

### Example 1: Matrix Summation and Average

Given:

$$
X =
\begin{bmatrix}
2000 & 3 & 75 \\
2500 & 4 & 73 \\
3000 & 5 & 85 \\
1000 & 4 & 65 \\
1000 & 2 & 8 \\
1500 & 1 & 70 \\
2000 & 0 & 0
\end{bmatrix}
$$

Column sum:

$$
1_7^T \cdot X =
\begin{bmatrix}
14500 & 19 & 376
\end{bmatrix}
$$

Average:

$$
\frac{1}{7} \cdot 1_7^T \cdot X =
\begin{bmatrix}
2071.43 & 2.71 & 53.71
\end{bmatrix}
$$

---

### Example 2: Using Ones Vector

$$
\begin{bmatrix}
1 & 1 & 1 & 1 & 1 & 1
\end{bmatrix}
\cdot
\begin{bmatrix}
85 & 91 & 82 \\
82 & 92 & 92 \\
78 & 90 & 91 \\
92 & 95 & 75 \\
97 & 85 & 76 \\
90 & 90 & 80
\end{bmatrix} \implies

\begin{bmatrix}
524 & 543 & 496
\end{bmatrix}
$$

Average:

$$
\begin{bmatrix}
87.3 & 90.5 & 82.6
\end{bmatrix}
$$

---

### General Formula

$$\frac{1}{n} 1_n^T X$$

---

### Practice Matrix

$$
A =
\begin{bmatrix}
1 & 7 & 8 & 15 & 1 \\
2 & 8 & 9 & 16 & 2 \\
3 & 9 & 10 & 17 & 3 \\
4 & 10 & 11 & 18 & 4 \\
5 & 11 & 12 & 19 & 5 \\
6 & 12 & 13 & 20 & 6 \\
7 & 13 & 14 & 21 & 7
\end{bmatrix}
$$

Average:

$$
\frac{1}{7} \cdot 1_7^T \cdot A
$$

---

## Explanation

- The **vector of ones** acts like a “sum operator”.
- When you multiply:
  - Each column is summed independently

- Dividing by ( $n$ ) gives the **mean of each column**

This method is widely used in:

- Machine Learning (feature averaging)
- Statistics (mean calculation)
- Data preprocessing

---

## Output (if any)

- Output of summation: **row vector $(1 × m)$**
- Output of average: **row vector $(1 × m)$**

---

## Common Mistakes

- ❌ Using wrong dimension for ones vector
  → Must match number of rows

- ❌ Dividing by wrong value
  → Always divide by number of rows ( $n$ ), not columns

- ❌ Arithmetic errors in summation
  → Double-check sums carefully

- ❌ Confusing row-wise vs column-wise operations

---

## Short Exam Notes (very concise revision points)

- Column sum: ( $1_n^T X$ )
- Column mean: ( $\frac{1}{n} 1_n^T X$ )
- ( $1_n$ ): vector of ones
- Output is always **$1 × m$**
- Used for fast matrix-based averaging
