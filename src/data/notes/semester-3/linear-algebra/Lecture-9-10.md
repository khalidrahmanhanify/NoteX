---
title: Vector Spaces, Row Spaces, Column Spaces, and Null Spaces
description: A complete guide to fundamental linear algebra spaces. Covers the 8 vector space axioms, subspace rules, linear combinations, span, basis, dimension, finding bases for row, column, and null spaces via RREF, and applying the Rank-Nullity Theorem.
lecture: Lecture 9 10
semester: semester-3
subject: linear-algebra
date: 2026-06-09
order: 7
---

# Linear Algebra: Vector Spaces, Row Spaces, and Column Spaces

---

## Definition

### 1. Vector Space

A **vector space** is a collection of objects (called **vectors**) that can be added together and multiplied by numbers (called **scalars**, usually real numbers $\mathbb{R}$) without leaving the set.

Think of a vector space as a "safe zone" with strict boundaries. As long as you follow the allowed operations (adding vectors or scaling them), your resulting vector will always stay inside that space.

### 2. Subspace

A **subspace** is simply a smaller vector space sitting inside a larger vector space. To be a valid subspace, it must inherit and obey all the rules of the larger space.

### 3. Linear Combination

A **linear combination** is the result of taking a set of vectors, scaling each one by some number, and adding them together:

$$w = c_1 v_1 + c_2 v_2 + \dots + c_k v_k$$

Here, $c_1, c_2, \dots, c_k$ are real numbers called **coefficients**.

### 4. Span

The **span** of a set of vectors $\{v_1, v_2, \dots, v_k\}$ is the set of **ALL possible linear combinations** you can create using those vectors.

- If you have one vector, its span is a line stretching to infinity in both directions.
- If you have two non-parallel vectors in 3D space, their span forms a flat 2D plane through the origin.

### 5. Linear Independence and Basis

- **Linear Independence:** A set of vectors is linearly independent if no vector in the set can be built out of a combination of the others. None of them are "redundant."
- **Basis:** A basis for a space is a minimal set of linearly independent vectors that spans the entire space.
- **Dimension:** The number of vectors in a basis for that space.

### 6. The Fundamental Spaces of a Matrix

For any $m \times n$ matrix $A$ (a table with $m$ rows and $n$ columns):

- **Column Space ($\text{Col}(A)$):** The span of all column vectors of $A$. It lives in $\mathbb{R}^m$.
- **Row Space ($\text{Row}(A)$):** The span of all row vectors of $A$. It lives in $\mathbb{R}^n$.
- **Null Space ($\text{Null}(A)$):** The set of all input vectors $x$ that get squished to zero when multiplied by $A$ ($Ax = 0$). It lives in $\mathbb{R}^n$.

---

## Key Points

### The 8 Axioms of a Vector Space

To qualify as a vector space, a set $V$ with vector addition ($+$) and scalar multiplication ($\cdot$) must satisfy these 8 rules for all vectors $u, v, w \in V$ and all real scalars $c, d \in \mathbb{R}$:

| Category                  | Property                           | Formula / Rule              | Meaning in Plain English                                                                 |
| ------------------------- | ---------------------------------- | --------------------------- | ---------------------------------------------------------------------------------------- |
| **Vector Addition**       | **1. Commutativity**               | $u + v = v + u$             | Order does not matter when adding.                                                       |
|                           | **2. Associativity**               | $(u + v) + w = u + (v + w)$ | Grouping does not matter when adding three vectors.                                      |
|                           | **3. Zero Vector (Identity)**      | $u + 0 = u$                 | There exists a unique zero vector $0$ that leaves vectors unchanged.                     |
|                           | **4. Inverse Vector**              | $u + (-u) = 0$              | Every vector has an exact opposite that cancels it out to zero.                          |
| **Scalar Multiplication** | **5. Distributivity over Scalars** | $(c + d)u = cu + du$        | Scaling a vector by $(c+d)$ is the same as scaling by $c$ and $d$ separately and adding. |
|                           | **6. Distributivity over Vectors** | $c(u + v) = cu + cv$        | Scaling a sum of vectors scales each vector individually.                                |
|                           | **7. Scalar Compatibility**        | $c(du) = (cd)u$             | Scaling successively by $d$ then $c$ is the same as scaling by $cd$ at once.             |
|                           | **8. Identity Scalar**             | $1 \cdot u = u$             | Multiplying any vector by $1$ leaves it completely unchanged.                            |

