---
title: Single Row Character Functions
description: Understanding Oracle single-row character functions, including case conversion and character manipulation functions such as LOWER, UPPER, INITCAP, CONCAT, SUBSTR, LENGTH, INSTR, LPAD, RPAD, and TRIM
lecture: Lecture 6
semester: semester-4
subject: database-administration
date: 2026-09-26
order: 11
---

# Database Administration — Lecture 06

## Definition

This lecture covers **creating tables from existing data using subqueries**, modifying table structures with the **`ALTER TABLE`** statement, changing table access modes, and applying these concepts to practical database scenarios.

---

## Key Points

### 1. Creating a Table Using a Subquery

Oracle allows you to create a new table and populate it with data from an existing table using:

```sql
CREATE TABLE table_name AS
SELECT ...
FROM ...
WHERE ...;
```

This is called **CTAS (Create Table As Select)**.

Example:

```sql
CREATE TABLE dept80 AS
SELECT employee_id,
       last_name,
       salary * 12 AS ANNSAL,
       hire_date
FROM employees
WHERE department_id = 80;
```

This creates `dept80` containing:

- `employee_id`
- `last_name`
- `ANNSAL` — annual salary
- `hire_date`

Only employees whose `department_id` is `80` are copied.

To inspect the new table:

```sql
DESCRIBE dept80;
```

### Important

CTAS copies the **selected data and column definitions**, but it does **not automatically copy all constraints, indexes, triggers, etc.** from the original table.

---

### 2. `ALTER TABLE`

The `ALTER TABLE` statement changes the structure or properties of an existing table.

Common operations:

| Operation       | Purpose                    |
| --------------- | -------------------------- |
| `ADD`           | Add a new column           |
| `MODIFY`        | Change a column definition |
| `DROP COLUMN`   | Remove a column            |
| `RENAME COLUMN` | Change a column's name     |
| `READ ONLY`     | Prevent data changes       |
| `READ WRITE`    | Allow data changes again   |

---

### 3. Adding a Column

Syntax:

```sql
ALTER TABLE table_name
ADD column_name column_definition;
```

Example:

```sql
ALTER TABLE customers
ADD customer_name VARCHAR2(45);
```

Multiple columns can also be added:

```sql
ALTER TABLE customers
ADD (
    customer_name VARCHAR2(45),
    city VARCHAR2(40)
);
```

---

### 4. Modifying a Column

The `MODIFY` clause changes an existing column's definition.

Syntax:

```sql
ALTER TABLE table_name
MODIFY column_name column_type;
```

Example:

```sql
ALTER TABLE customers
MODIFY customer_name VARCHAR2(60);
```

This changes the maximum size of `customer_name` from 45 to 60 characters.

**Important:** You cannot arbitrarily change a column's datatype if existing data is incompatible with the new datatype.

---

### 5. Defining a Default Value

A **default value** is automatically used when an `INSERT` statement does not provide a value for that column.

Example:

```sql
ALTER TABLE customers
ADD city VARCHAR2(40) DEFAULT 'Kabul';
```

Then:

```sql
INSERT INTO customers (customer_name)
VALUES ('Ahmad');
```

The `city` column automatically receives:

```text
Kabul
```

A default value is used when the column is **omitted from the `INSERT` statement**.

---

### 6. Renaming a Column

Syntax:

```sql
ALTER TABLE table_name
RENAME COLUMN old_name TO new_name;
```

Example:

```sql
ALTER TABLE customers
RENAME COLUMN city TO customer_city;
```

The column is now called `customer_city`.

---

### 7. Dropping a Column

To permanently remove a column:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

Example:

```sql
ALTER TABLE customers
DROP COLUMN customer_city;
```

The column and its data are removed from the table.

---

### 8. Read-Only and Read-Write Tables

Oracle can temporarily make a table **read-only**.

```sql
ALTER TABLE employees READ ONLY;
```

While the table is read-only, operations that modify its data are prevented.

After maintenance:

```sql
ALTER TABLE employees READ WRITE;
```

This allows modifications again.

**Purpose:** Read-only mode can be useful when you want to prevent changes during certain maintenance or reporting periods.

