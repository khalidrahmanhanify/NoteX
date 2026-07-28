---
title: Routing Information Protocol (RIP)
description: Learn RIP characteristics, versions, configuration, and differences between RIPv1 and RIPv2.
lecture: Lecture 7
semester: semester-3
subject: advance-computer-networking
date: 2026-04-16
order: 10
---

# Routing Information Protocol (RIP)

## Definition

**Routing Information Protocol (RIP)** is a **Distance Vector Routing Protocol** that automatically exchanges routing information between routers. It determines the best path based on **Hop Count** and is designed for **small networks**.

---

# Distance Vector Protocol Review

## Definition

A **Distance Vector (DV)** routing protocol shares its **entire routing table** with directly connected neighbors at regular intervals.

Routers trust the routing information received from neighboring routers without independently verifying every route. This behavior is known as **Routing by Rumor**.

---

## Key Points

- Routers exchange their **complete routing tables**.
- Updates are sent to **directly connected neighbors**.
- Each router combines received routes with its own routing table.
- The best route is selected based on the routing protocol's metric.
- If multiple routing protocols advertise the same destination, **Administrative Distance (AD)** determines which route is preferred.

---

## Examples of Distance Vector Protocols

- **RIP (Routing Information Protocol)**
- **IGRP (Interior Gateway Routing Protocol)** _(obsolete; no longer supported by Cisco)_

---

# RIP Characteristics

## Definition

RIP is one of the oldest and simplest dynamic routing protocols.

---

## Key Characteristics

- **Routing Protocol:** RIP (Routing Information Protocol)
- **Routing Type:** Distance Vector
- **Default Administrative Distance (AD):** **120**
- **Metric:** Hop Count
- **Maximum Hop Count:** **15**
- **Hop 16:** Destination is considered **unreachable**
- **Update Interval:** Every **30 seconds**
- Best suited for **small networks**
- Supports **Equal-Cost Load Balancing**
  - Default: **4 paths**
  - Maximum: **6 equal-cost paths** (platform dependent)

---

## Hop Count

A **Hop** is one router crossed by a packet.

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

RIP always prefers the route with the **fewest hops**.

---

# RIP Versions

There are three versions of RIP.

| Version | IP Version | Supports VLSM | Routing Type |
| ------- | ---------- | ------------- | ------------ |
| RIPv1   | IPv4       | ❌ No         | Classful     |
| RIPv2   | IPv4       | ✅ Yes        | Classless    |
| RIPng   | IPv6       | ✅ Yes        | Classless    |

---

## Neighbor Command

```bash
neighbor 192.168.20.2
```

Normally, RIP sends routing updates using **broadcast (RIPv1)** or **multicast (RIPv2)**.

The `neighbor` command changes routing updates to **unicast**, sending updates only to the specified neighbor.

---

# RIP Message Types

RIP uses two message types.

## 1. Request Message

Purpose:

- Sent when a RIP-enabled interface starts.
- Requests routing information from neighboring routers.

---

## 2. Response Message

Purpose:

- Sent in reply to a Request message.
- Contains the router's routing table.

---

# RIPv1

## Definition

**RIPv1** is the original version of RIP.

It is a **Classful Distance Vector Routing Protocol**, meaning it does **not** include subnet mask information in routing updates.

---

## Characteristics

- IPv4 only
- Classful routing
- No VLSM support
- Uses Broadcast
- No authentication
- Hop Count metric
- Maximum 15 hops

---

# RIPv1 Configuration

## Enable RIP

```bash
R1(config)# router rip
```

Starts the RIP routing process.

---

## Advertise Networks

```bash
R1(config-router)# network 192.168.10.0
R1(config-router)# network 192.168.20.0
R1(config-router)# network 192.168.30.0
R1(config-router)# network 192.168.40.0
```

Each `network` command enables RIP on interfaces that belong to that network and advertises those networks to neighboring routers.

---

## Display Routing Table

```bash
R1(config-router)# do show ip route
```

Displays the routing table without leaving configuration mode.

---

## Passive Interface

```bash
R1(config-router)# passive-interface Serial2/0
```

Stops RIP updates from being sent out of the specified interface while still allowing the connected network to be advertised.

---

## Neighbor Command

```bash
R1(config-router)# neighbor 192.168.20.2
```

Sends routing updates directly to the specified neighbor using **unicast**.

---

# RIPv2

## Definition

**RIPv2** is an enhanced version of RIPv1.

It is a **Classless Distance Vector Routing Protocol** that supports modern IP addressing features such as **VLSM** and **CIDR**.

---

## Characteristics

- IPv4
- Classless
- Supports VLSM
- Supports CIDR
- Uses Multicast
- Supports Authentication
- Hop Count metric
- Maximum 15 hops

---

# RIPv1 vs RIPv2

