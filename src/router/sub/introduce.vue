<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <a href=""
       class='begin store'
       v-if='flag'
       @click.prevent="save">提交所有答卷</a>
    <p class='choiceTips'
       v-if="flag">选择一个方向开始答题吧</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddlStr: '2019/08/01', // 开始答题的日期，待更改
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
      let confirmbtn = confirm('确认提交吗？提交后无法再次修改')
      if (confirmbtn === true) {
        this.$axios({
          methods: 'post',
          url: '/user/exam/lock'
        }).then((response) => {
          console.log(response)
          if (response.data.code === 0 || response.data.code === -90) {
            this.saveflag = true
            alert('答卷已提交')
            this.$router.push({ path: 'main' })
          } else {
            alert('提交失败')
          }
        })
      }
    }
  },
  mounted () {
    this.changeFlag()
  },
  created () {
    if (window.screen.width <= 1080) {
      var sTop = document.body || document.documentElement
      sTop.scrollTop = 0
      window.pageYOffset = 0
    }
  }
}
</script>

<style scoped>
.store {
  padding-top: 0.2%;
  padding-bottom: 0.45%;
  width: 15%;
  margin-left: 42.5%;
  margin-top: 25%;
}
@media screen and (min-width: 750px) {
  .store {
    margin-top: 42%;
  }
}
@media screen and (max-width: 1081px) {
  .store {
    width: 40%;
    margin-left: 30%;
    margin-top: 150%;
  }
}
@media screen and (max-width: 321px) {
  .store {
    margin-top: 155%;
  }
}
</style>
