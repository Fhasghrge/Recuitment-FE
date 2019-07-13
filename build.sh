#!/usr/bin/env bash
sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories
apk update
apk add nodejs npm
npm install --registry=https://registry.npm.taobao.org
npm run build
docker build -t $DOCKER_BUILD_TAG .
