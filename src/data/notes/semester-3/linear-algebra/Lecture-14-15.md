---
title: "Linear Algebra Study Guide: Eigenvalue Decomposition & Singular Value Decomposition"
description: "A comprehensive, textbook-quality study guide covering matrix inverses, diagonal properties, Eigenvalue Decomposition (EVD), and Singular Value Decomposition (SVD) with step-by-step mathematical proofs and examples."
lecture: Lecture 14-15
semester: semester-3
subject: linear-algebra
date: "2026-07-07"
order: 4
---

# Matrix Inverse & Diagonal Matrix Properties

## Definition

Before diving into advanced matrix factorizations like Eigenvalue Decomposition and Singular Value Decomposition, we must build a strong foundation in essential matrix operations.

1. **Matrix Inverse**: For a square matrix $A \in \mathbb{R}^{n \times n}$, its multiplicative inverse $A^{-1}$ is a unique matrix such that multiplying $A$ by $A^{-1}$ (in either order) yields the identity matrix $I$. If $A^{-1}$ exists, $A$ is called **invertible** or **non-singular**.
2. **Diagonal Matrix**: A square matrix $\Sigma \in \mathbb{R}^{n \times n}$ is called diagonal if all entries off the main diagonal are zero. That is, $\Sigma_{ij} = 0$ whenever $i \neq j$.

---

## Key Points

### Inverse Properties

- **Uniqueness / Inverse Definition**: If $BA = I$, then $B$ is uniquely the left and right inverse of $A$, meaning $B = A^{-1}$ and $AB = I$.
- **Product Inverse (Reversal Rule)**: The inverse of a product of multiple invertible matrices is the product of their inverses in **reverse order**:

$$(ABC)^{-1} = C^{-1} B^{-1} A^{-1}$$

_Why it works_:

$$(ABC)(C^{-1}B^{-1}A^{-1}) = AB(CC^{-1})B^{-1}A^{-1} = A(BB^{-1})A^{-1} = AA^{-1} = I$$

- **Involution**: Taking the inverse twice restores the original matrix:

$$(A^{-1})^{-1} = A$$

- **Transpose and Inverse Commutativity**: The operations of transposition and inversion commute:

$$(A^{-1})^T = (A^T)^{-1}$$

- **Scalar Multiplication**: For any non-zero scalar $\alpha \neq 0$:

$$(\alpha A)^{-1} = \frac{1}{\alpha} A^{-1}$$

- **$2 \times 2$ Explicit Inverse Formula**: For $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$, the inverse exists if and only if $\det(A) = ad - bc \neq 0$:

$$A^{-1} = \frac{1}{\det(A)} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

### Diagonal Matrix Properties

- **Identity Matrix**: An identity matrix $I_n$ is a special diagonal matrix where all diagonal elements equal $1$.
- **Matrix Powers**: Computing powers of a diagonal matrix requires taking powers of individual diagonal entries directly:

$$\begin{bmatrix} d_1 & 0 \\ 0 & d_2 \end{bmatrix}^k = \begin{bmatrix} d_1^k & 0 \\ 0 & d_2^k \end{bmatrix}$$

- **Diagonal Inversion**: A diagonal matrix is invertible if and only if all diagonal entries are non-zero:

$$\begin{bmatrix} d_1 & 0 \\ 0 & d_2 \end{bmatrix}^{-1} = \begin{bmatrix} d_1^{-1} & 0 \\ 0 & d_2^{-1} \end{bmatrix}$$

- **Symmetry under Transposition**: Every diagonal matrix is equal to its transpose:

$$D^T = D$$

---

## Mathematical Formula

### Multi-Matrix Inverse Rule

$$(ABC)^{-1} = C^{-1}B^{-1}A^{-1}$$

- $A, B, C$: Invertible matrices of dimension $n \times n$.

### $2 \times 2$ Inverse Matrix Formula

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

- $a, b, c, d$: Real scalar entries of matrix $A$.
- $\det(A) = ad - bc$: Determinant of $A$. Must be non-zero for $A^{-1}$ to exist.

---

## Step-by-Step Explanation

Let us systematically simplify algebraic expressions containing matrix transpose and inverse operators.

### Fundamental Matrix Rules

1. Transpose of a product: $(XY)^T = Y^T X^T$.
2. Transpose of a sum: $(X + Y + Z)^T = X^T + Y^T + Z^T$.
3. Inverse of an orthonormal matrix: If $U$ and $V$ have orthonormal columns ($U^T U = I$), then $U^{-1} = U^T$ and $V^{-1} = V^T$.

---

## Example 1

Verify algebraic properties of transpose and inverse on given symbolic expressions. Assume $U$ and $V$ are orthogonal matrices ($U^T = U^{-1}$ and $V^T = V^{-1}$), and $\Sigma$ is diagonal ($\Sigma^T = \Sigma$).

Simplify the following expressions:

1. $(A + B + C)^T$
2. $(U^T V)^T$
3. $(U \Sigma V^T)^T$
4. $((U^{-1} \Sigma V^T)^T)^{-1}$

### Solution:

#### 1. Expand $(A + B + C)^T$:

Applying the additive property of transposes:

$$(A + B + C)^T = A^T + B^T + C^T$$

#### 2. Expand $(U^T V)^T$:

Applying the product rule $(XY)^T = Y^T X^T$ where $X = U^T$ and $Y = V$:

$$(U^T V)^T = V^T (U^T)^T = V^T U$$

#### 3. Expand $(U \Sigma V^T)^T$:

Applying the reversal rule for transposes on three matrices:

$$(U \Sigma V^T)^T = (V^T)^T \Sigma^T U^T$$

Since $(V^T)^T = V$ and $\Sigma^T = \Sigma$:

$$(U \Sigma V^T)^T = V \Sigma U^T$$

#### 4. Simplify $((U^{-1} \Sigma V^T)^T)^{-1}$:

First, apply the inner transpose operation using the product reversal rule:

$$(U^{-1} \Sigma V^T)^T = (V^T)^T \Sigma^T (U^{-1})^T = V \Sigma (U^T)^{-1}$$

Now, take the overall inverse of $V \Sigma (U^T)^{-1}$ using the inverse product reversal rule $(XYZ)^{-1} = Z^{-1} Y^{-1} X^{-1}$:

