---
title: Dictionary ADT
description: Explains dictionary key-value structures, C++ implementations, location-aware entries, complexity, and practical applications.
lecture: Lecture 16
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-07-29
order: 1
---

---

# Dictionary ADT

## Definition

A **Dictionary Abstract Data Type (ADT)** is a data structure that stores data as **key-value pairs**, where each key uniquely identifies its associated value.

A dictionary supports operations such as **insert**, **remove**, **find**, and **update**. It is commonly used in databases, search engines, compilers, and caching systems.

---

## Key Points

- A dictionary stores **key-value pairs**.
- **Keys are unique**, while values may be duplicated.
- Common operations include:
  - `Insert(key, value)`
  - `Remove(key)`
  - `Find(key)`
  - `Update(key, value)`

- Dictionaries can be implemented using:
  - Arrays
  - Linked lists
  - Vectors
  - Hash tables
  - Trees

- A simple dictionary implementation using a vector performs **linear search**, resulting in **O(n)** search time.
- Hash-table implementations can provide **O(1) average** search time.
- A **location-aware dictionary** also tracks the index or location of each entry.

### Example

| Key       | Value    |
| --------- | -------- |
| `"ID101"` | `"Ali"`  |
| `"ID102"` | `"Sara"` |
| `"ID103"` | `"Khan"` |

---

## Example / Code

### Simple Dictionary in C++

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

template <typename K, typename V>
class Dictionary {
private:
    vector<pair<K, V>> data;

public:
    void insert(K key, V value) {
        for (auto &item : data) {
            if (item.first == key) {
                item.second = value; // update existing value
                return;
            }
        }

        data.push_back({key, value});
    }

