---
title: Graphs and Expression Notations
description: Covers graph representations, adjacency matrices, expression notations, expression trees, and stack-based conversion.
lecture: Lecture 12
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-05-27
order: 5
---

---

# Graphs and Expression Notations

## Definition

A **graph** is a non-linear data structure consisting of **vertices (nodes)** and **edges (connections)**.

Graphs are used to represent relationships and connections in real-world systems such as:

- Computer networks
- Social networks
- Maps and routing systems
- Web pages and links
- Communication systems

A graph is formally represented as:

$$
G=(V,E)
$$

where:

- **V** = set of vertices
- **E** = set of edges

**Expression notation** describes arithmetic expressions in different forms. The three common forms are **infix, prefix, and postfix**.

---

## Key Points

### Graphs

- A **vertex** represents an entity or node.
- An **edge** represents a connection between vertices.
- **Directed graphs** have directional edges.
- **Undirected graphs** have edges without direction.
- **Weighted graphs** assign values or costs to edges.
- **Unweighted graphs** do not assign weights to edges.
- An **adjacency matrix** represents graph connections using a 2D array.
- An adjacency matrix requires **O(V²)** space.
- Checking whether an edge exists in an adjacency matrix takes **O(1)** time.

### Expression Notations

- **Infix:** Operator between operands → `A + B`
- **Prefix:** Operator before operands → `+ A B`
- **Postfix:** Operator after operands → `A B +`
- Expression trees connect tree traversal with expression notation:
  - **Inorder → Infix**
  - **Preorder → Prefix**
  - **Postorder → Postfix**

- Prefix and postfix expressions can avoid the need for parentheses.
- **Stacks** are commonly used for converting infix expressions to postfix expressions.

---

## Example / Code

# Graphs

## Directed and Undirected Graphs

### Directed Graph

A **directed graph (digraph)** contains edges with a specific direction.

```text
A → B → C
```

An edge from `A` to `B` does not imply that an edge from `B` to `A` exists.

### Applications

- Web-page links
- One-way roads
- Task dependencies
- Directed communication

### Undirected Graph

An **undirected graph** contains edges without direction.

```text
A — B — C
```

If `A` is connected to `B`, then `B` is also connected to `A`.

### Applications

- Friendship relationships
- Two-way roads
- Communication networks

### Comparison

| Feature            | Directed Graph               | Undirected Graph               |
| ------------------ | ---------------------------- | ------------------------------ |
| **Edge Direction** | One-way                      | No direction                   |
| **Example**        | `A → B`                      | `A — B`                        |
| **Typical Use**    | Web links, task dependencies | Social networks, two-way roads |

---

# Adjacency Matrix

## Definition

An **adjacency matrix** is a two-dimensional array used to represent the connections between vertices.

For a graph containing `V` vertices, the matrix has:

$$
V \times V
$$

elements.

For an unweighted graph:

- `1` → an edge exists.
- `0` → no edge exists.

For a weighted graph, the matrix can store the **edge weight** instead.

### Example

For the graph:

```text
A
/ \
B   C
```

the adjacency matrix can be:

```text
    A B C
A   0 1 1
B   1 0 0
C   1 0 0
```

Because this is an undirected graph, the matrix is symmetric.

### C++ Implementation

```cpp
#include <iostream>
using namespace std;

int main() {
    int v = 3;
    int adj[3][3] = {0};

    // Add edges
    adj[0][1] = 1;
    adj[0][2] = 1;
    adj[1][0] = 1;
    adj[2][0] = 1;

    cout << "Adjacency Matrix:\n";

    for (int i = 0; i < v; i++) {
        for (int j = 0; j < v; j++) {
            cout << adj[i][j] << " ";
        }

        cout << endl;
    }

    return 0;
}
```

### Code Explanation

```cpp
int v = 3;
```

Defines a graph with three vertices.

```cpp
int adj[3][3] = {0};
```

Creates a `3 × 3` matrix and initializes all entries to zero.

```cpp
adj[0][1] = 1;
adj[0][2] = 1;
```

Adds connections from vertex `0` to vertices `1` and `2`.

```cpp
adj[1][0] = 1;
adj[2][0] = 1;
```

Adds the reverse connections because the graph is **undirected**.

```cpp
for (int i = 0; i < v; i++)
```

Iterates through each row.

```cpp
for (int j = 0; j < v; j++)
```

Iterates through each column.

```cpp
cout << adj[i][j] << " ";
```

Prints each matrix value.

---

## Output

```text
Adjacency Matrix:
0 1 1
1 0 0
1 0 0
```

### Advantages

