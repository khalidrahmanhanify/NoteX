---
title: Threads and Multithreaded Programming
description: Understanding threads, thread components, process and thread differences, advantages of multithreading, user-level threads, kernel-level threads, and their advantages and disadvantages
lecture: Lecture 7
semester: semester-4
subject: operating-system-concepts
date: 2026-10-05
order: 10
---

# Threads and Multithreaded Programming

## Definition

A **thread** is the smallest unit of CPU execution within a process. It represents a single flow of execution that can run independently of other threads within the same process.

A thread is also called a **Lightweight Process (LWP)** because it generally requires fewer resources to create and manage than a complete process.

Threads belonging to the same process share code, data, and open files, but each thread has its own program counter, CPU registers, and stack.

## Key Points

### 1. Components of a Thread

Each thread has three important components:

- **Program Counter (PC):** Stores the address of the next instruction the thread will execute.
- **CPU Registers:** Hold temporary data and the thread's execution state. They help the operating system save and restore the thread's state during a context switch.
- **Stack:** Stores function calls, parameters, local variables, and return addresses associated with the thread.

Threads within the same process share:

- Program code.
- Global and heap data.
- Open files and other process resources.

### 2. Multithreading

**Multithreading** is the ability of a process to contain multiple threads that perform different tasks concurrently.

For example, a web browser may use separate threads to:

- Update the user interface.
- Fetch data from the internet.
- Perform background tasks.
- Process user interactions.

Multithreading can improve application responsiveness and performance.

### 3. Concurrency and Parallelism

- **Concurrency:** Multiple tasks make progress during overlapping periods. The CPU may switch between threads.
- **Parallelism:** Multiple tasks execute simultaneously on different CPU cores.

Multithreading supports concurrency and can support parallelism when multiple processing cores are available.

### 4. Process vs. Thread

| Process                                                                             | Thread                                                                        |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| A process is an executing program with its own process resources and address space. | A thread is a unit of execution within a process.                             |
| Generally requires more resources to create.                                        | Generally requires fewer resources to create.                                 |
| Has its own address space.                                                          | Shares the process address space with other threads.                          |
| Processes are isolated from one another by default.                                 | Threads in the same process can access shared data.                           |
| Communication between processes often requires IPC mechanisms.                      | Threads can communicate through shared memory.                                |
| A blocked process does not necessarily stop other processes.                        | A blocked thread does not necessarily stop other threads in the same process. |

### 5. Advantages of Threads

- **Faster context switching:** Thread switching can be less expensive than process switching because threads share process resources.
- **Concurrency:** Multiple tasks can make progress within one process.
- **Responsiveness:** An application can remain responsive while another thread performs a lengthy operation.
- **Resource sharing:** Threads can share data and resources within the same process.
- **Economy:** Creating and managing threads generally requires fewer resources than creating processes.
- **Multicore utilization:** Threads can execute in parallel on multiple CPU cores.

### 6. Types of Threads

There are two main types of threads based on who manages them:

1. User-Level Threads (ULTs)
2. Kernel-Level Threads (KLTs)

### 7. User-Level Threads (ULTs)

User-level threads are managed by a thread library in user space rather than directly by the operating system kernel.

The thread library handles operations such as thread creation, scheduling, switching, and termination.

#### Advantages

- **Fast management:** Threads can often be created and switched without entering kernel mode.
- **Portability:** Thread libraries can provide thread functionality on different operating systems.
- **Application-specific scheduling:** The thread library can schedule threads according to the application's needs.
- **Low overhead:** Many thread-management operations do not require system calls.

#### Disadvantages

- **Blocking system calls:** In a many-to-one implementation, a blocking system call can block the entire process and its user-level threads.
- **Limited parallelism:** In a many-to-one implementation, multiple user threads cannot execute simultaneously on different CPU cores because the kernel sees only one schedulable thread.

### 8. Kernel-Level Threads (KLTs)

Kernel-level threads are managed directly by the operating system kernel.

The kernel knows about individual threads and schedules them for CPU execution.

#### Advantages

- **Better blocking behavior:** If one thread blocks, other threads in the same process can continue executing, provided they are runnable.
- **Multicore support:** Multiple kernel threads can execute in parallel on different CPU cores.
- **Kernel scheduling:** The operating system schedules threads individually.
- **System-wide management:** The kernel manages thread execution and coordinates with operating system services.

#### Disadvantages

- **Higher overhead:** Thread creation and management may require system calls.
- **More expensive switching:** Switching between kernel threads may require kernel involvement and can cost more than switching between user-level threads managed entirely in user space.

## Example / Code

### Example 1: Web Browser Using Multiple Threads

