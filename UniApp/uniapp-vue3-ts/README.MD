# 运行项目
```bash
# 安装依赖
npm i
# 运行 
# npm run:h5
# 或者直接用HBuilderX打开项目运行
```

# UniApp知识点

## 生命周期

生命周期这个可好理解，跟页面相关。但是这里还需要关注组件的生命周期。

这里分为UniApp的[页面生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)和Vue组件的生命周期[生命周期钩子](https://cn.vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks)，两者都是在`<script>`中声明。UniApp是支持Vue的组件生命周期的，另外还自己加了一些页面的生命周期函数。
* 页面的生命周期函数，可以在`App.vue`中看到。
* 组件的生命周期可以，运行`/pages/lifecycle/lifecycle`和`/pages/lifecycle2/lifecycle2`，在控制它观察。

而因为vue3有个setup的语法糖，可以直接在`<script setup>`申明。所以用不用这个语法糖，写法有点点不一样。但是主要的逻辑是一样的。要区分`mount`，`unmount`，`update`几个状态就行。