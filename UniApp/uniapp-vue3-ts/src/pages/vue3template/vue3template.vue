<template>
	<view>
		<view>{{getVar}}</view>
		<!-- 可以在模板中是表达式，但是不能用if-else 因为者不是表达式 -->
		<!-- 流控制也不会生效，请使用三元表达式 -->
		<!-- <view>{{ if (ok) { return message } }}</view> -->
		<!-- 不能在模板中访问全局变量 -->
		<view>判断Boolean{{xxxCondition ? "Yes":"No"}}</view>
		<view>调用函数{{xxxxString.split('').reverse().join("")}}</view>
		<view v-for="(item,index) in 10">
			<!-- 通过%运算符求余数，实现隔行换色的效果 -->
			<view :class="'list-' + index%2">index:{{index}},item:{{item}},{{index%2}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	const getVar = "模板中直接获取script中的值"
	// Vue.js 都提供了完全的 JavaScript 表达式支持。
	const xxxCondition = true
	const xxxxString = "Hello Vue"
</script>

<style>
	.list-0 {
		background-color: #aaaaff;
	}

	.list-1 {
		background-color: #ffaa7f;
	}
</style>