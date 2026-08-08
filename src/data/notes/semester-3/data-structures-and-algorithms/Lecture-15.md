---
title: Collision Handling, Load Factor, and Rehashing
description: Explains collision resolution, load factor, rehashing, and C++ hash table implementation using separate chaining.
lecture: Lecture 15
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-07-22
order: 2
---

---

# Collision Handling, Load Factor & Rehashing

## Definition

**Collision handling** is the process of resolving situations where multiple keys generate the same index in a hash table.

Because hash tables have a limited number of buckets, collisions are unavoidable. Techniques such as **separate chaining** and **open addressing** allow multiple keys to be stored correctly.

**Load factor** measures how full a hash table is, while **rehashing** increases the table size and redistributes elements when the table becomes too full.

---

## Key Points

- A **collision** occurs when two different keys map to the same index.
- Common causes of collisions:
  - Limited table size
  - Poor hash functions
  - Large numbers of keys
  - Non-uniform distribution

- Main collision-handling techniques:
  - **Separate chaining**
  - **Open addressing**

- Open addressing includes:
  - Linear probing
  - Quadratic probing
  - Double hashing

- **Load factor** is calculated as:
  $$
  \alpha = \frac{\text{Number of Elements}}{\text{Table Size}}
  $$
- A high load factor generally causes more collisions.
- **Rehashing** creates a larger table and redistributes existing elements.
- A common rehashing threshold is around **0.7–0.75**.
- Hash-table insertion and searching are typically **O(1) on average**.

---

## Example / Code

# Collision-Handling Schemes

## Definition

A **collision** occurs when two different keys produce the same index through the hash function.

For example, using:

$$
h(x)=x%10
$$

both `10` and `20` produce index `0`:

$$
10%10=0
$$

$$
20%10=0
$$

Therefore:

```text
10 → index 0
20 → index 0
```

This is a collision.

---

## Separate Chaining

In **separate chaining**, each bucket contains a collection, commonly a linked list, that can store multiple elements.

Example:

```text
Index 3 → 12 → 22 → 32
```

All three values are stored in bucket `3`.

### Advantages

- Simple to implement.
- Multiple elements can occupy one bucket.
- The table can store more elements than the number of buckets.

### Disadvantage

- Additional memory is required for the linked lists.
- Performance decreases when chains become long.

---

## Open Addressing

In **open addressing**, all elements are stored directly inside the hash-table array.

When a collision occurs, another available position is searched.

Common methods include:

- **Linear probing**
- **Quadratic probing**
- **Double hashing**

### Linear Probing

Linear probing checks the next available slot when the calculated index is occupied.

Using:

$$
h(x)=x%10
$$

```text
10 → index 0
20 → index 0 → collision
20 → index 1
```

The table might therefore contain:

```text
Index 0 → 10
Index 1 → 20
```

### Advantages

- Simple implementation.
- Good average performance when the load factor is controlled.
- Does not require separate linked lists.

### Disadvantages

- Can suffer from **clustering**.
- Performance decreases at high load factors.
- Requires an available slot inside the table.

---

# Load Factor

## Definition

The **load factor** measures how full a hash table is.

It is calculated as:

$$
\alpha=\frac{n}{m}
$$

where:

- (n) = number of stored elements
- (m) = table size

### Example

Suppose:

```text
Number of elements = 8
Table size = 10
```

Then:

$$
\alpha=\frac{8}{10}=0.8
$$

The load factor is **0.8**, meaning the table contains elements equal to 80% of its bucket capacity.

---

## Importance of Load Factor

- Indicates how full the hash table is.
- Helps determine when resizing is necessary.
- A higher load factor generally means **more collisions**.
- A very low load factor may mean **unused memory**.
- Maintaining a suitable load factor helps preserve efficient operations.

---

# Rehashing

## Definition

**Rehashing** is the process of creating a larger hash table and redistributing existing elements into the new table.

Rehashing is normally triggered when the load factor becomes too high.

### Basic Rehashing Process

1. Create a new, larger table.
2. Usually increase the table size significantly, often by about double.
3. Recalculate the index for every existing element.
4. Insert the elements into the new table.
5. Replace the old table.

### Important Point

When the table size changes, the indexes can also change.

For example:

```text
Old table size = 5
New table size = 10
```

For key `20`:

$$
20%5=0
$$

but:

$$
20%10=0
$$

For other keys, the index may change. Therefore, **all elements must be rehashed** rather than simply copied to the same positions.

---

