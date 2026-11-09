---
title: Controlling User Access in Oracle Database
description: Understanding Oracle database security and user access management, including system and object privileges, creating users, granting privileges, tablespace quotas, roles, granting and revoking privileges, and managing database permissions using SQL statements
lecture: Lecture 9
semester: semester-4
subject: database-administration
date: 2026-11-07
order: 8
---

# Oracle Database Administration – Controlling User Access

## Definition

Database Administration (DBA) is the process of managing, securing, and maintaining a database to ensure that data is stored safely and accessed only by authorized users.

Controlling User Access is the process of managing database users and assigning privileges to determine what actions each user can perform.

Database security is divided into two main categories:

1. System Security: Controls access to the database system and determines which operations users can perform.
2. Data Security: Controls access to database objects and determines how users can manipulate data.

### Important Terms

- Privilege: Permission given to a user to perform a specific action.
- Schema: A collection of database objects owned by a database user, such as tables, views, sequences, and procedures.
- Role: A named collection of privileges that can be granted to users.
- DBA (Database Administrator): A person responsible for managing, maintaining, and securing the database.

## Key Points

### 1. Types of Privileges

Oracle database privileges are divided into two main types:

A. System Privileges

System privileges allow users to perform particular actions within the database.

Examples:

- `CREATE SESSION` – Allows a user to connect to the database.
- `CREATE TABLE` – Allows a user to create tables in their own schema.
- `CREATE SEQUENCE` – Allows a user to create sequences.
- `CREATE VIEW` – Allows a user to create views.
- `CREATE PROCEDURE` – Allows a user to create stored procedures.

The DBA has high-level system privileges, such as:

- Creating new users.
- Removing users.
- Creating and managing database objects.
- Granting privileges to other users.

B. Object Privileges

Object privileges allow users to perform specific operations on database objects owned by another user.

Examples:

- `SELECT` – Read data from a table.
- `INSERT` – Add new records.
- `UPDATE` – Modify existing records.
- `DELETE` – Remove records.
- `EXECUTE` – Execute a stored procedure or function.

Difference Between System and Object Privileges

| System Privileges                                                   | Object Privileges                                          |
| ------------------------------------------------------------------- | ---------------------------------------------------------- |
| Control database-level actions.                                     | Control access to specific objects.                        |
| Example: `CREATE TABLE`                                             | Example: `SELECT`                                          |
| Granted by authorized administrators or users with grant authority. | Usually granted by the object owner or an authorized user. |

### 2. Creating Users

The Database Administrator (DBA) creates users using the `CREATE USER` statement.

After creating a user, the DBA must grant appropriate privileges so that the user can connect to and work with the database.

### 3. User System Privileges

An application developer may need the following system privileges:

- `CREATE SESSION`
- `CREATE TABLE`
- `CREATE SEQUENCE`
- `CREATE VIEW`
- `CREATE PROCEDURE`

Users should receive only the privileges required to perform their jobs. This is called the Principle of Least Privilege.

### 4. User Space (Tablespace Quota)

A user needs sufficient storage space to create objects and insert data.

In Oracle, storage is managed through tablespaces.

The DBA can assign a storage quota to a user, determining how much space that user can use in a particular tablespace.

Important distinction:

- A tablespace provides physical database storage allocation.
- A quota determines how much storage a user is allowed to use in that tablespace.
- A user generally needs appropriate object privileges and sufficient quota to create and populate tables.

### 5. Object Ownership

Object privileges vary depending on the database object.

Important rules:

- The owner of an object has full privileges over that object.
- The owner can grant specific object privileges to other users.
- Other users must receive appropriate privileges before accessing objects they do not own.

### 6. Roles

A Role is a named collection of privileges that can be granted to one or more users.

Instead of granting privileges individually to every user, the DBA can create a role, assign privileges to it, and then grant that role to users.

Advantages of Roles:

