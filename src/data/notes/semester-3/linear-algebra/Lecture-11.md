---
title: Linear Independence, Unit Vectors, Orthogonality, Norms, Determinants, Eigenvalues and Eigenvectors in Linear Algebra
description: Understanding advanced linear algebra concepts including linear independence and dependence, unit vectors, vector normalization, orthogonal and orthonormal bases, vector and matrix norms, determinants, eigenvalues, eigenvectors, and eigen decomposition. Covers important concepts used in matrix transformations, data representation, dimensionality reduction, and machine learning applications.
lecture: Lecture 11
semester: semester-3
subject: linear-algebra
date: 2026-06-15
order: 6
---

# Linear Algebra Lecture 11: Linear Independence, Unit Vectors, Orthogonality, Norms, Determinants, Eigenvalues and Eigenvectors

## Definition

Linear Algebra studies vectors, matrices, and transformations. In this lecture, we focus on:

- Linear independence and dependence of vectors
- Unit vectors and normalization
- Orthogonal and orthonormal vectors
- Norms for measuring vector and matrix size
- Determinants and their importance
- Eigenvalues and eigenvectors

These concepts are fundamental in computer science, machine learning, artificial intelligence, and data science.

---

# Linear Independence and Linear Dependence

## Definition

A set of vectors:

$$
v_1,v_2,...,v_k
$$

is **linearly independent** if the equation:

$$
c_1v_1+c_2v_2+...+c_kv_k=0
$$

has only the trivial solution:

$$
c_1=c_2=...=c_k=0
$$

This means no vector in the set can be created by combining the other vectors.

A set of vectors is **linearly dependent** if there is at least one non-zero solution:

$$
c_1,c_2,...,c_k \neq 0
$$

Meaning one or more vectors can be represented as a combination of other vectors.

---

## Key Points

### Linear Independence

A set of vectors is independent when:

- No vector is redundant
- Every vector contributes new information
- The null space contains only the zero vector

Mathematically:

$$
Ax=0
$$

has only:

$$
x=0
$$

solution.

---

### Linear Dependence

A set of vectors is dependent when:

- Some vectors contain repeated information
- At least one vector can be generated from others
- The null space has non-zero solutions

---

## Example

Given:

$$
v_1=
\begin{bmatrix}
1\\2\\1\\0
\end{bmatrix}
$$

$$
v_2=
\begin{bmatrix}
2\\4\\2\\0
\end{bmatrix}
$$

$$
v_3=
\begin{bmatrix}
4\\8\\4\\0
\end{bmatrix}
$$

Notice:

$$
v_2=2v_1
$$

and

$$
v_3=4v_1
$$

Therefore:

$$
v_1,v_2,v_3
$$

are linearly dependent.

---

## Explanation

The vectors contain the same direction and information.

For example:

$$
\begin{bmatrix}
1\\2\\1\\0
\end{bmatrix}
$$

already describes the direction.

The other vectors are only scaled versions.

Therefore, keeping all vectors creates redundancy.

---

## Output

The vectors are:

$$
\boxed{\text{Linearly dependent}}
$$

---

## Common Mistakes

- Thinking different-looking vectors are always independent
- Forgetting that scalar multiples create dependence
- Checking only the number of vectors instead of solving equations

---

## Short Exam Notes

- Independent vectors → only trivial solution exists
- Dependent vectors → non-zero solution exists
- Dependent vectors contain redundancy
- Independence is related to null space

---

# Why Linear Independence is Important

## Definition

Linear independence is important because it helps us find the minimum number of vectors needed to represent data.

In data science:

- Independent vectors remove redundancy
- Independent bases make calculations easier
- Redundant information can be compressed

---

## Example

Matrix:

$$
A=
\begin{bmatrix}
1&2&4&6&1\\
2&4&8&12&2\\
1&2&4&6&1\\
0&0&0&0&0
\end{bmatrix}
$$

The columns are:

$$
v_1,v_2,v_3,v_4,v_5
$$

But:

$$
v_2=2v_1
$$

$$
v_3=4v_1
$$

$$
v_4=6v_1
$$

$$
v_5=v_1
$$

So all columns depend on one vector.

---

## Explanation

Although the matrix has five columns, the actual information is only one direction.

This means the matrix has redundancy.

Removing redundant vectors gives a smaller basis.

---

## Short Exam Notes

- Independent basis = no repeated information
- Redundancy allows compression
- Rank represents independent directions

---

