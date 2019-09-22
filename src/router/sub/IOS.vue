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
      ddlStr2: '2019/09/24',
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: 'iOS组',
      introduce: 'iOS开发是一个充满爱与信仰的工作，在苹果的框架下，一切繁琐的环境配置与机型适配都形如浮云，你只需要拥有良好的objective-C语言基础与APP设计思维，便能开发出一款自己的APP应用。iOS开发是宝贵的人力资源，我们需要你能够熟练运用网络资源、能够快速融入团体集体并与其他方向的同学相互交流学习，从而在iOS开发的过程中不断完善自我。我们诚心邀您加入我们，一同在互联网的时代不断学习、成长！'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 4
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
