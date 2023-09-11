
/**
 * doc:数组
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections
 */
// 定义一个数组
var array = ['A', 'B', 'C']

// 迭代
console.log("for ... of");
for (let v of array) {
    console.log(v);
}
console.log("for ... length");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("forEach");
array.forEach((v) => {
    console.log(v);
})
console.log("contact 拼接新数组");
console.log(array.concat(['c', 'd']));
console.log(array.concat('c', 'd'));

console.log("pop 移除最后一个元素");
let newArray = array.concat('c', 'd')
// 移除的元素是：
console.log(newArray.pop());
console.log(newArray);
