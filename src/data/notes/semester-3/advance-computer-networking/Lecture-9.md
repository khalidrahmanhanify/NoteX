---
title: Cisco IOS and Switch Fundamentals
description: Learn Cisco IOS, switch architecture, interfaces, boot process, basic configuration, DHCP, and Telnet.
lecture: Lecture 9
semester: semester-3
subject: advance-computer-networking
date: 2026-06-11
order: 8
---

---

# Cisco IOS and Switch Fundamentals

## Definition

**Cisco IOS (Internetwork Operating System)** is the operating system used on Cisco routers and switches. It manages hardware resources, provides networking services, and allows administrators to configure and monitor network devices.

---

# Cisco IOS

## Definition

Cisco IOS (Internetwork Operating System) is the core software that controls Cisco networking devices such as routers and switches.

---

## Key Points

- **IOS** stands for **Internetwork Operating System**.
- It is a **proprietary operating system** developed by Cisco.
- Manages hardware resources such as CPU, memory, and interfaces.
- Provides:
  - Routing
  - Switching
  - Network management
  - Telecommunication services

- The first Cisco IOS was written by **William Yeager** in **1986**.

---

## Explanation

Cisco IOS acts as the bridge between the hardware and the administrator.

It allows administrators to:

- Configure network interfaces
- Create routing tables
- Configure VLANs
- Manage users and passwords
- Troubleshoot network problems

Without IOS, Cisco devices cannot perform networking functions.

---

# Cisco Switch Internals

## Definition

A Cisco switch contains several memory components, each responsible for storing different types of information.

---

## Key Points

| Component        | Function                                                                                                          |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| **CPU**          | Executes IOS instructions and processes network traffic.                                                          |
| **RAM**          | Stores the running configuration, routing tables, and temporary data. Contents are lost when power is turned off. |
| **ROM**          | Stores the bootstrap program and Power-On Self-Test (POST) diagnostics.                                           |
| **NVRAM**        | Stores the startup configuration that remains after power loss.                                                   |
| **Flash Memory** | Stores the Cisco IOS operating system.                                                                            |

---

## Memory Summary

| Memory | Stores                | Power Off |
| ------ | --------------------- | --------- |
| RAM    | Running Configuration | Lost      |
| ROM    | Bootstrap Program     | Retained  |
| NVRAM  | Startup Configuration | Retained  |
| Flash  | Cisco IOS             | Retained  |

---

## Explanation

When a switch starts:

1. ROM runs hardware diagnostics.
2. IOS is loaded from Flash into RAM.
3. Startup configuration is copied from NVRAM into RAM.
4. The configuration in RAM becomes the **Running Configuration**.

---

# Switch Interfaces

## Definition

Switch interfaces are physical ports used for connecting devices or managing the switch.

---

## LAN Interfaces

These ports are used for data communication.

| Interface            |              Speed |
| -------------------- | -----------------: |
| Ethernet             |            10 Mbps |
| Fast Ethernet        |           100 Mbps |
| Gigabit Ethernet     | 1 Gbps (1000 Mbps) |
| 10 Gigabit Ethernet  |            10 Gbps |
| 40 Gigabit Ethernet  |            40 Gbps |
| 100 Gigabit Ethernet |           100 Gbps |

Typical devices connected:

- Routers
- Switches
- Bridges
- Hubs
- PCs
- Servers

---

## Management Interfaces

These interfaces are used to configure the switch.

### Console Port

- Used for initial configuration.
- Uses a **console cable**.
- One side connects to the switch (RJ-45 or USB on newer models).
- The other side connects to the computer.
- Requires terminal software such as:
  - PuTTY
  - Tera Term
  - HyperTerminal (older Windows versions)

---

### Auxiliary (AUX) Port

- Primarily used with a modem for remote management.
- Rarely used today.

---

# Accessing a Cisco Switch

There are several methods to access and configure a Cisco switch.

| Method            | Purpose                                                                 |
| ----------------- | ----------------------------------------------------------------------- |
| Console Port      | Local configuration                                                     |
| AUX Port          | Remote modem access                                                     |
| Telnet            | Remote configuration over the network                                   |
| SSH               | Secure remote configuration (recommended)                               |
| SDM/Web Interface | Browser-based graphical configuration (supported on some Cisco devices) |

