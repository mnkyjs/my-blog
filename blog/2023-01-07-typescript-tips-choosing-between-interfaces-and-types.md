---
layout: blog
title: "TypeScript Tips: Choosing Between Interfaces and Types"
description: Understand the differences between interfaces and types in
  TypeScript, and when to use each of them.
published: true
date: 2023-01-07T08:19:21.021Z
---
Interfaces and types in TypeScript are both ways to define the type of a variable or function. However, they have some important differences:

1. Interfaces can only be used to describe the type of objects. Types, on the other hand, can also be used to describe the type of primitive values such as numbers, strings, or booleans.
2. Interfaces can only be implemented using the "implements" clause. Types, on the other hand, can also be extended using the "extends" clause.
3. Interfaces cannot be directly instantiated. They must be implemented by a class that then instantiates them. Types, on the other hand, can be directly instantiated.
4. Interfaces are a better way to define the contracts of classes. Types are better suited for describing the type of values that are not objects.

Here is an example to illustrate the differences between interfaces and types:

```
interface Person {
  name: string;
  age: number;
}

type PersonType = {
  name: string;
  age: number;
}

// The following class implements the "Person" interface
class Employee implements Person {
  name: string;
  age: number;
  salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

// The following code would cause an error because "PersonType" is not a class
// class Manager extends PersonType {
//   department: string;

//   constructor(name: string, age: number, department: string) {
//     super(name, age);
//     this.department = department;
//   }
// }

// However, the following code is correct because "PersonType" is not a class and cannot be extended
const manager: PersonType = {
  name: 'John',
  age: 30,
  department: 'Sales'
}

// The following code is also correct because "PersonType" is not a class and can be directly instantiated
const person: PersonType = new PersonType('Jane', 25);

```