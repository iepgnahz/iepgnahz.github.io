---
layout: post
title: npm hooks
date: 2020-08-31 12:44 +0800
description: npm hooks
img: buildkite-logo.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [npm, package-json]
---

## Background

你现在在开发一个APP，这个APP会使用你正在开发的另外一个package1作为dependency。
当你向npm register中发布了你的package1之后，APP从npm register中install了你的package1。
一切看似进行的很顺畅，但是你测试APP的时候，突然发现有一个bug出现在package1中，你当然直接在node_module中的package1 folder
中debug，然后想要开始fix这个issue，这时候你可能觉得你做的修改只在node_module中，修改完了之后还得将changes拷贝到package1
中，再向npm register中发布一个package1的fix版本。

这个copy操作听起来很麻烦，可以不可以在node_module中的修改也可以直接在我的package1中生效？

## How to

两个步骤就可以搞定你的需求：

1. 进入你本地的package1 folder中执行

```shell script
$ npm link
```

给这个package1创建一个全局的symbol link

2. 进入你的APP中执行：

```shell script
$ npm link package1
```

让你APP中的package1使用刚刚创建的全局symbol link。

## link
https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557



