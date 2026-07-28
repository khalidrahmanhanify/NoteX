---
title: Internet Protocol (IP) and IPv4 Addressing
description: Learn IP addressing, IPv4 classes, subnet masks, IP configuration, and private/public IP addresses.
lecture: Lecture 2
semester: semester-3
subject: advance-computer-networking
date: 2026-03-19
order: 15
---

# Internet Protocol (IP) and IPv4 Addressing

## Definition

**Internet Protocol (IP)** is a network layer protocol used to uniquely identify devices on a network and enable communication between them. Every device connected to a network or the Internet must have an IP address.

---

## Key Points

### What is IP?

- **IP (Internet Protocol)** identifies devices on a network.
- It allows data packets to be delivered from a source to a destination.
- There are two major versions of IP:
  - **IPv4**
  - **IPv6**

| Version  | Address Length | Format      |       Total Addresses |
| -------- | -------------: | ----------- | --------------------: |
| **IPv4** |        32 bits | Decimal     | 2³² ≈ **4.3 billion** |
| **IPv6** |       128 bits | Hexadecimal | 2¹²⁸ ≈ **3.4 × 10³⁸** |

> **Why IPv6?**
> IPv6 was introduced because IPv4 addresses are limited and have nearly been exhausted due to the rapid growth of Internet-connected devices.

---

# IPv4

## Definition

**IPv4** is a **32-bit** address divided into **4 octets**, with each octet containing **8 bits**.

### IPv4 Format

```text
n.n.n.n
```

Example:

```text
192.168.20.12
```

Each octet ranges from **0 to 255**.

| Binary   | Decimal |
| -------- | ------: |
| 00000000 |       0 |
| 11111111 |     255 |

---

## Network Part and Host Part

Every IPv4 address consists of two parts.

### 1. Network Part

- Identifies the **network**.
- Must be the same for every device in the same network.
- Determined by the **subnet mask**.

### 2. Host Part

- Identifies an individual device.
- Must be unique within the network.

Example:

```text
IP Address : 192.168.20.12
Subnet Mask: 255.255.255.0
```

Here:

- **Network Part:** `192.168.20`
- **Host Part:** `12`

---

# Subnet Mask

## Definition

A **subnet mask** tells us which portion of an IP address represents the **network** and which portion represents the **host**.

Without the subnet mask, it is impossible to determine the network and host portions of an IPv4 address.

---

## Subnet Mask Notations

The same subnet mask can be written in three formats.

| Notation     | Example                             |
| ------------ | ----------------------------------- |
| Binary       | 11111111.00000000.00000000.00000000 |
| Decimal      | 255.0.0.0                           |
| CIDR (Slash) | /8                                  |

Example:

```text
255.255.255.0 = /24
```

---

# IPv4 Address Classes

## Class A

### Characteristics

| Property            | Value                                  |
| ------------------- | -------------------------------------- |
| First Octet         | 1–126 _(127 is reserved for loopback)_ |
| Default Subnet Mask | 255.0.0.0                              |
| CIDR                | /8                                     |
| Network Bits        | 8                                      |
| Host Bits           | 24                                     |
| Networks            | 126                                    |
| Hosts per Network   | 2²⁴ − 2 = 16,777,214                   |

### Reserved Addresses

Example network:

```text
120.0.0.0
```

Example broadcast:

```text
120.255.255.255
```

**Note**

- **Network ID (NID)** identifies the network.
- **Broadcast Address** sends data to every host on the network.
- Neither address can be assigned to a host.

---

## Class B

| Property            | Value        |
| ------------------- | ------------ |
| First Octet         | 128–191      |
| Default Subnet Mask | 255.255.0.0  |
| CIDR                | /16          |
| Network Bits        | 16           |
| Host Bits           | 16           |
| Networks            | 2¹⁴ = 16,384 |
| Hosts per Network   | 65,534       |

---

## Class C

| Property            | Value           |
| ------------------- | --------------- |
| First Octet         | 192–223         |
| Default Subnet Mask | 255.255.255.0   |
| CIDR                | /24             |
| Network Bits        | 24              |
| Host Bits           | 8               |
| Networks            | 2²¹ = 2,097,152 |
| Hosts per Network   | 254             |

---

## Class D

| Property | Value     |
| -------- | --------- |
| Range    | 224–239   |
| Purpose  | Multicast |

### Multicast

Multicast means sending data to a **specific group of devices** rather than to every device or to a single device.

Example:

A live online lecture sent only to students who joined a multicast group.

---

## Class E

| Property | Value                   |
| -------- | ----------------------- |
| Range    | 240–255                 |
| Purpose  | Experimental / Research |

These addresses are reserved by the **IETF (Internet Engineering Task Force)** and are not used for normal Internet communication.

---

## IPv4 Classes Summary

| Class | First Octet | Default Mask  | CIDR | Purpose         |
| ----- | ----------: | ------------- | ---- | --------------- |
| A     |       1–126 | 255.0.0.0     | /8   | Large networks  |
| B     |     128–191 | 255.255.0.0   | /16  | Medium networks |
| C     |     192–223 | 255.255.255.0 | /24  | Small networks  |
| D     |     224–239 | —             | —    | Multicast       |
| E     |     240–255 | —             | —    | Experimental    |

---

# Loopback IP Address

## Definition

A **loopback address** allows a computer to communicate with itself.

### IPv4 Loopback

```text
127.0.0.1
```

The entire **127.0.0.0/8** range is reserved for loopback, but **127.0.0.1** is the most commonly used address.

### IPv6 Loopback

```text
::1
```

### Uses

- Testing the TCP/IP stack
- Testing applications
- Diagnosing networking issues
- Verifying the network interface without using physical hardware

