---
layout: post
title: Introduction to Roll up
date: 2020-08-18 22:32:20 +0300
description: Introduction to Roll up
img: Headless-browser.jpg # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Browser, Headless]
---

# Introduction to Headless Browsers

## Tip

For browsers:

# compile to a <script> containing a self-executing function ('iife')
rollup main.js --file bundle.js --format iife（立即执行函数）
For Node.js:

# compile to a CommonJS module ('cjs')
rollup main.js --file bundle.js --format cjs
For both browsers and Node.js:

# UMD format requires a bundle name
rollup main.js --file bundle.js --format umd --name "myBundle"