# Unit Vectors

## Definition

A **unit vector** is a vector whose length (magnitude) is exactly 1.

For vector:

$$
u=
\begin{bmatrix}
x_1\\x_2\\...\\x_n
\end{bmatrix}
$$

the length is:

$$
||u||=\sqrt{x_1^2+x_2^2+...+x_n^2}
$$

A unit vector satisfies:

$$
||u||=1
$$

---

# Unit Vector Formula

## Definition

To convert any vector into a unit vector, divide it by its magnitude.

Formula:

$$
\hat{u}=\frac{u}{||u||}
$$

This process is called:

$$
\boxed{\text{Normalization}}
$$

---

## Example

Given:

$$
u=
\begin{bmatrix}
2\\1
\end{bmatrix}
$$

Find its unit vector.

### Step 1: Calculate length

$$
||u||=\sqrt{2^2+1^2}
$$

$$
=\sqrt{4+1}
$$

$$
=\sqrt5
$$

---

### Step 2: Divide vector by length

$$
\hat{u}
=======

\frac{1}{\sqrt5}
\begin{bmatrix}
2\\1
\end{bmatrix}
$$

Therefore:

$$
\boxed{
\hat{u}
=======

\begin{bmatrix}
\frac{2}{\sqrt5}\\
\frac1{\sqrt5}
\end{bmatrix}
}
$$

---

## Explanation

The direction of the vector stays the same.

Only the length changes.

Original vector:

$$
||u||=\sqrt5
$$

Normalized vector:

$$
||\hat{u}||=1
$$

---

## Output

The normalized vector:

$$
\boxed{
\begin{bmatrix}
\frac2{\sqrt5}\\
\frac1{\sqrt5}
\end{bmatrix}}
$$

---

## Common Mistakes

- Dividing each element separately by different values
- Forgetting to calculate the vector length first
- Assuming every vector is already a unit vector

---

## Short Exam Notes

- Unit vector length = 1
- Normalization creates unit vectors
- Formula:

$$
\hat{u}=\frac{u}{||u||}
$$

---

# Orthogonality

## Definition

Two vectors are **orthogonal** if their dot product is zero.

For vectors:

$$
u,v
$$

they are orthogonal when:

$$
u^Tv=0
$$

---

## Key Points

Orthogonal vectors:

- Are perpendicular
- Have an angle of 90°
- Have zero dot product

Formula:

$$
u\cdot v=0
$$

---

## Example

Given:

$$
u=
\begin{bmatrix}
1\\2
\end{bmatrix}
$$

$$
v=
\begin{bmatrix}
2\\-1
\end{bmatrix}
$$

Dot product:

$$
u^Tv=(1)(2)+(2)(-1)
$$

$$
=2-2
$$

$$
=0
$$

Therefore:

$$
\boxed{u \text{ and } v \text{ are orthogonal}}
$$

---

# Orthonormal Vectors

## Definition

A set of vectors is **orthonormal** when:

1. Every vector has length 1
2. Every pair of vectors is orthogonal

Meaning:

$$
||v_i||=1
$$

and:

$$
v_i^Tv_j=0
$$

---

## Example

Two vectors:

$$
v_1=
\begin{bmatrix}
\frac1{\sqrt5}\\
\frac2{\sqrt5}
\end{bmatrix}
$$

$$
v_2=
\begin{bmatrix}
\frac6{\sqrt45}\\
-\frac3{\sqrt45}
\end{bmatrix}
$$

They are orthonormal if:

$$
v_1^Tv_2=0
$$

and:

$$
||v_1||=||v_2||=1
$$

---

## Explanation

Orthonormal bases are preferred because calculations become easier.

For an orthonormal matrix:

$$
X^{-1}=X^T
$$

Instead of computing a complicated inverse, we only transpose the matrix.

---

## Short Exam Notes

- Orthogonal → dot product = 0
- Orthonormal → orthogonal + unit length
- Orthonormal matrix:

$$
X^{-1}=X^T
$$

---

# Norms

## Definition

A **norm** is a mathematical function that measures the size or length of a vector or matrix.

The norm tells us how large a vector or matrix is.

The notation for a norm is:

$$
||x||
$$

For vectors, norms measure distance from the origin.

For matrices, norms measure the overall magnitude of all elements.

---

# L1 Norm (Manhattan Norm)

## Definition

The **L1 norm** is the sum of the absolute values of all vector components.

Formula:

$$
||x||_1=|x_1|+|x_2|+...+|x_n|
$$

