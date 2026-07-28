---
title: Spanning Tree Protocol (STP)
description: Learn ARP, switch functions, STP operation, terminology, port roles, and verification commands.
lecture: Lecture 10
semester: semester-3
subject: advance-computer-networking
date: 2026-06-18
order: 7
---

---

# Spanning Tree Protocol (STP)

## Definition

**Spanning Tree Protocol (STP)** is a Layer 2 protocol used by switches to prevent **network loops** while allowing redundant links for reliability.

STP creates a loop-free logical topology by blocking unnecessary switch ports and automatically enabling them when an active link fails.

---

# ARP (Address Resolution Protocol)

## Definition

**ARP (Address Resolution Protocol)** is used to find the **MAC address** of a device when its **IP address** is known.

ARP works between Layer 2 (MAC address) and Layer 3 (IP address).

---

## Key Points

- ARP maps:

```text
IP Address → MAC Address
```

- ARP Request:
  - Sent as a broadcast.
  - Asks: "Who owns this IP address?"

- ARP Reply:
  - Sent as a unicast.
  - Contains the MAC address of the requested device.

- ARP table stores learned IP-to-MAC mappings.

---

## Example

Command:

```bash
arp -a
```

Displays the ARP table of a device.

Example output:

```text
192.168.1.10    00-1A-2B-3C-4D-5E
```

Meaning:

- IP Address: `192.168.1.10`
- MAC Address: `00-1A-2B-3C-4D-5E`

---

# Switch Functions

## Definition

A switch performs several important functions to deliver frames efficiently in a network.

The main switch functions are:

1. Address Learning
2. Forward Decision
3. Loop Avoidance

---

# 1. Address Learning

## Definition

**Address learning** is the process where a switch learns the source MAC address of incoming frames and stores it in the MAC Address Table.

---

## Process

When a switch receives a frame, it records:

- Source MAC Address
- Incoming Port Number
- VLAN ID

Example:

| MAC Address       | Port  | VLAN |
| ----------------- | ----- | ---- |
| AA:BB:CC:DD:EE:01 | Fa0/1 | 1    |

---

# 2. Forward Decision

## Definition

A switch checks the destination MAC address in its MAC Address Table to decide where to send a frame.

---

## Cases

### Destination MAC Exists

The switch sends the frame only to the specific port.

Example:

```text
PC A → Switch → PC B
```

The switch forwards the frame directly to PC B.

---

### Destination MAC Does Not Exist

The switch floods the frame.

**Flooding means:**

- Sending the frame out of all ports.
- Except the port where the frame was received.

---

# MAC Address Table

## Definition

The **MAC Address Table** stores learned MAC addresses and their associated switch ports.

---

## Key Points

- Default aging time:

```text
300 seconds
```

- After the aging time expires, unused MAC entries are removed.

---

## Commands

View MAC Address Table:

```bash
show mac address-table
```

View aging time:

```bash
show mac address-table aging-time
```

View static entries:

```bash
show mac address-table static
```

View number of MAC entries:

```bash
show mac address-table count
```

View MAC addresses on an interface:

```bash
show mac address-table interface ethernet 0/0
```

View dynamic entries:

```bash
show mac address-table dynamic
```

Clear MAC Address Table:

```bash
clear mac address-table
```

---

# 3. Loop Avoidance

## Definition

Switches use **STP (Spanning Tree Protocol)** to prevent Layer 2 loops when redundant links exist.

---

## Problem: Layer 2 Loop

A loop occurs when multiple paths exist between switches.

Without STP:

- Broadcast frames continue circulating.
- Network traffic increases.
- Broadcast storms may occur.
- MAC tables become unstable.

---

# Spanning Tree Protocol (STP)

## Definition

STP is a Layer 2 protocol that prevents switching loops by blocking redundant ports while keeping backup links available.

---

## Key Points

- Standard:

```text
IEEE 802.1D
```

- Works at:

```text
Layer 2 (Data Link Layer)
```

- Enabled by default on Cisco switches.
- Allows redundant links.
- Blocks unnecessary ports.
- Automatically activates blocked ports when failures occur.

---

# STP Operation

STP performs these steps:

1. Elects a Root Bridge.
2. Selects Root Ports.
3. Selects Designated Ports.
4. Blocks remaining ports.

---

# STP Terminology

## Root Bridge

## Definition

The **Root Bridge** is the central switch in the STP topology.

It makes decisions about which ports should forward and which ports should block.

---

## Root Bridge Election

The switch with the lowest **Bridge ID (BID)** becomes the Root Bridge.

---

## Bridge ID Contains

Bridge ID consists of:

1. Bridge Priority
2. System ID Extension
3. MAC Address

---

## Bridge Priority

Default value:

```text
32768
```

Range:

```text
0 - 61440
```

Increment:

```text
4096
```

---

## Configure Switch Priority

```bash
SW(config)# spanning-tree vlan 1 priority 4096
```

