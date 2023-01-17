---
title: 注释
date: 2023-01-11
categories:
 - 笔记
tags:
 - typescript
prev: base.md
next: datatype.md
---

# 注释

## 注释的作用
在程序中，应该使用适当的注释为代码添加描述性信息，以增强可读性和可维护性。  
再添加注释时，应该描述 “为什么要怎么做”，而不是 ”做什么“

TypeScript 支持三种类型的注释：

* 单行注释
* 多行注释
* 区域注释



## 单行注释

单行注释使用双斜线 `//` 来表示，并且不允许换行。  

快捷键为：`ctrl + /` 

```tsx
// single line comment
const x = 0;
```

## 多行注释

多行注释以 `/*` 符号作为开始并以 `*/` 符号作为结束。多行注释允许换行。  

快捷键为：`Alt + Shift + A` 

```tsx
/* multi-line comment */
const x = 0;

/* multi-line comment
multi-line comment
multi-line comment
 */
const y = 0;
```

## 区域注释

区域注释不是一种新的注释语法，它借助单行注释的语法实现了定义代码折叠区域的功能。

```tsx
// #region 区域注释
let x = 1;
let y = 0;

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}
// #endregion
```

其中，`// #region` 定义了代码折叠区域的起始位置，`// #endregion` 定义了代码折叠区域的结束位置。“区域描述” 用于描述该折叠区域，当代码被折叠起来时，描述信息就会显示出来。就像下图所示

![img](https://mute23-code.github.io/blogImage/codeNote/demoNote.jpg)