> **Note:** Modern Cisco devices generally use **SSH** instead of **Telnet** because SSH encrypts communication.

---

# Switch Boot Process

## Definition

The boot process is the sequence the switch follows when it powers on.

---

## Steps

### 1. POST (Power-On Self-Test)

The switch checks:

- CPU
- RAM
- Flash
- Interfaces

to ensure the hardware is functioning correctly.

---

### 2. Load Cisco IOS

The switch copies the IOS image from **Flash Memory** into **RAM**.

---

### 3. Load Startup Configuration

The startup configuration is copied from **NVRAM** into **RAM**.

After loading, it becomes the **Running Configuration**.

---

### 4. Search for Configuration

If no startup configuration exists:

- The switch attempts to locate a configuration file from a **TFTP Server**.
- If unsuccessful, it enters **Setup Mode**.

---

## Setup Mode

Setup Mode is an interactive configuration wizard.

Enter Setup Mode:

```bash
setup
```

Exit Setup Mode:

```text
Ctrl + C
```

---

# Cisco CLI Modes

Cisco devices use different command modes.

---

## 1. User EXEC Mode

Prompt:

```text
Switch>
```

Purpose:

- Basic monitoring
- Limited commands

Enter Privileged Mode:

```bash
enable
```

Exit:

```bash
logout
```

---

## 2. Privileged EXEC Mode

Prompt:

```text
Switch#
```

Purpose:

- View configurations
- Save configurations
- Reload the device
- Access configuration mode

Return to User Mode:

```bash
disable
```

---

## 3. Global Configuration Mode

Prompt:

```text
Switch(config)#
```

Purpose:

- Configure the entire device.

Enter:

```bash
configure terminal
```

or

```bash
conf t
```

Exit:

```bash
exit
```

or

```text
Ctrl + Z
```

---

# Basic Cisco Commands

## Enter Configuration Mode

```bash
Switch> enable
Switch# configure terminal
```

---

## Set Hostname

```bash
Switch(config)# hostname R1
```

Changes the device name to **R1**.

---

## Configure Enable Password

```bash
Switch(config)# enable password 123
```

Stores the password in plain text.

---

## Configure Enable Secret

```bash
Switch(config)# enable secret 1234
```

Stores the password in encrypted form.

> **Enable Secret** is preferred because it is encrypted.

---

# Configure Console Password

```bash
Switch(config)# line console 0
Switch(config-line)# password 123456
Switch(config-line)# login
```

### Explanation

| Command          | Purpose                           |
| ---------------- | --------------------------------- |
| `line console 0` | Enters console configuration mode |
| `password`       | Sets the console password         |
| `login`          | Enables password checking         |

---

# Configure an Interface

```bash
Switch(config)# interface FastEthernet0/0
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config-if)# description Third Floor Office
Switch(config-if)# no shutdown
```

### Explanation

| Command       | Purpose               |
| ------------- | --------------------- |
| `interface`   | Selects the interface |
| `ip address`  | Assigns an IP address |
| `description` | Adds a description    |
| `no shutdown` | Enables the interface |

---

# Configure Telnet

```bash
Switch(config)# line vty 0 4
Switch(config-line)# password 12345
Switch(config-line)# login
```

### Explanation

- Enables Telnet access.
- Configures a password for remote login.

> **Security Note:** Telnet sends passwords in plain text. Use **SSH** for secure remote management whenever possible.

---

# Save Configuration

```bash
Switch# write
```

or

```bash
Switch# copy running-config startup-config
```

Both commands save the running configuration into NVRAM.

---

# Show Commands

| Command                   | Purpose                                       |
| ------------------------- | --------------------------------------------- |
| `show version`            | Displays IOS version and hardware information |
| `show running-config`     | Displays the active configuration             |
| `show startup-config`     | Displays the saved configuration              |
| `show flash`              | Displays Flash memory contents                |
| `show ip interface brief` | Displays interface status and IP addresses    |
| `show interfaces`         | Displays detailed interface information       |
| `show ip route`           | Displays the routing table                    |

---

# Maintenance Commands

## Restart the Device

```bash
reload
```

---

## Copy Startup to Running Configuration

```bash
copy startup-config running-config
```

Loads the saved configuration into RAM.

---

## Backup IOS

```bash
copy flash tftp
```

