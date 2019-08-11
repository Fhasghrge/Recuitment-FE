<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <a href=""
       class='begin store'
       v-if='flag'
       @click.prevent="save">保存答卷</a>
    <p class='choiceTips'
       v-if="flag">选择一个方向开始答题吧</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddlStr: '2019/08/01',
      flag: false, // flag 控制tips，true为显示，false为隐藏
      Header: 'Welcome to Star Studio!',
      introduce: '星辰工作室是……（工作室的介绍段落）有什么事问豆豆就对了哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或'
    }
  },
  methods: {
    changeFlag () {
      if (new Date() - new Date(this.ddlStr) > 0) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    save () {

    }
  },
  mounted () {
    this.changeFlag()
  }
}
</script>

<style scoped>
.store {
  margin-top: 25%;
}
</style>
