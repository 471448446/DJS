// 空处理
//https://juejin.cn/post/6844904150501687304

const string = '{"name":"张三"}';
const jsonObject = JSON.parse(string);
console.log(jsonObject['name'])
console.log(jsonObject['gender'])
console.log(jsonObject['gender'] ?? "男")