---
title: Arrays
description: All about arrays, how to create them using vectors and more.
lecture: Lecture 2
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-01
order: 15
---

# Using Array (Vector in C++)

## Explanation

An array is a collection of elements of the same data type stored in contiguous memory.
In modern C++, arrays are commonly implemented using **`vector` from the STL**. A vector is a **dynamic array** that can grow or shrink in size automatically. It provides built-in functions for easier data management. Unlike static arrays, vectors handle memory allocation internally. Elements are accessed using index positions starting from **0**. Vectors are widely used because they are **safer and more flexible** than traditional arrays.

### Advantages

• Dynamic size (can grow/shrink)
• Built-in functions (push_back, size, etc.)
• Safer than raw arrays
• Easy to use and manage

### Disadvantages

• Slightly slower than static arrays
• Uses extra memory
• Less control over memory

### ✅ Syntax

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> arr;          // empty vector
    vector<int> arr2 = {1,2,3,4};   // initialized vector

    cout << arr2[0];          // access element
}
```

---

# Insertion in Array

## Explanation

Insertion means adding elements into an array or vector. In vectors, insertion is simple using built-in functions. The most common method is **push_back()** which adds at the end. You can also insert at a specific position using **insert()**. Insertion may shift elements if done in the middle. Vectors automatically resize when capacity is exceeded. This makes insertion efficient and flexible compared to static arrays.

### Advantages

• Easy insertion with built-in functions
• Automatic resizing
• Flexible positions

### Disadvantages

• Slower for middle insertion
• Memory reallocation overhead

### ✅ Syntax

```cpp
vector<int> arr = {1,2,3};

arr.push_back(4);            // add at end

arr.insert(arr.begin()+1,10); // insert at index 1
```

---

# Remove from Array

## Explanation

Removing means deleting elements from an array/vector. In vectors, removal is done using **pop_back()** or **erase()**.
pop_back() removes the last element.
erase() removes element at a specific position.
Removing elements shifts remaining elements. Vector size decreases automatically after removal. This simplifies memory management compared to static arrays.

### Advantages

• Easy removal operations
• Automatic resizing
• Multiple removal methods

### Disadvantages

• Slow for large arrays (shifting)
• Index changes after removal

### ✅ Syntax

```cpp
vector<int> arr = {1,2,3,4};

arr.pop_back();          // remove last

arr.erase(arr.begin()+1); // remove index 1
```

---

# Get Size of Array

## Explanation

Size means the number of elements in the array/vector. In vectors, size is obtained using **size()** function. It returns the current number of elements. Size changes dynamically with insertion/removal. Helps in iteration and bounds checking. Prevents accessing invalid indexes. Important for writing safe and efficient programs.

### Advantages

• Easy to get size
• Always accurate
• Useful in loops

### ⚠️ Correction (Improved)

**Vectors practically have no real disadvantage for getting size.**
The overhead is **very small and usually ignored**.

### ✅ Syntax

```cpp
vector<int> arr = {1,2,3,4};

cout << arr.size();
```

---

# Two-Dimensional Array (2D Vector)

## Explanation

A 2D array is an array of arrays (matrix form). In C++, it is implemented using **vector of vectors**. Used to represent tables, matrices, and grids. Elements are accessed using row and column index. Structure is like rows and columns. Dynamic resizing is possible in both dimensions. Widely used in algorithms, games, and data representation.
✅ **Each row itself is a vector.**
✅ **Memory is not fully contiguous like normal arrays.**

### Advantages

• Flexible size
• Easy matrix representation
• Dynamic memory

### Disadvantages

• More complex than 1D array
• Slightly slower
✅ Memory not fully contiguous

### ✅ Syntax

```cpp
#include <vector>
using namespace std;

vector<vector<int>> matrix =
{
    {1,2,3},
    {4,5,6},
    {7,8,9}
};

cout << matrix[1][2];   // row 1 column 2
```

---

# ✅ Extra Important (Added for Exam)

### Loop through vector

```cpp
for(int i = 0; i < arr.size(); i++)
{
    cout << arr[i] << " ";
}
```

### Range loop (modern C++)

```cpp
for(int x : arr)
{
    cout << x << " ";
}
```

### Create 2D vector with size

```cpp
vector<vector<int>> matrix(3, vector<int>(4, 0));
```

3 rows, 4 columns initialized with 0
