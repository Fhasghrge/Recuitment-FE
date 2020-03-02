<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <h1 class='welcome-header header2 header3'>{{Header2}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <div class="begin">
      <a href=""
         v-if="flag"
         @click.prevent="toAnswer">开始答题</a>
      <img src="../../assets/三角.png"
           class="delta">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddlStr: '2020/03/01 16:00',
      ddlStr2: '2020/04/01',
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '产',
      Header2: '品',
      introduce: '产品经理是一个项目的顶梁柱。从策划到研发，再到最后展现在客户面前的人，我们需要在整个项目的运营过程中，协调各方，统筹全局。'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 1
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
