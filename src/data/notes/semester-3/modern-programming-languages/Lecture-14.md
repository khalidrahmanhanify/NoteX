---
title: Database Programming with MySQL, SQLite, and Python
description: Learn the fundamentals of database programming using MySQL and SQLite in Python. Explore relational databases, SQL operations, connecting Python to databases, creating databases and tables, performing CRUD (Create, Read, Update, Delete) operations, handling exceptions, and displaying database records using Tkinter Listbox and TreeView widgets. Also learn how to work with images in Tkinter using the Pillow library.
lecture: Lecture 14
semester: semester-3
subject: modern-programming-languages
date: 2026-06-28
order: 3
---

# MySQL Database Programming with Python, SQLite, and Tkinter TreeView

## Definition

Databases are used to **store, organize, retrieve, update, and manage data** efficiently. Python can communicate with databases such as **MySQL** and **SQLite** to build applications like student management systems, inventory systems, banking software, and more.

---

# MySQL

## Definition

**MySQL** is an **Open-Source Relational Database Management System (RDBMS)** that uses **SQL (Structured Query Language)** to manage data.

It was originally developed by **MySQL AB (Sweden)** and is now maintained by **Oracle Corporation**.

---

## Key Points

- Open-source RDBMS.
- Uses SQL to manage databases.
- Stores data in tables (rows and columns).
- Supports millions of records.
- Fast, secure, and scalable.
- Widely used in web applications and enterprise software.

---

## Applications

- Banking systems
- E-commerce websites
- School Management Systems
- Hospital Management Systems
- Library Systems
- Social media platforms

---

## Short Exam Notes

- MySQL = Open-source RDBMS.
- Uses SQL.
- Developed by Oracle.
- Stores data in tables.

---

# SQLite

## Definition

**SQLite** is a lightweight, serverless relational database that stores the entire database inside a single file.

Unlike MySQL, it **does not require installing a database server**.

---

## Key Points

- Lightweight.
- No database server required.
- Database stored in one file.
- Built into Python.
- Easy to use.

---

## Advantages

- Very fast for small applications.
- Easy installation.
- Portable database file.
- Excellent for desktop and mobile apps.

---

## Difference Between MySQL and SQLite

| MySQL                 | SQLite                       |
| --------------------- | ---------------------------- |
| Requires server       | No server required           |
| Large applications    | Small to medium applications |
| Multi-user            | Limited concurrent users     |
| Separate installation | Built into Python            |

---

# SQL (Structured Query Language)

## Definition

SQL is the language used to communicate with relational databases.

It allows us to:

- Create databases
- Create tables
- Insert data
- Read data
- Update data
- Delete data

---

## Common SQL Commands

| Command         | Purpose                |
| --------------- | ---------------------- |
| CREATE DATABASE | Create a database      |
| CREATE TABLE    | Create a table         |
| INSERT INTO     | Insert data            |
| SELECT          | Read data              |
| UPDATE          | Modify data            |
| DELETE          | Delete data            |
| ALTER TABLE     | Modify table structure |
| SHOW DATABASES  | Display databases      |
| SHOW TABLES     | Display tables         |

---

# Installing MySQL Connector

## Install Package

```bash
pip install mysql-connector-python
```

or

```bash
pip3 install mysql-connector-python
```

---

## Import Library

```python
import mysql.connector
```

---

# Connecting Python to MySQL

## Example

```python
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="MyPassword"
)

print("Connected Successfully")
```

---

## Explanation

- `host` → Database server.
- `user` → Username.
- `password` → Database password.

---

## Output

```text
Connected Successfully
```

---

## Common Mistakes

- Wrong username/password.
- MySQL server not running.
- Connector package not installed.

---

## Short Exam Notes

Connection is made using:

```python
mysql.connector.connect()
```

---

# Exception Handling

## Definition

Exception handling prevents the program from crashing when database errors occur.

---

## Example

```python
from mysql.connector import Error
import mysql.connector

try:
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="1234"
    )

    print("Connected")

except Error as e:
    print("Error:", e)
```

