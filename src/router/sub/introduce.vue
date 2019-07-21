<<<<<<< HEAD
<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <p class='choiceTips'
       v-if="flag">选择一个方向开始答题吧</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false, // flag 控制tips，true为显示，false为隐藏
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
    <p class='choiceTips'
       v-if="flag">选择一个方向开始答题吧</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false, // flag 控制tips，true为显示，false为隐藏
      Header: 'Welcome to Star Studio!',
      introduce: '星辰工作室是……（工作室的介绍段落）有什么事问豆豆就对了哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'
    }
  }
}
</script>
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
