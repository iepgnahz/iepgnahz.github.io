---
layout: post
title: Buildkite intro
date: 2020-07-28 22:32:20 +0300
description: CI/CD Tool buildkite intro
img: buildkite-logo.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [CI/CD, buildkite]
---

buildkite是一个用于构建`持续集成(continue integration)和持续交付(continue delivery)`pipeline的平台。

## CI/CD
Continuous Integration (CI) 是一种开发的实践，这种实践要求开发者每天多次将code集成到一个shared repo（Github Repo）中。
开发者的每一次提交，都会自动触发一个pipeline, 这个pipeline会去验证这次提交的内容是否正确（通过各种test），只有通过验证的提交才会被集成到shared repo中。
开发者每天多次集成代码，每次的集成都可以通过这个pipeline进行验证，从而帮助团队更早的发现问题，并且定位问题。 这种pipeline我们将其称作`CI pipeline`。

Continuous Delivery (CD) 也是一种实践，这种实践对你的项目要求极高，它要求项目中的任何修改（新功能、更新、修bug）都能持续的安全的快速的部署生产环境并直接被用户使用。做到极致的CD甚至每一次集成都会直接被部署到Prod，这就得保证你的project在任何时刻都是可用的可以部署的。


buildkite 
## Concept

- pipeline

- build

- step

- job
