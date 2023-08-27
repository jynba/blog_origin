---
title: git常用命令
date: 2023-8-26
tags:
  - git
categories:
  - git
---

### 强制 pull

1. git fetch --all
2. git reset --hard origin/main
3. git pull

### 清除已经跟踪的文件（如：dist）

1. git rm -r --cached dist
2. 在.gitignore 添加 dist/
3. 重新提交

### 撤销 commit 和 add 的文件

git reset --soft HEAD~1

git add . （只添加修改的文件夹）

git add -A（添加所有文件）

### 撤销 add 的某个文件

1. 不删除工作区的修改内容

git restore --staged <文件路径>

2. 删除工作区的修改内容

git restore <文件路径>

### 强制撤销 commit 的文件，回到某一次 commit（清除所有 add)

git reset --hard HEAD~1

### 切换分支

git checkout xxx

### 提交

### 查看所有分支树

`gitk --all`

画图工具：

https://mermaid.js.org/syntax/gitgraph.html
