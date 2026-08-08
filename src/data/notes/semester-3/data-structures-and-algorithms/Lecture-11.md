---
title: Sequential Search and Binary Search
description: Explains sequential and binary searching, their algorithms, complexities, requirements, advantages, and C++ implementations.
lecture: Lecture 11
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-06-24
order: 6
---

---

# Sequential Search and Binary Search

## Definition

**Searching** is the process of locating a specific element, called the **key** or **target**, within a collection of data.

Two fundamental searching algorithms are:

- **Sequential Search (Linear Search)** — checks elements one by one.
- **Binary Search** — repeatedly divides a **sorted** search range in half.

---

## Key Points

- **Sequential Search** examines elements from beginning to end until the target is found.
- Sequential Search **does not require sorted data**.
- **Binary Search** repeatedly divides the search range into two halves.
- Binary Search **requires sorted data**.
- Sequential Search has:
  - Best case: **O(1)**
  - Average case: **O(n)**
  - Worst case: **O(n)**

- Binary Search has:
  - Best case: **O(1)**
  - Average case: **O(log n)**
  - Worst case: **O(log n)**

- Iterative implementations of both algorithms use **O(1)** extra space.
- Binary Search is significantly more efficient than Sequential Search for large, sorted datasets.
- Binary Search works especially well with arrays and vectors because they provide efficient random access.

---

## Example / Code

# Sequential Search (Linear Search)

## Definition

**Sequential Search**, also called **Linear Search**, searches for an element by checking each element sequentially.

It starts at the first element and continues until:

- The target is found, or
- All elements have been checked.

### Example

Given:

```text
[10, 25, 30, 45, 60]
```

Search for:

```text
30
```

The algorithm checks:

```text
10 → 25 → 30
```

Since `30` is found at index `2`, the search stops.

### Pseudocode

```text
SEQUENTIAL_SEARCH(arr, n, key)

for i = 0 to n-1
    if arr[i] == key
        return i

return -1
```

A return value of `-1` indicates that the target was not found.

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key)
            return i;
    }

    return -1;
}

int main() {
    int arr[] = {10, 25, 30, 45, 60};
    int n = 5;
    int key = 30;

    int result = linearSearch(arr, n, key);

    if (result != -1)
        cout << "Element found at index: " << result << endl;
    else
        cout << "Element not found" << endl;

    return 0;
}
```

### Code Explanation

```cpp
for (int i = 0; i < n; i++)
```

Starts at index `0` and checks every element until the end of the array.

```cpp
if (arr[i] == key)
```

Compares the current element with the target.

```cpp
return i;
```

Returns the index immediately when the target is found.

```cpp
return -1;
```

Indicates that the target does not exist in the array.

---

## Working Principle

Suppose:

```text
Array:  [10, 25, 30, 45, 60]
Key:    45
```

Search sequence:

```text
10 ≠ 45
25 ≠ 45
30 ≠ 45
45 = 45  ✓
```

Result:

```text
Index = 3
```

If the key is `100`:

```text
10 → 25 → 30 → 45 → 60
```

All elements are checked and the result is:

```text
-1
```

---

## Time and Space Complexity

| Case             | Complexity |
| ---------------- | ---------: |
| **Best Case**    |       O(1) |
| **Average Case** |       O(n) |
| **Worst Case**   |       O(n) |
| **Space**        |       O(1) |

### Why?

In the best case, the target is the first element, so only one comparison is required.

In the worst case, the target is the last element or does not exist, requiring all `n` elements to be examined.

### Advantages

- Simple to understand.
- Easy to implement.
- Works on **unsorted data**.
- Requires no preprocessing or sorting.
- Suitable for small datasets.
- Suitable when data changes frequently and maintaining a sorted order is undesirable.

### Disadvantages

- Slow for large datasets.
- May require checking every element.
- Less efficient than Binary Search on sorted arrays.

---

# Binary Search

## Definition

**Binary Search** is a **divide-and-conquer searching algorithm** that repeatedly divides a sorted search range into two halves.

Instead of checking every element, it checks the **middle element** and determines which half could contain the target.

### Requirement

The data must be **sorted**.

For example:

```text
[10, 20, 30, 40, 50, 60]
```

---

## Working Principle

Suppose we search for `40`:

```text
[10, 20, 30, 40, 50, 60]
```

### Step 1

Middle element:

```text
30
```

Since:

```text
40 > 30
```

Search only the right half:

```text
[40, 50, 60]
```

### Step 2

Middle element:

```text
50
```

Since:

```text
40 < 50
```

Search the left portion:

```text
[40]
```

### Step 3

```text
40 = 40
```

The target is found.

### Key Idea

Each step eliminates approximately **half of the remaining search space**.

---

## Pseudocode

```text
BINARY_SEARCH(arr, left, right, key)

while left <= right
    mid = (left + right) / 2

    if arr[mid] == key
        return mid

    else if arr[mid] < key
        left = mid + 1

    else
        right = mid - 1

return -1
```

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int n, int key) {
    int left = 0;
    int right = n - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == key)
            return mid;

        else if (arr[mid] < key)
            left = mid + 1;

        else
            right = mid - 1;
    }

    return -1;
}

int main() {
    int arr[] = {10, 20, 30, 40, 50, 60};
    int n = 6;
    int key = 40;

    int result = binarySearch(arr, n, key);

    if (result != -1)
        cout << "Element found at index: " << result << endl;
    else
        cout << "Element not found" << endl;

    return 0;
}
```

