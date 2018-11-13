# this call apply 完全理解

## this
this 是 JavaScript 的关键字，在函数体内部使用，其具体的指向由函数运行时的环境决定。
```javascript
function Foo(){
  this.x = 1;
}
```
函数的具体指向根据调用情况可以分为四种情况：

## 1，单纯的函数调用
这是最简单的，在这种情况下，`this` 指向全局对象。  
例子1：
```javascript
var a = 123;
function foo(){
  console.log(this.a);
}
foo();    // 123
```
不属于任何函数的变量，或者在全局中定义的变量就是全局变量。上面代码中 `a` 就是全局变量。执行函数后，`this` 指向全局对象 `window` 。所以 `this.a` 就是 `window.a` 。

## 2，作为对象的方法调用
在作为对象的方法调用时，`this` 指向调用它的对象。谁调用包含 `this` 的函数，`this` 就指向谁。  
例子2：
```javascript
var obj = {
  x: 56,
  m: function(){
    console.log(this.x);
  }
};
obj.m();  // 56
```
在这个例子中，`m` 函数作为 `obj` 的方法被 `obj` 对象调用，所以 `this` 就指向 `obj`。

## 3，作为构造函数调用
例子3：
```javascript
function foo(){
  this.x = 34;
}
var age = new foo();
console.log(age.x);   // 34
```
可以通过构造函数 `new` 一个对象，`this` 就是指向新new出来的对象。

## 4，call和apply的调用
`call` 和 `apply` 用法是一样的，只是传递参数时有些许区别。这里以 `call` 举例说明，  
例子4：
```javascript
var x = 123;
var obj = {
  x: 567,
  m: function(){
    console.log(this.x);
  }
};
obj.m();  // 567
obj.m.call(window);   // 123	  => 就是把this值指向winodw
```
`call` 接受一组参数，第一个参数就是要指向的对象。后面的参数是要传入的值。

但是这还不是关于 `this` 的全部。要完全理解 `this` 前，需要先理解这句话。  

**this 永远指向最后调用它的对象**  

我们再来看一个例子。  
例子5
```javascript
var obj = {
  x: 56,
  m: function(){
    console.log(this.x);     // console.log(this === window); => true
  }
};
f = obj.m;    // 如果我这么调用会显示什么？
f();          // ??
```
你可以先在浏览的终端中运行一下，结果是否与你想的一样。如果一样，说明你理解了上面这句话。如果不一样，则说明你对上面这句话的理解有误差。例子5的结果是 `undefined`。为什么会这样？

再来看一下这就话，**this 永远指向最后调用它的对象 （重要的话重复三遍）**。
`f = obj.m` 这句代码把 `m` 方法赋值给了 `f` 。最后 `f` 执行的函数。 `f()` 直接执行了函数，这就相当于在全局环境中执行的。所以 `this` 指向了全局对象 `window`。而全局对象中没有变量 `x` ，所以显示 `undefined` 。  
我们可以把代码中的 `console.log(this.x)` 换为 `console.log(this === window)`。再执行一下代码，会输出为 `true` 。说明我们是对的。

## call apply
语法：`func.apply(thisArg,[argsArray])`