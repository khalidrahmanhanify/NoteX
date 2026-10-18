---
title: MongoDB Overview
description: Understanding MongoDB as a document-oriented NoSQL database, including its data hierarchy, flexible schema, key features, advantages, and basic MongoDB Query Language (MQL) operations
lecture: Lecture 7
semester: semester-4
subject: database-administration
date: 2026-10-03
order: 10
---

# MongoDB Overview

## Definition

MongoDB is a NoSQL, document-oriented database designed for flexibility, scalability, and high performance.

Unlike relational databases such as Oracle, which store data in tables, rows, and columns, MongoDB stores data in documents grouped into collections.

MongoDB uses MongoDB Query Language (MQL) to perform database operations. It stores documents internally in BSON (Binary JSON) format.

## Key Points

### 1. Why Do We Need NoSQL Databases?

Traditional relational databases are suitable for structured data. However, some applications handle large amounts of semi-structured data or data whose structure changes frequently.

For example, a population database may store information about millions of people. Some people may have additional fields such as education, employment, or language skills.

MongoDB allows documents to have different fields within the same collection, making it useful for applications with changing data requirements.

Reasons for using NoSQL databases:

- Flexible schema: Documents can have different structures.
- Scalability: Supports distributing data across multiple servers.
- High performance: Indexes and suitable data models can improve query performance.
- Aggregation: Supports filtering, grouping, and analyzing data.
- Agile development: Developers can adapt data structures as application requirements change.
- Large datasets: Suitable for many applications involving large volumes of data.

Note: Relational databases can also handle large datasets efficiently. The best database depends on the application's requirements.

### 2. MongoDB Data Hierarchy

MongoDB organizes data using the following hierarchy:

\- Database: Contains collections.

- Collection: Contains documents.
  - Document: Contains fields and values.
    - Field: Represents a named data element with a value.

Example:

```
University (Database)
    |
    └── students (Collection)
            |
            ├── Document 1
            |     ├── name: "Ahmad"
            |     └── age: 21
            |
            └── Document 2
                  ├── name: "Sara"
                  └── age: 20
```

Comparison with relational databases:

| MongoDB    | Relational Database        |
| ---------- | -------------------------- |
| Database   | Database                   |
| Collection | Table                      |
| Document   | Row                        |
| Field      | Column (approximately)     |
| `_id`      | Primary key (conceptually) |
| Index      | Index                      |

Important: MongoDB is a document-oriented database, not a flat-file database.

### 3. Schema-less Database

MongoDB is often described as schema-less because documents in the same collection do not need to contain identical fields.

For example:

```
{
  name: "Ahmad",
  age: 21
}
```

Another document can contain different fields:

```
{
  name: "Sara",
  age: 20,
  scholarship: true
}
```

Both documents can belong to the same collection.

However, MongoDB can enforce schema validation rules when required.

### 4. MongoDB vs. RDBMS

| Feature        | MongoDB                          | RDBMS (e.g., Oracle)                             |
| -------------- | -------------------------------- | ------------------------------------------------ |
| Data storage   | Documents                        | Tables                                           |
| Schema         | Flexible                         | Usually predefined                               |
| Query language | MQL                              | SQL                                              |
| Relationships  | Embedded documents or references | Foreign keys and joins                           |
| Scalability    | Horizontal and vertical          | Horizontal and vertical, depending on the system |
| Transactions   | Supports ACID transactions       | Supports ACID transactions                       |

### 5. JSON and BSON

JSON (JavaScript Object Notation):

- A text-based format for representing structured data.
- Uses key-value pairs and arrays.
- Commonly used for data exchange between applications.

BSON (Binary JSON):

- A binary-encoded format used by MongoDB to store documents.
- Supports additional data types, such as dates and binary data.
- Preserves data type information.

### 6. CRUD Operations

CRUD represents the four basic operations performed on database records.

| Operation | Purpose            | MongoDB Methods               |
| --------- | ------------------ | ----------------------------- |
| Create    | Insert documents   | `insertOne()`, `insertMany()` |
| Read      | Retrieve documents | `find()`, `findOne()`         |
| Update    | Modify documents   | `updateOne()`, `updateMany()` |
| Delete    | Remove documents   | `deleteOne()`, `deleteMany()` |

### 7. Other Important Concepts

- Index: Improves the speed of suitable queries.
- Aggregation: Processes data through operations such as filtering, grouping, and sorting.
- Horizontal scaling: Distributes data across multiple servers.
- Replication: Maintains copies of data on multiple servers to improve availability and redundancy.
- `_id` field: Uniquely identifies each document within its collection.

### 8. Use Cases of MongoDB

- Content management systems.
- IoT and sensor data.
- E-commerce product catalogs.
- Real-time analytics dashboards.
- Mobile and web applications.
- Applications with frequently changing data structures.

## Example / Code

The following example demonstrates inserting and retrieving student documents.

```
// Insert one student
db.students.insertOne({
  name: "Ahmad",
  age: 21,
  department: "Computer Science",
  skills: ["JavaScript", "Python"]
});

// Insert another student
db.students.insertOne({
  name: "Sara",
  age: 20,
  department: "Information Technology",
  scholarship: true
});

// Retrieve all students
db.students.find();

// Retrieve one student
db.students.findOne({ name: "Ahmad" });

// Update a student's age
db.students.updateOne(
  { name: "Ahmad" },
  { $set: { age: 22 } }
);

// Delete a student
db.students.deleteOne({ name: "Sara" });
```

## Explanation

- `db` refers to the currently selected database.
- `students` is the collection name.
- `insertOne()` inserts one document into the collection.
- `find()` retrieves all documents when no filter is specified.
- `findOne()` retrieves one matching document.
- `updateOne()` updates the first document matching the filter.
- `$set` changes the specified field's value.
- `deleteOne()` deletes the first document matching the filter.

MongoDB automatically generates an `_id` field if one is not provided.

## Output (if any)

After inserting the two students, the documents will look similar to the following:

```
{
  _id: ObjectId("..."),
  name: "Ahmad",
  age: 21,
  department: "Computer Science",
  skills: ["JavaScript", "Python"]
}
```

```
{
  _id: ObjectId("..."),
  name: "Sara",
  age: 20,
  department: "Information Technology",
  scholarship: true
}
```

The actual ObjectId values will be generated by MongoDB.

Notice that the first document contains a `skills` field, while the second contains a `scholarship` field. MongoDB allows these structural differences within the same collection.

## Common Mistakes

- Calling MongoDB a flat-file database instead of a document-oriented database.
- Confusing collections with documents.
- Assuming schema-less means no data validation is possible.
- Confusing JSON with BSON.
- Assuming MongoDB does not support joins or transactions.
- Thinking NoSQL databases are always better than relational databases for large datasets.
- Forgetting that MongoDB automatically creates `_id` when it is not supplied.

## Short Exam Notes (very concise revision points)

- MongoDB is a NoSQL, document-oriented database.
- It uses MongoDB Query Language (MQL).
- Data hierarchy: Database → Collection → Document → Field.
- A collection is similar to a table.
- A document is similar to a row.
- MongoDB supports a flexible schema.
- JSON is text-based; BSON is binary-encoded.
- `_id` uniquely identifies each document.
- CRUD stands for Create, Read, Update, Delete.
- Indexes improve query performance.
- Aggregation is used to process and analyze data.
- Common uses include IoT, product catalogs, content management, and analytics.
