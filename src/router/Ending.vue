<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <p v-if='flag'
       class='Endtips'>作答时间已结束 请关注公众号 StarStudio星辰 等待公布结果通知</p>
    <p v-if='!flag'
       class='Endtips'>笔试结果已公布 请关注公众号 StarStudio星辰 获取笔试结果</p>
    <img src="../img/二维码.png"
         class="QRcode">
  </div>
</template>

<script>
import '../css/style.css'
export default {
  data () {
    return {
      flag: true, // 控制公布结果通知tips，true为未发布结果，false为发布结果
      Header: 'Welcome to Star Studio!',
      introduce: '欢迎您参加星辰工作室2019年秋季招新答题，可根据您的意向选择方向进行答题。答题过程中可选择保存答卷以便退出后答卷丢失，完成答题后请务必提交答卷。本次答题时间为09.15—09.22，请在规定时间内完成答题。答题结果将以短信形式通知。Good luck！'

    }
  }
}
</script>
