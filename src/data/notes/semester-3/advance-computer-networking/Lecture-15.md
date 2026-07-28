---
title: Virtual Local Area Network and Inter-VLAN Routing
description: Explains VLAN concepts, trunking, VTP, and methods for enabling communication between VLANs.
lecture: Lecture 15
semester: semester-3
subject: advance-computer-networking
date: 2026-06-25
order: 2
---

# Virtual Local Area Network and Inter-VLAN Routing

## Definition

A **Virtual Local Area Network (VLAN)** is a logical method of dividing a single physical switched network into multiple smaller broadcast domains. VLANs improve network management, security, and performance by reducing unnecessary broadcast traffic.

---

## Key Points

- **VLAN (Virtual Local Area Network)** divides one large broadcast domain into multiple logical networks.
- VLANs operate at **Layer 2 (Data Link Layer)** of the OSI model.
- VLANs reduce:
  - Broadcast traffic
  - Multicast traffic
  - Network congestion
- VLANs provide:
  - Better security
  - Easier network management
  - Logical separation of users

### VLAN Range

| VLAN Range   | Description          |
| ------------ | -------------------- |
| 1 - 1005     | Normal range VLANs   |
| 1, 1002-1005 | Built-in VLANs       |
| 1002-1005    | Reserved VLANs       |
| 1006 - 4094  | Extended range VLANs |

- VLAN IDs use **12 bits** and range from **1 to 4094**.
- By default, all switch ports belong to **VLAN 1**.
- VLAN 1 is also called:
  - Native VLAN
  - Management VLAN

---

## Example / Code

### Creating VLANs

```cisco
Switch(config)# vlan 10
Switch(config-vlan)# name HR

Switch(config)# vlan 20
Switch(config-vlan)# name IT
```

**Explanation:**

- `vlan 10`
  Creates VLAN number 10.

- `name HR`
  Assigns the name HR to VLAN 10.

- `vlan 20`
  Creates VLAN number 20.

- `name IT`
  Assigns the name IT to VLAN 20.

---

### Assigning a Port to a VLAN

```cisco
Switch(config)# interface ethernet 0/0
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
```

**Explanation:**

- `interface ethernet 0/0`
  Selects the switch interface.

- `switchport mode access`
  Configures the port as an access port.

- `switchport access vlan 10`
  Places the port into VLAN 10.

---

### Configuring a Trunk Port

```cisco
Switch(config)# interface ethernet 0/0
Switch(config-if)# switchport trunk encapsulation dot1q
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan all
```

**Explanation:**

- `switchport trunk encapsulation dot1q`
  Uses IEEE 802.1Q trunking protocol.

- `switchport mode trunk`
  Changes the interface into trunk mode.

- `switchport trunk allowed vlan all`
  Allows all VLANs through the trunk.

---

### VTP Configuration

```cisco
Switch(config)# vtp mode server
Switch(config)# vtp domain test.com
Switch(config)# vtp version 2
```

**Explanation:**

- `vtp mode server`
  Configures the switch as a VTP server.

- `vtp domain test.com`
  Places the switch into the VTP domain.

- `vtp version 2`
  Enables VTP version 2.

---

## Explanation

## VLAN Operation

A normal switch network has one broadcast domain. When many devices exist in the same broadcast domain, broadcast traffic increases.

VLANs solve this problem by logically separating users:

Example:

| VLAN    | Department | Network Purpose              |
| ------- | ---------- | ---------------------------- |
| VLAN 10 | HR         | Human Resources computers    |
| VLAN 20 | IT         | IT department computers      |
| VLAN 30 | Finance    | Finance department computers |

Devices in different VLANs cannot communicate directly because each VLAN is a separate broadcast domain.

---

# Access and Trunk Ports

## Access Port

An **access port** connects end devices such as:

- PCs
- Printers
- IP phones

Characteristics:

- Carries traffic from only one VLAN.
- Does not add VLAN tags.

Example:

```
PC ---- Access Port ---- Switch
```

---

## Trunk Port

A **trunk port** connects network devices such as:

- Switch to switch
- Switch to router

