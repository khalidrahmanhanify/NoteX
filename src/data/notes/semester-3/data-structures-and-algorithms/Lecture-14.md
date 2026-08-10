---
title: Hashing and Hash Table Fundamentals
description: Explains bucket arrays, hash functions, hash codes, compression functions, collision handling, and C++ hash tables.
lecture: lecture 14
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-07-15
order: 3
---

---

# Hashing: Bucket Arrays, Hash Functions, Hash Codes, and Compression Functions

## Definition

**Hashing** is a technique for storing and retrieving data efficiently by converting a key into an index that identifies a location in a **bucket array**.

The general process is:

```text
Key → Hash Code → Compression Function → Index → Bucket
```

Hashing is widely used in:

- Databases
- Compilers
- Caches
- Dictionaries
- Hash tables
- `unordered_map` in C++

---

## Key Points

- A **bucket array** stores data in indexed locations called buckets.
- A **hash function** converts a key into a numeric hash value.
- A **hash code** is the numeric representation of a key used before compression.
- A **compression function** maps a hash code into the valid range of the bucket array.
- A common compression technique is the **division method**:
  $$
  index = key % m
  $$
- A **collision** occurs when multiple keys map to the same bucket.
- **Chaining** handles collisions by storing multiple values in the same bucket, commonly using a linked list.
- Hashing provides **O(1) average-case** insertion and searching.
- In the worst case, operations can become **O(n)**.

---

## Example / Code

# Bucket Arrays

## Definition

A **bucket array** is an array in which each position represents a **bucket** where data can be stored.

Instead of searching through an entire collection, hashing calculates an index and directly accesses the corresponding bucket.

### Example

```text
Index → Bucket

0 → []
1 → []
2 → [10, 20]
3 → []
```

Here, bucket `2` contains the values `10` and `20`.

### Why Bucket Arrays Are Used

- Provide fast access using an index.
- Reduce search time.
- Handle large datasets efficiently.
- Form the basic structure of hash tables.

### Types of Buckets

#### Single-Slot Bucket

Each index stores one value.

```text
0 → [10]
1 → [21]
2 → [32]
```

#### Chaining Bucket

Each index can contain multiple values, usually through a linked list.

```text
0 → []
1 → [11 → 21 → 31]
2 → [12]
```

Chaining is useful for handling **collisions**.

---

# Hash Functions

## Definition

A **hash function** converts a key into a numeric value called a **hash code**.

The resulting value is then used to determine the bucket index.

The general process is:

```text
Key → Hash Value → Index
```

### Example

Given:

```text
Key = 25
Hash function = h(x) = x % 10
```

Calculate:

$$
h(25)=25%10=5
$$

Therefore:

```text
Key 25 → Bucket 5
```

---

## Properties of a Good Hash Function

A good hash function should:

- Be **fast** to compute.
- Produce a **uniform distribution**.
- Minimize collisions.
- Be **deterministic**.
- Produce the same result whenever the same key is supplied.

### Common Hash Functions

- **Division method**
- **Multiplication method**
- **Mid-square method**

---

# Hash Codes

## Definition

A **hash code** is an integer representation of a key or object that is produced before the final bucket index is determined.

It is particularly useful when keys are complex data such as strings or objects.

The general process is:

```text
Key → Hash Code → Compression → Index
```

### Example

For the string:

```text
"ABC"
```

Using the character values:

```text
A = 65
B = 66
C = 67
```

The example hash code is:

$$
65+66+67=198
$$

Therefore:

```text
"ABC" → 198
```

---

## Purpose of Hash Codes

- Convert data into numeric form.
- Prepare data for hashing.
- Enable efficient indexing.
- Provide a numeric representation of complex keys.

### Characteristics

A hash code should:

- Be consistent.
- Help minimize collisions.
- Distribute values evenly.

---

# Compression Functions

## Definition

A **compression function** converts a potentially large hash code into a valid index for a bucket array.

For a table containing `m` buckets, valid indexes are:

```text
0 to m - 1
```

The process is:

```text
Hash Code → Compression Function → Index
```

### Example

Given:

```text
Hash Code = 198
Table Size = 10
```

Using the division method:

$$
198%10=8
$$

Therefore:

