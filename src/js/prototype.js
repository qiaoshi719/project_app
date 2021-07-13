Number.prototype.toPercent = function () {
  return (Math.round(this * 10000) / 100).toFixed(2) + "%"
}

String.prototype.toPercent = function () {
  return (Math.round(Number(this) * 10000) / 100).toFixed(2) + "%"
}

function toPercent2() {
  let decimalDigit = String(this).includes(".") ? String(this).split(".")[1].length : 0 //小数位数
  if (decimalDigit == 0) {
    return this * 100 + "%"
  } else {
    return Number(String(this).replace(/\./, "")) * 100 / Math.pow(10, decimalDigit) + "%"
  }
}
Number.prototype.toPercent2 = toPercent2
String.prototype.toPercent2 = toPercent2

//深度拷贝
function deepCopy(val = this) {
  //判断是否是基础类型
  if (typeof val === "undefined" || typeof val === "string" || typeof val === "boolean" || typeof val === "number") {
    return val
  }
  //判断是否是数组
  if (Array.isArray(val)) {
    let _arr = []
    val.foreach(el => _arr.push(el))
    return _arr
  }
  //判断是否是对象
  if (typeof val === "object") {
    let _obj = {}
    Object.entries(val).forEach(el => {
      _obj[el[0]] = deepCopy(el[1])
    })
    return _obj
  }
}

Object.defineProperty(Object.prototype, "deepCopy", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: deepCopy
})
