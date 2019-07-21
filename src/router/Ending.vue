<<<<<<< HEAD
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
      introduce: '星辰工作室是……（工作室的介绍段落）有什么事问豆豆就对了哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'

    }
  }
}
</script>
=======
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
export default {
  data () {
    return {
      flag: true, // 控制公布结果通知tips，true为未发布结果，false为发布结果
      Header: 'Welcome to Star Studio!',
      introduce: '星辰工作室是……（工作室的介绍段落）有什么事问豆豆就对了哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'

    }
  }
}
</script>
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
