<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <h1 class='welcome-header header2 header3'>{{Header2}}</h1>
    <p class='introduce'
       v-html="introduce"></p>
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
      Header: '设',
      Header2: '计',
      introduce: '负责产品的UI设计<br>海报的平面设计<br>制作产品宣传、团队宣传等视频<br>技能：PS、Sketch'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 2
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

<style scoped>
.text-wrapper {
  white-space: pre-wrap;
}
</style>
