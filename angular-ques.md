### Promise
> [AngularJS 的 Promise](https://segmentfault.com/a/1190000002788733#articleHeader0)  
> [AngularJS 中的 Promise 和 设计模式](https://my.oschina.net/ilivebox/blog/293771) 
>  
> [[翻译] We have a problem with promises](http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/?qq-pf-to=pcqq.c2c)


### Angular模态框
> [angular-strap](http://mgcrea.github.io/angular-strap/)

> [中文文档](https://angular.cn/)  
> [中文社区](http://community.angular.cn/)  
> [Api](https://code.angularjs.org/1.6.1/docs/api)

https://material.angularjs.org/latest/layout/introduction

> [UI-Grid 博客](http://blog.csdn.net/vesong87/article/details/67638001)
> [UI-Grid and Row Animations](http://blog.csdn.net/vesong87/article/details/67638001)


### Angular跳转并打开新的窗口
	$scope.openNewWindow = function(data){
		localStrage.userId = data;
		let url = $scope.href('index.userList.userBasicinfo',{basicType:8});
		window.open(url,'_black');
	}

### angular 锚链接
```js
xxx.controller('apiMonitorController',function($scope,$state,$http,$location,$anchorScroll,uiGridConstants, $interval){
	$scope.isActive = 1;
	$scope.changeClass = function(index){
    	$scope.isActive = index;
    	$location.hash('monitor-'+index);
    	$anchorScroll();
    }
})
```

### [angular interval](https://code.angularjs.org/1.4.3/docs/api/ngMock/service/$interval)
```js
$interval(fn, delay, [count], [invokeApply], [Pass]);
function customersController($scope, $http) {
    var refresh = function () {
        $http.get("issues/get_json").success(
            function (response) {
                $scope.names = response;
            });
    };
    //每隔5秒刷新
    setInterval(function () {
        $scope.$apply(refresh);
    }, 5000);
    refresh();
}
```

### angular http
```js
$http.get('api/user', { params:{id:'5'} })
    .success(function(data, status, headers, config) {  
        //加载成功之后做一些事  
    })
    .error(function(data, status, headers, config) {  
        //处理错误  
	});


var blob = new Blob(['Hello world'], {
	type: 'text/plain'
});
$http({
	method: 'POST',
	url: '/',
	data: blob
});
```
