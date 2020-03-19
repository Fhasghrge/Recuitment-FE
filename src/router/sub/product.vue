<template>
  <div id="text">
    <h1 class="welcome-header">{{ Header }}</h1>
    <h1 class="welcome-header header2 header3">{{ Header2 }}</h1>
    <p class="introduce">{{ introduce }}<br /><span>注意：前四道为必答题，后七道为选做题，选做题推荐至少做两道以上。</span></p>
    <div class="begin"
         v-if="flag">
      <a href=""
         @click.prevent="toAnswer">开始答题</a>
      <img src="../../assets/三角.png"
           class="delta" />
    </div>
    <div class="mainans"
         v-show="queflag">
      <div class="ques">
        <button class="crosswrap"
                @click="toAnswer">
          <span class="cross"></span>
        </button>
        <h1>招新答题</h1>
        <h2>——{{ Header }}{{ Header2 }}组</h2>
        <div class="que">
          <p style="color:#ffffff">
            作答时系统会自动保存答案，不需要手动保存，下次可以修改答案和继续作答。<br />首页的“提交所有答卷”为最终提交按钮，提交后所有方向试卷锁定，无法修改所有方向的任何答案。
          </p>
          <ques :group="1"></ques>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ques from '../../components/question'
export default {
  data () {
    return {
      ddlStr: '2020/03/13 19:00',
      ddlStr2: '2020/03/20 23:59',
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '产',
      Header2: '品',
      queflag: false,
      introduce:
        '产品经理是一个项目的顶梁柱。从策划到研发，再到最后展现在客户面前的人，我们需要在整个项目的运营过程中，协调各方，统筹全局。'
    }
  },
  components: {
    ques
  },
  methods: {
    toAnswer () {
      // this.$router.push({
      //   path: '/answer',
      //   query: {
      //     groups: 1
      //   }
      // })
      this.queflag = !this.queflag
    },
    changeFlag () {
      if (
        new Date() - new Date(this.ddlStr) > 0 &&
        new Date() - new Date(this.ddlStr2) < 0
      ) {
        this.flag = true
      } else {
        this.flag = false
      }
    }
  },
  mounted () {
    this.changeFlag()
    let that = this
    document.getElementById('main').onclick = function (event) {
      let ans = document.getElementsByClassName('mainans')[0]
      let beginbtn = document.getElementsByClassName('begin')[0]
      if (ans) {
        if (!ans.contains(event.target) && !beginbtn.contains(event.target)) {
          that.queflag = false
        }
      }
    }
  },
  created () {
    if (window.screen.width <= 1080) {
      window.pageYOffset = document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style scoped>
/* #app {
  margin: 0;
}
html {
  margin: 0;
  min-height: 100vh;
}
body {
  background-image: url('../../assets/back.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
} */
.mainans {
  position: absolute;
  top: 10vh;
  left: 20vw;
  z-index: 99999 !important;
}
.crosswrap {
  top: 20px;
  left: 30px;
}
.ques h1 {
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
  font-size: 35px;
}
.ques h2 {
  display: inline-block;
  width: 80%;
  text-align: right;
  margin: 0 auto;
}
@media only screen and (min-width: 751px) {
  .ques {
    width: 60vw;
    /* background-color: rgba(25, 25, 25, 0.8); */
    background-image: url("../../assets/背景.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #ffffff;
    /* padding-bottom: 3rem;
    margin-bottom: 7rem; */
    /* left: 20vw; */
    /* top: 10vh; */
    position: relative;
    height: 80vh;
    overflow: scroll;
    border-radius: 20px;
  }

  .que {
    width: 90%;
    margin: 0 auto;
    color: #ffffff;
    margin-bottom: 50px;
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
