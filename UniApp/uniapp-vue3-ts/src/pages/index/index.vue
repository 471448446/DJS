<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<button @click="naviSimpleClick">计数器</button>
		<button @click="naviSimpleClick2">计数器2</button>
		<button @click="naviTo('/pages/lifecycle/lifecycle')">使用setup，Vue3组件生命周期</button>
		<button @click="naviTo('/pages/lifecycle2/lifecycle2')">不使用setup，Vue3组件生命周期</button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const title = ref('Hello UniApp Vue3 and ts')
	function naviSimpleClick() {
		//https://uniapp.dcloud.net.cn/component/navigator.html#
		uni.navigateTo({
			// todo 这个路径每次这样写，怕是有点麻烦噢
			url: '/pages/simpleClick/simpleClick'
		})
	}
	function naviSimpleClick2() {
		//https://uniapp.dcloud.net.cn/component/navigator.html#
		uni.navigateTo({
			// todo 这个路径每次这样写，怕是有点麻烦噢
			url: '/pages/simpleClick2/simpleClick2'
		})
	}
	function naviTo(target : String) {
		uni.navigateTo({
			url: target
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>