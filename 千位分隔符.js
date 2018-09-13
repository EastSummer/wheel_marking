
/**1
 * 实现思路是将数字转换为字符数组，再循环整个数组， 每三位添加一个分隔逗号，最后
 * 再合并成字符串。因为分隔符在顺序上是从后往前添加的：比如 1234567添加后是
 * 1,234,567 而不是 123,456,7 ，所以方便起见可以先把数组倒序，添加完之后再倒序回
 * 来，就是正常的顺序了。要注意的是如果数字带小数的话，要把小数部分分开处理。
 * */
function numFormat(num){
    num=num.toString().split(".");  // 分隔小数点
    var arr=num[0].split("").reverse();  // 转换成字符数组并且倒序排列
    var res=[];
    for(var i=0,len=arr.length;i<len;i++){
      if(i%3===0&&i!==0){
         res.push(",");   // 添加分隔符
      }
      res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    if(num[1]){  // 如果有小数的话添加小数部分
      res=res.join("").concat("."+num[1]);
    }else{
      res=res.join("");
    }
    return res;
}

var a1 = 1234567894532;
var b1 = 673439.4542;
console.log(numFormat(a1)); // "1,234,567,894,532"
console.log(numFormat(b1)); // "673,439.4542"

/**2
 * 使用JS自带的函数 toLocaleString
 * 要注意的是这个函数在没有指定区域的基本使用时，返回使用默认的语言环境和默认选
 * 项格式化的字符串，所以不同地区数字格式可能会有一定的差异。最好确保使用 locales 
 * 参数指定了使用的语言。
 * 注：我测试的环境下小数部分会根据四舍五入只留下三位。
 * */
var a2 = 1234567894532;
var b2 = 673439.4542;

console.log(a2.toLocaleString());  // "1,234,567,894,532"
console.log(b2.toLocaleString());  // "673,439.454"  （小数部分四舍五入了）

/**3
 * 使用正则表达式和replace函数
 * replace 语法：str.replace(regexp|substr, newSubStr|function)
 * 
 * 
 * */
function numFormat(num){
  var res=num.toString().replace(/\d+/, function(n){ // 先提取整数部分
       return n.replace(/(\d)(?=(\d{3})+$)/g,function($1){
          return $1+",";
        });
  })
  return res;
}

var a3 = 1234567894532;
var b3 = 673439.4542;
console.log(numFormat(a3)); // "1,234,567,894,532"
console.log(numFormat(b3)); // "673,439.4542"


