<template>
	<view>
		<button @click="testWxRequest">wx.request测试</button>
		<button @click="getLauncerTest">wx.getLaunchOptionsSync测试</button>
		<view>微信小程序版本 {{appInfo}}</view>
	</view>

</template>

<script setup lang="ts">
	import { ref } from 'vue';
	const appInfo = ref("")
	function testWxRequest() {
		// 测试直接调用weix的api
		wx.request({
			url: "https://www.baidu.com",
			method: 'GET',
			success: (res) => {
				console.log(res)
				uni.showToast({
					title: '成功'
				});
			},
			fail: (err) => {
				console.log("fail:" + err.errMsg + "," + err.errno)
				uni.showToast({
					title: '失败'
				});
			}
		})
	}
	/**
	 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html
	 */
	function getLauncerTest(){
		const xxx = wx.getLaunchOptionsSync()
		console.log("启动参数：" + xxx)
		// Object.keys(p).forEach((k)=>{
		// 	console.log(k)
		// })
		for (let key in xxx) {
			console.log("getLaunchOptionsSync", key, xxx[key])
		}
	}
	new Promise((resolve, reject) => {
		// https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html
		const xxx = wx.getLaunchOptionsSync()
		resolve(xxx)
	}).then((p) => {
		console.log("启动参数：" + p)
		// Object.keys(p).forEach((k)=>{
		// 	console.log(k)
		// })
		for (let key in p) {
			console.log("getLaunchOptionsSync", key, p[key])
		}
	})
	new Promise((ok, err) => {
		const info = wx.getAccountInfoSync()
		ok(info)
	}).then((p) => {
		for (let key in p) {
			console.log("getAccountInfoSync", key, p[key])
		}
		appInfo.value = "appId:" + p.miniProgram.appId + " ," +
			"envVersion:" + p.miniProgram.envVersion + " ," +
			"version:" + p.miniProgram.version
	})
</script>

<style>

</style>