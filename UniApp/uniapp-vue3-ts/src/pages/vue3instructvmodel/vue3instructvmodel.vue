<template>
	<view>
		<text class="simpleTitle"> v-model双向数据绑定。</text>
		<text>你可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。</text>
		<input v-model="inputMessage" placeholder="输入" style="margin: 20rpx;" />
		<text>您输入的内容是：{{inputMessage}}</text>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	let inputMessage = ref("")
</script>

<style>
	@import "../../common/common.css";
</style>