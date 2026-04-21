---
title: REF and RREF
description: Solving systems of linear equations using row echelon form.
lecture: Lecture 5
semester: semester-3
subject: linear-algebra
date: 2026-04-14
order: 12
---

### **Solving Linear Systems using Row Echelon Form (REF)**

#### **Row Echelon Form (REF)**

- A matrix is in **row echelon form** (REF) if:
  1. All nonzero rows are above any zero rows.
  2. The leading coefficient (the first nonzero number from the left) of each nonzero row is strictly to the right of the leading coefficient of the row above it.
  3. The leading coefficient in each nonzero row is 1, and it is the only nonzero entry in its column.

---

#### **Types of Solutions for a System of Linear Equations**

1. **Unique Solution**:
   - When the matrix reduces to a form where each row corresponds to one variable with no free variables.

2. **Infinite Solutions**:
   - When there are free variables, leading to multiple solutions for the system.

3. **No Solution**:
   - When a contradiction arises (such as a row with only zeros except for the last element, indicating inconsistency).

---

#### **Example 1: Solving using REF**

Consider the matrix:

$$
\begin{bmatrix}
1 & 1 & 6 \\
2 & 3 & 8 \\
1 & 1 & 3 \\
\end{bmatrix}
$$

- **Step-by-step operations**:
  - Perform row operations to bring the matrix into REF.
  - For example: Row operations like ( $R_2 \leftarrow R_2 - 2R_1$ ), etc., to simplify the matrix.

- **Resulting REF Matrix**:

  $$
  \begin{bmatrix}
  1 & 1 & 6 \\
  0 & 1 & 2 \\
  0 & 0 & 0 \\
  \end{bmatrix}
  $$

- This results in a **unique solution**.

---

#### **Example 2: Infinite Solutions**

For the system:

$$
\begin{bmatrix}
1 & 2 & 3 \\
2 & 4 & 5 \\
3 & 6 & 7 \\
\end{bmatrix}
$$

- Applying row operations to get to REF:
  - ( $R_2 \leftarrow R_2 - 2R_1$ ), ( $R_3 \leftarrow R_3 - 3R_1$ ), etc.

- **Resulting REF**:
  $$
  \begin{bmatrix}
  1 & 2 & 3 \\
  0 & 0 & 0 \\
  0 & 0 & 0 \\
  \end{bmatrix}
  $$
- This system has **infinite solutions**, as one variable remains free.

---

#### **Example 3: No Solution**

Consider the system:

$$
\begin{bmatrix}
1 & 1 & 6 \\
2 & 3 & 8 \\
1 & 1 & 3 \\
\end{bmatrix}
$$

- **Row Operations**:
  - Simplifying the matrix using row operations like ( $R_2 \leftarrow R_2 - 2R_1$ ).

- **Resulting Matrix**:
  $$
  \begin{bmatrix}
  1 & 1 & 6 \\
  0 & 1 & 2 \\
  0 & 0 & 1 \\
  \end{bmatrix}
  $$
- The system gives **no solution**, as the last row suggests an inconsistency ($( 0 = 1 )$).

---

### **Free Variables and Parametric Form**

- **Free Variables**:
  - Variables that do not have a pivot in the REF matrix. These are set to arbitrary values.
  - **Example**: In the case of infinite solutions, the free variable represents the degrees of freedom in the solution.

- **Parametric Form**:
  - For systems with free variables, solutions are expressed in parametric form, where one or more variables are treated as free and the other variables are solved in terms of these free variables.
