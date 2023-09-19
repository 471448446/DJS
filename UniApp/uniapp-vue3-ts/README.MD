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

## App.vue

`App.vue/uvue`是`uni-app`的主组件。`uni-app js`引擎版是`app.vue`。`uni-app x`是`app.uvu`e。以下出现的`app.vue`一般泛指包含了app.uvue

所有页面都是在`App.vue`下进行切换的，是应用入口文件。但`App.vue`本身不是页面，这里不能编写视图元素，也就是没有<template>。

这个文件的作用包括：监听应用生命周期、配置全局样式、配置全局的存储`globalData`

应用生命周期仅可在App.vue中监听，在页面监听无效。

[微信getApp()](https://developers.weixin.qq.com/miniprogram/dev/reference/api/getApp.html)：`App.vue`中定义了全局变量，写法有点不一样。灵感来源于[与普通的 <script> 一起使用](https://cn.vuejs.org/api/sfc-script-setup.html#usage-alongside-normal-script)：使用`setup`的可以可以普通的`script`一起使用。

# css
## flex 布局
示例：`/pages/uiflex/uiflex`

先要在style里面指定使用flex布局：display: flex
1. 然后指定排列方式以继要不要换行。flex-direction 排放方式 ，flex-wrap要不要换行。 简写方式：flex-flow
2. 接着指定对其方式。justify-content 主轴对其方式, align-item 非主轴对其方式



# Vue

[uni-基础](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html)

## 模板

`/pages/vue3template/vue3template`

[模板](https://cn.vuejs.org/guide/essentials/template-syntax.html)

使用setup后，模板中直接获取script中的值。

可以在模板中使用JS表达式，不如三目表达式`<view>{{ ok ? 'YES' : 'NO' }}</view>`,`<view>{{ message.split('').reverse().join('') }}</view>`。但不能用if-else这种，这种是语句。

## 指令

### v-bind

`/pages/vue3template/vue3templateinstruct`

[v-bind](https://cn.vuejs.org/api/built-in-directives.html#v-bind)

用于响应式更新html属性

html的标签内容可以通过`{{content}}`实现更新，但是标签的属性是无法用过`{{}}`方式更新的。

也支持绑定style和class。

* 绑定style时，注意是`:style`

* 可以使用多个class
* 也可以使用数组的方式

### v-on

`pages/vue3instructvon/vue3instructvon`

就是点击事件，缩写方式`@`
### if-else

`pages/vue3instructifelse/vue3instructifelse`

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。 使用 `v-else` 指令来表示 `v-if` 的“else 块”。 `v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。
