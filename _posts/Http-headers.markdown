---
layout: post
title: Http Header
date: 2020-08-25 13:32:20 +0300
description: Http Header
img: # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Http, Header]
---

## Content-Type

header中的Content-Type是用来指定资源的媒体类型。

在response的header中设置Content-Type，可以用来告诉请求者当前Response body的MIME(media type)
在request的header中设置Content-Type，可以用来告诉接收这个请求的服务器这个request的body的MIME，因此如果是POST或者PUT请求，通常需要加上这个字段。

### Question？

- 这个字段是必须的吗？

不是必须的，但是根据HTTP 1.1 specification所说：

对于任何一个包含`entity-body（request/response body`的HTTP/1.1 message（request、response）都`应该`设置这个header来定义body的MIME。
因为假设你不设置这个字段，那么接收者会根据body或者URI尝试猜测出这个body的媒体类型，如果实在猜不到，那么接收者会默认这个body是`application/octet-stream`类型。

因此你最好设置这个字段，否则想象一下，你发了一个post request，body是json类型。但是你忘记设置content type了，那么如果服务器没有猜出来，那么就会把body当成`application/octet-stream`处理，有可能会因为处理不了服务器崩溃。