$$((U^T)^{-1})^{-1} \Sigma^{-1} V^{-1}$$

Simplify each term:

- $((U^T)^{-1})^{-1} = U^T$
- $V^{-1} = V^T$ (since $V$ is orthogonal)

Thus:

$$((U^{-1} \Sigma V^T)^T)^{-1} = U^T \Sigma^{-1} V^T$$

---

## Example 2

Given the concrete matrices:

$$A = \begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix}, \quad B = \begin{bmatrix} 2 & 3 \\ 0 & 8 \end{bmatrix}$$

Verify the product inverse identity $(AB)^{-1} = B^{-1} A^{-1}$.

### Solution:

#### Step 1: Compute matrix product $AB$

$$AB = \begin{bmatrix} 1 & 3 \\ 2 & 7 \end{bmatrix} \begin{bmatrix} 2 & 3 \\ 0 & 8 \end{bmatrix} = \begin{bmatrix} (1)(2) + (3)(0) & (1)(3) + (3)(8) \\ (2)(2) + (7)(0) & (2)(3) + (7)(8) \end{bmatrix} = \begin{bmatrix} 2 & 27 \\ 4 & 62 \end{bmatrix}$$

#### Step 2: Compute $(AB)^{-1}$ directly

$$\det(AB) = (2)(62) - (27)(4) = 124 - 108 = 16$$

$$(AB)^{-1} = \frac{1}{16} \begin{bmatrix} 62 & -27 \\ -4 & 2 \end{bmatrix} = \begin{bmatrix} \frac{31}{8} & -\frac{27}{16} \\ -\frac{1}{4} & \frac{1}{8} \end{bmatrix}$$

#### Step 3: Compute individual inverses $A^{-1}$ and $B^{-1}$

For $A$: $\det(A) = (1)(7) - (3)(2) = 1$

$$A^{-1} = \frac{1}{1} \begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix}$$

For $B$: $\det(B) = (2)(8) - (3)(0) = 16$

$$B^{-1} = \frac{1}{16} \begin{bmatrix} 8 & -3 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & -\frac{3}{16} \\ 0 & \frac{1}{8} \end{bmatrix}$$

#### Step 4: Multiply $B^{-1} A^{-1}$

$$B^{-1} A^{-1} = \begin{bmatrix} \frac{1}{2} & -\frac{3}{16} \\ 0 & \frac{1}{8} \end{bmatrix} \begin{bmatrix} 7 & -3 \\ -2 & 1 \end{bmatrix}$$

$$= \begin{bmatrix} \left(\frac{1}{2}\right)(7) + \left(-\frac{3}{16}\right)(-2) & \left(\frac{1}{2}\right)(-3) + \left(-\frac{3}{16}\right)(1) \\ (0)(7) + \left(\frac{1}{8}\right)(-2) & (0)(-3) + \left(\frac{1}{8}\right)(1) \end{bmatrix}$$

$$= \begin{bmatrix} \frac{7}{2} + \frac{3}{8} & -\frac{3}{2} - \frac{3}{16} \\ -\frac{1}{4} & \frac{1}{8} \end{bmatrix} = \begin{bmatrix} \frac{31}{8} & -\frac{27}{16} \\ -\frac{1}{4} & \frac{1}{8} \end{bmatrix}$$

$(AB)^{-1} = B^{-1} A^{-1}$ is verified.

---

## Applications

- **Robotics Kinematics**: Inverting transformation matrices allows computing inverse kinematics (finding joint angles required to position a robot arm at a specific coordinate).
- **Computer Graphics**: Transformation pipelines rely on reversing sequence operations (Scale $\rightarrow$ Rotate $\rightarrow$ Translate) by multiplying inverses in reverse order.

---

## Common Mistakes

- **Incorrect Inverse Multiplication Order**: Writing $(AB)^{-1} = A^{-1} B^{-1}$ instead of $B^{-1} A^{-1}$. Matrix multiplication is non-commutative ($AB \neq BA$), so the order must reverse.
- **Inverting non-diagonal elements directly**: Assuming an arbitrary matrix can be inverted by replacing every element $a_{ij}$ with $1/a_{ij}$. **This property holds only for diagonal matrices**.

---

## Exam Notes

- **Determinant Check**: Before finding $A^{-1}$, compute $\det(A)$. If $\det(A) = 0$, stop immediately—the inverse does not exist.
- **$2 \times 2$ Quick Rule**: Swap diagonal elements, change signs of off-diagonal elements, and divide by determinant.
- **Reversal Rules**:
- $(AB)^T = B^T A^T$
- $(AB)^{-1} = B^{-1} A^{-1}$

---

---

# Eigenvalue Decomposition (EVD)

```
Eigen Decomposition Architecture

      A  (Square Matrix, n x n)
      │
      ▼
  V Σ V⁻¹
  │ │  │
  │ │  └── Inverse Eigenvector Matrix
  │ └───── Diagonal Eigenvalue Matrix (λ₁, λ₂, ..., λₙ)
  └─────── Eigenvector Column Matrix [v₁ | v₂ | ... | vₙ]

```

## Definition

**Eigenvalue Decomposition (EVD)**—also known as matrix diagonalization—is the process of factoring a square matrix $A \in \mathbb{R}^{n \times n}$ into a specific product of three matrices:

$$A = V \Sigma V^{-1}$$

where:

- $V$ is an $n \times n$ matrix whose columns are linearly independent eigenvectors of $A$.
- $\Sigma$ (or $\Lambda$) is an $n \times n$ diagonal matrix containing the corresponding eigenvalues along its main diagonal.
- $V^{-1}$ is the matrix inverse of $V$.

A matrix $A$ is **diagonalizable** if and only if it possesses $n$ linearly independent eigenvectors.

---

## Key Points

- **The Eigenvalue Equation**: By definition, an eigenvector $v_i$ and eigenvalue $\lambda_i$ satisfy $A v_i = \lambda_i v_i$.
- **Matrix Form Derivation**: Stacking all vector equations side-by-side yields:

