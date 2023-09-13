<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="testClick">{{buttonText}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello Sunshiny Boy',
				buttonText: '点击',
				clickCount:0
			}
		},
		onLoad() {

		},
		methods: {
			//  不是function testClick(),这里是注册的一个map
			testClick: function(){
				this.clickCount++
				this.buttonText = "点击按钮"+this.clickCount
			}
		}
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
