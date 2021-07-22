const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : "属性未定义"
  },

  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("不是整数")
      }
      if (value >= 200) {
        throw new TypeError("值太大了")
      }
    }

    obj[prop] = value
    return true
  }
}

let target = {}

const p = new Proxy(target, handler)
p.a = 100
p.b = 200
console.log(p); //{ a: 100, b: 200 }
console.log(p.c); //属性未定义

console.log(target.a); //100

// p.age = "1.22" //报错

p.age = 100
console.log(p);
