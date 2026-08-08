---
title: Introduction to Trees
description: Explains tree structures, node types, linked representations, traversal algorithms, depth, height, and C++ implementation.
lecture: Lecture 7
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-22
order: 10
---

---

# Introduction to Trees

## Definition

A **tree** is a **non-linear hierarchical data structure** consisting of nodes connected by edges. Trees represent relationships using a **parent–child structure**.

Trees are widely used in:

- Databases
- File systems
- Compilers
- Artificial intelligence
- Networking
- Searching and sorting algorithms

A tree has a **root node** at the top and branches into child nodes.

---

## Key Points

- A tree is a **non-linear** data structure.
- A tree contains **nodes** connected by **edges**.
- Every tree has exactly **one root**.
- Every node except the root has exactly **one parent**.
- A node can have **zero or more children**.
- A tree contains **no cycles**.
- A tree with **N nodes has N − 1 edges**.
- There is exactly **one path between any two nodes**.
- Every subtree of a tree is itself a tree.
- Trees are naturally **recursive**, which makes recursion useful for tree algorithms.

### Example Tree

```text
        A
       / \
      B   C
     / \
    D   E
```

Here:

- `A` is the **root**.
- `B` and `C` are children of `A`.
- `B` is the parent of `D` and `E`.
- `D`, `E`, and `C` are **leaf nodes**.

### Types of Nodes

| Node Type         | Description                            |
| ----------------- | -------------------------------------- |
| **Root**          | Top-most node in the tree              |
| **Leaf**          | Node with no children                  |
| **Internal Node** | Node with at least one child           |
| **Parent**        | Node that has one or more children     |
| **Child**         | Node directly connected below a parent |

---

## Example / Code

### Basic Binary Tree Node

A common C++ representation for a **binary tree** is:

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;
};
```

### Line-by-Line Explanation

- `struct Node` defines a structure representing one tree node.
- `int data` stores the value of the node.
- `Node* left` points to the left child.
- `Node* right` points to the right child.
- `Node*` is a pointer that can store the address of another `Node`.

A binary tree node therefore has the following basic structure:

```text
        Node
       /    \
    left   right
```

### Tree Interface

An interface can define operations that a tree implementation must provide:

```cpp
class Tree {
public:
    virtual void insert(int value) = 0;
    virtual void inorder() = 0;
};
```

Explanation:

- `class Tree` defines the tree interface.
- `public:` makes the functions accessible from outside the class.
- `virtual` enables **polymorphism**.
- `= 0` makes the functions **pure virtual functions**.
- A class containing pure virtual functions is an **abstract class**.

---

## Explanation

### Linked Structure for Trees

A linked tree uses dynamically allocated nodes connected through pointers.

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = right = nullptr;
    }
};
```

Each node contains:

1. **Data** — the value stored in the node.
2. **Left pointer** — address of the left child.
3. **Right pointer** — address of the right child.

### Advantages

- **Dynamic size** — the tree can grow as needed.
- No fixed array size is required.
- Supports flexible insertion and deletion.
- Memory is allocated for nodes as they are created.

### Disadvantages

- Pointer management is more complex.
- Dynamic memory must be handled carefully.
- Poorly balanced trees can make searching inefficient.

---

### Tree Functions

Common operations performed on trees include:

| Operation     | Purpose                                   |
| ------------- | ----------------------------------------- |
| **Insert**    | Add a new node                            |
| **Delete**    | Remove a node                             |
| **Search**    | Find a specific value                     |
| **Traversal** | Visit nodes in a particular order         |
| **Height**    | Calculate the longest downward path       |
| **Depth**     | Determine a node's distance from the root |

Because trees are recursive structures, many operations can be implemented naturally using **recursion**.

---

# Tree Traversal Algorithms

**Tree traversal** is the process of visiting every node in a tree according to a particular order.

The two major traversal categories are:

- **Depth-First Search (DFS)**
- **Breadth-First Search (BFS)**

The three common DFS traversals are:

| Traversal     | Order               | Common Use                            |
| ------------- | ------------------- | ------------------------------------- |
| **Preorder**  | Root → Left → Right | Copying/serializing a tree            |
| **Inorder**   | Left → Root → Right | Produces sorted order in a BST        |
| **Postorder** | Left → Right → Root | Deleting trees/evaluating expressions |