$$A \begin{bmatrix} v_1 & v_2 & \dots & v_n \end{bmatrix} = \begin{bmatrix} v_1 & v_2 & \dots & v_n \end{bmatrix} \begin{bmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{bmatrix} \implies A V = V \Sigma$$

Multiplying both sides on the right by $V^{-1}$ gives $A = V \Sigma V^{-1}$.

- **Matrix Powers Made Simple**: Computing $A^k$ directly requires $k-1$ matrix multiplications. With EVD:
  $$A^k = (V \Sigma V^{-1})(V \Sigma V^{-1}) \dots (V \Sigma V^{-1}) = V \Sigma^k V^{-1}$$

Since $\Sigma$ is diagonal, $\Sigma^k = \operatorname{diag}(\lambda_1^k, \lambda_2^k, \dots, \lambda_n^k)$.

- **Symmetric Matrices Special Property (Spectral Theorem)**: If $A$ is a symmetric matrix ($A^T = A$), then:

1. All eigenvalues $\lambda_i$ are real numbers.
2. Eigenvectors corresponding to distinct eigenvalues are **orthogonal**.
3. $A$ can be orthogonally diagonalized as $A = V \Sigma V^T$, where $V^{-1} = V^T$.

---

## Mathematical Formula

### Matrix Diagonalization

$$A = V \Sigma V^{-1}$$

### Matrix Power Formula

$$A^k = V \Sigma^k V^{-1} = V \begin{bmatrix} \lambda_1^k & 0 & \dots & 0 \\ 0 & \lambda_2^k & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n^k \end{bmatrix} V^{-1}$$

### Matrix Inverse Formula via EVD

$$A^{-1} = V \Sigma^{-1} V^{-1} = V \begin{bmatrix} \lambda_1^{-1} & 0 & \dots & 0 \\ 0 & \lambda_2^{-1} & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n^{-1} \end{bmatrix} V^{-1}$$

---

## Step-by-Step Explanation

To diagonalize any square matrix $A$:

1. **Find Eigenvalues**: Solve the characteristic equation:
   $$\det(A - \lambda I) = 0$$

This produces an $n$-th degree characteristic polynomial whose roots are the eigenvalues $\lambda_1, \lambda_2, \dots, \lambda_n$. 2. **Find Eigenvectors**: For each eigenvalue $\lambda_i$, solve the homogeneous linear system:
$$(A - \lambda_i I)v_i = 0$$

Find the basis vectors for the null space $\operatorname{Nul}(A - \lambda_i I)$. 3. **Check Diagonalizability**: Ensure you have found $n$ total linearly independent eigenvectors. If the geometric multiplicity (number of independent eigenvectors) equals the algebraic multiplicity for all eigenvalues, $A$ is diagonalizable. 4. **Construct $V$, $\Sigma$, and $V^{-1}$**:

- Place eigenvectors as columns in $V = \begin{bmatrix} v_1 & v_2 & \dots & v_n \end{bmatrix}$.
- Place eigenvalues along the diagonal of $\Sigma$ in the matching column order.
- Calculate $V^{-1}$.

---

## Example 1: $2 \times 2$ Non-Symmetric Matrix

Perform Eigenvalue Decomposition on matrix $A$:

$$A = \begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix}$$

### Solution:

#### Step 1: Find Eigenvalues

Set up the characteristic equation $\det(A - \lambda I) = 0$:

$$\det\left( \begin{bmatrix} 4 & 2 \\ 1 & 3 \end{bmatrix} - \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \right) = 0$$

$$\begin{vmatrix} 4 - \lambda & 2 \\ 1 & 3 - \lambda \end{vmatrix} = 0$$

$$(4 - \lambda)(3 - \lambda) - (2)(1) = 0$$

$$12 - 4\lambda - 3\lambda + \lambda^2 - 2 = 0$$

$$\lambda^2 - 7\lambda + 10 = 0$$

Factor the quadratic equation:

$$(\lambda - 5)(\lambda - 2) = 0$$

Therefore, the eigenvalues are:

$$\lambda_1 = 5, \quad \lambda_2 = 2$$

#### Step 2: Find Eigenvectors

- **For $\lambda_1 = 5$**:
  Solve $(A - 5I)v_1 = 0$:
  $$\begin{bmatrix} 4 - 5 & 2 \\ 1 & 3 - 5 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies \begin{bmatrix} -1 & 2 \\ 1 & -2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

Row reduction yields:
$$-x + 2y = 0 \implies x = 2y$$

Choosing $y = 1$ gives $x = 2$:
$$v_1 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

- **For $\lambda_2 = 2$**:
  Solve $(A - 2I)v_2 = 0$:
  $$\begin{bmatrix} 4 - 2 & 2 \\ 1 & 3 - 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies \begin{bmatrix} 2 & 2 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

Row reduction yields:
$$x + y = 0 \implies x = -y$$

Choosing $y = 1$ gives $x = -1$:
$$v_2 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}$$

#### Step 3: Construct $V$ and $\Sigma$

$$V = \begin{bmatrix} v_1 & v_2 \end{bmatrix} = \begin{bmatrix} 2 & -1 \\ 1 & 1 \end{bmatrix}$$

$$\Sigma = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix} = \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix}$$

#### Step 4: Calculate $V^{-1}$

$$\det(V) = (2)(1) - (-1)(1) = 2 + 1 = 3$$

$$V^{-1} = \frac{1}{3} \begin{bmatrix} 1 & 1 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \\ -\frac{1}{3} & \frac{2}{3} \end{bmatrix}$$

#### Final EVD Decomposition:

$$A = V \Sigma V^{-1} = \begin{bmatrix} 2 & -1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 5 & 0 \\ 0 & 2 \end{bmatrix} \begin{bmatrix} \frac{1}{3} & \frac{1}{3} \\ -\frac{1}{3} & \frac{2}{3} \end{bmatrix}$$

---

## Example 2: $2 \times 2$ Symmetric Matrix

Perform Eigenvalue Decomposition on matrix $A$:

$$A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$$

### Solution:

#### Step 1: Find Eigenvalues

$$\det(A - \lambda I) = \begin{vmatrix} 2 - \lambda & 1 \\ 1 & 2 - \lambda \end{vmatrix} = 0$$

$$(2 - \lambda)^2 - (1)(1) = 0$$

$$(4 - 4\lambda + \lambda^2) - 1 = 0 \implies \lambda^2 - 4\lambda + 3 = 0$$

Factor the quadratic:

$$(\lambda - 3)(\lambda - 1) = 0 \implies \lambda_1 = 3, \quad \lambda_2 = 1$$

#### Step 2: Find Eigenvectors