    bool find(K key, V &value) {
        for (auto &item : data) {
            if (item.first == key) {
                value = item.second;
                return true;
            }
        }

        return false;
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

int main() {
    Dictionary<int, string> dict;

    dict.insert(1, "Ali");
    dict.insert(2, "Sara");
    dict.insert(3, "Omar");

    cout << "Dictionary contents:\n";
    dict.display();

    string value;

    if (dict.find(2, value))
        cout << "\nFound: " << value << endl;

    dict.remove(1);

    cout << "\nAfter deletion:\n";
    dict.display();

    return 0;
}
```

### Code Explanation

#### 1. Template Declaration

```cpp
template <typename K, typename V>
```

- Makes the dictionary **generic**.
- `K` represents the key type.
- `V` represents the value type.

For example:

```cpp
Dictionary<int, string>
```

means the keys are integers and the values are strings.

#### 2. Data Storage

```cpp
vector<pair<K, V>> data;
```

- Stores key-value pairs inside a vector.
- `pair<K, V>` contains one key and its corresponding value.

#### 3. Insert Operation

```cpp
void insert(K key, V value)
```

- Searches for the key first.
- If the key already exists, its value is updated.
- Otherwise, a new key-value pair is added.

```cpp
item.second = value;
```

updates the existing value.

```cpp
data.push_back({key, value});
```

adds a new pair.

#### 4. Find Operation

```cpp
bool find(K key, V &value)
```

- Searches through the vector.
- If the key is found, its value is stored in `value`.
- Returns `true` when found and `false` otherwise.

#### 5. Remove Operation

```cpp
data.erase(it);
```

Removes the key-value pair corresponding to the requested key.

#### 6. Display Operation

```cpp
cout << item.first << " -> " << item.second << endl;
```

Prints each key and its associated value.

---

## Explanation

### 1. Dictionary Operations

| Operation   | Purpose                                    |
| ----------- | ------------------------------------------ |
| **Insert**  | Adds a key-value pair                      |
| **Find**    | Searches for a key and retrieves its value |
| **Update**  | Changes the value associated with a key    |
| **Remove**  | Deletes a key-value pair                   |
| **Display** | Shows stored entries                       |

### 2. Why Keys Must Be Unique

Each key identifies a particular entry.

For example:

```text
101 → Ali
102 → Sara
```

If the same key is inserted again:

```text
101 → Omar
```

the simple implementation updates the existing value rather than creating another entry with key `101`.

Therefore:

> **Keys uniquely identify dictionary entries.**

Values, however, may be repeated.

```text
101 → Ali
102 → Ali
```

is valid because the keys are different.

---

### 3. Dictionary as an ADT

A dictionary is an **Abstract Data Type** because it defines **what operations are available** without requiring a specific implementation.

For example, a dictionary may be implemented using:

- A vector
- An array
- A linked list
- A binary search tree
- A hash table

The interface remains conceptually the same even when the underlying implementation changes.

---

### 4. Simple Dictionary Complexity

The provided implementation stores entries in a vector and searches sequentially.

| Operation | Time Complexity |
| --------- | --------------: |
| Insert    |        **O(n)** |
| Search    |        **O(n)** |
| Delete    |        **O(n)** |

The linear complexity occurs because the implementation may need to examine every entry.

### Why Is Linear Search Used?

The simple implementation uses linear search because it is:

- Easy to understand
- Easy to implement
- Suitable for educational purposes
- Appropriate for small datasets

For large datasets, more advanced implementations such as hash tables or balanced trees are preferred.

---

## Location-Aware Dictionary

### Definition

A **location-aware dictionary** stores key-value pairs while also tracking the **position or index** of each entry.

Example:

| Key | Value | Location |
| --- | ----- | -------: |
| A   | 100   |        0 |
| B   | 200   |        1 |
| C   | 300   |        2 |

The location can represent an index in an array or vector.

### Why Location Awareness?

Location information can be useful for:

- Tracking entries
- Faster updates in some systems
- Efficient deletion strategies
- Symbol tables
- File indexing
- Database-related systems

### C++ Implementation

```cpp
#include <iostream>
#include <vector>
using namespace std;

template <typename K, typename V>
class LocationAwareDictionary {
private:
    vector<pair<K, V>> data;

public:
    void insert(K key, V value) {
        data.push_back({key, value});
    }

    void showLocations() {
        for (int i = 0; i < data.size(); i++) {
            cout << "Key: " << data[i].first
                 << " Value: " << data[i].second
                 << " Location: " << i << endl;
        }
    }

    int getLocation(K key) {
        for (int i = 0; i < data.size(); i++) {
            if (data[i].first == key)
                return i;
        }

        return -1;
    }
};
```

### Important Functions

#### `insert()`

```cpp
data.push_back({key, value});
```

Adds a new key-value pair to the vector.

#### `showLocations()`

```cpp
for (int i = 0; i < data.size(); i++)
```

Traverses the vector and displays the index of every entry.

#### `getLocation()`

```cpp
if (data[i].first == key)
    return i;
```

Searches for a key and returns its index.

If the key does not exist:

```cpp
return -1;
```

indicates that the key was not found.

---

## Dictionary Implementations

| Implementation       | Typical Search | Main Characteristic      |
| -------------------- | -------------: | ------------------------ |
| Array/Vector         |           O(n) | Simple                   |
| Linked List          |           O(n) | Dynamic nodes            |
| Balanced Search Tree |       O(log n) | Maintains ordered keys   |
| Hash Table           |   O(1) average | Very fast average lookup |

The actual performance depends on the implementation and its design.

---

## Dictionary vs. Map ADT

A **Dictionary ADT** and **Map ADT** are closely related concepts. Both organize information using key-value relationships.

| Feature                  | Dictionary ADT                | Map ADT                |
| ------------------------ | ----------------------------- | ---------------------- |
| Stores                   | Key-value pairs               | Key-value pairs        |
| Unique keys              | Yes                           | Yes                    |
| Main purpose             | Key-based retrieval           | Key-based association  |
| Possible implementations | Lists, trees, hashing         | Lists, trees, hashing  |
| Abstraction              | Defines dictionary operations | Defines map operations |

In many programming contexts, the terms **dictionary** and **map** are used interchangeably.

---

## Real-World Applications

Dictionaries are widely used in:

- **Databases** — associating identifiers with records
- **Compilers** — symbol tables associate identifiers with information
- **Search engines** — mapping terms to indexed information
- **Caching systems** — associating keys with stored data
- **Programming languages** — implementing associative collections

In C++, related standard-library containers include:

- `std::map` — ordered key-value container
- `std::unordered_map` — hash-table-based key-value container

---

## Output (if any)

For the simple dictionary example, the output is conceptually:

```text
Dictionary contents:
1 -> Ali
2 -> Sara
3 -> Omar

Found: Sara

After deletion:
2 -> Sara
3 -> Omar
```

---

## Common Mistakes

- **Allowing duplicate keys:** A dictionary requires keys to be unique.
- **Confusing keys and values:** The key identifies an entry; the value is the associated data.
- **Assuming all dictionaries have O(1) search:** Complexity depends on the implementation.
- **Confusing ADT with implementation:** The Dictionary ADT defines operations, while a vector, tree, or hash table provides the implementation.
- **Forgetting the not-found case:** Search functions should indicate when a key does not exist.
- **Assuming location is permanent:** In a vector-based structure, inserting or deleting elements can change indices.
- **Using linear search for very large datasets:** Hash tables or balanced trees are generally more appropriate for large collections.

---

## Short Exam Notes

- **Dictionary ADT:** Stores data as unique **key-value pairs**.
- **Main operations:** Insert, Find, Update, Remove.
- **Keys:** Must be **unique**.
- **Values:** May be duplicated.
- **Simple vector-based dictionary:** Uses **linear search**.
- **Simple implementation complexity:** Insert, Search, and Delete are generally **O(n)**.
- **Location-aware dictionary:** Tracks the index/location of entries.
- **Hash-table dictionary:** Provides **O(1) average** lookup.
- **Tree-based dictionary:** Can provide **O(log n)** search when balanced.
- **Applications:** Databases, compilers, search engines, and caching.
- **C++ containers:** `std::map` and `std::unordered_map`.