```text
              Web Browser Process
                      |
          +-----------+-----------+
          |           |           |
       Thread 1    Thread 2    Thread 3
          |           |           |
       Display     Fetch Data   User Input
       Interface   from Web     Processing
```

In this example, each thread handles a different task within the same browser process.

### Example 2: User-Level and Kernel-Level Threads

```text
USER-LEVEL THREADS

          User Process
               |
         Thread Library
               |
          +----+----+
          |         |
        ULT 1     ULT 2
               |
          Operating System
               |
              CPU


KERNEL-LEVEL THREADS

          User Process
               |
          +----+----+
          |         |
        KLT 1     KLT 2
          |         |
          +----+----+
               |
          Kernel Scheduler
               |
          +----+----+
          |         |
        CPU Core 1  CPU Core 2
```

The first diagram illustrates user-level thread management. The second illustrates how kernel-managed threads can be scheduled on separate CPU cores.

## Explanation

### 1. How a Thread Works

When a process contains multiple threads, each thread can perform a separate task.

For example, a browser may display a webpage while another thread downloads information.

Each thread maintains its own execution state:

- The program counter identifies the next instruction.
- The registers hold the thread's current CPU state.
- The stack stores function calls and local execution data.

When a thread is interrupted or switched out, its execution state can be saved and restored later so it can continue from the appropriate point.

This saved execution state is associated with the thread's management information, which the operating system or thread library maintains.

### 2. User-Level vs. Kernel-Level Threads

| Feature                | User-Level Threads                                               | Kernel-Level Threads                                     |
| ---------------------- | ---------------------------------------------------------------- | -------------------------------------------------------- |
| Management             | Thread library                                                   | OS kernel                                                |
| Kernel awareness       | Kernel may not know individual threads exist                     | Kernel knows individual threads                          |
| Creation and switching | Generally faster                                                 | Generally higher overhead                                |
| Scheduling             | User-level thread library                                        | Kernel scheduler                                         |
| Blocking behavior      | Depends on the implementation; many-to-one can block all threads | One blocked thread does not necessarily block the others |
| Parallel execution     | Not possible in many-to-one implementations                      | Possible on multiple CPU cores                           |
| Portability            | Can be provided through a user-level library                     | Depends on OS kernel support                             |

### 3. Important Thread Concepts

Thread Control Block (TCB):

A Thread Control Block stores information needed to manage an individual thread, such as its state, program counter, register values, and scheduling information. The exact fields depend on the operating system.

Context Switching:

A context switch occurs when the CPU stops executing one thread and switches to another. The current execution state is saved, and the next thread's state is restored.

Blocking:

A thread is blocked when it cannot continue until an event occurs, such as the completion of an I/O operation.

Multicore Programming:

Multicore programming allows software to use multiple CPU cores. Threads can execute simultaneously on different cores when the operating system and application support parallel execution.

## Output (if any)

There is no program output because this is a theoretical operating system topic.

The expected result of multithreading is improved responsiveness, resource sharing, and potentially better performance through concurrency and parallel execution.

## Common Mistakes

1. Confusing a thread with a process. A process is a resource-owning execution environment, while a thread is a unit of execution within it.
2. Assuming threads have completely separate memory. Threads in the same process share the process address space, although each thread has its own stack and execution state.
3. Confusing concurrency with parallelism. Concurrency means overlapping progress; parallelism means simultaneous execution.
4. Assuming every multithreaded application is faster. Synchronization overhead, contention, and task dependencies can reduce performance.
5. Assuming user-level threads always block the entire process. This is a limitation of common many-to-one implementations, not every user-level threading design.
6. Assuming user-level threads can never run in parallel. Some implementations use many-to-many models that map user threads to multiple kernel threads.
7. Confusing the Program Counter with CPU registers. The PC identifies the next instruction, while registers hold execution data and state.
8. Assuming all thread data is shared. Each thread has its own program counter, registers, and stack.

## Short Exam Notes (very concise revision points)

- Thread: Smallest unit of CPU execution within a process.
- LWP: Lightweight Process.
- PC: Address of the next instruction.
- Registers: Hold temporary data and execution state.
- Stack: Stores function calls, parameters, local variables, and return addresses.
- Concurrency: Multiple tasks make progress during overlapping periods.
- Parallelism: Multiple tasks execute simultaneously.
- ULT: Managed by a user-level thread library.
- KLT: Managed by the operating system kernel.
- ULT advantage: Generally fast and has low management overhead.
- ULT limitation: Many-to-one implementations cannot achieve multicore parallelism.
- KLT advantage: Supports kernel scheduling and multicore execution.
- KLT disadvantage: Management can involve greater overhead.
- TCB: Stores thread-management and execution-state information.
- Context switching: Saving one execution state and restoring another.