- **For $\lambda_1 = 3$**:
  $$(A - 3I)v_1 = 0 \implies \begin{bmatrix} -1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$-x + y = 0 \implies x = y \implies v_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$$

- **For $\lambda_2 = 1$**:
  $$(A - 1I)v_2 = 0 \implies \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

$$x + y = 0 \implies x = -y \implies v_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}$$

Notice that $v_1 \cdot v_2 = (1)(1) + (1)(-1) = 0$. The eigenvectors are orthogonal because $A$ is symmetric!

#### Step 3: Construct Decomposition Components

$$V = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}, \quad \Sigma = \begin{bmatrix} 3 & 0 \\ 0 & 1 \end{bmatrix}$$

Find $V^{-1}$:

$$\det(V) = (1)(-1) - (1)(1) = -2$$

$$V^{-1} = \frac{1}{-2} \begin{bmatrix} -1 & -1 \\ -1 & 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{bmatrix}$$

#### Final Answer:

$$A = V \Sigma V^{-1} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} 3 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{bmatrix}$$

---

## Example 3: $3 \times 3$ Matrix with Block Structure

Perform Eigenvalue Decomposition on:

$$A = \begin{bmatrix} 6 & 2 & 0 \\ 2 & 3 & 0 \\ 0 & 0 & 4 \end{bmatrix}$$

### Solution:

#### Step 1: Find Eigenvalues

$$\det(A - \lambda I) = \begin{vmatrix} 6 - \lambda & 2 & 0 \\ 2 & 3 - \lambda & 0 \\ 0 & 0 & 4 - \lambda \end{vmatrix} = 0$$

Expand along the third row:

$$(4 - \lambda) \begin{vmatrix} 6 - \lambda & 2 \\ 2 & 3 - \lambda \end{vmatrix} = 0$$

Evaluate the $2 \times 2$ determinant:

$$(6 - \lambda)(3 - \lambda) - 4 = 18 - 9\lambda + \lambda^2 - 4 = \lambda^2 - 9\lambda + 14 = (\lambda - 7)(\lambda - 2)$$

Entire characteristic equation:

$$(4 - \lambda)(\lambda - 7)(\lambda - 2) = 0$$

The eigenvalues are:

$$\lambda_1 = 7, \quad \lambda_2 = 2, \quad \lambda_3 = 4$$

#### Step 2: Compute Eigenvectors

- **For $\lambda_1 = 7$**:
  $$(A - 7I)v_1 = 0 \implies \begin{bmatrix} -1 & 2 & 0 \\ 2 & -4 & 0 \\ 0 & 0 & -3 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

From the 3rd row: $-3z = 0 \implies z = 0$.
From the 1st row: $-x + 2y = 0 \implies x = 2y$.
Setting $y = 1 \implies x = 2$.
$$v_1 = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}$$

- **For $\lambda_2 = 2$**:
  $$(A - 2I)v_2 = 0 \implies \begin{bmatrix} 4 & 2 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

From the 3rd row: $2z = 0 \implies z = 0$.
From the 1st row: $4x + 2y = 0 \implies y = -2x$.
Setting $x = -1 \implies y = 2$.
$$v_2 = \begin{bmatrix} -1 \\ 2 \\ 0 \end{bmatrix}$$

- **For $\lambda_3 = 4$**:
  $$(A - 4I)v_3 = 0 \implies \begin{bmatrix} 2 & 2 & 0 \\ 2 & -1 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

Equations $2x + 2y = 0$ and $2x - y = 0$ force $x = 0$ and $y = 0$.
Variable $z$ is free! Setting $z = 1$:
$$v_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$$

#### Step 3: Construct $V$ and $\Sigma$

$$V = \begin{bmatrix} 2 & -1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 1 \end{bmatrix}, \quad \Sigma = \begin{bmatrix} 7 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{bmatrix}$$

#### Step 4: Compute $V^{-1}$

Notice $V$ is a block matrix with a $2 \times 2$ block and a scalar $1$:

$$V_{top-left} = \begin{bmatrix} 2 & -1 \\ 1 & 2 \end{bmatrix}$$

$$\det(V_{top-left}) = (2)(2) - (-1)(1) = 4 + 1 = 5$$

$$(V_{top-left})^{-1} = \frac{1}{5} \begin{bmatrix} 2 & 1 \\ -1 & 2 \end{bmatrix} = \begin{bmatrix} \frac{2}{5} & \frac{1}{5} \\ -\frac{1}{5} & \frac{2}{5} \end{bmatrix}$$

Hence:

$$V^{-1} = \begin{bmatrix} \frac{2}{5} & \frac{1}{5} & 0 \\ -\frac{1}{5} & \frac{2}{5} & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

#### Final Decomposition:

$$A = V \Sigma V^{-1} = \begin{bmatrix} 2 & -1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 7 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{bmatrix} \begin{bmatrix} \frac{2}{5} & \frac{1}{5} & 0 \\ -\frac{1}{5} & \frac{2}{5} & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

---

## Applications

- **Markov Chains & PageRank**: High powers of transition matrices $P^k$ evaluate steady-state probabilities using $P^k = V \Sigma^k V^{-1}$.
- **Vibration Analysis**: Eigenvalues represent natural frequencies of mechanical structures; eigenvectors represent mode shapes.
- **Differential Equations**: Systems of linear differential equations $\frac{d\vec{x}}{dt} = A\vec{x}$ are solved using matrix exponentials $e^{At} = V e^{\Sigma t} V^{-1}$.

---

## Common Mistakes

- **Mismatched Column Order**: Placing eigenvalue $\lambda_1$ in the second column of $\Sigma$ while placing its eigenvector $v_1$ in the first column of $V$. **Columns of $V$ and $\Sigma$ must correspond exactly**.
- **Assuming Non-Square Matrices can undergo EVD**: EVD is defined **only** for square matrices ($n \times n$).
- **Confusing Defective Matrices**: Assuming every matrix is diagonalizable. Matrices that lack a full set of linearly independent eigenvectors (defective matrices) cannot undergo full EVD.

---

## Exam Notes

- **Check Determinant and Trace**:
- $\det(A) = \prod_{i=1}^n \lambda_i$ (Product of eigenvalues)
- $\operatorname{Tr}(A) = \sum_{i=1}^n \lambda_i$ (Sum of diagonal elements)
- Use these two identities as a 10-second check on calculated eigenvalues!