---

### The 3-Step Subspace Test

If you want to check if a subset $W$ is a valid subspace of $V$, you do **not** need to test all 8 axioms. You only need to verify these 3 conditions:

1. **Contains Zero:** Is the zero vector $0$ in $W$? _(If not, it fails immediately.)_
2. **Closed under Addition:** If $u \in W$ and $v \in W$, is $u + v \in W$?
3. **Closed under Scalar Multiplication:** If $u \in W$ and $c \in \mathbb{R}$, is $cu \in W$?

#### Visualizing Subspaces in Standard Geometry

- **In 1D Space ($\mathbb{R}^1$):**
- The origin $\{0\}$ (0-dimensional)
- The entire line $\mathbb{R}^1$ (1-dimensional)

- **In 2D Space ($\mathbb{R}^2$):**
- The origin $\{(0,0)\}$ (0-dimensional)
- Any straight line passing through $(0,0)$ (1-dimensional)
- The entire plane $\mathbb{R}^2$ (2-dimensional)

- **In 3D Space ($\mathbb{R}^3$):**
- The origin $\{(0,0,0)\}$ (0-dimensional)
- Any line passing through $(0,0,0)$ (1-dimensional)
- Any flat plane passing through $(0,0,0)$ (2-dimensional)
- The entire space $\mathbb{R}^3$ (3-dimensional)

> **Important Note:** A line or plane that does **not** pass through the origin is **NOT** a subspace, because it fails Step 1 (does not contain $0$).

---

### Matrix Space Rules & Relationships

#### 1. Column Space ($\text{Col}(A)$) and Linear Systems

The system of equations $Ax = b$ can be written in vector form as:

$$x_1 \begin{bmatrix} \text{col}_1 \end{bmatrix} + x_2 \begin{bmatrix} \text{col}_2 \end{bmatrix} + \dots + x_n \begin{bmatrix} \text{col}_n \end{bmatrix} = b$$

- This means $Ax = b$ **has a solution** if and only if $b$ is a linear combination of the columns of $A$.
- In other words: **$Ax = b$ is solvable if and only if $b \in \text{Col}(A)$.**

#### 2. The Rank-Nullity Theorem

For any $m \times n$ matrix $A$:

$$\text{Rank}(A) + \text{Nullity}(A) = n \quad (\text{Total Number of Columns})$$

- **$\text{Rank}(A)$** = $\dim(\text{Col}(A)) = \dim(\text{Row}(A))$ = Number of pivot columns.
- **$\text{Nullity}(A)$** = $\dim(\text{Null}(A))$ = Number of free variables.

---

## Detailed Step-by-Step Example

Let's take a full problem from start to finish.

**Problem:**
Given the $3 \times 3$ matrix $A$:

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 1 & 2 & 2 \end{bmatrix}$$

Find:

1. The Reduced Row Echelon Form ($\text{RREF}$) of $A$.
2. A basis and dimension for $\text{Col}(A)$.
3. A basis and dimension for $\text{Row}(A)$.
4. A basis and dimension for $\text{Null}(A)$.

---

### Step 1: Perform Row Operations to Get RREF

To analyze any matrix space, we first simplify the matrix into **Row Echelon Form (REF)** or **Reduced Row Echelon Form (RREF)** using Gaussian Elimination.

$$\begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 1 & 2 & 2 \end{bmatrix}$$

1. Eliminate entries below the first pivot ($1$ in row 1):

