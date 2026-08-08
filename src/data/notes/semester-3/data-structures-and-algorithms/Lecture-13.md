---
title: Map ADT and Dictionary Structure
description: Explains key-value maps, C++ map interfaces, STL map, list-based implementation, operations, and complexity.
lecture: Lecture 13
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-06-03
order: 4
---

---

# Map ADT (Dictionary Structure)

## Definition

A **Map Abstract Data Type (ADT)** is a data structure that stores information as **key–value pairs**, where each key uniquely identifies a value.

A map is also commonly called a **dictionary** or **associative array**.

For example:

```text
"Name" → "Ali"
"Age"  → 21
"City" → "Kabul"
```

Instead of searching through all values, a map allows a value to be accessed using its associated **key**.

---

## Key Points

- A map stores **key–value pairs**.
- **Keys are unique**.
- Values may be duplicated.
- Each key identifies a specific value.
- Common operations include:
  - `insert()`
  - `remove()`
  - `find()`
  - `update()`
  - `display()`

- The C++ **STL `map`** stores keys in sorted order.
- STL `map` does **not allow duplicate keys**.
- STL `map` provides **O(log n)** search, insertion, and deletion.
- A simple list-based map uses sequential searching and has **O(n)** operations.
- Maps are useful in:
  - Databases
  - Indexing systems
  - Caching
  - Compiler symbol tables
  - General key-based data retrieval

---

## Example / Code

# C++ Map Interface

## Definition

A **Map Interface** specifies the operations that a map should provide without defining exactly how those operations are implemented.

This supports **abstraction** and allows different data structures to implement the same interface.

Possible implementations include:

- Arrays
- Linked lists
- Trees
- Hash tables

### Basic Interface

```cpp
template <typename K, typename V>
class MapInterface {
public:
    virtual void insert(K key, V value) = 0;
    virtual void remove(K key) = 0;
    virtual V find(K key) = 0;
};
```

### Explanation

```cpp
template <typename K, typename V>
```

Allows the map to work with different key and value types.

For example:

```cpp
MapInterface<int, string>
```

could use integers as keys and strings as values.

```cpp
virtual void insert(K key, V value) = 0;
```

Declares an abstract `insert` operation.

```cpp
virtual void remove(K key) = 0;
```

Declares an abstract operation for removing a key.

```cpp
virtual V find(K key) = 0;
```

Declares an abstract operation for retrieving the value associated with a key.

The `= 0` makes these **pure virtual functions**, meaning a derived class must provide their implementations.

---

# STL `map`

## Definition

The C++ Standard Template Library provides the `std::map` container for storing key–value pairs.

An STL `map`:

- Stores keys in **sorted order**.
- Does not allow duplicate keys.
- Provides logarithmic-time search, insertion, and deletion.
- Is commonly implemented using a **balanced binary search tree**, typically a Red-Black Tree.

### Basic Syntax

```cpp
#include <map>

map<int, string> mp;
```

### C++ Example

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, string> student;

    student[1] = "Ali";
    student[2] = "Sara";
    student[3] = "Ahmed";

    for (auto it : student) {
        cout << it.first << " -> " << it.second << endl;
    }

    return 0;
}
```

### Code Explanation

```cpp
#include <map>
```

Includes the C++ STL `map` container.

```cpp
map<int, string> student;
```

Creates a map with:

- `int` as the key type.
- `string` as the value type.

```cpp
student[1] = "Ali";
```

Associates key `1` with value `"Ali"`.

```cpp
student[2] = "Sara";
student[3] = "Ahmed";
```

Adds two more key–value pairs.

```cpp
for (auto it : student)
```

Iterates through every pair in the map.

```cpp
it.first
```

Accesses the **key**.

```cpp
it.second
```

Accesses the **value**.

Because `std::map` keeps keys sorted, the elements are displayed in ascending key order.

---

## Output

```text
1 -> Ali
2 -> Sara
3 -> Ahmed
```

---

## STL Map Advantages

- Efficient **O(log n)** operations.
- Automatically maintains keys in sorted order.
- Does not allow duplicate keys.
- Easy to use.
- Provides a standard and well-tested implementation.

## STL Map Disadvantages

- Can be slower than hash-based maps for some workloads.
- Requires additional memory for its tree-based structure.
- Does not provide average **O(1)** lookup like `unordered_map`.

---

# List-Based Map

## Definition

A **list-based map** stores key–value pairs in a linear structure such as an array, vector, or linked list.

Searching is performed sequentially.

For example:

```text
[ (1, "Ali"), (2, "Sara"), (3, "Omar") ]
```

To find key `3`, the structure may need to check:

```text
1 → 2 → 3
```

This makes it simple but less efficient for large datasets.

---

## C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <utility>
#include <stdexcept>
using namespace std;

template <typename K, typename V>
class SimpleMap {
private:
    vector<pair<K, V>> data;

public:
    void insert(K key, V value) {
        for (auto &item : data) {
            if (item.first == key) {
                item.second = value;
                return;
            }
        }

        data.push_back({key, value});
    }

    V find(K key) {
        for (auto &item : data) {
            if (item.first == key)
                return item.second;
        }

        throw runtime_error("Key not found");
    }

    void remove(K key) {
        for (auto it = data.begin(); it != data.end(); it++) {
            if (it->first == key) {
                data.erase(it);
                return;
            }
        }
    }

    void display() {
        for (auto &item : data) {
            cout << item.first << " -> " << item.second << endl;
        }
    }
};
```