---

# IP Configuration

Devices can receive IP addresses in two ways.

---

## 1. Static (Manual) Configuration

### Definition

The administrator manually configures:

- IP Address
- Subnet Mask
- Default Gateway
- DNS Server

### Windows Steps

```text
Run → ncpa.cpl
→ Network Adapter
→ Properties
→ Internet Protocol Version 4 (TCP/IPv4)
→ Properties
→ Select "Use the following IP address"
```

To view configuration:

```cmd
ipconfig
```

Detailed information:

```cmd
ipconfig /all
```

### Advantages

- Stable address
- Good for servers, printers, and routers

### Disadvantages

- Requires manual configuration
- Prone to configuration errors

---

## 2. Dynamic (Automatic) Configuration

### Definition

A **DHCP (Dynamic Host Configuration Protocol)** server automatically assigns:

- IP Address
- Subnet Mask
- Default Gateway
- DNS Server

### Windows Steps

```text
Run → ncpa.cpl
→ Network Adapter
→ Properties
→ IPv4
→ Select "Obtain an IP address automatically"
```

### Advantages

- Automatic configuration
- Easy management
- Reduces human error

### Disadvantages

- Depends on a functioning DHCP server

---

# Default Gateway

## Definition

A **Default Gateway** is the IP address of a **router** (or another gateway device) that forwards packets from the local network to other networks, including the Internet.

Example:

```text
PC → Router → Internet
```

Without a default gateway, devices can usually communicate only within their own local network.

---

# DNS Server

## Definition

**DNS (Domain Name System)** translates:

- Domain names → IP addresses
- IP addresses → Domain names (reverse lookup)

Example:

```text
www.google.com
        ↓
142.250.x.x
```

Without DNS, users would need to remember IP addresses instead of domain names.

---

# APIPA

## Definition

**APIPA (Automatic Private IP Addressing)** automatically assigns an IP address when a device cannot contact a DHCP server.

### Range

```text
169.254.0.0 – 169.254.255.255
```

### Characteristics

- Automatically assigned
- Temporary
- Indicates a DHCP problem
- Supports limited local communication only
- Does **not** provide normal Internet connectivity

---

# Private IP Addresses

## Definition

Private IP addresses are reserved for **internal (LAN)** communication and are **not routable on the public Internet**.

They are typically used behind a **Network Address Translation (NAT)** device.

### Private IPv4 Ranges

| Class | Range                         |
| ----- | ----------------------------- |
| A     | 10.0.0.0 – 10.255.255.255     |
| B     | 172.16.0.0 – 172.31.255.255   |
| C     | 192.168.0.0 – 192.168.255.255 |

These ranges are reserved by **IANA (Internet Assigned Numbers Authority)**.

Example:

```text
192.168.1.15
```

---

# Public IP Addresses

## Definition

A **Public IP address** is globally unique and reachable over the Internet.

### Characteristics

- Assigned by an Internet Service Provider (ISP).
- Used on the Internet and WANs.
- Must be globally unique.
- Can communicate with other public IP addresses.

Example:

```text
8.8.8.8
```

---

# Why Is IPv4 Still Used?

Although IPv6 provides a vastly larger address space, IPv4 remains widely used because:

- It is simple and familiar.
- Most existing networks support IPv4.
- Many devices and applications still rely on it.
- Technologies such as **NAT** and **Subnetting** help extend the useful life of IPv4.

---

# NAT (Network Address Translation)

## Definition

**NAT** translates **private IP addresses** into **public IP addresses**, allowing many devices on a local network to share a single public IP.

Example:

```text
Private IP
192.168.1.10
      ↓
Router (NAT)
      ↓
Public IP
203.x.x.x
```

---

# Subnetting

## Definition

**Subnetting** is the process of dividing one large network into multiple smaller subnetworks (subnets).

### Benefits

- Better performance
- Improved security
- Efficient IP address usage
- Easier network management

---

## Example / Code

### Display IP Configuration (Windows)

```cmd
ipconfig
```

**Explanation**

- `ipconfig` displays the current IP configuration of network adapters.

---

### Display Detailed Information

```cmd
ipconfig /all
```

**Explanation**

- Shows:
  - IP Address
  - MAC Address
  - DHCP Status
  - DNS Servers
  - Default Gateway
  - Lease Information

---

## Common Mistakes

- Confusing an **IP address** with a **MAC address**.
- Assuming **127.0.0.1** communicates with other devices (it only refers to the local machine).
- Thinking **private IP addresses** are accessible directly from the Internet.
- Believing **APIPA** provides Internet access.
- Forgetting that the subnet mask determines the network and host portions of an IP address.
- Assuming **Class D** and **Class E** addresses can be assigned to hosts.

---

## Short Exam Notes

- **IP:** Identifies devices on a network.
- **IPv4:** 32-bit decimal address (4 octets).
- **IPv6:** 128-bit hexadecimal address.
- **Subnet Mask:** Identifies the network and host portions of an IP address.
- **Class A:** 1–126, `/8`
- **Class B:** 128–191, `/16`
- **Class C:** 192–223, `/24`
- **Class D:** 224–239 (Multicast)
- **Class E:** 240–255 (Experimental)
- **Loopback IPv4:** `127.0.0.1`
- **Loopback IPv6:** `::1`
- **APIPA Range:** `169.254.0.0/16`
- **Private IP Ranges:** `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`
- **Static IP:** Configured manually.
- **Dynamic IP:** Assigned automatically by DHCP.
- **Default Gateway:** Connects a local network to other networks.
- **DNS:** Converts domain names to IP addresses.
- **NAT:** Translates private IPs to public IPs.
- **Subnetting:** Divides a large network into smaller subnetworks.
