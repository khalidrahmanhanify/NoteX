---
title: Network Devices
description: All about network devices, switches, routers, bridges and so on.
lecture: Lecture 4
semester: semester-3
subject: advance-computer-networking
date: 2026-04-02
order: 13
---

# Network Devices

## Outline

- Network devices
- Hub operation
- Switch / Bridge operation
- Router operation
- Difference between Switch & Bridge
- Collision domain
- Broadcast domain

---

# Network Devices

- End-user devices include computers, printers, scanners, and other devices that provide services directly to the user.
- Hub, Switch, and Bridge are **network devices** — they connect nodes to form a network.
- Router is an **internetwork device** — it connects **different networks** together to form an **internetwork**.

✅ **Important**

- Same network → use **Switch**
- Different networks → use **Router**

---

# Hub

- Hub is a **Layer 1 device (Physical Layer)**
- It does **not understand MAC or IP address**
- Also called **dummy** or **non-intelligent** device
- Cannot filter data
- Sends data to **all ports (flooding)**

### Hub Environment is called

- Half duplex
- Shared bandwidth environment
- Ethernet network
- Collision domain
- IEEE 802.3 standard

---

# Hub Operation

- Only **one device can transmit at a time**
- If two devices transmit → **collision occurs**
- Both frames are discarded
- A **jam signal** is sent
- Devices retransmit after random time (**CSMA/CD**)

✅ **Added (Important for exam):**
Hub uses **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**

### Flooding

When hub receives a frame:

- It sends frame to **all ports**

⚠️ **Correction**
Your note said:

> except the port it is received on

✅ **Correct behavior of hub:**
Hub sends to **ALL ports including incoming port** (because it is just electrical repeat)

---

# Switch & Bridge

- Switch and Bridge are **Layer 2 devices (Data Link Layer)**
- They filter data using **MAC address**
- MAC address = Layer 2 address
- They understand **MAC only (not IP)**
- They maintain **MAC Address Table (CAM table)**

Command:

```
show mac address-table
```

---

# Switch & Bridge Environment

- Full duplex
- Dedicated bandwidth
- No collisions (in full duplex)
- Each device has dedicated link to switch

---

# Switch Operation

When switch receives a frame:

### Case A: MAC not in table

→ Switch **floods** frame

### Case B: MAC in table

→ Switch forwards to **specific port only**

---

# Important Switch Facts

- Switch is newer technology
- Mostly used today
- Each switch port = **one collision domain**
- All ports in same VLAN = **one broadcast domain**

---

# Switch Types

Your notes:

- Static Switch Manageable
- Dynamic Switch Not Manageable

⚠️ **Correction**
Correct classification:

### Managed Switch

- Configurable
- VLAN support
- Security features

### Unmanaged Switch

- Plug and play
- No configuration

---

# Switch vs Bridge

| Switch                | Bridge         |
| --------------------- | -------------- |
| New technology        | Old technology |
| Mostly used today     | Rarely used    |
| More ports            | Few ports      |
| Hardware based (ASIC) | Software based |
| Faster                | Slower         |

---

# Router

- Router is **Layer 3 (Network Layer) device**
- Filters data using **IP address**
- Connects different networks
- Uses **Routing table**
- Forwards packets between networks

When router receives packet:

- Reads destination IP
- Finds network in routing table
- Forwards packet

If network not found:

- Packet **discarded**
- OR sent to **default route** (if configured) ✅

---

# Router Important Facts

- Each router port = **separate network**
- Each router port = **separate broadcast domain**
- Router blocks broadcast by default
- Router performs routing between networks

---

# Main Functions of Router

- Packet switching
- Packet filtering
- Best path selection
- Internetwork communication
- Blocks broadcast

---

# Collision Domain

A collision domain is:

> A network segment where only **one device can transmit at a time**

### Rules

Hub → **1 collision domain** (all ports shared)
Switch → **Each port = 1 collision domain**
Router → **Each port = 1 collision domain**

---

# Broadcast Domain

Broadcast domain is:

> A network where broadcast reaches **all devices**

### Rules

Hub → 1 broadcast domain
Switch → 1 broadcast domain (default VLAN)
Router → **Each port = separate broadcast domain**

---

# Exam Shortcut Table

| Device | Layer   | Collision Domain | Broadcast Domain |
| ------ | ------- | ---------------- | ---------------- |
| Hub    | Layer 1 | One              | One              |
| Switch | Layer 2 | Per Port         | One              |
| Bridge | Layer 2 | Per Port         | One              |
| Router | Layer 3 | Per Port         | Per Port         |

---

# Very Important Exam Notes

- Hub = broadcast everything
- Switch = forward using MAC
- Router = forward using IP
- Switch breaks collision domain
- Router breaks broadcast domain
- Hub = half duplex
- Switch = full duplex
- Router = connects networks
