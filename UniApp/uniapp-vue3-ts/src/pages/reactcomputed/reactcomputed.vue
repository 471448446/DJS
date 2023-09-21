<template>
	<view>
		<view>
			<view>{{mark.name}}</view>
			<!-- 此时，模板不再是简单的和声明性的。你必须先看一下它，然后才能意识到它执行的计算取决于 author.books。如果要在模板中多次包含此计算，则问题会变得更糟。 -->
			<view>has publish books? {{mark.books.length>0?"Yes":"No"}}</view>
		</view>
		<text class="simpleTitle">使用computed</text>
		<view>
			<view>{{mark.name}}</view>
			<!-- 此时，模板不再是简单的和声明性的。你必须先看一下它，然后才能意识到它执行的计算取决于 author.books。如果要在模板中多次包含此计算，则问题会变得更糟。 -->
			<view>has publish books? {{markHasPublishBooks}}</view>
		</view>
		<div>{{ count1 }}</div> <!-- 3，触发plus1里的set函数 -->
		<div>{{ plus1 }}</div> <!-- 6，触发plus1里的get函数 -->
	</view>
</template>

<script setup lang="ts">
	import { computed, onMounted, onUnmounted, ref } from 'vue';
	class Author {
		name : string
		books : string[]
		constructor(name : string, books : string[]) {
			this.name = name
			this.books = books
		}
	}
	// 使用ref，才能在数据发生变化时，刷新模板，如果没有这个需求，就不用加ref
	const mark =
		ref(
			new Author("马克", [
				"我像风一样自由",
				"等风来"
			])
		)
	// 自动推断类型为string
	const markHasPublishBooks = computed(() => {
		// 我日，要写return，那你这个lambda还不如kotlin中省略return来的快
		return mark.value.books.length > 0 ? "Yes" : "No"
	})
	console.log("markHasPublishBooks类型：" + markHasPublishBooks)

	// 创建一个可写的计算属性ref对象。默认下触发get函数，set函数会将声明的变量值进行重置
	const count1 = ref(4);
	const plus1 = computed({
		get: () => count1.value * 2,  //4)打印plus1，再次触发get函数时，count1.value的值是新赋予的3，所以plus1的值为6，而非8
		set: (val) => {              //2）触发plus1里的set函数
			count1.value = val - 1;    //3)count1.value的值由4-->3
		}
	});
	plus1.value = 4;               //1）将plus1的val值设置为4


	let timer : number
	onMounted(() => {
		timer = setInterval(() => {
			if (mark.value.books.length != 0) {
				mark.value.books.pop()
			} else {
				mark.value.books.push("我像风一样自由")
			}
		}, 2000)
	})
	onUnmounted(() => {
		clearInterval(timer)
	})
</script>

<style>
	@import "../../common/common.css";
</style>