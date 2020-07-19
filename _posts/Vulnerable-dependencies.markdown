---
layout: post
title: Vulnerable Dependency
date: 2020-07-20 22:32:20 +0800
description: Vulnerable Dependency
img: i-rest.jpg # Add image post (optional)
fig-caption:
tags: [Git/NPM, Vulnerable]
---

## npm security audit
npm security audit是npm@6发布的一个新feature。可以通过查找和fix已知的vulnerabilities来保护你的项目以及项目的用户。

### what is npm audit? 

`npm audit`只是一个npm的command，当你运行这个command的时候，npm会帮助查看你整个项目的dependency tree，依次review项目中的每一个dependency(dependencies/devDependencies/bundledDependencies/optionalDependencies), 包括dependency的dependency，帮你找出这些dependency存在的vulnerabilities，并且生成一份详细的report。
还可以帮助你fix这些vulnerabilities。

`npm audit`指令还会在使用`npm install`安装新的dependency的时候被自动调用，npm会去check即将安装的dependency是否有任何的安全漏洞，然后生成report。
当然对于一个已经存在的项目，可以手动运行`npm audit`，检查项目中的所有dependency。

**Note**
`npm audit`指令只能在有`package.json/package-lock.json`的项目下使用，否则会报错。

### How to fix vulnerabilities?

使用`npm audit`查找到vulnerabilities之后，你可以通过生成的report一次fix这些dependency的漏洞。report中会包含有问题的dependency的`name`/`severity`/`dependency tree or path`, 有时候report中还会提供这dependency可供升级的安全版本。

#### 使用`npm audit fix`
很多时候你都可以通过直接调用`npm audit fix`，直接将一些dependencies的安全漏洞修复。但是还是会存在一些没有这个指令无法fix的漏洞，需要手动进行review。

#### 根据npm建议的patch版本手动修复
你也可以通过手动的方式，找到有漏洞的dependency的path，看看它是你安装的哪一个dependency的dependency，直接将你安装的dependency升级到建议的版本。但是请注意留意`SEMVER warnings`，有可能npm建议的版本有breaking changes，这时候你需要自己去斟酌

#### 当dependencies没有安全的版本

这种情况下report中会提供关于这个dependency的issue你需要自己去做调研。

### best practice

出于对项目安全的考量，最好能将`npm audit`加入到CI中，保证每一次的提交都能经过npm的检查。
但是要知道使用`npm audit`,如果你的项目中存在任何的漏洞，这个指令就会以`非零`退出码退出，那么CI就会挂掉。
但是其实在很多情况下，一下low level的漏洞其实没必要让它挂掉CI，因此你可以通过设置`--audit-level`参数改变`npm audit`报错的阈值。
比如你的CI上使用这个指令`npm audit --audit-level high`，这时候只有指令check出high level的漏洞才会以`非零`的退出码退出。

## Github manages vulnerabilities

大部分项目的所有代码都是集成在github上的，因此github更能够帮助你全面的发现你项目中的各种问题。因此你也可以采取使用Github帮助你管理项目依赖项中的漏洞。
因此Github推出了一个工具`GitHub Dependabot`，它会帮助你会检测你的project，如果发现里面有任何的`vulnerabilities`，就会给你发出`Dependabot alerts`，那么就让我们来详细看看这个工具。

## GitHub Dependabot


