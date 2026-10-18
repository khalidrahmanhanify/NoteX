---
title: Multithreading Models and Process Synchronization
description: Understanding many-to-one, one-to-one, and many-to-many threading models, multicore programming, concurrency, implicit threading, inter-process communication, critical sections, and synchronization tools
lecture: Lecture 8
semester: semester-4
subject: operating-system-concepts
date: 2026-10-12
order: 9
---

# Multithreading Models and Process Synchronization

## Definition

**Multithreading** is the ability of a process to contain multiple threads that can make progress concurrently. Depending on the threading model and available CPU cores, threads may also execute in parallel.

A **multithreading model** defines how user-level threads are mapped to kernel-level threads.

**Process synchronization** coordinates processes or threads that share resources to prevent conflicts and maintain data consistency.

## Key Points

### 1. Multithreading Models

There are three main multithreading models:

1. Many-to-One (M:1)
2. One-to-One (1:1)
3. Many-to-Many (M:M)

These models describe the relationship between user-level threads and kernel-level threads.

### 2. Many-to-One Model (M:1)

The many-to-one model maps multiple user-level threads to a single kernel thread.

- Thread management is performed by a user-level thread library.
- The operating system kernel does not manage each user thread independently.
- Only one kernel thread represents all the user-level threads.
- If one thread makes a blocking system call, the entire process may be blocked.
- Multiple user threads cannot execute in parallel on separate CPU cores through this single kernel thread.

Example:

```text
User-Level Threads
    T1   T2   T3   T4
     \    |   |   /
      \   |   |  /
       Single Kernel Thread
                |
               CPU
```

### 3. One-to-One Model (1:1)

The one-to-one model maps each user-level thread to a separate kernel thread.

- Every user thread has a corresponding kernel thread.
- The operating system kernel schedules each kernel thread independently.
- If one thread blocks, other threads can continue executing.
- Threads can execute in parallel on multiple CPU cores.
- Creating many threads can increase memory use and kernel-management overhead.

Examples include Windows and Linux threading implementations.

```text
User Threads       Kernel Threads

    T1  ----------->  K1
    T2  ----------->  K2
    T3  ----------->  K3
    T4  ----------->  K4
```

### 4. Many-to-Many Model (M:M)

The many-to-many model maps multiple user-level threads to multiple kernel threads. Multiple user threads can be multiplexed over a number of kernel threads that is typically equal to or smaller than the number of user threads.

- Supports many user-level threads without requiring one kernel thread for every user thread.
- Multiple kernel threads can execute simultaneously on different CPU cores.
- A blocking thread does not necessarily prevent other threads from executing.
- Combines user-level thread management with kernel-level scheduling.
- Can provide flexibility and efficient resource utilization.

```text
User-Level Threads       Kernel Threads

   T1   T2   T3
    \   |   /
     \  |  /
       K1

   T4   T5   T6
    \   |   /
     \  |  /
       K2
```

### 5. Comparison of Multithreading Models

| Feature              | Many-to-One                             | One-to-One                           | Many-to-Many                                               |
| -------------------- | --------------------------------------- | ------------------------------------ | ---------------------------------------------------------- |
| Mapping              | Many user threads to one kernel thread  | One user thread to one kernel thread | Many user threads to multiple kernel threads               |
| Kernel awareness     | Individual user threads are not visible | Kernel manages each thread           | Kernel manages the mapped kernel threads                   |
| Blocking system call | May block the entire process            | Other threads can continue           | Other threads can continue if kernel threads are available |
| Parallel execution   | No                                      | Yes                                  | Yes                                                        |
| Resource overhead    | Low                                     | Relatively high                      | Can be lower than one-to-one for many user threads         |
| Flexibility          | Limited                                 | Good                                 | High                                                       |

### 6. Multicore Programming

Multicore programming involves designing software to take advantage of multiple CPU cores so that tasks or threads can execute in parallel.

Key points:

