---
title: Operating System Concepts
description: Introduction to operating systems, OS roles and functions, processes, kernel, user and kernel space, system calls, software categories, utility programs, and device drivers
lecture: Lecture 1
semester: semester-4
subject: operating-system-concepts
date: 2026-08-24
order: 16
---

# Operating System Concepts

## Definition

An **Operating System (OS)** is **system software** that manages computer hardware and software resources and provides services to application programs.

It acts as an **intermediary between users/applications and computer hardware**, making the computer easier to use and allowing programs to operate efficiently.

According to the lecture slide, an OS manages resources such as **CPU time, memory, storage, and input/output devices** and provides services required by computer programs.

### Examples

- Windows
- macOS
- Linux
- Android
- iOS

> **Important correction:** There are **not only 8 operating systems worldwide**. There are many operating systems and operating-system families. Linux also has many distributions (distros), such as Ubuntu, Fedora, Debian, Arch Linux, and Linux Mint.

---

## Key Points

### 1. Main Roles of an Operating System

An OS:

- Manages **CPU and processes**
- Manages **main memory (RAM)**
- Manages **files and storage**
- Manages **input/output devices**
- Provides **security and access control**
- Supports **network communication**
- Provides a **user interface**
- Controls the execution of programs
- Provides services to application programs

The lecture identifies process management, memory management, file-system management, device management, security, networking, user interface, and scheduling as major OS areas.

### 2. OS as an Intermediary

A simplified model is:

```text
User
  ↓
Application Software
  ↓
Operating System
  ↓
Hardware
```

The OS prevents applications from having to directly control hardware themselves.

---

## Example / Code

Consider opening a text editor:

```text
User
 ↓
Text Editor
 ↓
Operating System
 ↓
CPU + RAM + Storage + Keyboard + Display
```

For example, when you save a document, the application requests the operating system to write data to storage. The OS handles the interaction with the storage device.

---

## Explanation

### Operating System Domain

The **domain of Operating Systems** focuses on understanding how operating systems work, how they are designed, and how they efficiently manage computer resources.

Important areas include:

| Area                   | Responsibility                                |
| ---------------------- | --------------------------------------------- |
| Process Management     | Manages programs that are currently executing |
| Memory Management      | Allocates and protects RAM                    |
| File-System Management | Organizes, stores, and retrieves files        |
| Device Management      | Controls hardware devices                     |
| Security               | Controls authentication and permissions       |
| Networking             | Supports communication between computers      |
| User Interface         | Allows users to interact with the computer    |
| Scheduling             | Determines which process gets CPU time        |

---

### Process

A **process is a program that is currently executing**.

A useful distinction is:

```text
Program → Passive instructions stored on storage
Process → Active execution of those instructions
```

For example:

```text
Chrome.exe on SSD
        ↓
     Executed
        ↓
Chrome process in memory
```

A process requires system resources such as:

- CPU time
- RAM
- Files
- Input/output devices
- Other operating-system resources

The slide specifically defines process management as managing **programs in execution**, including CPU allocation, multitasking, and process synchronization.

> **Important:** Saying "a program stays on the SSD/HDD and a process stays in RAM" is a useful beginner model, but it is not completely precise. A process's code and data are normally loaded into memory for execution, but modern operating systems use virtual memory, paging, and other mechanisms.

---

### Kernel

The **kernel is the core component of an operating system**.

It is responsible for fundamental resource-management operations such as:

- Process management
- Memory management
- Device management
- File-system operations
- Security and protection
- Communication between software and hardware

The lecture describes the kernel as the core part of the OS responsible for managing resources, memory, and processes.

A simplified structure:

```text
┌──────────────────────────┐
│     Applications         │
├──────────────────────────┤
│       User Space         │
├──────────────────────────┤
│    System Call Interface │
├──────────────────────────┤
│       Kernel Space       │
│          Kernel          │
├──────────────────────────┤
│         Hardware         │
└──────────────────────────┘
```

---

### User Space vs. Kernel Space

#### User Space

**User space** is the area where normal application programs execute.

Examples:

- Web browsers
- Text editors
- Media players
- Games

Applications normally do not have unrestricted access to hardware or critical kernel memory.

#### Kernel Space

**Kernel space** is the protected environment where the operating system kernel performs privileged operations.

Examples:

- Process management
- Memory management
- Device management
- File-system operations
- Security operations

The lecture summarizes this distinction as user space being where applications run and kernel space being protected for system-level functions.

!["Week 1 Kernel space vs. User space"](<./images/week_1/Week 1 (kernelVsUserSpaces).jpg>)

---

### System Calls

A **system call** is a controlled interface through which an application requests a service from the operating system kernel.

For example:

