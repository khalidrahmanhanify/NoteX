---
title: Eigenvalues, Eigenvectors, Characteristic Equation, and Eigen Decomposition in Linear Algebra
description: Understanding eigenvalues and eigenvectors, their relationship with matrix transformations, characteristic equations, finding eigenvalues and eigenvectors, special cases of matrices, and their applications in data compression, machine learning, and dimensionality reduction. Covers vector norms, Frobenius norm, determinants, and how these concepts are used in eigen decomposition.
lecture: Lecture 12
semester: semester-3
subject: linear-algebra
date: 2026-06-23
order: 5
---

# Vector Norms, Frobenius Norm, and Determinants

# Part 1: Vector Norms + Frobenius Norm + Determinants

---

# Vector Norms

## Definition

A **norm** is a mathematical function used to measure the size, length, or magnitude of a vector or matrix.

The norm of a vector is represented as:

$$
||x||
$$

A norm gives a single numerical value that represents how large a vector is.

Norms are widely used in:

- Machine Learning
- Data Science
- Optimization
- Computer Vision
- Numerical Computing

Common types of norms:

1. L1 Norm (Manhattan Norm)
2. L2 Norm (Euclidean Norm)
3. Frobenius Norm (Matrix Norm)

---

# Key Points

## 1. L1 Norm (Manhattan Norm)

The **L1 norm** calculates the sum of the absolute values of all vector elements.

Formula:

$$
||x||_1 = |x_1|+|x_2|+...+|x_n|
$$

It is called the **Manhattan norm** because it measures distance like moving through city blocks.

---

## Example

Given:

$$
X=
\begin{bmatrix}
-1 \\
4 \\
2
\end{bmatrix}
$$

Find the L1 norm.

Solution:

$$
||X||_1 = |-1|+|4|+|2|
$$

$$
=1+4+2
$$

$$
=7
$$

Therefore:

$$
\boxed{||X||_1=7}
$$

---

# 2. L2 Norm (Euclidean Norm)

## Definition

The **L2 norm** measures the shortest distance between a vector and the origin.

It is the normal length of a vector in geometry.

Formula:

$$
||x||_2=
\sqrt{x_1^2+x_2^2+...+x_n^2}
$$

The L2 norm is the most commonly used norm in mathematics and machine learning.

---

## Example

Given:

$$
X=
\begin{bmatrix}
-1 \\
4 \\
2
\end{bmatrix}
$$

Calculate the L2 norm.

Solution:

$$
||X||_2=
\sqrt{(-1)^2+4^2+2^2}
$$

$$
=\sqrt{1+16+4}
$$

$$
=\sqrt{21}
$$

Therefore:

$$
\boxed{||X||_2=\sqrt{21}}
$$

---

# Frobenius Norm

## Definition

The **Frobenius norm** is the extension of the L2 norm from vectors to matrices.

It measures the magnitude of a matrix by treating all matrix elements as vector elements.

Formula:

$$
||A||*F=
\sqrt{
\sum*{i=1}^{m}
\sum_{j=1}^{n}
|a_{ij}|^2
}
$$

In simple words:

1. Square every element of the matrix.
2. Add all squared values.
3. Take the square root.

---

# Key Points

For a vector:

$$
x=
\begin{bmatrix}
1\\
2
\end{bmatrix}
$$

The L2 norm is:

$$
||x||_2=\sqrt{1^2+2^2}
$$

For a matrix:

