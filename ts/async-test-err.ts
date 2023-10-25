/**
 * 1. async 里面的直接抛异常和return返回值，是Promese的缩写方式
 * 2. 在async内部处理异常的方式是try-catch或者直接在Promise.catch()
 */

/**
 * 模拟一个耗时任务，最后失败
 * @returns 
 */
function resolveAfter2Seconds() {
    return new Promise((resolve, err) => {
        setTimeout(() => {
            err("抛出异常");
        }, 1000);
    });
}

async function asyncCall() {
    console.log('calling');
    // await 后面可以正常的处理异常，像asyncCall2就没有处理，外界受到了err
    const result = await resolveAfter2Seconds().catch((err) => {
        console.log("await异常" + err)
    });
    return result;
    // return result; 等同于 return Promise.resolve(result);
}

async function asyncCallNoCatch() {
    console.log(' asyncCall2 calling');
    const result = await resolveAfter2Seconds();
    return result;
}
async function asyncCallCatch() {
    console.log(' asyncCall2 calling');
    try {
        return await resolveAfter2Seconds();
    } catch (e) {
        // 可以在async内部先处理了异常，在抛出去
        return Promise.reject(e);
    }
}

asyncCall().then((res) => {
    console.log("then:" + res);
}).catch((err) => {
    console.log("err:" + err);
});
console.log("---");
asyncCallNoCatch().then((res) => {
    console.log("noCatch then:" + res);
}).catch((err) => {
    console.log("noCatch err:" + err);
});

console.log("---");
asyncCallCatch().then((res) => {
    console.log("asyncCallCatch then:" + res);
}).catch((err) => {
    console.log("asyncCallCatch err:" + err);
});
