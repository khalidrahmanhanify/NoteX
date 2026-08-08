---
title: Selection Sort, Insertion Sort, and Bubble Sort
description: Explains three introductory sorting algorithms, their operations, complexities, comparisons, and C++ implementations.
lecture: Lecture 10
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-05-13
order: 7
---

---

# Selection Sort, Insertion Sort, and Bubble Sort

## Definition

**Sorting** is the process of arranging data elements in a specific order, usually **ascending** or **descending**.

Sorting is fundamental in computer science because organized data can make searching, analysis, database management, and information retrieval more efficient.

**Selection Sort, Insertion Sort, and Bubble Sort** are simple **comparison-based sorting algorithms** commonly used to introduce the fundamental concepts of sorting.

---

## Key Points

- **Selection Sort** repeatedly selects the minimum element and places it in its correct position.
- **Insertion Sort** builds a sorted portion by inserting each new element into its proper position.
- **Bubble Sort** repeatedly compares adjacent elements and swaps elements that are out of order.
- All three algorithms have a worst-case complexity of **O(n²)**.
- Selection Sort has **O(n²)** complexity even in the best case.
- Insertion Sort has **O(n)** best-case complexity.
- Bubble Sort can have **O(n)** best-case complexity when implemented with a swap-detection optimization.
- All three use **O(1)** extra space in the implementations presented.
- Selection Sort is **not stable** in its standard implementation.
- Insertion Sort and Bubble Sort are **stable**.
- Insertion Sort is particularly useful for **small or nearly sorted datasets**.
- Selection Sort generally performs **fewer swaps** than Bubble Sort.
- Bubble Sort is primarily useful for **learning and demonstration**.

---

## Example / Code

# Selection Sort

## Definition

**Selection Sort** is a comparison-based sorting algorithm that repeatedly finds the **smallest element** in the unsorted portion and places it at the beginning of that portion.

The array can be viewed as two sections:

```text
[ Sorted Portion | Unsorted Portion ]
```

During each pass:

1. Assume the first unsorted element is the minimum.
2. Compare it with the remaining unsorted elements.
3. Find the actual minimum.
4. Swap it with the first unsorted element.
5. Move the boundary between sorted and unsorted sections.
6. Repeat.

### Example

Given:

```text
[29, 10, 14, 37, 13]
```

**Pass 1:**

Minimum = `10`

```text
[10, 29, 14, 37, 13]
```

**Pass 2:**

Minimum of remaining elements = `13`

```text
[10, 13, 14, 37, 29]
```

**Pass 3:**

Minimum = `14`

```text
[10, 13, 14, 37, 29]
```

**Pass 4:**

Minimum = `29`

```text
[10, 13, 14, 29, 37]
```

The array is sorted.

### Pseudocode

```text
SELECTION-SORT(A)

for i = 0 to n-2
    minIndex = i

    for j = i+1 to n-1
        if A[j] < A[minIndex]
            minIndex = j

    swap(A[i], A[minIndex])
```

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        swap(arr[i], arr[minIndex]);
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    cout << endl;
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    cout << "Sorted Array (Selection Sort): ";
    printArray(arr, n);

    return 0;
}
```

### Line-by-Line Explanation

```cpp
for (int i = 0; i < n - 1; i++)
```

Moves through each position where the next minimum element should be placed.

```cpp
int minIndex = i;
```

Initially assumes the first unsorted element is the smallest.

```cpp
for (int j = i + 1; j < n; j++)
```

Searches the rest of the unsorted section.

```cpp
if (arr[j] < arr[minIndex])
    minIndex = j;
```

Updates the position of the minimum element when a smaller value is found.

```cpp
swap(arr[i], arr[minIndex]);
```

Places the minimum element in its correct position.

---

## Time Complexity

Selection Sort always searches the remaining unsorted portion.

Number of comparisons:

$$
(n-1)+(n-2)+(n-3)+\cdots+1
$$

This equals:

$$
\frac{n(n-1)}{2}
$$

Therefore:

| Case    | Complexity |
| ------- | ---------: |
| Best    |  **O(n²)** |
| Average |  **O(n²)** |
| Worst   |  **O(n²)** |

### Advantages

- Easy to understand.
- Easy to implement.
- Requires **O(1)** extra space.
- Performs relatively few swaps.
- Suitable for small datasets.

### Disadvantages

- Slow for large datasets.
- Remains **O(n²)** even when the data is already sorted.
- Not adaptive.
- Standard Selection Sort is not stable.

---

# Insertion Sort

## Definition

**Insertion Sort** builds the sorted array **one element at a time**.

It works similarly to arranging playing cards: take one card and insert it into its correct position among the cards already arranged.

The array is divided into:

```text
[ Sorted Portion | Unsorted Portion ]
```

### Working Principle

1. Assume the first element is sorted.
2. Select the next element as the **key**.
3. Compare the key with elements in the sorted portion.
4. Shift larger elements one position to the right.
5. Insert the key into its correct position.
6. Repeat until the entire array is sorted.

### Example

Given:

```text
[29, 10, 14, 37, 13]
```

**Pass 1 — Key = 10**

Shift `29`:

```text
[10, 29, 14, 37, 13]
```

**Pass 2 — Key = 14**

Shift `29`:

```text
[10, 14, 29, 37, 13]
```

**Pass 3 — Key = 37**

No shifting is required:

```text
[10, 14, 29, 37, 13]
```

**Pass 4 — Key = 13**

Shift `37`, `29`, and `14`:

```text
[10, 13, 14, 29, 37]
```

### Pseudocode

```text
INSERTION-SORT(A)