- **Power Trick**: If an exam question asks for $A^{100}$, factor $A = V \Sigma V^{-1}$, compute $\Sigma^{100}$, and multiply back out.

---

---

# Singular Value Decomposition (SVD)

```
Singular Value Decomposition Architecture

          A  (General m x n Matrix)
          │
          ▼
      U Σ Vᵀ
      │ │  │
      │ │  └── Right Singular Vectors (n x n Orthogonal Matrix)
      │ └───── Singular Values Diagonal Matrix (m x n)
      └─────── Left Singular Vectors (m x m Orthogonal Matrix)

```

## Definition

**Singular Value Decomposition (SVD)** is the ultimate matrix factorization theorem in linear algebra. Unlike Eigenvalue Decomposition—which requires square matrices and a full set of independent eigenvectors—SVD applies to **any** real $m \times n$ matrix $A$.

The SVD factors matrix $A$ into three fundamental matrices:

$$A = U \Sigma V^T$$

where:

- $U$ is an $m \times m$ **orthogonal matrix** ($U^T U = I_m$). Columns $u_i$ are called **left singular vectors**.
- $\Sigma$ is an $m \times n$ **rectangular diagonal matrix** containing non-negative real numbers $\sigma_i$ (singular values) in descending order ($\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$).
- $V$ is an $n \times n$ **orthogonal matrix** ($V^T V = I_n$). Columns $v_i$ are called **right singular vectors**.
- $V^T$ is the transpose of $V$.

---

## Key Points

### How SVD Overcomes Limitations of EVD

| Feature                     | Eigenvalue Decomposition (EVD)         | Singular Value Decomposition (SVD)                 |
| --------------------------- | -------------------------------------- | -------------------------------------------------- |
| **Applicable Matrix Shape** | Square ($n \times n$) only             | Any rectangular shape ($m \times n$)               |
| **Existence Guarantee**     | Only for non-defective matrices        | Always exists for **every** matrix                 |
| **Orthogonality of Basis**  | Orthogonal only if matrix is symmetric | Always uses orthogonal bases ($U, V$)              |
| **Values along Diagonal**   | Can be complex or negative numbers     | Always non-negative real values ($\sigma_i \ge 0$) |

### Fundamental Theoretical Relationships

1. **Right Singular Vectors $V$**:
   Multiply $A^T A$:
   $$A^T A = (U \Sigma V^T)^T (U \Sigma V^T) = V \Sigma^T U^T U \Sigma V^T$$

Since $U^T U = I$:
$$A^T A = V (\Sigma^T \Sigma) V^T$$

Thus, $V$ contains the eigenvectors of the symmetric matrix $A^T A$, and singular values squared $\sigma_i^2$ are the eigenvalues of $A^T A$. 2. **Left Singular Vectors $U$**:
Multiply $A A^T$:
$$A A^T = (U \Sigma V^T)(U \Sigma V^T)^T = U \Sigma V^T V \Sigma^T U^T = U (\Sigma \Sigma^T) U^T$$

Thus, $U$ contains the eigenvectors of the symmetric matrix $A A^T$. 3. **Connecting Formula**:
For non-zero singular value $\sigma_i$:
$$u_i = \frac{1}{\sigma_i} A v_i \quad \text{or} \quad A v_i = \sigma_i u_i$$

---

## Mathematical Formula

### Singular Value Decomposition Definition

$$A = U \Sigma V^T$$

### Structural Dimensions

$$A_{(m \times n)} = U_{(m \times m)} \, \Sigma_{(m \times n)} \, V^T_{(n \times n)}$$

### Singular Value Relationship

$$\sigma_i = \sqrt{\lambda_i(A^T A)} = \sqrt{\lambda_i(A A^T)}$$

---

## Step-by-Step Explanation

### Algorithmic Pipeline to Compute SVD

1. **Form $A^T A$**: Multiply $A^T$ by $A$ to obtain an $n \times n$ symmetric matrix.
2. **Eigen-analysis of $A^T A$**:

- Solve $\det(A^T A - \lambda I) = 0$ for eigenvalues $\lambda_i$.
- Arrange non-negative eigenvalues in descending order: $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_r > 0$.
- Compute singular values $\sigma_i = \sqrt{\lambda_i}$.

3. **Construct $\Sigma$**: Place singular values $\sigma_1, \sigma_2, \dots$ along the main diagonal of an $m \times n$ zero matrix.
4. **Construct $V$**:

- For each $\lambda_i$, solve $(A^T A - \lambda_i I)v_i = 0$.
- **Normalize** each eigenvector so $\Vert{}v_i\Vert{}_2 = 1$.
- Form $V = \begin{bmatrix} v_1 & v_2 & \dots & v_n \end{bmatrix}$.

5. **Construct $U$**:

- For non-zero $\sigma_i$, compute left singular vectors using $u_i = \frac{1}{\sigma_i} A v_i$.
- If $m > r$, find remaining orthogonal vectors for $U$ using Gram-Schmidt orthogonalization or solving the null space $\operatorname{Nul}(A^T)$.

6. **Assemble**: Write $A = U \Sigma V^T$.

---

## Example 1: $2 \times 2$ Symmetric Matrix SVD

Compute the Singular Value Decomposition of:

$$A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$$

### Solution:

#### Step 1: Compute $A^T A$

Since $A$ is symmetric, $A^T = A$:

$$A^T A = A^2 = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} 5 & 4 \\ 4 & 5 \end{bmatrix}$$

#### Step 2: Find Eigenvalues & Singular Values of $A^T A$

$$\det(A^T A - \lambda I) = \begin{vmatrix} 5 - \lambda & 4 \\ 4 & 5 - \lambda \end{vmatrix} = 0$$

$$(5 - \lambda)^2 - 16 = 0 \implies (5 - \lambda)^2 = 16 \implies 5 - \lambda = \pm 4$$

$$\lambda_1 = 9, \quad \lambda_2 = 1$$

Taking square roots yields the singular values:

$$\sigma_1 = \sqrt{9} = 3, \quad \sigma_2 = \sqrt{1} = 1$$

Therefore:

$$\Sigma = \begin{bmatrix} 3 & 0 \\ 0 & 1 \end{bmatrix}$$

#### Step 3: Find Right Singular Vectors (Columns of $V$)

