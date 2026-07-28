---
title: VLAN Trunking Protocol (VTP)
description: Understand VTP operation, modes, versions, authentication, and VLAN update synchronization.
lecture: Lecture 12
semester: semester-3
subject: advance-computer-networking
date: 2026-07-02
order: 5
---

---

# VLAN Trunking Protocol (VTP)

## Definition

**VLAN Trunking Protocol (VTP)** is a Cisco proprietary protocol used to distribute and synchronize **VLAN configuration information** between switches in the same VTP domain.

VTP allows administrators to create, modify, or delete VLANs on one switch and automatically propagate those changes to other switches.

---

## Key Points

- **VTP (VLAN Trunking Protocol)** is developed by Cisco.
- It is used to synchronize VLAN databases between switches.
- All switches participating in VTP must:
  - Have the same **VTP domain name**.
  - Be connected using **trunk links**.
  - Use the same **VTP password**.
  - Run compatible **VTP versions**.

- VTP has three versions:
  - **VTP Version 1**
  - **VTP Version 2**
  - **VTP Version 3**

- VLAN information is stored in:
  - `vlan.dat` file in Flash memory (Cisco IOS switches).
  - NVRAM configuration file in Cisco CatOS switches.

---

# VTP Requirements

For VTP information exchange to occur:

| Requirement      | Description                                    |
| ---------------- | ---------------------------------------------- |
| Same VTP Domain  | All switches must belong to the same domain.   |
| Trunk Connection | Switches must communicate through trunk ports. |
| Same Password    | Authentication password must match.            |
| Same VTP Version | All switches should use the same VTP version.  |

---

# VTP Modes

VTP operates using different switch modes.

| Mode                  | Description                                                                 |
| --------------------- | --------------------------------------------------------------------------- |
| **Server Mode**       | Creates, modifies, and deletes VLANs. Sends VLAN updates to other switches. |
| **Client Mode**       | Receives VLAN updates from servers but cannot create VLANs.                 |
| **Transparent Mode**  | Does not synchronize VLAN database but forwards VTP advertisements.         |
| **Off Mode (VTP v3)** | Completely disables VTP operation.                                          |

---

# VTP Versions

## VTP Version 1

- Original VTP version.
- Supports basic VLAN synchronization.
- Does not support extended-range VLANs.
- Uses VLAN database updates.

---

## VTP Version 2

Improvements over VTP Version 1:

- Supports Token Ring VLANs.
- Provides better consistency checking.
- Still does not support extended-range VLANs.

### Automatic Upgrade

- A VTP Version 1 switch that supports Version 2 can automatically upgrade when it detects a VTP Version 2 or Version 3 neighbor.
- A VTP Version 2 switch remains Version 2 even when it detects a Version 3 neighbor.

---

## VTP Version 3

VTP Version 3 provides enhanced security and management features.

### Features

- Backward compatible with VTP Version 2 on individual links.
- Supports primary and secondary VTP servers.
- Password is hidden from the running configuration.
- Supports extended-range VLANs.
- Allows VTP to be disabled globally or per interface.

---

## VTP Version 3 Configuration

```bash
SW(config)# vtp version 3
SW(config)# vtp domain Kabul
SW# vtp primary
SW(config)# vtp password cisco123
```

### Explanation

| Command                 | Purpose                                  |
| ----------------------- | ---------------------------------------- |
| `vtp version 3`         | Enables VTP Version 3.                   |
| `vtp domain Kabul`      | Sets the VTP domain name.                |
| `vtp primary`           | Makes the switch the primary VTP server. |
| `vtp password cisco123` | Configures VTP authentication password.  |

---

# VTP Password Options (Version 3)

## Normal Password

```bash
SW(config)# vtp password cisco123
```

## Hidden Password

```bash
SW(config)# vtp password cisco123 hidden
```

## Secret Password

```bash
SW(config)# vtp password cisco123 secret
```

Verification:

```bash
SW# show vtp password
```

---

# VTP Off Mode

VTP Version 3 allows disabling VTP.

## Globally

```bash
SW(config)# vtp mode off
```

## Per Interface

```bash
SW(config-if)# no vtp
```

---

# VTP Configuration Revision Number

## Definition

The **VTP revision number** is a sequence number that identifies the latest version of the VLAN database.

The switch with the higher revision number has the newest VLAN information.

---

## Key Points

- Higher revision numbers overwrite lower revision number databases.
- VLAN databases synchronize when revision numbers are compared.
- A switch with an incorrect VLAN database and a higher revision number can overwrite the entire VTP domain.

Example:

```
Switch A Revision Number: 5
Switch B Revision Number: 10
```

Switch B VLAN information can replace Switch A information.

---

# VTP Authentication

## Definition

VTP authentication verifies that received VTP updates are from trusted switches.

---

## Configuration

```bash
SW(config)# vtp domain Test
SW(config)# vtp password password123
```

Verification:

```bash
SW# show vtp status
SW# show vtp password
```

Authentication uses **MD5 hash comparison** to verify passwords.

---

# VTP Update Exchange Process

## Step-by-Step Process

1. A switch sends a **summary advertisement** containing:
   - VTP domain name
   - VTP password
   - Revision number

2. Receiving switch checks:
   - Domain name
   - Password

3. If the domain name or password does not match:
   - The update is discarded.

4. If authentication succeeds:
   - The switch compares revision numbers.

5. If the received revision number is:
   - **Lower or equal:** Ignore update.
   - **Higher:** Request latest VLAN information.

6. The VLAN database is updated.

---

## Example

```
Received Revision Number: 15
Current Revision Number: 10
```

Result:

- Switch requests the latest VLAN database.
- VLAN information is updated.

---

# Important VTP Notes

## VLAN Database Storage

Cisco IOS switches store VTP and VLAN information in:

```text
Flash Memory:
vlan.dat
```

Cisco CatOS switches store information in:

```text
NVRAM configuration file
```

---

## VTP Advertisement Contains

A VTP advertisement includes:

- VLAN information
- VTP domain name
- Configuration revision number

---

## Adding a New Switch

Before adding a switch to an existing VTP domain:

- Reset the revision number.
- Avoid connecting switches with unknown VLAN databases.

---

# Resetting VTP Revision Number

The revision number can be changed by:

### Changing VTP Domain

```bash
SW(config)# vtp domain NewDomain
```

### Changing VTP Mode to Transparent

```bash
SW(config)# vtp mode transparent
```

---

# Common Mistakes

- Connecting switches without matching VTP domains.
- Forgetting that VTP requires trunk links.
- Adding a switch with a higher revision number without resetting it.
- Assuming VTP client switches can create VLANs.
- Using different VTP passwords between switches.
- Ignoring VTP version compatibility.
- Forgetting that VTP Version 3 provides better security features.

---

# Short Exam Notes

- **VTP:** Cisco protocol used to synchronize VLAN information between switches.
- Requirements:
  - Same domain.
  - Same password.
  - Same version.
  - Trunk connection.

- VTP Modes:
  - Server
  - Client
  - Transparent
  - Off (VTP v3)

- VTP Versions:
  - V1
  - V2
  - V3

- **Revision Number:** Determines the latest VLAN database version.
- Higher revision number overwrites lower revision number.
- Authentication uses password verification and MD5 hashing.
- VTP advertisements contain:
  - Domain name
  - Password
  - Revision number

- Reset revision number before joining a new switch to a VTP domain.
