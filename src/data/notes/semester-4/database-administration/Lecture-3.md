---
title: Database Administration
description: Oracle software components, types of database users, application developers, database users, containers and PDBs, SQL*Plus commands, user creation, privileges, tablespace quotas, and schemas
lecture: Lecture 3
semester: semester-4
subject: database-administration
date: 2026-09-05
order: 14
---

# DBA — Transaction Control and User Information

## Definition

In Oracle Database, **transaction control** manages changes made by transactional SQL statements such as `INSERT`, `UPDATE`, and `DELETE`.

The two main transaction control statements are:

- `COMMIT` → permanently saves changes.
- `ROLLBACK` → undoes uncommitted changes.

---

## Key Points

### 1. COMMIT

- `COMMIT` permanently saves the changes made during the current transaction.
- `INSERT`, `UPDATE`, and `DELETE` are **DML (Data Manipulation Language)** statements and participate in transactions.
- After executing `COMMIT`, the changes cannot normally be undone using `ROLLBACK`.

```sql
COMMIT;
```

**Example:**

```sql
INSERT INTO students (id, name)
VALUES (123, 'Ahmad');

COMMIT;
```

The inserted record is now permanently saved.

---

### 2. ROLLBACK

- `ROLLBACK` undoes changes made during the current transaction that have **not yet been committed**.
- It can undo `INSERT`, `UPDATE`, and `DELETE` operations.
- Once a transaction has been committed, `ROLLBACK` cannot undo those changes.

```sql
ROLLBACK;
```

**Example:**

```sql
DELETE FROM students
WHERE id = 123;

ROLLBACK;
```

The deletion is undone, so the student record is restored.

---

### 3. DELETE

`DELETE` is a **DML statement** used to remove rows from a table.

#### Delete all rows

```sql
DELETE FROM students;
```

This deletes all rows from `students` but does **not** automatically make the deletion permanent. You can still use:

```sql
ROLLBACK;
```

if the transaction has not been committed.

#### Delete a specific row

```sql
DELETE FROM students
WHERE id = 123;
```

The `WHERE` clause specifies which row(s) should be deleted.

⚠️ **Important:** Be careful when using `DELETE` without a `WHERE` clause because it removes **all rows** from the table.

---

### 4. Checking Database Users

Oracle provides the **`DBA_USERS` data dictionary view** to obtain information about database users.

For example:

```sql
SELECT username, account_status
FROM DBA_USERS;
```

This displays:

- `USERNAME` → the database user's name.
- `ACCOUNT_STATUS` → whether the account is open, locked, expired, etc.

Access to `DBA_USERS` generally requires appropriate privileges.

If you are connected as `SYS`, you can query it directly:

```sql
SELECT username, account_status
FROM dba_users;
```

---

## Example / Code

### COMMIT and ROLLBACK

```sql
-- Insert a new student
INSERT INTO students (id, name)
VALUES (123, 'Ahmad');

-- Undo the insertion
ROLLBACK;
```

The inserted student is removed because the transaction was not committed.

Now:

```sql
INSERT INTO students (id, name)
VALUES (123, 'Ahmad');

-- Permanently save the insertion
COMMIT;

-- This cannot undo the previous INSERT
ROLLBACK;
```

The student remains in the table.

### DELETE with ROLLBACK

```sql
DELETE FROM students
WHERE id = 123;

ROLLBACK;
```

The deleted row is restored.

---

## Explanation

Think of a transaction as a **temporary workspace for database changes**:

```text
INSERT / UPDATE / DELETE
          ↓
   Uncommitted changes
       ↙       ↘
 ROLLBACK     COMMIT
    ↓            ↓
  Undo       Save permanently
```

For example:

```sql
DELETE FROM students
WHERE id = 123;
```

At this point, the deletion is part of the current transaction.

If you execute:

```sql
ROLLBACK;
```

the deletion is undone.

If you execute:

```sql
COMMIT;
```

the deletion is saved, and you cannot use `ROLLBACK` to restore the deleted row.

---

## Output (if any)

For:

```sql
SELECT username, account_status
FROM dba_users;
```

you may get results similar to:

```text
USERNAME       ACCOUNT_STATUS
-------------  --------------
SYS            OPEN
SYSTEM         OPEN
SCOTT          OPEN
HR             OPEN
```

The exact users and account statuses depend on your Oracle Database installation.

---

## Common Mistakes

1. **Forgetting `WHERE` with `DELETE`**

   ```sql
   DELETE FROM students;
   ```

   This deletes **every row**.

2. **Expecting `ROLLBACK` to undo a committed transaction**

   ```sql
   COMMIT;
   ROLLBACK;
   ```

   `ROLLBACK` cannot undo the changes already committed.

3. **Confusing `DELETE` with `DROP`**
   - `DELETE` removes rows from a table.
   - `DROP TABLE` removes the table itself.

4. **Thinking `SELECT` is transactional like `INSERT`, `UPDATE`, and `DELETE`**

   `SELECT` only retrieves data; it does not modify table data.

5. **Assuming `COMMIT` is required after every SQL statement**

   `COMMIT` is relevant to saving transactional DML changes. You should understand when transactions are committed rather than blindly committing after every statement.

---

## Short Exam Notes

- **COMMIT** → permanently saves the current transaction.
- **ROLLBACK** → undoes uncommitted DML changes.
- **INSERT, UPDATE, DELETE** → DML statements that participate in transactions.
- After **COMMIT**, `ROLLBACK` cannot undo those changes.
- `DELETE FROM students;` → deletes all rows.
- `DELETE ... WHERE ...;` → deletes selected rows.
- `DBA_USERS` → Oracle data dictionary view containing database-user information.
- `ACCOUNT_STATUS` → shows the status of a user account.
