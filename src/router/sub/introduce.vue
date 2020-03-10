<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <h1 class='welcome-header header2'>{{Header2}}</h1>
    <p class='introduce main_introduce'>{{ introduce }}</p>
    <!-- <a href=""
       class='begin store'
       v-if='flag'
       @click.prevent="save">提交所有答卷</a> -->
    <!-- <p class='choiceTips'
       v-if="flag">选择一个方向开始答题吧</p> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddlStr: '2020/03/01 16:00',
      ddlStr2: '2020/04/01',
      flag: false, // flag 控制tips，true为显示，false为隐藏
      Header: '春季',
      Header2: '招新',
      introduce: '欢迎你参加星辰工作室2020年春季招新，可根据你的意向选择方向进行答题。答题过程中注意保存答卷以免退出后答卷丢失，完成答题后请务必提交答卷。本次答题时间为03.13—03.19 23:59。请在规定时间内完成答题。答题结果将以邮件形式发送到你所填写的邮箱中。请务必确保邮箱信息准确，注意查询邮件。Good luck！'
    }
  },
  methods: {
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