- **For $\lambda_1 = 9$**:
  $$(A^T A - 9I)x = 0 \implies \begin{bmatrix} -4 & 4 \\ 4 & -4 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies x = y$$

Unnormalized eigenvector: $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$. Normalize to unit length:
$$v_1 = \frac{1}{\sqrt{1^2 + 1^2}} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix}$$

- **For $\lambda_2 = 1$**:
  $$(A^T A - 1I)x = 0 \implies \begin{bmatrix} 4 & 4 \\ 4 & 4 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies x = -y$$

Unnormalized eigenvector: $\begin{bmatrix} 1 \\ -1 \end{bmatrix}$. Normalize to unit length:
$$v_2 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{bmatrix}$$

Matrix $V$:

$$V = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix}$$

#### Step 4: Compute Left Singular Vectors (Columns of $U$)

Use $u_i = \frac{1}{\sigma_i} A v_i$:

- **For $u_1$**:
  $$u_1 = \frac{1}{3} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} = \frac{1}{3} \begin{bmatrix} \frac{3}{\sqrt{2}} \\ \frac{3}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix}$$

- **For $u_2$**:
  $$u_2 = \frac{1}{1} \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{bmatrix} = 1 \cdot \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{bmatrix}$$

Matrix $U$:

$$U = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix}$$

#### Final SVD Result:

$$A = U \Sigma V^T = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 3 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix}$$

---

## Example 2: $2 \times 2$ Rank-Defective Matrix

Compute SVD for:

$$A = \begin{bmatrix} 3 & 0 \\ 4 & 0 \end{bmatrix}$$

### Solution:

#### Step 1: Compute $A^T A$

$$A^T A = \begin{bmatrix} 3 & 4 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 3 & 0 \\ 4 & 0 \end{bmatrix} = \begin{bmatrix} 25 & 0 \\ 0 & 0 \end{bmatrix}$$

#### Step 2: Eigenvalues & Singular Values

Since $A^T A$ is diagonal, its eigenvalues are obvious:

$$\lambda_1 = 25, \quad \lambda_2 = 0$$

Singular values:

$$\sigma_1 = \sqrt{25} = 5, \quad \sigma_2 = 0$$

$$\Sigma = \begin{bmatrix} 5 & 0 \\ 0 & 0 \end{bmatrix}$$

#### Step 3: Compute Right Singular Vectors ($V$)

The normalized eigenvectors of diagonal matrix $A^T A$ are canonical unit vectors:

$$v_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad v_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix} \implies V = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I_2$$

#### Step 4: Compute Left Singular Vectors ($U$)

For non-zero singular value $\sigma_1 = 5$:

$$u_1 = \frac{1}{\sigma_1} A v_1 = \frac{1}{5} \begin{bmatrix} 3 & 0 \\ 4 & 0 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \frac{1}{5} \begin{bmatrix} 3 \\ 4 \end{bmatrix} = \begin{bmatrix} \frac{3}{5} \\ \frac{4}{5} \end{bmatrix}$$

Since $\sigma_2 = 0$, $u_2$ cannot be found via $A v_2 / \sigma_2$. Instead, choose $u_2 = \begin{bmatrix} x \\ y \end{bmatrix}$ orthogonal to $u_1$ ($u_1^T u_2 = 0$) with unit length $\|u_2\| = 1$:

$$\frac{3}{5} x + \frac{4}{5} y = 0 \implies 3x + 4y = 0 \implies u_2 = \begin{bmatrix} -\frac{4}{5} \\ \frac{3}{5} \end{bmatrix}$$

Matrix $U$:

$$U = \begin{bmatrix} \frac{3}{5} & -\frac{4}{5} \\ \frac{4}{5} & \frac{3}{5} \end{bmatrix}$$

#### Final SVD Result:

$$A = U \Sigma V^T = \begin{bmatrix} \frac{3}{5} & -\frac{4}{5} \\ \frac{4}{5} & \frac{3}{5} \end{bmatrix} \begin{bmatrix} 5 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

---

## Example 3: $3 \times 3$ Symmetric Matrix SVD

Compute SVD for matrix $A$:

$$A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{bmatrix}$$

### Solution:

#### Step 1: Compute $A^T A$

$$A^T A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 0 & 2 \\ 0 & 4 & 0 \\ 2 & 0 & 2 \end{bmatrix}$$

#### Step 2: Compute Eigenvalues of $A^T A$

$$\det(A^T A - \lambda I) = \begin{vmatrix} 2 - \lambda & 0 & 2 \\ 0 & 4 - \lambda & 0 \\ 2 & 0 & 2 - \lambda \end{vmatrix} = 0$$

Expand along 2nd row:

$$(4 - \lambda) \begin{vmatrix} 2 - \lambda & 2 \\ 2 & 2 - \lambda \end{vmatrix} = (4 - \lambda)[ (2 - \lambda)^2 - 4 ] = 0$$

$$(2 - \lambda)^2 = 4 \implies 2 - \lambda = \pm 2 \implies \lambda = 4 \text{ or } \lambda = 0$$

Eigenvalues of $A^T A$ ordered descendingly:

$$\lambda_1 = 4, \quad \lambda_2 = 4, \quad \lambda_3 = 0$$

Singular values:

$$\sigma_1 = \sqrt{4} = 2, \quad \sigma_2 = \sqrt{4} = 2, \quad \sigma_3 = \sqrt{0} = 0$$

$$\Sigma = \begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix}$$

#### Step 3: Compute Eigenvectors for $V$

- **For $\lambda = 4$ (multiplicity 2)**:
  $$(A^T A - 4I)x = 0 \implies \begin{bmatrix} -2 & 0 & 2 \\ 0 & 0 & 0 \\ 2 & 0 & -2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \implies x_1 = x_3$$

$x_2$ is completely free. We select two orthonormal eigenvectors spanning this eigenspace:
$$v_1 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ 0 \\ \frac{1}{\sqrt{2}} \end{bmatrix}, \quad v_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$$

- **For $\lambda_3 = 0$**:
  $$(A^T A - 0I)x = 0 \implies \begin{bmatrix} 2 & 0 & 2 \\ 0 & 4 & 0 \\ 2 & 0 & 2 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix} \implies x_2 = 0 \text{ and } x_1 = -x_3$$

