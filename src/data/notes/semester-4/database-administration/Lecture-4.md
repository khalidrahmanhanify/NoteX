---
title: Database Administration
description: Oracle software components, types of database users, application developers, database users, containers and PDBs, SQL*Plus commands, user creation, privileges, tablespace quotas, and schemas
lecture: Lecture 4
semester: semester-4
subject: database-administration
date: 2026-09-12
order: 13
---

# Database Functions: Number Functions and Group Functions

## Definition

SQL functions are built-in operations used to **manipulate data and produce calculated results**.

In this lecture, the main topics are:

- Number functions: `ROUND`, `TRUNC`, `MOD`
- Group functions: `AVG`, `COUNT`, `MAX`, `MIN`, `SUM`
- `DISTINCT` with group functions
- `GROUP BY` clause
- Grouping by multiple columns
- `HAVING` clause

---

## Key Points

### 1. Number Functions

Number functions manipulate numeric values.

| Function                | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `ROUND(number, n)`      | Rounds a number to `n` decimal places    |
| `TRUNC(number, n)`      | Truncates a number to `n` decimal places |
| `MOD(number1, number2)` | Returns the remainder of division        |

### `ROUND()`

Rounds a number to the specified number of decimal places.

```sql
ROUND(43.826, 2)  -- 43.83
ROUND(43.826, 0)  -- 44
ROUND(43.826, -1) -- 40
```

### `TRUNC()`

Truncates a number to the specified number of decimal places **without rounding**.

```sql
TRUNC(43.826, 2)  -- 43.82
TRUNC(43.826, 0)  -- 43
TRUNC(43.826, -1) -- 40
```

### `MOD()`

Returns the remainder after dividing one number by another.

```sql
MOD(17, 3) -- 2
```

> **Correction:** Your notes had `TURNC` and `ROUND(17, 3)`. The correct function names/examples are `TRUNC` and `MOD(17, 3)`.

---

### 2. Group Functions

Group functions operate on **sets of rows** and return a single result for the group.

The main group functions are:

- `AVG()` — calculates the average
- `COUNT()` — counts rows or non-null values
- `MAX()` — finds the maximum value
- `MIN()` — finds the minimum value
- `SUM()` — calculates the total

---

### `AVG()`

Calculates the average of numeric values.

```sql
SELECT AVG(salary)
FROM employees;
```

### `COUNT()`

Counts rows or non-null values.

There are two important forms:

```sql
COUNT(*)
```

Counts **all rows**.

```sql
COUNT(expression)
```

Counts only rows where the expression is **not `NULL`**.

Example:

```sql
SELECT COUNT(*)
FROM employees
WHERE department_id = 50;
```

```sql
SELECT COUNT(commission_pct)
FROM employees
WHERE department_id = 80;
```

---

### `MAX()`

Returns the largest value.

```sql
SELECT MAX(salary)
FROM employees;
```

`MAX()` can be used with:

- Numeric values
- Character values
- Date values

---

### `MIN()`

Returns the smallest value.

```sql
SELECT MIN(salary)
FROM employees;
```

`MIN()` can also be used with:

- Numeric values
- Character values
- Date values

---

### `SUM()`

Calculates the total of numeric values.

```sql
SELECT SUM(salary)
FROM employees;
```

`AVG()` and `SUM()` are used with **numeric data**.

---

### 3. `DISTINCT` Keyword

`DISTINCT` removes duplicate values from consideration.

```sql
SELECT COUNT(DISTINCT department_id)
FROM employees;
```

This returns the number of **unique, non-null department IDs**.

> **Correction:** `COUNT(DISTINCT *)` is not the correct syntax for counting distinct values. Use `COUNT(DISTINCT column_name)`.

---

### 4. `GROUP BY` Clause

`GROUP BY` divides rows into smaller groups and allows a group function to produce **one result for each group**.

Basic syntax:

```sql
SELECT column, group_function(column)
FROM table
[WHERE condition]
[GROUP BY group_by_expression]
[ORDER BY column];
```

Example:

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```

This calculates the **average salary for each department**.

---

### Important `GROUP BY` Rule

Any column in the `SELECT` list that is **not inside a group function** must normally appear in the `GROUP BY` clause.

Correct:

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```

The `department_id` column is selected and therefore appears in `GROUP BY`.

The `GROUP BY` column does **not have to appear in the `SELECT` list**:

```sql
SELECT AVG(salary)
FROM employees
GROUP BY department_id;
```

Here, the results are grouped by department, but the department ID itself is not displayed.

---

### 5. Grouping by Multiple Columns

You can group data using more than one column.

Example:

```sql
SELECT department_id, job_id, SUM(salary)
FROM employees
GROUP BY department_id, job_id
ORDER BY department_id;
```

This calculates the **total salary for each job within each department**.

For example:

```text
Department  Job       Total Salary
10          Manager   ...
10          Clerk     ...
20          Manager   ...
20          Clerk     ...
```

---

### 6. `HAVING` Clause

`HAVING` is used to **filter groups after group functions have been calculated**.

Syntax:

```sql
SELECT column, group_function(column)
FROM table
[WHERE condition]
[GROUP BY group_by_expression]
[HAVING group_condition]
[ORDER BY column];
```

Example:

```sql
SELECT department_id, MAX(salary)
FROM employees
GROUP BY department_id
HAVING MAX(salary) > 10000;
```

This displays only departments whose **maximum salary is greater than 10,000**.

---

## Example / Code

Consider the `employees` table.

### Number functions

```sql
SELECT
    ROUND(43.826, 2),
    TRUNC(43.826, 2),
    MOD(17, 3)
FROM dual;
```

### Group functions

```sql
SELECT
    AVG(salary),
    MAX(salary),
    MIN(salary),
    SUM(salary)
FROM employees;
```

### Grouping

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```

### Multiple-column grouping

```sql
SELECT department_id, job_id, SUM(salary)
FROM employees
GROUP BY department_id, job_id
ORDER BY department_id;
```

### Filtering groups

```sql
SELECT department_id, MAX(salary)
FROM employees
GROUP BY department_id
HAVING MAX(salary) > 10000;
```

---

## Explanation

The most important concept in this lecture is the difference between **`WHERE` and `HAVING`**.

### `WHERE`

Filters **individual rows before grouping**.

```sql
SELECT department_id, AVG(salary)
FROM employees
WHERE salary > 5000
GROUP BY department_id;
```

Process:

```text
Rows → WHERE → GROUP BY → Group Function → Result
```

### `HAVING`

Filters **groups after grouping and group functions**.

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 5000;
```

Process:

```text
Rows → GROUP BY → Group Function → HAVING → Result
```

### Example of both

```sql
SELECT department_id, AVG(salary)
FROM employees
WHERE salary > 3000
GROUP BY department_id
HAVING AVG(salary) > 5000;
```

Meaning:

1. `WHERE` removes employees whose salary is not above 3000.
2. Remaining employees are grouped by department.
3. `AVG()` calculates the average salary for each department.
4. `HAVING` keeps only departments whose average is above 5000.

---

## Output (if any)

For:

```sql
SELECT
    ROUND(43.826, 2),
    TRUNC(43.826, 2),
    MOD(17, 3)
FROM dual;
```

The results are:

```text
ROUND   TRUNC   MOD
43.83   43.82   2
```

For:

```sql
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```

The output contains **one row per department**, with its corresponding average salary.

---

## Common Mistakes

1. **Writing `TURNC` instead of `TRUNC`.**

   ```sql
   TRUNC(43.826, 2)
   ```

2. **Using `ROUND()` instead of `MOD()` for remainder.**

   ```sql
   MOD(17, 3) -- 2
   ```

3. **Confusing `ROUND()` and `TRUNC()`.**
   - `ROUND()` can change the value by rounding.
   - `TRUNC()` simply cuts off digits.

4. **Forgetting the `GROUP BY` column.**

   ```sql
   SELECT department_id, AVG(salary)
   FROM employees
   GROUP BY department_id;
   ```

5. **Using `WHERE` to filter group-function results.**
   Use `HAVING` instead:

   ```sql
   HAVING AVG(salary) > 5000
   ```

6. **Thinking `COUNT(column)` counts all rows.**
   `COUNT(column)` ignores `NULL` values.

7. **Using `COUNT(DISTINCT *)`.**
   Use:

   ```sql
   COUNT(DISTINCT department_id)
   ```

---

## Short Exam Notes

- `ROUND()` → rounds a number.
- `TRUNC()` → truncates a number without rounding.
- `MOD()` → returns the remainder.
- `AVG()` → average.
- `COUNT()` → count.
- `MAX()` → largest value.
- `MIN()` → smallest value.
- `SUM()` → total.
- `COUNT(*)` → counts all rows.
- `COUNT(expr)` → counts non-null values.
- `COUNT(DISTINCT expr)` → counts unique, non-null values.
- `GROUP BY` → creates groups of rows.
- Non-grouped selected columns must be in `GROUP BY`.
- `WHERE` → filters rows **before** grouping.
- `HAVING` → filters groups **after** grouping.
- Multiple columns can be used in `GROUP BY`.
