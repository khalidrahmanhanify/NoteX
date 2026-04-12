---
title: Data Structures in Python
description: All about lists, tuples, dictionaries, and sets, along with their functions and usage.
lecture: Lecture 5
semester: semester-3
subject: modern-programming-languages
date: 2026-04-12
order: 12
---

# Files in python

In python we can access and modify files that are on the OS we have different functions and methods for doing that.

## 1. Opening (Reading) files

To read files files we should consider the location of the file. If it is in the same directory or folder as the python file that we are working in then we can only pass the name of the file with its extension like `textfile.txt` but if it is located somewhere else than the folder of the file that we are working on then we should pass the whole path to the `open()` function.

> Note that in python we can't use the default path separation symbol which is the `\` which is acceptable in windows but in python we should either use `\\` or `/` to separate the folders

to read a file in python we should do something like:

```python
filehandler = open("filename or path", "mode")
```

in the filename we should either pass the filename or the path of the file based on the location of the file the second parameter is `mode` which can get different values like:

- `r`: This mode allows us to read the content of the file. If the file is there then it reads the content if not it returns an error.
- `w`: This mode allows us to change the content of the file but whenever we want to write on a file it removes all the existing content and overwrites everything if the file is not there then it creates one by itself.
- `a`: In this mode it allows us append content to the files content which means instead of removing everything and overwriting it it only appends the new data that we pass.
- `r+`: which allows both reading and writing
- `w+`: This also allows both reading and writing
- `a+`: This allows both appending and reading

---

To read from a file we can use the `read()` function like:

```python
filehandler = open("myInfo.txt", "r")
print(filehandler.read())
```

This function returns all the content of the file in this case `myInfo.txt`. This function also accepts an index which is the index of the place until which it will read the file like:

```python
print(filehandler.read(20)) # reads the file until the character in index 20
```

When we use the read function like this then call the read function again after doing it the read function will only return the content after the 20th character.
To read from the first character again we can use another function `seek()` which takes two parameters the first one is the starting value and the second one is the ending value.
We can use this `seek()` function to reset the position of the cursor (which is the location of the last read place) we can do that by just doing `filehandler.seek(0,0)` then after it we can use the read function which will return the content from the first character to the last character.
There is another function which is used to return the index of the last character read which is `tell()` it returns the index of the last read character.

## 2. Writing on a file

Whenever we use the `w` mode which is for writing if the file already has some data then it will be wiped out and it will start adding the new things that we can add through the `write()` function to which we can pass the data as an argument then it will add that data to the file.
If we use write functions one after another without closing the current session it will add the data at the end of the file without wiping anything out instead it will add the data at the end of the file because whenever we start a session in python. for the first time the python wipes the file clean but after that in the working session without closing the file through the `close()` method it will add the data at the end without wiping the file again like:

```python
myfile = "myInfo.txt"
filehandler = open(myfile, 'w')

filehandler.write("New content") # Python will remove everything in the file and add only "New content"

filehandler.write("\nMore Content") # This will add the "More Content" to the end of the file without clearing "New content"

filehandler.close()

filehandler.write("Updated Content") # This will clean everything before and add only "Updated Content"
```

## Appending to files

In `a` which is appending mode python doesn't clean anything it starts adding the new content to the end of the file like:

```python
myFile = "myInfo.txt"

filehandler = open(myFile, 'a')
filehandler.write("Something new") # This will be added at the end
```

---

# OS Methods

In order to do operating system level operations like creating a directory or removing a directory or renaming a directory first we should import the `import os` then use the `os` object's methods like:

- `mkdir()`: This method is used to create a new folder or directory whatever we pass in will be the name of that folder or directory like:

```python
import os
os.mkdir("New Folder") # This will create a new folder in the current directory
```

- `rmdir()`: This method is used to remove a folder or directory whatever we pass to this method will be removed like:

```python
import os
os.rmdir("New Folder") # This removes the folder "New Folder"
```

- `getcwd()`: This method is used to return the current directory that we are working in, and it doesn't accept any parameters like:

```python
import os
print(os.getcwd()) # prints the current working directory
```

- `chdir()`: This method is used to change the directory to the one which is passed in as parameter like:

```python
import os
os.chdir("d:/myNewProject") # changes the working directory to the passed one
```

---

# Control Statements in Python

In Python we also can use the control statements like in any other languages. Below are the control statements in Python.

## 1. IF Statements

The `if` statements are used to run a block of code based on a condition and the syntax of it is that first we write the `if` then the `condition` then instead of using `{}` for creating a scope of the `if` statement we use `:` to start the block and we should code considering the indentation as well and there are 4 types of `if` statements in python which are:

### 1. One Way `if` statement

This `if` statement is used to check a condition and if the condition is `True` then it will run the block of code corresponding to that `if` if the condition is not `True` then it will not do anything.

#### Syntax:

The syntax of this statement is as below:

```python
if condition :
	# block of code to run
```

#### Example:

```python
age = 19
if age >= 18:
	print("You are eligible to vote")
```

### 2. Two Way `if` aka `if-else`

This statement is used to check a condition if the condition is true then it will run the code in `if` block but if the condition is not true then it will run the `else` block code.

#### Syntax:

```python
if condition:
	# Code to run
else:
	# Code to run if condition is False
```

#### Example:

```python
age = 17
if age >= 18:
	print("You are eligible to vote.")
else:
	print("You are not eligible to vote.")
```

### 3. `if-else` ladder

This statement is used to check for different conditions at once if the `if` condition is true then it will run the `if` block code else if the condition of `elif` is true then it will run the block of code of the corresponding `elif` and finally if all the conditions are false it will run the `else` block of code.

#### Syntax:

```python
if condition:
	# Code to execute
elif condition:
	# Code to execute
elif condition:
	# Code to execute
else:
	# Code to execute
```

> Note that we can have as much `elif`s that we want to have.

#### Example:

```python
score = 86
if score >= 90:
	print("Grade A")
elif score >= 80:
	print("Grade B")
elif score >= 70:
	print("Grade C")
elif score >= 60:
	print("Grade D")
else:
	print("Failed")
```

### Nested `if`

This statements is used if we have nested conditions.

#### Syntax:

```python
if condition:
	if condition:
		if condition:
			# Code to execute
		else:
			# Code to execute
	else:
		# Code to execute
else:
	# Code to execute
```

#### Example:

```python
age = 19
nationality = "Afghan"

if age >= 18:
	if nationality == "Afghan":
		print("You are eligible to vote")
	else:
		print("You are not afghan so you can't vote")
else:
	print("You should be at least 18 years old to vote")
```

---

## Loops in Python

Loops are another type of control statements which are used to run a block of code specified number of times in Python there are two types of loops:

### `for` loop

This loop is used whenever the number of times to run the code is definite which means we already know how many times we need to run the loop then we use this type of loop. We can use two keywords in loops as well which are `continue` used for skipping the current iteration of the loop and `break` which completely stopes the loop.

#### Syntax:

```python
for variableName in sequence:
	# Code to execute
```

#### Example:

```python
for i in range(10):
	print(i) # prints numbers from 0 to 9
```

### `while` loop

This loop is used whenever the number of times to run the loop is indefinite which means that we don't know how many times the loop should run it runs based on a condition if the condition is true it runs as soon as the condition is false it stops execution.

#### Syntax:

```python
while condition:
	# Code to execute
```

#### Example:

```python
i = 1
while i >= 10:
	print(i)
	i += 1
```

---

The `for` loop has another another block as well which is `else` the else block of code runs only when the loop is stopped by `break` keyword then the else block runs.