- Divides work into tasks that can run concurrently or in parallel.
- Can improve execution speed and application responsiveness.
- Uses multiple CPU cores more effectively.
- Requires careful coordination when threads share data.
- Is used in web servers, databases, operating systems, and scientific applications.

### 7. Multicore vs. Multiprocessor Systems

Multicore system: A processor contains multiple processing cores on a single chip.

Multiprocessor system: A computer contains two or more processors. Each processor may itself contain multiple cores.

| Multicore System                         | Multiprocessor System                                         |
| ---------------------------------------- | ------------------------------------------------------------- |
| Multiple cores within one processor chip | Multiple processor units                                      |
| Cores share some processor resources     | Processors may have separate caches and other resources       |
| Common in laptops and desktop computers  | Common in servers and high-performance systems                |
| Supports parallel execution across cores | Supports parallel execution across processors and their cores |

### 8. Concurrency and Parallelism

Concurrency means multiple tasks make progress during overlapping periods. They may take turns on one CPU core.

Parallelism means multiple tasks execute simultaneously on different CPU cores or processors.

Multitasking is the operating system's ability to manage multiple tasks so that they can make progress. On a single core, this commonly involves switching between tasks; on multicore systems, tasks can also execute in parallel.

### 9. Implicit Threading

Implicit threading is an approach in which thread creation and management are handled by a runtime library, compiler, or framework rather than being managed entirely by the programmer.

The programmer defines tasks or parallel work, and the system determines how to execute that work using threads.

Advantages:

- Reduces the complexity of multithreaded programming.
- Can improve utilization of multiple CPU cores.
- Reduces the amount of manual thread-management code.
- Can help reduce certain programming errors when used with suitable abstractions.

Examples of implicit threading techniques include:

- Thread pools.
- OpenMP directives.
- Task-based parallelism.
- Grand Central Dispatch (GCD).

### 10. Explicit Threading

Explicit threading is an approach in which the programmer directly creates, manages, or coordinates threads using a threading API.

For example, a programmer may create threads using Java's `Thread` class or a POSIX threads (pthreads) API.

| Implicit Threading                                             | Explicit Threading                                    |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| Thread management is largely handled by a runtime or framework | Programmer directly manages threads                   |
| Programmer focuses on tasks or parallel operations             | Programmer specifies thread creation and coordination |
| Reduces manual thread-management code                          | Provides direct control over thread behavior          |
| Commonly uses task pools and parallel frameworks               | Commonly uses threading APIs                          |

### 11. Thread Issues

Thread issues are challenges that arise when creating and managing multithreaded programs.

#### A. `fork()` and `exec()`

- `fork()` creates a new process in Unix-like systems.
- In a multithreaded process, the behavior of `fork()` requires care because the child process may initially contain only the thread that called `fork()`.
- `exec()` replaces the current process image with a new program. If successful, the previous program's threads are replaced by the new program image.

#### B. Thread Cancellation

Thread cancellation means terminating a thread before it finishes its work.

Two common approaches are:

- Asynchronous cancellation: A thread is terminated immediately, which can be unsafe if it is holding resources.
- Deferred cancellation: A thread checks for cancellation at appropriate points and exits safely.

#### C. Thread Pools

A thread pool is a collection of existing threads that can execute submitted tasks.

Advantages:

- Reduces the overhead of repeatedly creating and destroying threads.
- Controls the number of active worker threads.
- Can improve responsiveness when many tasks arrive.

### 12. Inter-Process Communication (IPC)

Inter-Process Communication (IPC) refers to mechanisms that allow separate processes to exchange data and coordinate their activities.

Common IPC mechanisms include:

- Shared memory.
- Pipes.
- Message queues.
- Sockets.
- Signals.

IPC is particularly important when processes need to share information or coordinate work. It is not limited to communication between processes on the same computer; sockets can also support communication across a network.

### 13. Process Synchronization

Process synchronization coordinates processes or threads when they access shared resources.

It helps prevent race conditions, data inconsistency, and conflicts caused by unsynchronized access.