- Simplify privilege management.
- Reduce repeated privilege assignments.
- Make database security easier to manage.
- Allow multiple users to share the same permissions.

### 7. Granting Object Privileges

The `GRANT` statement is used to give users or roles permission to access database objects.

Object privileges can also be restricted to specific columns when granting `UPDATE`.

### 8. Revoking Object Privileges

The `REVOKE` statement is used to remove object privileges previously granted to other users or roles.

If privileges were granted using `WITH GRANT OPTION`, revoking the original privilege also revokes dependent grants made by that user.

## Example / Code

The following examples demonstrate user creation, system privileges, tablespace quotas, roles, object privileges, and revoking privileges in Oracle Database 26ai.

### 1. Creating a User

```
CREATE USER demo
IDENTIFIED BY demo123;
```

### 2. Granting System Privileges

```
GRANT CREATE SESSION,
      CREATE TABLE,
      CREATE SEQUENCE,
      CREATE VIEW,
      CREATE PROCEDURE
TO demo;
```

### 3. Assigning User Space

```
ALTER USER demo
QUOTA 100M ON USERS;
```

This gives the user `demo` a maximum quota of 100 MB in the `USERS` tablespace.

### 4. Creating a Role

```
CREATE ROLE developer_role;
```

### 5. Granting Privileges to a Role

```
GRANT CREATE SESSION,
      CREATE TABLE,
      CREATE VIEW
TO developer_role;
```

### 6. Granting a Role to Users

```
GRANT developer_role TO demo;
```

### 7. Granting Object Privileges

Granting SELECT permission on the EMPLOYEES table:

```
GRANT SELECT
ON employees
TO demo;
```

Granting SELECT and INSERT permissions:

```
GRANT SELECT, INSERT
ON departments
TO demo;
```

### 8. Granting UPDATE Privileges on Specific Columns

```
GRANT UPDATE (salary, department_id)
ON employees
TO demo;
```

This allows the user to update only the `salary` and `department_id` columns of the EMPLOYEES table through this privilege.

### 9. Granting Privileges with Grant Option

```
GRANT SELECT
ON employees
TO demo
WITH GRANT OPTION;
```

This allows `demo` to grant the SELECT privilege on the EMPLOYEES table to other users.

### 10. Revoking Object Privileges

Revoke SELECT and INSERT privileges from the demo user on the DEPARTMENTS table:

```
REVOKE SELECT, INSERT
ON departments
FROM demo;
```

## Explanation

### 1. Creating Users

```
CREATE USER demo
IDENTIFIED BY demo123;
```

- `CREATE USER` creates a new database account.
- `demo` is the username.
- `IDENTIFIED BY` specifies the user's password.
- `demo123` is the password.

Important: Creating a user does not automatically give that user permission to connect to the database.

### 2. Granting System Privileges

```
GRANT CREATE SESSION TO demo;
```

- `GRANT` gives permission.
- `CREATE SESSION` allows the user to connect to Oracle.
- `TO demo` specifies the user receiving the privilege.

Without `CREATE SESSION`, the user cannot establish a normal database session.

### 3. User Space

```
ALTER USER demo QUOTA 100M ON USERS;
```

- `ALTER USER` modifies an existing user.
- `QUOTA 100M` assigns a maximum storage allocation of 100 MB.
- `ON USERS` specifies the tablespace.

A user with `CREATE TABLE` but insufficient tablespace quota may receive an error when attempting to create a table that requires storage.

### 4. Creating and Granting Privileges to a Role

```
CREATE ROLE developer_role;
```

Creates a new role named `developer_role`.

```
GRANT CREATE TABLE TO developer_role;
```

Assigns the CREATE TABLE privilege to the role.

```
GRANT developer_role TO demo;
```

Assigns the role to the demo user.

The user can receive the privileges through the assigned role instead of receiving every privilege individually.

### 5. Granting Object Privileges

```
GRANT SELECT ON employees TO demo;
```