---

## Example / Code

### Complete `ALTER TABLE` Example

```sql
-- Add a column
ALTER TABLE customers
ADD phone VARCHAR2(20);

-- Modify the column
ALTER TABLE customers
MODIFY phone VARCHAR2(25);

-- Add a column with a default value
ALTER TABLE customers
ADD city VARCHAR2(40) DEFAULT 'Kabul';

-- Rename a column
ALTER TABLE customers
RENAME COLUMN phone TO phone_number;

-- Drop a column
ALTER TABLE customers
DROP COLUMN phone_number;
```

### Creating a Table from a Subquery

```sql
CREATE TABLE dept80 AS
SELECT employee_id,
       last_name,
       salary * 12 AS annual_salary,
       hire_date
FROM employees
WHERE department_id = 80;
```

---

## Explanation

The following example:

```sql
CREATE TABLE dept80 AS
SELECT employee_id,
       last_name,
       salary * 12 AS annual_salary,
       hire_date
FROM employees
WHERE department_id = 80;
```

works in two stages:

1. Oracle creates a new table called `dept80`.
2. It executes the `SELECT` query and inserts the resulting rows into the new table.

The expression:

```sql
salary * 12 AS annual_salary
```

calculates the annual salary from the monthly salary.

The condition:

```sql
WHERE department_id = 80
```

ensures that only employees belonging to department 80 are copied.

---

# Practical Scenario 1 — Retail Database

## Definition

A retail company sells products to customers and purchases products from suppliers.

The database should represent customers, products, sales, suppliers, and purchases.

## Key Points

### Main Entities

A suitable design could contain:

- **Customer**
- **Product**
- **Sale**
- **Sale_Item**
- **Supplier**
- **Purchase**
- **Purchase_Item**

### Relationships

```text
Customer
   |
   | 1:N
   ↓
Sale
   |
   | 1:N
   ↓
Sale_Item
   |
   | N:1
   ↓
Product
```

For purchasing:

```text
Supplier
   |
   | 1:N
   ↓
Purchase
   |
   | 1:N
   ↓
Purchase_Item
   |
   | N:1
   ↓
Product
```

A separate `Sale_Item` table is important because **one sale can contain multiple products**, and the same product can appear in many sales.

---

## Example / Code

A simplified Oracle implementation:

```sql
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    phone VARCHAR2(20)
);

CREATE TABLE products (
    product_id NUMBER PRIMARY KEY,
    product_name VARCHAR2(100),
    price NUMBER(10,2)
);

CREATE TABLE suppliers (
    supplier_id NUMBER PRIMARY KEY,
    supplier_name VARCHAR2(100)
);

CREATE TABLE sales (
    sale_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    sale_date DATE,
    FOREIGN KEY (customer_id)
        REFERENCES customers(customer_id)
);

CREATE TABLE sale_items (
    sale_id NUMBER,
    product_id NUMBER,
    quantity NUMBER,
    unit_price NUMBER(10,2),
    PRIMARY KEY (sale_id, product_id),
    FOREIGN KEY (sale_id)
        REFERENCES sales(sale_id),
    FOREIGN KEY (product_id)
        REFERENCES products(product_id)
);

CREATE TABLE purchases (
    purchase_id NUMBER PRIMARY KEY,
    supplier_id NUMBER,
    purchase_date DATE,
    FOREIGN KEY (supplier_id)
        REFERENCES suppliers(supplier_id)
);

CREATE TABLE purchase_items (
    purchase_id NUMBER,
    product_id NUMBER,
    quantity NUMBER,
    unit_cost NUMBER(10,2),
    PRIMARY KEY (purchase_id, product_id),
    FOREIGN KEY (purchase_id)
        REFERENCES purchases(purchase_id),
    FOREIGN KEY (product_id)
        REFERENCES products(product_id)
);
```

---

## Explanation

The important design idea is separating the **transaction header** from its **items**.

For example:

```text
Sale #1001
 ├── Product A × 2
 ├── Product B × 1
 └── Product C × 5
```

`Sales` stores information about the transaction itself, while `Sale_Items` stores the individual products.

