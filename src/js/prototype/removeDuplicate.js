/**
 * 数组去重
 */

//测试数据 ：[1,1,"2","2",undefined,undefined,null,null,true,true,{},{},[],[],NaN,NaN,]

function removeDuplicate() {
  console.log(11111);
}

//方法一  无法去掉{} []
//结果：[1,"2",undefined,null,true,{},{},[],[],NaN,]
function removeDuplicate1() {
  return Array.from(new Set(this))
}

//方法二  无法去掉{} []
//结果：[1,"2",undefined,null,true,{},{},[],[],NaN,]
function removeDuplicate2() {
  return [...new Set(this)]
}

//方法三 无法去掉{} [] NaN 
//结果：[1,"2",undefined,null,true,{},{},[],[],NaN,NaN]
function removeDuplicate3() {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] === this[j]) { //强等于，例如 1==true
        this.splice(j, 1) //第一个等同于第二个，删除第二个
        j--;
      }
    }
  }
  return this;
}

//方法四 无法去掉{} [] NaN 
//结果：[1,"2",undefined,null,true,{},{},[],[],NaN,NaN]
function removeDuplicate4() {
  let arr = []

  this.forEach(el => {
    if (arr.indexOf(el) === -1) arr.push(el)
  })

  return arr;
}



Array.prototype.removeDuplicate = removeDuplicate4;
