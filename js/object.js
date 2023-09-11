/**
 * doc: 使用对象
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#%E5%88%9B%E5%BB%BA%E6%96%B0%E5%AF%B9%E8%B1%A1
 * 
 */
console.log("创建对象方式一");
/**
 * 创建对象方式一：
 * 我先申明一个对象，然后往里面添加属性
 */
let man = new Object();
man.weight = 46;
man.height = 180;
console.log(man);

console.log("创建对象方式二");
/**
 * 创建对象方式二：
 * 我先申明一个对象，然后往里面添加属性。
 * 我用花括号的方式访问属性
 */
let woman = new Object();
woman["weight"] = 46;
woman["height"] = 180;
console.log(woman);

console.log("创建对象方式三");
/**
 * 创建对象方式三：
 * 直接定义
 */
let monkey = {
    "monkeySun": "行者孙",
    // 当然属性也是可以嵌套
    "silver": {
        "name": "银角大王",
        // 定义方法
        canSay() {
            return "我是" + this.name
        }
    },
    // 这也是定义方法
    "say": function () {
        //  这里可以写方法名称，也可以不写，666。放飞。
        return "叫你一声你敢答应吗"
    }
}

console.log(monkey);
console.log(monkey.say());

console.log("创建对象方式四");
/**
 * 方式四：
 * 构造函数创建对象
 * 我发现前面的几种方式，无法复用，属性。
 * 就是每次都是直接定义一个对象，让添加属性。那么如果要创建对象2、3、4等等。不是比较麻烦？
 */
//这个跟Java里面完全不一样，没有class关键子，直接就是 函数，不过是一般以大写开头。
function Car(name, color) {
    this.name = name;
    this.color = color;
}

let car = new Car("BMA", "yellow");

console.log(car);

console.log("创建对象方式五");
/**
 * 方式五：
 * 使用原型对象
 */
let god = {
    "name": "这是一个上帝对象",
    "displayName": function () {
        // 用于显示 type 属性的方法
        console.log(this.name);
    }
}
let sb = Object.create(god);
// 发现次数，sb对象没有属性
console.log(sb)
sb.displayName();
// 这里添加同名属性，相当于复写，此时，sb对象已经有属性了
sb.name = "我不是上帝我是sb"
console.log(sb)
sb.displayName();
//  不是说指定了一个原型对象吗？咋个是undefined
console.log(sb.prototype);

/**
 * 从前面几个创建对象得方式可以看出，这里并不是创建对象，某种意义上是创建得方法。
 * 方法可以指定属性，是的没看错。构造函数创建对象都方式可以看出，这就是创建的一个方法嘛。
 */