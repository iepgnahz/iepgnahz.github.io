---
layout: post
title: multiple_ssh_setting
date: 2020-08-10 22:32:20 +0300
description: multiple_ssh_setting
img: github-octocat.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Git, Issue]
---

## 如何配置multiple_ssh_setting

按照文档上的步骤走了一遍https://medium.com/@xiaolishen/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693

### Issue

直接运行`git pull origin master`报错

```
ERROR: Repository not found.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

这时候你需要检查

```
$ ssh-add -l #check 你新添加的key是否在list里面
```

如果没有就是你出错的原因, 你需要运行下面的指令，将你新创建的key加入

```
ssh-add ~/.ssh/yourkey.rsa
```