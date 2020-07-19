---
layout: post
title: Introduction to Headless Browsers
date: 2020-08-11 23:32:20 +0300
description: Introduction to Headless Browsers
img: Headless-browser.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Browser, Headless]
---

# Introduction to Headless Browsers

## What Is Headless Browsers

是一种没有GUI的浏览器。
既然没有GUI，那么如何和某一个website的page交互呢？无头浏览器提供了很多的接口（CLI/API), 
帮助我们通过编程的方式实现所有在GUI上可以执行的操作（比如点击button，页面的前进和后退）。

> GUI
> graphical user interface  图形用户界面

无头浏览器可帮助您快速自动化网站的各种操作，并且节省了GUI所必须消耗的大量内存，给多线程、进程并行提供了方便。

## Why We Need Headless Browsers?

无头浏览器可以帮助我们做很多的事情，下面有几种最常见的情况：

- 自动化测试

当你需要给你的网页做一些行为测试，比如jump到这个页面，填写表单，然后点击提交button这个操作。因为只是测试，你不需要真的打开浏览器，看到页面进行一些用户操作
这样费时间又浪费内存，因此你可以直接无头浏览器，通过调用headless browser提供的API，直接使用JS代码完成上面的操作。

- 网页截屏

- 爬虫

- 获取页面相应时间的报告

## Doc

- https://www.multidots.com/introduction-to-headless-browsers/
- https://www.zhihu.com/question/314668782
- https://www.toptal.com/puppeteer/headless-browser-puppeteer-tutorial