## When to Rehash

A common threshold is:

$$
\alpha > 0.75
$$

For example:

```text
Load Factor = 0.80
Threshold = 0.75
```

Since:

$$
0.80>0.75
$$

rehashing should be considered.

The exact threshold depends on the implementation and collision-handling strategy.

---

# C++ Hash Table Implementation

The following program demonstrates:

- Hash function
- Separate chaining
- Insertion
- Searching
- Display
- Load factor
- Rehashing

```cpp
#include <iostream>
#include <vector>
#include <list>
using namespace std;

class HashTable {
private:
    vector<list<int>> table;
    int size;
    int elements;

    // Hash Function
    int hashFunction(int key) {
        return key % size;
    }

public:
    HashTable(int s) {
        size = s;
        table.resize(size);
        elements = 0;
    }

    // Load Factor
    double loadFactor() {
        return (double)elements / size;
    }

    // Insert element
    void insert(int key) {
        int index = hashFunction(key);
        table[index].push_back(key);
        elements++;

        // Check load factor
        if (loadFactor() > 0.75) {
            cout << "\nRehashing needed (Load Factor > 0.75)\n";
            rehash();
        }
    }

    // Search element
    bool search(int key) {
        int index = hashFunction(key);

        for (int val : table[index]) {
            if (val == key)
                return true;
        }

        return false;
    }

    // Display table
    void display() {
        for (int i = 0; i < size; i++) {
            cout << i << " --> ";

            for (int val : table[i]) {
                cout << val << " ";
            }

            cout << endl;
        }
    }

    // Rehashing function
    void rehash() {
        vector<list<int>> oldTable = table;

        size = size * 2;
        table.clear();
        table.resize(size);
        elements = 0;

        for (auto bucket : oldTable) {
            for (int val : bucket) {
                insert(val);
            }
        }
    }
};

int main() {
    HashTable ht(5);

    ht.insert(10);
    ht.insert(20);
    ht.insert(30);
    ht.insert(40);
    ht.insert(50);

    cout << "\nHash Table:\n";
    ht.display();

    cout << "\nSearch 30: "
         << (ht.search(30) ? "Found" : "Not Found") << endl;

    cout << "Load Factor: " << ht.loadFactor() << endl;

    return 0;
}
```

## Code Explanation

### Header Files

```cpp
#include <iostream>
#include <vector>
#include <list>
```

- `<iostream>` provides output functionality.
- `<vector>` provides the dynamic array used for the bucket table.
- `<list>` provides linked lists for **separate chaining**.

### Hash Table Data Members

```cpp
vector<list<int>> table;
int size;
int elements;
```

- `table` stores the buckets.
- `size` stores the current number of buckets.
- `elements` stores the number of elements currently in the table.

### Hash Function

```cpp
int hashFunction(int key) {
    return key % size;
}
```

The remainder determines the bucket index.

For example, when the table size is `5`:

```text
10 % 5 = 0
20 % 5 = 0
30 % 5 = 0
```

These values therefore collide at bucket `0`.

### Constructor

```cpp
HashTable(int s) {
    size = s;
    table.resize(size);
    elements = 0;
}
```

Creates a hash table containing `s` buckets and initially stores zero elements.

### Load Factor

```cpp
double loadFactor() {
    return (double)elements / size;
}
```

Calculates:

$$
\alpha=\frac{\text{elements}}{\text{table size}}
$$

The cast to `double` ensures that fractional values such as `0.8` can be returned.

### Insert

```cpp
int index = hashFunction(key);
table[index].push_back(key);
elements++;
```

The program:

1. Calculates the key's index.
2. Adds the key to the appropriate linked list.
3. Increases the element count.

Then it checks:

```cpp
if (loadFactor() > 0.75)
```

If the load factor is greater than `0.75`, rehashing is performed.

### Search

```cpp
int index = hashFunction(key);
```

The program first determines which bucket should contain the key.

```cpp
for (int val : table[index])
```

It then searches only that bucket's chain.

```cpp
if (val == key)
    return true;
```

If the key is found, `true` is returned.

### Rehash

```cpp
vector<list<int>> oldTable = table;
```

Saves the existing table.

```cpp
size = size * 2;
```

Doubles the table size.

```cpp
table.clear();
table.resize(size);
elements = 0;
```

Creates the new empty table and resets the element count.

Finally:

```cpp
for (auto bucket : oldTable) {
    for (int val : bucket) {
        insert(val);
    }
}
```

