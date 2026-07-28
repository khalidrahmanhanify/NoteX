---
title: Cisco IOS and Switch Fundamentals
description: Learn Cisco IOS, switch hardware, boot process, interfaces, configuration commands, DHCP, and Telnet.
lecture: Lecture 3
semester: semester-3
subject: advance-computer-networking
date: 2026-03-26
order: 14
---

# Cisco IOS and Switch Fundamentals

## Definition

**Cisco IOS (Internetwork Operating System)** is the operating system used on Cisco routers and switches. It manages hardware resources, provides networking services, and allows administrators to configure and monitor network devices.

---

## Key Points

### What is Cisco IOS?

- **IOS** stands for **Internetwork Operating System**.
- It is the core software that runs Cisco routers and switches.
- Responsible for:
  - Managing hardware resources
  - Routing and switching
  - Network communication
  - Security features
  - Device configuration

- Cisco IOS is **proprietary software** developed by Cisco.
- The first Cisco IOS was written by **William Yeager** in **1986**.

---

# Cisco Switch Hardware (Internals)

A Cisco switch contains several memory components, each with a specific purpose.

| Component                      | Function                                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **CPU**                        | Executes IOS instructions and processes network traffic.                                                         |
| **RAM (Random Access Memory)** | Stores the running configuration, routing tables, and active processes. Contents are lost when power is removed. |
| **ROM (Read-Only Memory)**     | Stores the bootstrap program and diagnostic software (POST).                                                     |
| **NVRAM (Non-Volatile RAM)**   | Stores the startup configuration that is retained after power loss.                                              |
| **Flash Memory**               | Stores the Cisco IOS operating system and other system files.                                                    |

---

## Cisco Memory Summary

| Memory | Stores                  | Lost After Power Off? |
| ------ | ----------------------- | --------------------- |
| RAM    | Running Configuration   | ✅ Yes                |
| ROM    | Bootstrap & Diagnostics | ❌ No                 |
| NVRAM  | Startup Configuration   | ❌ No                 |
| Flash  | Cisco IOS               | ❌ No                 |

---

# Switch Interfaces

## LAN Interfaces

LAN interfaces connect network devices such as:

- Routers
- Switches
- Bridges
- Hubs
- Computers

These ports typically use **RJ-45 Ethernet connectors**.

### Ethernet Standards

| Interface            |              Speed |
| -------------------- | -----------------: |
| Ethernet             |            10 Mbps |
| Fast Ethernet        |           100 Mbps |
| Gigabit Ethernet     | 1 Gbps (1000 Mbps) |
| 10 Gigabit Ethernet  |            10 Gbps |
| 40 Gigabit Ethernet  |            40 Gbps |
| 100 Gigabit Ethernet |           100 Gbps |

---

## Management Interfaces

Management interfaces are used to configure and manage the switch.

### Console Port

- Used for initial configuration.
- Works even if the switch has no IP address.
- Requires a **console cable**.

Console cable:

```text
PC
 │
Serial/USB
 │
Console Cable
 │
RJ-45
 │
Cisco Switch Console Port
```

Common terminal software:

- PuTTY
- HyperTerminal
- Tera Term
- SecureCRT

---

### Auxiliary (AUX) Port

- Primarily used for remote management through a modem.
- Less common today.

---

# Methods of Connecting to a Cisco Switch

Administrators can connect using:

| Method                        | Description                                                          |
| ----------------------------- | -------------------------------------------------------------------- |
| Console Port                  | Direct local configuration                                           |
| Auxiliary Port                | Remote configuration via modem                                       |
| Telnet                        | Remote command-line access over the network                          |
| SDM (Security Device Manager) | Web-based graphical management (supported on some Cisco ISR devices) |

> **Note:** Modern Cisco devices commonly use **Cisco Configuration Professional (CCP)** or web interfaces instead of the older SDM.

---

# Cisco Switch Boot Process

When a Cisco switch powers on, it follows these steps:

### Step 1 – POST

**POST (Power-On Self-Test)** checks:

- CPU
- RAM
- Flash
- Hardware components

