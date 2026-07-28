---
title: EtherChannel
description: Learn EtherChannel concepts, protocols, advantages, configuration modes, and load distribution methods.
lecture: Lecture 13
semester: semester-3
subject: advance-computer-networking
date: 2026-07-09
order: 4
---

---

# EtherChannel

## Definition

**EtherChannel** is a networking technology that combines multiple physical Ethernet links into a single logical link called a **Port Channel**.

It provides increased bandwidth, fault tolerance, and load sharing by grouping multiple links between network devices.

---

## Key Points

- EtherChannel combines multiple physical links into one logical connection.
- It is also known as:
  - **Port Channel**
  - **Channeling**
  - **Link Aggregation (LAG)**
  - **NIC Teaming**

- EtherChannel can be used between:
  - Switch to Switch
  - Server to Switch
  - Switch to Router
  - Router to Router (Layer 3 EtherChannel)

- EtherChannel hides individual physical links from upper-layer protocols.
- STP views an EtherChannel as a single logical link.

---

# EtherChannel Objectives

## Increased Bandwidth

- Multiple links are combined to increase available bandwidth.

Example:

```text
2 × 1Gbps links = 1 Logical EtherChannel
```

---

## Increased Availability

- If one physical link fails, the remaining links continue working.
- The EtherChannel remains operational as long as one member link is active.

---

## Load Sharing

- Traffic can be distributed across multiple physical links.
- Different traffic flows may use different member links.

---

## Auto Configuration

- Configuration applied to the EtherChannel interface is automatically applied to member interfaces.

---

## Rapid Convergence

- EtherChannel provides faster recovery when links fail.

---

## Cost Efficiency

- Multiple lower-speed links can replace an expensive high-speed link.

Example:

```text
4 × 10Gbps links may cost less than 1 × 40Gbps link
```

---

## Flexible Operation

EtherChannel can operate as:

- Access channel
- Trunk channel
- Layer 3 routed channel

---

# EtherChannel Protocols

EtherChannel can be formed using dynamic negotiation protocols:

1. **PAgP**
2. **LACP**

---

# PAgP (Port Aggregation Protocol)

## Definition

**PAgP** is a Cisco proprietary protocol used to automatically create EtherChannels.

## Characteristics

- Cisco proprietary.
- Supports half-duplex and full-duplex devices.
- Supports maximum of 8 ports per EtherChannel.
- Provides misconfiguration detection.
- Modes:
  - Auto
  - Desirable

---

# LACP (Link Aggregation Control Protocol)

## Definition

**LACP** is an IEEE standard protocol used to create EtherChannels.

Standard:

```text
IEEE 802.3ad
```

## Characteristics

- Open standard.
- Supports only full-duplex devices.
- Supports up to 16 ports:
  - 8 active ports
  - 8 standby ports

- Provides misconfiguration protection.
- Supports standby links.
- Modes:
  - Active
  - Passive

---

# EtherChannel Protocol Modes

## PAgP Modes

| Mode      | Description                               |
| --------- | ----------------------------------------- |
| Desirable | Actively sends PAgP negotiation messages. |
| Auto      | Passively waits for PAgP messages.        |

---

## LACP Modes

| Mode    | Description                          |
| ------- | ------------------------------------ |
| Active  | Actively starts LACP negotiation.    |
| Passive | Waits for LACP negotiation messages. |

---

# EtherChannel Formation Rules

| Protocol | Switch 1  | Switch 2  | Result             |
| -------- | --------- | --------- | ------------------ |
| ON       | ON        | ON        | Forms EtherChannel |
| PAgP     | Desirable | Desirable | Forms EtherChannel |
| PAgP     | Desirable | Auto      | Forms EtherChannel |
| PAgP     | Auto      | Auto      | No EtherChannel    |
| LACP     | Active    | Active    | Forms EtherChannel |
| LACP     | Active    | Passive   | Forms EtherChannel |
| LACP     | Passive   | Passive   | No EtherChannel    |

---

## Important Note

