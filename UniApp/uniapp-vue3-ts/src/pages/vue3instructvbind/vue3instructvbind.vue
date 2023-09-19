<template>
	<view>
		<!-- ====v-bind -->
		<!-- 并不能直接在image的属性src上使用`src{{imageUrl}}` -->
		<view>延时2秒后，展示图片{{imageUrl}}</view>
		<!-- <image src="{{imageUrl}}"></image> -->
		<image v-bind:src="imageUrl" class="imageSize"></image>
		<!-- 缩写 -->
		<image :src="imageUrl" class="imageSize"></image>
		<!-- bindstyle属性，注意这里是:style -->
		<button :disabled="buttonDisable"
			:style="{fontSize: (buttonDisable?48:50)+'rpx',color:(buttonDisable?'black':'red')}">我是一个变化的按钮</button>
		<!-- 绑定class和style -->
		<view>
			<view class="static" :class="{ active: isActive}">hello uni-app</view>
			<!-- 也可以在对象中传入更多字段来动态切换多个 class。此外，v-bind:class 指令也可以与普通的 class 共存。 -->
			<view class="static" :class="{ active: isActive, 'text-danger': hasError }">hello uni-app</view>
		</view>
		<!-- 可以把一个数组传给 v-bind:class，以应用一个 class 列表。 -->
		<view>
			<view :class="['active','text-danger']">hello uni-app</view>
			<!-- 可以使用三元表达式： -->
			<view :class="[isActive?'active':'','text-danger']">hello uni-app</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { onBeforeMount, onBeforeUnmount, ref } from 'vue';
	// 假设我们在js中某个时间获取了图片地址，这个时候需要展示。这里注意要使用
	var imageUrl = ref("")
	let buttonDisable = ref(false)
	// 两个定时器，方便看效果
	let timer = 0;
	let timer2 = 0;
	// 延时v-bind 样式
	let isActive = ref(true)
	let hasError = ref(false)

	onBeforeMount(() => {
		// https://blog.csdn.net/pan_junbiao/article/details/7880523
		timer = setTimeout(function () {
			// imageUrl = "https://upload.jianshu.io/images/js-qrc.png"
			imageUrl.value = "https://upload.jianshu.io/images/js-qrc.png"
			console.log("图片地址：" + imageUrl.value)
		}, 2000)
		timer2 = setInterval(() => {
			buttonDisable.value = buttonDisable.value ? false : true
			isActive.value = isActive.value ? false : true
			hasError.value = hasError.value ? false : true
		}, 1000)
	})
	onBeforeUnmount(() => {
		clearTimeout(timer)
		clearInterval(timer2)
	})
</script>

<style>
	.imageSize {
		width: 200rpx;
		height: 200rpx;
	}

	.static {
		color: #2C405A;
	}

	.active {
		background-color: #007AFF;
		font-size: 30px;
	}

	.text-danger {
		color: #DD524D;
	}
</style>