$$
A=
\begin{bmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{bmatrix}
$$

The Frobenius norm is:

$$
||A||*F=
\sqrt{
a*{11}^2+a_{12}^2+a_{21}^2+a_{22}^2
}
$$

The Frobenius norm is basically the matrix version of the L2 norm.

---

# Example / Code

Given:

$$
A=
\begin{bmatrix}
1&2&0\\
0&1&0\\
0&0&3
\end{bmatrix}
$$

Find the Frobenius norm.

Solution:

$$
||A||_F=
\sqrt{
1^2+2^2+0^2+0^2+1^2+0^2+0^2+0^2+3^2
}
$$

$$

\sqrt{1+4+1+9}


$$

$$

\sqrt{15}
$$

---

# Explanation

The Frobenius norm gives a measurement of the total magnitude of a matrix.

A larger Frobenius norm means:

- Larger matrix values
- Greater matrix magnitude

A smaller Frobenius norm means:

- Smaller values
- Less magnitude

Applications:

- Measuring error between matrices
- Machine learning optimization
- Matrix approximation
- Image processing

---

# Output

For:

$$

A=
\begin{bmatrix}
1&2&0\\
0&1&0\\
0&0&3
\end{bmatrix}


$$

The Frobenius norm is:

$$

\boxed{||A||\_F=\sqrt{15}}


$$

---

# Determinants

## Definition

The determinant is a scalar value calculated from a **square matrix**.

The determinant provides important information about:

- Matrix invertibility
- Linear independence
- Solutions of linear systems

The determinant is represented as:

$$

|A|


$$

---

# Key Points

## Properties of Determinants

If:

$$

|A|=0


$$

then:

1. The matrix is **singular**.
2. The inverse of the matrix does not exist.
3. The system does not have a unique solution.
4. The columns of the matrix are linearly dependent.

If:

$$

|A|\neq0


$$

then:

1. The matrix is invertible.
2. The inverse exists.
3. The columns are linearly independent.
4. The system has a unique solution.

---

# Determinant of a 2×2 Matrix

For:

$$

A=
\begin{bmatrix}
a&b\\
c&d
\end{bmatrix}


$$

The determinant is:

$$

|A|=ad-bc


$$

---

# Example

Given:

$$

A=
\begin{bmatrix}
2&3\\
4&5
\end{bmatrix}


$$

Calculate the determinant.

Solution:

$$

|A|=(2)(5)-(3)(4)


$$

$$

=10-12


$$

$$

=-2


$$

Therefore:

$$

\boxed{|A|=-2}


$$

---

# Determinant of a 3×3 Matrix

For:

$$

A=
\begin{bmatrix}
a*{11}&a*{12}&a*{13}\\
a*{21}&a*{22}&a*{23}\\
a*{31}&a*{32}&a\_{33}
\end{bmatrix}


$$

The determinant is calculated using expansion:

$$

|A|=
a*{11}
\begin{vmatrix}
a*{22}&a*{23}\\
a*{32}&a\_{33}
\end{vmatrix}

---

a*{12}
\begin{vmatrix}
a*{21}&a*{23}\\
a*{31}&a\_{33}
\end{vmatrix}

- a*{13}
  \begin{vmatrix}
  a*{21}&a*{22}\\
  a*{31}&a\_{32}
  \end{vmatrix}


$$

---

# Example

Find the determinant:

$$

A=
\begin{bmatrix}
2&-3&1\\
2&0&-1\\
1&4&5
\end{bmatrix}


$$

Using expansion:

$$
|A|= 2
\begin{vmatrix}
0&-1 \\
4&5
\end{vmatrix}
+
(-3)
\begin{vmatrix}
2&-1\\
1&5
\end{vmatrix}

- 1
\begin{vmatrix}
2&0\\
1&4
\end{vmatrix}
$$

First minor:

$$
\begin{vmatrix}
0&-1\\
4&5
\end{vmatrix}
=============

(0)(5)-(-1)(4)=4
$$

Second minor:

$$
\begin{vmatrix}
2&-1\\
1&5
\end{vmatrix}
=============

(2)(5)-(-1)(1)=11
$$

Third minor:

$$
\begin{vmatrix}
2&0\\
1&4
\end{vmatrix}
=============

(2)(4)-(0)(1)=8
$$

Therefore:

$$
|A|=2(4)+3(11)+1(8)
$$

$$
=8+33+8
$$

$$
\boxed{|A|=49}
$$

---

# Common Mistakes

- Using determinants for non-square matrices.
- Forgetting the negative sign in the second term of a 3×3 determinant.
- Confusing determinant with absolute value.
- Forgetting that zero determinant means no inverse exists.
- Mixing L1 and L2 norm formulas.
- Forgetting to square values before adding in Frobenius norm.

---

# Short Exam Notes

- Norm measures the magnitude of vectors or matrices.
- L1 norm:

$$
||x||_1=\sum |x_i|
$$

- L2 norm:

$$
||x||_2=\sqrt{\sum x_i^2}
$$

- Frobenius norm is the matrix version of L2 norm.
- Determinant is defined only for square matrices.
- If:

$$
|A|=0
$$

the matrix is singular.

- If:

$$
|A|\neq0
$$

the matrix is invertible.

- Determinants are used later for finding eigenvalues.

# Eigenvalues and Eigenvectors Concepts

# Part 2: Eigenvalues and Eigenvectors Concepts

---

## Definition

Eigenvalues and eigenvectors are special concepts in linear algebra that describe how a matrix transforms vectors.

When a matrix multiplies a vector, the vector usually changes both its **direction** and **magnitude**.

However, there are some special vectors that maintain their direction after transformation. These vectors are called **eigenvectors**.

The value that describes how much the eigenvector is scaled is called the **eigenvalue**.

The relationship between a matrix, eigenvector, and eigenvalue is:

$$
Av=\lambda v
$$

Where:

- (A) = square matrix
- (v) = eigenvector
- (\lambda) = eigenvalue
- (Av) = transformed vector

---

# Key Points

## 1. Understanding Eigenvectors

An **eigenvector** is a non-zero vector that does not change its direction when multiplied by a matrix.

The matrix only changes the size of the vector.

Mathematically:

$$
Av=\lambda v
$$

means:

- The output of the matrix multiplication is still the same vector direction.
- The vector is only multiplied by a scalar value.
- That scalar value is the eigenvalue.

---

## Example / Code

Given matrix:

$$
A=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
$$

Consider the vector:

$$
v=
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

Multiply matrix (A) by vector (v):

$$
Av=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

Calculate each element:

$$
Av=
\begin{bmatrix}
2(1)+1(1)\\
1(1)+2(1)
\end{bmatrix}
$$

$$
Av=
\begin{bmatrix}
3\\
3
\end{bmatrix}
$$

Rewrite the result:

$$
Av=
3
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

Therefore:

$$
Av=3v
$$

The vector:

$$
v=
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

is an eigenvector.

The eigenvalue is:

$$
\lambda=3
$$

---

# Explanation

Normally, matrix transformations can:

- Rotate vectors
- Stretch vectors
- Shrink vectors
- Change directions

Example:

A normal vector:

$$
x
$$

after transformation:

$$
Ax
$$

may point in a completely different direction.

But an eigenvector behaves differently:

$$
Av=\lambda v
$$

The direction remains unchanged.

Only the magnitude changes.

---

# 2. Understanding Eigenvalues

## Definition

An eigenvalue is a scalar value that represents the scaling factor of an eigenvector.

It tells us how much the vector grows, shrinks, or changes direction.

---

## Effect of Eigenvalues

### Positive Eigenvalue

If:

$$
\lambda>0
$$

The vector keeps the same direction.

Example:

$$
\lambda=2
$$

The vector becomes twice as large.

---

### Eigenvalue Between 0 and 1

If:

$$
0<\lambda<1
$$

The vector becomes smaller.

Example:

$$
\lambda=0.5
$$

The vector becomes half its original size.

---

### Negative Eigenvalue

If:

$$
\lambda<0
$$

The vector reverses its direction.

Example:

$$
\lambda=-1
$$

The vector points in the opposite direction.

---

### Zero Eigenvalue

If:

$$
\lambda=0
$$

Then:

$$
Av=0
$$

The vector is transformed into the zero vector.

---

# 3. Matrix Transformation Perspective

## Definition

Previously, matrices were studied from the vector perspective.

The expression:

$$
Ax
$$

means:

> A matrix transforms a vector.

Now we study matrices from another perspective:

> Given a matrix, what special vectors and numbers belong to it?

These special values are:

- Special vectors → Eigenvectors
- Special numbers → Eigenvalues

---

# Examples of Matrix Transformations

## Zero Transformation

$$
0x=0
$$

A zero matrix transforms every vector into the zero vector.

---

## Identity Transformation

The identity matrix is:

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

Multiplying by the identity matrix does not change the vector:

$$
Ix=x
$$

---

## Scaling Transformation

If:

$$
2I=
\begin{bmatrix}
2&0\\
0&2
\end{bmatrix}
$$

Then:

$$
2Ix=2x
$$

The vector becomes twice its size.

---

## Rotation Transformation

A rotation matrix can change the direction of vectors.

A rotation of (180^\circ) gives:

$$
R_{\pi}x=-x
$$

The vector points in the opposite direction.

---

# 4. Importance of Eigenvalues and Eigenvectors

Eigenvalues and eigenvectors are important in many fields:

## Machine Learning

Used for:

- Principal Component Analysis (PCA)
- Feature extraction
- Dimensionality reduction

---

## Data Science

Used for:

- Finding important patterns
- Reducing large datasets
- Data compression

---

## Computer Vision

Used for:

- Image processing
- Object recognition
- Feature detection

---

## Engineering and Physics

Used for:

- Stability analysis
- Signal processing
- System modeling

---

# Eigenvalues and Data Compression

## Definition

Eigenvalues help identify which eigenvectors contain the most important information in data.

Suppose a dataset has 100 dimensions.

After finding eigenvalues:

$$
(v_1,\lambda_1=0.5)
$$

$$
(v_2,\lambda_2=0.3)
$$

$$
(v_3,\lambda_3=0.2)
$$

$$
(v_4,\lambda_4=0.0001)
$$

The eigenvalues show the contribution of each eigenvector.

---

# Explanation

Large eigenvalues:

- Represent important information.
- Contribute more to the dataset.
- Should usually be kept.

Small eigenvalues:

- Represent less important information.
- Contribute very little.
- Can often be removed.

This idea is used in dimensionality reduction.

---

# Example 2: Another Eigenvector

Given:

$$
A=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
$$

Consider:

$$
v=
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

Calculate:

$$
Av=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

First row:

$$
2(-1)+1(1)=-1
$$

Second row:

$$
1(-1)+2(1)=1
$$

Therefore:

$$
Av=
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

This means:

$$
Av=1v
$$

Therefore:

$$
\lambda=1
$$

and:

$$
v=
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

is an eigenvector.

---

# Common Mistakes

- Thinking every vector is an eigenvector.
- Forgetting that eigenvectors must be non-zero vectors.
- Confusing eigenvalues with eigenvectors.
- Thinking eigenvalues are vectors.
- Forgetting that eigenvalues are scalar values.
- Assuming eigenvectors always keep the same length.
- Ignoring negative eigenvalues and direction reversal.

---

# Short Exam Notes (Very Concise Revision)

- Eigenvectors are special vectors whose direction does not change after transformation.
- Eigenvalues are scaling factors of eigenvectors.
- The main equation is:

$$
Av=\lambda v
$$

- Eigenvectors must be non-zero.
- Eigenvalues can be positive, negative, or zero.
- Large eigenvalues represent important data directions.
- Eigenvalues and eigenvectors are used in PCA and compression.
- The eigenvector equation is:

$$
(A-\lambda I)v=0
$$

- Eigenvalues are found first, then eigenvectors.

# Finding Eigenvalues Using Characteristic Equation

# Part 3: Finding Eigenvalues (Characteristic Equation)

---

## Definition

The first step in finding eigenvalues is to solve the **characteristic equation**.

For a square matrix (A), eigenvalues are values of (\lambda) that satisfy:

$$
Av=\lambda v
$$

To find the eigenvalues, we rearrange this equation:

$$
Av-\lambda v=0
$$

Because:

$$
v=Iv
$$

we can write:

$$
Av-\lambda Iv=0
$$

Taking (v) as a common factor:

$$
(A-\lambda I)v=0
$$

For this equation to have a non-zero solution:

$$
det(A-\lambda I)=0
$$

This equation is called the **characteristic equation** or **characteristic polynomial**.

The solutions of this equation are the **eigenvalues** of matrix (A).

---

# Key Points

## 1. Relationship Between Eigenvalues and Determinant

The characteristic equation is:

$$
det(A-\lambda I)=0
$$

Where:

- (A) = original matrix
- (I) = identity matrix
- (\lambda) = eigenvalue

The determinant creates a polynomial equation.

The roots of this polynomial are the eigenvalues.

---

# 2. Identity Matrix

The identity matrix is used because:

$$
Iv=v
$$

For a 2×2 matrix:

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

Multiplying by identity does not change the vector.

Therefore:

$$
\lambda Iv=\lambda v
$$

---

# 3. Characteristic Equation for a 2×2 Matrix

Given:

$$
A=
\begin{bmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{bmatrix}
$$

First calculate:

$$
A-\lambda I
$$

$$
A-\lambda I=
\begin{bmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{bmatrix}
-------------

\lambda
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

Therefore:

$$
A-\lambda I=
\begin{bmatrix}
a_{11}-\lambda&a_{12}\\
a_{21}&a_{22}-\lambda
\end{bmatrix}
$$

Now calculate the determinant:

$$
det(A-\lambda I)=0
$$

Using the determinant formula:

$$
(a_{11}-\lambda)(a_{22}-\lambda)-a_{12}a_{21}=0
$$

This equation is the characteristic polynomial.

---

# Example / Code

## Example 1: Finding Eigenvalues of a 2×2 Matrix

Given:

$$
A=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
$$

### Step 1: Create (A-\lambda I)

The identity matrix is:

$$
I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

Therefore:

$$
A-\lambda I=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
-------------

\begin{bmatrix}
\lambda&0\\
0&\lambda
\end{bmatrix}
$$

$$
A-\lambda I=
\begin{bmatrix}
2-\lambda&1\\
1&2-\lambda
\end{bmatrix}
$$

---

### Step 2: Calculate Determinant

$$
det(A-\lambda I)=0
$$

$$
\begin{vmatrix}
2-\lambda&1\\
1&2-\lambda
\end{vmatrix}
=0
$$

Using:

$$
|A|=ad-bc
$$

we get:

$$
(2-\lambda)(2-\lambda)-(1)(1)=0
$$

Expand:

$$
(2-\lambda)^2-1=0
$$

$$
(4-4\lambda+\lambda^2)-1=0
$$

Simplify:

$$
\lambda^2-4\lambda+3=0
$$

Factor:

$$
(\lambda-3)(\lambda-1)=0
$$

---

### Step 3: Find Eigenvalues

Set each factor equal to zero:

$$
\lambda-3=0
$$

$$
\lambda=3
$$

and:

$$
\lambda-1=0
$$

$$
\lambda=1
$$

Therefore:

$$
\boxed{\lambda_1=3,\lambda_2=1}
$$

---

# Explanation

The characteristic equation converts the eigenvalue problem into a normal polynomial equation.

The process is:

1. Start with:

$$
Av=\lambda v
$$

2. Move all terms to one side:

$$
(A-\lambda I)v=0
$$

3. Remove the vector by taking determinant:

$$
det(A-\lambda I)=0
$$

4. Solve the polynomial equation.

5. The solutions are eigenvalues.

---

# Example 2: Matrix With Different Values

Given:

$$
A=
\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}
$$

Find eigenvalues.

---

## Step 1: Calculate (A-\lambda I)

$$
A-\lambda I=
\begin{bmatrix}
4-\lambda&1\\
2&3-\lambda
\end{bmatrix}
$$

---

## Step 2: Characteristic Equation

$$
det(A-\lambda I)=0
$$

$$
\begin{vmatrix}
4-\lambda&1\\
2&3-\lambda
\end{vmatrix}
=0
$$

Using determinant formula:

$$
(4-\lambda)(3-\lambda)-(1)(2)=0
$$

Expand:

$$
12-4\lambda-3\lambda+\lambda^2-2=0
$$

Simplify:

$$
\lambda^2-7\lambda+10=0
$$

Factor:

$$
(\lambda-5)(\lambda-2)=0
$$

Therefore:

$$
\boxed{\lambda_1=5,\lambda_2=2}
$$

---

# Finding Eigenvalues of 3×3 Matrices

For a 3×3 matrix:

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{bmatrix}
$$

We calculate:

$$
det(A-\lambda I)=0
$$

The result is usually a cubic polynomial:

$$
\lambda^3+a\lambda^2+b\lambda+c=0
$$

The roots of this polynomial are the eigenvalues.

---

# Example: Upper Triangular Matrix

Given:

$$
A=
\begin{bmatrix}
4&1&0\\
0&2&0\\
0&0&3
\end{bmatrix}
$$

For triangular matrices:

The eigenvalues are the diagonal elements.

Therefore:

$$
\lambda_1=4
$$

$$
\lambda_2=2
$$

$$
\lambda_3=3
$$

No determinant expansion is needed.

---

# Important Properties

## 1. Number of Eigenvalues

An (n \times n) matrix has:

$$
n
$$

eigenvalues counting repeated values.

Example:

A 3×3 matrix has three eigenvalues.

---

## 2. Repeated Eigenvalues

Sometimes the same eigenvalue appears multiple times.

Example:

$$
(\lambda-2)^2(\lambda-5)=0
$$

Eigenvalues:

$$
\lambda=2,2,5
$$

---

## 3. Triangular Matrix Property

For upper or lower triangular matrices:

The eigenvalues are simply the diagonal elements.

Example:

$$
A=
\begin{bmatrix}
5&2&1\\
0&3&4\\
0&0&7
\end{bmatrix}
$$

Eigenvalues:

$$
\lambda=5,3,7
$$

---

# Common Mistakes

- Forgetting to subtract (\lambda I) from matrix (A).
- Using the wrong identity matrix size.
- Forgetting to set determinant equal to zero.
- Making mistakes while expanding the polynomial.
- Confusing eigenvalues with eigenvectors.
- Forgetting that eigenvalues come from solving the characteristic equation.

---

# Short Exam Notes (Very Concise Revision)

- Eigenvalues are found from:

$$
det(A-\lambda I)=0
$$

- (I) is the identity matrix.
- The result is called the characteristic polynomial.
- The roots of the polynomial are eigenvalues.
- For a 2×2 matrix:

$$
(a_{11}-\lambda)(a_{22}-\lambda)-a_{12}a_{21}=0
$$

- Triangular matrix eigenvalues are diagonal elements.
- After finding eigenvalues, find eigenvectors using:

$$
(A-\lambda I)v=0
$$

---

# Finding Eigenvectors with Examples

# Part 4: Finding Eigenvectors

---

## Definition

After finding the eigenvalues of a matrix, the next step is to find the corresponding eigenvectors.

The eigenvectors are found by solving:

$$
(A-\lambda I)v=0
$$

Where:

- (A) = original matrix
- (\lambda) = eigenvalue
- (I) = identity matrix
- (v) = eigenvector

The equation:

$$
(A-\lambda I)v=0
$$

is a **homogeneous system of equations**.

The solution vectors of this system are the eigenvectors.

---

# Key Points

## Steps for Finding Eigenvectors

To find eigenvectors:

### Step 1: Find eigenvalues

First solve:

$$
det(A-\lambda I)=0
$$

This gives the eigenvalues.

---

### Step 2: Substitute each eigenvalue

For every eigenvalue, solve:

$$
(A-\lambda I)v=0
$$

---

### Step 3: Find the null space

The solution space of:

$$
(A-\lambda I)v=0
$$

is the eigenspace.

Any non-zero vector in this space is an eigenvector.

---

# Example 1: Finding Eigenvectors of a 2×2 Matrix

Given:

$$
A=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
$$

From Part 3, we already found the eigenvalues:

$$
\lambda_1=3
$$

and

$$
\lambda_2=1
$$

Now find the eigenvectors.

---

# Finding Eigenvector for (\lambda=1)

## Step 1: Calculate (A-\lambda I)

$$
A-I=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
-------------

\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
$$

Therefore:

$$
A-I=
\begin{bmatrix}
1&1\\
1&1
\end{bmatrix}
$$

---

## Step 2: Solve the System

$$
(A-I)v=0
$$

Let:

$$
v=
\begin{bmatrix}
x\\
y
\end{bmatrix}
$$

Then:

$$
\begin{bmatrix}
1&1\\
1&1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=============

\begin{bmatrix}
0\\
0
\end{bmatrix}
$$

This gives:

$$
x+y=0
$$

Therefore:

$$
x=-y
$$

Let:

$$
y=1
$$

Then:

$$
x=-1
$$

Therefore:

$$
v=
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

The eigenvector corresponding to:

$$
\lambda=1
$$

is:

$$
\boxed{
v=
\begin{bmatrix}
-1\\
1
\end{bmatrix}
}
$$

---

# Finding Eigenvector for (\lambda=3)

## Step 1: Calculate (A-3I)

$$
A-3I=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
-------------

\begin{bmatrix}
3&0\\
0&3
\end{bmatrix}
$$

Therefore:

$$
A-3I=
\begin{bmatrix}
-1&1\\
1&-1
\end{bmatrix}
$$

---

## Step 2: Solve

$$
\begin{bmatrix}
-1&1\\
1&-1
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=============

\begin{bmatrix}
0\\
0
\end{bmatrix}
$$

From the first equation:

$$
-x+y=0
$$

Therefore:

$$
y=x
$$

Let:

$$
x=1
$$

Then:

$$
y=1
$$

The eigenvector is:

$$
\boxed{
v=
\begin{bmatrix}
1\\
1
\end{bmatrix}
}
$$

---

# Final Answer

Eigenvalues:

$$
\lambda_1=3,\lambda_2=1
$$

Corresponding eigenvectors:

For:

$$
\lambda=3
$$

$$
v=
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

For:

$$
\lambda=1
$$

$$
v=
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

---

# Explanation

The eigenvalue tells us the scaling amount.

The eigenvector tells us the direction that remains unchanged.

For:

$$
\lambda=3
$$

the vector:

$$
\begin{bmatrix}
1\\
1
\end{bmatrix}
$$

becomes three times larger.

For:

$$
\lambda=1
$$

the vector:

$$
\begin{bmatrix}
-1\\
1
\end{bmatrix}
$$

does not change length or direction.

---

# Example 2: Finding Eigenvectors of a 2×2 Matrix

Given:

$$
A=
\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}
$$

From the characteristic equation:

$$
\lambda^2-7\lambda+10=0
$$

we get:

$$
(\lambda-5)(\lambda-2)=0
$$

Eigenvalues:

$$
\lambda_1=5
$$

$$
\lambda_2=2
$$

---

# Eigenvector for (\lambda=5)

Calculate:

$$
A-5I
$$

$$

\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}

