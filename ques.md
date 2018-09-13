### question

## 1.prototype与__proto__的关系
* prototype 显式原型
* 每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。
* Note：通过Function.prototype.bind方法构造出来的函数是个例外，它没有prototype属性。

* __proto__ 隐式原型
* 每个对象都会在其内部初始化一个内置属性__proto__，指向构造该对象的构造函数的原型
* 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，那么他就会去__proto__里找这个属性，这个__proto__又会有自己的__proto__，于是就这样 一直找下去，也就是我们平时所说的原型链的概念。
* Note: Object.prototype 这个对象是个例外，它的__proto__值为null

* 原型链的本质，其实在于__proto__,prototype只是在new的时候有着一定的价值
	var Person = function () { };
	var p = new Person();
	等价于
	<1> var p={};	初始化一个对象p
	<2> p.__proto__ = Person.prototype;
	<3> Person.call(p);	构造p，也可以称之为初始化p

## 2.meta viewport 原理
* viewport就是浏览器上(也可能是一个app中的webview)用来显示网页的那部分区域
* css中的1px并不等于设备的1px(设备分辨率、用户缩放...)
	window.devicePixelRatio	设备像素比(设备物理像素和设备独立像素的比例) = 物理像素 / 独立像素	
* 理论上，<html>元素的宽度受到viewport宽度的限制。该<html>元素占该viewport宽度的100％
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
* 该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放

## 3.域名收敛	DNS（Domain Name System，域名系统）
* 域名收敛的意思就是建议将静态资源只放在一个域名下面，而非发散情况下的多个域名下
* 一般在手机端上解析DNS 会到1s+

## 4.inline-block和float的共性和区别
* 两者共同点是都可以实现元素在一行显示，并且可以自由设置元素大小
* inline-block: 水平排列一行，即使元素高度不一，也会以高度最大的元素高度为行高，即使高度小的元素周围留空，也不回有第二行元素上浮补位
* float: 让元素脱离当前文档流，呈环绕装排列，如遇上行有空白，而当前元素大小可以挤进去，这个元素会在上行补位排列

## 5.前端优化策略
* 尽量减少HTTP请求个数(图片整合、js/css压缩混淆)
* 避免空的src和href
* gzip压缩内容
* CSS放到顶部&JS放到底部、外部引用、代码复用
* 延迟加载、预加载、懒加载
* 减少dom访问
* ...

## 6.首屏、白屏时间如何计算
	time => html + css + js + ajax(data) + apply	//请求数据渲染页面
	time => html + css + js							//后台直出&同构
	白屏时间（DNS+建立连接时间+后端响应）				//另一种说法

## 7.闭包

## 8.作用域链

## 9.ajax如何实现 & readyState五种状态的含义

## 10.jsonp如何实现

## 11.怎么处理跨域



## 12.get和post的区别
* get向服务器索取数据的一种请求，post向服务器提交数据的一种请求
* get方式安全性低，post方式较安全。但是post方式执行效率要比get方式差一些
* get大小限制取决于浏览器和服务器，post取决于服务器
* get请求会被浏览器主动cache且在浏览器回退时是无害的，post会再次提交请求
* GET请求只能进行url编码，而POST支持多种编码方式
* GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留
* GET只接受ASCII字符，而POST没有限制
* GET参数通过URL传递，POST放在Request body中

* GET产生一个TCP数据包，POST产生两个TCP数据包
	对于GET请求，浏览器会把http header和data一并发送出去，服务器响应200(返回数据)
	对于POST请求，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)
	//并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次


## 13.事件模型
* 冒泡型事件（Bubbling）：事件由叶子节点沿祖先节点一直向上传递到根节点
* 捕获型事件（Capturing）：由DOM树最顶元素一直到最精确的元素，与冒泡型事件相反
* DOM标准事件模型：DOM标准既支持冒泡型事件，也支持捕获型事件，可以说是两者的结合体，首先是捕获型，接着冒泡传递


## 14.web端cookie设置和获取方法
* 设置cookie
	function setCookie(c_name, value, expiredays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = c_name + "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	}
* 读取cookie
	function getCookie(name){
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	    if(arr=document.cookie.match(reg)){
		    return (arr[2]);
	    }else{
		    return null;
	    }
	}
* 删除cookie
	function delCookie(name){
    	var exp = new Date();
    	exp.setTime(exp.getTime() - 1);
    	var cval=getCookie(name);
    	if(cval!=null){
	    	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    	}
	}