Backs up the IOS image to a TFTP server.

---

## Backup Running Configuration

```bash
copy running-config tftp
```

Saves the running configuration to a TFTP server.

---

## Erase Startup Configuration

```bash
erase startup-config
```

Deletes the saved configuration from NVRAM.

---

# DHCP Server Configuration

## Definition

**DHCP (Dynamic Host Configuration Protocol)** automatically assigns IP configuration to client devices.

---

## Configuration Example

```bash
R1(config)# ip dhcp pool NET-POOL
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# dns-server 192.168.1.5
R1(dhcp-config)# domain-name Firewall.cx
R1(dhcp-config)# lease 9

R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.5
R1(config)# ip dhcp excluded-address 192.168.1.10
```

### Explanation

| Command            | Purpose                                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| `ip dhcp pool`     | Creates a DHCP pool                                                                            |
| `network`          | Defines the subnet                                                                             |
| `default-router`   | Specifies the default gateway _(correct command; the slide incorrectly uses `default-switch`)_ |
| `dns-server`       | Specifies the DNS server                                                                       |
| `domain-name`      | Sets the DNS domain (optional)                                                                 |
| `lease`            | Sets the lease duration (optional)                                                             |
| `excluded-address` | Prevents specific IP addresses from being assigned                                             |

---

## Verify DHCP

```bash
show ip dhcp binding
```

Displays IP addresses leased to clients.

---

# Debugging Commands

## Trace Route

```bash
traceroute 192.168.10.1
```

Displays the path packets take to reach the destination.

---

## Enable Debugging

```bash
debug all
```

Shows detailed debugging information.

---

## Disable Debugging

```bash
undebug all
```

Stops all debugging.

---

## CPU Utilization

```bash
show processes cpu
```

Displays CPU usage.

> **Note:** The lecture slide uses `show process`, but the common Cisco IOS command for CPU utilization is `show processes cpu`.

---

# Example Configuration

```bash
Switch> enable
Switch# configure terminal
Switch(config)# hostname R1
Switch(config)# enable secret Cisco123
Switch(config)# line console 0
Switch(config-line)# password Admin123
Switch(config-line)# login
Switch(config)# interface FastEthernet0/0
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config-if)# no shutdown
Switch# copy running-config startup-config
```

---

## Line-by-Line Explanation

| Command                              | Description                                |
| ------------------------------------ | ------------------------------------------ |
| `enable`                             | Enter Privileged EXEC mode                 |
| `configure terminal`                 | Enter Global Configuration mode            |
| `hostname R1`                        | Set the device name                        |
| `enable secret`                      | Configure an encrypted privileged password |
| `line console 0`                     | Configure the console port                 |
| `password`                           | Set the console password                   |
| `login`                              | Require password authentication            |
| `interface FastEthernet0/0`          | Select the interface                       |
| `ip address`                         | Assign an IP address                       |
| `no shutdown`                        | Enable the interface                       |
| `copy running-config startup-config` | Save the configuration                     |

---

## Common Mistakes

- Confusing **RAM** with **NVRAM**.
- Forgetting to save the configuration before rebooting.
- Using `enable password` instead of the more secure `enable secret`.
- Forgetting to use `no shutdown` after configuring an interface.
- Assuming Telnet is secure; prefer SSH for remote management.
- Not excluding gateway or server IP addresses from the DHCP pool.
- Forgetting that the running configuration is lost after a reboot unless it is saved to NVRAM.

---

# Short Exam Notes

- **Cisco IOS** is the operating system for Cisco routers and switches.
- **RAM** stores the running configuration (lost on power off).
- **NVRAM** stores the startup configuration.
- **Flash Memory** stores the IOS image.
- **ROM** stores the bootstrap program and POST diagnostics.
- Boot Process: **POST → Load IOS → Load Startup Configuration → Running Configuration**.
- CLI Modes: **User EXEC (`>`), Privileged EXEC (`#`), Global Configuration (`(config)#`)**.
- `enable` enters Privileged EXEC mode.
- `configure terminal` enters Global Configuration mode.
- `copy running-config startup-config` saves the current configuration.
- DHCP automatically assigns IP addresses, subnet masks, gateways, and DNS settings.
- Telnet provides remote access but is **not secure**; SSH is the recommended alternative.