If POST fails, the device reports hardware errors.

---

### Step 2 – Load Cisco IOS

The IOS image is copied from **Flash Memory** into **RAM**.

---

### Step 3 – Load Startup Configuration

The startup configuration stored in **NVRAM** is copied into **RAM**.

Once loaded into RAM, it becomes the **Running Configuration**.

---

### Step 4 – No Startup Configuration?

If no startup configuration exists:

1. The switch attempts to locate a **TFTP server**.
2. If unsuccessful, it enters **Setup Mode** to guide the administrator through initial configuration.

---

## Setup Mode

Enter Setup Mode:

```text
Switch# setup
```

Exit Setup Mode:

```text
Ctrl + C
```

---

# Cisco CLI Modes

Cisco devices use different command modes.

## 1. User EXEC Mode

Prompt:

```text
Switch>
```

### Purpose

- Basic monitoring commands
- Limited access
- Cannot change configuration

### Commands

```text
enable
logout
```

---

## 2. Privileged EXEC Mode

Prompt:

```text
Switch#
```

### Purpose

- View configurations
- Execute administrative commands
- Access configuration mode

Enter:

```text
enable
```

Return to User EXEC:

```text
disable
```

---

## 3. Global Configuration Mode

Prompt:

```text
Switch(config)#
```

Enter:

```text
configure terminal
```

or

```text
conf t
```

Exit:

```text
exit
```

or

```text
Ctrl + Z
```

---

## Cisco CLI Hierarchy

```text
User EXEC
     │
 enable
     ▼
Privileged EXEC
     │
configure terminal
     ▼
Global Configuration
     │
Interface / Line / Router Modes
```

---

# Basic Cisco Commands

## Change Hostname

```bash
Switch(config)# hostname R1
```

**Explanation**

- `hostname` changes the device name.

---

## Configure Enable Password

```bash
Switch(config)# enable password 123
```

Stores the password in plain text (not recommended).

---

## Configure Encrypted Enable Password

```bash
Switch(config)# enable secret 1234
```

- Encrypts the privileged mode password.
- Takes precedence over `enable password`.
- Recommended for security.

---

# Configure Console Password

```bash
Switch(config)# line console 0
Switch(config-line)# password 123456
Switch(config-line)# login
```

### Line-by-Line Explanation

| Command           | Purpose                           |
| ----------------- | --------------------------------- |
| `line console 0`  | Enters console configuration mode |
| `password 123456` | Sets the console password         |
| `login`           | Requires password authentication  |

---

# Configure an Interface

```bash
Switch# configure terminal
Switch(config)# interface fastEthernet0/0
Switch(config-if)# ip address 192.168.10.1 255.255.255.0
Switch(config-if)# description Third Floor Network
Switch(config-if)# no shutdown
```

### Explanation

| Command                     | Purpose               |
| --------------------------- | --------------------- |
| `interface fastEthernet0/0` | Selects the interface |
| `ip address`                | Assigns an IP address |
| `description`               | Adds documentation    |
| `no shutdown`               | Enables the interface |

---

# Configure Telnet

```bash
Switch(config)# line vty 0 4
Switch(config-line)# password 12345
Switch(config-line)# login
```

### Explanation

- `line vty 0 4` configures the first five virtual terminal lines.
- `password` sets the Telnet password.
- `login` enables password authentication.

> **Note:** Telnet sends data, including passwords, in plain text. **SSH** is recommended for secure remote access.

---

# Save Configuration

## Method 1

```bash
Switch# write
```

## Method 2 (Preferred)

```bash
Switch# copy running-config startup-config
```

This copies the running configuration in RAM to NVRAM so it persists after a reboot.

---

# Useful Show Commands

| Command                   | Purpose                                    |
| ------------------------- | ------------------------------------------ |
| `show version`            | Displays IOS version and hardware details  |
| `show running-config`     | Displays current configuration             |
| `show startup-config`     | Displays saved configuration               |
| `show flash`              | Lists files stored in Flash memory         |
| `show ip interface brief` | Displays interface status and IP addresses |
| `show interfaces`         | Displays detailed interface information    |

