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
      introduce: '欢迎您参加星辰工作室2019年秋季招新答题，可根据您的意向选择方向进行答题。答题过程中可选择保存答卷以便退出后答卷丢失，完成答题后请务必提交答卷。本次答题时间为09.15—09.23 23:59(由于之前的网络故障，现延长一天答卷时间），请在规定时间内完成答题。答题结果将以短信形式通知。Good luck！'
    }
  },
  methods: {
    changeFlag () {
      if (new Date() - new Date(this.ddlStr) > 0 && new Date() - new Date(this.ddlStr2) < 0) {
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
