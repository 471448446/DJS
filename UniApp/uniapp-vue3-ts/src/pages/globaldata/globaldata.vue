<template>
	<view>
		<!-- https://juejin.cn/post/6916074986276913166 -->
		<!-- 注意，不能在模板中直接使用 getApp().globalData。因为此时页面还未加载 -->
		<text>获取全局数据{{getAppVersion}}</text>
	</view>
</template>

<script setup lang="ts">
	import { onShow } from '@dcloudio/uni-app';
	import { onBeforeMount } from 'vue';
	let getAppVersion = 0
	onBeforeMount(() => {
		console.log(getApp().globalData)

	})
	onShow(() => {
		getAppVersion = getApp().globalData.appVersion
	})
</script>

<style>

</style>