---

\begin{bmatrix}
5&0\\
0&5
\end{bmatrix}


$$

#

$$

\begin{bmatrix}
-1&1\\
2&-2
\end{bmatrix}


$$

Solve:

$$

\begin{bmatrix}
-1&1\\
2&-2
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}
=============

\begin{bmatrix}
0\\
0
\end{bmatrix}


$$

Equation:

$$

-x+y=0


$$

Therefore:

$$

y=x


$$

Let:

$$

x=1


$$

Then:

$$

y=1


$$

Eigenvector:

$$

\boxed{
v=
\begin{bmatrix}
1\\
1
\end{bmatrix}
}


$$

---

# Eigenvector for (\lambda=2)

Calculate:

$$

A-2I


$$

#

$$

\begin{bmatrix}
4&1\\
2&3
\end{bmatrix}

---

\begin{bmatrix}
2&0\\
0&2
\end{bmatrix}


$$

#

$$

\begin{bmatrix}
2&1\\
2&1
\end{bmatrix}


$$

Solve:

$$

2x+y=0


$$

Therefore:

$$

y=-2x


$$

Let:

$$

x=1


$$

Then:

$$

y=-2


$$

Eigenvector:

$$

\boxed{
v=
\begin{bmatrix}
1\\
-2
\end{bmatrix}
}