- Row 2 $\leftarrow$ Row 2 $- 2 \times$ Row 1:

$$\begin{bmatrix} 2 & 4 & 5 \end{bmatrix} - \begin{bmatrix} 2 & 4 & 6 \end{bmatrix} = \begin{bmatrix} 0 & 0 & -1 \end{bmatrix}$$

- Row 3 $\leftarrow$ Row 3 $- 1 \times$ Row 1:

$$\begin{bmatrix} 1 & 2 & 2 \end{bmatrix} - \begin{bmatrix} 1 & 2 & 3 \end{bmatrix} = \begin{bmatrix} 0 & 0 & -1 \end{bmatrix}$$

Now our matrix looks like:

$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & -1 \\ 0 & 0 & -1 \end{bmatrix}$$

2. Eliminate entry in Row 3 using Row 2:

- Row 3 $\leftarrow$ Row 3 $-$ Row 2:

$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & -1 \\ 0 & 0 & 0 \end{bmatrix}$$

3. Normalize Row 2 (multiply by $-1$):

$$\begin{bmatrix} 1 & 2 & 3 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix}$$

4. Clear entry above the second pivot ($3$ in Row 1, Column 3):

- Row 1 $\leftarrow$ Row 1 $- 3 \times$ Row 2:

$$\text{RREF}(A) = \begin{bmatrix} \mathbf{1} & 2 & 0 \\ 0 & 0 & \mathbf{1} \\ 0 & 0 & 0 \end{bmatrix}$$

---

### Step 2: Find the Column Space Basis and Dimension

1. Look at $\text{RREF}(A)$ and find the **pivot columns** (columns starting with a leading $1$):

- **Column 1** has a pivot in row 1.
- **Column 3** has a pivot in row 2.
- Column 2 has **no pivot** (it corresponds to a free variable).

2. **CRITICAL STEP:** Go back to the **ORIGINAL matrix $A$** to select the basis vectors corresponding to these pivot positions:

$$\text{Column 1 of } A = \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \quad \text{Column 3 of } A = \begin{bmatrix} 3 \\ 5 \\ 2 \end{bmatrix}$$

3. Write down the answer:

$$\text{Basis for } \text{Col}(A) = \left\{ \begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 3 \\ 5 \\ 2 \end{bmatrix} \right\}$$

- **Dimension ($\text{Rank}$):** $2$ (since there are 2 vectors in the basis).

---

### Step 3: Find the Row Space Basis and Dimension

1. For the row space, take the **non-zero rows directly from $\text{RREF}(A)$** (or any valid REF matrix):

- Row 1: $\begin{bmatrix} 1 & 2 & 0 \end{bmatrix}$
- Row 2: $\begin{bmatrix} 0 & 0 & 1 \end{bmatrix}$

2. Write down the answer:

$$\text{Basis for } \text{Row}(A) = \left\{ \begin{bmatrix} 1 & 2 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 & 1 \end{bmatrix} \right\}$$

- **Dimension:** $2$ (notice that $\dim(\text{Row}(A)) = \dim(\text{Col}(A)) = \text{Rank}(A)$).

---

### Step 4: Find the Null Space Basis and Dimension

The null space consists of all vectors $x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix}$ that satisfy $\text{RREF}(A) \cdot x = 0$:

$$\begin{bmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

Convert this back into linear equations:

1. $1x_1 + 2x_2 + 0x_3 = 0 \implies x_1 = -2x_2$
2. $0x_1 + 0x_2 + 1x_3 = 0 \implies x_3 = 0$
3. $x_2$ has no pivot equation, so $x_2$ is a **free variable**. Let $x_2 = t$ (where $t \in \mathbb{R}$).

Express $x$ in parametric form:

$$x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} -2t \\ t \\ 0 \end{bmatrix} = t \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}$$

Write down the answer:

$$\text{Basis for } \text{Null}(A) = \left\{ \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix} \right\}$$

