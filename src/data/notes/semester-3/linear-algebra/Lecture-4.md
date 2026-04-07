---
title: System of Linear Equations and Gaussian Elimination
description: Solving systems of linear equations using row operations, augmented matrices, and Gaussian elimination with two and three variables.
lecture: Lecture 4
semester: semester-3
subject: linear-algebra
date: 2026-04-07
order: 13
---

# System of Linear Equations

$$
\begin{gather*}
\begin{bmatrix}
1 & 3 \\
2 & 4
\end{bmatrix}
\cdot
\begin{bmatrix}
1 \\
2
\end{bmatrix}

\begin{bmatrix}
7 \\
10
\end{bmatrix}
\\[6pt]
\begin{bmatrix}
1 & 3 \\
2 & 4
\end{bmatrix}
\cdot
\begin{bmatrix}
x \\
y
\end{bmatrix}

\begin{bmatrix}
7 \\
10
\end{bmatrix}
\\[6pt]
x + 3y = 7 \\
2x + 4y = 10
\end{gather*}
$$

---

## Properties of Linear Equations

### 1. Multiplying or Dividing an Equation

We can multiply or divide **both sides** of an equation by the same constant.  
The solution will remain unchanged.

$$
\begin{gather*}
2(x + 3y) = 7(2) \\
2x + 6y = 14 \\
2(1) + 6(2) = 14 \\
2 + 12 = 14
\end{gather*}
$$

---

$$
\begin{gather*}
2x + 4y = 10 \qquad \times 3 \\
6x + 12y = 30 \\
6(1) + 12(2) = 30
\end{gather*}
$$

---

### 2. Swapping the Order of Equations

We can change the order of equations (swap rows).  
This does **not** change the solution.

$$
\begin{gather*}
x + 3y = 7 \quad (1) \\
2x + 4y = 10 \quad (2)
\end{gather*}
$$

$$
\begin{gather*}
2x + 4y = 10 \quad (1) \\
x + 3y = 7 \quad (2)
\end{gather*}
$$

---

### 3. Adding or Combining Equations

We can add two or more equations together.  
The resulting equation will still have the same solution.

$$
\begin{gather*}
2x + 6y = 14 \\
8x + 16y = 40 \\
\hline
10x + 22y = 54 \\
10(1) + 22(2) = 54 \\
10 + 44 = 54
\end{gather*}
$$

---

# Practice

## 1.

$$
\begin{gather*}
\begin{bmatrix}
1 & 3 \\
7 & 9
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}

\begin{bmatrix}
4 \\
16
\end{bmatrix}
\\
x + 3y = 4 \\
7x + 9y = 16
\end{gather*}
$$

We want to eliminate **x** from the equations.

Multiply the first equation by **−7**:

$$
\begin{gather*}
-7x - 21y = -28 \\
7x + 9y = 16 \\
\hline
0x - 12y = -12 \\
y = 1
\end{gather*}
$$

Another method is multiplying the first equation by **3**, then solving for **y**.

---

## 2.

$$
\begin{gather*}
\begin{bmatrix}
1 & 3 \\
7 & 9
\end{bmatrix}
\begin{bmatrix}
x \
y
\end{bmatrix}

\begin{bmatrix}
6 \\
30
\end{bmatrix}
\\
x + 3y = 6 \\
7x + 9y = 30
\end{gather*}
$$

Eliminate **x**:

$$
\begin{gather*}
-7x - 21y = -42 \\
7x + 9y = 30 \\
\hline
0x - 12y = -12 \\
y = 1
\end{gather*}
$$

Substitute (y = 1) into one equation:

$$
\begin{gather*}
7x + 9y = 30 \\
7x + 9(1) = 30 \\
7x + 9 = 30 \\
7x = 21 \\
x = 3
\end{gather*}
$$

---

## 3.

$$

\begin{gather*}
\begin{bmatrix}
1 & 3 \\
0 & 9
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}

\begin{bmatrix}
7 \\
18
\end{bmatrix}
\end{gather*}


$$

Convert to equations:

$$

\begin{gather*}
x + 3y = 7 \\
9y = 18
\end{gather*}


$$

Solve:

$$

y = 2


$$

$$

x + 3(2) = 7


$$

$$

x = 1


$$

---

# Solving Using Row Operations

## Matrix Form

$$

\begin{bmatrix}
1 & 3\\
2 & 4
\end{bmatrix}
\begin{bmatrix}
x\\
y
\end{bmatrix}

\begin{bmatrix}
7\\
10
\end{bmatrix}


$$

---

## Augmented Matrix

$$

\left[
\begin{array}{cc|c}
1 & 3 & 7\\
2 & 4 & 10
\end{array}
\right]


$$

---

## Row Operation

$$

-2R_1 + R_2 \to R_2


$$

---

## After Elimination

$$

\left[
\begin{array}{cc|c}
1 & 3 & 7\\
0 & -2 & -4
\end{array}
\right]


$$

---

## Back Substitution

$$

-2y = -4


$$

$$

y = 2


$$

$$

x + 3(2) = 7


$$

$$

x = 1


$$

---

## Final Answer

$$

(x,y) = (1,2)


$$

---

# Solving a System of Three Equations

$$

\begin{bmatrix}
1 & 2 & 3 \\
5 & 0 & 2 \\
-2 & 1 & 4
\end{bmatrix}
\begin{bmatrix}
x\\
y\\
z
\end{bmatrix}

\begin{bmatrix}
14\\
11\\
12
\end{bmatrix}


$$

---

## Augmented Matrix

$$

\left[
\begin{array}{ccc|c}
1 & 2 & 3 & 14\\
5 & 0 & 2 & 11\\
-2 & 1 & 4 & 12
\end{array}
\right]


$$

---

## Row Operations

$$

R_2 - 5R_1 \to R_2


$$

$$

R_3 + 2R_1 \to R_3


$$

---

## After Elimination

$$

\left[
\begin{array}{ccc|c}
1 & 2 & 3 & 14\\
0 & -10 & -13 & -59\\
0 & 5 & 10 & 40
\end{array}
\right]


$$

---

## Continue Elimination

$$

-\frac{1}{10}R_2 \to R_2


$$

$$

R_3 - 5R_2 \to R_3


$$

---

## Upper Triangular Matrix

$$

\left[
\begin{array}{ccc|c}
1 & 2 & 3 & 14\\
0 & 1 & \frac{13}{10} & \frac{59}{10}\\
0 & 0 & \frac{7}{2} & \frac{21}{2}
\end{array}
\right]


$$

---

## Back Substitution

$$

\frac{7}{2}z=\frac{21}{2}


$$

$$

z=3


$$

$$

y+\frac{13}{10}(3)=\frac{59}{10}


$$

$$

y=2


$$

$$

x+2(2)+3(3)=14


$$

$$

x=1


$$

---

## Final Solution

$$

(x,y,z) = (1,2,3)


$$

$$
$$