$$

---

# Final Answer

Eigenvalues:

$$

\lambda=5,2


$$

Eigenvectors:

For:

$$

\lambda=5


$$

$$

v=
\begin{bmatrix}
1\\
1
\end{bmatrix}


$$

For:

$$

\lambda=2


$$

$$

v=
\begin{bmatrix}
1\\
-2
\end{bmatrix}


$$

---

# Eigenvectors of 3×3 Matrices

For a 3×3 matrix:

$$

A=
\begin{bmatrix}
a*{11}&a*{12}&a*{13}\\
a*{21}&a*{22}&a*{23}\\
a*{31}&a*{32}&a\_{33}
\end{bmatrix}


$$

The same process is used:

1. Find eigenvalues:

$$

det(A-\lambda I)=0


$$

2. For each eigenvalue solve:

$$

(A-\lambda I)v=0


$$

3. The solution vectors are eigenvectors.

---

# Example 3: 3×3 Matrix

Given:

$$

A=
\begin{bmatrix}
4&1&0\\
0&2&0\\
0&0&3
\end{bmatrix}


$$

Eigenvalues are diagonal values:

$$

\lambda=4,2,3


$$

---

## For (\lambda=4)

Calculate:

$$

A-4I=
\begin{bmatrix}
0&1&0\\
0&-2&0\\
0&0&-1
\end{bmatrix}