for i = 1 to n-1
    key = A[i]
    j = i - 1

    while j >= 0 and A[j] > key
        A[j+1] = A[j]
        j = j - 1

    A[j+1] = key
```

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    cout << endl;
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    cout << "Sorted Array (Insertion Sort): ";
    printArray(arr, n);

    return 0;
}
```

### Line-by-Line Explanation

```cpp
for (int i = 1; i < n; i++)
```

Starts from the second element because the first element is considered already sorted.

```cpp
int key = arr[i];
```

Stores the element currently being inserted.

```cpp
int j = i - 1;
```

Starts comparing the key with the element immediately before it.

```cpp
while (j >= 0 && arr[j] > key)
```

Continues while:

- There are still elements in the sorted portion.
- The current element is greater than the key.

```cpp
arr[j + 1] = arr[j];
```

Shifts a larger element one position to the right.

```cpp
j--;
```

Moves to the previous element.

```cpp
arr[j + 1] = key;
```

Places the key into its correct position.

---

## Time Complexity

### Best Case

When the array is already sorted:

```text
[1, 2, 3, 4, 5]
```

Only minimal comparisons are needed.

$$
O(n)
$$

### Worst Case

When the array is in reverse order:

```text
[5, 4, 3, 2, 1]
```

Each element must be shifted through the sorted portion.

$$
O(n^2)
$$

| Case    | Complexity |
| ------- | ---------: |
| Best    |   **O(n)** |
| Average |  **O(n²)** |
| Worst   |  **O(n²)** |

### Advantages

- Easy to implement.
- Efficient for small datasets.
- Excellent for nearly sorted data.
- **Stable**.
- Requires **O(1)** extra space.
- Adaptive to the initial arrangement of data.

### Disadvantages

- Inefficient for large datasets.
- Worst-case complexity is **O(n²)**.
- Can perform many shifts on large or reverse-sorted arrays.

---

# Bubble Sort

## Definition

**Bubble Sort** repeatedly compares **adjacent elements** and swaps them when they are in the wrong order.

After each pass, a large element moves toward the end of the array, similar to a bubble rising toward the surface.

### Working Principle

1. Compare adjacent elements.
2. Swap them if they are out of order.
3. Continue through the array.
4. Repeat the passes.
5. Stop early if no swaps occur.

### Example

Initial array:

```text
[5, 3, 8, 4]
```

### Pass 1

Compare `5` and `3`:

```text
[3, 5, 8, 4]
```

Compare `8` and `4`:

```text
[3, 5, 4, 8]
```

The largest element, `8`, has reached the end.

### Pass 2

Compare `5` and `4`:

```text
[3, 4, 5, 8]
```

The array is sorted.

### Pseudocode

```text
BUBBLE-SORT(A)

for i = 0 to n-2
    for j = 0 to n-i-2
        if A[j] > A[j+1]
            swap(A[j], A[j+1])
```

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        if (!swapped)
            break;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";

    cout << endl;
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int n = sizeof(arr) / sizeof(arr[0]);

    bubbleSort(arr, n);

    cout << "Sorted Array (Bubble Sort): ";
    printArray(arr, n);

    return 0;
}
```

### Line-by-Line Explanation

```cpp
bool swapped = false;
```

Records whether any swap occurred during the current pass.

```cpp
if (arr[j] > arr[j + 1])
```

Checks whether adjacent elements are in the wrong order.

```cpp
swap(arr[j], arr[j + 1]);
```

Swaps the two elements.

```cpp
swapped = true;
```

Records that at least one swap occurred.

```cpp
if (!swapped)
    break;