- **Dimension ($\text{Nullity}$):** $1$ (1 free variable).

---

## Explanation

### Why Do We Take Column Space Vectors from the Original Matrix, but Row Space Vectors from RREF?

- **For Column Space:** Row operations add and subtract rows from each other. Doing this **changes the direction** of column vectors in space, but it **preserves the dependency relationships** among columns. Therefore, RREF tells us _which_ columns are independent, but we must return to matrix $A$ to get the actual vectors that span $\text{Col}(A)$.
- **For Row Space:** Performing row operations simply creates new rows that are linear combinations of the existing rows. The span of the rows **never changes** during row reduction. The non-zero rows in RREF are clean, simplified versions of the original rows that span the exact same space.

### Verification using Rank-Nullity Theorem

$$\text{Rank}(A) + \text{Nullity}(A) = \text{Number of Columns } (n)$$

$$\underbrace{2}_{\dim(\text{Col}(A))} + \underbrace{1}_{\dim(\text{Null}(A))} = 3 \quad \checkmark$$

---

## Output Summary

Here is a full breakdown of what each space represents in our example:

| Subspace             | Basis Vectors                                                                          | Dimension | Lives in Space | Geometry                             |
| -------------------- | -------------------------------------------------------------------------------------- | --------- | -------------- | ------------------------------------ |
| **$\text{Col}(A)$**  | $\begin{bmatrix} 1 \\ 2 \\ 1 \end{bmatrix}, \begin{bmatrix} 3 \\ 5 \\ 2 \end{bmatrix}$ | 2         | $\mathbb{R}^3$ | A 2D plane passing through $(0,0,0)$ |
| **$\text{Row}(A)$**  | $\begin{bmatrix} 1 & 2 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 & 1 \end{bmatrix}$     | 2         | $\mathbb{R}^3$ | A 2D plane passing through $(0,0,0)$ |
| **$\text{Null}(A)$** | $\begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}$                                           | 1         | $\mathbb{R}^3$ | A 1D line passing through $(0,0,0)$  |

---

## Common Mistakes

### 1. Copying Column Space vectors directly from RREF

- **WRONG:** $\text{Basis for } \text{Col}(A) = \left\{ \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} \right\}$
- **RIGHT:** Use the pivot column positions from RREF, but copy the vectors from the **original matrix $A$**.

### 2. Assuming a set is a subspace without checking the zero vector

- **Example Question:** Is the set $W = \{(x, y) \in \mathbb{R}^2 \mid y = 2x + 1\}$ a subspace?
- **Mistake:** Starting complex algebra.
- **Quick Check:** Plug in $(0, 0) \implies 0 = 2(0) + 1 \implies 0 = 1$ (False!). It does not contain the origin, so it **cannot** be a subspace.

### 3. Mixing up matrix dimensions

For an $m \times n$ matrix $A$:

- Columns have $m$ entries, so $\text{Col}(A) \subseteq \mathbb{R}^m$.
- Rows have $n$ entries, so $\text{Row}(A) \subseteq \mathbb{R}^n$.
- Solution vectors $x$ have $n$ entries, so $\text{Null}(A) \subseteq \mathbb{R}^n$.

---

## Short Exam Notes

- **Subspace Test Checklist:**

1. Contains zero vector ($0 \in W$)?
2. Closed under addition ($u + v \in W$)?
3. Closed under scalar multiplication ($cu \in W$)?

- **Linear Solvability:** $Ax = b$ is solvable $\iff b \in \text{Col}(A)$.
- **Pivot Columns:** Identify linear independence and give the basis for $\text{Col}(A)$ (from original $A$).
- **Non-zero Rows of RREF:** Directly form a basis for $\text{Row}(A)$.
- **Free Variables:** Indicate the presence of a non-trivial Null Space ($\text{Nullity} = \text{number of free variables}$).
- **Golden Formula:** $\text{Rank}(A) + \text{Nullity}(A) = n$ (number of columns).
