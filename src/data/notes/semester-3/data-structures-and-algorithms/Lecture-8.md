---
title: Introduction to Trees
description: Explains tree structures, binary tree ADTs, representations, traversals, templates, and general tree conversion in C++.
lecture: Lecture 8
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-29
order: 9
---

---

# Introduction to Trees

## Definition

A **tree** is a non-linear hierarchical data structure consisting of nodes connected by edges.

A **binary tree** is a tree in which each node has **at most two children**:

- **Left child**
- **Right child**

A **Binary Tree Abstract Data Type (ADT)** defines the operations a binary tree should support without specifying how those operations are implemented.

---

## Key Points

- A binary tree has **at most two children per node**.

- The two children are called the **left child** and **right child**.

- A tree with `n` nodes has **n − 1 edges**.

- Maximum nodes at level `i`:

  $$
  2^i
  $$

- Maximum nodes in a binary tree of height `h`:

  $$
  2^{h+1}-1
  $$

- Binary trees can be implemented using:
  - **Linked structures**
  - **Arrays/vectors**

- Common traversals:
  - **Preorder:** Root → Left → Right
  - **Inorder:** Left → Root → Right
  - **Postorder:** Left → Right → Root

- C++ **templates** allow binary trees to work with different data types.

- A general tree can be represented as a binary tree using **Left-Child Right-Sibling** representation.

### Example Binary Tree

```text
        A
       / \
      B   C
     / \   \
    D   E   F
```

---

## Example / Code

### 1. Binary Tree Interface

An interface specifies **what operations are available**, not how they are implemented.

```cpp
class BinaryTree {
public:
    virtual void insert(int value) = 0;
    virtual void preorder() = 0;
    virtual void inorder() = 0;
    virtual void postorder() = 0;
};
```

### Explanation

- `class BinaryTree` defines the binary tree interface.
- `virtual` allows derived classes to provide their own implementations.
- `= 0` makes each function a **pure virtual function**.
- A class containing pure virtual functions is an **abstract class**.
- This supports **abstraction, modularity, and polymorphism**.

---

### 2. Linked Binary Tree

A linked representation uses dynamically allocated nodes and pointers.

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = right = NULL;
    }
};
```

Each node contains:

- `data` — stores the value.
- `left` — points to the left child.
- `right` — points to the right child.

#### Advantages

- Dynamic size
- No fixed capacity
- Flexible insertion and deletion
- Suitable for general binary-tree structures

#### Disadvantages

- Requires pointer management
- Pointers require additional memory
- Traversal may have less cache-friendly memory access than a contiguous array

---

### 3. Vector-Based Binary Tree

A vector can represent a binary tree using index relationships.

If the current node is at index `i`:

$$
\text{Left Child} = 2i+1
$$

$$
\text{Right Child} = 2i+2
$$

$$
\text{Parent} = \left\lfloor\frac{i-1}{2}\right\rfloor
$$

> These formulas assume **0-based indexing**.

```cpp
#include <vector>
using namespace std;

class BinaryTreeVector {
    vector<int> tree;

public:
    void insert(int value) {
        tree.push_back(value);
    }

    void display() {
        for (int i = 0; i < tree.size(); i++) {
            cout << tree[i] << " ";
        }
    }
};
```

This representation is especially useful for **complete binary trees and heaps**.

#### Advantages

- Fast index-based access
- No pointer overhead
- Efficient for complete trees

#### Disadvantages

- Can waste space for sparse trees
- Less suitable for irregular binary trees
- Index relationships must be maintained correctly

---

### 4. Tree Traversals

Traversal means **visiting the nodes of a tree in a specific order**.

| Traversal     | Order               | Common Use                            |
| ------------- | ------------------- | ------------------------------------- |
| **Preorder**  | Root → Left → Right | Copying/serializing trees             |
| **Inorder**   | Left → Root → Right | Sorted order in a BST                 |
| **Postorder** | Left → Right → Root | Deleting trees/evaluating expressions |

#### Inorder Example

```cpp
void inorder(Node* root) {
    if (root == NULL)
        return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}
```

Execution order:

1. Check whether the node exists.
2. Traverse the left subtree.
3. Print the current node.
4. Traverse the right subtree.

For a **Binary Search Tree (BST)**, inorder traversal produces values in sorted order.

---

### 5. Template-Based Binary Tree

C++ templates allow the same tree structure to work with different data types.

```cpp
template <typename T>
struct Node {
    T data;
    Node* left;
    Node* right;

    Node(T value) {
        data = value;
        left = right = NULL;
    }
};
```

Instead of restricting `data` to `int`, `T` can represent different types such as:

```cpp
Node<int>
Node<double>
Node<string>
```

### Template Traversal

```cpp
template <typename T>
void preorder(Node<T>* root) {
    if (root == NULL)
        return;

    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}
```

### Advantages

- **Code reusability**
- **Type flexibility**
- Less duplicated code
- Useful for generic data structures

---

### 6. General Tree Using Binary Representation

A **general tree** can have more than two children, while a binary tree allows at most two.

A general tree can be represented using a technique called **Left-Child Right-Sibling (LCRS)**.

### Concept

- `leftChild` → points to the node's **first child**.
- `rightSibling` → points to the node's **next sibling**.

General tree:

```text
        A
      / | \
     B  C  D
```

LCRS representation:

```text
        A
        |
        B → C → D
