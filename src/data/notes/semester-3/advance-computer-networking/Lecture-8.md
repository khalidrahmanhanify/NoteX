---
title: Open Shortest Path First (OSPF)
description: Learn OSPF characteristics, areas, neighbor relationships, DR/BDR election, and basic configuration.
lecture: Lecture 8
semester: semester-3
subject: advance-computer-networking
date: 2026-06-04
order: 9
---

# Open Shortest Path First (OSPF)

## Definition

**Open Shortest Path First (OSPF)** is a **Link-State Interior Gateway Protocol (IGP)** used to dynamically exchange routing information within an Autonomous System (AS). OSPF calculates the **shortest path** using the **Dijkstra Shortest Path First (SPF)** algorithm and is widely used in medium and large enterprise networks.

---

# OSPF Characteristics

## Definition

OSPF is an open-standard dynamic routing protocol designed for fast, scalable, and efficient routing.

---

## Key Points

- **Open standard** (works with Cisco and non-Cisco devices)
- **Link-State** routing protocol
- Uses the **Dijkstra SPF (Shortest Path First)** algorithm
- **Fast convergence**
- **Administrative Distance (AD): 110**
- Supports **IPv4 and IPv6**
- Supports **VLSM** and **CIDR**
- Uses **Cost** as its routing metric
- Supports **Equal-Cost Load Balancing (ECMP)**
- Has **no hop-count limit**
- Divides large networks into **Areas**
- Requires **Area 0 (Backbone Area)**

---

# OSPF Metric (Cost)

## Definition

OSPF selects the best path based on **Cost**.

Lower cost = Better path.

---

## Cost Formula

```text
Cost = Reference Bandwidth / Interface Bandwidth
```

Cisco traditionally uses:

```text
Cost = 100 Mbps / Bandwidth (Mbps)
```

> **Note:** Modern Cisco IOS versions allow the reference bandwidth to be changed so high-speed links (1 Gbps, 10 Gbps, etc.) can have different costs.

---

## Common Default Costs

| Interface                |                  Cost |
| ------------------------ | --------------------: |
| Serial T1                | 64–65 (approximately) |
| Ethernet (10 Mbps)       |                    10 |
| Fast Ethernet (100 Mbps) |                     1 |
| Gigabit Ethernet         |                   1\* |
| 10 Gigabit Ethernet      |                   1\* |
| 40 Gigabit Ethernet      |                   1\* |
| 100 Gigabit Ethernet     |                   1\* |

> \*With the default 100 Mbps reference bandwidth, all links of 100 Mbps or faster have a cost of 1.

---

## Example

| Route  | Total Cost |
| ------ | ---------: |
| Path A |          5 |
| Path B |         12 |

OSPF chooses **Path A** because it has the lower total cost.

---

# OSPF Routing Tables

Every OSPF router maintains three databases.

| Table                              | Purpose                                                |
| ---------------------------------- | ------------------------------------------------------ |
| **Neighbor Table**                 | Stores information about neighboring OSPF routers      |
| **Topology (Link-State) Database** | Stores the complete network topology for the area      |
| **Routing Table**                  | Stores the best routes calculated by the SPF algorithm |

---

# Router ID (RID)

## Definition

A **Router ID (RID)** is a **32-bit unique identifier** used to identify an OSPF router.

Although it looks like an IPv4 address, it is used only for identification.

---

## Router ID Selection Order

OSPF selects the Router ID in this order:

1. Router ID configured manually (`router-id`)
2. Highest IP address on any **Loopback Interface**
3. Highest IP address on any active **Physical Interface**

---

## Configure Router ID

```bash
R(config)# router ospf 10
R(config-router)# router-id 172.168.10.10
```

---

## Verify Router ID

```bash
show ip ospf
```

---

# Topology Database

## Definition

The **Topology Database** contains all Link-State Advertisements (LSAs) received from routers within the same OSPF area.

Routers use this database to calculate the shortest path.

---

# Link-State Advertisement (LSA)

## Definition

An **LSA (Link-State Advertisement)** is a packet containing information about a router's links and connected networks.

Routers flood LSAs throughout the OSPF area to maintain a consistent topology database.

---

# DR (Designated Router)