---

## Explanation

- `try` executes the code.
- `except` catches database errors.

---

# Creating a Database

## SQL

```sql
CREATE DATABASE School;
```

---

## Python Example

```python
import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234"
)

cursor = mydb.cursor()

cursor.execute("CREATE DATABASE School")
```

---

# Showing Databases

```python
cursor.execute("SHOW DATABASES")

for db in cursor:
    print(db)
```

---

## Output

```text
information_schema
mysql
performance_schema
School
```

---

# Selecting a Database

```python
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",
    database="School"
)
```

---

# Creating a Table

## SQL

```sql
CREATE TABLE students(
    id INT,
    name VARCHAR(255),
    address VARCHAR(255)
);
```

---

## Python

```python
cursor.execute("""
CREATE TABLE students(
id INT,
name VARCHAR(255),
address VARCHAR(255))
""")
```

---

# Showing Tables

```python
cursor.execute("SHOW TABLES")

for table in cursor:
    print(table)
```

---

# Alter Table

## Definition

`ALTER TABLE` modifies an existing table.

---

## Example

```python
cursor.execute(
"ALTER TABLE students ADD COLUMN age INT"
)
```

---

## Adding Primary Key

```python
cursor.execute("""
ALTER TABLE students
ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY
""")
```

---

## Short Exam Notes

ALTER TABLE modifies the structure of an existing table.

---

# Inserting Data

## SQL

```sql
INSERT INTO students
VALUES(1,'Ali','Kabul');
```

---

## Python Example

```python
sql = "INSERT INTO students(id,name,address) VALUES(%s,%s,%s)"

values = (1,"Ali","Kabul")

cursor.execute(sql, values)

mydb.commit()
```

---

## Explanation

`%s` are placeholders.

They prevent SQL injection and allow dynamic input.

---

# Placeholders

## Example

```python
sql = "INSERT INTO students(name,address) VALUES(%s,%s)"
```

---

## Why Use Placeholders?

- Secure
- Faster
- Easy to reuse

---

# Insert Multiple Records

```python
sql = "INSERT INTO students(name,address) VALUES(%s,%s)"

values = [
("Ali","Kabul"),
("Sara","Herat"),
("Ahmad","Mazar")
]

cursor.executemany(sql, values)

mydb.commit()
```

---

## Explanation

`executemany()` inserts multiple rows with one query.

---

# Reading Data

## SQL

```sql
SELECT * FROM students;
```

---

## Python

```python
cursor.execute("SELECT * FROM students")

rows = cursor.fetchall()

for row in rows:
    print(row)
```

---

## Output

```text
(1,'Ali','Kabul')
(2,'Sara','Herat')
(3,'Ahmad','Mazar')
```

---

## Reading One Row

```python
cursor.fetchone()
```

---

## Reading Several Rows

```python
cursor.fetchmany(5)
```

---

## Reading All Rows

```python
cursor.fetchall()
```

---

# Updating Data

## SQL

```sql
UPDATE students
SET address='Kandahar'
WHERE id=1;
```

---

## Python

```python
sql = """
UPDATE students
SET address=%s
WHERE id=%s
"""

values = ("Kandahar",1)

cursor.execute(sql, values)

mydb.commit()
```

---

## Important

Always call

```python
mydb.commit()
```

Otherwise changes are **not saved**.

---

# Deleting Data

## SQL

```sql
DELETE FROM students
WHERE id=1;
```

---

## Python

```python
sql = "DELETE FROM students WHERE id=%s"

cursor.execute(sql,(1,))

mydb.commit()
```

---

## Explanation

Deletes only the matching record.

---

## Warning

Without a `WHERE` clause:

```sql
DELETE FROM students;
```

All records are deleted.

---

# Closing Database Connection

```python
cursor.close()

mydb.close()
```

---

## Why?

Releases memory and database resources.

---

# Complete Database Workflow