It is also called:

- Manhattan distance
- Taxicab norm

---

## Example

Given:

$$
x=
\begin{bmatrix}
3\\-4\\2
\end{bmatrix}
$$

The L1 norm is:

$$
||x||_1=|3|+|-4|+|2|
$$

$$
=3+4+2
$$

$$
=9
$$

---

## Explanation

The L1 norm ignores direction and only measures total magnitude.

It is commonly used in:

- Machine learning regularization
- Sparse data problems
- Feature selection

---

## Short Exam Notes

- L1 norm = sum of absolute values
- Formula:

$$
||x||_1=\sum |x_i|
$$

---

# L2 Norm (Euclidean Norm)

## Definition

The **L2 norm** is the normal length of a vector.

It calculates the shortest distance between the vector and the origin.

Formula:

$$
||x||_2=
\sqrt{x_1^2+x_2^2+...+x_n^2}
$$

---

## Example

Given:

$$
x=
\begin{bmatrix}
1\\2
\end{bmatrix}
$$

Length:

$$
||x||_2=\sqrt{1^2+2^2}
$$

$$
=\sqrt{1+4}
$$

$$
=\sqrt5
$$

---

## Explanation

The L2 norm is the most commonly used vector length.

Applications:

- Geometry
- Machine learning
- Optimization
- Distance calculations

---

## Short Exam Notes

- L2 norm = Euclidean distance
- Formula:

$$
||x||_2=\sqrt{\sum x_i^2}
$$

- Unit vectors have:

$$
||x||_2=1
$$

---

# Frobenius Norm

## Definition

The **Frobenius norm** is the matrix version of the L2 norm.

It measures the size of a matrix by treating all elements like components of a vector.

Formula:

$$
||A||*F=
\sqrt{
\sum*{i=1}^{m}
\sum_{j=1}^{n}
|a_{ij}|^2
}
$$

Meaning:

1. Square every element
2. Add all values
3. Take square root

---

# Example

Given:

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
||A||_F=
\sqrt{
1^2+2^2+1^2+3^2
}
$$

$$
\sqrt{
1+4+1+9
}
$$

$$
\sqrt{15}
$$

---

## Explanation

For a vector:

$$
x=
\begin{bmatrix}
1\\2
\end{bmatrix}
$$

The L2 norm is:

$$
||x||\_2=\sqrt{1^2+2^2}
$$

For a matrix, Frobenius norm applies the same idea to every matrix element.

---

## Short Exam Notes

- Frobenius norm = matrix equivalent of L2 norm
- Formula:

$$
||A||_F=
\sqrt{\sum\sum |a_{ij}|^2}
$$

- Square all elements and add them

---

# Determinant of a Matrix

## Definition

The **determinant** is a scalar value associated with a square matrix.

It gives important information about:

- Invertibility
- Linear dependence
- Solutions of equations

The determinant is written as:

$$
|A|
$$

---

# Determinant of a 2×2 Matrix

## Formula

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

## Example

Given:

$$
A=
\begin{bmatrix}
2&3\\
4&5
\end{bmatrix}
$$

Then:

$$
|A|=(2)(5)-(3)(4)
$$

$$
=10-12
$$

$$
=-2
$$

---

## Explanation

The determinant compares the product of the main diagonal with the opposite diagonal.

---

# Determinant of a 3×3 Matrix

## Definition

For:

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&a_{13}\\
a_{21}&a_{22}&a_{23}\\
a_{31}&a_{32}&a_{33}
\end{bmatrix}
$$

The determinant is calculated using expansion:

$$

|A|=
a_{11}
\begin{vmatrix}
a_{22}&a_{23}\\
a_{32}&a_{33}
\end{vmatrix}
+
a_{12}
\begin{vmatrix}
a_{21}&a_{23}\\
a_{31}&a_{33}
\end{vmatrix}
- a_{13}
  \begin{vmatrix}
  a_{21}&a_{22}\\
  a_{31}&a_{32}
  \end{vmatrix}
$$

---

## Example

Given:

$$

A=
\begin{bmatrix}
2&-3&1\\
2&0&-1\\
1&4&5
\end{bmatrix}


$$

Expansion:

$$

|A| =
\
2 \
\begin{vmatrix}
0&-1\\
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
(0)(5)-(-1)(4)=4
$$

Second:

$$
(2)(5)-(-1)(1)=11
$$

Third:

