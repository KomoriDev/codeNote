---
title: 基础
date: 2023-01-10
categories:
 - 笔记
tags:
 - Git
prev: false
next: pull.md
---

# 基础

## 基础

### 拷贝
相当于下载一个仓库（将仓库下载到本地）
```git 
git clone https://github.com/***
```

### 初始化
初始化仓库
```git
git init
```

## 提交修改

### 添加文件
添加文件到暂存区
```git
git add .
```

### 添加至仓库
将暂存区内容添加到仓库中
```git
git commit "<提交说明>"
```

### 查看状态
查看仓库当前的状态
```git
git status
```

### 回退版本
回退代码版本
```git 
git reset
```

### 比较文件
比较文件的不同，说人话就是比较暂存区和工作区的差异
```git
git diff
```

### 删除文件
将文件从暂存区和工作区中删除。
```git 
git rm
```

### 移动文件
移动或重命名文件
```git
git mv
```

## 提交日志
查看历史记录
```git
git log
```
以列表形式查看指定文件的历史修改记录
```
git blame ***
```

## 远程操作

### 操作仓库
添加一个远程仓库地址，这样git就知道上传到哪里了
```
git remote
```

### 获取代码库
```git
git fetch
```

### 下载合并
下载远程代码并合并
```git
git pull
```

### 上传合并
```git
git push
```