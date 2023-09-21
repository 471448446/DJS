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

### v-model

你可以用 v-model 指令在表单 `input`、`textarea` 及 `select` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

比如输入框中，实现输入内容和变量得绑定

特别注意，他有修饰符[v-model](https://cn.vuejs.org/api/built-in-directives.html#v-model)。

* 比如我在`pages/reactwatch/reactwatch`页面，监听两个输入框输入得数字，然后简单相加。居然不能政策运行。虽然申明了接受类型是`Ref<Number>`，但是还是要需要借助于`v-model.number="inputA"`将输入框中的输入转换成数字，才能正常的相加。感觉这更像是个bug。



## 事件绑定

使用`v-on:click`或者`@click`

* 一个事件可以绑定多个点击函数
* 事件修饰符全平台只有`.stop`支持。各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为。

**不要在JS中获取DOM设置事件**。



## 响应式

[响应式 API：核心](https://cn.vuejs.org/api/reactivity-core.html)

vue3中，借助于向响应式，刷新模板。

### 计算属性computed

`pages/settergetter/settergetter`

`computed` 表示[计算属性](https://juejin.cn/post/7135633187002122270)，通常用于处理数据，简化书写在模板中的复杂逻辑。使用 `computed` 可以将数据处理成我们想要的格式，无需在模板中使用复杂冗长的计算表达式。

computed有两个方法，分别是set()和get()。它可以接受一个带有 `get` 和 `set` 函数的对象来创建一个可写的 ref 对象。

* 为什么要有computed？ 模板中逻辑过重，不易维护，所以使用计算属性`computed`来简化书写响应式状态的复杂逻辑。



### 侦听属性watch

`pages/reactwatch/reactwatch`

虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 `Vue` 通过 `watch` 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

当你有一些数据需要随着其它数据变动而变动时，就可以使用`Watch`来监听他们之间的变化。

一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。 `Vue` 实例将会在实例化时调用 `$watch()` ，遍历 `watch` 对象的每一个 `property` 。



[vue:watch](https://cn.vuejs.org/api/reactivity-core.html#watch)

#### computed和watch区别

> watch是用来监听值得变换，在回调函数中，处理变化。而computed是更像是将属性变化后组合成新的值



[计算属性 vs 侦听属性](https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7)



### reactive

`pages/reactreactive/reactreactive`

响应式代理，这个是针对的对象，不能代理基础类型（string，number，boolean），ref是不限制的。

`reactive()` 返回的是一个原始对象的 `Proxy`

* 响应式转换是“深层”的：它会影响到所有嵌套的属性。一个响应式对象也将深层地解包任何 [ref](https://cn.vuejs.org/api/reactivity-core.html#ref) 属性，同时保持响应性。值得注意的是，当访问到某个响应式数组或 `Map` 这样的原生集合类型中的 ref 元素时，不会执行 ref 的解包。若要避免深层响应式转换，只想保留对这个对象顶层次访问的响应性，请使用 [shallowReactive()](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 作替代。[reactive](https://cn.vuejs.org/api/reactivity-core.html#reactive)
* 因为 Vue 的响应式系统是通过属性访问进行追踪的，如果我们直接“替换”一个响应式对象，这会导致对初始引用的响应性连接丢失：

[全方位带你掌握 ref、reactive，开启 Vue3 响应式的大门！](https://juejin.cn/post/7143358534481575973)
