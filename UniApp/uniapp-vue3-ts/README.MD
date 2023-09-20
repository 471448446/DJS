# 运行项目
```bash
# 进入项目
cd uniapp-vue3-ts
# 安装依赖
npm i
# 运行 
npm run:h5
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
### 条件渲染

`pages/vue3instructifelse/vue3instructifelse`

#### v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 `truthy` 值的时候被渲染。 使用 `v-else` 指令来表示 `v-if` 的“else 块”。 `v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。

#### v-show

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样。

不同的是带有 `v-show` 的元素始终会被渲染并保留在 `DOM` 中。`v-show` 只是简单地切换元素的 `CSS` 属性的 `display` 。

> 注意，v-show 不支持 template 元素，也不支持 v-else。nvue 页面不支持 v-show。

#### v-if 和 v-show 区别

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换，来控制元素的显示和隐藏。

**根据应用场景选择**

- `v-if` 有更高的切换开销，如果在运行时条件很少改变，则使用 v-if 较好。
- `v-show` 有更高的初始渲染开销。如果需要非常频繁地切换，则使用 v-show 较好。

**注意**

- 不推荐同时使用 `v-if` 和 `v-for`。
- 当 `v-if` 与 `v-for` 一起使用时，**`v-if` 具有比 `v-for` 更高的优先级**

### v-for列表渲染

`/pages/vue3instructvfor/vue3instructvfor`

`v-for `指令可以实现基于一个数组来渲染一个列表。

`v-for` 指令需要使用`(item, index) in items`, `item in items` 形式的特殊语法，其中` items` 是源数据数组，而 `item` 则是被迭代的数组元素的别名。

* 在 `v-for` 块中，我们可以访问所有父作用域的 `property`
* 第一个参数 `item` 则是被迭代的数组元素的别名。
* 第二个参数，即当前项的索引 `index` ，是可选的。

`v-for` 是**重复的当前**申明了`v-for`的节点

渲染对象`<view v-for="(value, name, index) in object">`

> 在遍历对象时，会按 `Object.keys()` 的结果遍历，但是不能保证它在不同 `JavaScript` 引擎下的结果都一致



#### 维护状态

>  反正就是，如果列表数据会变化，需要设置`:key`属性，防止错位。并且需要明确key不重复

当 `Vue` 正在更新使用 `v-for` 渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，`Vue` 将不会移动 `DOM` 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

这个默认的模式是高效的，但是**只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

为了给 `Vue` 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 `key` attribute

#### v-for 与 v-if 一同使用

> 不推荐在同一元素上使用 v-if 和 v-for

当它们处于同一节点，**`v-if` 的优先级比 `v-for` 更高**，这意味着 `v-if` 将没有权限访问 `v-for` 里的变量：

```js
	<!-- 这将引发错误，因为未在实例上定义属性“todo” -->
	<view v-for="todo in todos" v-if="!todo.isComplete">
	  {{ todo }}
	</view>
```

## 事件绑定

使用`v-on:click`或者`@click`

* 一个事件可以绑定多个点击函数
* 事件修饰符全平台只有`.stop`支持。各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为。

**不要在JS中获取DOM设置事件**。