Characteristics:

- Carries multiple VLANs.
- Uses VLAN tagging.

Example:

```
Switch ---- Trunk Link ---- Switch
```

---

# Frame Tagging

When multiple VLANs travel through a trunk link, switches must identify which VLAN each frame belongs to.

This process is called **frame tagging**.

## Tagging Protocols

| Protocol    | Description                                     |
| ----------- | ----------------------------------------------- |
| ISL         | Cisco proprietary protocol, adds 30-byte header |
| IEEE 802.1Q | Industry standard, adds 4-byte tag              |

**802.1Q** is the recommended and commonly used standard.

---

# VTP (VLAN Trunking Protocol)

## Definition

**VTP (VLAN Trunking Protocol)** is a Cisco proprietary protocol used to distribute VLAN configuration information between switches through trunk links.

### VTP Requirements

For switches to exchange VTP information:

- Same VTP domain name
- Same VTP password
- Same VTP version
- Connected through trunk ports

### VTP Revision Number

- Identifies the latest VLAN database update.
- Default value is **0**.
- Higher revision number means newer configuration.
- Each update increases the revision number.

---

# VTP Modes

## VTP Server

A VTP server can:

- Create VLANs
- Delete VLANs
- Modify VLANs
- Advertise VLAN information

Characteristics:

- Default switch mode.
- Stores VLAN information in `vlan.dat`.

---

## VTP Client

A VTP client:

- Cannot create VLANs.
- Cannot modify VLANs.
- Receives VLAN updates from the server.
- Stores VLAN information in `vlan.dat`.

---

## VTP Transparent

A VTP transparent switch:

- Can create, delete, and modify VLANs.
- Does not synchronize VLAN information.
- Passes VTP advertisements through.
- Resets the revision number when configured.

---

# Inter-VLAN Routing

## Definition

Devices in different VLANs cannot communicate directly because each VLAN is a separate broadcast domain.

**Inter-VLAN routing** allows communication between different VLANs using a Layer 3 device such as a router or Layer 3 switch.

---

## Methods of Inter-VLAN Routing

### 1. Router-on-a-Stick

- Uses a single router interface.
- Interface is configured as a trunk.
- Router uses subinterfaces for different VLANs.

Example:

```
Switch ---- Trunk ---- Router
```

---

### 2. Multiple Links

- Uses separate physical router interfaces.
- Each interface connects to a different VLAN.

Example:

```
VLAN 10 ---- Router Interface 1

VLAN 20 ---- Router Interface 2
```

---

## Verification Commands

| Command                                  | Purpose                   |
| ---------------------------------------- | ------------------------- |
| `show vlan brief`                        | Displays VLAN information |
| `show vlan`                              | Shows VLAN database       |
| `show interface trunk`                   | Displays trunk status     |
| `show interface ethernet 0/0 switchport` | Shows switchport details  |
| `show vtp status`                        | Displays VTP information  |

---

## Output (if any)

```text
Expected Output

VLAN 10 HR
VLAN 20 IT

Trunk ports successfully configured.
VTP information successfully displayed.
```

---

## Common Mistakes

- Assuming devices in different VLANs can communicate without routing.
- Assigning multiple VLANs to one access port.
- Forgetting that trunk ports are required between switches.
- Using different VTP domains between switches.
- Ignoring VLAN tagging on trunk links.
- Changing VTP revision numbers incorrectly.
- Connecting VLANs without configuring inter-VLAN routing.

---

## Short Exam Notes

- **VLAN** divides one broadcast domain into multiple logical broadcast domains.
- VLAN operates at **Layer 2**.
- VLAN range: **1–4094**.
- Default VLAN: **VLAN 1**.
- Access ports carry one VLAN.
- Trunk ports carry multiple VLANs.
- **802.1Q** is the standard VLAN tagging protocol.
- **VTP** distributes VLAN information between Cisco switches.
- VTP modes:
  - Server
  - Client
  - Transparent

- Inter-VLAN routing requires a Layer 3 device.
- Router-on-a-stick is a common method for VLAN communication.

```

```
