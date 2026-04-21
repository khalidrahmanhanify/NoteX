---
title: Intorduction to Vectors
description: All about Vectors and Vector Operations like addition, subtraction and transpose of vectors.
lecture: Lecture 1
semester: semester-3
subject: linear-algebra
date: 2026-03-10
order: 16
---

# **Introduction to Vectors and Operations**

## **What is a Vector?**

- A vector is a mathematical object represented as an ordered set of numbers enclosed by brackets.
  - **Example**: ( \mathbf{a} = \begin{bmatrix} 2 \ 1 \end{bmatrix} )

  Vectors are denoted in various notations but represent the same concept. For example:
  - ( $\mathbf{a} = (2, 1)$ )
  - ( $\mathbf{a} = { 2, 1 }$ )
  - ( $\mathbf{a} = \left[ 2 \ 1 \right]$ )

- **Dimension of Vectors**:
  - A vector can be defined in 1-dimensional or 2-dimensional space.
  - **1D Vector**: ( $\mathbb{R}$ )
  - **2D Vector**: ( $\mathbb{R}^2$ )

- A vector by itself does not convey much information. It only represents a set of numbers enclosed in brackets, and it becomes meaningful when additional context (like direction or position) is given.

## **Graphical Representation of Vectors**

- A vector can be represented on a graph by indicating the direction and magnitude.
  - Example: A vector ( $\mathbf{a} = \begin{bmatrix} 3 \ 4 \end{bmatrix}$ ) on a 2D plane.

---

# **Vector Operations**

## **Vector Addition**

- For any two vectors ( $\mathbf{A}$ ) and ( $\mathbf{B}$ ) in an ( $n$ )-dimensional space:
  - The addition is performed component-wise.
  - **Formula**: ( $\mathbf{A} + \mathbf{B} = \begin{bmatrix} A_1 + B_1 \ A_2 + B_2 \ \vdots \ A_n + B_n \end{bmatrix}$ )

- **Example**:
  - ( $\mathbf{A} = \begin{bmatrix} 2 \ 3 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 3 \ 2 \end{bmatrix}$ )
  - ( $\mathbf{A} + \mathbf{B} = \begin{bmatrix} 2 + 3 \ 3 + 2 \end{bmatrix} = \begin{bmatrix} 5 \ 5 \end{bmatrix}$ )

---

## **Vector Subtraction**

- Similar to addition, vector subtraction is performed component-wise.
  - **Formula**: ( $\mathbf{A} - \mathbf{B} = \begin{bmatrix} A_1 - B_1 \ A_2 - B_2 \ \vdots \ A_n - B_n \end{bmatrix}$ )

- **Example**:
  - ( $\mathbf{A} = \begin{bmatrix} 3 \ 4 \end{bmatrix}, \mathbf{B} = \begin{bmatrix} 2 \ 1 \end{bmatrix}$ )
  - ( $\mathbf{A} - \mathbf{B} = \begin{bmatrix} 3 - 2 \ 4 - 1 \end{bmatrix} = \begin{bmatrix} 1 \ 3 \end{bmatrix}$ )

---

## **The Transpose Operation**

- The transpose of a vector involves flipping it, turning rows into columns and vice versa.
  - **Formula**: If ( $\mathbf{x} = \begin{bmatrix} A_1 \ A_2 \ \dots \ A_n \end{bmatrix} ), then ( \mathbf{x}^T = \begin{bmatrix} A_1 & A_2 & \dots & A_n \end{bmatrix}$ )

- **Example**:
  - ( $\mathbf{x} = \begin{bmatrix} 1 \ 3 \end{bmatrix}$ )
  - Transpose: ( $\mathbf{x}^T = \begin{bmatrix} 1 & 3 \end{bmatrix}$ )

---

# **Key Concepts**

- **Vector notation**: Used to represent magnitude and direction.
- **Operations**: Addition, subtraction, and transposition can be performed on vectors.
- **Meaning**: A vector itself doesn't convey much until you provide context or perform operations on it.