Normalizing gives:
$$v_3 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ 0 \\ -\frac{1}{\sqrt{2}} \end{bmatrix}$$

$$V = \begin{bmatrix} \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}} \end{bmatrix}$$

#### Step 4: Compute Left Singular Vectors ($U$)

- **For $u_1$**:
  $$u_1 = \frac{1}{\sigma_1} A v_1 = \frac{1}{2} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} \\ 0 \\ \frac{1}{\sqrt{2}} \end{bmatrix} = \frac{1}{2} \begin{bmatrix} \frac{2}{\sqrt{2}} \\ 0 \\ \frac{2}{\sqrt{2}} \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ 0 \\ \frac{1}{\sqrt{2}} \end{bmatrix}$$

- **For $u_2$**:
  $$u_2 = \frac{1}{\sigma_2} A v_2 = \frac{1}{2} \begin{bmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{bmatrix} \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} = \frac{1}{2} \begin{bmatrix} 0 \\ 2 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}$$

- **For $u_3$**: Choose unit vector orthogonal to both $u_1$ and $u_2$:
  $$u_3 = \begin{bmatrix} -\frac{1}{\sqrt{2}} \\ 0 \\ \frac{1}{\sqrt{2}} \end{bmatrix}$$

Matrix $U$:

$$U = \begin{bmatrix} \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \end{bmatrix}$$

#### Final SVD Output:

$$A = \begin{bmatrix} \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & 0 & \frac{1}{\sqrt{2}} \\ 0 & 1 & 0 \\ \frac{1}{\sqrt{2}} & 0 & -\frac{1}{\sqrt{2}} \end{bmatrix}$$

---

## Example 4: Rectangular $2 \times 3$ Matrix SVD

Find the SVD of non-square matrix $A$:

$$A = \begin{bmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{bmatrix}$$

### Solution:

#### Step 1: Compute $A A^T$ ($2 \times 2$ Matrix)

Since $A$ is $2 \times 3$, computing $A A^T$ gives a smaller $2 \times 2$ matrix to find $U$ directly:

$$A A^T = \begin{bmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{bmatrix} \begin{bmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{bmatrix} = \begin{bmatrix} 3^2+2^2+2^2 & (3)(2)+(2)(3)+(2)(-2) \\ (2)(3)+(3)(2)+(-2)(2) & 2^2+3^2+(-2)^2 \end{bmatrix}$$

$$A A^T = \begin{bmatrix} 17 & 8 \\ 8 & 17 \end{bmatrix}$$

#### Step 2: Eigenvalues & Singular Values of $A A^T$

$$\det(A A^T - \lambda I) = \begin{vmatrix} 17 - \lambda & 8 \\ 8 & 17 - \lambda \end{vmatrix} = 0 \implies (17 - \lambda)^2 - 64 = 0$$

$$(17 - \lambda)^2 = 64 \implies 17 - \lambda = \pm 8$$

$$\lambda_1 = 25, \quad \lambda_2 = 9$$

Singular values:

$$\sigma_1 = \sqrt{25} = 5, \quad \sigma_2 = \sqrt{9} = 3$$

Shape of $A$ is $2 \times 3$, so $\Sigma$ is $2 \times 3$:

$$\Sigma = \begin{bmatrix} 5 & 0 & 0 \\ 0 & 3 & 0 \end{bmatrix}$$

#### Step 3: Compute $U$ (Eigenvectors of $A A^T$)

- **For $\lambda_1 = 25$**:
  $$(A A^T - 25I)u_1 = 0 \implies \begin{bmatrix} -8 & 8 \\ 8 & -8 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies x = y$$

Normalizing yields:
$$u_1 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix}$$

- **For $\lambda_2 = 9$**:
  $$(A A^T - 9I)u_2 = 0 \implies \begin{bmatrix} 8 & 8 \\ 8 & 8 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \implies x = -y$$

Normalizing yields:
$$u_2 = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{bmatrix}$$

Matrix $U$:

$$U = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix}$$

#### Step 4: Compute Right Singular Vectors ($V$)

Use $v_i = \frac{1}{\sigma_i} A^T u_i$:

- **For $v_1$**:
  $$A^T u_1 = \begin{bmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} 5 \\ 5 \\ 0 \end{bmatrix}$$

Dividing by $\sigma_1 = 5$:
$$v_1 = \frac{1}{5 \sqrt{2}} \begin{bmatrix} 5 \\ 5 \\ 0 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \\ 0 \end{bmatrix}$$

- **For $v_2$**:
  $$A^T u_2 = \begin{bmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} \\ -\frac{1}{\sqrt{2}} \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 \\ -1 \\ 4 \end{bmatrix}$$

Dividing by $\sigma_2 = 3$:
$$v_2 = \frac{1}{3\sqrt{2}} \begin{bmatrix} 1 \\ -1 \\ 4 \end{bmatrix} = \begin{bmatrix} \frac{1}{\sqrt{18}} \\ -\frac{1}{\sqrt{18}} \\ \frac{4}{\sqrt{18}} \end{bmatrix}$$

- **For $v_3$**: Choose a unit vector orthogonal to both $v_1$ and $v_2$ using cross product $v_3 = v_1 \times v_2$:
  $$v_3 = \begin{bmatrix} \frac{2}{3} \\ -\frac{2}{3} \\ -\frac{1}{3} \end{bmatrix}$$

Matrix $V$:

$$V = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{18}} & \frac{2}{3} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{18}} & -\frac{2}{3} \\ 0 & \frac{4}{\sqrt{18}} & -\frac{1}{3} \end{bmatrix}$$

#### Final SVD Representation:

$$A = U \Sigma V^T = \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}} \end{bmatrix} \begin{bmatrix} 5 & 0 & 0 \\ 0 & 3 & 0 \end{bmatrix} \begin{bmatrix} \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\ \frac{1}{\sqrt{18}} & -\frac{1}{\sqrt{18}} & \frac{4}{\sqrt{18}} \\ \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3} \end{bmatrix}$$

---

## Applications

- **Image Compression**: Storing a high-resolution $m \times n$ image requires $m \times n$ values. Truncating its SVD to the top $k$ singular values ($A_k = \sum_{i=1}^k \sigma_i u_i v_i^T$) stores only $k(m + n + 1)$ values, compressing file size significantly while retaining visual fidelity.
- **Principal Component Analysis (PCA)**: SVD is the computational engine behind PCA for dimensionality reduction in data science.
- **Pseudoinverse (Moore-Penrose Inverse)**: For non-square or singular matrices, $A^+ = V \Sigma^+ U^T$ calculates least-squares solutions to linear systems.