| Feature                 | RIPv1     | RIPv2                 |
| ----------------------- | --------- | --------------------- |
| Routing Type            | Classful  | Classless             |
| IPv4 Support            | Yes       | Yes                   |
| Maximum Hop Count       | 15        | 15                    |
| Authentication          | No        | MD5 or Plain Text     |
| Updates                 | Broadcast | Multicast (224.0.0.9) |
| VLSM Support            | No        | Yes                   |
| CIDR Support            | No        | Yes                   |
| Administrative Distance | 120       | 120                   |

---

# RIPv2 Configuration

## Enable RIP

```bash
R1(config)# router rip
```

Starts the RIP routing process.

---

## Enable Version 2

```bash
R1(config-router)# version 2
```

Enables RIPv2.

---

## Disable Auto Summarization

```bash
R1(config-router)# no auto-summary
```

Disables automatic route summarization at classful network boundaries.

This is recommended when using VLSM or discontiguous networks.

---

## Advertise Networks

```bash
R1(config-router)# network 192.168.10.0
R1(config-router)# network 192.168.20.0
R1(config-router)# network 192.168.30.0
R1(config-router)# network 192.168.40.0
```

Advertises the specified networks.

---

# Advertising a Default Route Using RIP

A router can advertise a default route to all RIP neighbors.

## Step 1: Configure the Default Route

```bash
Router(config)# ip route 0.0.0.0 0.0.0.0 14.0.0.4
```

This creates a static default route.

---

## Step 2: Enable RIP

```bash
Router(config)# router rip
```

Starts the RIP routing process.

---

## Step 3: Advertise the Default Route

```bash
Router(config-router)# default-information originate
```

This instructs RIP to advertise the configured default route to neighboring routers.

---

# RIP Configuration Example

```bash
Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# no auto-summary
Router(config-router)# network 192.168.1.0
Router(config-router)# network 192.168.2.0
```

### Line-by-Line Explanation

| Command               | Purpose                           |
| --------------------- | --------------------------------- |
| `router rip`          | Starts RIP.                       |
| `version 2`           | Uses RIPv2.                       |
| `no auto-summary`     | Disables automatic summarization. |
| `network 192.168.1.0` | Advertises the first network.     |
| `network 192.168.2.0` | Advertises the second network.    |

---

# RIP vs IGRP

## Definition

Both RIP and IGRP are **Distance Vector** routing protocols.

However, IGRP was a Cisco proprietary protocol and is now obsolete.

---

## Differences

| RIP                                       | IGRP                                                    |
| ----------------------------------------- | ------------------------------------------------------- |
| Open standard                             | Cisco proprietary                                       |
| Uses Hop Count                            | Uses Bandwidth, Delay, Reliability, and Load            |
| Administrative Distance = 120             | Administrative Distance = 100                           |
| Maximum Hop Count = 15                    | Maximum Hop Count = 255 (100 recommended)               |
| No Autonomous System (AS) number required | Routers must use the same Autonomous System (AS) number |
| Still supported (RIPv2)                   | No longer supported by Cisco                            |

---

# Explanation

## How RIP Works

1. RIP is enabled on participating routers.
2. Routers discover directly connected networks.
3. Every **30 seconds**, routers exchange routing tables with neighbors.
4. Each router updates its routing table based on received information.
5. Routes with the **lowest hop count** are selected.
6. If multiple equal-cost routes exist, RIP performs load balancing.

---

## Routing by Rumor

Distance Vector protocols do not maintain a complete map of the network.

Instead:

- A router trusts information received from neighboring routers.
- It assumes the neighbor's information is correct.
- Therefore, Distance Vector routing is often called **Routing by Rumor**.

---

## Why RIPv2 Is Better Than RIPv1

- Supports **VLSM**.
- Supports **CIDR**.
- Includes subnet masks in routing updates.
- Supports authentication.
- Uses multicast instead of broadcast, reducing unnecessary traffic.

---

## Common Mistakes

- Confusing **Hop Count** with **Administrative Distance**.
- Forgetting that RIP cannot route beyond **15 hops**.
- Assuming RIPv1 supports VLSM—it does **not**.
- Forgetting to configure `version 2` when using RIPv2.
- Forgetting `no auto-summary` in networks using VLSM or discontiguous addressing.
- Thinking RIP is suitable for large enterprise networks; it is intended for **small networks**.
- Confusing **Broadcast (RIPv1)** with **Multicast (RIPv2)** updates.

---

## Short Exam Notes

- **RIP:** Distance Vector routing protocol.
- **Metric:** Hop Count.
- **Administrative Distance:** 120.
- **Maximum Hop Count:** 15 (16 = unreachable).
- **Routing Updates:** Every 30 seconds.
- **RIPv1:** Classful, Broadcast, No VLSM, No Authentication.
- **RIPv2:** Classless, Multicast (224.0.0.9), Supports VLSM/CIDR, Supports Authentication.
- **RIPng:** RIP for IPv6.
- **Passive Interface:** Stops sending RIP updates on an interface while still advertising its network.
- **`default-information originate`:** Advertises the default route through RIP.
- **IGRP:** Cisco proprietary Distance Vector protocol, now obsolete.
- **Distance Vector:** Exchanges complete routing tables with neighbors ("Routing by Rumor").
