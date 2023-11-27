
/**
 * 
if的（）里面 条件都会转为true 或者false 来判断， 里面最终是一个Boolean 表达式,Boolean 值规则如下：
1. 所有的对象都被当作 true。
2. 当且仅当字符串为空时，该字符串被当作 false。
3. null 和 undefined 被当作 false。
4. 当且仅当数字为零（0）时，该数字被当作 false。
 * @param check 
 */
function log(check: any) {
    if (check) {
        console.log("type:" + (typeof check) + ",value:" + check + " = true" + ", isNull:" + isNull(check))
    } else {
        console.log("type:" + (typeof check) + ",value:" + check + " = false" + ", isNull:" + isNull(check))
    }
}
/**
 * 
 * @param check 检查值
 * @returns 根据前面的结果，提供的空判断方法
 */
function isNull(check: any) {
    return check == null || check == undefined || check == "" || check == 0 || check == false;
}
let xx;
// undefine
log(xx);
// null
xx = null;
log(xx);
// 数字
xx = 0;
log(xx);
xx = 1;
log(xx);
// 字符串
xx = "";
log(xx);
xx = "a";
log(xx);
xx = "zhangshan";
log(xx);
// 对象
xx = {};
log(xx);