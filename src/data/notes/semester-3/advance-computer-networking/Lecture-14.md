---
title: EtherChannel
description: Understand EtherChannel concepts, protocols, modes, advantages, and load distribution techniques.
lecture: Lecture 14
semester: semester-3
subject: advance-computer-networking
date: 2026-07-16
order: 3
---

---

# EtherChannel

## Definition

**EtherChannel** is a networking technology that combines multiple physical Ethernet links into a single logical link to provide **increased bandwidth, load sharing, and fault tolerance**.

It allows multiple connections to operate together as one virtual interface.

---

## Key Points

- EtherChannel combines multiple physical links into one logical connection.
- It is also called:
  - **Port Channel**
  - **Channeling**
  - **Link Aggregation (LAG)**
  - **NIC Teaming**

- EtherChannel can be used between:
  - Switch to Switch
  - Server to Switch
  - Switch to Router
  - Router to Router (**Layer 3 EtherChannel**)

- EtherChannel hides individual physical interfaces from upper-layer protocols.
- STP views an EtherChannel as one logical link instead of multiple physical links.

---

# Goals and Objectives of EtherChannel

## Increased Bandwidth

- Multiple physical links are combined into one logical link.
- Provides higher total available bandwidth.

Example:

```text
2 × 1Gbps links → One EtherChannel connection
```

---

## Increased Availability

- Failure of one physical link does not stop the EtherChannel.
- Remaining links continue forwarding traffic.

Example:

```text
4 links in EtherChannel

Link 1 fails

Link 2, 3, and 4 continue working
```

---

## Load Sharing

- Traffic can be distributed among multiple physical links.
- Different traffic flows may use different member links.

---

## Auto Configuration

- Configuration applied to the logical EtherChannel interface is automatically applied to member interfaces.

---

## Rapid Convergence

- EtherChannel provides faster recovery when a link fails.
- Reduces network downtime.

---

## Cost Efficiency

- Uses existing network infrastructure.
- Multiple lower-speed links may be cheaper than one high-speed link.

Example:

```text
4 × 10Gbps links may cost less than 1 × 40Gbps link
```

---

## Flexible Operation

EtherChannel can operate as:

- Access channel
- Trunk channel
- Routed Layer 3 channel

---

# Dynamic Channel Protocols

EtherChannel can be created using dynamic negotiation protocols:

1. **PAgP**
2. **LACP**

---

# PAgP (Port Aggregation Protocol)

## Definition

**PAgP** is a Cisco proprietary protocol used to automatically create EtherChannels.

## Characteristics

- Cisco proprietary.
- Supports half-duplex and full-duplex devices.
- Supports a maximum of **8 ports per channel**.
- Provides misconfiguration detection.
- Does not provide standby ports.
- Modes:
  - Auto
  - Desirable

---

# LACP (Link Aggregation Control Protocol)

## Definition

**LACP** is an IEEE standard protocol used for EtherChannel negotiation.

Standard:

```text
IEEE 802.3ad
```

## Characteristics

- Open standard protocol.
- Supports only full-duplex devices.
- Supports up to **16 ports per channel**:
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

| Mode          | Description                                          |
| ------------- | ---------------------------------------------------- |
| **Desirable** | Actively sends PAgP messages and starts negotiation. |
| **Auto**      | Passively waits for PAgP negotiation messages.       |

---

## LACP Modes

| Mode        | Description                                          |
| ----------- | ---------------------------------------------------- |
| **Active**  | Actively sends LACP messages and starts negotiation. |
| **Passive** | Passively waits for LACP negotiation messages.       |

---

# EtherChannel Formation Rules

| Protocol | Switch 1  | Switch 2  | Result             |
| -------- | --------- | --------- | ------------------ |
| ON       | ON        | ON        | EtherChannel forms |
| PAgP     | Desirable | Desirable | EtherChannel forms |
| PAgP     | Desirable | Auto      | EtherChannel forms |
| PAgP     | Auto      | Auto      | No EtherChannel    |
| LACP     | Active    | Active    | EtherChannel forms |
| LACP     | Active    | Passive   | EtherChannel forms |
| LACP     | Passive   | Passive   | No EtherChannel    |

---

# Protocol Compatibility

PAgP, LACP, and ON modes are **not compatible** with each other.

Examples:

```text
PAgP + LACP = No EtherChannel

PAgP + ON = No EtherChannel

LACP + ON = No EtherChannel
```