```text
Hash Code 198 → Index 8
```

---

# Division Method

## Definition

The **division method** uses the remainder operator to convert a key or hash code into a valid array index.

The formula is:

$$
h(k)=k \ \%  \ m
$$

where:

- `k` = key or hash code
- `m` = table size
- `h(k)` = resulting index

### Example

```text
Key = 35
Table size = 10
```

$$
35%10=5
$$

Therefore:

```text
35 → Bucket 5
```

---

# Folding Method

The **folding method** divides a number into smaller parts and combines those parts, commonly by addition.

For example, a large number can be divided into sections and the sections added together to produce a hash value.

---

# Mid-Square Method

The **mid-square method**:

1. Squares the key.
2. Takes selected middle digits from the resulting number.
3. Uses those digits as the hash value or as part of the indexing process.

---

## Requirements of a Good Compression Function

A good compression function should:

- Produce a **uniform distribution**.
- Reduce collisions.
- Keep indexes within the valid range:

$$
0 \leq index < m
$$

---

# Complete C++ Hash Table

The following program demonstrates:

- Bucket arrays
- Hash functions
- Compression
- Collision handling
- Chaining
- Searching

```cpp
#include <iostream>
#include <list>
using namespace std;

class HashTable {
private:
    int size;
    list<int>* table;

    // Hash Function + Compression Function
    int hashFunction(int key) {
        return key % size;
    }

public:
    HashTable(int s) {
        size = s;
        table = new list<int>[size];
    }

    // Insert value
    void insert(int key) {
        int index = hashFunction(key);
        table[index].push_back(key);
    }

    // Search value
    bool search(int key) {
        int index = hashFunction(key);

        for (int val : table[index]) {
            if (val == key)
                return true;
        }

        return false;
    }

    // Display hash table
    void display() {
        for (int i = 0; i < size; i++) {
            cout << i << " --> ";

            for (int val : table[i]) {
                cout << val << " ";
            }

            cout << endl;
        }
    }
};

int main() {
    HashTable ht(10);

    ht.insert(10);
    ht.insert(20);
    ht.insert(30);
    ht.insert(25);
    ht.insert(35);

    cout << "Hash Table:\n";
    ht.display();

    cout << "\nSearch 25: "
         << (ht.search(25) ? "Found" : "Not Found") << endl;

    cout << "Search 100: "
         << (ht.search(100) ? "Found" : "Not Found") << endl;

    return 0;
}
```

## Code Explanation

### Header Files

```cpp
#include <iostream>
#include <list>
```

- `<iostream>` provides input/output functionality such as `cout`.
- `<list>` provides the linked-list structure used for **chaining**.

### Hash Table Class

```cpp
class HashTable {
```

Defines a class representing the hash table.

```cpp
int size;
list<int>* table;
```

- `size` stores the number of buckets.
- `table` points to an array of linked lists.

Each list represents one bucket.

### Hash Function

```cpp
int hashFunction(int key) {
    return key % size;
}
```

Calculates the bucket index using the division method.

For a table of size `10`:

```text
10 % 10 = 0
20 % 10 = 0
30 % 10 = 0
25 % 10 = 5
35 % 10 = 5
```

Therefore, several values can map to the same bucket.

### Constructor

```cpp
HashTable(int s) {
    size = s;
    table = new list<int>[size];
}
```

Creates a bucket array containing `s` linked lists.

### Insert Operation

```cpp
int index = hashFunction(key);
```

Calculates the bucket index.

```cpp
table[index].push_back(key);
```

Adds the key to that bucket.

If another key has the same index, both values are stored in the same linked list.

### Search Operation

```cpp
int index = hashFunction(key);
```

First calculates where the key should be stored.

```cpp
for (int val : table[index])
```

Searches through only that bucket rather than the entire table.

```cpp
if (val == key)
    return true;
```

Returns `true` when the key is found.

```cpp
return false;
```

Returns `false` when the key does not exist.

### Display Operation

```cpp
for (int i = 0; i < size; i++)
```

Visits every bucket.

```cpp
for (int val : table[i])
```

Displays every value stored in the current bucket.

---

## Output (if any)

For the inserted values:

```text
10, 20, 30, 25, 35
```

the important bucket mappings are:

