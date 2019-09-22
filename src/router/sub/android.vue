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
      Header: '安卓组',
      introduce: 'Android开发，我们需要你有良好的java和Android开发基础，能够熟练的使用git和数据库，能够在开发过程中善于和其他方向交流，对待问题能够有自己的思考和创造。我们更希望你能够有学习新事物的能力和决心'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 3
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
