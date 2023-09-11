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