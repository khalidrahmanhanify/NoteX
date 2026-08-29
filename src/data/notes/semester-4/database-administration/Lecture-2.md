---
title: Database Administration
description: Oracle software components, types of database users, application developers, database users, containers and PDBs, SQL*Plus commands, user creation, privileges, tablespace quotas, and schemas
lecture: Lecture 2
semester: semester-4
subject: database-administration
date: 2026-08-29
order: 15
---

# Oracle Database Administration — Lecture 2

## Definition

Oracle Database uses different types of software components and user roles to allow applications and people to interact with a database securely.

This lecture focuses on:

- Oracle software components
- Types of Oracle users
- Containers and Pluggable Databases (PDBs)
- Connecting to Oracle
- Creating database users
- SQL\*Plus commands
- User authorization and privileges
- Tablespace quotas
- Schemas and accessing another user's objects

---

## Key Points

### 1. Oracle Software Components

At a high level, Oracle environments can involve:

1. **Database** — stores and manages data.
2. **Frontend / Development Software** — tools used to develop applications that interact with the database, such as Oracle development tools.

A typical application may communicate with the database through an application server or middleware.

**General architecture:**

```text
User
  ↓
Application / Forms
  ↓
Middleware / Application Server
  ↓
Oracle Database
  ↓
Middleware
  ↓
Application
  ↓
User
```

---

### 2. Types of Users in Oracle

There are several categories of people who work with an Oracle database. This lecture focuses particularly on **Application Developers** and **Database Users**.

### Application Developers

Application developers create software that communicates with the database.

Their responsibilities can include:

- Designing and developing database-driven applications
- Designing the database structure needed by an application
- Tuning applications for better performance
- Implementing application-level security
- Creating forms, interfaces, and application logic
- Writing SQL statements to interact with the database

They generally **do not perform database administration tasks** such as:

- Database backup and recovery
- Database startup/shutdown administration
- Database-wide administration
- Managing database storage

A developer may interact with the database through an application or middleware layer.

---

### Database Users

Database users are people who use data through an application or directly through database tools.

Depending on their privileges, they may be able to:

- Insert data
- Update data
- Delete data
- Retrieve data
- Execute permitted database operations

Their permissions are controlled through **database privileges**.

---

### 3. Connecting to Oracle

A database administrator can connect with administrative privileges.

Example:

```sql
CONNECT sys AS SYSDBA;
```

To check the currently connected user:

```sql
SHOW USER;
```

---

### 4. Containers and PDBs

Oracle Database uses a multitenant architecture.

Important terms:

- **CDB** — Container Database
- **Root Container** — the main/root container of the CDB
- **PDB** — Pluggable Database

For example:

```text
CDB
│
├── CDB$ROOT
│
└── FREEPDB1
```

When connected to the CDB, you may initially be in the root container.

To display available PDBs:

```sql
SHOW PDBS;
```

To check the current container:

```sql
SHOW CON_NAME;
```

To switch to a PDB:

```sql
ALTER SESSION SET CONTAINER = FREEPDB1;
```

> **Important:** A PDB is not simply a "database inside another database." It is a separate, pluggable database that operates within the multitenant container database architecture.

---

### 5. Spooling a Session

The `SPOOL` command can save the commands and output from a SQL\*Plus session to a file.

Example:

```sql
SPOOL C:\week2.txt
```

After this, SQL\*Plus records the session output into the specified file.

To stop spooling:

```sql
SPOOL OFF
```

---

### 6. Creating a User

A database administrator can create a user with:

```sql
CREATE USER user_name IDENTIFIED BY password;
```

For example:

```sql
CREATE USER khalid IDENTIFIED BY MyPassword123;
```

However, **creating a user does not automatically give the user permission to log in**.

The user needs the `CREATE SESSION` privilege.

```sql
GRANT CREATE SESSION TO khalid;
```

The user can then connect:

```sql
CONNECT khalid/MyPassword123@localhost:1521/freepdb1
```

The exact connection details depend on the Oracle installation and service configuration.