```text
Install Connector
        ↓
Import Library
        ↓
Connect Database
        ↓
Create Cursor
        ↓
Execute SQL Query
        ↓
Commit Changes
        ↓
Close Cursor
        ↓
Close Connection
```

---

# Tkinter Listbox Widget

## Definition

A **Listbox** displays multiple items from which the user can select one or more.

---

## Example

```python
from tkinter import *

root = Tk()

listbox = Listbox(root)

listbox.insert(END,"Python")
listbox.insert(END,"Java")
listbox.insert(END,"C++")

listbox.pack()

root.mainloop()
```

---

## Get Selected Item

```python
selected = listbox.get(listbox.curselection())

print(selected)
```

---

# Tkinter TreeView Widget

## Definition

A **TreeView** displays data in rows and columns, similar to a database table.

It is available in `tkinter.ttk`.

---

## Example

```python
from tkinter import *
from tkinter import ttk

root = Tk()

tree = ttk.Treeview(root)

tree["columns"] = ("Name","Age")

tree.heading("#0", text="ID")
tree.heading("Name", text="Name")
tree.heading("Age", text="Age")

tree.insert("", "end", text="1",
            values=("Ali",20))

tree.pack()

root.mainloop()
```

---

## Applications

- Display database records
- Student management
- Employee systems
- Inventory software

---

# Inserting Data into TreeView

```python
tree.insert(
"",
"end",
values=("Sara",21,"Herat")
)
```

---

# Getting Selected Item

```python
selected = tree.focus()

data = tree.item(selected)

print(data["values"])
```

---

# Working with Images in Tkinter

## Pillow Library

Install Pillow:

```bash
pip install Pillow
```

or

```bash
pip3 install Pillow
```

---

## Loading an Image

```python
from PIL import Image, ImageTk

img = Image.open("python.png")

photo = ImageTk.PhotoImage(img)
```

---

## Displaying Image

```python
from tkinter import *

label = Label(root, image=photo)

label.pack()
```

---

# Resizing an Image

```python
from PIL import Image

img = Image.open("python.png")

img = img.resize((200,200))
```

---

## Explanation

`resize((width,height))` changes the image dimensions.

---

# Frequently Used MySQL Commands

| SQL Command     | Purpose                |
| --------------- | ---------------------- |
| CREATE DATABASE | Create a database      |
| SHOW DATABASES  | Display all databases  |
| CREATE TABLE    | Create a table         |
| SHOW TABLES     | Display tables         |
| INSERT INTO     | Insert records         |
| SELECT          | Read records           |
| UPDATE          | Modify records         |
| DELETE          | Delete records         |
| ALTER TABLE     | Modify table structure |

---

# Frequently Used Python Database Methods

| Method          | Purpose                  |
| --------------- | ------------------------ |
| `connect()`     | Connect to MySQL         |
| `cursor()`      | Create cursor            |
| `execute()`     | Execute one SQL query    |
| `executemany()` | Execute multiple inserts |
| `fetchone()`    | Retrieve one row         |
| `fetchmany()`   | Retrieve several rows    |
| `fetchall()`    | Retrieve all rows        |
| `commit()`      | Save changes             |
| `close()`       | Close connection         |

---

# Short Exam Notes (Quick Revision)

- **MySQL:** Open-source relational database managed by Oracle.
- **SQLite:** Lightweight, serverless database stored in a single file.
- **SQL:** Language for creating, reading, updating, and deleting data.
- Install MySQL connector: `pip install mysql-connector-python`.
- Connect using `mysql.connector.connect()`.
- Create a cursor with `cursor()`.
- Execute SQL using `execute()`.
- Insert multiple records using `executemany()`.
- Retrieve data using `fetchone()`, `fetchmany()`, or `fetchall()`.
- Use `commit()` after `INSERT`, `UPDATE`, or `DELETE`.
- Always close the cursor and database connection.
- **Listbox:** Displays selectable lists.
- **TreeView:** Displays tabular data in rows and columns.
- **Pillow:** Used to load, display, and resize images in Tkinter.
