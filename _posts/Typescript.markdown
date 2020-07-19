---
layout: post
title: Typescript Intro
date: 2020-08-19 22:00:20 +0300
description: Typescript Intro
img: ajv_logo.png
fig-caption: # Add figcaption (optional)
tags: [Typescript, Intro]
---

Typescript只会在编译时检查, 不会在运行时检查 

## 类型

- basic type

  - number
  - string
  - boolean
  - object
  
  ```ts
  const person: object = {
      name: 'joe',  
      age: 20
  }  
  ```
  
- object type
  object type写法：
  
  ```
  type person = {
    name: string;  
    age: number;
  }
  // 类似于object的key-value写法，但是以`;`结束
  ```
  
  所有object type都归属于object类型

- array 

```
const arrary: string[] = ['1','2','3']
```  
  
- Tuple

```
const tuple: [string, number] = ['1', 1]
```
- unknown

```
let a: unknown;
a = '1'
a = 1
a = true
```

- any 

**Tips**
any类型的数据可以赋值给任何类型的变量。

```
let test: string;
let a: any;

test = a
```

也就是说任何基础类型都是any和本类型的unoin：
```
XXX | any
```

```
string  === string | any

number === number | any
```
- function

```ts
const function1: (a: number, b: number) => number = (a, b) => {
    return a + b;
}
```

- never

### interface

```
interface Person {
    name: string,
    age:  number,
    [key: string]: string  // optional field
}
```