---

### 7. SQL\*Plus Commands vs SQL Statements

Your notes call these "two types of commands in CMD," but a more accurate distinction is:

#### SQL Statements

SQL statements are database language statements such as:

```sql
CREATE USER khalid IDENTIFIED BY MyPassword123;
```

```sql
GRANT CREATE SESSION TO khalid;
```

SQL statements normally end with a semicolon (`;`) when entered interactively.

#### SQL\*Plus Commands

SQL*Plus also has its own commands for controlling the SQL*Plus environment.

Examples:

```sql
SHOW USER
```

```sql
SHOW CON_NAME
```

```sql
SHOW PDBS
```

These are **SQL\*Plus commands**, not SQL statements, and they do not require a semicolon.

> **Exam point:** `SHOW USER` and `SHOW CON_NAME` are SQL\*Plus commands, not SQL queries.

---

### 8. Authorization and Privileges

Creating a user is only the beginning. The administrator must grant the appropriate privileges.

For example:

```sql
GRANT CREATE SESSION TO user_name;
```

This allows the user to establish a database session.

The older `CONNECT` role may also be granted:

```sql
GRANT CONNECT, CREATE SESSION TO user_name;
```

However, for learning purposes, it is useful to understand that **`CREATE SESSION` is the privilege that allows a user to log in**.

The principle of least privilege should be followed: users should receive only the permissions they actually need.

---

### 9. Tablespace Quota

A user may need space in a tablespace to create and store database objects.

For example:

```sql
ALTER USER user_name QUOTA UNLIMITED ON USERS;
```

This gives the user an unlimited quota in the `USERS` tablespace.

A specific quota can also be assigned:

```sql
ALTER USER user_name QUOTA 10M ON USERS;
```

Here:

- `10M` = 10 megabytes
- `USERS` = tablespace
- `UNLIMITED` = no quota limit for that user in that tablespace

> **Correction:** A tablespace quota does **not** mean the user is "authorized to access the tablespace" in every sense. It primarily controls how much space the user can allocate for objects in that tablespace. Other privileges are still required for specific operations.

---

### 10. Schema

A **schema** is a logical collection of database objects owned by a database user.

Objects can include:

- Tables
- Views
- Indexes
- Sequences
- Procedures
- Functions

For example:

```text
KHALID schema
│
├── STUDENT
├── COURSE
├── TEACHER
└── ENROLLMENT
```

If `KHALID` creates a table called `STUDENT`, that table belongs to the `KHALID` schema.

A useful relationship to remember is:

```text
User → owns → Schema → contains → Database Objects
```

In Oracle, when a user is created, a corresponding schema is associated with that user.

---

### 11. Granting Access to Another User's Object

Suppose `USER1` owns a table called `STUDENT`, and `USER2` needs to read it.

The correct syntax is:

```sql
GRANT SELECT ON user1.student TO user2;
```

Then `USER2` can query the table:

```sql
SELECT * FROM user1.student;
```

The important parts are:

```text
GRANT SELECT
      ↓
ON user1.student
      ↓
TO user2
```

`SELECT` gives permission to retrieve data from the table.

Other common object privileges include:

```sql
INSERT
UPDATE
DELETE
```

For example:

```sql
GRANT SELECT, INSERT ON user1.student TO user2;
```

---

## Example / Code

### Complete Example

Assume we want to create a user called `student1` in `FREEPDB1`.

First connect as an administrator:

```sql
CONNECT sys AS SYSDBA;
```

Check the current user:

```sql
SHOW USER;
```

Check available PDBs:

```sql
SHOW PDBS;
```

Switch to the PDB:

```sql
ALTER SESSION SET CONTAINER = FREEPDB1;
```

Verify the container:

```sql
SHOW CON_NAME;
```

Create the user:

```sql
CREATE USER student1 IDENTIFIED BY Student123;
```

Allow the user to log in:

```sql
GRANT CREATE SESSION TO student1;
```

Give the user a quota in the `USERS` tablespace:

```sql
ALTER USER student1 QUOTA 10M ON USERS;
```

Connect as the new user:

```sql
CONNECT student1/Student123@localhost:1521/freepdb1
```

---

## Explanation

The process can be remembered as:

```text
1. Connect as administrator
          ↓
2. Select the correct PDB
          ↓
3. Create the user
          ↓
4. Grant CREATE SESSION
          ↓
5. Give required privileges/quota
          ↓
6. Connect as the new user
```

For example:

```sql
CREATE USER student1 IDENTIFIED BY Student123;
```

only **creates the account**.

This:

```sql
GRANT CREATE SESSION TO student1;
```

allows the account to establish a database session.

This:

```sql
ALTER USER student1 QUOTA 10M ON USERS;
```

allows the user to allocate up to 10 MB of space in the `USERS` tablespace.

These are three different concepts:

| Operation              | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| `CREATE USER`          | Creates the database user                          |
| `GRANT CREATE SESSION` | Allows the user to log in                          |
| `QUOTA 10M ON USERS`   | Allows allocation of up to 10 MB in the tablespace |

---

## Output (if any)

### `SHOW USER`

```text
USER is "SYS"
```

### `SHOW CON_NAME`

When connected to the root:

```text
CDB$ROOT
```

After switching to the PDB:

```text
FREEPDB1
```

### `SHOW PDBS`

It displays the PDBs available in the container database, for example:

```text
CON_ID  CON_NAME    OPEN MODE
------  ----------  ----------
2       PDB$SEED    READ ONLY
3       FREEPDB1    READ WRITE
```

The exact output can vary depending on the Oracle installation and configuration.

---

## Common Mistakes

### 1. Confusing a user with a schema

A user and schema are closely related, but they are not exactly the same concept.

**Remember:**

> A schema is the collection of objects owned by a user.

---

### 2. Thinking `CREATE USER` allows login

This is incorrect:

```sql
CREATE USER student1 IDENTIFIED BY Student123;
```

The user still needs:

```sql
GRANT CREATE SESSION TO student1;
```

---

### 3. Forgetting to switch to the correct PDB

If the user should exist in `FREEPDB1`, make sure you are connected to that PDB before creating the user:

```sql
ALTER SESSION SET CONTAINER = FREEPDB1;
```

---

### 4. Incorrect `GRANT SELECT` syntax

Incorrect:

```sql
GRANT SELECT user1.student TO user2;
```

Correct:

```sql
GRANT SELECT ON user1.student TO user2;
```

The `ON` keyword is required when granting an object privilege.

---

### 5. Confusing `SHOW` commands with SQL statements

For example:

```sql
SHOW USER
```

is a SQL\*Plus command.

It is not equivalent to a SQL query such as:

```sql
SELECT USER FROM DUAL;
```

---

### 6. Confusing privileges with quotas

A **privilege** determines what operations a user can perform.

A **quota** determines how much space a user can allocate in a particular tablespace.

---

## Short Exam Notes (very concise revision points)

- Oracle environments involve the **database** and client/development software.
- **Application developers** develop applications that interact with databases.
- **Database users** interact with data according to their privileges.
- **CDB** = Container Database.
- **PDB** = Pluggable Database.
- `SHOW PDBS` → displays PDBs.
- `SHOW CON_NAME` → displays the current container.
- `ALTER SESSION SET CONTAINER = FREEPDB1;` → switches to a PDB.
- `SHOW USER` → displays the current user.
- `SPOOL C:\week2.txt` → records SQL\*Plus session output.
- `CREATE USER` → creates a database user.
- `GRANT CREATE SESSION` → allows a user to log in.
- `QUOTA` → controls a user's space allocation in a tablespace.
- `UNLIMITED` → removes the quota limit for that user/tablespace.
- **Schema** = logical collection of objects owned by a user.
- `GRANT SELECT ON user1.student TO user2;` → gives `user2` read access to `user1.student`.
- **Privilege ≠ quota**: privileges control operations; quotas control storage allocation.