- Simple to understand.
- Simple to implement.
- Edge lookup takes **O(1)** time.
- Useful for **dense graphs**.

### Disadvantages

- Requires **O(V²)** space.
- Can waste memory when the graph has relatively few edges.
- Less suitable for **sparse graphs**.

---

# Expression Notations

## Definition

**Expression notation** describes how operators and operands are arranged in an arithmetic expression.

The three major forms are:

| Notation    | Operator Position | Example |
| ----------- | ----------------- | ------- |
| **Infix**   | Between operands  | `A + B` |
| **Prefix**  | Before operands   | `+ A B` |
| **Postfix** | After operands    | `A B +` |

---

## Infix Notation

In **infix notation**, the operator is written between its operands.

```text
A + B
```

Other examples:

```text
A * B
A + B * C
(A + B) * C
```

This is the notation most commonly used in mathematics and programming.

Parentheses may be required to explicitly specify the intended order of operations.

---

## Prefix Notation

**Prefix notation**, also called **Polish notation**, places the operator before its operands.

```text
+ A B
```

For:

```text
A + B
```

the prefix form is:

```text
+ A B
```

---

## Postfix Notation

**Postfix notation**, also called **Reverse Polish notation**, places the operator after its operands.

```text
A B +
```

For:

```text
A + B
```

the postfix form is:

```text
A B +
```

Postfix expressions are particularly convenient for **stack-based evaluation**.

---

## Explanation

# Expression Trees

An **expression tree** represents an arithmetic expression as a tree.

- **Operands** are stored in leaf nodes.
- **Operators** are stored in internal nodes.

For:

```text
A + B
```

the expression tree is:

```text
    +
   / \
  A   B
```

The traversal determines the expression notation.

| Tree Traversal | Expression Notation |
| -------------- | ------------------- |
| **Inorder**    | Infix               |
| **Preorder**   | Prefix              |
| **Postorder**  | Postfix             |

### Example

For:

```text
    +
   / \
  A   B
```

**Inorder:**

```text
A + B
```

**Preorder:**

```text
+ A B
```

**Postorder:**

```text
A B +
```

This provides a direct connection between **tree traversal algorithms** and expression conversion.

---

# Direct Expression Conversion

## Definition

The **direct method** converts expressions without first constructing an expression tree.

It relies on:

- Operator precedence
- Parentheses
- Scanning direction
- A stack when required

### Operator Precedence

For the operators covered in this lecture:

$$

- , / > + , -
$$

Therefore:

```text
A + B * C
```

is interpreted as:

```text
A + (B * C)
```

rather than:

```text
(A + B) * C
```

### General Scanning

- **Postfix conversion:** commonly scans **left to right**.
- **Prefix conversion:** commonly processes the expression from **right to left**.

---

# Infix to Postfix Using a Stack

## Definition

The **stack-based infix-to-postfix algorithm** is an important technique for processing arithmetic expressions.

The algorithm:

1. Scans the expression from left to right.
2. Sends operands directly to the output.
3. Stores operators in a stack.
4. Uses precedence to decide when operators should be popped.
5. Removes remaining operators from the stack at the end.

### Pseudocode

```text
for each symbol in expression:

    if symbol is an operand:
        output symbol

    else if symbol is '(':
        push '(' onto stack

    else if symbol is ')':
        pop operators to output until '(' is found
        remove '('

    else if symbol is an operator:
        while stack is not empty
              and precedence(top) >= precedence(current):
            pop stack to output

        push current operator

pop all remaining operators to output
```

---

## C++ Implementation

```cpp
#include <iostream>
#include <stack>
#include <string>
#include <cctype>
using namespace std;

int precedence(char op) {
    if (op == '+' || op == '-')
        return 1;

    if (op == '*' || op == '/')
        return 2;

    return 0;
}

string infixToPostfix(string expr) {
    stack<char> s;
    string result = "";

    for (char c : expr) {

        if (isalnum(c)) {
            result += c;
        }

        else if (c == '(') {
            s.push(c);
        }

        else if (c == ')') {
            while (!s.empty() && s.top() != '(') {
                result += s.top();
                s.pop();
            }

            if (!s.empty())
                s.pop();
        }

        else {
            while (!s.empty() &&
                   s.top() != '(' &&
                   precedence(s.top()) >= precedence(c)) {
                result += s.top();
                s.pop();
            }

            s.push(c);
        }
    }

    while (!s.empty()) {
        result += s.top();
        s.pop();
    }

    return result;
}

int main() {
    string expr = "A+B*C";

    cout << "Postfix: "
         << infixToPostfix(expr) << endl;

    return 0;
}
```