Every old element is inserted into the new table using the **new table size**.

---

## Output (if any)

The exact output depends on when rehashing occurs. With the given program, inserting enough elements to make the load factor exceed `0.75` triggers:

```text
Rehashing needed (Load Factor > 0.75)
```

The program then displays the newly rehashed table.

It also reports whether `30` was found and displays the final load factor.

---

## Explanation

# Separate Chaining vs Open Addressing

| Feature            | Separate Chaining                 | Open Addressing                        |
| ------------------ | --------------------------------- | -------------------------------------- |
| Storage            | Buckets contain collections       | Elements stored in table itself        |
| Collision handling | Linked lists or other collections | Probing                                |
| Examples           | Linked-list chaining              | Linear, quadratic, double hashing      |
| Extra memory       | Usually required                  | Generally less auxiliary memory        |
| Clustering         | Not the main issue                | Can occur                              |
| High load factor   | Performance decreases             | Performance can decrease significantly |

---

# Load Factor and Performance

The load factor is important because it provides an indication of how crowded the table has become.

```text
Low Load Factor
      ↓
Fewer collisions
      ↓
Efficient operations
```

Whereas:

```text
High Load Factor
      ↓
More collisions
      ↓
Longer searches
      ↓
Lower performance
```

For this reason, many hash-table implementations resize the table before it becomes excessively full.

---

# Rehashing Cost

Rehashing requires every existing element to be processed again.

Therefore, if there are `n` elements:

$$
\text{Rehashing}=O(n)
$$

Although a single rehash is expensive, resizing periodically helps maintain efficient **average-case** hash-table operations over many insertions.

---

# Complexity Analysis

| Operation     | Average Case | Worst Case |
| ------------- | -----------: | ---------: |
| **Insert**    |         O(1) |       O(n) |
| **Search**    |         O(1) |       O(n) |
| **Delete**    |         O(1) |       O(n) |
| **Rehashing** |         O(n) |       O(n) |

The exact performance depends on the hash function, collision-handling strategy, and load factor.

---

# Comparison of Important Concepts

| Concept                | Purpose                                                    |
| ---------------------- | ---------------------------------------------------------- |
| **Collision Handling** | Resolves conflicts when keys have the same index           |
| **Separate Chaining**  | Uses linked lists or collections in buckets                |
| **Open Addressing**    | Finds another available position in the table              |
| **Load Factor**        | Measures how full the table is                             |
| **Rehashing**          | Resizes and rebuilds the hash table                        |
| **Linear Probing**     | Checks subsequent positions after a collision              |
| **Quadratic Probing**  | Checks positions using quadratic offsets                   |
| **Double Hashing**     | Uses another hash function to determine the probe sequence |

---

## Common Mistakes

- Assuming collisions can be completely avoided.
- Confusing **load factor** with the number of collisions.
- Forgetting that:
  $$
  \text{Load Factor}=\frac{n}{m}
  $$
- Copying elements to the same indexes during rehashing instead of recalculating their indexes.
- Forgetting to update the table size before recalculating indexes.
- Assuming hash-table operations are always O(1). **O(1) is the average case.**
- Confusing **separate chaining** with **open addressing**.
- Forgetting that high load factors can reduce performance.
- Assuming the threshold must always be exactly `0.75`; the threshold is implementation-dependent.
- In the supplied C++ implementation, `insert()` is also used internally during `rehash()`. This means the load-factor check is repeated while rebuilding the table; a production implementation would commonly use a private insertion helper that does not trigger another rehash during the rebuild.

---

## Short Exam Notes

- **Collision:** Two different keys generate the same hash-table index.
- **Separate chaining:** Stores multiple colliding elements in a bucket, commonly using a linked list.
- **Open addressing:** Stores elements directly in the hash-table array and searches for another position after a collision.
- Open addressing techniques:
  - Linear probing
  - Quadratic probing
  - Double hashing

- **Load factor:**
  $$
  \alpha=\frac{n}{m}
  $$
- High load factor generally means **more collisions and lower performance**.
- **Rehashing:** Creates a larger table and reinserts all existing elements using the new table size.
- A common rehash threshold is approximately **0.7–0.75**.
- Rehashing requires **O(n)** work.
- Hash-table average-case operations are typically **O(1)**.
- Worst-case search and insertion can be **O(n)**.
- Main idea:

```text
Collision → Resolve with chaining/probing
                 ↓
        Load factor becomes high
                 ↓
             Rehash
                 ↓
       Larger table + redistribution
```
