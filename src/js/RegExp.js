/**
 * 正则表达式
 */

let className = "content"
let reg = new RegExp("(^|\\s)" + className + "(\\s|$)")
let el = "1 content "

if (reg.test(el)) {
  console.log("success");
}