```text
Application
     ↓
System Call
     ↓
Kernel
     ↓
Hardware / OS Service
     ↓
Result
     ↓
Application
```

Applications may use system calls for operations such as:

- Opening files
- Reading and writing data
- Creating processes
- Allocating memory
- Communicating with devices

The slide specifically describes system calls as the interface that allows programs to request OS services such as I/O operations and memory allocation.

> **Exam point:** A system call is **not simply a physical carrier**. It is a mechanism/interface that allows user-level software to request privileged OS services.

---

# Software Categories

## 1. System Software

**System software** manages hardware and provides a platform for application software.

### Examples

- Operating systems
- Device drivers
- Utility programs

### Functions

- Manages CPU, memory, and storage
- Controls hardware
- Provides services to applications
- Provides user interfaces

The lecture classifies operating systems, device drivers, and utility programs as major examples of system software.

---

## 2. Application Software

**Application software** is designed to perform specific tasks for users.

### Examples

- Microsoft Word
- Microsoft Excel
- Google Docs
- Adobe Photoshop
- VLC Media Player
- Google Chrome
- Video games

### Main Purpose

Application software solves **user-oriented problems**, such as:

- Writing documents
- Browsing the web
- Editing images
- Playing media
- Managing information
- Gaming

The lecture distinguishes application software from system software because applications focus primarily on user tasks.

---

## 3. Development Software

**Development software**, also called **development tools**, is used by programmers to create, test, debug, and maintain software.

### Examples

- Visual Studio
- Eclipse
- GCC
- Python Interpreter
- Code editors
- Debuggers
- Version-control tools

The lecture identifies IDEs, compilers, and interpreters as examples of development tools.

---

## 4. Middleware

**Middleware** is software that facilitates communication and integration between different applications, services, or systems.

It can act as a bridge between components that need to communicate.

### Examples

- Database middleware
- Application servers
- Messaging systems
- Some web-server technologies

### Main Purpose

Middleware can:

- Connect different applications
- Facilitate communication
- Integrate databases and applications
- Support distributed systems

The slide describes middleware as software that connects different software applications or services and facilitates integration.

---

## 5. Embedded Software

**Embedded software** is specialized software designed to operate inside an embedded system that performs dedicated functions.

### Examples

- Firmware in microcontrollers
- Software in washing machines
- Smart TVs
- Sensors
- IoT devices
- Wearable devices

### Characteristics

Embedded software is often:

- Closely integrated with hardware
- Resource-constrained
- Designed for a specific function
- Required to respond quickly
- Sometimes designed for real-time operation

The lecture describes embedded software as software designed for embedded systems, often with limited computing resources.

> **Important correction:** **Firmware and embedded software are related but not always identical terms.** Firmware is software stored in non-volatile memory and closely associated with hardware; embedded software is the broader category of software running in embedded systems.

---

## 6. Network Software

**Network software** enables, manages, or supports communication between computers and other devices over networks.

### Examples

- Network management tools
- Firewall software
- Network monitoring tools
- Software implementing network protocols

Examples from the lecture include:

- TCP/IP
- HTTP
- FTP
- DNS
- Wireshark
- SolarWinds
- pfSense

> **Technical note:** TCP/IP, HTTP, FTP, and DNS are primarily **network protocols**, not standalone software applications. Network software may implement or use these protocols.

---

## 7. Business Software

**Business software** is designed to help organizations manage business operations and processes.

### Examples

- ERP — Enterprise Resource Planning
- CRM — Customer Relationship Management
- Accounting software

Examples include:

- SAP
- Oracle ERP
- Salesforce
- HubSpot
- QuickBooks

### Uses

Business software can help manage:

- Finance
- Employees
- Customers
- Supply chains
- Business processes

---

# Utility Program

A **utility program** is a type of system software designed to maintain, optimize, secure, and manage a computer system.

Utilities generally perform **specific maintenance or management tasks** rather than serving as the primary platform for running applications.

The lecture identifies utilities as tools for performance optimization, file and disk management, security, backup/recovery, and networking.

### Functions of Utility Programs

#### 1. System Performance Optimization

Helps monitor or improve system performance.

Examples:

- Task Manager
- Disk Cleanup
- Disk Defragmenter

#### 2. File and Disk Management

Helps users organize, compress, back up, or manage files and storage.

Examples:

- File Explorer
- WinRAR
- Disk partitioning tools

#### 3. Security and Protection

Protects the system against security threats.

Examples:

- Antivirus software
- Firewalls
- Encryption tools

#### 4. Backup and Recovery

Helps create backups and recover data.

Examples:

- Windows Backup
- Backup and recovery software

#### 5. Networking and Communication

Helps monitor or manage network connections.

Examples:

- Wi-Fi analyzers
- Network monitoring tools

### Importance

