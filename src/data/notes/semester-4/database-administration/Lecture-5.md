---
title: Single Row Character Functions
description: Understanding Oracle single-row character functions, including case conversion and character manipulation functions such as LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH, INSTR, LPAD, RPAD, and TRIM
lecture: Lecture 5
semester: semester-4
subject: database-administration
date: 2026-09-19
order: 12
---

# Database Administration — Lecture 05

## Definition

**Single-row functions** are Oracle SQL functions that operate on **each individual row** and return **one result for each row**.

For example, if a query returns 10 employees, a single-row function can produce 10 corresponding results.

> **Important correction:** Single-row functions are **not** the same as group functions.
> Group functions such as `SUM()`, `AVG()`, and `COUNT()` combine multiple rows and normally return one result for a group.

Single-row functions can be used in:

- `SELECT`
- `WHERE`
- Other SQL expressions

They can accept:

- Column values
- Literals
- Expressions
- Other functions

---

## Key Points

### 1. Case Conversion Functions

| Function    | Purpose                                   | Example                 | Result       |
| ----------- | ----------------------------------------- | ----------------------- | ------------ |
| `LOWER()`   | Converts all characters to lowercase      | `LOWER('SMITH')`        | `smith`      |
| `UPPER()`   | Converts all characters to uppercase      | `UPPER('smith')`        | `SMITH`      |
| `INITCAP()` | Capitalizes the first letter of each word | `INITCAP('john smith')` | `John Smith` |

### `LOWER()`

Converts a string to lowercase.

```sql
LOWER('SMITH')
```

Result:

```text
smith
```

### `UPPER()`

Converts a string to uppercase.

```sql
UPPER('smith')
```

Result:

```text
SMITH
```

### `INITCAP()`

Converts the first character of each word to uppercase and the remaining characters to lowercase.

```sql
INITCAP('john smith')
```

Result:

```text
John Smith
```

---

### 2. Character Manipulation Functions

| Function   | Purpose                                       |
| ---------- | --------------------------------------------- |
| `CONCAT()` | Joins two strings                             |
| `SUBSTR()` | Extracts part of a string                     |
| `LENGTH()` | Returns the number of characters              |
| `INSTR()`  | Finds the position of a substring             |
| `LPAD()`   | Adds characters to the left                   |
| `RPAD()`   | Adds characters to the right                  |
| `TRIM()`   | Removes specified leading/trailing characters |

---

## Example / Code

### `CONCAT()`

Joins two strings.

```sql
SELECT CONCAT('John', 'Doe') FROM dual;
```

Result:

```text
JohnDoe
```

For more than two strings, Oracle commonly uses the concatenation operator `||`:

```sql
SELECT 'John' || ' ' || 'Doe' FROM dual;
```

Result:

```text
John Doe
```

---

### `SUBSTR()`

Extracts a portion of a string.

Syntax:

```sql
SUBSTR(string, start_position, length)
```

Example:

```sql
SELECT SUBSTR('Good', 3, 2) FROM dual;
```

Result:

```text
od
```

> **Correction:** Your note says `SUBSTR(string, start, end)`. The third argument is **length**, not the ending position.

Another example:

```sql
SELECT SUBSTR('Database', 1, 4) FROM dual;
```

Result:

```text
Data
```

---

### `LENGTH()`

Returns the number of characters.

```sql
SELECT LENGTH('Good') FROM dual;
```

Result:

```text
4
```

---

### `INSTR()`

Returns the **position** of a substring inside another string.

```sql
SELECT INSTR('Good', 'o') FROM dual;
```

Result:

```text
2
```

Because:

```text
G o o d
1 2 3 4
```

> **Correction:** `INSTR()` does not count how many times a character occurs. It returns the **position of the first occurrence** by default.

For example:

```sql
SELECT INSTR('Database', 'a') FROM dual;
```

Result:

```text
2
```

---

### `LPAD()`

Adds characters to the **left side** until the string reaches the specified total length.

```sql
SELECT LPAD('King', 20, '*') FROM dual;
```

Result:

```text
****************King
```

Here, `20` means the **final total length**, not the number of `*` characters to add.

---

### `RPAD()`

Adds characters to the **right side**.

```sql
SELECT RPAD('King', 10, '*') FROM dual;
```

