### 原npm地址
	npm config set registry http://registry.npmjs.org 

### 设置国内镜像
	npm config set registry https://registry.npm.taobao.org 

### 使用nrm管理registry地址
1. 下载nrm
	npm install -g nrm

2. 添加registry地址
	nrm add npm http://registry.npmjs.org
	nrm add taobao https://registry.npm.taobao.org

3. 切换npm registry地址
	nrm use taobao
	nrm use npm

> [搜索镜像: https://npm.taobao.org](https://npm.taobao.org)  
> [建立或使用镜像,参考: https://github.com/cnpm/cnpmjs.org](https://github.com/cnpm/cnpmjs.org)  


### windows 下更新 npm 和 node
1. npm 更新
	npm install npm@latest -g

2. node 更新
	网上很多的说法都是先安装 n 模块  sudo npm install -g n   (在此之前清除 npm cache   cache sudo npm cache clean -f   )  
	[参考的博客](http://blog.csdn.net/sruru/article/details/46301405)  
	
	最后我是通过重新下载新版本的 msi 安装包，然后覆盖安装之前的版本来完成更新操作的。