---

## Preorder Traversal

**Preorder** visits the root before its children.

### Order

```text
Root → Left → Right
```

For this tree:

```text
      A
     / \
    B   C
```

The traversal is:

```text
A B C
```

### Algorithm

1. Visit the root.
2. Traverse the left subtree.
3. Traverse the right subtree.

### C++ Code

```cpp
void preorder(Node* root) {
    if (root == nullptr)
        return;

    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}
```

### Line-by-Line Explanation

- `void preorder(Node* root)` defines the traversal function.
- `if (root == nullptr)` checks whether the current node exists.
- `return;` stops recursion when there is no node.
- `cout << root->data << " ";` visits and prints the current node.
- `preorder(root->left);` recursively visits the left subtree.
- `preorder(root->right);` recursively visits the right subtree.

---

## Postorder Traversal

**Postorder** visits the children before the root.

### Order

```text
Left → Right → Root
```

For:

```text
      A
     / \
    B   C
```

The traversal is:

```text
B C A
```

### Algorithm

1. Traverse the left subtree.
2. Traverse the right subtree.
3. Visit the root.

### C++ Code

```cpp
void postorder(Node* root) {
    if (root == nullptr)
        return;

    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}
```

### Line-by-Line Explanation

- The function receives the current node.
- If the node is `nullptr`, recursion stops.
- The left subtree is processed first.
- The right subtree is processed second.
- The current node is printed last.

Postorder is particularly useful when **children must be processed before their parent**, such as when deleting a tree.

---

## Inorder Traversal

Although the original examples focus on preorder and postorder, **inorder traversal** is also fundamental for binary trees.

### Order

```text
Left → Root → Right
```

For:

```text
      A
     / \
    B   C
```

The output is:

```text
B A C
```

In a **Binary Search Tree (BST)**, inorder traversal visits values in **ascending sorted order**.

---

# Depth and Height

## Definition

**Depth** and **height** measure positions and distances within a tree.

### Depth

The **depth of a node** is the number of edges from the root to that node.

- Root depth = `0`
- Its children have depth = `1`
- Their children have depth = `2`

Example:

```text
        A        depth 0
       / \
      B   C      depth 1
     /
    D            depth 2
```

Therefore:

```text
Depth(D) = 2
```

### Height

The **height of a node** is the number of edges on the longest path from that node to a leaf.

- A leaf has height `0`.
- The height of a tree is the height of its root.

For the example above:

```text
Height(B) = 1
Height(A) = 2
```

### Important Distinction

| Concept    | Measured From       | Meaning                         |
| ---------- | ------------------- | ------------------------------- |
| **Depth**  | Root → Node         | How far a node is from the root |
| **Height** | Node → Deepest leaf | How far a node extends downward |

Depth and height are important when analyzing:

- BST performance
- AVL tree balancing
- Recursive algorithms
- Tree efficiency

---

# Complete C++ Implementation

The following program demonstrates a **Binary Search Tree (BST)** with insertion, preorder traversal, postorder traversal, height calculation, and depth calculation.

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

// Tree node
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = right = nullptr;
    }
};

class Tree {
private:
    Node* root;

    // Insert into the BST
    Node* insert(Node* node, int value) {
        if (node == nullptr)
            return new Node(value);

        if (value < node->data)
            node->left = insert(node->left, value);
        else
            node->right = insert(node->right, value);

        return node;
    }

    // Preorder: Root -> Left -> Right
    void preorder(Node* node) {
        if (node == nullptr)
            return;

        cout << node->data << " ";
        preorder(node->left);
        preorder(node->right);
    }

    // Postorder: Left -> Right -> Root
    void postorder(Node* node) {
        if (node == nullptr)
            return;

        postorder(node->left);
        postorder(node->right);
        cout << node->data << " ";
    }

    // Height of the tree
    int height(Node* node) {
        if (node == nullptr)
            return -1;

        int leftHeight = height(node->left);
        int rightHeight = height(node->right);

        return max(leftHeight, rightHeight) + 1;
    }

