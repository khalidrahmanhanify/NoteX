---
title: Trace of Matrix, Matrix Inner Product
description: All about trace of matrix, matrix inner product and transpose properties.
lecture: Lecture 3
semester: semester-3
subject: linear-algebra
date: 2026-03-24
order: 14
---

# Trace of Matrix

If (X) is a **square matrix**, the sum of its diagonal elements is called the **trace**.

⚠️**:** Trace is defined **only for square matrices**.

$$
\mathbf{X} =
\begin{bmatrix}
1 & 6 & 1 \\
2 & 5 & 0 \\
3 & 4 & 0
\end{bmatrix}_{(3\times3)}
$$

$$
\operatorname{Diag}(\mathbf{X})=
\begin{bmatrix}
1\\
5\\
0
\end{bmatrix}
$$

$$
\operatorname{Tr}(\mathbf{X}) = 1+5+0 = 6
$$

---

# Matrix Inner Product

If (X,Y) are two matrices of the **same size**, then

⚠️ **Correction:** must be same dimensions.

$\langle X,Y\rangle = \operatorname{Tr}(X Y^T)$

Also,

$\langle Y,X\rangle = \operatorname{Tr}(Y X^T)$

And

✅ **Important property added**

$\langle X,Y\rangle = \langle Y,X\rangle$

---

# Example

$$
X=
\begin{bmatrix}
1&0&2\\
2&1&4\\
3&3&1
\end{bmatrix}
\qquad
Y=
\begin{bmatrix}
0&2&1\\
1&1&0\\
3&2&-1
\end{bmatrix}
$$

$$
Y^T=
\begin{bmatrix}
0&1&3\\
2&1&2\\
1&0&-1
\end{bmatrix}
$$

$$
XY^T =
\begin{bmatrix}
2&1&1\
6&3&4\
7&6&14
\end{bmatrix}
$$

$\operatorname{Tr}(XY^T)=2+3+14=19$

---

# Transpose Properties

### Property 1

$(X^T)^T = X$

Example

$$
X=
\begin{bmatrix}
1&4\\
2&5\\
3&6
\end{bmatrix}
$$

$$
X^T=
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
$$

$(X^T)^T = X$

---

### Property 2

⚠️ **Correction (important):**

$(XY)^T = Y^T X^T$

NOT

$X^T Y^T$

Example

$$
X=
\begin{bmatrix}
1&2\\
1&3
\end{bmatrix}
\qquad
Y=
\begin{bmatrix}
3&5\\
0&1
\end{bmatrix}
$$

XY=

$$
\begin{bmatrix}
3&7\\
3&8
\end{bmatrix}
$$

$$
(XY)^T=
\begin{bmatrix}
3&3\\
7&8
\end{bmatrix}
$$

Now compute

$Y^T X^T$

$$
Y^T=
\begin{bmatrix}
3&0\\
5&1
\end{bmatrix}
\qquad
X^T=
\begin{bmatrix}
1&1\\
2&3
\end{bmatrix}
$$

$$
Y^T X^T=
\begin{bmatrix}
3&3\\
7&8
\end{bmatrix}
$$

Matches ✔️

---

# Example 2 (Inner Product)

$$
X=
\begin{bmatrix}
1&0\\
2&1
\end{bmatrix}
\qquad
Y=
\begin{bmatrix}
1&1\\
2&0
\end{bmatrix}
$$

$$
Y^T=
\begin{bmatrix}
1&2\\
1&0
\end{bmatrix}
$$

$$
\langle X,Y\rangle
= \operatorname{Tr}(XY^T)
$$

$$
XY^T=
\begin{bmatrix}
1&2\\
3&4
\end{bmatrix}
$$

$$
=1+4=5
$$

Also

$$
\langle Y,X\rangle
=\operatorname{Tr}(YX^T)=5
$$

---

# Classwork

## 1. $(Y^T x)$

$$
Y^T=
\begin{bmatrix}
1&2\
3&3\
0&1
\end{bmatrix}{(3\times2)}\qquad
$$

$$
x=\begin{bmatrix}1\\2\end{bmatrix}{(2\times1)}
$$

$$
Y^T x =
\begin{bmatrix}
5\
9\
2
\end{bmatrix}
$$

---

## 2. Hadamard Product

$$
Z\odot Z=
\begin{bmatrix}
1&0&0\\
0&2&1\\
1&1&1
\end{bmatrix}
\odot
\begin{bmatrix}
1&0&0\\
0&2&1\\
1&1&1
\end{bmatrix}
$$

$$
\begin{bmatrix}
1&0&0\\
0&4&1\\
1&1&1
\end{bmatrix}
$$

---

## 3. $(2Zy)$

$$
2\begin{bmatrix}1&0&0\\ 0&2&1\\ 1&1&1 \end{bmatrix}\begin{bmatrix}3\\ 1\\ 3\end{bmatrix}
$$

$$
\begin{bmatrix}
6\\
10\\
14
\end{bmatrix}
$$

---

## 4. $(<x,x>)$

$\langle x,x\rangle=\operatorname{Tr}(xx^T)$

$$
\operatorname{Tr}
\begin{bmatrix}
1&0\\
0&1
\end{bmatrix}
=2
$$

---

## 5. Outer Product

$x\otimes y = xy^T$

$$
\begin{bmatrix}1\\ 2\end{bmatrix}\begin{bmatrix}3 & 1 &3\end{bmatrix} =
\begin{bmatrix}
3&1&3\\
6&2&6
\end{bmatrix}
$$

---

## 6. $Diag(x

)$

$$
\operatorname{Diag}(\begin{bmatrix}1&0\\ 0&1\end{bmatrix})
$$

$$
= \begin{bmatrix}
1\\
1
\end{bmatrix}
$$

---

## 7. Trace

$\operatorname{Tr}(Z)=1+2+1=4$

---

## 8. $(x^T Y z)$

$x^T Y z$

$$
\begin{bmatrix}
1&2
\end{bmatrix}
$$

$$
\begin{bmatrix}
1&3&0\\
2&3&1
\end{bmatrix}
$$

$$
\begin{bmatrix}
1\\
3\\
0
\end{bmatrix}
$$

$$
\begin{bmatrix}
5&9&2
\end{bmatrix}
$$

$$
\begin{bmatrix}
1\\
3\\
0
\end{bmatrix}
=32
$$

---

# Vector Outer Product

$v\otimes v = vv^T$

$$
\begin{bmatrix}x \\ y\end{bmatrix}\begin{bmatrix}x&y\end{bmatrix} =
\begin{bmatrix}
x^2&xy\\
xy&y^2
\end{bmatrix}
$$

---

# Trace of Outer Product

⚠️**:** result must be scalar

$$
\operatorname{Tr}(v\otimes v) =
x^2+y^2
$$

---

# Linear Transformation

$AX=B$

$$
\begin{bmatrix}1&2 \\ 3&4\end{bmatrix}\begin{bmatrix}5\\ 6\end{bmatrix} =
\begin{bmatrix}
17\\
39
\end{bmatrix}
$$

This represents a **linear transformation**

$\mathbb{R}^2 \to \mathbb{R}^2$

System:

$x+2y=17$

$3x+4y=39$

Solution

$$
y=6
\qquad
x=5
$$

---

# Row Operation Rules

You can:

1. Multiply equation by constant
2. Swap equations
3. Add/subtract equations

These are **elementary row operations**.