### Code Explanation

```cpp
vector<pair<K, V>> data;
```

Stores key–value pairs in a vector.

`pair<K, V>` contains:

```text
key → value
```

### `insert()`

```cpp
void insert(K key, V value)
```

Adds a new key–value pair or updates an existing key.

```cpp
if (item.first == key)
```

Checks whether the key already exists.

```cpp
item.second = value;
```

Updates the existing value if the key is found.

```cpp
data.push_back({key, value});
```

Adds a new pair if the key does not already exist.

### `find()`

```cpp
V find(K key)
```

Searches for a key sequentially.

```cpp
if (item.first == key)
    return item.second;
```

Returns the associated value when the key is found.

```cpp
throw runtime_error("Key not found");
```

Reports an error when the key does not exist.

### `remove()`

```cpp
data.erase(it);
```

Removes the key–value pair from the vector.

### `display()`

```cpp
cout << item.first << " -> " << item.second << endl;
```

Displays every key–value pair.

---

## Main Function Example

```cpp
int main() {
    SimpleMap<int, string> mp;

    mp.insert(1, "Ali");
    mp.insert(2, "Sara");
    mp.insert(3, "Omar");

    cout << "Map contents:\n";
    mp.display();

    cout << "\nSearch key 2: " << mp.find(2) << endl;

    mp.remove(1);

    cout << "\nAfter deletion:\n";
    mp.display();

    return 0;
}
```

### Main Steps

1. Create a `SimpleMap` with integer keys and string values.
2. Insert three key–value pairs.
3. Display the map.
4. Search for key `2`.
5. Remove key `1`.
6. Display the remaining pairs.

---

## Output (if any)

Expected output:

```text
Map contents:
1 -> Ali
2 -> Sara
3 -> Omar

Search key 2: Sara

After deletion:
2 -> Sara
3 -> Omar
```

---

## Explanation

# Map Operations

| Operation   | Purpose                                 |
| ----------- | --------------------------------------- |
| **Insert**  | Adds a key–value pair                   |
| **Find**    | Retrieves a value using its key         |
| **Update**  | Changes the value associated with a key |
| **Remove**  | Deletes a key–value pair                |
| **Display** | Shows stored pairs                      |

### Key Uniqueness

Consider:

```cpp
mp.insert(1, "Ali");
mp.insert(1, "Omar");
```

A map does not maintain two separate entries for the same key.

In the provided `SimpleMap` implementation, the second insertion **updates** the existing value:

```text
1 → Omar
```

---

# Complexity

## List-Based Map

Because the vector is searched sequentially:

| Operation  | Time Complexity |
| ---------- | --------------: |
| **Insert** |            O(n) |
| **Search** |            O(n) |
| **Delete** |            O(n) |

The operations are linear because the implementation may need to inspect many elements.

## STL Map

The balanced-tree structure provides:

| Operation  | Time Complexity |
| ---------- | --------------: |
| **Insert** |        O(log n) |
| **Search** |        O(log n) |
| **Delete** |        O(log n) |

---

# STL Map vs List-Based Map

| Feature            | STL `map`            | List-Based Map              |
| ------------------ | -------------------- | --------------------------- |
| **Structure**      | Balanced search tree | Linear vector/list          |
| **Search**         | O(log n)             | O(n)                        |
| **Insert**         | O(log n)             | O(n)                        |
| **Delete**         | O(log n)             | O(n)                        |
| **Key Ordering**   | Automatically sorted | No automatic sorting        |
| **Efficiency**     | High                 | Low for large data          |
| **Implementation** | Ready-made           | Manually implemented        |
| **Typical Use**    | Real applications    | Learning and small datasets |

---

## Common Mistakes

- Assuming a map can contain duplicate keys.
- Confusing a **key** with a **value**.
- Forgetting that `std::map` stores keys in sorted order.
- Assuming `std::map` provides O(1) lookup; its typical complexity is **O(log n)**.
- Confusing `std::map` with `std::unordered_map`.
- Forgetting to include the appropriate headers such as `<map>`, `<vector>`, and `<stdexcept>`.
- Assuming a list-based map has the same performance as STL `map`.
- Forgetting that the list-based implementation must perform a sequential search.
- Treating an ADT as a specific implementation. An **ADT defines behavior and operations**, while the underlying data structure defines how those operations are implemented.

---

## Short Exam Notes

- **Map ADT:** Stores data as **key–value pairs**.
- **Key:** Uniquely identifies a value.
- **Value:** Data associated with a key; values may be duplicated.
- Common operations:
  - `insert`
  - `find`
  - `update`
  - `remove`

- **STL `map`:**
  - Keys are automatically sorted.
  - Duplicate keys are not allowed.
  - Typically implemented using a **Red-Black Tree**.
  - Insert/Search/Delete = **O(log n)**.

- **List-based map:**
  - Stores pairs in a linear structure.
  - Search = **O(n)**.
  - Insert = **O(n)** in the provided implementation.
  - Delete = **O(n)**.

- **Map ADT** provides an abstract interface; the implementation can use different underlying structures.
- Common applications include **databases, indexing, caching, and compiler symbol tables**.