Utility programs can:

- Improve system maintenance
- Enhance security
- Protect data
- Assist troubleshooting
- Manage files and storage

---

# Device Driver

A **device driver** is specialized software that enables the operating system to communicate with and control a hardware device.

It acts as an interface between the OS and hardware.

```text
Operating System
       ↓
  Device Driver
       ↓
     Hardware
```

### Example

When a printer is connected:

```text
Application
     ↓
Operating System
     ↓
Printer Driver
     ↓
Printer
```

The driver translates OS-level requests into instructions that the particular hardware device can understand.

The lecture gives printer drivers as an example and identifies hardware communication, command execution, error handling, resource management, and performance optimization as driver functions.

---

## Types of Device Drivers

### Kernel-Mode Drivers

Kernel-mode drivers operate with high privileges and can interact closely with the OS kernel and hardware.

**Advantages:**

- High performance
- Direct access to hardware resources

**Risk:**

- A faulty driver can potentially cause serious system instability or crashes.

Examples can include:

- Graphics drivers
- Network drivers
- Storage drivers

### User-Mode Drivers

User-mode drivers operate with fewer privileges than kernel-mode drivers and are isolated from critical kernel operations to a greater degree.

**Advantages:**

- Better isolation
- A failure is less likely to directly crash the entire kernel

**Trade-off:**

- Communication may involve additional overhead.

> **Important:** The exact classification of drivers depends on the operating system. Therefore, examples such as printer, USB, or audio drivers should not be memorized as universally "user-mode" drivers.

---

## Common Device Driver Categories

| Category           | Examples                            |
| ------------------ | ----------------------------------- |
| Display Drivers    | NVIDIA, AMD, Intel graphics drivers |
| Printer Drivers    | HP, Canon, Epson                    |
| Network Drivers    | Ethernet, Wi-Fi, Bluetooth          |
| Storage Drivers    | HDD, SSD, USB storage               |
| Audio Drivers      | Realtek, Sound Blaster              |
| Peripheral Drivers | Keyboard, mouse, scanner            |

The lecture lists these as common driver categories.

---

## Problems with Faulty or Outdated Drivers

Faulty or outdated drivers can cause:

- Hardware malfunction
- System crashes
- Performance problems
- Compatibility problems
- Security vulnerabilities

The lecture specifically mentions hardware malfunction, blue-screen crashes, performance problems, and security vulnerabilities.

---

# Common Mistakes

### 1. "There are only 8 operating systems."

❌ Incorrect.

There are many operating systems and OS families.

---

### 2. "Linux is one operating system with 100+ versions."

⚠️ Oversimplified.

Linux commonly refers to the **Linux kernel**, while distributions such as Ubuntu, Fedora, Debian, Arch Linux, and Linux Mint combine the kernel with other software.

---

### 3. "A process is a program stored in RAM."

❌ Not exactly.

A **process is a program in execution**. It has an execution context and resources allocated by the OS.

---

### 4. "The OS is the kernel."

❌ Not exactly.

The **kernel is the core component of an OS**, but a complete operating system can also include system libraries, utilities, services, user interfaces, and other components.

---

### 5. "System calls are just a carrier."

❌ Too simplistic.

A system call is a **controlled interface/mechanism for requesting OS services** from application software.

---

### 6. "Every driver is a kernel-mode driver."

❌ Incorrect.

Operating systems can use both kernel-mode and user-mode driver architectures.

---

### 7. "TCP/IP is software."

⚠️ Technically inaccurate.

TCP/IP is a **suite of networking protocols**. Network software implements and uses such protocols.

---

# Short Exam Notes

- **OS:** System software that manages hardware/resources and provides services to applications.
- **Main role:** Interface/intermediary between applications/users and hardware.
- **Kernel:** Core component of the operating system.
- **Process:** A program in execution.
- **Program:** Passive set of instructions; a process is its execution.
- **User space:** Environment where normal applications execute.
- **Kernel space:** Protected environment for privileged OS operations.
- **System call:** Interface used by applications to request OS services.
- **Process management:** Manages processes and CPU allocation.
- **Memory management:** Allocates and protects memory.
- **File management:** Organizes and manages stored data.
- **Device management:** Controls hardware devices.
- **Scheduling:** Determines which process receives CPU time.
- **System software:** Manages hardware and provides a platform for applications.
- **Application software:** Performs user-oriented tasks.
- **Development software:** Used to create and maintain software.
- **Middleware:** Connects and integrates software components.
- **Embedded software:** Software designed for dedicated embedded systems.
- **Network software:** Supports network communication and management.
- **Business software:** Supports organizational/business processes.
- **Utility program:** Maintains, optimizes, secures, or manages a computer.
- **Device driver:** Allows the OS to communicate with hardware.