## Definition

A **Designated Router (DR)** is elected on a **broadcast multi-access network** (such as Ethernet) to reduce unnecessary routing traffic.

Instead of every router exchanging LSAs with every other router, routers exchange LSAs through the DR.

---

## DR Election

Selection order:

1. Highest **OSPF Priority**
2. Highest **Router ID**

---

## Configure Interface Priority

```bash
R(config-if)# ip ospf priority 100
```

Priority Range:

```text
0 - 255
```

- Higher value = Higher chance of becoming DR.
- Priority **0** means the router can never become DR.

---

## Multicast Addresses

| Address       | Purpose                         |
| ------------- | ------------------------------- |
| **224.0.0.5** | All OSPF Routers                |
| **224.0.0.6** | All Designated Routers (DR/BDR) |

Non-DR routers send updates to **224.0.0.6**, while OSPF Hello packets are sent to **224.0.0.5**.

---

# BDR (Backup Designated Router)

## Definition

The **Backup Designated Router (BDR)** is elected alongside the DR.

It listens to all routing information but does not actively distribute LSAs unless the DR fails.

---

## Characteristics

- Backup for the DR
- Automatically becomes DR if the DR fails
- One DR and one BDR per broadcast network

---

# OSPF Areas

## Definition

An **OSPF Area** is a logical grouping of routers and networks.

Using areas reduces routing overhead and improves scalability.

---

## Key Points

- Every router in the same area shares the same topology database.
- Every OSPF network must connect to **Area 0 (Backbone Area)**.
- A router may belong to multiple areas.
- Area IDs are assigned to interfaces.
- Areas reduce:
  - Routing updates
  - Topology database size
  - Routing table size

---

## Area Types

### Backbone Area (Area 0)

The central area to which all other areas must connect.

---

### Non-Backbone Areas

Contain routers that communicate with Area 0 through an Area Border Router (ABR).

---

# ABR (Area Border Router)

## Definition

An **ABR** connects multiple OSPF areas.

### Responsibilities

- Connects Area 0 with other areas.
- Summarizes routes between areas.
- Maintains separate topology databases for each connected area.

---

# ASBR (Autonomous System Boundary Router)

## Definition

An **ASBR** connects an OSPF network to another routing domain or external network.

Examples:

- Internet
- EIGRP
- RIP
- Static routes

---

# OSPF Neighbor Relationship

## Definition

Before exchanging routing information, OSPF routers must first become **Neighbors**.

Neighbors are discovered automatically using **Hello Packets**.

---

## Hello Packets

- Sent every **10 seconds** (on broadcast and point-to-point networks by default)
- Destination Multicast Address: **224.0.0.5**

---

## Dead Timer

Default:

```text
Dead Interval = Hello Interval × 4
```

Example:

```text
10 × 4 = 40 Seconds
```

If no Hello packets are received within the Dead Interval, the neighbor is considered down.

---

# Requirements to Become Neighbors

For two routers to establish an OSPF neighbor relationship, the following must match:

- Subnet
- Area ID
- Hello Interval
- Dead Interval
- Authentication
- MTU size (typically 1500 bytes)

---

# Neighbor vs Adjacent

## Neighbor

Routers that exchange **Hello Packets**.

---

## Adjacent

Routers that exchange **LSAs** and synchronize their databases.

A router **must first become a Neighbor before becoming Adjacent**.

---

## Comparison

| Neighbor                | Adjacent               |
| ----------------------- | ---------------------- |
| Exchanges Hello packets | Exchanges LSAs         |
| Discovers routers       | Synchronizes databases |
| First stage             | Second stage           |

---

# OSPF Configuration

## Step 1: Enable OSPF

```bash
R(config)# router ospf 10
```

**Explanation**

- Starts the OSPF process.
- `10` is the **Process ID**.
- Process ID is **locally significant** and does **not** have to match between routers.

---

## Step 2: Advertise Networks

```bash
R(config-router)# network 10.1.1.0 0.255.255.255 area 0
```

**Explanation**

- `10.1.1.0` → Network address
- `0.255.255.255` → Wildcard mask
- `area 0` → Places matching interfaces into Area 0

---

# Wildcard Mask