---

## Common Mistakes

- **Forgetting Transpose on $V$**: Writing $A = U \Sigma V$ instead of $A = U \Sigma V^T$.
- **Unnormalized Singular Vectors**: Forgetting to normalize eigenvectors of $A^T A$ or $A A^T$ to unit length ($1$). Left and right singular matrices $U$ and $V$ **must be orthogonal matrices**.
- **Incorrect $\Sigma$ Dimensions**: For an $m \times n$ matrix $A$, making $\Sigma$ an $r \times r$ square matrix instead of matching $m \times n$.

---

## Exam Notes

- **Rank Formula**: The rank of $A$ equals the exact number of non-zero singular values ($\operatorname{rank}(A) = r$).
- **Matrix Norms**:
- Spectral Norm: $\Vert{}A\Vert{}_2 = \sigma_1$ (Largest singular value).
- Frobenius Norm: $\Vert{}A\Vert{}_F = \sqrt{\sigma_1^2 + \sigma_2^2 + \dots + \sigma_r^2}$.

- **Shortcut trick for $m < n$**: If $A$ is short and wide (e.g., $2 \times 3$), compute $A A^T$ ($2 \times 2$) to easily find singular values and $U$. Then calculate $v_i = \frac{1}{\sigma_i} A^T u_i$.

---

---

# Complete Revision Sheet

## Essential Definitions

- **Matrix Inverse**: $A^{-1}$ satisfies $A A^{-1} = A^{-1} A = I$. Exists iff $\det(A) \neq 0$.
- **Diagonal Matrix**: Square matrix where off-diagonal elements are zero ($\Sigma_{ij}=0, \forall i \neq j$).
- **Eigenvalue Decomposition (EVD)**: $A = V \Sigma V^{-1}$. Factorization using eigenvalues and eigenvectors (Requires square matrix with $n$ independent eigenvectors).
- **Singular Value Decomposition (SVD)**: $A = U \Sigma V^T$. Universal factorization using orthogonal left/right singular vectors and non-negative singular values (Applies to any $m \times n$ matrix).
- **Singular Value ($\sigma_i$)**: Square root of eigenvalues of $A^T A$, i.e., $\sigma_i = \sqrt{\lambda_i(A^T A)}$.

---

## Essential Formulas Summary Table

| Operation                       | Formula                                                                                                              | Notes / Conditions                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **$2 \times 2$ Inverse**        | $\begin{bmatrix} a & b \\ c & d \end{bmatrix}^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$ | Requires $ad - bc \neq 0$                                         |
| **Inverse Product**             | $(ABC)^{-1} = C^{-1} B^{-1} A^{-1}$                                                                                  | Reverses matrix order                                             |
| **Transpose Product**           | $(ABC)^T = C^T B^T A^T$                                                                                              | Reverses matrix order                                             |
| **EVD**                         | $A = V \Sigma V^{-1}$                                                                                                | $A \in \mathbb{R}^{n \times n}$                                   |
| **Matrix Power via EVD**        | $A^k = V \Sigma^k V^{-1}$                                                                                            | $\Sigma^k = \operatorname{diag}(\lambda_1^k, \dots, \lambda_n^k)$ |
| **SVD**                         | $A = U \Sigma V^T$                                                                                                   | $A \in \mathbb{R}^{m \times n}$                                   |
| **Left Singular Vector**        | $u_i = \frac{1}{\sigma_i} A v_i$                                                                                     | For $\sigma_i > 0$                                                |
| **Moore-Penrose Pseudoinverse** | $A^+ = V \Sigma^+ U^T$                                                                                               | Inverts non-zero entries of $\Sigma$                              |

---

## Quick Revision Bullets

- $\det(A) = \prod_{i=1}^n \lambda_i$ and $\operatorname{Tr}(A) = \sum_{i=1}^n \lambda_i$.
- Symmetric matrices ($A = A^T$) have real eigenvalues and orthogonal eigenvectors ($A = V \Sigma V^T$).
- Columns of $U$ in SVD are orthonormal eigenvectors of $A A^T$.
- Columns of $V$ in SVD are orthonormal eigenvectors of $A^T A$.
- $\operatorname{rank}(A) =$ Number of non-zero singular values.
- If $U$ is orthogonal, $U^{-1} = U^T$ and $U^T U = I$.

---

## Frequently Confused Concepts

### EVD vs. SVD

- **EVD** uses the same basis $V$ on both sides ($V$ and $V^{-1}$). Vectors are generally not orthogonal unless $A$ is symmetric.
- **SVD** uses two distinct orthogonal bases ($U$ and $V$). It works for any matrix shape.

### Eigenvalues vs. Singular Values

- Eigenvalues $\lambda_i$ can be negative, positive, zero, or complex numbers.
- Singular values $\sigma_i$ are **always real and non-negative** ($\sigma_i \ge 0$).

---

## Common Exam Questions & Solutions

1. **How to check if a $3 \times 3$ matrix is diagonalizable?**

- _Answer_: Calculate all eigenvalues. If you obtain 3 distinct eigenvalues, $A$ is guaranteed to be diagonalizable. If eigenvalues repeat, compute the dimension of the null space $\operatorname{Nul}(A - \lambda I)$ for the repeated eigenvalues. If geometric multiplicity equals algebraic multiplicity for all eigenvalues, $A$ is diagonalizable.

2. **Given $A = U \Sigma V^T$, what is $A^T A$?**

- _Answer_: $A^T A = (U \Sigma V^T)^T (U \Sigma V^T) = V \Sigma^T U^T U \Sigma V^T = V (\Sigma^T \Sigma) V^T$. This is the Eigenvalue Decomposition of $A^T A$.

3. **How do you quickly compute $A^{10}$ if $A = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$?**

- _Answer_: Do not multiply $A$ manually 10 times! Use EVD: $A = V \Sigma V^{-1}$ where $\Sigma = \operatorname{diag}(3, 1)$. Then $A^{10} = V \begin{bmatrix} 3^{10} & 0 \\ 0 & 1^{10} \end{bmatrix} V^{-1}$.
