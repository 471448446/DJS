<template>
	<!-- https://uniapp.dcloud.net.cn/tutorial/vue3-basics.html#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95 -->
	<view>
		<view>
			<text class="simpleTitle">直接操作JS代码</text>
			<button @click="counter++">click:{{counter}}</button>
		</view>
		<view>
			<text class="simpleTitle">调用方法</text>
			<button @click="clickCounter">click:{{counter}}</button>
		</view>
		<view>
			<text class="simpleTitle">显示方法指定参数</text>
			<button @click="clickCounter($event)">click:{{counter}}</button>
			<button @click="clickCounter2('hello',$event)">click:{{counter}}</button>
		</view>
		<view>
			<text class="simpleTitle">绑定多个点击方法，这个有点6啊</text>
			<button @click="clickCounter($event),clickCounter2('hello',$event)">click:{{counter}}</button>
		</view>
		<view>
			<text class="simpleTitle">事件修饰符</text>
			<view>@click.prevent可以阻止默认事件</view>
			<view>@click.stop: 各平台均支持， 使用时会阻止事件冒泡，在非 H5 端同时也会阻止事件的默认行为</view>
			<view>
				<!-- 这玩意在微信上无法跳转 -->
				<a href="https://www.baidu.com">百度一下,点击后打开百度</a>
			</view>
			<view>
				<a href="https://www.baidu.com" @click.prevent="clickCounter">百度一下，点击事件被拦截</a>
			</view>
			<view>
				<a href="https://www.baidu.com" @click.stop="clickCounter">百度一下，点击事件被拦截</a>
			</view>
		</view>


	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	const counter = ref(0)
	function clickCounter(event : MouseEvent) {
		console.log(event)
		counter.value++
	}
	function clickCounter2(msg : String, event : MouseEvent) {
		console.log(event)
		counter.value++
		uni.showToast({
			title: msg
		});
	}
</script>

<style>
	@import "../../common/common.css"
</style>