## Definition

OSPF uses **Wildcard Masks**, which are the inverse of subnet masks.

---

## Examples

| Subnet Mask   | Wildcard Mask |
| ------------- | ------------- |
| 255.255.255.0 | 0.0.0.255     |
| 255.255.0.0   | 0.0.255.255   |
| 255.0.0.0     | 0.255.255.255 |

> **Correction:** The lecture slide shows `255.255.255.0 → 0.255.255.255`, which is incorrect. The correct wildcard mask is **0.0.0.255**.

---

# OSPF Verification Commands

```bash
show ip ospf
```

Displays OSPF process information.

---

```bash
show ip route
```

Displays the routing table.

---

```bash
show ip ospf database
```

Displays the Link-State Database.

---

```bash
show ip ospf interface FastEthernet0/1
```

Displays OSPF information for a specific interface.

---

```bash
show ip ospf neighbor
```

Displays OSPF neighbors.

---

```bash
show ip protocols
```

Displays routing protocol information.

---

# OSPF Debug Commands

```bash
debug ip ospf packet
```

Displays OSPF packets.

---

```bash
debug ip ospf hello
```

Displays Hello packets.

---

```bash
debug ip ospf adj
```

Displays adjacency events.

---

```bash
debug ip packet
```

Displays IP packet processing.

---

# Loopback Interface

## Definition

A **Loopback Interface** is a virtual interface that remains active as long as the router is operational.

It is commonly used as the Router ID because it is stable.

---

## Configuration

```bash
R(config)# interface loopback 0
R(config-if)# ip address 192.168.10.1 255.255.255.255
```

> A `/32` subnet mask (`255.255.255.255`) is typically used for loopback interfaces.

---

# Example / Code

## Basic OSPF Configuration

```bash
R1(config)# router ospf 10
R1(config-router)# router-id 1.1.1.1
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
```

### Line-by-Line Explanation

| Command                                | Purpose                                        |
| -------------------------------------- | ---------------------------------------------- |
| `router ospf 10`                       | Starts the OSPF process.                       |
| `router-id 1.1.1.1`                    | Manually sets the Router ID.                   |
| `network 192.168.1.0 0.0.0.255 area 0` | Enables OSPF on matching interfaces in Area 0. |

---

## Common Mistakes

- Confusing **Router ID** with an interface IP address.
- Assuming the OSPF Process ID must match between routers; it is locally significant.
- Using the wrong wildcard mask (it is the inverse of the subnet mask).
- Forgetting to connect all non-backbone areas to **Area 0**.
- Assuming OSPF uses Hop Count; it uses **Cost**.
- Forgetting that neighbor routers must have matching Hello/Dead timers, Area IDs, authentication, subnet, and MTU.
- Believing every router exchanges LSAs with every other router on broadcast networks; DR and BDR reduce this overhead.

---

# Short Exam Notes

- **OSPF:** Open-standard Link-State IGP.
- **Algorithm:** Dijkstra Shortest Path First (SPF).
- **Administrative Distance:** 110.
- **Metric:** Cost (lower is better).
- **Hop Count:** Unlimited.
- **Supports:** IPv4, IPv6, VLSM, CIDR, Equal-Cost Load Balancing.
- **Multicast Addresses:** `224.0.0.5` (All OSPF Routers), `224.0.0.6` (All DR/BDR).
- **Router ID Priority:** Manual → Highest Loopback IP → Highest Physical IP.
- **OSPF Tables:** Neighbor Table, Topology Database, Routing Table.
- **DR Election:** Highest Priority, then highest Router ID.
- **BDR:** Takes over if the DR fails.
- **Area 0:** Backbone Area; all other areas should connect to it.
- **ABR:** Connects OSPF areas and summarizes routes.
- **ASBR:** Connects OSPF to external routing domains.
- **Hello Interval:** 10 seconds (default on Ethernet).
- **Dead Interval:** 40 seconds (default on Ethernet).
- **Neighbor:** Exchanges Hello packets.
- **Adjacent:** Exchanges LSAs and synchronizes databases.
- **Wildcard Mask:** Inverse of the subnet mask (e.g., `255.255.255.0` → `0.0.0.255`).
