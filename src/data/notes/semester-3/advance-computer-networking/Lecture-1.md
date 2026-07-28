---
title: Network Fundamentals
description: Learn networking basics, internetworking concepts, network benefits, and common network models.
lecture: Lecture 1
semester: semester-3
subject: advance-computer-networking
date: 2026-03-12
order: 16
---

# Network Fundamentals

## Definition

A **computer network** is a collection of interconnected devices (called **nodes**) that communicate with each other to share resources, exchange data, and access services.

An **internetwork (Internetworking)** is the connection of two or more separate networks using routers, allowing devices on different networks to communicate.

---

## Key Points

### What is a Network?

- A **network** is a group of devices connected through communication links.
- Each connected device is called a **node**.
- Examples of nodes:
  - Computer
  - Laptop
  - Printer
  - Switch
  - Router
  - Server

- Networks use **hardware devices** and **software protocols** to enable communication.
- The primary purpose of a network is **resource sharing**.

### Resources Shared Over a Network

- Files and folders
- Internet connection
- Printers
- Applications
- Storage
- Other computing resources

---

## Internetwork

An **internetwork** is formed by connecting multiple independent networks together.

### Devices Used

| Device     | Purpose                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------- |
| **Hub**    | Connects multiple devices in a simple network. Broadcasts data to all connected devices. |
| **Bridge** | Connects two similar LAN segments and filters traffic.                                   |
| **Switch** | Connects devices efficiently by forwarding data only to the intended device.             |
| **Router** | Connects different networks and routes data between them. Used to build an internetwork. |

> **Important:**
>
> - **Switches** create or extend a Local Area Network (LAN).
> - **Routers** connect different networks together.

---

## Benefits of Networks

### 1. Resource Sharing

- Multiple users can share:
  - Printers
  - Files
  - Internet connection
  - Storage devices

- Reduces hardware costs.

---

### 2. Communication

Networks make communication easier through:

- Email
- Instant messaging
- Voice calls (VoIP)
- Video conferencing
- File sharing

---

### 3. Centralized Data Management

- Data can be stored on a **server**.
- Easier to:
  - Manage files
  - Perform backups
  - Control user access
  - Maintain consistency

---

### 4. Scalability

Networks can grow easily by adding:

- New users
- Computers
- Printers
- Servers

without major infrastructure changes.

---

### 5. Cost Efficiency

Sharing resources reduces the need for:

- Multiple printers
- Extra storage devices
- Duplicate software licenses

This lowers maintenance and equipment costs.

---

### 6. Security

Centralized security allows administrators to implement:

- Firewalls
- User authentication
- Encryption
- Access control
- Antivirus protection

---

### 7. Remote Access

Authorized users can securely access:

- Files
- Applications
- Company systems

from remote locations.

---

### 8. Reliability

If one network component fails, redundant paths or backup systems can keep services available.

---

### 9. Backup and Recovery

Network servers often perform:

- Automatic backups
- Data recovery
- Disaster recovery

This minimizes data loss.

---

# Types of Networks

## 1. Peer-to-Peer (P2P) Network

### Definition

A **Peer-to-Peer (P2P)** network is a network in which every computer acts as both a **client** and a **server**.

Each computer decides whether to share its own resources.

This model is commonly used in:

- Homes
- Small offices
- Small classrooms

---

## Advantages

- Easy to install and configure
- Low cost
- No dedicated server required
- No network administrator needed
- Each user controls their own shared resources
- Works well for small networks

---

## Disadvantages

- Weak security because permissions are managed individually.
- Users may need multiple passwords for different shared resources.
- Every computer must maintain its own backup.
- No centralized management of files and users.
- Performance becomes poor when there are **more than 10 computers**.

---

## Example

```
Computer A  ↔  Computer B
      ↕             ↕
Computer C  ↔  Computer D
```

Every computer can both request and provide resources.

---

## 2. Client-Server (Domain-Based) Network

### Definition

A **Client-Server** network contains one or more dedicated **servers** that provide services to multiple **client** computers.

The server manages:

- User accounts
- Security
- File storage
- Applications
- Network resources

Clients depend on the server for authentication and access.

---

## Advantages

- Centralized user management
- Better security
- Easier administration
- Efficient resource sharing
- Single login gives access to multiple resources
- Suitable for medium and large organizations

---

## Disadvantages

- If the server fails, many network services become unavailable.
- Requires dedicated server hardware.
- Needs specialized server software.
- Requires skilled administrators.
- Higher installation and maintenance costs.

---

## Example

```
          Server
        /    |    \
      PC1   PC2   PC3
```

The server controls access and provides services to all client computers.

---

## Comparison: Peer-to-Peer vs Client-Server

| Feature        | Peer-to-Peer            | Client-Server                    |
| -------------- | ----------------------- | -------------------------------- |
| Server         | No dedicated server     | Dedicated server                 |
| Cost           | Low                     | High                             |
| Security       | Basic                   | Strong                           |
| Administration | Individual users        | Centralized administrator        |
| Scalability    | Small networks          | Medium to large networks         |
| Backup         | Individual computers    | Centralized server               |
| Performance    | Good for small networks | Better for large networks        |
| Reliability    | Lower                   | Higher (unless the server fails) |

---

## Example / Code

No programming code is included in this lecture.

### Real-Life Example

**Peer-to-Peer**

A home network where family members share files directly between their laptops without a dedicated server.

**Client-Server**

A university network where students log in using university accounts to access shared files, printers, and internet services managed by a central server.

---

## Explanation

### How a Network Works

1. Devices are connected using cables or wireless communication.
2. Communication protocols (such as TCP/IP) define how data is exchanged.
3. Devices send and receive data through communication links.
4. Shared resources become available to authorized users.

### How an Internetwork Works

1. Multiple independent networks exist.
2. Routers connect these networks.
3. Data packets are routed from one network to another.
4. Users on different networks can communicate seamlessly.

### Choosing the Right Network Type

| Situation     | Recommended Network |
| ------------- | ------------------- |
| Home          | Peer-to-Peer        |
| Small Office  | Peer-to-Peer        |
| School        | Client-Server       |
| University    | Client-Server       |
| Bank          | Client-Server       |
| Large Company | Client-Server       |

---

## Common Mistakes

- Confusing a **network** with an **internetwork**.
- Assuming a **switch** can connect different networks like a router.
- Believing every network requires a dedicated server.
- Thinking Peer-to-Peer networks are suitable for large organizations.
- Ignoring the importance of centralized backup and security in Client-Server networks.
- Confusing **clients** (request services) with **servers** (provide services).

---

## Short Exam Notes

- **Network:** A group of interconnected devices that share resources and exchange data.
- **Node:** Any device connected to a network (computer, printer, router, switch, etc.).
- **Internetwork:** Two or more networks connected using **routers**.
- **Switch:** Connects devices within the same network.
- **Router:** Connects different networks.
- **Main purpose of networking:** Resource sharing and communication.
- **Peer-to-Peer:** No dedicated server; each computer acts as both client and server; best for small networks.
- **Client-Server:** Dedicated server manages clients; provides centralized security and administration.
- **Major network benefits:** Resource sharing, communication, centralized management, scalability, cost efficiency, security, remote access, reliability, and backup/recovery.
- **Exam Tip:** Be able to compare **Peer-to-Peer** and **Client-Server** networks based on cost, security, scalability, administration, and reliability.