Result:

```text
King******
```

---

### `TRIM()`

Removes specified characters from the beginning and/or end of a string.

```sql
SELECT TRIM('$' FROM '$2,345$') FROM dual;
```

Result:

```text
2,345
```

For removing spaces:

```sql
SELECT TRIM('   Hello   ') FROM dual;
```

Result:

```text
Hello
```

---

### Case Conversion in `WHERE`

One important use of `LOWER()` is when the case of stored data is uncertain.

```sql
SELECT employee_id, last_name, department_id
FROM employees
WHERE LOWER(last_name) = 'smith';
```

This can find:

```text
SMITH
Smith
smith
sMiTh
```

because the column value is converted to lowercase before comparison.

Similarly:

```sql
SELECT employee_id, last_name, department_id
FROM employees
WHERE UPPER(last_name) = 'SMITH';
```

---

## Explanation

Think of **single-row functions** as functions that work **row by row**.

Suppose the table contains:

| LAST_NAME |
| --------- |
| SMITH     |
| KING      |
| JONES     |

If you use:

```sql
SELECT LOWER(last_name)
FROM employees;
```

Oracle applies `LOWER()` separately to each row:

```text
SMITH  → smith
KING   → king
JONES  → jones
```

Therefore, the function produces **one result for every row**.

### Easy way to remember the character functions

```text
LOWER   → lowercase
UPPER   → UPPERCASE
INITCAP → First Letter

CONCAT  → Join
SUBSTR  → Extract
LENGTH  → Count characters
INSTR   → Find position
LPAD    → Add to LEFT
RPAD    → Add to RIGHT
TRIM    → Remove from edges
```

---

## Output

For:

```sql
SELECT
    LOWER('INTRO TO SQL') AS lower_text,
    UPPER('Intro to SQL') AS upper_text,
    INITCAP('intro to sql') AS initcap_text
FROM dual;
```

The result is approximately:

| LOWER_TEXT   | UPPER_TEXT   | INITCAP_TEXT |
| ------------ | ------------ | ------------ |
| intro to sql | INTRO TO SQL | Intro To Sql |

For:

```sql
SELECT
    CONCAT('Good', 'Day'),
    SUBSTR('Good', 3, 2),
    LENGTH('Good'),
    INSTR('Good', 'o')
FROM dual;
```

Result:

| CONCAT  | SUBSTR | LENGTH | INSTR |
| ------- | ------ | -----: | ----: |
| GoodDay | od     |      4 |     2 |

---

## Common Mistakes

1. **Confusing single-row functions with group functions**

   ```text
   Single-row → one result per row
   Group       → combines multiple rows
   ```

2. **Thinking `SUBSTR()` uses an ending position**

   ```sql
   SUBSTR('Good', 3, 2)
   ```

   `2` means **length**, not ending position.

3. **Thinking `INSTR()` counts occurrences**

   `INSTR()` returns a **position**.

   ```sql
   INSTR('Good', 'o') → 2
   ```

4. **Confusing `LPAD()` and `RPAD()`**

   ```text
   LPAD → left
   RPAD → right
   ```

5. **Thinking the number in `LPAD()` is the number of padding characters**

   ```sql
   LPAD('King', 10, '*')
   ```

   means the **final string length is 10**.

6. **Thinking `TRIM()` only removes spaces**

   `TRIM()` can also remove a specified character from the beginning/end.

7. **Using `CONCAT()` for many strings**

   For multiple pieces, `||` is often clearer:

   ```sql
   first_name || ' ' || last_name
   ```

---

## Short Exam Notes

- **Single-row function:** operates on each row → one result per row.
- **Group function:** operates on groups of rows → one result per group.
- `LOWER()` → lowercase.
- `UPPER()` → uppercase.
- `INITCAP()` → first letter of each word uppercase.
- `CONCAT()` → joins strings.
- `SUBSTR()` → extracts part of a string.
- `SUBSTR(string, start, length)`.
- `LENGTH()` → number of characters.
- `INSTR()` → position of a substring.
- `LPAD()` → padding on the left.
- `RPAD()` → padding on the right.
- `TRIM()` → removes characters/spaces from string edges.
- `INSTR()` finds a **position**, not the number of occurrences.