### Code Explanation

```cpp
int left = 0;
```

Sets the beginning of the search range.

```cpp
int right = n - 1;
```

Sets the end of the search range.

```cpp
while (left <= right)
```

Continues searching while a valid range remains.

```cpp
int mid = left + (right - left) / 2;
```

Calculates the middle index.

This form is preferable to:

```cpp
(left + right) / 2
```

because it avoids integer overflow when `left` and `right` are very large.

```cpp
if (arr[mid] == key)
    return mid;
```

If the middle element is the target, return its index.

```cpp
else if (arr[mid] < key)
    left = mid + 1;
```

If the middle value is smaller than the target, discard the left half and search the right half.

```cpp
else
    right = mid - 1;
```

If the middle value is greater than the target, discard the right half and search the left half.

```cpp
return -1;
```

If the search range becomes empty, the target was not found.

---

## Why Binary Search Is Faster

Suppose there are `1,000,000` sorted elements.

### Sequential Search

In the worst case, it may examine:

$$
1,000,000
$$

elements.

### Binary Search

It repeatedly halves the search space:

$$
1,000,000
\rightarrow 500,000
\rightarrow 250,000
\rightarrow \cdots
$$

The number of steps is approximately:

$$
\log_2(n)
$$

For `1,000,000` elements:

$$
\log_2(1,000,000) \approx 20
$$

So Binary Search can locate the target in roughly **20 iterations** in the worst case, compared with up to **1,000,000 comparisons** for Sequential Search.

---

## Time and Space Complexity

| Case                | Complexity |
| ------------------- | ---------: |
| **Best Case**       |       O(1) |
| **Average Case**    |   O(log n) |
| **Worst Case**      |   O(log n) |
| **Iterative Space** |       O(1) |
| **Recursive Space** |   O(log n) |

### Advantages

- Very efficient for large sorted datasets.
- Requires only **O(log n)** comparisons in the worst case.
- Simple iterative implementation.
- Excellent for arrays and vectors.

### Disadvantages

- Requires **sorted data**.
- Requires efficient random access for the usual array-based implementation.
- Less suitable for linked lists because accessing the middle element is not efficient.
- Maintaining sorted data can add cost when frequent insertions and deletions occur.

---

# Sequential Search vs Binary Search

## Explanation

| Feature                 | Sequential Search | Binary Search                  |
| ----------------------- | ----------------- | ------------------------------ |
| **Other Name**          | Linear Search     | —                              |
| **Data Requirement**    | Can be unsorted   | Must be sorted                 |
| **Method**              | Checks one by one | Repeatedly halves search range |
| **Best Case**           | O(1)              | O(1)                           |
| **Average Case**        | O(n)              | O(log n)                       |
| **Worst Case**          | O(n)              | O(log n)                       |
| **Iterative Space**     | O(1)              | O(1)                           |
| **Implementation**      | Very easy         | Moderate                       |
| **Small/Unsorted Data** | Good              | Not applicable unless sorted   |
| **Large Sorted Data**   | Slow              | Excellent                      |

### Choosing the Right Algorithm

Use **Sequential Search** when:

- The data is unsorted.
- The dataset is small.
- Simplicity is important.
- Data changes frequently and maintaining sorted order is unnecessary.

Use **Binary Search** when:

- The data is sorted.
- The dataset is large.
- Fast searching is important.
- The data supports efficient random access.

---

## Output (if any)

### Sequential Search

For:

```text
Array: 10 25 30 45 60
Key: 30
```

Expected output:

```text
Element found at index: 2
```

### Binary Search

For:

```text
Array: 10 20 30 40 50 60
Key: 40
```

Expected output:

```text
Element found at index: 3
```

---

## Common Mistakes

- Using **Binary Search on unsorted data**.
- Forgetting that array indexes start at **0**.
- Using the wrong update after a comparison:
  - Target greater than middle → `left = mid + 1`
  - Target smaller than middle → `right = mid - 1`

- Forgetting to return `-1` when the element is not found.
- Confusing **O(n)** with **O(log n)**.
- Assuming Binary Search is always faster when the cost of sorting the data has not been considered.
- Using Binary Search directly on a linked list and expecting the same efficiency as an array.
- Forgetting the loop condition:

```cpp
while (left <= right)
```

---

## Short Exam Notes

- **Sequential Search:** Checks elements one by one until the target is found.
- **Binary Search:** Searches a sorted collection by repeatedly dividing the search range in half.
- Sequential Search **does not require sorted data**.
- Binary Search **requires sorted data**.
- Sequential Search:
  - Best = **O(1)**
  - Average = **O(n)**
  - Worst = **O(n)**

- Binary Search:
  - Best = **O(1)**
  - Average = **O(log n)**
  - Worst = **O(log n)**

- Iterative versions use **O(1)** extra space.
- Binary Search follows **Divide-and-Conquer**.
- Sequential Search is preferable for **small or unsorted data**.
- Binary Search is preferable for **large, sorted data**.
- Main Binary Search rule:
  - `key == arr[mid]` → found
  - `key > arr[mid]` → search right
  - `key < arr[mid]` → search left

- **Sequential Search → one by one**
- **Binary Search → half by half**