Synchronization is important when multiple processes or threads access resources such as:

- Shared variables.
- Files.
- Shared memory.
- Databases.
- I/O devices.

### 14. The Critical Section Problem

A critical section is a part of a program in which shared data or a shared resource is accessed or modified.

The critical section problem is to design a protocol that controls entry into critical sections so that concurrent execution does not corrupt shared data.

Example:

```text
Process P1:
    Read shared variable
    Increase value
    Write updated value

Process P2:
    Read shared variable
    Increase value
    Write updated value
```

If both processes execute these operations simultaneously without proper synchronization, one update may overwrite the other.

A correct solution should satisfy three conditions:

1. Mutual Exclusion: Only one process or thread at a time may execute the relevant critical section when exclusive access is required.
2. Progress: If no process is in the critical section and some processes want to enter, the choice of the next process should not be postponed indefinitely.
3. Bounded Waiting: After a process requests entry, there must be a limit on how many times other processes can enter before it gets its turn.

### 15. Synchronization Hardware

Synchronization hardware consists of CPU-supported atomic instructions used to implement synchronization mechanisms.

Examples include:

- Test-and-set.
- Compare-and-swap.
- Atomic exchange.

These instructions allow certain operations to execute indivisibly, helping programmers and operating systems implement locks and other synchronization tools.

Hardware support alone does not automatically prevent every race condition; it must be used correctly.

### 16. Mutex Locks

A mutex lock is a synchronization mechanism that provides mutual exclusion by allowing only one thread at a time to hold a particular lock.

Basic operation:

1. A thread acquires the lock before entering the critical section.
2. It accesses or modifies the shared resource.
3. It releases the lock when finished.
4. Another thread can then acquire the lock.

Example:

```text
Acquire mutex lock

    Critical Section
    Access shared data

Release mutex lock
```

Mutex locks help prevent simultaneous modifications to shared data.

### 17. Semaphores

A semaphore is a synchronization mechanism that uses an integer counter and atomic operations to coordinate access to resources.

The two traditional operations are:

- Wait(): Attempts to decrement the semaphore. If the resource is unavailable, the calling thread may need to wait.
- Signal(): Increments the semaphore or signals that a resource or event is available.

Types of semaphores:

- Binary Semaphore: Commonly uses values 0 and 1 to represent unavailable and available states.
- Counting Semaphore: Uses a counter to manage multiple instances of a resource.

Semaphores can control access to shared resources and coordinate execution between threads or processes.

### 18. Monitors

A monitor is a high-level synchronization construct that groups shared data and the operations that access it.

A monitor typically ensures that only one thread at a time executes within its protected procedures. Condition variables can be used to make threads wait for particular conditions.

Monitors help organize shared-data access and reduce the complexity of manual synchronization.

## Example / Code

### Example 1: Many-to-One vs. One-to-One

```text
Many-to-One:

T1 ----\
T2 -----+---- K1 ---- CPU
T3 ----/


One-to-One:

T1 -------- K1 ---- CPU Core 1
T2 -------- K2 ---- CPU Core 2
T3 -------- K3 ---- CPU Core 3
```

In many-to-one, multiple user threads share one kernel thread. In one-to-one, each user thread maps to a separate kernel thread.

### Example 2: Race Condition

Suppose a shared variable starts at `5`, and two threads each increase it by `1`.

```text
Initial value: 5

Thread 1 reads: 5
Thread 2 reads: 5

Thread 1 writes: 6
Thread 2 writes: 6

Final value: 6
```

The expected result is `7`, but the actual result is `6` because one update is lost. This is called a race condition.

### Example 3: Synchronization Using a Mutex

```text
lock(mutex)

shared_counter = shared_counter + 1

unlock(mutex)
```

The mutex ensures that only one thread at a time executes the protected update, assuming all threads access the shared counter through the same lock.

## Explanation

### 1. How Multithreading Models Work

The operating system must schedule kernel threads to execute on available CPU cores.