---

# Other Administrative Commands

## Set Date and Time

```bash
Switch# clock set HH:MM:SS DAY MONTH YEAR
```

Example:

```bash
Switch# clock set 10:30:00 25 June 2026
```

---

## Reload Device

```bash
Switch# reload
```

Restarts the switch.

---

## Erase Startup Configuration

```bash
Switch# erase startup-config
```

Deletes the saved configuration from NVRAM.

---

## Backup IOS to TFTP

```bash
Switch# copy flash tftp
```

Copies the IOS image to a TFTP server.

---

## Backup Running Configuration

```bash
Switch# copy running-config tftp
```

Saves the current configuration to a TFTP server.

---

# DHCP Server Configuration

## Example

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

> **Correction:** The correct Cisco command is **`default-router`**, not **`default-switch`**.

---

## Line-by-Line Explanation

| Command                    | Purpose                                         |
| -------------------------- | ----------------------------------------------- |
| `ip dhcp pool NET-POOL`    | Creates a DHCP pool                             |
| `network`                  | Defines the network served by DHCP              |
| `default-router`           | Specifies the default gateway for clients       |
| `dns-server`               | Specifies the DNS server                        |
| `domain-name`              | Assigns a DNS domain (optional)                 |
| `lease`                    | Sets lease duration (optional)                  |
| `ip dhcp excluded-address` | Prevents specific addresses from being assigned |

---

## View DHCP Assignments

```bash
show ip dhcp binding
```

Displays all leased IP addresses.

---

# Debugging Commands

## Trace Route

```bash
traceroute 192.168.10.1
```

Shows the path packets take to reach a destination.

---

## Enable Debugging

```bash
debug all
```

Displays detailed debugging information.

---

## Stop Debugging

```bash
undebug all
```

Stops all debugging processes.

---

## CPU Usage

```bash
show processes cpu
```

Displays CPU utilization.

> The lecture uses `show process`; however, `show processes cpu` is the standard Cisco IOS command for CPU usage.

---

## Example / Code

### Configure Hostname

```bash
Switch(config)# hostname Branch1
```

Changes the switch hostname to **Branch1**.

---

### Save Configuration

```bash
Switch# copy running-config startup-config
```

Copies the running configuration into NVRAM.

---

### View Interfaces

```bash
Switch# show ip interface brief
```

Displays:

- Interface names
- Assigned IP addresses
- Interface status
- Protocol status

---

## Common Mistakes

- Forgetting to save the configuration before rebooting.
- Confusing **RAM** (running configuration) with **NVRAM** (startup configuration).
- Using `enable password` instead of the more secure `enable secret`.
- Forgetting `no shutdown`, leaving interfaces administratively down.
- Attempting to use Telnet without configuring VTY lines.
- Confusing the **Console port** with an Ethernet port.
- Assuming Telnet is secure; prefer SSH for remote management.
- Typing `show ip interface brierf`; the correct command is `show ip interface brief`.

---

## Short Exam Notes

- **Cisco IOS:** Operating system for Cisco routers and switches.
- **RAM:** Running configuration; volatile.
- **ROM:** Bootstrap program and diagnostics.
- **NVRAM:** Startup configuration; non-volatile.
- **Flash:** Stores Cisco IOS.
- **Boot Process:** POST → Load IOS → Load Startup Config → Setup Mode (if needed).
- **User EXEC:** `Switch>`
- **Privileged EXEC:** `Switch#`
- **Global Configuration:** `Switch(config)#`
- `enable` → Enter privileged mode.
- `configure terminal` → Enter global configuration mode.
- `hostname` → Change device name.
- `enable secret` → Configure encrypted privileged password.
- `line console 0` → Configure console access.
- `line vty 0 4` → Configure Telnet access.
- `no shutdown` → Enable an interface.
- `copy running-config startup-config` → Save configuration.
- `show version` → Display IOS information.
- `show ip interface brief` → View interface summary.
- **DHCP** automatically assigns IP settings to clients.
- **Telnet** enables remote CLI access but is insecure; **SSH** is preferred.
