---
title: IP Addressing and IPv4 Classes
description: Introduction to IP addressing, IPv4 notation, subnet mask, IPv4 classes, APIPA, loopback, private and public IP addresses, and IP configuration.
lecture: Lecture 2
semester: semester-3
subject: advance-computer-networking
date: 2026-03-19
order: 15
---

# IP Addressing Fundamentals

## What is IP?

**IP (Internet Protocol)** is used to **identify a device on a network or the internet**.

There are **two versions of IP:**

### IPv4

- 32 bits
- Decimal format
- Example: `192.168.1.1`
- Total addresses: **2³² = 4.29 billion**

### IPv6

- 128 bits
- Hexadecimal format
- Example: `2001:0db8::1`
- Total addresses: **2¹²⁸ ≈ 3.4 × 10³⁸**

  **IPv6 has about 7.9 × 10²⁸ times more addresses than IPv4**

---

# IPv4 Address

IPv4 is a **32-bit address**.

These 32 bits are divided into **4 portions (octets)**.

Each octet:

- Contains **8 bits**
- Range: **0 – 255**

Format:

```
n.n.n.n
```

Example:

```
192.168.10.1
```

Minimum value:

```
00000000 = 0
```

Maximum value:

```
11111111 = 255
```

---

# Network Part and Host Part

Each IPv4 address has **two parts**:

## Network Part

- Identifies **network**
- Same for all devices in network
- Defined by **subnet mask**
- Contains **1s in subnet mask**

## Host Part

- Identifies **device**
- Must be **unique**
- Contains **0s in subnet mask**

Example:

IP:

```
192.168.20.12
```

Subnet mask:

```
255.255.255.0
```

Network part:

```
192.168.20
```

Host part:

```
12
```

---

# Subnet Mask

Subnet mask is used to **identify network and host part**.

Example:

IP address:

```
192.168.20.12
```

Subnet mask:

```
255.255.255.0
```

---

# Subnet Mask Notations

Subnet mask can be written in **three ways**

### Binary

```
11111111.00000000.00000000.00000000
```

### Decimal

```
255.0.0.0
```

### Slash notation (CIDR)

```
/8
```

---

# IPv4 Classes

## Class A

Range:

```
1 – 127
```

Subnet mask:

```
255.0.0.0
```

CIDR:

```
/8
```

Network bits: 8
Host bits: 24

Number of networks:

```
126
```

Hosts per network:

```
2^24 - 2 = 16,777,214
```

**-2 is for:**

- Network ID
- Broadcast address

Example:

Network ID:

```
120.0.0.0
```

Broadcast:

```
120.255.255.255
```

---

## Class B

Range:

```
128 – 191
```

Subnet mask:

```
255.255.0.0
```

CIDR:

```
/16
```

Number of networks:

```
2^14 = 16384
```

Hosts per network:

```
2^16 - 2 = 65534
```

---

## Class C

Range:

```
192 – 223
```

Subnet mask:

```
255.255.255.0
```

CIDR:

```
/24
```

Number of networks:

```
2^21 = 2,097,152
```

Hosts per network:

```
2^8 - 2 = 254
```

---

## Class D

Range:

```
224 – 239
```

Used for:

```
Multicast
```

**Class D is used for multicast, not host addressing**

---

## Class E

Range:

```
240 – 255
```

Used for:

- Experimental purposes
- Research
- Not public use

Reserved by:

```
IETF
```

---

# Loopback IP Address

Loopback IPv4:

```
127.0.0.0/8
```

Common loopback:

```
127.0.0.1
```

IPv6 loopback:

```
::1
```

Used for:

- Testing TCP/IP
- Testing network card
- Testing local machine

Also called:

```
localhost
```

---

# IP Configuration

IP can be assigned in **two ways**

## 1. Static IP (Manual)

Assigned manually.

Steps (Windows):

```
Run → ncpa.cpl
Ethernet → Properties
IPv4 → Properties
Uncheck "Obtain IP automatically"
```

Check IP:

```
ipconfig
```

Detailed:

```
ipconfig /all
```

---

# Default Gateway

Default gateway is the **IP address of router** used to access:

- Other networks
- Internet

Example:

```
192.168.1.1
```

---

# DNS Server

DNS = Domain Name System

DNS translates:

```
Domain → IP
IP → Domain
```

Example:

```
google.com → 8.8.8.8
```

---

# Dynamic IP Configuration (DHCP)

DHCP server automatically assigns:

- IP address
- Subnet mask
- Default gateway
- DNS server

Steps:

```
Run → ncpa.cpl
Ethernet → Properties
IPv4 → Properties
Check "Obtain IP automatically"
```

---

# APIPA

APIPA = Automatic Private IP Addressing

When DHCP fails:

- Computer assigns IP to itself

Range:

```
169.254.0.0 – 169.254.255.255
```

Characteristics:

- Temporary
- No internet access
- DHCP problem indicator
- Local communication only

---

# Private IP Addresses

Used inside LAN networks.

Reserved by **IANA**

Class A:

```
10.0.0.0 – 10.255.255.255
```

Class B:

```
172.16.0.0 – 172.31.255.255
```

Class C:

```
192.168.0.0 – 192.168.255.255
```

Used with:

```
NAT
```

---

# Public IP Addresses

Used on:

- Internet
- WAN networks

Characteristics:

- Globally unique
- Assigned by ISP
- Must be purchased

Everything **outside private ranges** is public.

---

# Why IPv4 Still Used

- Easy to understand
- Compatible with old systems
- Widely deployed
- Supported everywhere

IPv4 shortage solved by:

- NAT
- Subnetting

### NAT

Converts:

```
Private IP ↔ Public IP
```

### Subnetting

Divides:

```
Large network → Small networks
```
