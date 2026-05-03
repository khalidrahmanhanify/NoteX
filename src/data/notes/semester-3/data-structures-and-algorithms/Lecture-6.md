---
title: Queues in Python
description: Learn Queue data structure in Python including FIFO behavior, queue operations, implementations, and practical applications using built-in modules.
lecture: Lecture 6
semester: semester-3
subject: data-structures-and-algorithms
date: 2026-04-29
order: 11
---

# Queue Data Structure

## Definition

A **Queue** is a **linear data structure** that follows the **FIFO (First In First Out)** principle.

This means:

- The **first element inserted** is the **first element removed**.
- Insertion happens at the **REAR**
- Deletion happens at the **FRONT**

Real-life example:
People standing in a line at a bank — the first person in line is served first.

---

## Key Points

### Basic Terms

- **FRONT** → Points to the first element.
- **REAR** → Points to the last element.
- **Enqueue** → Add an element to the rear.
- **Dequeue** → Remove an element from the front.

### Queue Characteristics

- Linear structure
- FIFO order
- Insertion from rear only
- Deletion from front only

---

## Types of Queue

### 1. Simple Queue / Linear Queue

- Insertion from rear
- Deletion from front
- Follows FIFO strictly

Example:

```text
Front -> 10 20 30 <- Rear
```

---

### 2. Circular Queue

In circular queue, the last position connects to the first position.

Used to solve memory waste problem in linear queue.

If space becomes free in beginning, rear can reuse it.

Better memory utilization.

---

### 3. Priority Queue

Each element has a priority.

- Higher priority element removed first.
- If priorities are same → FIFO is used.

Example:

```text
(5, High), (2, Medium), (1, Low)
```

---

### 4. Deque (Double Ended Queue)

Insertion and deletion can happen from **both front and rear**.

### Types of Deque

#### Input Restricted Deque

- Insertion only from one side
- Deletion from both sides

#### Output Restricted Deque

- Deletion only from one side
- Insertion from both sides

---

## Example / Code

## Basic Queue Operations (Array Implementation)

```cpp
#include<iostream>
#define size 100
using namespace std;

int queue[size];

class Queue {
public:
    int front, rear;

    Queue() {
        front = -1;
        rear = -1;
    }

    void enqueue(int x) {
        if(rear == size - 1) {
            cout << "Queue Overflow\n";
        }
        else {
            if(front == -1)
                front = 0;

            rear++;
            queue[rear] = x;
        }
    }

    void dequeue() {
        if(front == -1 || front > rear) {
            cout << "Queue Underflow\n";
        }
        else {
            front++;
        }
    }

    void print() {
        for(int i = front; i <= rear; i++) {
            cout << queue[i] << endl;
        }
    }
};
```

---

## STL Queue Example in C++

```cpp
#include<iostream>
#include<queue>
using namespace std;

int main() {
    queue<int> q;

    q.push(10);
    q.push(20);
    q.push(30);

    cout << q.front() << endl;   // 10

    q.pop();

    cout << q.front() << endl;   // 20
}
```

---

## Priority Queue Example

```cpp
#include<iostream>
#include<queue>
using namespace std;

int main() {
    priority_queue<int> pq;

    pq.push(45);
    pq.push(23);
    pq.push(12);

    cout << pq.top();   // 45
}
```

---

## Deque Example

```cpp
#include<iostream>
#include<deque>
using namespace std;

int main() {
    deque<int> d;

    d.push_front(10);
    d.push_back(20);
    d.push_front(5);

    cout << d.front();   // 5
}
```

---

## Explanation

### Queue Operations

### enqueue()

Adds element at rear.

Steps:

1. Check full
2. Increase rear
3. Insert item

---

### dequeue()

Removes front element.

Steps:

1. Check empty
2. Increase front

---

### peek()

Returns front element without removing it.

```cpp
queue[front]
```

---

### isFull()

```cpp
rear == size - 1
```

---

### isEmpty()

```cpp
front == -1 || front > rear
```

---

## Output (if any)

For queue example:

```text
10
20
```

For priority queue:

```text
45
```

For deque example:

```text
5
```

---

## Applications of Queue

- CPU Scheduling
- Printer Queue
- Call Center systems
- Keyboard buffer
- Routers / Switches
- Traffic management
- BFS in Graphs
- Palindrome checker (Deque)

---

## Common Mistakes

### 1. Wrong FIFO understanding

Queue is FIFO, not LIFO.

### 2. Overflow not checked

Trying to insert in full queue.

### 3. Underflow not checked

Deleting from empty queue.

### 4. Incorrect empty condition

Use:

```cpp
front == -1 || front > rear
```

### 5. Forgetting Circular Queue advantage

It reuses empty spaces.

---

## Short Exam Notes (very concise revision points)

- Queue = Linear FIFO structure
- Insert at Rear, Delete at Front
- Enqueue = Insert
- Dequeue = Delete
- Front = first element
- Rear = last element
- Types: Linear, Circular, Priority, Deque
- Deque = both side insertion/deletion
- Priority Queue = based on priority
- Applications: Printer, CPU, Buffer, Traffic
