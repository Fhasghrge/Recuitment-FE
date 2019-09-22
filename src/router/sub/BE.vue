<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <a href=""
       class='begin'
       v-if='flag'
       @click.prevent="toAnswer">开始答题</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddlStr: '2019/09/15 16:00',
      ddlStr2: '2019/09/23 24:00',
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '后台组',
      introduce: '后台的小星星，日常必不可缺少的是各种后台变成语言（PHP,java等），结合数据库、服务器等共同组建一个功能完善的web服务器端，实现数据的处理、分析与下发，性能的优化等工作。只要你有学习的热情和团队合作'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 6
        }
      })
    },
    changeFlag () {
      if (new Date() - new Date(this.ddlStr) > 0 && new Date() - new Date(this.ddlStr2) < 0) {
        this.flag = true
      } else {
        this.flag = false
      }
    }
  },
  mounted () {
    this.changeFlag()
  },
  created () {
    if (window.screen.width <= 1080) {
      window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>
