---
title: Subqueries in Oracle SQL
description: Understanding SQL subqueries and nested queries in Oracle, including inner and outer queries, single-row and multiple-row subqueries, comparison operators, IN, ANY, ALL, and correlated subqueries with practical examples
lecture: Lecture 8
semester: semester-4
subject: database-administration
date: 2026-10-10
order: 9
---

# Database Administration — Subqueries in Oracle SQL

## Definition

A subquery is a SQL query written inside another SQL statement. It is also called an inner query or nested query.

The query containing the subquery is called the outer query. The inner query produces a result that the outer query uses to retrieve, update, or delete data.

Subqueries are commonly used in `WHERE`, `HAVING`, `FROM`, and `SELECT` clauses.

## Key Points

### 1. Basic Syntax of a Subquery

```sql
SELECT column_name
FROM table_name
WHERE column_name operator (
    SELECT column_name
    FROM another_table
);
```

The inner query is enclosed in parentheses. Its result is used by the outer query to filter or process data.

### 2. Example Tables

The following sample tables are used throughout this lesson.

EMPLOYEES

| EMPLOYEE_ID | NAME   | SALARY | DEPT_ID |
| ----------- | ------ | ------ | ------- |
| 101         | Ahmad  | 30000  | 10      |
| 102         | Bilal  | 45000  | 20      |
| 103         | Sara   | 60000  | 10      |
| 104         | Maryam | 40000  | 30      |

DEPARTMENTS

| DEPT_ID | DEPT_NAME | LOCATION |
| ------- | --------- | -------- |
| 10      | IT        | Kabul    |
| 20      | Finance   | Kabul    |
| 30      | HR        | Herat    |

### 3. Inner Query and Outer Query

Question: Find employees who earn more than the average salary.

