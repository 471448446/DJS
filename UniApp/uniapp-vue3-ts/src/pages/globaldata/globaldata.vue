<template>
	<view>
		<!-- https://juejin.cn/post/6916074986276913166 -->
		<!-- 注意，不能在模板中直接使用 getApp().globalData。因为此时页面还未加载 -->
		<text>获取全局数据{{getAppVersion}}</text>
	</view>
</template>

<script setup lang="ts">
	import { onBeforeMount, ref } from 'vue';
	let getAppVersion = ref(0)
	onBeforeMount(() => {
		console.log(getApp().globalData)
		getAppVersion = getApp().globalData.appVersion
	})
</script>

<style>

</style>