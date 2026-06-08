---
title: Vector Spaces, Row Space, and Column Space in Linear Algebra
description: Understanding vector spaces in linear algebra including axioms of vector spaces, linear combinations, span, basis, row space, and column space of matrices. Covers key concepts of linear independence, Gaussian elimination, and how matrix transformations relate to solving systems of linear equations.
lecture: Lecture 9
semester: semester-3
subject: linear-algebra
date: 2026-06-02
order: 8
---

# Linear Algebra – Vector Spaces, Row Spaces, Column Spaces (Lecture 09)

## Definition

A **vector space** is a collection of objects (called vectors) where two operations are always valid:

- Vector addition
- Scalar multiplication

These operations must follow specific rules (axioms) so the system remains consistent.

A **row space** is the set of all linear combinations of the row vectors of a matrix.

A **column space** is the set of all linear combinations of the column vectors of a matrix.

---

## Key Points

### 1. Vector Spaces

A vector space must satisfy 8 rules:

#### Vector Addition Rules

- **Commutative:**
  ( $u + v = v + u$ )

- **Associative:**
  ( $(u + v) + w = u + (v + w)$ )

- **Identity element:**
  ( $u + 0 = u$ )

- **Inverse element:**
  ( $u + (-u) = 0$ )

---

#### Scalar Multiplication Rules

- **Distributive:**
  ( $(c + d)u = cu + du$ )

- **Associativity:**
  ( $c(du) = (cd)u$ )

- **Identity scalar:**
  ( $1u = u$ )

---

### 2. Sets and Spaces

- A **set** is a collection of elements.

- Empty set:
  ( $\emptyset = \{ \}$ )

- A **vector space** is a set with defined rules for addition and scalar multiplication.

---

### 3. Vector Addition Example

In ( $\mathbb{R}^2$ ):

$$
\begin{bmatrix} 1 \\ 2 \end{bmatrix} +
\begin{bmatrix} 3 \\ 1 \end{bmatrix} =
\begin{bmatrix} 4 \\ 3 \end{bmatrix}
$$

Scaling:

$$
3 \cdot \begin{bmatrix} 1 \\ 2 \end{bmatrix}
=
\begin{bmatrix} 3 \\ 6 \end{bmatrix}
$$

---

### 4. Linear Combination

A vector ( w ) is a linear combination of vectors ( v_1, v_2, ..., v_r ) if:

$$
w = k_1 v_1 + k_2 v_2 + \cdots + k_r v_r
$$

Where:

- ($ k_1, k_2, ..., k_r$ ) are scalars (coefficients)

---

### 5. Span

The **span** of a vector is all possible vectors created by scaling it.

Example:

If

$$
x = \begin{bmatrix} 1 \\ 1 \end{bmatrix}
$$

Then:

$$
\text{span}(x) = { \alpha x : \alpha \in \mathbb{R} }
$$

This creates a **line through the origin**.

Examples of span points:

- $(1,1), (2,2), (0.5,0.5), (-1,-1)$

---

### 6. Span of Multiple Vectors

If we have:

$$
v_1, v_2, ..., v_n
$$

Then:

$$
\text{span}(v_1, v_2, ..., v_n)
$$

is all linear combinations:

$$
a v_1 + b v_2 + c v_3 + ...
$$

---

### 7. Basis

A **basis** is a set of vectors that:

- Generate the space (span it)
- Are linearly independent

Example in ( \mathbb{R}^2 ):

$$
\begin{bmatrix} 1 \\ 0 \end{bmatrix},
\begin{bmatrix} 0 \\ 1 \end{bmatrix}
$$

These generate the whole 2D plane.

---

### 8. Row Space

- The row space is formed by all linear combinations of row vectors.
- Row operations help determine:
  - Rank
  - Linear independence
  - Dependence among equations

---

### 9. Column Space

- The column space is formed by all linear combinations of column vectors.
- It determines:
  - Whether a system has solutions
  - Whether a vector lies in the span

---

### 10. Solving Systems and Span

To check if a vector is in a span:

- Convert to a system of linear equations
- Solve using Gaussian elimination

If:

- Solution exists → vector is in the span
- No solution → not in span

---

## Example / Code

### Column Space Interpretation

Given system:

$$
a v_1 + b v_2 + c v_3 = u
$$

This becomes:

$$
Ax = b
$$

Solving determines if ( b ) is in the **column space of A**.

---

## Output (if any)

- If system is consistent → solution exists → vector is in column space
- If inconsistent → no solution → vector is not in column space

---

## Common Mistakes

### 1. Confusing span and basis

- Span = all possible combinations
- Basis = smallest independent generating set

---

### 2. Thinking vectors must start at origin incorrectly

- Span always passes through origin

---

### 3. Mixing row and column space

- Row space → rows of matrix
- Column space → columns of matrix

---

### 4. Incorrect linear combination setup

Wrong:

$$
av_1 + bv_2 = u \text{ without solving system}
$$

Correct:

Convert into equations and solve.

---

## Short Exam Notes (very concise revision points)

- Vector space → closed under addition & scalar multiplication
- 8 axioms define vector space
- Linear combination: ( w = \sum k_i v_i )
- Span = all linear combinations
- Basis = independent spanning set
- Row space → span of rows
- Column space → span of columns
- Solve systems → check span membership
- Gaussian elimination = key tool