PAgP, LACP, and ON modes are **not compatible** with each other.

Examples:

```text
PAgP + LACP = No EtherChannel

PAgP + ON = No EtherChannel

LACP + ON = No EtherChannel
```

---

# EtherChannel Components

EtherChannel contains two main parts:

| Component              | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| Port-Channel Interface | Logical interface representing the bundled links.    |
| Member Interfaces      | Physical interfaces that belong to the EtherChannel. |

---

# STP and EtherChannel

Without EtherChannel:

```text
Switch
 |
 |---- Link 1
 |
 |---- Link 2
```

STP may block one link to prevent loops.

With EtherChannel:

```text
Switch
 |
 |==== EtherChannel ====
 |
```

STP sees it as one logical link.

Advantages:

- All member links can forward traffic.
- STP does not block individual links.
- Provides redundancy and bandwidth improvement.

---

# Advantages and Disadvantages

## Advantages

- Low-cost bandwidth upgrade.
- Provides Layer 2 redundancy.
- Uses existing network infrastructure.
- Improves link availability.
- Allows multiple links to operate together.

---

## Disadvantages

### Individual Link Limitation

EtherChannel does not create a single high-speed pipe.

Example:

```text
2 × 1Gbps EtherChannel
```

Does not mean:

```text
One 2Gbps connection
```

It means:

```text
Two separate 1Gbps links sharing traffic
```

---

### Traffic Polarization

- A single traffic flow may use only one member link.
- EtherChannel provides **load distribution**, not true load balancing.

---

# EtherChannel Port Selection

When more than 8 ports are configured:

- The switch with the lowest system ID becomes the decision maker.
- System ID consists of:

```text
System Priority + Switch MAC Address
```

Example:

```text
SW1:
32768 + MAC Address

SW2:
100 + MAC Address
```

SW2 becomes the decision maker because it has the lower ID.

The selected switch chooses active ports based on:

1. Lowest port priority.
2. Lowest port number.

Remaining ports become standby ports.

---

# Layer 2 EtherChannel

## Definition

Layer 2 EtherChannel operates at the Data Link Layer.

Features:

- Uses switch ports.
- Can operate as access or trunk.
- Provides redundancy between switches.

Limitation:

- Flooded traffic may reach connected devices and increase CPU usage.

---

# Layer 3 EtherChannel

## Definition

Layer 3 EtherChannel is a routed EtherChannel where the logical channel operates as a Layer 3 interface.

Used for:

- Router-to-router connections.
- Layer 3 switch routing links.

Advantages:

- Supports routing protocols.
- Provides redundancy between routers.

---

# EtherChannel Load Distribution

EtherChannel uses hashing algorithms to decide which physical link carries traffic.

Traffic can be distributed based on:

- Source MAC address
- Destination MAC address
- Source and destination MAC addresses
- Source IP address
- Destination IP address
- Source and destination IP addresses

Important:

- EtherChannel distributes traffic per flow.
- A single flow normally stays on one physical link.

---

# Common Mistakes

- Mixing PAgP and LACP protocols.
- Configuring different EtherChannel modes on both sides.
- Assuming EtherChannel creates one high-speed link.
- Forgetting that member interfaces must have matching configurations.
- Using different trunk/access settings on member ports.
- Expecting perfect traffic distribution between all links.
- Ignoring the maximum active port limit.

---

# Short Exam Notes

- **EtherChannel:** Combines multiple physical links into one logical link.
- Also called:
  - Port Channel
  - LAG
  - Link Aggregation

- Protocols:
  - **PAgP:** Cisco proprietary.
  - **LACP:** IEEE 802.3ad standard.

- PAgP modes:
  - Auto
  - Desirable

- LACP modes:
  - Active
  - Passive

- Maximum ports:
  - PAgP: 8 ports.
  - LACP: 16 ports (8 active + 8 standby).

- STP views EtherChannel as one logical link.
- EtherChannel provides:
  - Increased bandwidth
  - Redundancy
  - Load sharing

- It provides load distribution, not true load balancing.