$$

The equations are:

$$

y=0


$$

$$

z=0


$$

The variable (x) is free.

Let:

$$

x=1


$$

Eigenvector:

$$

v=
\begin{bmatrix}
1\\
0\\
0
\end{bmatrix}


$$

---

## For (\lambda=2)

Calculate:

$$

A-2I=
\begin{bmatrix}
2&1&0\\
0&0&0\\
0&0&1
\end{bmatrix}


$$

Equations:

$$

2x+y=0


$$

$$

z=0


$$

Therefore:

$$

y=-2x


$$

Let:

$$

x=1


$$

Eigenvector:

$$

v=
\begin{bmatrix}
1\\
-2\\
0
\end{bmatrix}


$$

---

# Common Mistakes

- Finding eigenvectors before eigenvalues.
- Forgetting to solve:

$$

(A-\lambda I)v=0


$$

- Choosing the zero vector as an eigenvector.
- Forgetting that multiple eigenvectors can exist for one eigenvalue.
- Making calculation errors during row reduction.
- Not simplifying eigenvectors.

---

# Short Exam Notes (Very Concise Revision)

- Eigenvectors are found after eigenvalues.
- Use:

$$

(A-\lambda I)v=0


$$

- Eigenvectors are the null space of:

$$

A-\lambda I


