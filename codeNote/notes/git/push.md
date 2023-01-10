---
title: 推送
date: 2023-01-10
categories:
 - 笔记
tags:
 - Git
prev: pull.md
next: false
---

# Git上传

## 上传文件(夹)

### 初始化
```git
git init
```

### 上传
添加文件到暂存区

上传文件
```git
git add <文件名>
```

上传文件夹
```git
git add <文件夹>
```

上传全部
```git
git add .
```

### 提交
提交暂存区到本地仓库。
```git
git commit -m "first commit"
```

### 添加远程
```git
git remote add origin https://github.com/***
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