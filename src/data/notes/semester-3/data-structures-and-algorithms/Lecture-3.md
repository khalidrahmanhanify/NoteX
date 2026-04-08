---
title: Linked Lists
description: Singly linked lists in C++ using struct and class, creating nodes, connecting them, traversing, printing, and basic operations.
lecture: Lecture 3
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-08
order: 14
---

# Singly Linked Lists — Class Notes (From Handout + Both C++ Files)

# 1. What is a Singly Linked List

A **Singly Linked List** is a linear data structure where nodes are connected using **pointers**.

Each node contains:

- **Data** → value stored
- **Next pointer** → address of next node

Structure:

```
[ Data | Next ]
```

Example:

```
10 → 20 → 30 → NULL
```

Important properties:

- Memory is **NOT contiguous** (not like arrays)
- Size is **dynamic**
- Uses **pointers**
- Last node points to **NULL**

---

# 2. Creating a Node (Struct Version)

From your first class code:

```cpp
struct node{
    string value;
    node* next;
};
```

Explanation:

- `value` → stores data
- `next` → pointer to next node
- `node*` → pointer to same structure type

---

# 3. Creating Nodes Manually

```cpp
node* head = new node();
node* second = new node();
node* third = new node();
```

This creates **3 nodes in memory**

Then assign values:

```cpp
head->value = "ahmad";
second->value = "mahmood";
third->value = "edris";
```

---

# 4. Connecting Nodes (Very Important)

```cpp
head->next = second;
second->next = third;
third->next = NULL;
```

Result:

```
head
 ↓
ahmad → mahmood → edris → NULL
```

---

# 5. Traversing / Printing the List

```cpp
void printlist(node* n){
    while(n != NULL){
        cout << n->value << " ";
        n = n->next;
    }
}
```

How it works:

1. Start from head
2. Print value
3. Move to next node
4. Stop at NULL

---

# 6. Full Example

```cpp
#include <iostream>
using namespace std;

struct node{
    string value;
    node* next;
};

void printlist(node* n){
    while(n != NULL){
        cout << n->value << " ";
        n = n->next;
    }
}

int main(){

    node* head = new node();
    node* second = new node();
    node* third = new node();

    head->value = "ahmad";
    second->value = "mahmood";
    third->value = "edris";

    head->next = second;
    second->next = third;
    third->next = NULL;

    printlist(head);

    return 0;
}
```

Output:

```
ahmad mahmood edris
```

---

# 7. Class Version

You also used **class instead of struct**

```cpp
class kabul{
public:
    int qimatHa;
    kabul* nodeCreator;
};
```

This is also a node.

- `qimatHa` → data
- `nodeCreator` → next pointer

---

# 8. Creating Nodes

```cpp
kabul* awal = new kabul();
kabul* dowom = new kabul();
kabul* sawom = new kabul();
kabul* charom = new kabul();
```

---

# 9. Connecting Nodes

```cpp
awal->nodeCreator = dowom;
dowom->nodeCreator = sawom;
sawom->nodeCreator = charom;
charom->nodeCreator = NULL;
```

---

# 10. Adding Values

```cpp
awal->qimatHa = 45;
dowom->qimatHa = 34;
sawom->qimatHa = 12;
charom->qimatHa = 23;
```

---

# 11. Printing List

```cpp
void printlist(kabul* myPointer){
    while(myPointer != NULL){
        cout << myPointer->qimatHa << " | ";
        myPointer = myPointer->nodeCreator;
    }
}
```

Output:

```
45 | 34 | 12 | 23 |
```

---

# 12. Arrow Operator (Very Important)

You used this everywhere:

```
pointer->variable
```

Example:

```
awal->qimatHa = 45;
```

This means:

```
(*awal).qimatHa = 45;
```

Arrow operator is used to **access structure/class members using pointer**

---

# 13. Dot vs Arrow Operator

Dot operator:

```
object.value
```

Arrow operator:

```
pointer->value
```

Example:

```
node obj;
obj.value = 10;
```

But with pointer:

```
node* ptr;
ptr->value = 10;
```

---

# 14. Important Linked List Concepts

Linked list stores:

- Data
- Address of next node

Memory looks like:

```
[ahmad | 1000] -> [mahmood | 5000] -> [edris | NULL]
```

Nodes are stored **randomly in memory**
but connected using **pointers**

---

# 15. Linked List vs Array

Array:

```
10 20 30 40
```

- contiguous memory
- fixed size
- fast access

Linked List:

```
10 → 20 → 30 → 40
```

- non-contiguous memory
- dynamic size
- slower access
- uses pointers

---

# 16. Head Pointer (Very Important)

Head stores address of first node

```
head → first node
```

If head is NULL:

```
Empty list
```

---

# 17. Basic Linked List Operations

You only studied:

✔ Creating nodes
✔ Connecting nodes
✔ Traversing
✔ Printing

Teacher handout also includes (not deeply studied yet):

- insert front
- delete front
- doubly linked list
- templates

But exam **may include them**.

---

# 18. Insert at Front

Steps:

1. Create node
2. point new node to head
3. move head

```cpp
newNode->next = head;
head = newNode;
```

---

# 19. Delete from Front

Steps:

1. store head
2. move head
3. delete old

```cpp
Node* temp = head;
head = head->next;
delete temp;
```

---

# 22. Visual Summary

```
head
 ↓
[45 | • ] → [34 | • ] → [12 | • ] → [23 | NULL]
```

---

# 23. One-Line Definition

A singly linked list is a dynamic data structure where each node contains data and a pointer to the next node.
