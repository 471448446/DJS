<script lang="ts">
	const appVersion = 110
	// 微信中，只有通过这种方式申明才能使用全局变量。妈蛋
	export default {
		globalData: {
			appVersion: appVersion
		}
	}
</script>
<script setup lang="ts">
	// https://uniapp.dcloud.net.cn/collocation/App.html#applifecycle
	/*
	这个文件的作用包括：监听应用生命周期、配置全局样式、配置全局的存储globalData
	应用生命周期仅可在App.vue中监听，在页面监听无效。
	*/
	import { onLaunch, onShow, onHide, onError, onInit, onLoad } from "@dcloudio/uni-app";
	// 页面生命周期和组件生命周期有区别

	onLaunch(() => {
		//初始化完成时触发（全局只触发一次）。通常用来初始化前置数据，比如获取用户信息。
		console.log("App Launch");
	});
	onShow(() => {
		//启动或从后台转入前台显示。例如将这个app放到了后台，现在又从后台中进入。可以用于第二次打开页面需要刷新数据的情况下。
		//监听页面显示，页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面
		console.log("App Show");
	});
	onHide(() => {
		//从前台进入后台。例如使用app时返回桌面，这个app将会放到后台这时候就会触发。可以由于清除缓存或者保护隐私的情况下使用。
		console.log("App Hide");
	});
	// ------=-----------上面是默认就填写的几个生命周期
	onInit(() => {
		//监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad
		console.log("App onInit");
	})
	onLoad(() => {
		//监听页面加载，该钩子被调用时，响应式数据、计算属性、方法、侦听器、props、slots 已设置完成，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考示例
		console.log("App onLoad");
	})
	onError(() => {
		//报错时触发。
		console.log("App onError");
	})
	// 注意这种方式无法在微信中使用，这里调用getApp()就报错误，undefined
	// // 在App.vue中保存的数据，就是全局变量
	// const appVersion = 110
	// console.log("app.vue appVersion:" + appVersion)
	// /**
	//  * 	使用setup后的语法。
	//  * 如果没有使用：export default { globalData: {xxxx} }
	//  */
	// getApp().globalData.appVersion = appVersion
	// const globalData = {
	// 	appVersion: appVersion
	// }
	// getApp().globalData = globalData
	// // console.log(getApp().globalData)
</script>
<style></style>