---
title: 数据类型
date: 2023-01-11
categories:
 - 笔记
tags:
 - typescript
prev: note.md
next: false
---

# 数据类型

## 定义

数据类型是值的一个属性，计算机程序便是通过操作值来运行的，它能够描述在该值上允许执行的操作。TypeScript有如下七种数据类型

* Undefined
* Null
* Boolean
* String
* Symbool
* Number
* Object

其中，`Object` 类型是**非原始数据**类型，其它的都是原始数据类型。原始数据类型是编程语言内置的基础数据类型，可用于构造符合类型

## Undefined

`Undefined` 类型只包含一个值，就是 undefined 。在变量未被初始化时，它的值为 undefined。

## Null

`Null` 类型也只包含一个值，即 null。我们通常使用 null 值来表示未初始化的对象。此外，null值也常用在json文件里，表示一个值不存在

## Boolean

`Boolean` 类型包含两个逻辑值，分别是 true 和 false

## String

`String` 类型就是文本字符串

## Number

`Number` 类型表示一个数字。JavaScript不详细区分整数类型、浮点类型以及带符号的数字类型

## Symbol

`Symbol` 值都是唯一且不能改变的。主要用来作为对象的属性名

### Symbol()

JavaScript 提供了一个全局的 `Symbol()` 函数来创建 Symbol 类型的值。我们可以将它想象成一个全局唯一标识符的生成器，每次调用 `Symbol()` 都会生成一个不同的 Symbol 值
```tsx
const sym = Symbol();
const obj = { [sym]: 'som value'}
obj[sym];   // 'some value'
```

### Well-Known Symbol

JavaScript 内置了一些 Well-Known Symbol 常量。

|           名称            |                             描述                             |
| :-----------------------: | :----------------------------------------------------------: |
|    Symbol.hasInstance     |       方法值，用于判断一个对象是否为某个构造函数的实例       |
| Symbol.isConcatSpreadable | 布尔值，表示在执行 `Array.prototype.concat` 方法时，一个对象是否允许被展开 |
|      Symbol.iserator      |      方法值，表示迭代器函数，与 `for ··· of ` 语句有关       |
|       Symbol.match        |        用于定义 `String.prototype.match()` 方法的行为        |
|      Symbol.replace       |        用于定义 `string.protoype.search()` 方法的行为        |
|      Symbol.species       |            用于定义在创建派生对象时使用的构造函数            |
|       Symbol.split        |        用于定义 `string.protoype.split()` 方法的行为         |
|    Symbol.toPrimitive     |            方法值，用于定义将一个对象转换为原始值            |
|    Symbol.toStringTag     |      用于定义 `string.prototype.toString()` 方法的行为       |
|    Symbol.unscopables     |              用于定义对象值在 with 语句中的行为              |

~~反正也看不懂，先记着吧~~

## Object

对象是属性的集合，每个对象属性都属于 数据 或 存取器

* 数据属性。可以为 `Undefined` 、`Null` 、`Boolean`、`String` 、`Number` 、`Symbol` 和 `Object` 类型的值
* 存取器属性。由一个或两个存取器方法构成，用于获取和设置 `Undefined` 、`Null` 、`Boolean`、`String` 、`Number` 、`Symbol` 和 `Object` 类型的值

对象属性使用键值来标识，键值只能为字符串或 Symbol 值。所有字符串（也包括空字符串）和 Symbol 值都是合法的键值

