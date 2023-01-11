---
title: 基础
date: 2023-01-11
categories:
 - 笔记
tags:
 - typescript
prev: false
next: note.md
---

# TypeScript基础

## 变量声明

在 Javascript以下关键字被用来声明变量  

* var
* let
* const

::: tip

使用 `let` 和 `const` 能够声明具有 [块级作用域](#块级作用域) 的变量，所以尽量用 `let` 而不是 `var` 

:::

### var 声明

使用 `var` 来定义一个**变量**，默认值为 `undefined`

```tsx
var x = 0;

var y;	// undefined
```



### let 声明

使用 `let` 来定义一个**变量**，默认值为 `undefined` 

```tsx
let x = 0;

let y;	// undefined
```

::: tip let的特点

见 [特点分析](#let特点分析)

* 同一个作用域下不能重复声明

* 会产生暂时性死区 

* 只在当前块有效。

:::

 ### const声明

使用 `const` 来定义一个**常量**，并且定义时必须设置一个初始值。常量在定义后不允许重新赋值

```tsx
const x = 0;
```

### 块级作用域

顾名思义，块级作用域包含 块 和 作用域。变量的作用域指该变量的可访问局域，一个变量只能在自己所处的作用域里面被访问，作用域外就不能被访问。块级作用域指的是“块语句”。块语句用于将多条语句（或零条）组织在一起。在语法上，块语句用 `{}` 来表示  



::: tip

块级作用域就是指块语句所创建的作用域（废话  

使用 `var` 声明的变量不具有块级作用域

:::

#### 🌰 栗子 1

```tsx
// 下面这些代码在一对大括号中，并且每条语句有明确的含义：
{
    null;   // 空值
    1;      // 1
    () => {}    // 函数
}
```

#### 🌰 栗子 2

```tsx
let y = 10;
    console.log(x); // 不能访问

{
    let x = 20;
    console.log(y); // 可以访问
}
```

### `let`特点分析

#### 同一个作用域下不能重复声明

##### 🌰 栗子 1

``` tsx
// 这个很简单，由于let不能重复声明而var能重复声明所以let会报错
let x = 1;
let x = 2;
console.log(x);

var x = 1;
var x = 2;
console.log(x);

// 但是很多人忽略了关键词的同一作用域
let x = 1;
{
    let x = 2;
    console.log(x); // 2
}
```

##### 🌰 栗子 2

```tsx
// var 与 let 混用导致报错
// 因为var会忽略块进行变量提升，已经声明了x再去let x就会报重复声明的错误。
function fn() {
    let x = 1;
    {
        var x = 2;
    }
    console.log(x);
}
fn();
```

#### 产生暂时性死区 和 只在当前块有效

##### 🌰 栗子 1：最简单的暂时性死区

```tsx
/** 最简单的暂时性死区
 *  这个不必多说，let必须先声明才能使用
 */
console.log(x); // 报错
let x = 2;

console.log(y); // undefined
var y = 1;
```

##### 🌰 栗子 2：赋值操作符导致的暂时性死区

```tsx
// 赋值操作符导致的暂时性死区
// ❗ 赋值操作符是从右往左赋值，先读取右边的x此时x还未声明所以会报错
let x = x;
console.log(x); //报错

let y = y;
console.log(y); // undefined
```

##### 🌰 栗子 3：if { } 大括号有块作用域吗？

这里就稍微复杂一些， 如果没有 `let x = 2` 这句就不会报错，此时报错说明没有声明就使用了变量x，说明了在执行语句中已经发现了当前块作用域中有了x，优先在自己块上找。但是这个声明在使用的后面所以会报错。

```tsx{5}
function fn() {
    var x = 1;
    if (x) {
        console.log(x);
        let x = 2;
    }
}
fn();
```

##### 🌰 栗子 4：函数参数默认值情况

```tsx
// 情况1
function fn(x = 1, y = x) {
    console.log(x); // 1
    console.log(y); // 1
}

// 情况2 - 报错 Cannot access 'y' before initialization
function fn(x = y, y = 1) {
     console.log(x);
    console.log(y);
}

```

从两个情况来分析一下， 第一个可以正常运行，但是第二个情况会产生报错说y还没有被初始化就已经使用。可以分析出函数参数默认值是从左到右进行解析的，把它们看做为下面的代码理解：

```tsx{5}
// 情况1 
let x = 1;
let y = x;
// 情况2；
let x = y; // 所以这里会报错
let y = 1; 
```

##### 🌰 栗子 5：函数参数与内部声明相同的情况

这里感觉很疑惑， 因为从情况1中说明函数 `()`与  `{}`  中属于同一个块，所以会提示重复声明。如果是同一个块情况下 ` var x = 2` 也会产生重复声明， 但是情况 2又完全正常。查阅了一些资料说这个情况JS内部有修正机制函数内部遇到var情况下优先使用var, 具体先这么记一下

```tsx
// 情况1 内部let声明 重复定义错误 Identifier 'x' has already been declared
function fn(x = 1) {
    let x = 2;
    console.log(x);
}

// 情况2正常
function fn(x = 1) {
     var x = 2;
    console.log(x); // 2
}
```

##### 🌰 栗子 6： for循环中是否存在着块作用域

从这个栗子中我们也看出了var 的缺陷， 我们指向在for循环内部上下文中使用i, 但是它会被绑定到了外部作用域，循环中所有函数使用的同一个i变量， 所以会打印出5个5。而使用let就不会产生这个问题, 因为for循环头部的let不仅将j绑定到了for循环的块中，而且它将其重新绑定到了循环的每一个迭代中，*简单的说变量j在循环过程中不止被声明一次，每次迭代都会声明，随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。*

```tsx
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // 输出5个5
    }, 0);
}
console.log(i); // 5

for (let j = 0; j < 5; j++) {
    setTimeout(() => {
        console.log(j); // 0 1 2 3 4
    }, 0);
}
console.log(j); // j is not defined

```

##### 🌰 栗子 7： 继续证明for循环中的块作用域

``` tsx
var n = {a: [1, 2]};
for (let n of n.a) { // Cannot access 'n' before initialization
    console.log(n); 
}
```

因为要遍历出 n.a 这个数组， 所以要先知道 n.a 这个值， 正因为`()`会产生块作用域所以n优先访问内部发现n还没有声明就已经被使用了所以这里会报错， 也证明了for循环中也会产生块作用域

```tsx
var n = {a: [1, 2]};

 for (var n of n.a) {
     console.log(n); // 1 2
 }

console.log(n, 'last'); // 2
```

分析下var：首先执行到for循环的时候先得出n.a的值为 [1, 2], 然后因为var a会提升覆盖外层的n值所以当执行完毕后最后打印的n值为2。

##### 🌰 栗子 8：  `if()` 小括号有块级作用域吗？

下面代码会报出语法错误， 因为if的括号中必须是一个值，不能含有声明等其他语句。所以if（）中不会产生块作用域。

```tsx
if (let i = 1) {
    console.log(i);
}
```

##### 🌰 栗子9： 多层块级嵌套和var声明

这里也会报错，重点抓住var 变量提升的特点，它类似于冒泡一样一层层的往上提升到全局或者函数顶部。 这里中间只有有一个层级有相同的let变量就会产生错误。

```tsx
{
    {
        let a = 1;
        {
            {
                var a = 1;
            }
        }
    }
}
```

#### 总结一下

能用let尽量使用let， 使用var容易导致作用域不明确。

利用块级作用域来进行最小授权，减少全局变量避免全局污染。

```tsx
// window全局情况下函数声明和变量声明都会绑定到window上,任何其他的地方都可以访问它们
var bigData = {}; // 一个数据量庞大的对象
function fn() {
    console.log(bigData);
};
fn();

// 优化利用块级作用域进行包裹以及函数表达式避免函数提升
{
    let bigData = {};
    let fn = () => {
        console.log(bigData);
    }
}
```

