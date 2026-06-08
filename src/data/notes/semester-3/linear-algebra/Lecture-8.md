---
title: Matrix Transformations, Centering, Scaling, and Inverse Methods in Linear Algebra
description: Study of linear algebra transformations including matrix-based rotation, scaling, and centering of data, along with combining transformations, computing centroids, and solving linear systems using matrix inverses. Covers 2×2 matrix inverses, Gaussian elimination, and applications in solving Ax = B.
lecture: Lecture 8
semester: semester-3
subject: linear-algebra
date: 2026-04-28
order: 9
---

## Matrix Transformations, Centering, Scaling, and Inverse Matrices

By Noorullah Ibrahim

---

## Definition

This lecture focuses on **matrix transformations** in 2D and higher dimensions, including:

- Centering data using matrices
- Scaling geometric objects
- Combining transformations
- Finding matrix inverses
- Solving linear systems using inverse matrices

A **matrix transformation** is a rule that changes vectors or points using matrix multiplication.

---

## Key Points

### 1. Matrix Transformations

Matrices can perform geometric operations such as:

- Rotation
- Scaling
- Reflection
- Translation (indirectly via centering)

Example:

$$
\begin{bmatrix}
\cos 45^\circ & \sin 45^\circ \\
-\sin 45^\circ & \cos 45^\circ
\end{bmatrix}
$$

rotates a vector.

---

### 2. Combining Transformations

Multiple transformations can be combined using matrix multiplication.

Example:

Rotation + Scaling:

$$
\begin{bmatrix}
2 & 0 \\
0 & 2
\end{bmatrix}
\cdot
\text{Rotation Matrix}
$$

Important rule:

- Order matters in matrix multiplication

---

### 3. Centering Matrix

**Centering** shifts data so its mean becomes zero.

#### Step 1: Compute mean (centroid)

$$
\bar{x} = \frac{1}{n} \sum x_i
$$

#### Step 2: Subtract mean from each value

$$
X_{centered} = X - \bar{X}
$$

This shifts data to origin (0,0).

---

### 4. Scaling Transformation

Scaling changes size of an object.

- Multiply by scaling matrix
- Example: double size → multiply by 2

$$
2I \cdot X
$$

Steps:

1. Center object
2. Multiply by scaling factor

---

### 5. 2×2 Matrix Transformations

Used for:

- Rotation
- Scaling
- Reflection

General form:

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

---

### 6. Matrix Inverse

A matrix inverse behaves like division:

$$
A^{-1}A = I
$$

Where:

- ( $I$ ) = identity matrix

---

### 7. 2×2 Inverse Formula

For:

$$
A =
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

Inverse:

$$
A^{-1} = \frac{1}{ad - bc}
\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

Condition:

- ( $ad - bc \neq 0$ )

---

### 8. Solving Linear Systems Using Inverse

Given:

$$
AX = B
$$

Solution:

$$
X = A^{-1}B
$$

Works only if:

- ( $A$ ) is invertible

---

## Example / Code

### Inverse Matrix Example (2×2)

Given:

$$
A =
\begin{bmatrix}
1 & 2 \\
0 & 1
\end{bmatrix}
$$

Inverse:

$$
A^{-1} =
\begin{bmatrix}
1 & -2 \\
0 & 1
\end{bmatrix}
$$

Verification:

$$
A^{-1}A = I
$$

---

### System of Equations

$$
2x + y = 5
$$

$$
x + 3y = 9
$$

Matrix form:

$$
AX = B
$$

Solution:

$$
X = A^{-1}B
$$

---

## Output (if any)

- Identity matrix obtained after inverse multiplication
- Unique solution for system of equations if determinant ≠ 0

---

## Common Mistakes

### 1. Wrong order in multiplication

Matrix multiplication is not commutative:

$$
AB \neq BA
$$

---

### 2. Forgetting determinant condition

Inverse exists only if:

$$
ad - bc \neq 0
$$

---

### 3. Mixing centering and scaling order

Order changes final result.

---

### 4. Incorrect inverse formula usage

Common error: forgetting division by determinant.

---

## Short Exam Notes (very concise revision points)

- Centering → subtract mean from data
- Scaling → multiply by scalar matrix
- Transformation → matrix multiplication
- Inverse: ( $A^{-1}A = I$ )
- 2×2 inverse formula:
  $$
  \frac{1}{ad-bc}
  \begin{bmatrix}
  d & -b \\
  -c & a
  \end{bmatrix}
  $$
- Solve system: ( $X = A^{-1}B$ )
- Determinant ≠ 0 → inverse exists
- Matrix order matters in multiplication
