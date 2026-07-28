---
title: Dynamic Routing and Routing Protocols
description: Learn dynamic routing, routing protocol types, metrics, and administrative distance for efficient network
lecture: Lecture 6
semester: semester-3
subject: advance-computer-networking
date: 2026-04-09
order: 11
---

# Dynamic Routing and Routing Protocols

## Definition

**Dynamic Routing** is a routing method in which **routing protocols** automatically discover networks, exchange routing information, and update routing tables whenever the network topology changes.

Unlike static routing, dynamic routing does not require manual updates whenever a new network or router is added.

---

## Key Points

### Dynamic Routing

- Uses **routing protocols** to exchange routing information.
- Automatically updates routing tables.
- Determines the best path to a destination.
- Suitable for medium and large networks.
- Requires more CPU, memory, and bandwidth than static routing.

---

## Functions of Routing Protocols

Routing protocols perform the following functions:

- Dynamically exchange routing information between routers.
- Discover neighboring routers.
- Automatically update routing tables when the topology changes.
- Determine the best path to destination networks.
- Remove invalid or unreachable routes.

---

## Advantages of Dynamic Routing

- Automatic route discovery.
- Automatically adapts to network failures.
- Suitable for large and complex networks.
- Reduces manual configuration.
- Supports redundant paths.

---

## Disadvantages of Dynamic Routing

- Uses router CPU resources.
- Consumes network bandwidth for routing updates.
- More complex than static routing.
- Takes time to converge after topology changes.

---

# Routed Protocol vs Routing Protocol

## Routed Protocol

### Definition

A **Routed Protocol** is responsible for carrying **user data** across networks.

Routers use routed protocols to forward packets between different networks.

### Examples

- IPv4
- IPv6
- IPX
- AppleTalk

---

## Routing Protocol

### Definition

A **Routing Protocol** is used only by routers to exchange routing information and build routing tables.

Routing protocols do **not** carry user data.

### Examples

- RIP
- EIGRP
- OSPF
- IS-IS
- BGP

---

## Comparison

| Routed Protocol             | Routing Protocol              |
| --------------------------- | ----------------------------- |
| Transfers user data         | Exchanges routing information |
| Used by hosts and routers   | Used only by routers          |
| Provides logical addressing | Determines best paths         |
| Examples: IPv4, IPv6        | Examples: RIP, OSPF, EIGRP    |

---

# Components of Routing Protocols

Every routing protocol has two main components.

## 1. Algorithm

An **algorithm** calculates the best path to a destination network.

Different routing protocols use different algorithms.

Examples:

- Hop Count
- Cost
- Bandwidth
- Delay

---

## 2. Routing Protocol Messages

These messages allow routers to:

- Discover neighboring routers.
- Exchange routing information.
- Maintain routing tables.
- Notify topology changes.

---

# Classification of Routing Protocols

Routing protocols are classified as follows:

```text
Routing Protocols
│
├── Interior Gateway Protocols (IGP)
│     ├── Distance Vector
│     ├── Link State
│     └── Hybrid
│
└── Exterior Gateway Protocols (EGP)
      └── BGP
```

---

# Interior Gateway Protocol (IGP)

## Definition

**IGP (Interior Gateway Protocol)** is used **inside a single organization or Autonomous System (AS).**

Examples:

- RIP
- OSPF
- EIGRP
- IS-IS

---

# Exterior Gateway Protocol (EGP)

## Definition

**EGP (Exterior Gateway Protocol)** is used **between different Autonomous Systems**, such as communication between Internet Service Providers (ISPs).

Example:

- BGP (Border Gateway Protocol)

---

## IGP vs EGP

| IGP                          | EGP                        |
| ---------------------------- | -------------------------- |
| Used inside one organization | Used between organizations |
| Smaller networks             | Internet-scale networks    |
| Faster internal routing      | Global Internet routing    |
| Examples: RIP, OSPF, EIGRP   | Example: BGP               |

