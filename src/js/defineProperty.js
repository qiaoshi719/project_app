let obj = {}
Object.defineProperty(obj, "name", {
  writable: true, //只有为true时，value值才能被改变
  enumerable: true, //只有为true时，该属性才会出现在对象的枚举中
  configurable: true, //为true时，该属性的描述符才能被改变，同时该属性也能从默认的对象上删除
  value: "joe"
})

obj.name = "111"

console.log(obj);
