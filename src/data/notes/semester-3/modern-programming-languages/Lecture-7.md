---
title: Classes and Objects in Python
description: Learning object-oriented programming in Python including classes, objects, methods, constructors (__init__), inheritance, and polymorphism with practical banking account examples.
lecture: Lecture 7
semester: semester-3
subject: modern-programming-languages
date: 2026-04-26
order: 10
---

# Classes and Objects in Python (OOP)

## Definition

**Object-Oriented Programming (OOP)** is a programming style where code is organized using **classes** and **objects**.

- A **Class** is a blueprint/template for creating objects.
- An **Object** (instance) is a real item created from a class.
- OOP helps make code:
  - Reusable
  - Organized
  - Easier to maintain
  - Less repetitive

Python fully supports OOP.

---

## Key Points

### 1. Class

A class defines variables (attributes) and functions (methods).

```python
class Student:
    pass
```

---

### 2. Object / Instance

An object is created from a class.

```python
s1 = Student()
```

You can create many objects from one class.

---

### 3. Methods

Functions inside a class are called **methods**.

```python
class Student:
    def hello(self):
        print("Hello Student")
```

Call method:

```python
s1 = Student()
s1.hello()
```

---

### 4. self Keyword

- Refers to the current object.
- Used to access attributes and methods.

```python
self.name
```

---

### 5. `__init__()` Constructor

Runs automatically when object is created.

Used to initialize data.

```python
class Student:
    def __init__(self, name):
        self.name = name
```

---

### 6. Inheritance

One class can use another class’s features.

```python
class Parent:
    pass

class Child(Parent):
    pass
```

Used for code reuse.

---

### 7. Polymorphism

Same method name behaves differently in different classes.

```python
class Bird:
    def sound(self):
        print("Bird sound")

class Cat:
    def sound(self):
        print("Meow")
```

---

## Example / Code

## 1. Bank Account Class

```python
class Account:
    def __init__(self, name, father_name, phone, id_card, balance):
        self.name = name
        self.father_name = father_name
        self.phone = phone
        self.id_card = id_card
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print("Deposited:", amount)

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Withdrawn:", amount)
        else:
            print("Insufficient Balance")

    def checkBalance(self):
        print("Current Balance:", self.balance)

    def userInfo(self):
        print("Name:", self.name)
        print("Father Name:", self.father_name)
        print("Phone:", self.phone)
        print("ID Card:", self.id_card)
```

### Create Object

```python
a1 = Account("Khalid", "Rahman", "0700000000", "12345", 50000)

a1.userInfo()
a1.deposit(45000)
a1.withdraw(10000)
a1.checkBalance()
```

---

## 2. Inheritance + Polymorphism Example

```python
class Bank_Account:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        self.balance -= amount
```

---

### Saving Account

```python
class Saving_Account(Bank_Account):
    def deposit(self, amount):
        bonus = amount * 0.03
        self.balance += amount + bonus
```

---

### Employee Account

```python
class Employee_Account(Bank_Account):
    def deposit(self, amount):
        if amount > 10000:
            tax = amount * 0.05
            self.balance += amount - tax
        else:
            self.balance += amount
```

---

### Current Account

```python
class Current_Account(Bank_Account):
    def withdraw(self, amount):
        if amount <= 10000:
            self.balance -= amount
        else:
            print("Cannot withdraw more than 10000 AFN in a day")
```

---

### Testing

```python
s = Saving_Account(1000)
s.deposit(10000)
print(s.balance)

e = Employee_Account(1000)
e.deposit(12000)
print(e.balance)

c = Current_Account(20000)
c.withdraw(15000)
print(c.balance)
```

---

## Explanation

### Saving Account

If deposit = 10000

3% bonus = 300

Total added = 10300

---

### Employee Account

If deposit = 12000

5% tax = 600

Total added = 11400

---

### Current Account

Cannot withdraw more than 10000 in one day.

---

## Output (if any)

```python
Name: Khalid
Father Name: Rahman
Phone: 0700000000
ID Card: 12345

Deposited: 45000
Withdrawn: 10000
Current Balance: 85000
```

Testing inheritance:

```python
11300
12400
Cannot withdraw more than 10000 AFN in a day
20000
```

---

## Common Mistakes

### 1. Forgetting self

❌ Wrong

```python
def deposit(amount):
```

✅ Correct

```python
def deposit(self, amount):
```

---

### 2. Not using `__init__`

Then values are not initialized properly.

---

### 3. Wrong indentation

Python depends on indentation.

---

### 4. Accessing class before object creation

❌

```python
deposit()
```

✅

```python
a1.deposit(500)
```

---

### 5. Confusing Class vs Object

- Class = blueprint
- Object = real created item

---

## Short Exam Notes (very concise revision points)

- OOP = programming using classes and objects.
- Class = blueprint.
- Object = instance of class.
- Method = function inside class.
- `self` = current object reference.
- `__init__()` runs automatically on object creation.
- Inheritance = child class gets parent features.
- Polymorphism = same method, different behavior.
- OOP reduces redundancy and improves reuse.
