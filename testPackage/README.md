## 贡献参考

如果需要本地调试新增功能，可以通过http-server新启一个本地服务，然后利用本地的index.html引入新增js文件来进行测试

## http-server 
快速启动一个服务器

这里不指定path则为当前`public/`下，如果不存在`public`则为`./`

在当前目录下，如果写成
```bash
http-server ./index.html 
或
http-server index.html
都不可以
```

在当前目录下，写成
```bash
http-server
```
即可


## 基于本项目通过http-server来测试包

需要进入到根目录 `/` 中运行`http-server`开启服务器

然后点击进入`testPackage/index.html`

此时才可以正常测试
比如我这里的：
![测试地址](https://tva1.sinaimg.cn/large/e6c9d24ely1h4esjdcveyj21uq0u0jvh.jpg)
