---
title: Using Matrices as Functions of Vectors
description: Exploring how matrices can be used to transform vectors and solve linear systems.
lecture: Lecture 6
semester: semester-3
subject: linear-algebra
date: 2026-04-21
order: 11
---

# **Using Matrices as Functions of Vectors**

## **Concept of Matrices as Functions**

A matrix can be seen as a function that operates on a vector to produce another vector as output. In this lecture, we explored using matrices to transform vectors.

## **Matrix Representation**

- The relationship between a matrix, an input vector, and an output vector is illustrated as follows:
  - **Input Vector**: A vector ( $\mathbf{x} = \begin{bmatrix} x_1 \ x_2 \end{bmatrix}$ )
  - **Output Vector**: A vector ( $\mathbf{y} = \begin{bmatrix} y_1 \ y_2 \end{bmatrix}$ )

- Matrix multiplication can be represented as:
  $$A \cdot \mathbf{x} = \mathbf{y}$$
  Where ( $A$ ) is a matrix that transforms ( $\mathbf{x}$ ) into ( $\mathbf{y}$ ).

---

## **Example 1: Solving a System of Linear Equations**

For the system:
$$x + 2y = 3 \quad \text{(Equation 1)}$$
$$2x + 3y = 5 \quad \text{(Equation 2)}$$

We can represent the system in matrix form as:

$$
\begin{bmatrix}
1 & 2 \\
2 & 3
\end{bmatrix}
\\
\begin{bmatrix}
x \\
y
\end{bmatrix}
\\
=============
\\
\begin{bmatrix}
3 \\
5
\end{bmatrix}
$$

- **Interpretation**:
  - The matrix on the left represents the coefficients of ( $x$ ) and ( $y$ ) in the system of equations.
  - The vector on the left ( $\begin{bmatrix} x \ y \end{bmatrix}$ ) is the input vector (unknowns).
  - The vector on the right ( $\begin{bmatrix} 3 \ 5 \end{bmatrix}$ ) is the output vector (constant terms from the equations).

The goal is to find ( $x$ ) and ( $y$ ) that satisfy this equation.

---

## **Identity Matrix**

The identity matrix ( I ) has the following property:

$$I \cdot \mathbf{v} = \mathbf{v}$$

- Example: ( $\begin{bmatrix} 1 & 0 \ 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} v_1 \ v_2 \end{bmatrix} = \begin{bmatrix} v_1 \ v_2 \end{bmatrix}$ )
- It does not change the vector when multiplied.

---

## **Matrix Operations**

- **Example 2: Vector Transformation**

  A vector can be scaled by multiplying it by a scalar. For example:

  $$
  \frac{1}{2} \cdot \begin{bmatrix} 1 \ 1 \end{bmatrix} = \begin{bmatrix} \frac{1}{2} \ \frac{1}{2} \end{bmatrix}
  $$
  - This scales the vector by ( $\frac{1}{2}$ ).

- **Example 3: Scalar Multiplication of a Matrix**

  Multiplying a matrix by a scalar is another operation:

  $$
  1/5 \cdot \begin{bmatrix} 1 \ 1 \end{bmatrix} = \begin{bmatrix} 1/5 \ 1/5 \end{bmatrix}
  $$

- **Example 4: Zero Vector**
  - When a matrix is multiplied by a zero vector, the result is always a zero vector:
    $$
    \begin{bmatrix} 0 & 0 \ 0 & 0 \end{bmatrix} \cdot \begin{bmatrix} 1 \ 0 \end{bmatrix} = \begin{bmatrix} 0 \ 0 \end{bmatrix}
    $$

---

## **Graphical Interpretation**

- The concept of a matrix as a function of vectors can also be visualized geometrically. A matrix can transform vectors by scaling, rotating, or translating them in space.
- Example: Consider a vector ( $v = \begin{bmatrix} 1 \ 1 \end{bmatrix}$ ), it can be scaled or transformed by a matrix such as:
  $$
  A = \begin{bmatrix} 2 & 0 \ 0 & 2 \end{bmatrix}
  $$
  The transformed vector is:
  $$
  A \cdot v = \begin{bmatrix} 2 \ 2 \end{bmatrix}
  $$
  This is a scaling transformation.

---

## **Key Concepts**

- **Matrices as functions**: A matrix can be thought of as a function that transforms input vectors into output vectors.
- **Identity matrix**: The matrix that leaves vectors unchanged when multiplied.
- **Scalar multiplication**: Matrices and vectors can be scaled by multiplying them by scalars.
- **Zero vector**: Multiplying any matrix by a zero vector results in a zero vector.
