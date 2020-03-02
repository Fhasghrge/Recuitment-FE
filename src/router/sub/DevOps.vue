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
      Header: '运',
      Header2: '维',
      introduce: '合格运维的日常是进行工作室服务器、各种线上服务的基础运维。我们也将进行服务发布、更新和维护。Starstudio DevOps期待你的加入'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 7
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
