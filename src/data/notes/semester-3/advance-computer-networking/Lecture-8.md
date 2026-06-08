---
title: EIGRP (Enhanced Interior Gateway Routing Protocol)
description: All about EIGRP, EIGRP Characteristics, EIGRP Dual, EIGRP AS Number and etc.
lecture: Lecture 8
semester: semester-3
subject: advance-computer-networking
date: 2026-06-04
order: 9
---

# EIGRP Characteristics

- Enhanced Interior Gateway Routing Protocol
- EIGRP is resulting from IGRP
- EIGRP was a Cisco proprietary protocol initially but now it is an open standard Hybrid routing protocol.
- Also called advance distance vector protocol
- Classless:

- AD Value: Internal EIGRP 90, External EIGRP 170
- Uses bandwidth, delay, load, reliability as metric; Bandwidth and Delay by default
- Multi protocol support: IPv4, IPv6, IPX, Apple Talk
- Uses hello packets to discover the neighbors
- EIGRP uses the DUAL (Defusing Update Algorithm)

# EIGPR DUAL

- DUAL is used to:
  - Determine best path to a destination
  - Find out loop-free backup routes
  - Facilitates faster convergence
- EIGRP takes 3 steps for network convergence:
  - Forms neighbor relationship
  - Exchange of topology information
  - Routing table propagation using DUAL
- Auto-summary is enabled by default.
- Purpose of DUAL
  - To prevent routing loops loop-free backup route, faster convergence
- Successor
  - Primary route to a destination
- Feasible successor
  - Backup route to a destination

# AS Number & RTP

- All routers who are supposed to exchange routing information must have the same AS (Autonomous Number) number
- All routers and networks under a single authority uses the same AS number that ranges from 1 - 65535
- EIGRP uses RTP (Reliable Transport Protocol) for exchange of routing information
- RTP supports both reliable and unreliable updates
- EIGRP message types: Hello Packet, Query Packet, Update packets, acknowledgement packets, reply packets.

# EIGRP Neighborship

- For two routers to become adjacent or neighbors:
  - Active hello
  - AS number matched
  - K values matched (`#show interfaces`)
  - Authentication matched
- K values are:
  - Bandwidth (default: `k1`)
  - Delay (default: `k2`)
  - Reliability (default: `k3`)
  - Load (default: `k4`)
  - MTU (not used: `k5`)

# Troubleshooting Tip

- If two routers fail to become neighbors, one of the followings can be the reason:
  - Mismatched EIGRP Authentication Parameters (if configured)
  - Mismatched EIGRP K values (Metric)
  - Mismatched EIGRP Autonomous System (AS) Number
  - The neighbors are not on a common subnet
  - The hello interval is short and expires before it reaches to the neighbor

# EIGRP Updates

- Sends complete routing table for the first time and later on use partial and bounded updates
- Non-periodic updates; minimizes bandwidth utilization
- Updates can be sent as a unicast or multicast 224.0.0.10
- Uses RTP for exchange of routing updates