---

# EtherChannel Components

EtherChannel consists of two main parts:

| Component                  | Description                                       |
| -------------------------- | ------------------------------------------------- |
| **Port-Channel Interface** | Logical interface representing the bundled links. |
| **Member Interfaces**      | Physical ports included in the EtherChannel.      |

---

# EtherChannel and STP

Without EtherChannel:

```text
Switch
 |
 |---- Link 1
 |
 |---- Link 2
```

STP may block one link to prevent Layer 2 loops.

With EtherChannel:

```text
Switch
 |
 |==== EtherChannel ====
 |
```

STP sees it as a single logical connection.

Benefits:

- All member links can forward traffic.
- STP does not block individual links.
- Provides redundancy and better bandwidth usage.

---

# Advantages and Disadvantages

## Advantages

### Cheap Upgrade Solution

- Existing links can be combined instead of replacing hardware.

Example:

```text
4 × 10Gbps links can replace a need for a 40Gbps upgrade
```

---

### Link Layer Redundancy

- Multiple links provide better reliability.
- Failure of one link does not stop communication.

---

## Disadvantages

### Individual Link Bandwidth Limitation

EtherChannel does not create one large physical link.

Example:

```text
2 × 1Gbps EtherChannel
```

Does not become:

```text
1 × 2Gbps connection
```

Instead:

```text
Two separate 1Gbps links sharing traffic
```

---

### Traffic Polarization

- A single traffic flow may use only one physical link.
- Some links may become underused.

---

### Load Distribution Not True Load Balancing

- EtherChannel distributes traffic based on hashing algorithms.
- It does not guarantee equal traffic on every link.

---

# EtherChannel Port Selection

## Selecting Active Ports

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

---

## Port Selection Criteria

The decision-making switch selects ports based on:

1. Lowest port priority.
2. Lowest port number.

Example:

```text
Ports 1-9 configured

Maximum active ports = 8

Ports 1-8 become active

Port 9 becomes standby
```

---

# EtherChannel Misconfiguration Guard

## Definition

EtherChannel Misconfiguration Guard detects incorrect EtherChannel configurations between switches.

It helps prevent network problems caused by mismatched settings.

Common mismatches:

- Different protocols:
  - PAgP on one side
  - LACP on the other side

- Different channel modes.
- Different port configurations.

---

# Layer 2 EtherChannel

## Definition

Layer 2 EtherChannel operates at the Data Link Layer.

Features:

- Used between switches.
- Supports access and trunk operation.
- Provides redundancy.

Limitation:

- Flooded traffic may be sent to connected devices.
- This can increase server CPU utilization.

---

# Layer 3 EtherChannel

## Definition

Layer 3 EtherChannel is a routed EtherChannel that works at the Network Layer.

Used for:

- Router-to-router connections.
- Layer 3 switch connections.

Benefits:

- Supports routing protocols.
- Provides redundant routed links.
- Improves network availability.

---

# EtherChannel Load Balancing

EtherChannel uses hashing algorithms to decide which physical link carries traffic.

Traffic distribution can be based on:

- Source MAC address.
- Destination MAC address.
- Source and destination MAC addresses.
- Source IP address.
- Destination IP address.
- Source and destination IP addresses.

Important:

- Traffic is distributed per flow.
- A single connection normally stays on one physical link.

---

# Common Mistakes

- Mixing PAgP and LACP protocols.
- Configuring different modes on both sides.
- Assuming EtherChannel creates one high-speed link.
- Forgetting that member interfaces need identical configurations.
- Expecting perfect traffic distribution.
- Ignoring standby port limitations.
- Using unsupported duplex settings.

---

# Short Exam Notes

- **EtherChannel:** Combines multiple physical links into one logical link.
- Also known as:
  - Port Channel
  - LAG
  - Link Aggregation

- Protocols:
  - **PAgP:** Cisco proprietary.
  - **LACP:** IEEE 802.3ad standard.

- PAgP modes:
  - Desirable
  - Auto

- LACP modes:
  - Active
  - Passive

- Maximum ports:
  - PAgP: 8 ports.
  - LACP: 16 ports (8 active + 8 standby).

- EtherChannel provides:
  - Increased bandwidth.
  - Fault tolerance.
  - Load sharing.

- STP sees EtherChannel as one logical link.
- EtherChannel provides load distribution, not perfect load balancing.
