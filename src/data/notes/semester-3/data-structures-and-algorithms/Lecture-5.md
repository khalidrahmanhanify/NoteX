---
title: Stacks in Python
description: All about Stacks, Stack Operations, and etc.
lecture: Lecture 5
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-22
order: 12
---

# Stack (Data Structure)

## Definition

A **stack** is a **linear data structure** that stores elements in a specific order called **LIFO (Last In, First Out)**. This means the **last element inserted is the first one to be removed**.

It is called an **Abstract Data Type (ADT)** because it defines **what operations can be performed**, not how they are implemented internally.

---

## Key Points

- Follows **LIFO (Last In, First Out)** principle
- Insertion and deletion happen **only at one end**, called the **top**
- The main operations are:
  - **push()** → Add an element to the top
  - **pop()** → Remove the top element
  - **top()** → View the top element (without removing)
  - **size()** → Get number of elements
  - **empty()** → Check if stack is empty

- Stack is a **linear data structure**
- Access is **restricted** → you can only access the **top element**

---

## Example / Code

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;

    // Adding elements
    s.push(10);
    s.push(20);
    s.push(30);

    // Access top element
    cout << "Top element: " << s.top() << endl;

    // Remove top element
    s.pop();

    // Size of stack
    cout << "Stack size: " << s.size() << endl;

    return 0;
}
```

---

## Explanation

1. A stack `s` is created to store integers
2. `push()` adds elements: 10 → 20 → 30 (30 is on top)
3. `top()` returns **30** (last inserted element)
4. `pop()` removes **30**
5. Now the stack contains **10 and 20**, so size becomes **2**

---

## Output (if any)

```
Top element: 30
Stack size: 2
```

---

## Common Mistakes

- ❌ Saying stack stores data **randomly** → it follows strict LIFO order
- ❌ Confusing **LIFO and FIFO** (FIFO is used in queues)
- ❌ Using `Top()` instead of correct C++ function `top()`
- ❌ Calling `pop()` or `top()` on an **empty stack** (causes error)
- ❌ Thinking you can access elements in the middle (you cannot)

---

## Short Exam Notes (very concise revision points)

- Stack = **LIFO data structure**
- Operations: `push`, `pop`, `top`, `size`, `empty`
- Access only **top element**
- Implemented using **arrays or linked lists**
- Used in **function calls, recursion, undo operations**
