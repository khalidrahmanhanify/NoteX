---
title: Switch Port Security
description: Learn how to secure switch ports using MAC address restrictions and violation settings.
lecture: Lecture 11
semester: semester-3
subject: advance-computer-networking
date: 2026-06-25
order: 6
---

---

# Switch Port Security

## Definition

**Switch Port Security** is a Cisco switch security feature that restricts which devices can connect to a specific switch port by using their **MAC addresses**.

It prevents unauthorized devices from sending frames through protected switch ports.

---

## Key Points

- Normally, any device can connect to any available switch port.
- Port security allows administrators to control which devices are allowed on a port.
- Devices are identified using their **MAC addresses**.
- Unauthorized devices cannot send frames through a secured port.
- Port security can only be configured on an **access port**.
- It is commonly used on:
  - User access ports
  - Office networks
  - Small enterprise environments

---

# How Switch Port Security Works

## Explanation

Without port security:

```
Any Device → Switch Port → Network Access
```

Any device connected to the port can communicate.

With port security:

```
Allowed MAC Address → Switch Port → Network Access
```

Only devices with approved MAC addresses can send frames.

---

## Example

A switch port is configured to allow:

```text
MAC Address:
0000.12cb.f902
```

If another device connects:

```text
MAC Address:
0000.abcd.1234
```

The switch blocks that device based on the configured violation action.

---

# Switch Port Security Configuration

## Step 1: Configure Access Mode

```bash
SW(config-if)# switchport mode access
```

### Explanation

- Changes the interface to an access port.
- Required before enabling port security.

---

## Step 2: Enable Port Security

```bash
SW(config-if)# switchport port-security
```

### Explanation

Enables switch port security on the interface.

---

## Step 3: Set Maximum Allowed MAC Addresses

```bash
SW(config-if)# switchport port-security maximum 1
```

### Explanation

- Defines the maximum number of MAC addresses allowed on the port.
- In this example, only one device is allowed.

---

## Step 4: Manually Configure Allowed MAC Address

```bash
SW(config-if)# switchport port-security mac-address 0000.12cb.f902
```

### Explanation

Allows only the device with this MAC address to use the port.

---

## Step 5: Enable Sticky MAC Learning

```bash
SW(config-if)# switchport port-security mac-address sticky
```

### Explanation

- Automatically learns the connected device's MAC address.
- Adds the learned MAC address to the running configuration.
- Useful when administrators do not want to manually type MAC addresses.

---

## Step 6: Configure Violation Action

```bash
SW(config-if)# switchport port-security violation shutdown
```

### Explanation

Defines what happens when an unauthorized device connects.

---

# Port Security Violation Modes

| Mode         | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| **Shutdown** | Port enters error-disabled state and stops forwarding traffic. |
| **Restrict** | Drops unauthorized frames and generates alerts.                |
| **Protect**  | Drops unauthorized frames without notifications.               |

---

# Verify Port Security

Command:

```bash
SW# show port-security interface ethernet 0/0
```

Displays:

- Port security status
- Maximum MAC addresses
- Current secure MAC addresses
- Violation count
- Violation mode

---

# Default Switch Configuration

## Definition

Cisco switches have default settings applied when they are first configured.

---

## Default Settings

| Feature           | Default Configuration         |
| ----------------- | ----------------------------- |
| Switch Ports      | Enabled (up)                  |
| Trunk Negotiation | Automatic negotiation enabled |
| Spanning Tree     | Enabled                       |
| Default VLAN      | VLAN 1                        |
| VTP Mode          | Server                        |
| Built-in VLANs    | VLAN 1 and VLANs 1002–1005    |

---

# Explanation of Default Settings

## Ports Up

- Switch interfaces are enabled by default.
- They can immediately transmit and receive traffic.

---

## Automatic Trunk Negotiation

- Ports attempt to negotiate trunk connections automatically using DTP.
- Administrators often disable this for security reasons.

---

## Spanning Tree Enabled

- STP is enabled by default.
- Prevents Layer 2 switching loops.

---

## VLAN 1

- All switch ports belong to VLAN 1 by default.
- VLAN 1 is the default management VLAN.

---

## VTP Server Mode

- New Cisco switches operate in VTP Server mode by default.
- VTP allows VLAN information to be shared between switches.

---

# Example Configuration

```bash
SW(config)# interface fastEthernet 0/1
SW(config-if)# switchport mode access
SW(config-if)# switchport port-security
SW(config-if)# switchport port-security maximum 1
SW(config-if)# switchport port-security mac-address sticky
SW(config-if)# switchport port-security violation shutdown
```

---

## Line-by-Line Explanation

| Command                      | Purpose                                                    |
| ---------------------------- | ---------------------------------------------------------- |
| `interface fastEthernet 0/1` | Selects the switch port to configure.                      |
| `switchport mode access`     | Converts the port into access mode.                        |
| `switchport port-security`   | Enables port security.                                     |
| `maximum 1`                  | Allows only one MAC address.                               |
| `mac-address sticky`         | Learns and saves the connected MAC address automatically.  |
| `violation shutdown`         | Disables the port when an unauthorized device is detected. |

---

## Common Mistakes

- Applying port security to a trunk port instead of an access port.
- Forgetting to configure `switchport mode access` first.
- Allowing too many MAC addresses on a user port.
- Using shutdown violation mode without knowing that the port enters an error-disabled state.
- Forgetting to verify the configuration using `show port-security`.
- Assuming port security encrypts traffic; it only controls device access.

---

# Short Exam Notes

- **Switch Port Security:** Restricts devices allowed on switch ports using MAC addresses.
- Works on **access ports only**.
- Main configuration commands:
  - `switchport mode access`
  - `switchport port-security`
  - `switchport port-security maximum`
  - `switchport port-security mac-address`
  - `switchport port-security mac-address sticky`
  - `switchport port-security violation shutdown`

- Violation modes:
  - Shutdown
  - Restrict
  - Protect

- Verification command:

```bash
show port-security interface ethernet 0/0
```

- Default switch settings:
  - Ports are enabled.
  - STP is enabled.
  - All ports belong to VLAN 1.
  - VTP mode is Server.
  - VLANs 1, 1002–1005 exist by default.
