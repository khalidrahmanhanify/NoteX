---
title: Hadamard and Dot Products
description: All about hadamard and dot products and matrix multiplication
lecture: Lecture 2
semester: semester-3
subject: linear-algebra
date: 2026-03-17
order: 15
---

# 📘 Hadamard Product

### ✅ Definition

If $( \mathbf{x}, \mathbf{y} \in \mathbb{R}^n ),$ then the **Hadamard product** (element-wise product) is defined as:

$[\mathbf{x} \odot \mathbf{y}]$

👉 **Correction/Addition:**

**The Hadamard product multiplies corresponding elements of the vectors (element-wise multiplication).**

---

### ✅ Example

$$
\begin{aligned}
\mathbf{x} &= \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \mathbf{y} = \begin{bmatrix} 4 \\ 5 \end{bmatrix} \\[1.5em]
\mathbf{x} \odot \mathbf{y} &= \begin{bmatrix} 1 \\ 2 \end{bmatrix} \odot \begin{bmatrix} 4 \\ 5 \end{bmatrix} = \begin{bmatrix} 1 \times 4 \\ 2 \times 5 \end{bmatrix} = \begin{bmatrix} 4 \\ 10 \end{bmatrix}
\end{aligned}
$$

---

### ❌ Condition

👉 **Correct (clarified):**

We **cannot apply** the Hadamard product if vectors have **different dimensions**.

$$
\begin{gather}
\mathbf{x_1} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix}, \qquad

\mathbf{x_2} = \begin{bmatrix} 1 \\ 5 \\ 3 \\ 0 \\ 0 \end{bmatrix}
\end{gather}
$$

👉 Dimensions are different → **Not defined**

---

# 📘 Dot Product

### ✅ Definition

If ( $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ ), then the **dot product** is:

$$
\mathbf{x}^T \mathbf{y}
$$

👉 **Addition:**

- The result is a **scalar (single number)**
- It is also called the **inner product**

---

### Example 1

$$
\begin{align}
\mathbf{x}= \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \qquad \mathbf{y}= \begin{bmatrix} 4 \\ 5 \end{bmatrix} \\
\end{align}
$$

$$
\mathbf{x}^T \mathbf{y} = \begin{bmatrix}1 & 2\end{bmatrix}
$$

$$
\mathbf{x}^T\mathbf{y}=1×4+2×5=14
$$

---

### Example 2

$$
\begin{align}

\begin{bmatrix}1 & 2 & 3 & 4 & 7 & 9\end{bmatrix} \quad \begin{bmatrix}1 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0\end{bmatrix} \

\implies \\
=1×1+2×1+3×0+4×0+7×0+9×0=3

\end{align}
$$

---

# 📘 Matrix Multiplication

### ⚠️ Important Rule (Added)

👉 Matrix multiplication is only possible when:

$$
(\text{columns of A}) = (\text{rows of B})
$$

$$
\mathbf{A} \ (4 \times 5)
$$

---

# 📘 General Formula of Matrix Multiplication

👉 **Improved Explanation:**

$$
C = AB
$$

Each element is:

$$
c_{ij} = \text{(row i of A)} \cdot \text{(column j of B)}
$$

👉 **Addition:**

Each entry is a **dot product** of a row and a column.

---

# 📘 Practice Problems

---

### ✅ Practice 1 (Correct)

$$
\begin{bmatrix}1 \\ 2 \end{bmatrix}\begin{bmatrix}5 & 6\end{bmatrix}\begin{bmatrix}5 & 6 \\ 10 & 12\end{bmatrix}
$$

👉 **Addition:**

This is called an **outer product**.

---

### ❌ Practice 2 (Checked & Corrected Explanation)

$$
\begin{bmatrix}
1 & 3 & 0 \\
2 & 4 & 1
\end{bmatrix}
\begin{bmatrix}
5 & 2 & 0 & 3 \\
1 & 1 & 0 & 1 \\
0 & 3 & 1 & 1
\end{bmatrix}
=
\begin{bmatrix}
8 & 5 & 0 & 6 \\
14 & 11 & 1 & 11
\end{bmatrix}
$$

👉 **Addition:**

Each entry is computed using **row × column dot product**.

---

### ✅ Practice 3 (Correct)

$$
\begin{bmatrix}1 \\ 2 \\ 3\end{bmatrix}\begin{bmatrix}5 & 6\end{bmatrix}
\begin{bmatrix}
5 & 6 \\
10 & 12 \\
15 & 18
\end{bmatrix}
$$

👉 **Addition:**

Another example of an **outer product**.

---

# ⭐ Final Summary (Added for Study)

### 🔹 Hadamard Product

- Element-wise multiplication
- Same dimensions required
- Output: vector

### 🔹 Dot Product

- Multiply + sum
- Output: scalar
- Requires same dimension

### 🔹 Matrix Multiplication

- Row × Column
- Inner dimensions must match
- Output size:
  $$
  (m \times n)(n \times p) = (m \times p)
  $$
