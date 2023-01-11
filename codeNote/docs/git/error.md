---
title: 常见报错
date: 2023-01-11
categories:
 - 笔记
tags:
 - Git
prev: pull.md
next: false
---

# 常见报错

## OpenSSL SSL_read: Connection was reset, errno 10054

原因：  
超时  
因为git在拉取或者提交项目时，中间会有git的http和https代理，但是我们本地环境本身就有SSL协议了，所以取消git的https代理即可，不行再取消http的代理。

解决方案：
1. 取消git本身的https代理，使用自己本机的代理，如果没有的话，其实默认还是用git的
```git
//取消http代理
git config --global --unset http.proxy
//取消https代理 
git config --global --unset https.proxy
```

2. 科学上网（vpn）
这样就能提高服务器连接速度，能从根本解决 time out 问题

## Timed out

同上