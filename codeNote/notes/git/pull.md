---
title: 删除
date: 2023-01-10
categories:
 - 笔记
tags:
 - Git
prev: false
next: push.md
---

# Git删除

## 删除Github文件

### 克隆
```git
git clone https://github.com/***
```

### 初始化
```git
git init
```

### 删除
删除文件
```git
git rm FILE
```

删除文件夹
```git
git rm -r ***
```

### 提交
```git
git commit -m "first commit"
```

### 推送
```git
git push origin master
```

::: tip
第一次添加远程origin时，需要 `-u`
```
git push -u origin master
```
:::