    // Find depth of a value
    int depth(Node* node, int value, int currentDepth) {
        if (node == nullptr)
            return -1;

        if (node->data == value)
            return currentDepth;

        int left = depth(node->left, value, currentDepth + 1);

        if (left != -1)
            return left;

        return depth(node->right, value, currentDepth + 1);
    }

public:
    Tree() {
        root = nullptr;
    }

    void insert(int value) {
        root = insert(root, value);
    }

    void showPreorder() {
        cout << "Preorder Traversal: ";
        preorder(root);
        cout << endl;
    }

    void showPostorder() {
        cout << "Postorder Traversal: ";
        postorder(root);
        cout << endl;
    }

    void showHeight() {
        cout << "Height of Tree: " << height(root) << endl;
    }

    void showDepth(int value) {
        int d = depth(root, value, 0);

        if (d == -1)
            cout << "Value not found in tree" << endl;
        else
            cout << "Depth of " << value << " = " << d << endl;
    }
};

int main() {
    Tree t;

    t.insert(10);
    t.insert(5);
    t.insert(15);
    t.insert(2);
    t.insert(7);
    t.insert(20);

    t.showPreorder();
    t.showPostorder();
    t.showHeight();

    t.showDepth(7);
    t.showDepth(20);
    t.showDepth(100);

    return 0;
}
```

### Code Explanation

#### 1. Node Structure

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;
};
```

Defines the basic building block of the tree.

#### 2. Insertion

```cpp
if (value < node->data)
    node->left = insert(node->left, value);
else
    node->right = insert(node->right, value);
```

This follows the **Binary Search Tree rule**:

- Smaller values go left.
- Greater or equal values go right.

The insertion function recursively finds the correct position.

#### 3. Traversal

The program provides:

- `preorder()` → Root, Left, Right
- `postorder()` → Left, Right, Root

#### 4. Height

```cpp
return max(leftHeight, rightHeight) + 1;
```

The function finds the larger subtree height and adds one for the current node.

The implementation uses:

```cpp
height(nullptr) = -1
```

Therefore, a leaf has height `0`.

#### 5. Depth

```cpp
depth(root, value, 0);
```

The search starts at the root with depth `0`. Each recursive level increases the depth by `1`.

#### 6. Main Function

The inserted values create this BST:

```text
        10
       /  \
      5    15
     / \     \
    2   7     20
```

---

## Output

```text
Preorder Traversal: 10 5 2 7 15 20
Postorder Traversal: 2 7 5 20 15 10
Height of Tree: 2
Depth of 7 = 2
Depth of 20 = 2
Value not found in tree
```

---

## Common Mistakes

- **Confusing depth and height**
  - Depth measures from the **root to a node**.
  - Height measures from a **node to its deepest leaf**.

- **Using the wrong traversal order**
  - Preorder: **Root → Left → Right**
  - Inorder: **Left → Root → Right**
  - Postorder: **Left → Right → Root**

- **Forgetting the base case in recursion**
  - Always handle `nullptr`.

- **Assuming every tree is a BST**
  - A general tree does not necessarily follow BST ordering rules.

- **Incorrectly counting edges**
  - A tree with `N` nodes has exactly **N − 1 edges**.

- **Confusing a leaf with an internal node**
  - A leaf has **no children**.
  - An internal node has **at least one child**.

- **Using the wrong height convention**
  - This implementation defines an empty tree's height as `-1` and a leaf's height as `0`.

- **Calling the insertion method “level-order insertion”**
  - The provided insertion code is actually **BST insertion based on value comparison**, not level-order insertion.

---

## Short Exam Notes

- **Tree:** A non-linear hierarchical data structure made of nodes and edges.
- **Root:** The top-most node.
- **Leaf:** A node with no children.
- **Internal node:** A node with at least one child.
- A tree with **N nodes has N − 1 edges**.
- A tree has **no cycles** and exactly **one path between any two nodes**.
- **Preorder:** Root → Left → Right.
- **Inorder:** Left → Root → Right.
- **Postorder:** Left → Right → Root.
- **Depth:** Number of edges from root to a node.
- **Height:** Number of edges from a node to its deepest leaf.
- Trees are naturally suited to **recursive algorithms**.
- Linked tree nodes commonly use **pointers** to connect parent and child nodes.
- In a **BST**, smaller values are placed in the left subtree and larger values in the right subtree.
- **Inorder traversal of a BST produces sorted order**.