$$

- Steps:
  1. Find eigenvalues.
  2. Substitute each eigenvalue.
  3. Solve the homogeneous system.
  4. Obtain non-zero solution vectors.

- Eigenvectors are not unique; any scalar multiple is also an eigenvector.

Example:

If:

$$

v=
\begin{bmatrix}
1\\
2
\end{bmatrix}


$$

then:

$$

2v=
\begin{bmatrix}
2\\
4
\end{bmatrix}


$$

is also an eigenvector.

---

# Special Cases, Practice Questions, and Exam Revision Notes

# Part 5: Special Cases + Practice Questions + Exam Revision Notes

---

# Definition

Eigenvalues and eigenvectors have several special cases that help simplify calculations and understand matrix behavior.

Some matrices have special structures where eigenvalues or eigenvectors can be found more easily.

Important special cases include:

- Upper triangular matrices
- Lower triangular matrices
- Identity matrices
- Repeated eigenvalues
- Zero eigenvalues
- Symmetric matrices

---

# Key Points

# 1. Eigenvalues of Triangular Matrices

## Definition

A triangular matrix is a matrix where all elements below or above the main diagonal are zero.

There are two types:

### Upper triangular matrix

Example:

$$

A=
\begin{bmatrix}
4&2&1\\
0&3&5\\
0&0&7
\end{bmatrix}


