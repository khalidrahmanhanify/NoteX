---
title: Routing
description: All about routing, static, dynamic and default routing and configuring static routing.
lecture: Lecture 5
semester: semester-3
subject: advance-computer-networking
date: 2026-04-03
order: 12
---

# IP Routing

## 1. Definition

- IP routing is the process of sending packets from a host on one network to another host on a different remote network through a router.
- Routers keep information about networks in a database called the **routing table**.
- Routers examine the **destination IP address** of a packet, determine the **next-hop address**, and forward the packet.
- Routers use routing tables to determine the next hop address to which the packet should be forwarded.

### ✅ Improved Explanation

- A router is used to connect **different networks**.
- Two devices are in **different networks** when:
  - They have **different network IDs**
  - OR different **subnet masks**
  - OR different **IP ranges**

**Example**

```
192.168.1.10 /24
192.168.2.10 /24
```

These are **different networks → Router required**

```
192.168.1.10 /24
192.168.1.20 /24
```

These are **same network → Switch is enough**

### Routing Table

- Routing table is the table where all network information connected to a router is stored.
- It works like a **database of routes** for the router.
- It contains:
  - Destination network
  - Subnet mask
  - Next hop
  - Interface
  - Metric (cost)

### Commands

To see routing table in router:

```
show ip route
```

To see MAC address table in switch:

```
show mac address-table
```

✅ **Correction:**
You wrote `sh mac-address-table` → correct Cisco syntax is:

```
show mac address-table
```

---

# Types of IP Routing

There are **three types of IP routing**:

1. Static Routing
2. Dynamic Routing
3. Default Routing

---

# 1. Static Routing

- In static routing, the administrator manually adds routes to the routing table.
- The administrator must configure **each router manually**.
- If any network change occurs, the administrator must update all routers.

✅ **Improved:** Static routing does **NOT update automatically**

### Advantages of Static Routing

- No CPU overhead on router
- More secure (only defined routes allowed)
- No bandwidth usage between routers
- Predictable routing path

### Disadvantages of Static Routing

- Requires full network knowledge
- Manual configuration on every router
- Not scalable
- Not suitable for large networks
- No automatic failover

### Static Routing Configuration

Example:

```
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2
```

Format:

```
ip route [destination network] [subnet mask] [next hop]
```

---

# 2. Dynamic Routing

Dynamic routing automatically learns routes using **routing protocols**.

Routers exchange routing information automatically.

### Examples of Dynamic Routing Protocols

- RIP
- OSPF
- EIGRP
- BGP

### Advantages

- Automatic updates
- Scalable
- Best path selection
- Automatic failover

### Disadvantages

- Uses CPU resources
- Uses bandwidth
- More complex configuration

---

# 3. Default Routing

Default routing is used when router **does not know the destination network**.

Router sends packet to **default route (gateway of last resort)**.

Example:

```
ip route 0.0.0.0 0.0.0.0 10.0.0.1
```

This means:

- Send **all unknown traffic** to `10.0.0.1`

Used in:

- Small networks
- Internet access
- Stub networks

---

# Quick Summary

| Routing Type | Manual | Automatic | Best For         |
| ------------ | ------ | --------- | ---------------- |
| Static       | Yes    | No        | Small networks   |
| Dynamic      | No     | Yes       | Large networks   |
| Default      | Manual | No        | Internet routing |

---

# Important Exam Notes

- Router connects **different networks**
- Switch connects **same network**
- Routing table stores **network paths**
- Static routing = manual
- Dynamic routing = automatic
- Default route = unknown destination route
