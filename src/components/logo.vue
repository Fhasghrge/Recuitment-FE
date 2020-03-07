<template>
  <div class="part1">
    <img
      src="../assets/LOGO1.png"
      class="logo"
    />
    <!-- <img src="../assets/font.png"
         class="p1" /> -->
    <!-- <h2 class="p2">2019年秋季招新答题系统</h2> -->
    <div class="headwrap">
      <h1 class="headfont">春季</h1>
      <h1
        class="headfont"
        style="text-align: right;"
      >招新</h1>
    </div>
    <div class="slogan">
      <div class="slo-con">
        哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或hh或或或或哈哈哈哈哈哈哈哈哈哈或hh或哈哈哈哈哈哈哈哈哈哈或hh或哈哈哈哈哈哈哈哈哈哈或hh或
      </div>
    </div>
    <button class="loginbutton">
      <div
        class="btndiv"
        @click="showlogin"
      >登录/注册</div>
    </button>
    <login
      v-show="loginshow"
      @closelgn="showlogin"
    ></login>
  </div>
</template>

<script>
import login from '../components/login'
export default {
  name: 'logo',
  components: {
    login
  },
  data () {
    return {
      loginshow: false
    }
  },
  methods: {
    showlogin: function () {
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
}
.btndiv {
  width: 80%;
  align-items: left;
  color: #ffffff;
}
.slogan {
  margin-top: 3vh;
  border-top: 2px solid #a1afc5;
  border-bottom: 2px solid #a1afc5;
  width: 100%;
}
.slo-con {
  width: 76%;
  margin: 3vh auto;
  text-align: left;
  color: #ffffff;
}
.headfont {
  color: #ffffff;
  font-size: 100px;
  font-weight: bold;
  font-stretch: normal;
  letter-spacing: 6px;
  width: 67%;
  margin: 0 auto;
  margin-top: -7px;
  text-align: left;
  margin-left: 3%;
}
@media (min-width: 751px) {
  .part1 {
    text-align: center;
    position: relative;
    padding-top: 25%;
  }

  .part1 .logo {
    width: 37%;
    opacity: 0.9;
    display: inline-block;
    position: absolute;
    top: 5.6vh;
    left: 0;
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
