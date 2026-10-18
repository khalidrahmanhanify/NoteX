---
title: Process Scheduling and Types of Schedulers
description: Understanding process scheduling in operating systems, the roles of long-term, short-term, and medium-term schedulers, process movement between queues, and common CPU scheduling algorithms
lecture: Lecture 6
semester: semester-4
subject: operating-system-concepts
date: 2026-09-28
order: 11
---

# Process Scheduling and Types of Schedulers

## Definition

A **scheduler** is an operating system component responsible for selecting processes and determining when they should be admitted into memory, assigned CPU time, or temporarily moved out of memory.

The main purpose of scheduling is to use system resources efficiently, improve CPU utilization, and ensure that processes execute effectively.

## Key Points

### 1. Process Scheduling

Process scheduling manages the movement of processes between different queues and the CPU.

The main components involved in process scheduling are:

- **Job Pool:** Contains processes waiting to be admitted into main memory.
- **Ready Queue:** Contains processes in main memory that are ready to execute and waiting for CPU time.
- **CPU:** Executes instructions belonging to the selected process.
- **Waiting Queue:** Contains processes waiting for an event, such as an I/O operation, to complete.
- **Device I/O Queue:** Contains processes waiting to use a particular I/O device.
- **Disk / Secondary Storage:** Stores programs and processes that are not currently kept in main memory.

### 2. Types of Schedulers

There are three main types of schedulers in an operating system.

#### A. Long-Term Scheduler (LTS)

The long-term scheduler, also called the **job scheduler**, selects processes from the job pool and admits them into main memory for execution.

Its main responsibility is to control which processes enter the system for processing.

Example:

- P1, P2, and P3 are waiting in the job pool.
- The long-term scheduler selects P2.
- P2 is admitted into main memory and placed in the ready queue.

#### B. Short-Term Scheduler (STS)

The short-term scheduler, also called the **CPU scheduler**, selects a process from the ready queue and assigns it to the CPU.

It operates frequently because the CPU may need to select another process whenever the current process finishes, blocks, or is preempted.

Example:

- P1, P2, and P3 are waiting in the ready queue.
- The short-term scheduler selects P1.
- The CPU executes P1.

#### C. Medium-Term Scheduler (MTS)

The medium-term scheduler manages the temporary removal and reintroduction of processes from main memory. This is called **swapping**.

It may suspend a process and move its memory contents to secondary storage, then bring the process back into memory when appropriate.

Example:

- P3 is temporarily removed from main memory because memory resources are needed.
- P3 is swapped out to secondary storage.
- Later, P3 is swapped back into main memory and can return to the ready queue when it is ready to execute.

### 3. Scheduling Algorithms

A scheduling algorithm determines which process should receive CPU time next.

#### A. First Come, First Served (FCFS)

Processes are executed in the order they arrive in the ready queue.

- Simple to implement.
- A long-running process can make other processes wait for a long time.

#### B. Shortest Job First (SJF)

The process with the shortest expected CPU burst is selected first.

- Can reduce average waiting time.
- Requires knowledge or estimation of CPU burst times.
- Long processes may experience starvation.

#### C. Round Robin (RR)

Each process receives a fixed amount of CPU time called a **time quantum**.

- Processes take turns using the CPU.
- If a process does not finish within its time quantum, it is preempted and usually returned to the end of the ready queue.
- Commonly used in time-sharing systems.

#### D. Priority Scheduling

The CPU is assigned to a process according to its priority.

- Higher-priority processes are selected before lower-priority processes.
- The meaning of priority values depends on the operating system; in some systems, a smaller number represents a higher priority.
- Low-priority processes may suffer starvation.

#### E. Multilevel Queue Scheduling

The ready queue is divided into multiple queues according to process type or priority.

- Different queues may use different scheduling algorithms.
- For example, interactive processes and batch processes may belong to separate queues.
- The operating system determines how CPU time is shared between the queues.

## Example / Code

### Process Scheduling Flow

```text
                  Job Pool
                     |
                    LTS
                     |
                     v
                  Ready Queue
                     |
                    STS
                     |
                     v
                    CPU
                     |
          +----------+----------+
          |          |          |
       Finished   I/O Request  Time Quantum
          |          |          |
          v          v          v
         Exit    Waiting/I/O  Ready Queue

                  Ready Queue
                     |
                    MTS
                     |
                     v
              Secondary Storage
                     |
             Process swapped back
                     |
                     v
                  Ready Queue
```

### Example of the Three Schedulers

Suppose P1, P2, and P3 are waiting in the job pool.

1. LTS: Selects P1 and admits it into main memory.
2. STS: Selects P1 from the ready queue and assigns it to the CPU.
3. MTS: May temporarily swap a suspended process out of main memory and bring it back later.

## Explanation

### How the Three Schedulers Work Together

The three schedulers have different responsibilities:

| Scheduler         | Selects From                               | Main Responsibility                 |
| ----------------- | ------------------------------------------ | ----------------------------------- |
| Long-term (LTS)   | Job pool                                   | Admits processes into memory        |
| Short-term (STS)  | Ready queue                                | Selects a process for CPU execution |
| Medium-term (MTS) | Processes in memory or suspended processes | Manages swapping                    |

The general process flow is as follows:

1. A process enters the job pool.
2. The long-term scheduler admits it into main memory.
3. The process enters the ready queue.
4. The short-term scheduler selects it for CPU execution.
5. The process may finish, request I/O, or be preempted.
6. If it requests I/O, it enters a waiting state until the operation completes.
7. When the I/O operation finishes, it can return to the ready queue.
8. The medium-term scheduler may swap a process out of memory and later bring it back.

Important distinction: A process waiting for I/O is not necessarily swapped to disk. Waiting for an I/O event and swapping a process out of main memory are two different operations.

### Difference Between the Schedulers

- LTS: Decides which processes enter the system for execution.
- STS: Decides which ready process executes next.
- MTS: Helps manage memory pressure by suspending and swapping processes.

## Output (if any)

There is no program output because process scheduling is a theoretical operating system concept.

The expected result of process scheduling is efficient CPU utilization, organized process execution, and effective management of memory and other system resources.

## Common Mistakes

1. Confusing the job pool with the ready queue. The job pool contains processes waiting to be admitted, while the ready queue contains processes ready to use the CPU.
2. Saying that the long-term scheduler directly assigns CPU time. Its main responsibility is admitting processes into memory.
3. Confusing the short-term scheduler with the medium-term scheduler. The short-term scheduler selects processes for CPU execution, while the medium-term scheduler manages swapping.
4. Assuming that every waiting process is swapped to disk. A process can wait for I/O while remaining in memory.
5. Confusing RAM with secondary storage. RAM is main memory, while a disk or SSD provides secondary storage.
6. Assuming that every operating system uses all three schedulers in exactly the same way. Their implementation depends on the operating system.
7. Assuming that SJF always selects the process with the shortest total program execution time. It selects based on the expected CPU burst.

## Short Exam Notes (very concise revision points)

- Scheduler: OS component that manages process selection and execution.
- LTS (Job Scheduler): Job pool → Ready queue; admits processes into memory.
- STS (CPU Scheduler): Ready queue → CPU; selects the next process to execute.
- MTS (Swapper): Manages swapping processes out of and back into memory.
- FCFS: Executes processes in arrival order.
- SJF: Selects the shortest expected CPU burst.
- RR: Assigns each process a fixed time quantum.
- Priority Scheduling: Selects processes according to priority.
- Multilevel Queue: Divides processes into separate scheduling queues.
- Waiting: A process is waiting for an event or I/O completion.
- Swapping: Temporarily moves process memory contents between RAM and secondary storage.
