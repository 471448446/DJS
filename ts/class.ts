class Point {
    x: number;
    y: number;
    // 找到感觉了吧，构造函数
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
let point1 = new Point(1, 2);
console.log(point1);
console.log(typeof point1);
console.log(point1.x);

// 尝试解析json
let json = '{"x":1,"y":2}'
const parse1:Point = Object.assign(new Point(0,0), JSON.parse(json))
console.log(typeof parse1);
console.log("parse1:" + parse1);
console.log(parse1.x);
console.log(JSON.stringify(parse1));
// 
class XX{
    x:number = 0;
    y:number = 0;
}
const parse2:XX = Object.assign(new XX(), JSON.parse(json))
console.log(parse2);
console.log("stringify:"+JSON.stringify(parse2));