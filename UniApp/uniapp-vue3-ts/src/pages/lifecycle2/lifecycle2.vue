<template>
	<view>
		<button @click="count++">{{count}}</button>
	</view>
</template>

<script lang="ts">
	import { ref } from 'vue'

	// 如果不适用setup语法糖
	/*
	启动
	setup()
	beforeCreate()
	page onLoad()
	page onShow()
	beforeMount()
	mounted()
	*/
	/*退出
	beforeUnmount()
	unmounted()
	*/
	/*更新
	beforeUpdate()
	updated()
	*/
	export default {
		setup() {
			const count = ref(0)
			console.log("setup()")
			return {
				count
			}
		},
		beforeCreate() {
			console.log("beforeCreate()")
		},
		beforeMount() {
			console.log("beforeMount()")
		},
		mounted() {
			console.log("mounted()")
		},
		beforeUnmount() {
			console.log("beforeUnmount()")
		},
		unmounted() {
			console.log("unmounted()")
		},
		beforeUpdate() {
			console.log("beforeUpdate()")
		},
		updated() {
			console.log("updated()")
		},
		beforeDestroy() {
			console.log("beforeDestroy()")
		},
		destroyed() {
			console.log("destroyed()")
		},
		deactivated() {
			console.log("deactivated()")
		},
		onLoad() {
			console.log("page onLoad()")
		},
		onHide() {
			console.log("page onHide()")
		},
		onShow() {
			console.log("page onShow()")
		}
	}
</script>

<style>

</style>