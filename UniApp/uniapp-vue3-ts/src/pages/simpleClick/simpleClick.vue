<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{refVariable}}</text>
		</view>
		<!-- 类似的点击 -->
		<button @click="onClickButton">{{clickText}}</button>
		<button @click="onClickButtonRef">{{clickText2}}</button>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

	// 这里不能向js那样定义 导出函数？ 
	//https://stackoverflow.com/questions/74829155/how-do-i-fix-error-a-default-export-must-be-at-the-top-level-of-a-file-or-modul
	//https://blog.csdn.net/qq_36825145/article/details/130732424
	// export default Vue.extend({
	// 		data() {
	// 			return {
	// 				title: 'Hello'
	// 			}
	// 		},
	// 		components:{
	// 			uniBadge
	// 		}
	// 	});
	// 因为项目使用了vue3，这里有个语法糖setup
	// 注意<script setup lang="ts"> 使用了setup语法糖 ：https://cn.vuejs.org/api/sfc-script-setup.html
	// 在script 中申明的变量和函数，都可以直接暴露被模板中使用。666
	const refVariable = "使用setup语法糖后，模板可以直接引用script中的变量。\n同时可以发现ref刷新页面会刷新整个页面！！！"
	// 不适用ref，我靠，点击后，无法刷新模板
	var clickText = "不使用ref，点击试试"
	var clickCount = 0
	function onClickButton() {
		clickCount++
		clickText = "不使用ref，点击试试" + clickCount
		console.log(clickText)
	}
	// 使用ref后，可以刷新UI，就是这么回事
	var clickText2 = ref("使用ref，点击试试")
	var clickCount2 = 0
	function onClickButtonRef() {
		clickCount2++
		clickText2.value = "使用ref，点击试试" + clickCount2
		console.log(clickText)
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
		margin-left: 5%;
		margin-right: 5%;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>