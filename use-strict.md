### 标志
	"use strict";	// 老版本的浏览器会把它当作一行普通字符串，加以忽略

### 全局变量显示声明
	"use strict";
	v = 1;						// 报错，v未声明
	for(i = 0; i < 2; i++) {}	// 报错，i未声明

### 静态绑定
Javascript允许**动态绑定**，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。
  
* 禁止使用with语句  
> 因为with语句无法在编译时就确定，属性到底归属哪个对象。
  
	"use strict";
	var v = 1;
	with (o){		// 语法错误 
		v = 2;
	}
* 创设eval作用域
>正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。  
严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。

    "use strict";
	var x = 2;
	console.info(eval("var x = 5; x"));	// 5
	console.info(x);					// 2

### 增强的安全措施
> 禁止this关键字指向全局对象

	function f(){
		return this;	// window{}
	}
	 
	function f(){ 
		"use strict";	// undefined
		return this;
	}

> 禁止在函数内部遍历调用栈  
> 限制arguments对象[原因](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)

	(function f1(){
		"use strict";
		f1.caller; 		// 报错
		f1.callee;		// 报错
		f1.arguments;	// 报错
	})();
'arguments'：该对象代表正在执行的函数和调用它的函数的参数  
'callee'：是arguments对象的一个属性，指向arguments对象的函数  
'caller'：是函数对象的一个属性，该属性保存着调用当前函数的函数的引用（该属性已废弃）
> arguments不再追踪参数的变化

	function f21(a) {
		a = 2;
		return [a, arguments[0]];
	}
	f(1);		// 正常模式为[2,2]

	function f22(a) {
		"use strict";
		a = 2;
		return [a, arguments[0]];
	}
	f(1);		// 严格模式为[2,1]

### 禁止删除变量
> 严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除。

	"use strict";
	var x;
	delete x;	// 语法错误
	var o = Object.create(null, {'x': {
		value: 1,
		configurable: true
	}});
	delete o.x;	// 删除成功

### 显示报错
> 正常模式下，对一个对象的只读属性进行赋值，失败但不会报错；严格模式下则会报错。

	"use strict";
	var o = {};
	Object.defineProperty(o, "v", { value: 1, writable: false });
	o.v = 2;	// 报错
> 严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。

	"use strict";
	var o = {
		get v() { return 1; }
	};
	o.v = 2;	// 报错
> 严格模式下，删除一个不可删除的属性，会报错。

	"use strict";
	delete Object.prototype; // 报错

### 重名错误
* 对象不能有重名的属性
> 正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。

	"use strict";
	var o = {
		p: 1,
		p: 2
	};			// 语法错误
* 函数不能有重名的参数
> 正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。

	"use strict";
	function f(a, a, b) {	// 语法错误
		return ;
	}

### 禁止八进制表示法
> 正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。  
> 严格模式禁止这种表示法，整数第一位为0，将报错。

	"use strict";
	var n = 0100;			// 语法错误

### 函数必须声明在顶层
> 严格模式只允许在全局作用域或函数作用域的顶层声明函数，不允许在非函数的代码块内声明函数

	"use strict";
	if (true) {
		function f() { }	// 语法错误
	}
	for (var i = 0; i < 5; i++) {
		function f2() { }	// 语法错误
	}

### 保留字
> 新增了一些保留字：**implements, interface, let, package, private, protected, public, static, yield**  
> ECMAscript第五版本身还规定了另一些保留字：**class, enum, export, extends, import, super, const**
