$$

### Lower triangular matrix

Example:

$$

A=
\begin{bmatrix}
5&0&0\\
2&3&0\\
1&4&6
\end{bmatrix}


$$

---

## Important Rule

For any triangular matrix:

$$

\text{Eigenvalues}=\text{Diagonal elements}


$$

Example:

$$

A=
\begin{bmatrix}
4&2&1\\
0&3&5\\
0&0&7
\end{bmatrix}


$$

The eigenvalues are:

$$

\lambda_1=4


$$

$$

\lambda_2=3


$$

$$

\lambda_3=7


$$

No determinant expansion is required.

---

# Explanation

The characteristic equation of a triangular matrix becomes:

$$

det(A-\lambda I)=0


$$

Because the matrix is triangular:

$$

det(A-\lambda I)


$$

is simply the product of diagonal elements:

$$

(a*{11}-\lambda)(a*{22}-\lambda)(a\_{33}-\lambda)=0


$$

Therefore, the eigenvalues are the diagonal values.

---

# 2. Identity Matrix Eigenvalues

## Definition

The identity matrix is:

$$

I=
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}


$$

For any vector:

$$

Iv=v


$$

Comparing with:

$$

Av=\lambda v


$$

We get:

$$

\lambda=1


$$

---

## Example

For:

$$

I=
\begin{bmatrix}
1&0&0\\
0&1&0\\
0&0&1
\end{bmatrix}


$$

All eigenvalues are:

$$

\lambda=1,1,1


$$

Every non-zero vector is an eigenvector.

---

# 3. Zero Eigenvalue

## Definition

If:

$$

\lambda=0


$$

then:

$$

Av=0


$$

This means the matrix transforms an eigenvector into the zero vector.

---

## Important Property

A matrix has a zero eigenvalue if:

$$

det(A)=0


$$

This means:

- Matrix is singular.
- Inverse does not exist.
- Columns are linearly dependent.

---

# Example

Given:

$$

A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}


$$

Calculate determinant:

$$

det(A)=(1)(4)-(2)(2)


$$

$$

=4-4


$$

$$

=0


$$

Therefore:

$$

\lambda=0


$$

is one of the eigenvalues.

---

# 4. Repeated Eigenvalues

## Definition

Sometimes the same eigenvalue appears more than once in the characteristic polynomial.

Example:

$$

(\lambda-2)^2(\lambda-5)=0


$$

Eigenvalues:

$$

\lambda_1=2


$$

$$

\lambda_2=2


$$

$$

\lambda_3=5


$$

---

## Important Note

A repeated eigenvalue does not always have multiple independent eigenvectors.

There are two possibilities:

### Case 1: Enough eigenvectors exist

The matrix can be diagonalized.

### Case 2: Not enough eigenvectors exist

The matrix cannot be diagonalized.

---

# 5. Symmetric Matrix Property

## Definition

A matrix is symmetric if:

$$

A=A^T


$$

Example:

$$

A=
\begin{bmatrix}
2&1\\
1&3
\end{bmatrix}


$$

The matrix is symmetric because:

$$

A^T=A


$$

---

## Important Properties of Symmetric Matrices

For symmetric matrices:

- All eigenvalues are real.
- Eigenvectors are orthogonal.
- They can be diagonalized easily.

These properties are very important in machine learning.

---

# Practice Questions

---

# Question 1

Find the eigenvalues of:

$$

A=
\begin{bmatrix}
3&0&0\\
-1&1&0\\
5&3&3
\end{bmatrix}


$$

## Solution

The matrix is lower triangular.

Eigenvalues are the diagonal elements:

$$

\lambda_1=3


$$

$$

\lambda_2=1


$$

$$

\lambda_3=3


$$

Final answer:

$$

\boxed{\lambda=3,1,3}


$$

---

# Question 2

Find eigenvalues of:

$$

A=
\begin{bmatrix}
3&1&4\\
0&2&6\\
0&0&5
\end{bmatrix}


$$

## Solution

The matrix is upper triangular.

Therefore:

$$

\lambda_1=3


$$

$$

\lambda_2=2


$$

$$

\lambda_3=5


$$

Final answer:

$$

\boxed{\lambda=3,2,5}


$$

---

# Question 3

Find eigenvalues and eigenvectors of:

$$

A=
\begin{bmatrix}
2&0&0\\
-1&1&0\\
5&3&3
\end{bmatrix}


$$

## Step 1: Find Eigenvalues

The matrix is lower triangular.

Therefore:

$$

\lambda=2,1,3


$$

---

## Step 2: Find Eigenvectors

For each eigenvalue solve:

$$

(A-\lambda I)v=0


$$

The process:

For:

$$

\lambda=1


$$

solve:

$$

(A-I)v=0


$$

For:

$$

\lambda=2


$$

solve:

$$

(A-2I)v=0


$$

For:

$$

\lambda=3


$$

solve:

$$

(A-3I)v=0


$$

---

# Question 4

Find eigenvalues of:

$$

A=
\begin{bmatrix}
8&-6&2\\
-6&7&-4\\
2&-4&3
\end{bmatrix}


$$

Given:

$$

\lambda=0,3,15


$$

Find corresponding eigenvectors using:

$$

(A-\lambda I)v=0


$$

---

# Question 5

Find eigenvalues and eigenvectors:

$$

A=
\begin{bmatrix}
6&-2&2\\
-2&3&-1\\
2&-1&3
\end{bmatrix}


$$

Given eigenvalues:

$$

\lambda=2,2,8


$$

Find eigenvectors for each eigenvalue.

---

# Complete Eigenvalue and Eigenvector Algorithm

## Step 1: Check Matrix Type

Ask:

- Is it triangular?
- Is it symmetric?
- Is it identity?

Special structures may simplify the solution.

---

## Step 2: Find Eigenvalues

Use:

$$

det(A-\lambda I)=0


$$

Solve the characteristic polynomial.

---

## Step 3: Find Eigenvectors

For every eigenvalue:

$$

(A-\lambda I)v=0


$$

Find the null space.

---

## Step 4: Verify

Check:

$$

Av=\lambda v


$$

If both sides are equal, the eigenvector is correct.

---

# Common Mistakes

- Forgetting that eigenvalues come from:

$$

det(A-\lambda I)=0


$$

- Using the wrong identity matrix size.
- Finding eigenvectors before eigenvalues.
- Accepting the zero vector as an eigenvector.
- Forgetting repeated eigenvalues.
- Assuming repeated eigenvalues always have multiple eigenvectors.
- Forgetting triangular matrices use diagonal elements.
- Not checking the final answer using:

$$

Av=\lambda v


$$

---

# Short Exam Notes (Very Concise Revision)

## Norms

- L1 norm:

$$

||x||\_1=\sum |x_i|


$$

- L2 norm:

$$

||x||\_2=\sqrt{\sum x_i^2}


$$

- Frobenius norm:

$$

||A||_F=\sqrt{\sum_i\sum_j |a_{ij}|^2}


$$

---

## Determinant

- Only defined for square matrices.
- If:

$$

det(A)=0


$$

matrix is singular.

- If:

$$

det(A)\neq0


$$

matrix is invertible.

---

## Eigenvalues

Found using:

$$

det(A-\lambda I)=0


$$

---

## Eigenvectors

Found using:

$$

(A-\lambda I)v=0


$$

---

## Important Properties

- Triangular matrix → eigenvalues are diagonal elements.
- Identity matrix → eigenvalue is 1.
- Zero determinant → zero eigenvalue exists.
- Symmetric matrix → real eigenvalues and orthogonal eigenvectors.
- Eigenvectors are not unique; any scalar multiple is also valid.

---

# Final Exam Revision Summary

The complete process:

1. Given matrix (A).
2. Find:

$$

det(A-\lambda I)=0


$$

3. Solve for eigenvalues.
4. For each eigenvalue solve:

$$

(A-\lambda I)v=0


$$

5. Obtain eigenvectors.
6. Verify:

$$

Av=\lambda v


$$

Eigenvalues tell **how much a direction changes**.

Eigenvectors tell **which directions remain unchanged**.

Together, eigenvalues and eigenvectors describe the fundamental behavior of a matrix transformation.

$$


$$
