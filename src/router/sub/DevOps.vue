<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <a href=""
       class='begin'
       v-if='flag'>开始答题</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '运维组',
      introduce: '这里是运维组的介绍'
    }
  }
}
</script>
