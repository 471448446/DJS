<template>
	<view>
		<text>使用if-else控制标签的显示</text>
		<view v-if="visable">现在你看到我了</view>
		<view v-else>你看不到我了</view>
		<view>使用if-elseif-else控制标签的显示</view>
		<view v-if="conditionA ==='A'">条件是A</view>
		<view v-else-if="conditionA ==='B'">条件是B</view>
		<view v-else-if="conditionA ==='C'">条件是C</view>
		<view v-else>条件是不是A、B、C</view>
	
		<view v-if="(number % 3) === 0">能被3整除</view>
		<view v-else>不能被3整除</view>
		<text>只使用v-if</text>
		<view v-if="(number % 3) === 0">没有使用else标签</view>
	</view>
</template>

<script setup lang="ts">
	import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
	// 使用等于
	let conditionA = "C"
	let number = ref(0)
	let visable = ref(true)
	let timer = 0
	onBeforeMount(() => {
		timer = setInterval(() => {
			visable.value = visable.value ? false : true
			number.value = number.value + 1
		}, 1000)
	})
	onBeforeUnmount(() => {
		clearInterval(timer)
	})
</script>

<style>

</style>