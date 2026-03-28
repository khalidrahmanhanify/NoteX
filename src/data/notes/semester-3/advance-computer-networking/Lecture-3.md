---
title: Cisco IOS and Switch
description: All about switch's and router's components, functions and basic commands of configuration.
lecture: Lecture 3
semester: semester-3
subject: advance-computer-networking
date: 2026-03-26
order: 14
---

# Cisco IOS

## IOS (Internetworking Operating System)

IOS is the basic and core software of a switch and router that **allocates resources and manages hardware**.

Cisco IOS is a **proprietary operating system** that provides routing, switching, internetworking, and telecommunication services.

**Cisco IOS is a proprietary operating system (not just a kernel)**

The first IOS was written by **William Yeager in 1986**.

In simple words, it is the **operating system for switches and routers (Layer 2 and Layer 3 devices).**

---

# Cisco Switch / Router Internals (Hardware)

## Components and Functions

### CPU

- Executes operating system instructions
- Controls switch/router operations

### RAM (Random Access Memory)

- Contains **running configuration**
- Stores **routing table**
- **Volatile memory** (data lost when power is off)

### ROM (Read Only Memory)

- Holds **diagnostic software**
- Stores **bootstrap program**
- Used during **startup process**

### NVRAM (Non-Volatile RAM)

- Stores **startup configuration**
- Includes:
  - IP address
  - Hostname
  - Passwords
  - Protocol settings

### Flash Memory

- Contains **Cisco IOS operating system**
- **Non-volatile** (not lost when power off)

---

# Switch Interfaces

## LAN Interfaces (Data Transfer)

Used for connecting devices to switch/router

- Ethernet — 10 Mbps
- Fast Ethernet — 100 Mbps
- Gigabit Ethernet — 1000 Mbps
- 10 Gigabit Ethernet — 10,000 Mbps
- 40 Gigabit Ethernet — 40,000 Mbps
- 100 Gigabit Ethernet — 100,000 Mbps

**Added:** These interfaces usually use **RJ-45** or **fiber ports**.

---

## Management Interfaces

Used for **switch configuration**

### Auxiliary Port (AUX)

- Used for modem connection
- Rarely used for configuration
- RJ-45 port

### Console Port

Used for **initial configuration**

- Console cable connects **switch to PC**
- One end: **RJ-45 → Switch console port**
- Other end: **Serial/USB → PC**
- Required software:
  - HyperTerminal
  - PuTTY
  - TeraTerm

---

# Connecting to a Switch

We can connect using:

1. Console port
2. Auxiliary port
3. Telnet (remote access)

**Cisco 2800 is a router series called ISR (Integrated Services Router)**

### SDM (Security Device Manager)

- Web-based management tool
- Allows **GUI configuration**
- Accessed through **web browser**

---

# Switch Boot Process

1. Switch runs **POST (Power On Self Test)**
2. Loads **IOS from Flash to RAM**
3. Loads **Startup Config from NVRAM to RAM**
4. Startup config becomes **Running Config**
5. If no startup config:
   - Switch sends **broadcast to find TFTP server**
   - If not found → enters **Setup Mode**

To enter setup mode manually:

```
Switch# setup
```

To exit setup mode:

```
Ctrl + C
```

---

# Three Main Modes of Switch/Router

## 1. User EXEC Mode

```
Switch>
```

- Basic monitoring commands
- Limited access
- Enter privileged mode:

```
enable
```

Exit session:

```
logout
```

---

## 2. Privileged EXEC Mode

```
Switch#
```

- Full monitoring access
- Can enter configuration mode

Return to user mode:

```
disable
```

---

## 3. Global Configuration Mode

```
Switch(config)#
```

Enter from privileged mode:

```
configure terminal
```

Shortcut:

```
conf t
```

Exit to privileged mode:

```
exit
```

OR

```
Ctrl + Z
```

---

# Basic Commands

## Mode Switching

```
R> enable
R# conf t
R(config)#
```

---

## Set Hostname

```
R(config)# hostname R1
```

---

## Set Enable Password (Plain Text)

```
R(config)# enable password 123
```

## Set Enable Secret (Encrypted)

```
R(config)# enable secret 1234
```

**Important:**
`enable secret` overrides `enable password`

---

# Console Password Configuration

```
R(config)# line console 0
R(config-line)# password 123456
R(config-line)# login
```

---

# Assign IP Address to Interface

```
R(config)# interface fastEthernet 0/0
R(config-if)# ip address 192.168.10.1 255.255.255.0
R(config-if)# description Third Floor of ATVI
R(config-if)# no shutdown
```

---

# Enable Telnet

```
R(config)# line vty 0 4
R(config-line)# password 12345
R(config-line)# login
```

---

# Save Configuration

```
R# write
```

OR

```
R# copy running-config startup-config
```

---

# Show Commands

Set Date and Time

```
R# clock set hh:mm:ss 25 June 2014
```

Show IOS version

```
R# show version
```

Show running configuration

```
R# show running-config
```

Show flash memory

```
R# show flash
```

Show IP interfaces

```
R# show ip interface brief
```

Show interfaces

```
R# show interfaces
```

Show routing table

```
R# show ip route
```

---

# Other Important Commands

Reload device

```
R# reload
```

Copy startup to running config

```
R# copy startup-config running-config
```

Backup IOS to TFTP

```
R# copy flash tftp
```

Backup running config to TFTP

```
R# copy running-config tftp
```

Show startup config

```
R# show startup-config
```

Erase startup config

```
R# erase startup-config
```

---

# DHCP Server Configuration

```
R1(config)# ip dhcp pool NET-POOL
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# dns-server 192.168.1.5
R1(dhcp-config)# domain-name example.com
R1(dhcp-config)# lease 9
```

Exclude addresses:

```
R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.5
R1(config)# ip dhcp excluded-address 192.168.1.10
```

Show DHCP bindings:

```
show ip dhcp binding
```

---

# Debugging Commands

Trace route

```
R# traceroute 192.168.10.1
```

Enable debugging

```
R# debug all
```

Stop debugging

```
R# undebug all
```

Show CPU usage

```
R# show process
```
