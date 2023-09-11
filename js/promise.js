/**
 * doc： 使用 Promise
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises
 */

/*
程序输出：
start...
...step1
...step2
catchError: step3 发生了异常
last exit
*/
new Promise((resolve, reject) => {
    console.log("start...");
    // 必须要加resolve();，不然程序不会运行
    resolve();
})
    .then(() => {
        console.log("...step1");
    })
    .then(() => {
        console.log("...step2");
    })
    .then(() => {
        throw new Error("step3 发生了异常")
        console.log("...step3");
    })
    .catch((e) => {
        console.log("catch" + e);
    })
    .then(() => {
        console.log("last exit")
    })