- `GRANT` gives permission.
- `SELECT` allows reading data.
- `ON employees` identifies the table.
- `TO demo` identifies the user receiving permission.

Note: When accessing another user's table, use the owner's schema name if necessary:

```
SELECT * FROM hr.employees;
```

### 6. Updating Specific Columns

```
GRANT UPDATE (salary)
ON employees
TO demo;
```

This grants permission to update only the `salary` column through this specific privilege.

The user cannot update other columns unless they receive additional permissions.

### 7. Revoking Object Privileges

```
REVOKE SELECT, INSERT
ON departments
FROM demo;
```

- `REVOKE` removes permissions.
- `SELECT, INSERT` specifies the privileges being removed.
- `ON departments` identifies the table.
- `FROM demo` identifies the user losing the permissions.

WITH GRANT OPTION:

If a user receives an object privilege with `WITH GRANT OPTION` and grants it to another user, revoking the original grant can also revoke the dependent grant.

## Output (if any)

The SQL statements above do not produce fixed query result tables. Their successful execution produces confirmation messages in SQL\*Plus or Oracle SQL Developer.

Examples:

```
User created.
```

```
Grant succeeded.
```

```
Role created.
```

```
User altered.
```

```
Revoke succeeded.
```

The exact messages may vary depending on the Oracle interface being used.

## Common Mistakes

1. Creating a user without granting CREATE SESSION: The user cannot connect normally to the database.
2. Confusing system and object privileges: `CREATE TABLE` is a system privilege, whereas `SELECT` is an object privilege.
3. Forgetting tablespace quota: A user may have permission to create tables but insufficient storage quota.
4. Confusing roles with privileges: A role is a collection of privileges, not an individual privilege.
5. Granting privileges on the wrong object: Object privileges must specify the correct table, view, or other database object.
6. Using GRANT instead of REVOKE: `GRANT` gives permissions, whereas `REVOKE` removes them.
7. Assuming CREATE USER automatically grants permissions: A newly created user needs appropriate privileges before performing database operations.
8. Confusing WITH GRANT OPTION and WITH ADMIN OPTION: `WITH GRANT OPTION` applies to object privileges, while `WITH ADMIN OPTION` applies to system privileges and roles.
9. Assuming UPDATE on one column allows updating the entire table: Column-level UPDATE privileges only permit changes to the specified columns.

## Short Exam Notes (very concise revision points)

- DBA: Manages and secures the database.
- Database Security: Divided into System Security and Data Security.
- System Privileges: Allow database-level operations.
- Object Privileges: Allow operations on specific database objects.
- Schema: Collection of objects owned by a user.
- CREATE USER: Creates a new database user.
- GRANT: Gives privileges to users or roles.
- REVOKE: Removes previously granted privileges.
- CREATE SESSION: Allows a user to connect to Oracle.
- CREATE TABLE: Allows a user to create tables in their schema.
- Tablespace: Logical storage structure in Oracle.
- Quota: Maximum storage a user can use in a tablespace.
- Role: Named collection of privileges.
- Object Owner: Has full privileges over their own objects.
- WITH GRANT OPTION: Allows a user to grant received object privileges to others.
- WITH ADMIN OPTION: Allows a user to grant received system privileges or roles to others.
- Principle of Least Privilege: Give users only the permissions they need.

Important SQL Commands for Exams

| Command          | Purpose               |
| ---------------- | --------------------- |
| `CREATE USER`    | Creates a user        |
| `ALTER USER`     | Modifies a user       |
| `CREATE ROLE`    | Creates a role        |
| `GRANT`          | Gives privileges      |
| `REVOKE`         | Removes privileges    |
| `DROP USER`      | Deletes a user        |
| `CREATE SESSION` | Allows database login |
| `CREATE TABLE`   | Allows table creation |

Remember: `GRANT` gives permission, `REVOKE` removes permission, and `ROLE` groups permissions together.
