---
title: Sorting and Merge Sort
description: Covers sorting algorithms, divide-and-conquer, Merge Sort implementation, complexity analysis, and practical applications.
lecture: Lecture 9
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-06-10
order: 8
---

---

# Sorting and Merge Sort

## Definition

**Sorting** is the process of arranging data elements according to a specific order, usually **ascending** or **descending**.

Sorting makes data easier and more efficient to:

- Search
- Process
- Analyze
- Organize
- Compare

### Example

Unsorted:

```text
8 3 6 1 9 2
```

Ascending:

```text
1 2 3 6 8 9
```

Descending:

```text
9 8 6 3 2 1
```

---

## Key Points

- Sorting arranges data according to a specified order.
- **Ascending order** goes from smallest to largest.
- **Descending order** goes from largest to smallest.
- Sorted data can improve the efficiency of searching algorithms such as **Binary Search**.
- Sorting is widely used in databases, search engines, operating systems, banking, e-commerce, and inventory systems.
- Sorting algorithms are broadly classified as:
  - **Comparison-based**
  - **Non-comparison-based**

- **Merge Sort** is a comparison-based, **Divide-and-Conquer** algorithm.
- Merge Sort has **O(n log n)** time complexity in the best, average, and worst cases.
- Merge Sort requires **O(n)** additional space in the implementation presented in the lecture.

---

## Example / Code

### Types of Sorting Algorithms

### Comparison-Based Sorting

Comparison-based algorithms determine ordering by comparing elements.

Examples:

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort

The algorithms use comparisons such as:

```text
a[i] < a[j]
a[i] > a[j]
a[i] == a[j]
```

### Non-Comparison-Based Sorting

These algorithms use properties of the data rather than directly comparing every pair of elements.

Examples:

- Counting Sort
- Radix Sort
- Bucket Sort

They can achieve linear-time performance under appropriate assumptions about the input data.

---

### Common Sorting Algorithms

| Algorithm          | Basic Idea                                    |       Best |    Average |      Worst |      Space |
| ------------------ | --------------------------------------------- | ---------: | ---------: | ---------: | ---------: |
| **Bubble Sort**    | Repeatedly swaps adjacent elements            |       O(n) |      O(n²) |      O(n²) |       O(1) |
| **Selection Sort** | Repeatedly selects the smallest element       |      O(n²) |      O(n²) |      O(n²) |       O(1) |
| **Insertion Sort** | Inserts each element into its sorted position |       O(n) |      O(n²) |      O(n²) |       O(1) |
| **Merge Sort**     | Divides and merges sorted subarrays           | O(n log n) | O(n log n) | O(n log n) |       O(n) |
| **Quick Sort**     | Partitions around a pivot                     | O(n log n) | O(n log n) |      O(n²) | O(log n)\* |

\*The space figure for Quick Sort depends on the implementation and recursion behavior.

### Bubble Sort

Bubble Sort repeatedly compares **adjacent elements** and swaps them when they are in the wrong order.

```text
8 3 6
↓
3 8 6
↓
3 6 8
```

It is simple but inefficient for large datasets.

### Selection Sort

Selection Sort repeatedly finds the smallest element in the unsorted section and places it at the beginning of that section.

### Insertion Sort

Insertion Sort builds the sorted portion **one element at a time**.

It works particularly well for:

- Small datasets
- Nearly sorted data

Insertion Sort is also **stable**, meaning equal elements retain their original relative order.

### Quick Sort

Quick Sort:

1. Selects a **pivot**.
2. Partitions the elements around the pivot.
3. Recursively sorts the partitions.

Its worst-case complexity is **O(n²)** when poor pivot choices repeatedly occur.

---

# Divide-and-Conquer

## Definition

**Divide-and-Conquer** is an algorithm design technique that solves a large problem by:

1. **Divide** — break the problem into smaller subproblems.
2. **Conquer** — solve the smaller problems, usually recursively.
3. **Combine** — combine their solutions into the final result.

Algorithms using this strategy include:

- Merge Sort
- Quick Sort
- Binary Search
- Strassen's Matrix Multiplication

---

# Merge Sort

## Definition

**Merge Sort** is a **Divide-and-Conquer sorting algorithm** that repeatedly divides an array into smaller subarrays and then merges those subarrays in sorted order.

The algorithm continues dividing until each subarray contains only **one element**.

A single element is already sorted.

The sorted subarrays are then merged until the complete array is sorted.

---

## Explanation

Consider:

```text
8 3 6 2
```

### Step 1: Divide

Split the array:

```text
8 3 | 6 2
```

Split again:

```text
8 | 3 | 6 | 2
```

Each subarray now contains one element.

### Step 2: Merge

Merge:

```text
8 + 3 → 3 8
```

and:

```text
6 + 2 → 2 6
```

Finally:

```text
3 8 + 2 6 → 2 3 6 8
```

### Complete Process

```text
        8 3 6 2
       /       \
     8 3       6 2
    /   \     /   \
   8     3   6     2
    \   /     \   /
    3 8       2 6
       \     /
       2 3 6 8
```

**Key idea:** Merge Sort divides **downward** and merges **upward**.

---

## Merge Sort Implementation

Merge Sort generally uses two functions:

- `mergeSort()` — divides the array recursively.
- `merge()` — combines two sorted portions.

```cpp
#include <iostream>
using namespace std;

void merge(int a[], int left, int mid, int right)
{
    int temp[100];

    int i = left;
    int j = mid + 1;
    int k = left;

    while (i <= mid && j <= right)
    {
        if (a[i] < a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }

    while (i <= mid)
        temp[k++] = a[i++];

    while (j <= right)
        temp[k++] = a[j++];

    for (int x = left; x <= right; x++)
        a[x] = temp[x];
}

void mergeSort(int a[], int left, int right)
{
    if (left < right)
    {
        int mid = (left + right) / 2;

        mergeSort(a, left, mid);
        mergeSort(a, mid + 1, right);

        merge(a, left, mid, right);
    }
}

int main()
{
    int a[] = {8, 3, 6, 2, 7, 1};
    int n = 6;

    mergeSort(a, 0, n - 1);

    cout << "Sorted Array: ";

    for (int i = 0; i < n; i++)
        cout << a[i] << " ";
}
```

### Code Explanation

#### `merge()`

```cpp
void merge(int a[], int left, int mid, int right)
```

Receives:

- `a` — the array
- `left` — beginning of the current section
- `mid` — dividing point
- `right` — end of the current section

The two sections are:

```text
left ... mid
mid+1 ... right
```

These two sections are already sorted when `merge()` is called.

---

### Temporary Array

```cpp
int temp[100];
```

The temporary array stores the merged elements before copying them back into the original array.

---

### Three Index Variables

```cpp
int i = left;
int j = mid + 1;
int k = left;
```

- `i` tracks the left sorted section.
- `j` tracks the right sorted section.
- `k` tracks the position in `temp`.

---

### Compare Elements

```cpp
while (i <= mid && j <= right)
{
    if (a[i] < a[j])
        temp[k++] = a[i++];
    else
        temp[k++] = a[j++];
}
```

The algorithm compares the current elements of both sorted sections.

The smaller element is copied into `temp`.

---

### Copy Remaining Elements

```cpp
while (i <= mid)
    temp[k++] = a[i++];

while (j <= right)
    temp[k++] = a[j++];
```

If one section finishes before the other, the remaining elements are already sorted and can be copied directly.

---

### Copy Back

```cpp
for (int x = left; x <= right; x++)
    a[x] = temp[x];
```

The merged sorted elements are copied back into the original array.

---

### `mergeSort()`

```cpp
if (left < right)
```

This is the recursion condition. If `left >= right`, the section contains zero or one element and is already sorted.

```cpp
int mid = (left + right) / 2;
```

Calculates the middle position.

For example:

```text
left = 0
right = 3

mid = (0 + 3) / 2
    = 1
```

The array is divided into:

```text
0 ... 1
2 ... 3
```

The recursive calls:

```cpp
mergeSort(a, left, mid);
mergeSort(a, mid + 1, right);
```

continue dividing the array.

Finally:

```cpp
merge(a, left, mid, right);
```

combines the two sorted halves.

---

## Output

For:

```text
8 3 6 2 7 1
```

the expected output is:

```text
Sorted Array: 1 2 3 6 7 8
```

---

# Time Complexity of Merge Sort

## Number of Levels

Each division cuts the input approximately in half.

For `n = 8`:

```text
8
↓
4
↓
2
↓
1
```

The number of levels is:

$$
\log_2(n)
$$

For example:

$$
\log_2(8)=3
$$

---

## Work at Each Level

At every level, all elements participate in the merging process.

For `n = 8`:

```text
Level 1: 8 elements
Level 2: 8 elements
Level 3: 8 elements
```

Therefore:

$$
O(n)
$$

work is performed at each level.

Since there are approximately:

$$
O(\log n)
$$

levels:

$$
O(n)\times O(\log n)
$$

Therefore:

$$
\boxed{O(n\log n)}
$$

---

## Recurrence Relation

Merge Sort can be represented by:

$$
T(n)=2T\left(\frac{n}{2}\right)+n
$$

Where:

- `2T(n/2)` → recursively solves two halves.
- `n` → represents the merging work.

The resulting complexity is:

$$
\boxed{O(n\log n)}
$$

---

## Space Complexity

Merge Sort requires additional memory for the temporary array:

```cpp
int temp[100];
```

In a general implementation, the temporary storage grows with the input size.

Therefore:

$$
\boxed{O(n)}
$$

additional space is required for the merge operation.

---

## Best, Average, and Worst Case

One of the major advantages of Merge Sort is its predictable performance.

| Case             | Complexity |
| ---------------- | ---------: |
| **Best Case**    | O(n log n) |
| **Average Case** | O(n log n) |
| **Worst Case**   | O(n log n) |

The input being already sorted, partially sorted, or randomly arranged does not change the fundamental divide-and-merge process.

---

## Common Mistakes

- Confusing **Merge Sort** with **Bubble Sort**.
  - Merge Sort uses **Divide-and-Conquer**.
  - Bubble Sort repeatedly compares adjacent elements.

- Forgetting that Merge Sort has **two major stages**:
  1. Divide
  2. Merge

- Assuming the array is sorted after division.
  - Division only creates smaller subarrays.
  - The actual ordering occurs during **merging**.

- Forgetting the recursive base case:

```cpp
if (left < right)
```

- Mixing up the two halves:
  - Left half: `left ... mid`
  - Right half: `mid + 1 ... right`

- Forgetting to copy the merged elements back into the original array.

- Assuming Merge Sort uses `O(1)` extra space.
  - The implementation requires additional temporary storage, giving **O(n)** auxiliary space.

- Confusing the three stages of Divide-and-Conquer:
  - **Divide**
  - **Conquer**
  - **Combine**

---

## Short Exam Notes

- **Sorting:** Arranging data according to a specified order.
- **Comparison-based sorting:** Determines order by comparing elements.
- **Non-comparison sorting:** Uses properties such as counts, digits, or value ranges.
- **Divide-and-Conquer:** Divide → Conquer → Combine.
- **Merge Sort:** A Divide-and-Conquer sorting algorithm.
- Merge Sort divides the array until each part contains **one element**.
- It then **merges sorted subarrays**.
- **Best Case:** O(n log n)
- **Average Case:** O(n log n)
- **Worst Case:** O(n log n)
- **Space Complexity:** O(n)
- Merge Sort uses two main functions:
  - `mergeSort()` → divides recursively.
  - `merge()` → combines sorted halves.

- Recurrence:

$$
T(n)=2T(n/2)+n
$$

- Final complexity:

$$
\boxed{O(n\log n)}
$$

- Merge Sort is especially useful when **predictable performance** and efficient sorting of large datasets are important.
