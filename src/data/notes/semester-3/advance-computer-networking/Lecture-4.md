---
title: Network Devices and Their Operations
description: Learn the functions of hubs, switches, bridges, routers, and understand collision and broadcast domains.
lecture: Lecture 4
semester: semester-3
subject: advance-computer-networking
date: 2026-04-02
order: 13
---

# Network Devices and Their Operations

## Definition

**Network devices** are hardware components used to connect computers and other devices, enabling communication and data transfer within a network or between different networks.

---

## Key Points

### Types of Network Devices

Network devices are generally classified into two categories:

| Category               | Purpose                        | Examples                                       |
| ---------------------- | ------------------------------ | ---------------------------------------------- |
| **End-User Devices**   | Devices used directly by users | Computer, Laptop, Printer, Scanner, Smartphone |
| **Networking Devices** | Connect devices or networks    | Hub, Switch, Bridge, Router                    |

### Device Roles

- **Hub, Switch, and Bridge** connect devices within the **same network (LAN)**.
- **Router** connects **different networks**, creating an **internetwork**.

---

# End-User Devices

## Definition

End-user devices are devices that users interact with directly to access network resources and services.

### Examples

- Desktop computer
- Laptop
- Printer
- Scanner
- Smartphone
- Tablet

---

# Hub

## Definition

A **Hub** is a **Layer 1 (Physical Layer)** networking device that simply repeats incoming signals to all other connected ports.

It does **not** understand MAC addresses or IP addresses.

---

## Characteristics

- Operates at **OSI Layer 1**
- Called a **dummy** or **non-intelligent** device
- Cannot filter traffic
- Broadcasts (floods) all incoming data to every port
- Uses **shared bandwidth**
- Supports **half-duplex** communication
- Based on **IEEE 802.3 Ethernet**

---

## Hub Environment

A hub network is also known as:

- Half-duplex environment
- Shared bandwidth environment
- Ethernet network
- Collision domain

---

## How a Hub Works

When a hub receives a frame:

1. It does **not** inspect the destination.
2. It copies the frame to **every port except the incoming port**.
3. Every connected device receives the frame.
4. Only the intended device processes it; all others discard it.

```text
Computer A
     │
Computer B ─── Hub ─── Computer C
     │
Computer D

Message from A
      ↓
Hub floods to B, C, and D
```

---

## Collisions in a Hub

Since all devices share the same communication medium:

- Only **one device** can transmit at a time.
- If two devices transmit simultaneously:
  - A **collision** occurs.
  - Both frames are discarded.
  - A **jam signal** is sent.
  - Devices wait for a random period before retransmitting (CSMA/CD).

---

## Advantages

- Very inexpensive
- Easy to install
- No configuration required

---

## Disadvantages

- High collision rate
- Low performance
- Shared bandwidth
- Poor security
- Rarely used in modern networks

---

# Switch

## Definition

A **Switch** is a **Layer 2 (Data Link Layer)** device that forwards frames based on **MAC addresses**.

---

## Characteristics

- Operates at **OSI Layer 2**
- Understands **MAC addresses**
- Does **not** make forwarding decisions based on IP addresses
- Maintains a **MAC Address Table (CAM Table)**
- Supports **full-duplex** communication
- Provides **dedicated bandwidth** to each connected device

---

## MAC Address Table

A switch learns the MAC addresses of connected devices and stores them in a table.

View the table:

```bash
Switch# show mac address-table
```

---

## Switch Operation

### Case 1 – Destination MAC Found

1. Reads the destination MAC address.
2. Looks it up in the MAC table.
3. Sends the frame **only to the correct port**.

---

### Case 2 – Destination MAC Unknown

If the MAC address is not found:

- The switch **floods** the frame to all ports except the incoming port.
- Once the destination replies, the switch learns its MAC address.

---

## Example

```text
      Switch
   ┌────┼────┐
 PC1   PC2  PC3

PC1 sends data to PC2
        ↓
Switch forwards only to PC2
```

---

## Advantages

- Faster than hubs
- Dedicated bandwidth
- Full-duplex communication
- Fewer collisions
- Better security
- Efficient traffic forwarding

---

# Bridge

## Definition

A **Bridge** is also a **Layer 2** device that connects two LAN segments and filters traffic using MAC addresses.

It performs functions similar to a switch but supports fewer ports.

---

## Characteristics

- Operates at Layer 2
- Uses MAC addresses
- Connects LAN segments
- Reduces unnecessary traffic
- Largely replaced by switches

---

# Switch vs Bridge

| Feature         | Switch                         | Bridge                               |
| --------------- | ------------------------------ | ------------------------------------ |
| Technology      | Newer                          | Older                                |
| Usage           | Common today                   | Rarely used                          |
| Number of Ports | Many                           | Usually 2–4                          |
| Performance     | Faster                         | Slower                               |
| Hardware        | ASIC-based hardware forwarding | Originally software-based processing |
| Scalability     | High                           | Limited                              |

---

# Switch Broadcast and Collision Domains

## Collision Domain

Each switch port creates a **separate collision domain**.

Example:

```text
      Switch
    /   |   \
  PC1  PC2  PC3

Collision Domains = 3
```

---

## Broadcast Domain

By default, all switch ports belong to **one broadcast domain** (unless VLANs are configured).

If one device sends a broadcast frame:

- Every device connected to the switch receives it.

---

# Router

## Definition

A **Router** is a **Layer 3 (Network Layer)** device that forwards packets using **IP addresses**.

