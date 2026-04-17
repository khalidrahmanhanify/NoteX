---
title: Double Linked Lists
description: Double and Circular linked lists in C++ using struct, creating nodes, connecting them, traversing, printing.
lecture: Lecture 4
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-15
order: 13
---

# Doubly Linked List

## Definition

A **Doubly Linked List (DLL)** is a linear data structure where each node contains:

- Data (value)
- A pointer to the **previous node**
- A pointer to the **next node**

This allows traversal in **both directions** (forward and backward).

---

## Key Points

- First node’s `prev = NULL`
- Last node’s `next = NULL`
- Each node has **two pointers**: `prev` and `next`
- More flexible than singly linked list, but uses **more memory**
- Easy insertion and deletion from both ends

---

## Example / Code

```cpp
#include<iostream>
using namespace std;

struct node {
    int value;
    node* prev;
    node* next;
};

void printList(node* head) {
    node* temp = head;

    while (temp != NULL) {
        cout << temp->value << " ";
        temp = temp->next;
    }
}

int main() {
    // Creating nodes
    node* head = new node();
    node* second = new node();
    node* third = new node();

    // Assigning values
    head->value = 10;
    second->value = 20;
    third->value = 30;

    // Linking nodes
    head->prev = NULL;
    head->next = second;

    second->prev = head;
    second->next = third;

    third->prev = second;
    third->next = NULL;

    // Print list
    printList(head);

    return 0;
}
```

---

## Explanation

- Three nodes are created using `new`
- Each node is connected:
  - Forward using `next`
  - Backward using `prev`

- Traversal starts from `head` and continues until `NULL`
- Unlike your original version:
  - No invalid check like `value == NULL`
  - Loop correctly stops when `temp == NULL`

---

## Output (if any)

```
10 20 30
```

---

## Common Mistakes

- ❌ Checking `value == NULL` (wrong for integers)
- ❌ Infinite loop due to wrong stopping condition
- ❌ Forgetting to set `prev` or `next`
- ❌ Not initializing pointers properly
- ❌ Mixing data types (string vs int inconsistently)

---

## Short Exam Notes (very concise revision points)

- Node = data + prev + next
- First: `prev = NULL`
- Last: `next = NULL`
- Traversal: move using `next`
- Uses more memory than singly linked list

---

# Circular Linked List

## Definition

A **Circular Linked List (CLL)** is a linked list where:

- The **last node points back to the first node**
- There is **no NULL pointer** at the end

---

## Key Points

- Forms a **loop (circle)**
- Traversal must stop manually (otherwise infinite loop)
- Useful in applications like round-robin scheduling

---

## Example / Code

```cpp
#include<iostream>
using namespace std;

struct node {
    int value;
    node* next;
};

void printList(node* head) {
    if (head == NULL) {
        cout << "Empty list";
        return;
    }

    node* temp = head;
    do {
        cout << temp->value << " ";
        temp = temp->next;
    } while (temp != head);
}

int main() {
    node* head = new node();
    node* second = new node();
    node* third = new node();

    // Assign values
    head->value = 10;
    second->value = 20;
    third->value = 30;

    // Link nodes
    head->next = second;
    second->next = third;
    third->next = head;

    printList(head);

    return 0;
}
```

---

## Explanation

- Last node connects back to `head`
- Traversal uses a **do-while loop**
- Stops when we reach `head` again

---

## Output (if any)

```
10 20 30
```

---

## Common Mistakes

- ❌ Using `while(temp != NULL)` → causes infinite loop
- ❌ Forgetting to connect last node to head
- ❌ Not handling empty list

---

## Short Exam Notes (very concise revision points)

- Last node → points to first node
- No `NULL` pointer
- Use `do-while` for traversal
- Can cause infinite loop if not careful

---

# Recursion

## Definition

**Recursion** is a programming technique where a function **calls itself** to solve a problem.

---

## Key Points

- Must have a **base case** (stopping condition)
- Recursive case reduces the problem
- Works like a loop internally (uses function stack)
- Used in problems like factorial, Fibonacci, tree traversal

---

## Example / Code

```cpp
#include<iostream>
using namespace std;

int factorial(int num) {
    if (num == 0 || num == 1) {
        return 1;  // Base case
    }
    return num * factorial(num - 1);  // Recursive call
}

int main() {
    cout << factorial(5);
}
```

---

## Explanation

- `factorial(5)` calls:
  - 5 × factorial(4)
  - 4 × factorial(3)
  - ...
  - until `factorial(1)`

- Then results return back step-by-step

---

## Output (if any)

```
120
```

---

## Common Mistakes

- ❌ Missing base case → infinite recursion
- ❌ Wrong recursive formula
- ❌ Stack overflow due to too many calls
- ❌ Not reducing the problem properly

---

## Short Exam Notes (very concise revision points)

- Function calls itself
- Needs base case
- Break problem into smaller parts
- Uses call stack
- Example: factorial