```

If no swaps occurred, the array is already sorted, so the algorithm stops early.

---

## Time Complexity

| Case    | Complexity |
| ------- | ---------: |
| Best    |   **O(n)** |
| Average |  **O(n²)** |
| Worst   |  **O(n²)** |

The **O(n)** best case assumes the optimized implementation with the `swapped` flag.

### Advantages

- Very easy to understand.
- Easy to implement.
- Stable.
- Adaptive when the optimized version detects an already sorted array.
- Requires **O(1)** extra space.

### Disadvantages

- Inefficient for large datasets.
- Performs many comparisons and swaps.
- Primarily useful for educational purposes.

---

# Comparison of Selection, Insertion, and Bubble Sort

## Explanation

| Feature                | Selection Sort | Insertion Sort             | Bubble Sort            |
| ---------------------- | -------------- | -------------------------- | ---------------------- |
| **Method**             | Select minimum | Insert into sorted section | Swap adjacent elements |
| **Best Case**          | O(n²)          | O(n)                       | O(n)                   |
| **Average Case**       | O(n²)          | O(n²)                      | O(n²)                  |
| **Worst Case**         | O(n²)          | O(n²)                      | O(n²)                  |
| **Stable**             | No             | Yes                        | Yes                    |
| **Adaptive**           | No             | Yes                        | Yes\*                  |
| **Extra Space**        | O(1)           | O(1)                       | O(1)                   |
| **Small Data**         | Suitable       | Suitable                   | Suitable               |
| **Nearly Sorted Data** | Poor           | Excellent                  | Good                   |
| **Swaps**              | Few            | Moderate                   | Generally many         |

\*For Bubble Sort, adaptiveness depends on using the early-termination optimization shown in the code.

### How to Remember

```text
Selection → Select the minimum
Insertion → Insert into the sorted part
Bubble    → Swap adjacent elements
```

---

# Comparison with Advanced Sorting Algorithms

| Algorithm          |  Best Case | Average Case | Worst Case |
| ------------------ | ---------: | -----------: | ---------: |
| **Bubble Sort**    |       O(n) |        O(n²) |      O(n²) |
| **Selection Sort** |      O(n²) |        O(n²) |      O(n²) |
| **Insertion Sort** |       O(n) |        O(n²) |      O(n²) |
| **Merge Sort**     | O(n log n) |   O(n log n) | O(n log n) |
| **Quick Sort**     | O(n log n) |   O(n log n) |      O(n²) |
| **Heap Sort**      | O(n log n) |   O(n log n) | O(n log n) |

Advanced algorithms such as **Merge Sort, Quick Sort, and Heap Sort** are generally more appropriate for large datasets.

However, the three introductory algorithms remain important because they teach fundamental concepts such as:

- Comparisons
- Swapping
- Shifting
- Sorted and unsorted sections
- Algorithm complexity
- Stability
- Adaptiveness

---

## Output (if any)

### Selection Sort

For:

```text
64 25 12 22 11
```

Expected output:

```text
Sorted Array (Selection Sort): 11 12 22 25 64
```

### Insertion Sort

For:

```text
12 11 13 5 6
```

Expected output:

```text
Sorted Array (Insertion Sort): 5 6 11 12 13
```

### Bubble Sort

For:

```text
5 1 4 2 8
```

Expected output:

```text
Sorted Array (Bubble Sort): 1 2 4 5 8
```

---

## Common Mistakes

- **Selection Sort**
  - Do not confuse finding the minimum with swapping immediately.
  - First find the minimum index, then perform the swap.
  - Remember that its best case is still **O(n²)**.

- **Insertion Sort**
  - Do not overwrite the key before storing it.
  - Remember to shift larger elements rather than swapping repeatedly.
  - The first element is treated as the initial sorted portion.

- **Bubble Sort**
  - Compare **adjacent** elements.
  - The inner loop becomes shorter after each pass.
  - The optimized version should stop when no swaps occur.

- **Complexity**
  - `O(n)` best case for Insertion Sort does not mean every case is O(n).
  - Standard Selection Sort remains O(n²) even for sorted input.
  - Bubble Sort's O(n) best case requires the early-exit optimization.

- **Stability**
  - Selection Sort: generally **not stable**.
  - Insertion Sort: **stable**.
  - Bubble Sort: **stable**.

---

## Short Exam Notes

- **Selection Sort:** Finds the minimum from the unsorted section and places it at the next sorted position.
- **Insertion Sort:** Takes one element at a time and inserts it into the correct position in the sorted section.
- **Bubble Sort:** Repeatedly compares and swaps adjacent elements.
- Selection Sort:
  - Best = **O(n²)**
  - Average = **O(n²)**
  - Worst = **O(n²)**
  - Extra space = **O(1)**

- Insertion Sort:
  - Best = **O(n)**
  - Average = **O(n²)**
  - Worst = **O(n²)**
  - Stable and adaptive

- Bubble Sort:
  - Best = **O(n)** with early termination
  - Average = **O(n²)**
  - Worst = **O(n²)**
  - Stable and adaptive with early termination

- **Selection Sort → minimum**
- **Insertion Sort → insert**
- **Bubble Sort → adjacent swap**
- For **small or nearly sorted data**, Insertion Sort is generally the most practical of these three.
- Selection Sort generally performs **fewer swaps**.
- Bubble Sort is primarily useful for **learning and demonstrating sorting concepts**.
