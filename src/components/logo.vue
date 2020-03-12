<template>
  <div class="part1">
    <img src="../assets/LOGO1.png" class="logo" />
    <!-- <img src="../assets/font.png"
         class="p1" /> -->
    <!-- <h2 class="p2">2019年秋季招新答题系统</h2> -->
    <div class="headwrap">
      <h1 class="headfont">春季</h1>
      <h1 class="headfont" style="text-align: right;">招新</h1>
    </div>
    <div class="slogan">
      <div class="slo-con">
        你喜欢与一群极客交流吗？👀<br />
        你期待在更大的平台展示自己的作品吗？👀<br />
        你想要有一段充满意义的课外时光吗？👀<br />
        经过了一学期的成电生活，相信你已经收获能力，渴望施展了吧！<br />
        看着大佬们成果颇丰，你也一定摩拳擦掌了吧！<br />
        在春招中，我们希望你在选定的方向上拥有一定的技术基础与能力💪，<br />
        这样才能在竞争激烈，要求严格招新中脱颖而出。👍<br />
        如果你有热情，有想法，有能力！电子科技大学星辰工作室期待你的到来ヾ(@^▽^@)ノ<br />
      </div>
    </div>
    <button class="loginbutton">
      <div class="btndiv" @click="showlogin">登录/注册</div>
    </button>
    <login v-show="loginshow" @closelgn="showlogin"></login>
  </div>
</template>

<script>
import login from '../components/login'
export default {
  name: 'logo',
  components: {
    login
  },
  data() {
    return {
      loginshow: false
    }
  },
  methods: {
    showlogin: function() {
      this.loginshow = !this.loginshow
    }
  }
}
</script>

<style>
.loginbutton {
  margin-top: 40px;
  background: url('../assets/loginbutton.png') no-repeat 100% 100%;
  width: 150px;
  height: 50px;
  border-style: none;
  font-size: 17px;
  border-radius: 10px;
}
.btndiv {
  width: 80%;
  align-items: left;
  color: #ffffff;
}
.slogan {
  margin-top: 1vh;
  border-top: 2px solid #a1afc5;
  border-bottom: 2px solid #a1afc5;
  width: 100%;
}
.slo-con {
  width: 90%;
  margin: 1vh auto;
  text-align: left;
  color: #ffffff;
}
.headfont {
  color: #ffffff;
  font-size: 90px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 6px;
  width: 60%;
  margin: 0 auto;
  margin-top: -2vh;
  text-align: left;
  margin-left: 9%;
}
@media (min-width: 751px) {
  .part1 {
    text-align: center;
    position: relative;
    padding-top: 17%;
  }

  .part1 .logo {
    width: 29%;
    opacity: 0.9;
    display: inline-block;
    position: absolute;
    top: 6vh;
    left: -2vh;
  }

  .p1 {
    width: 50%;
    margin: 1.3rem auto;
  }

  .p2 {
    font-family: PingFangSC-Semibold;
    font-size: 2rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2.1px;
    color: #ffffff;
    text-align: center;
    margin: 10px auto;
  }
}

@media (max-width: 750px) {
  .part1 {
    width: 90%;
    text-align: center;
    margin: 0 auto;
    padding-top: 12%;
  }

  .logo {
    width: 90%;
    opacity: 0.9;
    display: inline-block;
  }

  .p1 {
    width: 70%;
    margin: 0.5rem auto;
  }

  .p2 {
    font-family: PingFangSC-Semibold;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 4px;
    color: #ffffff;
    text-align: center;
  }
}
</style>
