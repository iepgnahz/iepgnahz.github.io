---
layout: post
title: ES678 features
date: 2020-07-19 13:32:20 +0300
description: ES678 features
img: react.png # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Javascript, Es]
---

## Why docker

### The Matrix From Hell!

## docker command

### docker image

### docker container

docker container只有在有command需要运行的时候才会run

- start/run

  - docker run
    
    docker run 不能接受input或者说交互， 如果想要交互，那么必须使用`-i`
    docker run 不能promote，因此需要使用`-t`
    
    使用docker run运行容器有两种mode：
        - 标准输出
        - detach
        当你在使用-d模式但是后来又想得到标准输出和输入以及error， 那么就需要使用`docker attach [container-name]`将输出召回

### append a command
docker detach 

- stop/rm
- list container
- docker exec 
在一个正在运行的容器中执行某一个指令 
    
### docker inspect
 
### docker cleanup

Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.

```
$ docker system prune

WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all build cache
```
dangling images: image的一次build，产生了一个新的镜像但是这个镜像没有被命名和使用。
https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes

## docker layer
每一个layer只会存储对比上一层有变化的部分，因此不会出现每层大小递增的情况


### Why

节省时间和空间，如果两个Dockerfile的前几行是一样的，那么在build第二个image的时候，相同的几行形成的layer可以直接从cache中取出
![docker compare](../assets/img/docker.png)
## Dockerfile

### docker CMD vs ENTRYPOINT vs RUN

### CMD

定义了容器运行起来执行的第一个命令，可以被指令中的command`docker run [imageName] [command]` replace

### use CMD and ENTRYPOINT at the same dockerfile

## Docker network

### Docker network driver type

#### bridge(default network)

#### host(only work on linux)

#### none

你也可以使用以上的driver创建一个customerized的network

#### customer 

## Docker store data

### mount

#### type

- volume mount

这种是使用`docker volume`提前创建好一个volume，然后映射给容器

- bind mount

这种是直接将host上的文件映射到容器中， 直接给文件地址

#### command

```
docker run --mount type=bind, source=/data/mysql, target=/var/lib/mysql mysql
```

## docker-compose

- version1
- version2

自动创建新的以项目命名的network，让所有的容器运行在这个network下

## docker registry

```
Image： docker.io/nginx/nginx/latest
       [registry] [User/account/originazion] [repository/Image] [tag/version]
```
docker registry是存储docker images的地方，如果你要pull镜像，那么有很多的public的docker registry可供选择，比如`docker hub` `google registry（gcr）`
当然你也可以搭建自己private的docker registry，很多云服务都提供了这个服务，比如AWS的ECR/GCP
## question 








