<!--  查看生命周期 -->
<!-- 这是vue3的组件生命周期，跟uniapp的页面生命周期有点不一样，sb了 。uniapp的生命周期是写在App.vue中-->
<!-- https://cn.vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram -->
<template>
	<view>
		<text>Console输出生Vue3的生命周期</text>
		<button @click="count++">count:{{count}}</button>
	</view>
</template>

<script setup lang="ts">
	import { onHide, onLoad, onShow } from '@dcloudio/uni-app';
	import { onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, ref } from 'vue'
	// mount，unmount, update 注意这三个状态对于的写法，是不是用setup语法糖不一样（就是setup写在 <script 处）
	/*
	启动
	onRenderTracked()
	page onLoad()
	page onShow()
	onBeforeMount()
	onMounted 
	*/
	/*
	退出
	onBeforeUnmount()
	onUnmounted()
	*/
	/*
	刷新模板
	onRenderTriggered()
	onBeforeUpdate()
	onUpdated
	*/
	const count = ref(0)
	onMounted(() => {
		// 注册一个回调函数，在组件挂载完成后执行。
		console.log("onMounted ")
	})
	onUpdated(() => {
		// 注册一个回调函数，在组件因为响应式状态变更而更新其 DOM 树之后调用。
		console.log("onUpdated")
	})
	onUnmounted(() => {
		// 注册一个回调函数，在组件实例被卸载之后调用。
		console.log("onUnmounted()")
	})
	onBeforeMount(() => {
		// 注册一个钩子，在组件被挂载之前被调用。
		console.log("onBeforeMount()")
	})
	onBeforeUpdate(() => {
		// 注册一个钩子，在组件即将因为响应式状态变更而更新其 DOM 树之前调用。
		console.log("onBeforeUpdate()")
	})
	onBeforeUnmount(() => {
		// 注册一个钩子，在组件实例被卸载之前调用。
		console.log("onBeforeUnmount()")
	})
	onErrorCaptured(() => {
		// 注册一个钩子，在捕获了后代组件传递的错误时调用。
		console.log("onErrorCaptured()")
	})
	onRenderTracked(() => {
		// 注册一个调试钩子，当组件渲染过程中追踪到响应式依赖时调用。
		console.log("onRenderTracked()")
	})
	onRenderTriggered(() => {
		// 注册一个调试钩子，当响应式依赖的变更触发了组件渲染时调用。
		console.log("onRenderTriggered()")
	})
	onActivated(() => {
		// 注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用。
		console.log("onActivated()")
	})
	onDeactivated(() => {
		// 注册一个回调函数，若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用。
		console.log("onDeactivated()")
	})
	onServerPrefetch(() => {
		// 注注册一个异步函数，在组件实例在服务器上被渲染之前调用。
		console.log("onServerPrefetch()")
	})
	// ------------页面生命周期
	onLoad(() => {
		console.log("page onLoad()")
	})
	onHide(() => {
		console.log("page onHide()")
	})
	onShow(() => {
		console.log("page onShow()")
	})
</script>

<style>

</style>