$$
(2)(4)-(0)(1)=8
$$

Therefore:

$$
|A|
\implies

2(4)+3(11)+8
$$

$$
=8+33+8
$$

$$
=49
$$

---

# Importance of Determinant

## Key Points

If:

$$
|A|=0
$$

then:

### 1. No unique solution exists

The system:

$$
Ax=b
$$

does not have one unique answer.

---

### 2. Matrix is Singular

A singular matrix:

- Has no inverse
- Cannot be inverted

$$
A^{-1}\text{ does not exist}
$$

---

### 3. Columns are Linearly Dependent

If:

$$
|A|=0
$$

then the columns contain redundancy.

---

## Example

Matrix:

$$
A=
\begin{bmatrix}
1&2\\
2&4
\end{bmatrix}
$$

Determinant:

$$
|A|=(1)(4)-(2)(2)
$$

$$
=4-4
$$

$$
=0
$$

Therefore:

- Matrix is singular
- Columns are dependent
- No inverse exists

---

## Common Mistakes

- Calculating determinant for non-square matrices
- Forgetting the negative sign in expansion
- Confusing determinant with matrix magnitude

---

## Short Exam Notes

- Determinant exists only for square matrices
- If:

$$
|A|\neq0
$$

matrix has inverse.

- If:

$$
|A|=0
$$

matrix is singular.

---

# Eigenvalues and Eigenvectors

## Definition

Eigenvalues and eigenvectors describe special directions of a matrix transformation.

Normally:

$$
Ax
$$

changes both the direction and length of a vector.

However, some special vectors only change their length.

These special vectors are called:

$$
\boxed{\text{Eigenvectors}}
$$

The scaling values are called:

$$
\boxed{\text{Eigenvalues}}
$$

---

# Eigenvalue Equation

## Formula

The fundamental equation is:

$$
Av=\lambda v
$$

Where:

- (A) = matrix
- (v) = eigenvector
- (\lambda) = eigenvalue

---

## Explanation

When matrix (A) multiplies eigenvector (v):

- Direction stays the same
- Only magnitude changes

The matrix behaves like a scalar multiplier.

---

# Example of Eigenvectors

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
v_1=
\begin{bmatrix}
1\\
-1
\end{bmatrix}
$$

Multiplication:

$$
Av_1=
\begin{bmatrix}
2&1\\
1&2
\end{bmatrix}
\begin{bmatrix}
1\\
-1
\end{bmatrix}
$$

Result:

$$

\begin{bmatrix}
1\\
-1
\end{bmatrix}


$$

Therefore:

$$

Av_1=1v_1


$$

Eigenvalue:

$$

\lambda=1


$$

---

Another vector:

$$

v_2=
\begin{bmatrix}
1\\
1
\end{bmatrix}


$$

Then:

$$

Av_2=
3
\begin{bmatrix}
1\\
1
\end{bmatrix}


$$

Therefore:

$$

\lambda=3


$$

---

## Explanation

The vectors:

$$

\begin{bmatrix}
1\\-1
\end{bmatrix}


$$

and

$$

\begin{bmatrix}
1\\1
\end{bmatrix}


$$

are special because matrix multiplication only scales them.

---

# Applications of Eigenvalues and Eigenvectors

## Key Points

Eigenvalues and eigenvectors are used in:

- Data compression
- Machine learning
- Principal Component Analysis (PCA)
- Image processing
- Computer vision
- Dimensionality reduction

---

## Data Compression Idea

Suppose we have:

100 basis vectors.

After eigen decomposition:

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

Small eigenvalues contribute very little.

Therefore, we can remove them.

This reduces dimensions while keeping important information.

---

# Short Exam Notes

- Eigenvector:

$$

Av=\lambda v


$$

- Eigenvector → special direction
- Eigenvalue → scaling factor
- Large eigenvalues represent important directions
- Used in PCA and compression

---

# Complete Lecture 11 Summary

- Linear independence removes redundancy.
- Unit vectors have length 1.
- Normalization converts vectors into unit vectors.
- Orthogonal vectors have dot product zero.
- Orthonormal vectors are perpendicular unit vectors.
- L1 norm measures absolute sum.
- L2 norm measures Euclidean distance.
- Frobenius norm measures matrix size.
- Determinant determines invertibility.
- Determinant zero means singular matrix.
- Eigenvectors keep their direction after transformation.
- Eigenvalues describe scaling.
- Eigen decomposition helps compression and dimensionality reduction.
  $$
