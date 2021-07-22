/**
 * 测试代码
 */

var count = 123;

function a() {
  var count = 124;
  console.log(count)
}
// a() //124

function b() {
  var count = 124;
  eval(`console.log(count)`)
}
// b() //124

function c() {
  var count = 124;
  new Function('', `console.log(count)`)()
}
// c() //报错！！！！？？？？不太理解，控制台可以正常使用


var myModules = (function Manage() {
  var modules = {}

  function define(name, deps, impl) {
    for (var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps)
  }

  function get(name) {
    return modules[name]
  }

  return {
    define: define,
    get: get
  }
})()

myModules.define("bar", [], function () {
  function hello(who) {
    return `Let me introduce ${who}`
  }

  return {
    hello: hello
  }
})

function foo() {
  console.log(aaa);
}
foo() //undefined
var aaa = 2
// foo() //2

let qs = {}
console.log(qs?.a?.b); //undefined


let sss = {
  a: "1",
  b: "2"
}
for (let i in sss) {
  console.log(i);
}

let aaaa = [{
  a: "aaa"
}]
for (let item of aaaa) {
  console.log(item);
}
