---
layout: post
title: Ajv Intro
date: 2020-07-23 23:00:20 +0300
description: Ajv the fastest JSON Schema validator for Node.js and browser.
img: ajv_logo.png
fig-caption: # Add figcaption (optional)
tags: [Nodejs, Validation]
---

在做前端，或者serevr的开发时，可能经常会接触到json，那这篇文章所说的Ajv就是使用`Json-schema`去进行data的validate。

## json

json（javascript-object-notation）是一种轻量级的，基于文本的`数据格式（data format）`。通常是web application之间数据传输时首选的数据格式。虽然遵循js的语法，但是json是一种独立于语言的data format，
也就是说，Json可以独立于JS，并且被任何一种语言使用，现在很多语言都具有read、parse、generate json的能力。

当你在网络中传输json格式的数据时，json是以string的形式被传输的。但是当你想要获取json中的数据时，就需要将Json转换成javascript object。 因此Json会有两个过程：

- 序列化（serialization）
将Js object转换成json string的过程叫做序列化， 序列化之后data就可以在网络之间进行传输。

- 反序列化（deserialization）
将Json string转换成js object的过程叫做反序列化，反序列化之后就可以access json中的数据。

javascript提供了global Json Object，其中包含method，将Json在这两种类型中进行转换：
- Json.stringify
将Javascirpt object转换成Json string
- Json.toJson
将Json string装换成JS object

json可以被存放在`Json`文件中，这种文件只是以`.json`作为extension的文本文件，这种文件的media type（MIME Type）就是`application/json`.


## json-schema

`json schema`是一种基于Json格式的描述性语言, 也可以看成一种document, 用于定义某Json的数据结构。`Json schema`中包含三个部分：

- `Json schema core`: 定义json schema, 比如`description`或者`title`等定义Json format的字段就是schema core。
- `Json schema validation`: 定义validation constraint， 比如`type`字段就是在定义constraint。
- `JSON Hyper-Schema`: 这是JSON Schema规范的另一个扩展，其中定义了`Hyper-link`和与`Hyper-related`相关的关键字。

定义好的Json-schema可以用来validate Json data。

### Json-schema Sample

- 一个简单的Json

```json
{
    "id": 1,
    "name": "Lampshade",
    "price": 0
}
```

- 上面那个Json的schema

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",  //$schema 确定了当前的json schema所遵循的规范, 这句的意思是该schema是根据v4规范草案编写的。
  "title": "Product",
  "description": "A product from the catalog",  // 描述当前的这个Json
  "type": "object" // 第一个constraint
  "properties": {
      "id": {
          "description": "The unique identifier for a product",
          "type": "integer"
      },
      "name": {
          "description": "Name of the product",
          "type": "string"
      },
      "price": {
          "type": "number",
          "minimum": 0,
          "exclusiveMinimum": true
      }
    },
    "required": ["id", "name", "price"]
}
```

### Validation With JSON Schema

Json-schema定义了一个正确的Json需要满足什么样的规范，那么现在就可以根据这个schema进行validation的工作。现在有很多的repo可以进行validation的工作，只要你传入一个json-schema以及一个需要被validate的json，这个library就可以直接给你返回当前的这个json是否满足schema的定义。

因此，需要特别注意的是，Json-schema只能定义正确的Json的格式，可以用于做validation，但是真正的validation工作就需要其他的library来完成。

因此我今天要介绍的这个library就是利用json-schema作validaiton。

## ajv

这是利用json-schema作为validation的validator library。 这种library号称是对v8而言，最高效的validator。




