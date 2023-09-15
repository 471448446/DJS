<template>
	<!-- flex布局：https://www.runoob.com/w3cnote/flex-grammar.html -->
	<!-- 
	先要在style里面指定使用flex布局：display: flex
	1. 然后指定排列方式以继要不要换行。flex-direction 排放方式 ，flex-wrap要不要换行。 简写方式：flex-flow
	2. 接着指定对其方式。justify-content 主轴对其方式, align-item 非主轴对其方式
	-->
	<view>
		<text>水平放，不换行</text>
		<view class="flexRowNoWrap">
			<view class="box">1</view>
			<view class="box">2</view>
			<view class="box">3</view>
			<view class="box">4</view>
			<view class="box">5</view>
			<view class="box">6</view>
			<view class="box">7</view>
			<view class="box">8</view>
			<view class="box">9</view>
		</view>
		<text>水平放，换行</text>
		<view class="flexRowWrap">
			<view class="box">1</view>
			<view class="box">2</view>
			<view class="box">3</view>
			<view class="box">4</view>
			<view class="box">5</view>
			<view class="box">6</view>
			<view class="box">7</view>
			<view class="box">8</view>
			<view class="box">9</view>
		</view>
		<text>水平放，换行（使用v-for）</text>
		<view class="flexRowWrap">
			<!-- 注意是从1开始： https://blog.csdn.net/qq_36812165/article/details/112624987 -->
			<!-- v-for 是重复的当前的tag -->
			<view class="box" v-for="index of 9" :key="index">{{index}}</view>
		</view>
		<text>垂直放</text>
		<view class="flexColumflowWrap">
			<!-- 注意是从1开始： https://blog.csdn.net/qq_36812165/article/details/112624987 -->
			<!-- v-for 是重复的当前的tag -->
			<view class="box" v-for="index of 9" :key="index">{{index}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">

</script>

<style>
	.box {
		/* 因为直接写的view，内部没有元素（如果不显示数字，就没有元素），所以这里需要指定宽高 */
		width: 100rpx;
		height: 100rpx;
		/* 指定文本样式，不是必须，这里学习下api */
		font-size: 50rpx;
		font-weight: 500;
		font-style: normal;
		color: brown;
		/* 给个间距，不然看不出效果 */
		margin: 10rpx;
		/* 背景颜色 */
		background-color: #6495ed;
		/* 我也可以指定我内部用flex布局，这样就可以让文字剧中展示 */
		display: flex;
		/* justify-content是主轴对其方式 */
		justify-content: center;
		/* align-items 是纵轴对其方式*/
		align-items: center;
	}

	.flexRowNoWrap {
		display: flex;
		flex-flow: row nowrap;
	}

	.flexRowWrap {
		display: flex;
		flex-flow: row wrap;
	}

	.flexColumflowWrap {
		display: flex;
		/* wrap不wrap好像没有意义 */
		flex-flow: column;
		/* 因为这里指定了主轴是column，是是垂直放置 ，所以这里指定了另外一个轴的对其方式，而不是justify-content*/
		align-items: center;
	}
</style>