- In many-to-one, several user threads depend on one kernel thread.
- In one-to-one, every user thread has a corresponding kernel thread.
- In many-to-many, many user threads share multiple kernel threads.

The choice affects parallelism, blocking behavior, scheduling flexibility, and resource consumption.

### 2. How Multicore Programming Works

Suppose an application has three independent tasks.

- CPU Core 1 executes Task A.
- CPU Core 2 executes Task B.
- CPU Core 3 executes Task C.

If the tasks can safely execute independently, they may finish sooner than if one core had to execute them sequentially. The actual performance improvement depends on workload, synchronization, and other overheads.

### 3. How IPC and Synchronization Differ

- IPC enables separate processes to exchange information or coordinate.
- Synchronization controls the timing and order of operations to ensure correct access to shared resources.

IPC mechanisms may include synchronization features, but communication and synchronization are not the same thing.

### 4. How Synchronization Prevents Race Conditions

Without synchronization, multiple threads may read and modify the same variable at the same time.

A mutex, semaphore, or other appropriate synchronization mechanism can coordinate access so that operations occur safely.

For example, protecting a counter update with a mutex prevents two threads from simultaneously performing the protected read-modify-write operation.

## Output (if any)

There is no program output because these notes cover theoretical operating system concepts.

The expected results of correctly designed multithreading and synchronization include:

- Improved concurrency and potential parallel performance.
- More responsive applications.
- Efficient use of CPU cores.
- Safe access to shared resources.
- Reduced risk of race conditions and data inconsistency.

## Common Mistakes

1. Confusing user-level threads with kernel-level threads. User-level threads are managed by a thread library, while kernel threads are managed by the OS kernel.
2. Assuming many-to-one supports parallel execution across multiple CPU cores. A single kernel thread cannot execute multiple user threads simultaneously.
3. Assuming a blocked thread always blocks the entire process. This is particularly associated with many-to-one implementations.
4. Assuming every processor has only one core. A processor may contain multiple cores.
5. Confusing multicore with multiprocessor systems. Multicore means multiple cores in one processor; multiprocessor means multiple processors.
6. Confusing concurrency with parallelism. Tasks can be concurrent without executing simultaneously.
7. Assuming implicit threading means the programmer never needs to consider synchronization. Shared data can still cause race conditions.
8. Confusing IPC with synchronization. IPC exchanges information; synchronization coordinates access and execution.
9. Assuming a critical section is simply a situation where several processes request a resource. It is the code region that accesses shared data or resources.
10. Confusing a mutex with a semaphore. A mutex is primarily used for mutual exclusion, while a semaphore uses a counter for resource coordination or signaling.
11. Assuming `fork()` and `exec()` do the same thing. `fork()` creates a process; `exec()` replaces the current process image with a new program.
12. Assuming synchronization always improves performance. Locks and coordination introduce overhead, so synchronization should be designed carefully.

## Short Exam Notes (very concise revision points)

- M:1: Many user threads → one kernel thread; limited parallelism.
- 1:1: Each user thread → one kernel thread; supports parallel execution.
- M:M: Many user threads → multiple kernel threads; flexible mapping.
- Multicore: Multiple cores within one processor chip.
- Multiprocessor: Two or more processors in a system.
- Concurrency: Multiple tasks make progress during overlapping periods.
- Parallelism: Multiple tasks execute simultaneously.
- Implicit threading: Runtime or framework manages thread creation and execution.
- Explicit threading: Programmer directly manages threads.
- Thread pool: Reuses existing worker threads.
- IPC: Communication between processes.
- Synchronization: Coordinates access to shared resources.
- Critical section: Code that accesses shared data or resources.
- Race condition: Result depends on the timing of concurrent operations.
- Mutual exclusion: Only one thread enters a protected critical section at a time.
- Mutex: Lock for exclusive access.
- Semaphore: Counter-based synchronization mechanism.
- Monitor: High-level construct for protected shared data and operations.
- Atomic instructions: Hardware operations used to implement synchronization.