```text
10 → 0
20 → 0
30 → 0
25 → 5
35 → 5
```

Expected relevant output:

```text
Hash Table:
0 --> 10 20 30
1 -->
2 -->
3 -->
4 -->
5 --> 25 35
6 -->
7 -->
8 -->
9 -->

Search 25: Found
Search 100: Not Found
```

The values `10`, `20`, and `30` demonstrate a **collision** because all map to bucket `0`.

The values `25` and `35` also collide because both map to bucket `5`.

---

## Explanation

# Collision Handling

## Definition

A **collision** occurs when two or more keys produce the same bucket index.

For example:

$$
10%10=0
$$

$$
20%10=0
$$

Therefore:

```text
10 → Bucket 0
20 → Bucket 0
```

Both keys have the same index.

### Chaining

**Chaining** solves this problem by allowing each bucket to contain multiple elements.

```text
Bucket 0 → 10 → 20 → 30
```

In the C++ program, each bucket is represented by a `list<int>`.

---

# Hashing Process

The complete hashing process can be remembered as:

```text
          Key
           ↓
      Hash Function
           ↓
       Hash Code
           ↓
  Compression Function
           ↓
         Index
           ↓
        Bucket
```

For a simple integer hash table, the hash function and compression may be combined:

```cpp
return key % size;
```

For more complex keys, a hash code can first be generated and then compressed into the table's index range.

---

# Complexity Analysis

| Operation  | Average Case | Worst Case |
| ---------- | -----------: | ---------: |
| **Insert** |         O(1) |       O(n) |
| **Search** |         O(1) |       O(n) |
| **Delete** |         O(1) |       O(n) |

### Why Is the Average Case O(1)?

A good hash function distributes keys across buckets so that each bucket contains relatively few elements.

Therefore, the required bucket can usually be accessed directly.

### Why Can the Worst Case Be O(n)?

If many keys collide and are stored in the same bucket, searching that bucket may require checking many elements.

For example:

```text
Bucket 0 → 10 → 20 → 30 → 40 → 50
```

Searching for `50` requires traversing multiple elements.

---

# Comparison of Hashing Concepts

| Concept                  | Purpose                                               |
| ------------------------ | ----------------------------------------------------- |
| **Bucket Array**         | Stores data in indexed buckets                        |
| **Hash Function**        | Converts a key into a hash value                      |
| **Hash Code**            | Numeric representation of the key                     |
| **Compression Function** | Maps a hash code into the valid table-index range     |
| **Collision**            | Occurs when multiple keys map to the same index       |
| **Chaining**             | Handles collisions using multiple elements per bucket |

---

## Common Mistakes

- Confusing a **hash code** with the final array index.
- Forgetting that a compression function must produce an index between:
  $$
  0 \text{ and } m-1
  $$
- Assuming collisions never occur.
- Assuming hashing always provides O(1) time; **O(1) is the average case**, while the worst case can be O(n).
- Forgetting to handle collisions.
- Using a poor hash function that distributes many keys into the same bucket.
- Confusing a bucket with the entire hash table.
- Forgetting that chaining allows multiple values to exist in one bucket.
- Assuming every hash table must use linked-list chaining; other collision-resolution techniques also exist.

---

## Short Exam Notes

- **Hashing:** Technique for efficient key-based data storage and retrieval.
- **Bucket Array:** Array containing buckets where hashed values are stored.
- **Hash Function:** Converts a key into a numeric hash value.
- **Hash Code:** Numeric representation of a key before compression.
- **Compression Function:** Converts a hash code into a valid table index.
- Division method:
  $$
  h(k)=k%m
  $$
- **Collision:** Two or more keys produce the same index.
- **Chaining:** Stores colliding elements in the same bucket, commonly using a linked list.
- Hash table average complexity:
  - Insert = **O(1)**
  - Search = **O(1)**
  - Delete = **O(1)**

- Hash table worst-case complexity:
  - Insert = **O(n)**
  - Search = **O(n)**
  - Delete = **O(n)**

- Common applications:
  - Databases
  - Compilers
  - Caches
  - Dictionaries
  - C++ `unordered_map`

- Remember the process:

```text
Key → Hash Code → Compression → Index → Bucket
```