---

# Distance Vector Routing Protocols

## Definition

Distance Vector routing protocols determine the best path primarily by measuring **distance**, usually using **Hop Count**.

Examples:

- RIP
- IGRP

---

## Characteristics

- Uses **Hop Count**.
- Periodically sends the **entire routing table** to directly connected neighbors.
- Sometimes called **Routing by Rumor** because routers rely on information received from neighboring routers.
- Simple configuration.
- Slower convergence than Link-State protocols.

---

## Hop Count

A **Hop** is one router that a packet passes through.

Example:

```text
PC
 │
R1
 │
R2
 │
R3
 │
Server
```

Hop Count = **3**

The path with the **fewest hops** is usually selected by RIP.

---

# Link-State Routing Protocols

## Definition

Link-State routing protocols create a complete map of the network and calculate the shortest path using the **Shortest Path First (SPF)** algorithm.

Example:

- OSPF
- IS-IS

---

## Router Databases

Each Link-State router maintains three databases.

### 1. Neighbor Table

Stores information about directly connected neighbors.

---

### 2. Link-State Database (Topology Database)

Stores the complete network topology.

---

### 3. Routing Table

Stores the best routes calculated from the topology database.

---

## Characteristics

- Uses the **SPF (Shortest Path First)** algorithm.
- Sends updates only when network changes occur.
- Creates a complete view of the network.
- Uses **Cost** as its metric (OSPF).
- Faster convergence than Distance Vector.

---

# Hybrid Routing Protocols

## Definition

Hybrid routing protocols combine the advantages of both Distance Vector and Link-State protocols.

Example:

- EIGRP (Enhanced Interior Gateway Routing Protocol)

---

## Characteristics

- Fast convergence.
- Efficient routing updates.
- Uses multiple metrics.
- Performs well in large enterprise networks.

---

# Distance Vector vs Link-State

| Feature           | Distance Vector | Link-State                          |
| ----------------- | --------------- | ----------------------------------- |
| Network View      | Partial         | Complete                            |
| Updates           | Periodic        | Triggered (only when changes occur) |
| Convergence       | Slow            | Fast                                |
| Resource Usage    | Lower           | Higher                              |
| Decision Based On | Hop Count       | Cost (SPF)                          |
| Examples          | RIP, IGRP       | OSPF, IS-IS                         |

---

# Classful Routing Protocols

## Definition

Classful routing protocols **do not include subnet masks** in routing updates.

### Characteristics

- All subnets must use the same subnet mask.
- No VLSM support.
- No CIDR support.

### Examples

- RIPv1
- IGRP

---

# Classless Routing Protocols

## Definition

Classless routing protocols **include subnet masks** in routing updates.

### Characteristics

- Support VLSM.
- Support CIDR.
- More flexible.
- Suitable for modern networks.

### Examples

- RIPv2
- OSPF
- EIGRP
- IS-IS

---

## Classful vs Classless

| Classful                  | Classless                    |
| ------------------------- | ---------------------------- |
| No subnet mask in updates | Sends subnet mask in updates |
| No VLSM                   | Supports VLSM                |
| No CIDR                   | Supports CIDR                |
| Less flexible             | More flexible                |
| RIPv1, IGRP               | RIPv2, OSPF, EIGRP, IS-IS    |

---

# Metric

## Definition

A **Metric** is a numerical value that routing protocols use to select the **best path** to a destination.

Generally, the **lower metric** is preferred.

---

## Metrics Used by Routing Protocols

| Routing Protocol | Metric Used                                                         |
| ---------------- | ------------------------------------------------------------------- |
| RIP              | Hop Count                                                           |
| IGRP             | Bandwidth, Delay, Reliability, Load                                 |
| EIGRP            | Bandwidth and Delay (by default); can also use Reliability and Load |
| OSPF             | Cost (primarily calculated from bandwidth)                          |

---

## Example

Suppose Router A knows two paths to the same network.

