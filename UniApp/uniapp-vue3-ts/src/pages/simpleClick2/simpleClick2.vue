<!-- https://cn.vuejs.org/api/composition-api-setup.html#basic-usage -->
<!-- 在模板中访问从 setup 返回的 ref 时，它会自动浅层解包，因此你无须再在模板中为它写 .value。当通过 this 访问时也会同样如此解包。 -->
<!-- 如果在模板中引用变量
 1. 在setup中申明变量xxx
 2. 变量用ref
 3. return出去
 4. 在模板中引用{{xxx}}-->
<template>
	<view>
		<text class="timerText">{{timerExport}}</text>
		<button @click="clickButton">Count is :{{countExport}}</button>
	</view>
</template>

<script lang="ts">
	import { onDeactivated, onUnmounted } from '@vue/runtime-core'
	import { onMounted, ref } from 'vue'
	// 我日一开始引用错了，始终无法刷新数字
	// import { ref } from '@vue/runtime-core'
	// 定时器ID，
	var timerId = 0
	export default {
		//vue3.0中我们setup是可以定义一个变量，然后return发送出来，页面用{{}}直接获取

		setup() {
			const timer = ref(0)
			const count = ref(0)

			// const timerId = ref(0)
			onMounted(() => {
				console.log("setup-->onMounted")
			})

			onDeactivated(() => {
				console.log("setup-->onDeactivated")
			})

			onUnmounted(() => {
				console.log("setup-->onUnmounted")
			})

			return {
				//// 返回值会暴露给模板和其他的选项式 API 钩子
				countExport: count,
				timerExport: timer
			}
		},
		mounted() {
			console.log("mounted()")
			console.log("mounted: count value:" + this.countExport)
			timerId = setInterval(() => {
				this.timerExport++
				console.log("timer : " + this.timerExport)
			}, 1000)
			console.log("onMounted start timer" + timerId)
		},
		unmounted() {
			console.log("unmounted()")
			clearInterval(timerId)
			console.log("onUnmounted clear timer" + timerId)
		},
		methods: {
			clickButton: function () {
				this.countExport++
				console.log("click:" + this.countExport)
			}
		}
	}
</script>

<style>
	.timerText {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>