```

### C++ Structure

```cpp
struct Node {
    int data;
    Node* leftChild;
    Node* rightSibling;
};
```

#### Advantages

- Represents an n-ary/general tree using binary-style links
- Can reduce the need for a variable number of child pointers
- Allows binary-tree-style processing techniques

#### Disadvantages

- Structure is less intuitive
- Pointer handling is more complex

---

## Explanation

### Types of Binary Trees

| Type                     | Description                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| **Full Binary Tree**     | Every node has either 0 or 2 children                                                     |
| **Complete Binary Tree** | Every level is full except possibly the last; the last level is filled from left to right |
| **Perfect Binary Tree**  | Every internal node has 2 children and all leaves are at the same level                   |
| **Skewed Tree**          | Nodes extend primarily along one side                                                     |

### Binary Tree ADT vs Implementation

| Concept              | Meaning                                            |
| -------------------- | -------------------------------------------------- |
| **ADT**              | Defines what operations a tree supports            |
| **Interface**        | Specifies operations through function declarations |
| **Implementation**   | Defines how those operations actually work         |
| **Linked structure** | Uses nodes and pointers                            |
| **Vector structure** | Uses indexes in an array/vector                    |

The main advantage of an ADT is **separation of interface from implementation**. Different implementations can provide the same operations.

---

### Complete C++ Implementation

The lecture's complete program demonstrates:

- Binary Tree ADT
- Abstract interface
- Linked binary tree
- Templates
- BST-style insertion
- Preorder traversal
- Inorder traversal
- Postorder traversal
- Height
- Depth
- Vector-based representation
- Left-Child Right-Sibling representation

A simplified central implementation is:

```cpp
template <typename T>
struct Node {
    T data;
    Node* left;
    Node* right;

    Node(T value) {
        data = value;
        left = right = NULL;
    }
};

template <typename T>
class BinaryTree {
private:
    Node<T>* root;

    Node<T>* insertNode(Node<T>* node, T value) {
        if (node == NULL)
            return new Node<T>(value);

        if (value < node->data)
            node->left = insertNode(node->left, value);
        else
            node->right = insertNode(node->right, value);

        return node;
    }

public:
    BinaryTree() {
        root = NULL;
    }

    void insert(T value) {
        root = insertNode(root, value);
    }

    void preorder(Node<T>* node) {
        if (node == NULL)
            return;

        cout << node->data << " ";
        preorder(node->left);
        preorder(node->right);
    }

    void inorder(Node<T>* node) {
        if (node == NULL)
            return;

        inorder(node->left);
        cout << node->data << " ";
        inorder(node->right);
    }

    void postorder(Node<T>* node) {
        if (node == NULL)
            return;

        postorder(node->left);
        postorder(node->right);
        cout << node->data << " ";
    }
};
```

### Important Note

The insertion shown above is **BST-style insertion**, not a general binary-tree insertion algorithm:

```cpp
if (value < node->data)
    node->left = insertNode(node->left, value);
else
    node->right = insertNode(node->right, value);
```

Therefore:

- Smaller values go to the **left**.
- Greater or equal values go to the **right**.

---

## Output

For the values:

```text
10, 5, 15, 3, 7, 20
```

the BST becomes:

```text
        10
       /  \
      5    15
     / \     \
    3   7     20
```

### Traversals

```text
Preorder:  10 5 3 7 15 20
Inorder:   3 5 7 10 15 20
Postorder: 3 7 5 20 15 10
```

### Depth

```text
Depth of 7  = 2
Depth of 20 = 2
```

For a value that does not exist, such as `100`, the depth function returns `-1`.

---

## Common Mistakes

- Confusing a **binary tree** with a **BST**.
  - A binary tree only restricts each node to at most two children.
  - A BST additionally follows an ordering rule.

- Confusing **ADT** with implementation.
  - ADT specifies **what** operations exist.
  - Implementation specifies **how** they work.

- Forgetting that the vector formulas use **0-based indexing**.

- Mixing up traversal orders:
  - Preorder → **Root first**
  - Inorder → **Root in the middle**
  - Postorder → **Root last**

- Assuming inorder traversal always produces sorted data.
  - It produces sorted data specifically when applied to a properly ordered **BST**.

- Confusing **complete**, **full**, and **perfect** binary trees.

- Forgetting the base case in recursive traversal:

```cpp
if (node == NULL)
    return;
```

- Assuming vector representation is efficient for every binary tree.
  - It is most efficient for **complete or nearly complete trees**, such as heaps.

---

## Short Exam Notes

- **Binary Tree:** A tree where each node has at most two children.
- **Binary Tree ADT:** Defines permitted operations without specifying implementation details.
- **Interface:** Provides the required operations using functions.
- **Linked Representation:** Uses nodes and left/right pointers.
- **Vector Representation:** Uses array indexes to represent parent-child relationships.
- **Preorder:** Root → Left → Right.
- **Inorder:** Left → Root → Right.
- **Postorder:** Left → Right → Root.
- **BST inorder:** Produces values in sorted order.
- **Template:** Allows the same tree implementation to work with different data types.
- **LCRS:** Represents a general tree using `first child` and `next sibling` pointers.
- **Maximum nodes at level `i`:** `2^i`.
- **Maximum nodes at height `h`:** `2^(h+1) − 1`.
- **Full tree:** Every node has 0 or 2 children.
- **Complete tree:** Last level may be incomplete but is filled from left to right.
- **Perfect tree:** All internal nodes have 2 children and all leaves are at the same level.
