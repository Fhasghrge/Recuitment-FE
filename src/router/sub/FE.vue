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
      ddlStr2: '2019/09/23',
      flag: true, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '前端组',
      introduce: '能够运用前端技术包括JavaScript、CSS、HTML等传统技术与概念性较强的交互式设计，艺术性较强的视觉设计等等。'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 5
        }
      })
    },
    changeFlag () {
      console.log(2)
      console.log(new Date() - new Date(this.ddlStr))
      if (new Date() - new Date(this.ddlStr) > 0 && new Date() - new Date(this.ddlStr2) < 0) {
        this.flag = true
        console.log(3)
      } else {
        this.flag = false
      }
    }
  },
  created () {
    console.log(1)
    this.changeFlag()
    if (window.screen.width <= 1080) {
      window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>
