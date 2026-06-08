---
title: Inheritance and Polymorphism in Python
description: Learning inheritance and polymorphism in Python including code reusability, method overriding, superclass and subclass concepts, and practical banking account examples using OOP.
lecture: Lecture 8
semester: semester-3
subject: modern-programming-languages
date: 2026-05-24
order: 9
---

## Inheritance

### Definition

**Inheritance** is an OOP concept where one class can use the attributes and methods of another class.

It helps in **code reusability**, meaning we do not need to write the same code again.

- Parent Class (Base Class / Superclass) → Original class
- Child Class (Derived Class / Subclass) → Class that inherits features

---

### Key Points

- Used to reuse code.
- Child class gets access to parent class methods and attributes.
- Helps reduce repetition.
- Makes code easier to maintain.

### Syntax

```python
class Parent:
    pass

class Child(Parent):
    pass
```

---

### Example / Code

```python
class Employee:
    def showRole(self):
        print("I am an employee")


class Manager(Employee):
    pass


m = Manager()
m.showRole()
```

---

### Explanation

- `Employee` is the **parent class**.
- `Manager` is the **child class**.
- `Manager` inherits the `showRole()` method.
- No need to write the same method again.

---

### Output

```python
I am an employee
```

---

### Common Mistakes

#### 1. Forgetting Parent Class

❌ Wrong

```python
class Manager:
```

✅ Correct

```python
class Manager(Employee):
```

---

#### 2. Rewriting Code Unnecessarily

If inheritance exists, avoid rewriting same methods.

---

### Short Exam Notes

- Inheritance = acquiring parent class properties.
- Used for code reusability.
- Parent class = superclass.
- Child class = subclass.
- Syntax:

```python
class Child(Parent):
```

---

# Polymorphism in Python

## Definition

**Polymorphism** means **one method can behave differently in different classes**.

A child class can redefine a method of the parent class.

Same function name → Different implementation.

---

## Key Points

- Same method name.
- Different behavior.
- Achieved by **method overriding**.
- Makes code flexible.

---

## Example / Code

```python
class Employee:
    def salary(self):
        print("Employee salary")


class Manager(Employee):
    def salary(self):
        print("Manager salary is 70000")


class Developer(Employee):
    def salary(self):
        print("Developer salary is 50000")


m = Manager()
d = Developer()

m.salary()
d.salary()
```

---

## Explanation

- `salary()` exists in all classes.
- Same method name is used.
- Each class gives different behavior.

This is called **Polymorphism**.

---

## Output

```python
Manager salary is 70000
Developer salary is 50000
```

---

## Common Mistakes

#### 1. Forgetting Method Overriding

❌ Wrong

```python
class Manager(Employee):
    pass
```

(No different implementation)

✅ Correct

```python
class Manager(Employee):
    def salary(self):
        print("Manager salary")
```

---

### Short Exam Notes

- Polymorphism = same method, different behavior.
- Method overriding is used.
- Child class changes parent method implementation.

---

# Practice: Bank Account using Inheritance and Polymorphism

## Definition

We create a parent class called **Bank_Account** and three child classes:

1. `Saving_Account`
2. `Employee_Account`
3. `Current_Account`

Each class has different rules.

---

## Example / Code

```python
class Bank_Account:
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print("Deposited:", amount)

    def withdraw(self, amount):
        self.balance -= amount
        print("Withdrawn:", amount)


class Saving_Account(Bank_Account):
    def deposit(self, amount):
        bonus = amount * 0.03
        total = amount + bonus
        self.balance += total
        print("Deposited with bonus:", total)


class Employee_Account(Bank_Account):
    def deposit(self, amount):
        if amount > 10000:
            tax = amount * 0.05
            amount -= tax

        self.balance += amount
        print("Deposited after tax:", amount)


class Current_Account(Bank_Account):
    def withdraw(self, amount):
        if amount > 10000:
            print("Cannot withdraw more than 10000 AFN in a day")
        else:
            self.balance -= amount
            print("Withdrawn:", amount)


saving = Saving_Account(1000)
saving.deposit(10000)
print("Balance:", saving.balance)


employee = Employee_Account(1000)
employee.deposit(12000)
print("Balance:", employee.balance)


current = Current_Account(20000)
current.withdraw(15000)
print("Balance:", current.balance)
```

---

## Explanation

### 1. Saving Account

Gets **3% bonus** during deposit.

Example:

Deposit = `10000`

3% bonus = `300`

Total added:

```python
10300
```

---

### 2. Employee Account

Government tax rule:

- Less than `10000` → No tax
- More than `10000` → `5%` tax deduction

Example:

Deposit = `12000`

5% tax = `600`

Added balance:

```python
11400
```

---

### 3. Current Account

Cannot withdraw more than:

```python
10000 AFN
```

per day.

---

## Output

```python
Deposited with bonus: 10300
Balance: 11300

Deposited after tax: 11400
Balance: 12400

Cannot withdraw more than 10000 AFN in a day
Balance: 20000
```

---

## Common Mistakes

### 1. Forgetting Inheritance

❌ Wrong

```python
class Saving_Account:
```

✅ Correct

```python
class Saving_Account(Bank_Account):
```

---

### 2. Using `=` instead of `+=`

❌ Wrong

```python
self.balance = amount
```

✅ Correct

```python
self.balance += amount
```

---

### 3. Forgetting `self`

❌ Wrong

```python
def deposit(amount):
```

✅ Correct

```python
def deposit(self, amount):
```

---

## Short Exam Notes (Very Concise Revision Points)

- Inheritance = child class gets parent features.
- Reusability = main benefit of inheritance.
- Polymorphism = same method, different behavior.
- Method overriding changes parent method.
- Saving Account → +3% bonus.
- Employee Account → 5% tax if amount > 10000.
- Current Account → max withdrawal = 10000/day.
- Parent class = superclass.
- Child class = subclass.

```

```
