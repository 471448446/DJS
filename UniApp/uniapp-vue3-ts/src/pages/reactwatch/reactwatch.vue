<template>
	<view>
		<view>
			<text>Warning: 需要使用v-model.number 将输入的合法字符串转为数字</text>
			<input v-model.number="inputA" type="number" style="border: red solid 1px;" />
			<input v-model.number="inputB" type="number" style="border: red solid 1px; margin-top: 10rpx;" />
			<text>sum:{{inputSum}}</text>
			<button @click="sumInput">求和</button>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, watch } from 'vue';
	const inputA = ref(0)
	const inputB = ref(0)
	const inputSum = ref(0)
	watch(
		inputA,
		(now, before) => {
			console.log("inputA 变化，" + before + ",now " + now)
		},
		// 一开始就监听
		{ immediate: true }
	)
	function sumInput() {
		// 默认当作时字符串了？？
		// inputSum.value = inputA.value + inputB.value
		// 需要使用v-model.number 将输入的合法字符串转为数字 https://cn.vuejs.org/api/built-in-directives.html#v-model
		inputSum.value = inputA.value + inputB.value
	}
</script>

<style>

</style>