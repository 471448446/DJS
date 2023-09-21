<template>
	<view>
		<view>
			<text class="simpleTitle">响应式一个对象</text>
			<view>使用reactive：{{helloReactive}} {{helloReactive.count}}</view>
			<view>使用ref：{{helloReactiveRef}} {{helloReactiveRef.count}}</view>
		</view>
		<view>
			<text class="simpleTitle">缺陷2，失去响应性</text>
			<view>{{defect2}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive, ref } from 'vue';
	const helloReactive = reactive({
		count: 0,
		name: ""
	})
	const helloReactiveRef = ref({
		count: 0,
		name: ""
	})
	let defect2 = reactive({ count: 1024 })
	// 模拟对象字段发生变化
	setTimeout(() => {
		helloReactive.count = 100
		helloReactive.name = "张三"
		helloReactiveRef.value.count = 100
		helloReactiveRef.value.name = "张三"
		//因为 Vue 的响应式系统是通过属性访问进行追踪的，如果我们直接“替换”一个响应式对象，这会导致对初始引用的响应性连接丢失：
		defect2 = reactive({ count: 2048 })
	}, 2000)
</script>

<style>
	@import "../../common/common.css";
</style>