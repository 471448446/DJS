<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'

export default {
  setup() {
    const msg = ref('Hello world')
    return {
      msg
    }
  },
  mounted() {
    console.log("Hello taro")
    // 测试直接调用weix的api
    wx.request({
      url: "https://www.baidu.com",
      method: 'GET',
      success: (res) => {
        console.log(res)
      },
      fail: (err) => {
        console.log("fail:" + err.errMsg + "," + err.errno)
      }
    })
  }
}
</script>
