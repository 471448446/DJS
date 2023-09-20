<template>
	<view>
		<view>
			<text class="simpleTitle">v-for是重复的当前节点</text>
			<view v-for="(item,index) in studients">
				{{listName}} {{index}} {{item}}
			</view>
		</view>
		<view>
			<text class="simpleTitle">v-for遍历对象的属性</text>
			<view v-for="(value,name,index) in studient">
				{{index}} {{name}} {{value}} {{name=="age"?(value>=18?"->成年":"->未成年"):""}}
				<text v-if="name === 'name' && value === '苏珊'">->电影中常见的女性名称</text>
			</view>
		</view>
		<view>
			<text class="simpleTitle">v-for中建议绑定:key</text>
			<text>下面的列子，点击按钮后会交换数组中1、2的元素，并添加第三个或者删除第三个元素。并没有看出区别</text>
			<button @click="changeNews">点击修改下面v-for渲染的数据</button>
			<text>绑定:key</text>
			<view v-for="(item,index) in news" :key="item.id">
				i:{{index}} {{item.id}} {{item.title}}
			</view>
			<text>没有绑定:key</text>
			<view v-for="(item,index) in news">
				i:{{index}} {{item.id}} {{item.title}}
			</view>
			
			<rich-text nodes="换个列子，先默认选中第一个，然后点击按钮，新增一个数据到数组的头部，<b>发现勾选的元素变化了</b>"></rich-text>
			<button @click="changeNews2">点击修改下面v-for渲染的数据</button>
			<text>绑定:key</text>
			<view v-for="(item,index) in news2" :key="item.id">
				<checkbox>{{item.title}} {{item.title}}</checkbox>
			</view>
			<text>没有绑定:key</text>
			<view v-for="(item,index) in news2">
				<checkbox>{{item.title}} {{item.title}}</checkbox>
			</view>
		</view>
		<view>
			<text class="simpleTitle">v-for不同平台差异</text>
			<text>在H5平台 使用 v-for 循环整数时和其他平台存在差异，如 v-for="(item, index) in 10" 中，在H5平台 item 从 1 开始，其他平台 item 从 0 开始，可使用第二个参数 index 来保持一致</text>
			<view v-for="(item,index) in 3">index:{{index}},item{{item}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	const listName = "Studient"
	const studients = ["苏珊", "小明"]
	const studient = {
		"name": "苏珊",
		"age": 22,
		"sex": "女"
	}
	class NewsItem {
		id : number
		title : String
		constructor(id : number, title : String) {
			this.id = id
			this.title = title
		}
	}
	const news = ref(
		[
			new NewsItem(1, "美国攻打伊拉克"),
			new NewsItem(2, "伊拉克反攻美国本土"),
		]
	)
	function changeNews() {
		// 简单交换数据
		const tmp = news.value[1]
		news.value[1] = news.value[0]
		news.value[0] = tmp
		if (news.value.length > 2) {
			news.value.pop()
		} else {
			news.value.push(
				new NewsItem(3, "美国动态添加进来了")
			)
		}
	}
	const news2 = ref(
		[
			new NewsItem(1, "美国"),
			new NewsItem(2, "伊拉克"),
		]
	)
	function changeNews2() {

		const lastIde = news2.value[news2.value.length - 1].id
		news2.value.unshift(
			new NewsItem(lastIde + 1, "A国")
		)
	}
</script>

<style>
	@import "../../common/common.css";
</style>