Routers connect different networks and enable communication between them.

---

## Characteristics

- Operates at **OSI Layer 3**
- Understands both:
  - IP addresses
  - MAC addresses

- Connects different networks
- Maintains a **routing table**
- Blocks broadcast traffic by default

---

## Routing Table

A routing table contains information about reachable networks.

When a router receives a packet:

### If the destination network exists:

- The router forwards the packet to the correct interface.

### If the destination network does not exist:

- The router drops the packet.

---

## Router Operation

```text
Network A
     │
   Router
     │
Network B
```

The router:

1. Reads the destination IP address.
2. Searches the routing table.
3. Forwards the packet through the correct interface.

---

## Router Interfaces

Each router interface:

- Connects to a different network.
- Requires an IP address from that network.
- Creates a separate broadcast domain.

Example:

```text
LAN 1
192.168.1.0/24
      │
Interface G0/0
      │
    Router
      │
Interface G0/1
      │
LAN 2
10.0.0.0/24
```

---

## Why Routers Block Broadcasts

Routers do **not** forward broadcast traffic by default.

If routers forwarded broadcasts:

- Broadcast traffic could spread across the Internet.
- Networks would become congested.
- Overall performance would degrade significantly.

Blocking broadcasts improves scalability and network efficiency.

---

# Main Functions of a Router

- Packet forwarding (switching)
- Packet filtering
- Best path selection
- Communication between different networks
- Blocking broadcast traffic by default

---

# Collision Domain

## Definition

A **Collision Domain** is a network segment where only **one device can successfully transmit at a time**.

If two devices transmit simultaneously, a collision occurs.

---

## Rules

### Hub

- Entire hub = **1 collision domain**

### Switch

- Each active switch port = **1 collision domain**

### Router

- Each router interface also forms its own collision domain because it separates network segments.

---

## Example

```text
PC1
   \
PC2 -- Hub -- PC3

Collision Domains = 1
```

---

```text
PC1
   \
    Switch
   /   \
 PC2   PC3

Collision Domains = 3
```

---

# Broadcast Domain

## Definition

A **Broadcast Domain** is a network segment where a broadcast frame sent by one device is received by all other devices in that segment.

---

## Rules

### Hub

- Entire hub = **1 broadcast domain**

### Switch

- Entire switch = **1 broadcast domain** (without VLANs)

### Router

- Each router interface creates a **separate broadcast domain**.

---

## Example

```text
LAN A
   │
Router
   │
LAN B
```

Broadcast Domains = **2**

---

# Hub vs Switch vs Router

| Feature           | Hub         | Switch       | Router            |
| ----------------- | ----------- | ------------ | ----------------- |
| OSI Layer         | Layer 1     | Layer 2      | Layer 3           |
| Uses Address      | None        | MAC Address  | IP Address        |
| Filters Traffic   | ❌ No       | ✅ Yes       | ✅ Yes            |
| Connects          | Devices     | Devices      | Networks          |
| Collision Domains | 1           | One per port | One per interface |
| Broadcast Domains | 1           | 1 (default)  | One per interface |
| Duplex Mode       | Half Duplex | Full Duplex  | Full Duplex       |
| Performance       | Low         | High         | High              |
| Common Today      | Rarely      | Very Common  | Essential         |

---

## Example / Code

### View the MAC Address Table

```bash
Switch# show mac address-table
```

**Explanation**

- Displays all learned MAC addresses.
- Shows which switch port each MAC address is associated with.
- Helps verify switching and troubleshoot connectivity.

---

## Explanation

### Data Flow Through a Hub

1. A device sends a frame.
2. The hub repeats it to every port.
3. Every connected device receives it.
4. Only the intended recipient processes the frame.

---

### Data Flow Through a Switch

1. The switch reads the destination MAC address.
2. It checks the MAC address table.
3. If found, it forwards the frame only to the correct port.
4. If not found, it floods the frame and learns the MAC address for future use.

---

### Data Flow Through a Router

1. The router receives a packet.
2. It examines the destination IP address.
3. It checks the routing table.
4. It forwards the packet to the appropriate network or discards it if no route exists.

---

## Common Mistakes

- Confusing a **hub** with a **switch**.
- Thinking a switch forwards frames using IP addresses (it uses **MAC addresses**).
- Assuming routers forward broadcast traffic by default.
- Believing a hub provides dedicated bandwidth.
- Confusing **collision domains** with **broadcast domains**.
- Forgetting that each switch port is a separate collision domain.
- Assuming all router interfaces belong to the same network; each interface typically connects to a different network.

---

## Short Exam Notes

- **Hub:** Layer 1, no address awareness, floods all traffic, half-duplex.
- **Switch:** Layer 2, forwards using MAC addresses, maintains a MAC address table, full-duplex.
- **Bridge:** Layer 2 device that connects LAN segments; predecessor to the switch.
- **Router:** Layer 3, forwards packets using IP addresses, connects different networks, blocks broadcasts.
- **MAC Address Table:** Stores learned MAC addresses and associated switch ports.
- **Routing Table:** Stores reachable networks and next-hop information.
- **Collision Domain:** One hub = one collision domain; each switch port = one collision domain.
- **Broadcast Domain:** One switch (without VLANs) = one broadcast domain; each router interface = one broadcast domain.
- **OSI Layers:** Hub → Layer 1, Switch/Bridge → Layer 2, Router → Layer 3.
