<template>
  <div class="mainans">
    <banner @mainshow="transmit"
            :group='thegroup'></banner>
    <div class="ques">
      <div class="que">
        <p style="color:#ffffff">作答时系统会自动保存答案，不需要手动保存，下次可以修改答案和继续作答。<br>“提交答卷”为最终提交按钮，提交后试卷锁定，无法修改该方向任何答案。</p>
        <question :group='thegroup'></question>
      </div>
    </div>
    <fixedbar></fixedbar>
    <pribar :show='show'
            @showpribar="transmit"></pribar>
  </div>
</template>

<script>
import banner from '../../components/banner'
import question from '../../components/question'
import fixedbar from '../../components/fixedbar'
import pribar from '../../components/pribar'
export default {
  name: 'answer',
  data () {
    var thegroup = Number(this.$route.query.groups)
    return {
      thegroup,
      show: false
    }
  },
  components: {
    banner,
    question,
    fixedbar,
    pribar
  },
  methods: {
    transmit (bannershow) {
      this.show = bannershow
      console.log(this.show)
    }
  }
}
</script>

<style>
html {
  margin: 0;
  min-height: 100vh;
}
body {
  background-image: url("../../assets/back.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
}
.mainans {
  position: relative;
}
#app {
  margin: 0;
}
@media only screen and (min-width: 751px) {
  .ques {
    width: 70%;
    background-color: rgba(25, 25, 25, 0.8);
    margin: 0 auto;
    color: #ffffff;
    padding-bottom: 3rem;
    margin-bottom: 7rem;
  }

  .que {
    width: 90%;
    margin: 0 auto;
    padding-top: 1.6rem;
    color: #bfbfbf;
  }
}
@media only screen and (max-width: 750px) {
  .ques {
    width: 96%;
    background-color: rgba(25, 25, 25, 0.8);
    margin: 0 auto;
    color: #ffffff;
    padding-bottom: 1rem;
  }
  .que {
    width: 90%;
    height: inherit;
    margin: 0 auto;
    padding-top: 1.6rem;
    color: #bfbfbf;
    padding-bottom: 1rem;
  }
}
</style>
