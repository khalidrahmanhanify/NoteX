---
title: RIP (Routinf Information Protocol)
description: All about RIP, RIP Versions, Configuring RIP in a network.
lecture: Lecture 7
semester: semester-3
subject: advance-computer-networking
date: 2026-04-16
order: 10
---

# Distance Vector Routing Protocol (RIP)

## Definition

A **Distance Vector Routing Protocol** is a routing method where routers share information about:

- Distance (metric)
- Direction (next hop)

**RIP (Routing Information Protocol)** is a simple distance vector protocol that uses **hop count** to determine the best path.

---

## Key Points

- RIP = **Routing Information Protocol**
- Type: **Distance Vector**
- Metric: **Hop Count**
- Maximum hops: **15**
  → Hop **16 = unreachable**
- Administrative Distance (AD): **120**
- Updates sent every **30 seconds**
- Works best in **small networks**
- Supports **equal-cost load balancing** (up to 4 by default, 6 maximum)

> 💡 Load Balancing: Traffic is distributed equally across multiple equal-cost paths.

---

## Example / Code

```text
Router(config)# router rip
Router(config-router)# network 192.168.1.0
Router(config-router)# network 192.168.2.0
Router(config-router)# network 192.168.3.0
Router(config-router)# network 192.168.4.0

Router(config-router)# passive-interface serial 2/0
Router(config-router)# do show ip route
```

---

## Explanation

- `router rip` → Enables RIP routing
- `network` → Advertises connected networks
- `passive-interface` → Stops sending updates on that interface
- `show ip route` → Displays routing table

---

## Output (if any)

Example routing table entry:

```text
R 192.168.2.0/24 [120/1] via 192.168.1.1
```

- `R` → Learned via RIP
- `120` → Administrative Distance
- `1` → Hop count

---

## Common Mistakes

- ❌ Using RIP in large networks (not scalable)
- ❌ Forgetting hop limit (15 max)
- ❌ Misunderstanding load balancing (only equal-cost paths)
- ❌ Not enabling correct networks
- ❌ Confusing classful vs classless behavior

---

## Short Exam Notes (very concise revision points)

- RIP = Distance Vector
- Metric = Hop count
- Max hops = 15
- AD = 120
- Updates every 30s
- Small networks only

---

# RIP Versions

## Definition

RIP has multiple versions with different capabilities for IPv4 and IPv6.

---

## Key Points

- **RIPv1**
  - Classful (no subnet mask info)
  - No VLSM support
  - Broadcast updates

- **RIPv2**
  - Classless (supports subnet masks)
  - Supports VLSM
  - Uses multicast (224.0.0.9)
  - Supports authentication (MD5 / plaintext)

- **RIPng**
  - Used for **IPv6**

---

## Example / Code

```text
Router(config)# router rip
Router(config-router)# version 2
Router(config-router)# network 192.168.1.0
```

---

## Explanation

- `version 2` enables **RIPv2**
- RIPv2 improves efficiency using multicast instead of broadcast
- Supports modern subnetting (VLSM)

---

## Output (if any)

Routing table still shows:

```text
R 192.168.1.0/24 [120/1] via 192.168.1.1
```

---

## Common Mistakes

- ❌ Using RIPv1 with VLSM networks
- ❌ Forgetting to enable version 2
- ❌ Confusing multicast vs broadcast

---

## Short Exam Notes (very concise revision points)

- RIPv1 = Classful
- RIPv2 = Classless + VLSM
- RIPng = IPv6
- Multicast: 224.0.0.9

---

# RIP Message Types

## Definition

RIP uses specific messages to exchange routing information between routers.

---

## Key Points

- **Request Message**
  - Sent when router starts
  - Asks neighbors for routing table

- **Response Message**
  - Contains routing table
  - Sent as reply or periodic update

---

## Example / Code

(No direct CLI command — happens automatically when RIP is enabled)

---

## Explanation

- When a router starts → sends **Request**
- Neighbor routers reply with **Response**
- Periodically, routers send responses every **30 seconds**

---

## Output (if any)

(Not directly visible, but affects routing table updates)

---

## Common Mistakes

- ❌ Thinking messages must be configured manually
- ❌ Not understanding startup behavior

---

## Short Exam Notes (very concise revision points)

- Request → ask for routes
- Response → send routes
- Auto process

---

# Difference Between RIP and IGRP

## Definition

RIP and **IGRP (Interior Gateway Routing Protocol)** are both distance vector protocols but differ in performance and scalability.

---

## Key Points

| Feature      | RIP       | IGRP              |
| ------------ | --------- | ----------------- |
| Network Size | Small     | Large             |
| Metric       | Hop count | Bandwidth + delay |
| Max Hops     | 15        | 255               |
| AD           | 120       | 100               |
| Update Time  | 30 sec    | 90 sec            |
| AS Number    | Not used  | Required          |

---

## Example / Code

```text
RIP: router rip
IGRP: router igrp 1
```

---

## Explanation

- RIP is simple but limited
- IGRP is more advanced (uses composite metric)
- Lower AD (100) means IGRP is preferred over RIP

---

## Output (if any)

Example:

```text
I 192.168.1.0/24 [100/10] via 192.168.1.1
R 192.168.2.0/24 [120/1] via 192.168.1.2
```

---

## Common Mistakes

- ❌ Thinking RIP is better for large networks
- ❌ Ignoring AD when comparing protocols
- ❌ Forgetting IGRP uses multiple metrics

---

## Short Exam Notes (very concise revision points)

- RIP → simple, small networks
- IGRP → advanced, larger networks
- RIP AD = 120, IGRP AD = 100
- RIP = hop count, IGRP = bandwidth + delay
