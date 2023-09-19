<template>
	<view>
		<!-- v-on -->
		<view>
			<!-- v-on就是事件缩写@ -->
			<button v-on:click="onClickButton">v-on事件</button>
			<button @click="onClickButton">v-on事件</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			onClickButton: function(){
				uni.showModal({
					content: '点击',
					showCancel: false
				});
			}
		}
	}
</script>

<style>

</style>
