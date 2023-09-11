
/**
 *  假设，顶一个个方法需要两个参数
 * @param name  名称
 * @param height 身高
 * @returns 
 */
function record(name, height) {
    return name + "," + height
}
function recordType(name: string, height: number) {
    // 字符串模板
    return `name:${name},height: ${height}`
}
// 只输入一个参数，编辑器就提示错误了
record("张三")
recordType("张三", 180)