| Path   | Hop Count |
| ------ | --------: |
| Path 1 |         2 |
| Path 2 |         5 |

Using RIP, **Path 1** is selected because it has the lower Hop Count.

---

# Administrative Distance (AD)

## Definition

**Administrative Distance (AD)** measures how trustworthy the **source** of routing information is.

- Range: **0–255**
- Lower AD = More trusted
- AD **255** = Route is never installed in the routing table

---

## Default Administrative Distance Values

| Route Source        | Default AD |
| ------------------- | ---------: |
| Connected Interface |          0 |
| Static Route        |          1 |
| EIGRP (Internal)    |         90 |
| IGRP                |        100 |
| OSPF                |        110 |
| RIP                 |        120 |
| EIGRP (External)    |        170 |
| Unknown             |        255 |

---

## Metric vs Administrative Distance

Many students confuse these two concepts.

| Metric                                                     | Administrative Distance                                                                          |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Chooses the best path within the **same routing protocol** | Chooses the most trusted route when **different routing sources** advertise the same destination |
| Calculated by the routing protocol                         | Assigned by Cisco IOS                                                                            |
| Lower value is better                                      | Lower value is more trustworthy                                                                  |

### Example

A router learns the same destination from:

- OSPF (AD = 110)
- RIP (AD = 120)

The router installs the **OSPF** route because its Administrative Distance is lower.

---

# Gateway of Last Resort

## Definition

The **Gateway of Last Resort** is another name for the **Default Route**.

It is used when no specific destination exists in the routing table.

---

## Operation

```text
Packet Arrives
      │
      ▼
Is destination in Routing Table?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
Forward    Use Default Route
```

If the next router also does not know the destination, it performs the same lookup process.

---

## Example / Code

### Display Routing Table

```bash
Router# show ip route
```

**Explanation**

Displays:

- Connected routes
- Static routes
- Dynamic routes
- Default route
- Administrative Distance
- Metric

---

### Display Routing Protocol Information

```bash
Router# show ip protocols
```

**Explanation**

Shows:

- Active routing protocols
- Routing timers
- Administrative distances
- Networks participating in routing

---

## Common Mistakes

- Confusing **Routed Protocols** with **Routing Protocols**.
- Assuming dynamic routing does not consume bandwidth.
- Thinking RIP uses bandwidth or cost as its metric (it uses **Hop Count**).
- Confusing **Metric** with **Administrative Distance**.
- Believing Link-State routers periodically send their full routing tables; they send updates primarily when topology changes.
- Assuming BGP is an Interior Gateway Protocol; it is an Exterior Gateway Protocol.

---

## Short Exam Notes

- **Dynamic Routing:** Automatically discovers and updates routes using routing protocols.
- **Routing Protocol Functions:** Discover neighbors, exchange routes, update routing tables, choose the best path.
- **Routed Protocols:** IPv4, IPv6, IPX, AppleTalk.
- **Routing Protocols:** RIP, OSPF, EIGRP, IS-IS, BGP.
- **IGP:** Used within one organization (AS).
- **EGP:** Used between different Autonomous Systems; **BGP** is the standard EGP.
- **Distance Vector:** Uses Hop Count; periodic updates; examples: RIP, IGRP.
- **Link-State:** Uses SPF and Cost; complete network topology; examples: OSPF, IS-IS.
- **Hybrid:** Combines Distance Vector and Link-State features; example: EIGRP.
- **Classful Protocols:** RIPv1, IGRP; no subnet mask in updates.
- **Classless Protocols:** RIPv2, OSPF, EIGRP, IS-IS; support VLSM and CIDR.
- **Metric:** Determines the best path within the same routing protocol.
- **Administrative Distance:** Determines the most trusted routing source.
- **Default AD Values:** Connected = 0, Static = 1, EIGRP = 90, OSPF = 110, RIP = 120, Unknown = 255.
- **Gateway of Last Resort:** Default route used when no specific route matches the destination.
