<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<!-- <view style="display: flex; flex-flow: row wrap;"> -->
		<button @click="naviSimpleClick">计数器</button>
		<button @click="naviSimpleClick2">计数器2</button>
		<button @click="naviTo('/pages/lifecycle/lifecycle')">使用setup，Vue3组件生命周期</button>
		<button @click="naviTo('/pages/lifecycle2/lifecycle2')">不使用setup，Vue3组件生命周期</button>
		<button @click="naviTo('/pages/globaldata/globaldata')">全局数据</button>
		<view>
			<text class="simpleTitle">布局</text>
			<button @click="naviTo('/pages/uiflex/uiflex')">flex布局</button>
		</view>
		<view>
			<text class="simpleTitle">Vue3相关</text>
			<button @click="naviTo('/pages/vue3template/vue3template')">vue3操作模板</button>
			<button @click="naviTo('/pages/vue3instructvbind/vue3instructvbind')">vue3指令v-bind</button>
			<button @click="naviTo('/pages/vue3instructvon/vue3instructvon')">vue3指令v-on</button>
			<button @click="naviTo('/pages/vue3instructifelse/vue3instructifelse')">vue3指令if-else</button>
			<button @click="naviTo('/pages/vue3instructvfor/vue3instructvfor')">vue3指令v-for</button>
			<button @click="naviTo('/pages/vue3instructvmodel/vue3instructvmodel')">vue3指令v-model</button>
			<button @click="naviTo('/pages/eventclick/eventclick')">事件处理</button>
			<button @click="naviTo('/pages/reactcomputed/reactcomputed')">响应式：computed计算属性</button>
			<button @click="naviTo('/pages/reactwatch/reactwatch')">响应式：watch侦听属性</button>
			<button @click="naviTo('/pages/reactreactive/reactreactive')">响应式：reactive</button>
		</view>
		<view>
			<text class="simpleTitle">其他</text>
		</view>
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
	@import "../../common/common.css";

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 20rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20rpx;
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