The priority must be a multiple of 4096.

---

## Tie Breaking

If multiple switches have the same priority:

1. Lowest MAC address wins.

---

# Root Port

## Definition

A **Root Port** is the port on a non-root switch that has the lowest-cost path toward the Root Bridge.

---

## Root Port Selection

Selection order:

1. Lowest Path Cost
2. Lowest Upstream Bridge ID
3. Lowest Port ID

---

## STP Port Costs

| Link Speed                   | Cost |
| ---------------------------- | ---: |
| Ethernet (10 Mbps)           |  100 |
| Fast Ethernet (100 Mbps)     |   19 |
| Gigabit Ethernet (1000 Mbps) |    4 |
| 10 Gigabit Ethernet          |    2 |

---

# Designated Port

## Definition

A **Designated Port** is a forwarding port that connects a switch to downstream devices.

---

## Characteristics

- Always in forwarding state.
- Selected based on:

1. Lowest Cost
2. Lowest Bridge ID
3. Lowest Port ID

---

# Non-Designated / Alternate Port

## Definition

Ports that are placed into blocking state to prevent Layer 2 loops.

---

## Characteristics

- Located on non-root switches.
- Receives BPDU frames.
- Does not forward normal traffic.
- Becomes active if the forwarding path fails.

---

# BPDU (Bridge Protocol Data Unit)

## Definition

BPDU is a control frame exchanged between switches to exchange STP information.

---

## Key Points

Switches use BPDUs to advertise:

- Bridge priority
- MAC address
- STP information

Default transmission:

```text
Every 2 seconds
```

---

# STP Port States

STP uses different port states during operation.

---

# 1. Disabled

## Definition

The port is administratively disabled or not operational.

Characteristics:

- Does not send BPDU.
- Does not forward traffic.

---

# 2. Blocking

## Definition

The port prevents loops by blocking normal data traffic.

Characteristics:

- Receives BPDU.
- Does not send user data.
- Can become forwarding if another path fails.

---

# 3. Listening

## Definition

The port participates in STP calculations.

Characteristics:

- Sends and receives BPDU.
- Does not send user data.

---

# 4. Learning

## Definition

The switch begins learning MAC addresses.

Characteristics:

- Sends and receives BPDU.
- Learns MAC addresses.
- Does not forward user traffic yet.

---

# 5. Forwarding

## Definition

The port is fully operational.

Characteristics:

- Sends and receives BPDU.
- Learns MAC addresses.
- Sends and receives data frames.

---

# Cisco Switch Management Notes

## Switch Boot Process

The boot process of a switch is similar to a router.

Steps:

1. **POST executes**
2. IOS loads from Flash Memory into RAM
3. Startup configuration loads from NVRAM into RAM

---

## Switch Access Methods

A switch can be accessed using:

- Console
- Telnet
- SSH

---

## Cisco Switch Modes

### User EXEC Mode

Prompt:

```text
Switch>
```

Used for basic monitoring.

---

### Privileged EXEC Mode

Prompt:

```text
Switch#
```

Used for viewing and changing configurations.

---

### Global Configuration Mode

Prompt:

```text
Switch(config)#
```

Used for device configuration.

---

# STP Verification Commands

## Show STP Information

```bash
show spanning-tree
```

Displays complete STP information.

---

## Show Root Bridge

```bash
show spanning-tree root
```

Displays Root Bridge information.

---

## Show Interface STP Details

```bash
show spanning-tree interface ethernet 0/0 detail
```

Displays detailed STP information for an interface.

---

# Common Mistakes

- Confusing ARP with DNS:
  - ARP resolves IP addresses to MAC addresses.
  - DNS resolves domain names to IP addresses.

- Forgetting that ARP Reply is unicast.
- Assuming switches automatically prevent loops without STP.
- Confusing Root Port and Designated Port.
- Choosing the highest Bridge ID as Root Bridge; STP chooses the **lowest** Bridge ID.
- Forgetting that blocked ports still receive BPDU frames.
- Assuming STP removes redundant links permanently; it only blocks them temporarily.

---

# Short Exam Notes

- **ARP:** Finds MAC address using an IP address.
- **Switch Learning:** Learns source MAC addresses and stores them in the MAC table.
- **STP:** Prevents Layer 2 loops.
- **STP Standard:** IEEE 802.1D.
- **Root Bridge:** Switch with the lowest Bridge ID.
- **Bridge ID:** Priority + System ID Extension + MAC Address.
- **Default Bridge Priority:** 32768.
- **Root Port:** Lowest-cost path toward Root Bridge.
- **Designated Port:** Forwarding port toward downstream devices.
- **Alternate Port:** Blocking port used to prevent loops.
- **BPDU:** STP control message exchanged every 2 seconds.
- **Port States:**
  - Disabled
  - Blocking
  - Listening
  - Learning
  - Forwarding

- **Verification:**
  - `show spanning-tree`
  - `show spanning-tree root`