```sql
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

The inner query calculates the average salary:

\\[ \frac{30000+45000+60000+40000}{4}=43750 \\]

The outer query selects employees earning more than 43,750.

Result:

| NAME  | SALARY |
| ----- | ------ |
| Bilal | 45000  |
| Sara  | 60000  |

### 4. Single-Row Subquery

A single-row subquery returns at most one row. It is commonly used with comparison operators such as `=`, `>`, `<`, `>=`, and `<=`.

Example: Find employees earning more than Ahmad.

```sql
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT salary
    FROM employees
    WHERE name = 'Ahmad'
);
```

The inner query returns Ahmad's salary, which is 30,000.

The outer query selects employees earning more than 30,000.

Result:

| NAME   | SALARY |
| ------ | ------ |
| Bilal  | 45000  |
| Sara   | 60000  |
| Maryam | 40000  |

### 5. Multiple-Row Subquery Using `IN`

A multiple-row subquery returns multiple rows. The `IN` operator checks whether a value matches any value in the returned set.

Example: Find employees working in departments located in Kabul.

```sql
SELECT name, dept_id
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM departments
    WHERE location = 'Kabul'
);
```

The inner query returns department IDs 10 and 20 because both departments are located in Kabul.

The outer query finds employees belonging to either department.

Result:

| NAME  | DEPT_ID |
| ----- | ------- |
| Ahmad | 10      |
| Bilal | 20      |
| Sara  | 10      |

### 6. Using `ANY` and `ALL`

The `ANY` and `ALL` operators compare a value with the values returned by a subquery.

- `ANY`: The comparison must be true for at least one value.
- `ALL`: The comparison must be true for every value.

#### Using `ANY`

Example: Find employees whose salary is greater than at least one salary in department 10.

```sql
SELECT name, salary, dept_id
FROM employees
WHERE salary > ANY (
    SELECT salary
    FROM employees
    WHERE dept_id = 10
);
```

Department 10 has salaries of 30,000 and 60,000.

The condition `> ANY` means the employee's salary must be greater than at least one of these values. In this example, the salary must be greater than 30,000.

Result:

| NAME   | SALARY | DEPT_ID |
| ------ | ------ | ------- |
| Bilal  | 45000  | 20      |
| Sara   | 60000  | 10      |
| Maryam | 40000  | 30      |

#### Using `ALL`

Example: Find employees whose salary is greater than every salary in department 10.

```sql
SELECT name, salary, dept_id
FROM employees
WHERE salary > ALL (
    SELECT salary
    FROM employees
    WHERE dept_id = 10
);
```

Department 10 has salaries of 30,000 and 60,000.

The condition `> ALL` means the salary must be greater than both values. Therefore, the salary must be greater than 60,000.

Result: No rows are returned because the highest salary in the sample data is 60,000, and the condition requires a salary strictly greater than 60,000.

### 7. Correlated Subquery

A correlated subquery refers to a column from the outer query. Unlike a simple independent subquery, it depends on the current row being processed by the outer query.

Example: Find employees earning more than the average salary of their own department.

```sql
SELECT e.name, e.salary, e.dept_id
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e.dept_id
);
```

Here:

- `e` is the alias for the outer `employees` table.
- `e2` is the alias for the inner `employees` table.
- `e2.dept_id = e.dept_id` compares the department in the inner query with the department of the current outer row.

Result:

| NAME | SALARY | DEPT_ID |
| ---- | ------ | ------- |
| Sara | 60000  | 10      |

Sara earns more than the average salary in department 10, which is 45,000. The other departments each contain only one employee, so their employees earn exactly their respective department averages.

### 8. Common Uses of Subqueries

Subqueries can answer questions that require a value or set of values from another query.

Common examples include:

- Finding employees earning above or below the average salary.
- Finding employees belonging to a particular department.
- Finding employees with the highest salary.
- Comparing salaries with department averages.
- Filtering records based on values in another table.

## Example / Code

The following examples cover common examination questions using the sample tables.

### 1. Find Employees Earning Below the Average Salary

```sql
SELECT name, salary
FROM employees
WHERE salary < (
    SELECT AVG(salary)
    FROM employees
);
```

### 2. Find Employees Working in the HR Department

```sql
SELECT name
FROM employees
WHERE dept_id = (
    SELECT dept_id
    FROM departments
    WHERE dept_name = 'HR'
);
```

### 3. Find the Highest-Paid Employee or Employees

```sql
SELECT name, salary
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);
```

### 4. Find Employees Earning Above Their Department Average

```sql
SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e.dept_id
);
```

## Explanation

1. In the first query, `AVG(salary)` calculates the average salary of all employees. The outer query returns employees earning less than that average.
2. In the second query, the inner query retrieves the department ID for HR. The outer query finds employees belonging to that department.
3. In the third query, `MAX(salary)` returns the highest salary. The outer query finds employees earning that amount, including ties if multiple employees share the highest salary.
4. In the fourth query, the inner query calculates the average salary for the department of each outer employee. The outer query returns employees whose salaries exceed their own department averages.

## Output (if any)

Based on the sample tables, the expected results are:

1\. Below-average salary

| NAME   | SALARY |
| ------ | ------ |
| Ahmad  | 30000  |
| Maryam | 40000  |

2\. Employees in HR

| NAME   |
| ------ |
| Maryam |

3\. Highest-paid employee

| NAME | SALARY |
| ---- | ------ |
| Sara | 60000  |

4\. Above department average

| NAME | SALARY |
| ---- | ------ |
| Sara | 60000  |

## Common Mistakes

- Using `=` when a subquery may return multiple rows. Use `IN`, `ANY`, or `ALL` when appropriate.
- Returning multiple columns from a subquery when the outer comparison expects a single value.
- Forgetting parentheses around a subquery.
- Comparing incompatible data types.
- Ignoring `NULL` values, which can affect comparisons and `IN` conditions.
- Confusing a single-row subquery with a single-value subquery. A query can return one row containing multiple columns, but a scalar comparison generally requires one column and at most one row.
- Forgetting to correlate the inner query with the outer query when comparing each employee against their own department average.
- Assuming `> ANY` means greater than every value. It means greater than at least one value.
- Assuming `> ALL` means greater than at least one value. It means greater than every value.
- Forgetting that a single-row subquery using a comparison operator must not return more than one row at runtime.

## Short Exam Notes (very concise revision points)

- Subquery: A query inside another SQL statement.
- Inner query: The query inside the subquery parentheses.
- Outer query: The query that uses the inner query's result.
- Single-row subquery: Returns at most one row; commonly uses `=`, `>`, or `<`.
- Multiple-row subquery: Returns multiple rows; can use `IN`, `ANY`, or `ALL`.
- `IN`: Matches any value in a set.
- `ANY`: The comparison must be true for at least one value.
- `ALL`: The comparison must be true for every value.
- Correlated subquery: Refers to a column from the outer query.
- `AVG()`: Calculates an average.
- `MAX()`: Returns the maximum value.
- Important: Use parentheses around subqueries and consider `NULL` values when evaluating conditions.
