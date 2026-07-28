---
title: Vector Norms, Determinants, Eigenvalues, Eigenvectors, and Eigen Decomposition in Linear Algebra
description: A comprehensive study of vector and matrix norms, including L1, L2, and Frobenius norms, determinants of matrices, characteristic polynomials, eigenvalues, eigenvectors, and eigen decomposition. Covers methods for computing eigenvalues and eigenvectors, interpreting linear transformations, and understanding their applications in data analysis, machine learning, computer graphics, and matrix factorization.
lecture: Lecture 12-13
semester: semester-3
subject: linear-algebra
date: 2026-06-30
order: 5
---

# Linear Algebra --- Lecture 12--13 Study Notes

## Topics Covered

- Vector Norms
- Frobenius Norm
- Determinants
- Eigenvalues
- Eigenvectors
- Characteristic Polynomial
- Finding Eigenvalues
- Finding Eigenvectors
- Practice Problems

---

# Vector Norms

## Definition

A **norm** measures the length or magnitude of a vector.

## Key Points

### L1 Norm (Manhattan Norm)

$$
\|x\|_1=\sum_i |x_i|
$$

### L2 Norm (Euclidean Norm)

$$
\|x\|_2=\sqrt{\sum_i x_i^2}
$$

The L2 norm represents the shortest distance from the origin.

## Example

Let

$$
x=\begin{bmatrix}
-1\\
4\\
2
\end{bmatrix}
$$

### L1 Norm

$$
\|x\|_1=|-1|+|4|+|2|=7
$$

### L2 Norm

$$
\|x\|_2=\sqrt{(-1)^2+4^2+2^2}
=\sqrt{21}
$$

---

# Frobenius Norm

## Definition

The Frobenius norm is the matrix version of the L2 norm.

$$
\|A\|_F=
\sqrt{\sum_i\sum_j a_{ij}^2}
$$

## Example

$$
A=
\begin{bmatrix}
1&2&0\\
0&1&0\\
0&0&3
\end{bmatrix}
$$

$$
\|A\|_F=
\sqrt{1^2+2^2+1^2+3^2}
=
\sqrt{15}
$$

---

# Determinants

## 2×2 Matrix

$$
\begin{vmatrix}
a&b\\
c&d
\end{vmatrix}
=ad-bc
$$

## 3×3 Matrix

Expand along any row or column using cofactors.

## Important Facts

If

$$
|A|=0
$$

then

- Matrix is singular.
- $A^{-1}$ does not exist.
- Columns are linearly dependent.
- No unique solution exists.

---

# Eigenvalues and Eigenvectors

## Definition

If

$$
Av=\lambda v
$$

then

- $v$ is an eigenvector.
- $\lambda$ is the corresponding eigenvalue.

---

# Finding Eigenvalues

Move all terms to one side.

$$
Av=\lambda v
$$

$$
Av-\lambda Iv=0
$$

$$
(A-\lambda I)v=0
$$

For non-zero solutions,

$$
\det(A-\lambda I)=0
$$

This equation is called the **Characteristic Polynomial**.

---

# Example

Let

$$
A=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
$$

Characteristic equation

$$
\left|
\begin{matrix}
2-\lambda&1\\
1&2-\lambda
\end{matrix}
\right|
=0
$$

$$
(2-\lambda)^2-1=0
$$

$$
\lambda^2-4\lambda+3=0
$$

$$
(\lambda-3)(\lambda-1)=0
$$

Eigenvalues

$$
\lambda=3,\;1
$$

---

# Finding Eigenvectors

For each eigenvalue solve

$$
(A-\lambda I)v=0
$$

For

$$
\lambda=3
$$

the eigenvector is

$$
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

For

$$
\lambda=1
$$

the eigenvector is

$$
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

---

# General Procedure

1.  Compute $A-\lambda I$
2.  Find $|A-\lambda I|$
3.  Solve characteristic polynomial
4.  Find eigenvalues
5.  Substitute each eigenvalue into $(A-\lambda I)v=0$
6.  Solve for eigenvectors

---

# Common Mistakes

- Forgetting the identity matrix.
- Incorrect determinant calculations.
- Mixing eigenvalues with eigenvectors.
- Forgetting eigenvectors are any non-zero scalar multiple.

---

# Short Exam Notes

- $Av=\lambda v$
- Characteristic equation:

$$
|A-\lambda I|=0
$$

- Solve determinant first.
- Then compute eigenvectors.
- If $|A|=0$, inverse does not exist.