This avoids putting multiple products into one column and follows good relational database design.

---

## Output

The database structure represents:

```text
Customer 1 ────< Sale 1 ────< Sale_Item >──── Product


Supplier 1 ────< Purchase 1 ────< Purchase_Item >──── Product
```

`1:N` means **one-to-many**.

---

## Common Mistakes

- Putting multiple products in a single column.
- Creating only `Sales` without a `Sale_Items` table.
- Forgetting primary keys.
- Forgetting foreign keys.
- Storing supplier information directly in every product row when products can have multiple suppliers.
- Using `VARCHAR` instead of Oracle's `VARCHAR2`.
- Using a single `price` field for a historical sale without considering that product prices may change.

---

# Practical Scenario 2 — Masking Phone Numbers

## Definition

**Data masking** hides part of sensitive information while keeping enough information for identification.

For example:

```text
Original: 0791234333
Masked:   079*****33
```

---

## Example / Code

A simple Oracle query using `SUBSTR()` and `RPAD()` is:

```sql
SELECT phone,
       SUBSTR(phone, 1, 3) ||
       RPAD('*', LENGTH(phone) - 5, '*') ||
       SUBSTR(phone, -2) AS masked_phone
FROM customers;
```

For:

```text
0791234333
```

the result is:

```text
079*****33
```

---

## Explanation

### `SUBSTR()`

Extracts part of a string.

```sql
SUBSTR(phone, 1, 3)
```

takes the first 3 characters:

```text
079
```

And:

```sql
SUBSTR(phone, -2)
```

takes the last 2 characters:

```text
33
```

### `RPAD()`

Adds characters until a specified length is reached.

```sql
RPAD('*', 5, '*')
```

produces:

```text
*****
```

In the query:

```sql
RPAD('*', LENGTH(phone) - 5, '*')
```

the number of `*` characters depends on the phone-number length.

### Concatenation

Oracle's `||` operator joins strings:

```sql
'079' || '*****' || '33'
```

produces:

```text
079*****33
```

### `CONCAT()`

Oracle also provides `CONCAT()`:

```sql
CONCAT('079', '*****')
```

produces:

```text
079*****
```

However, `CONCAT()` accepts only **two arguments**, so `||` is generally more convenient when combining several pieces.

### `LPAD()`

`LPAD()` pads a string on the **left**:

```sql
LPAD('33', 5, '*')
```

produces:

```text
***33
```

For phone masking, `LPAD()` is not necessary in the simplest solution, but it is useful when you need to pad the beginning of a value.

---

## Output

For example:

| Original     | Masked       |
| ------------ | ------------ |
| `0791234333` | `079*****33` |
| `0705551234` | `070*****34` |

---

## Common Mistakes

- Using `SUBSTR(phone, 1, 2)` when three digits must remain visible.
- Using `SUBSTR(phone, 3)` when the goal is to keep only the first three digits.
- Forgetting that Oracle string positions can be negative.
- Assuming `CONCAT()` accepts three or more arguments.
- Hard-coding five `*` characters when phone numbers can have different lengths.
- Masking the original database value instead of masking it only in the report/query output.

---

## Short Exam Notes

- **CTAS:** `CREATE TABLE ... AS SELECT ...`
- CTAS creates a table from the result of a query.
- `DESCRIBE table_name` shows table structure.
- **`ALTER TABLE ADD`** → adds columns.
- **`ALTER TABLE MODIFY`** → changes a column definition.
- **`ALTER TABLE DROP COLUMN`** → removes a column.
- **`ALTER TABLE RENAME COLUMN`** → renames a column.
- **`DEFAULT`** → supplies a value when a column is omitted from an `INSERT`.
- **`READ ONLY`** → prevents table modifications.
- **`READ WRITE`** → allows modifications again.
- `SUBSTR()` → extracts part of a string.
- `LPAD()` → pads on the left.
- `RPAD()` → pads on the right.
- `CONCAT()` → joins two strings.
- `||` → Oracle string concatenation operator.
- **1:N** → one-to-many relationship.
- Transaction header and transaction items should normally be stored in separate related tables.