### Code Explanation

```cpp
int precedence(char op)
```

Defines a function that determines the priority of an operator.

```cpp
if (op == '+' || op == '-')
    return 1;
```

Addition and subtraction have precedence level `1`.

```cpp
if (op == '*' || op == '/')
    return 2;
```

Multiplication and division have higher precedence, level `2`.

```cpp
stack<char> s;
```

Creates a stack for temporarily storing operators and parentheses.

```cpp
string result = "";
```

Creates an empty string for the postfix expression.

```cpp
for (char c : expr)
```

Processes every character in the expression from left to right.

```cpp
if (isalnum(c))
    result += c;
```

If the character is an operand such as `A`, `B`, or `5`, it is directly added to the output.

```cpp
else if (c == '(')
    s.push(c);
```

An opening parenthesis is pushed onto the stack.

```cpp
else if (c == ')')
```

When a closing parenthesis appears, operators are popped until the corresponding opening parenthesis is reached.

```cpp
while (!s.empty() &&
       s.top() != '(' &&
       precedence(s.top()) >= precedence(c))
```

Operators with greater or equal precedence are removed from the stack before the current operator is pushed.

```cpp
s.push(c);
```

Stores the current operator for later processing.

```cpp
while (!s.empty())
```

After the entire expression has been scanned, remaining operators are moved to the output.

---

## Output

For:

```text
A+B*C
```

the expected output is:

```text
Postfix: ABC*+
```

The expression is interpreted as:

```text
A + (B * C)
```

Therefore:

```text
Infix:   A + B * C
Postfix: A B C * +
```

---

# Comparison of Expression Notations

| Type        | Form                         | Example |
| ----------- | ---------------------------- | ------- |
| **Infix**   | Operand → Operator → Operand | `A + B` |
| **Prefix**  | Operator → Operand → Operand | `+ A B` |
| **Postfix** | Operand → Operand → Operator | `A B +` |

### Why Prefix and Postfix Are Useful

- They reduce or eliminate the need for parentheses.
- They make the order of operations explicit.
- They are convenient for machine processing.
- Postfix expressions are well suited to **stack-based evaluation**.
- Expression conversion is important in **compiler design and parsing**.

---

# Graph Representation

Graphs can be represented using several structures.

| Representation       | Space | Best Use                                                                   |
| -------------------- | ----: | -------------------------------------------------------------------------- |
| **Adjacency Matrix** | O(V²) | Dense graphs                                                               |
| **Edge List**        |  O(E) | Simple edge-based representation, especially when edges are relatively few |

An adjacency matrix provides constant-time edge lookup but may consume significant memory for a sparse graph.

---

## Common Mistakes

- Confusing **directed** and **undirected** graphs.
  - Directed: `A → B`
  - Undirected: `A — B`

- Forgetting that an adjacency matrix requires **V × V** entries.

- Assuming every graph should use an adjacency matrix.
  - Sparse graphs can use more space-efficient representations.

- Mixing up expression notations:
  - Infix → operator **between**
  - Prefix → operator **before**
  - Postfix → operator **after**

- Confusing tree traversals:
  - Inorder → Infix
  - Preorder → Prefix
  - Postorder → Postfix

- Forgetting operator precedence during infix conversion.

- Forgetting to pop remaining operators from the stack after scanning the entire expression.

- Removing a parenthesis incorrectly.
  - Parentheses control grouping and normally do not appear in the final postfix expression.

- Forgetting that the expression-conversion code shown handles **single-character operands** such as `A`, `B`, or `5`; handling multi-digit numbers or identifiers requires additional tokenization.

---

## Short Exam Notes

- **Graph:** A non-linear structure consisting of vertices and edges.
- Graph notation:

$$

G=(V,E)


$$

- **Directed graph:** Edges have direction.
- **Undirected graph:** Edges have no direction.
- **Adjacency Matrix:** A `V × V` representation of graph connections.
- Adjacency matrix:
  - Space = **O(V²)**
  - Edge lookup = **O(1)**

- **Infix:** `A + B`
- **Prefix:** `+ A B`
- **Postfix:** `A B +`
- Expression tree:
  - **Inorder → Infix**
  - **Preorder → Prefix**
  - **Postorder → Postfix**

- Operator precedence:

$$

- , / > + , -
$$

- **Infix-to-Postfix:** Scan left to right and use a stack for operators.
- Postfix expressions are suitable for **stack-based evaluation**.
- **Graphs → relationships**
- **Expression trees → expression conversion**
- **Stacks → operator management during expression conversion**
