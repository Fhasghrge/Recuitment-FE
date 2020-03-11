<template>
  <div class="part2" id="part2">
    <button class="crosswrap" @click="closeflag">
      <span class="cross"></span>
    </button>
    <div class="opion">
      <button
        id="act1"
        @click="x1"
        v-bind:class="[{ button1: flag }, { button2: hide }]"
      >
        登录
      </button>
      <button
        id="act2"
        @click="x2"
        v-bind:class="[{ button2: flag }, { button1: hide }]"
      >
        注册
      </button>
    </div>
    <div class="act" v-bind:style="flag1">
      <input
        class="input1"
        id="username"
        type="text"
        v-model="peraccount"
        placeholder="账号 | 信息门户账号"
      />
      <input
        class="input1"
        id="password"
        type="password"
        v-model="perpassword"
        placeholder="密码"
      />
    </div>
    <div class="hide" v-bind:style="flag2">
      <input
        class="input1"
        id="name"
        type="text"
        v-model="pername"
        placeholder="真实姓名"
      />
      <input
        class="input1"
        id="schnum"
        type="text"
        v-model="peraccount"
        placeholder="信息门户账号 | 13位学号"
      />
      <input
        class="input1"
        id="tel"
        type="text"
        v-model="tel"
        placeholder="手机号（联系方式）"
      />
      <input
        class="input1"
        id="qq"
        type="text"
        v-model="qq"
        placeholder="QQ号"
      />
      <div class="passwordwrap">
        <input
          class="input1"
          id="pas"
          type="password"
          v-model="perpassword"
          placeholder="信息门户密码"
          @focus="bbfshow = true"
          @blur="bbfshow = false"
        />
        <transition name="el-fade-in-linear">
          <div class="bbfwrap" v-show="bbfshow">
            <div class="bbf">
              <span class="bbfcontent"
                >本系统已接入学校IDAP系统，密码仅用于验证实名信息，我们不会记录你的密码</span
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="showerr">
      <span class="errmes" v-text="err"></span>
    </div>
    <div>
      <button
        class="button"
        v-if="flag"
        @click="login(peraccount, perpassword)"
      >
        确认登录
      </button>
      <button class="button" v-if="hide" @click="register">注册</button>
    </div>
    <!-- <div class="confirm confirmRegister" v-if="confirmFlag">
      <h2>注册成功</h2>
      <button class="button" @click="confirmRegister">确认</button>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      confirmFlag: false,
      flag1: 'display:block',
      flag2: 'display:none',
      flag: true,
      hide: false,
      peraccount: '',
      perpassword: '',
      pername: '',
      tel: '',
      qq: '',
      verify: '',
      err: '',
      ruleForm: {
        userName: '',
        password: ''
      },
      bbfshow: false
    }
  },
  methods: {
    x1: function() {
      this.flag1 = 'display:block'
      this.flag2 = 'display:none'
      this.flag = true
      this.hide = false
      let p2 = document.getElementById('part2')
      p2.style.height = 46 + 'vh'
      p2.style.minHeight = 315 + 'px'
      p2.style.top = 27 + 'vh'
    },
    x2: function() {
      this.flag1 = 'display:none'
      this.flag2 = 'display:block'
      this.flag = false
      this.hide = true
      let p2 = document.getElementById('part2')
      p2.style.height = 72 + 'vh'
      p2.style.minHeight = 480 + 'px'
      p2.style.top = 14 + 'vh'
    },
    closeflag: function() {
      this.$emit('closelgn')
    },
    login: function(acc, pwd) {
      if (acc !== '' && pwd !== '') {
        this.err = ''
        this.$axios({
          method: 'post',
          url: '/user/portal/login',
          data: {
            stunum: acc,
            password: pwd
          }
        })
          .then(response => {
            if (response.data.code === 0) {
              this.$router.push({ path: 'main' })
            } else if (response.data.code === -5) {
              this.err = '账号不存在或密码错误'
            } else {
              this.err = '错误'
            }
          })
          .catch(error => {
            if (error.response) {
              this.err = '连接服务器失败'
            } else {
              this.err = '连接服务器失败'
            }
          })
      } else if (acc === '') {
        this.err = '请输入账号'
      } else if (pwd === '') {
        this.err = '请输入密码'
      }
    },
    register: function() {
      if (
        this.peraccount !== '' &&
        this.perpassword !== '' &&
        this.pername !== '' &&
        this.tel !== ''
      ) {
        this.err = ''
        if (!/^1[3456789]\d{9}$/.test(this.tel)) {
          this.err = '手机号码有误，请重填'
        } else if (!/^[\u4e00-\u9fa5]{2,15}$/.test(this.pername)) {
          this.err = '姓名为2-15位的中文，请重填'
        } else {
          this.$axios({
            method: 'post',
            url: '/user/portal/register',
            data: {
              stunum: this.peraccount,
              password: this.perpassword,
              name: this.pername,
              phonenum: this.tel,
              qqnum: this.qq
            }
          }).then(response => {
            if (response.data.code === 0) {
              this.login(this.peraccount, this.perpassword)
            } else if (response.data.code === -80) {
              this.err = '用户已存在'
            } else if (response.data.code === -60) {
              this.err = '不存在这个学号'
            } else if (response.data.code === -666) {
              this.err = '信息门户密码错误'
            } else {
              this.err = '错误'
            }
          })
        }
      } else {
        this.err = '请将信息填写完整'
      }
    },
    confirmRegister() {
      this.login(this.peraccount, this.perpassword)
    }
  },
  created() {
    let that = this
    document.onkeydown = function(e) {
      e = window.event || e
      if (
        that.$route.path === '/home' &&
        (e.code === 'Enter' || e.code === 'enter')
      ) {
        if (that.flag) {
          that.login(that.peraccount, that.perpassword)
        }
        if (that.hide) {
          that.register()
        }
      }
    }
  },
  computed: {
    toppos: function() {
      let p2height = document.getElementById('part2').offsetHeight
      let htmlheight = document.body.clientWidth
      console.log((htmlheight - p2height) / 2)
      return (htmlheight - p2height) / 2
    }
  }
}
</script>
<style>
@media (min-width: 751px) {
  .bbfwrap {
    position: absolute;
    width: 200px;
    height: 120px;
    border: 1px solid transparent;
    border-radius: 10px;
    top: -1.5rem;
    background-color: #ffffffc0;
    left: 96%;
  }
  .bbf {
    position: relative;
    padding: 0 18px;
    text-align: left;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .bbf:after {
    content: '';
    position: absolute;
    top: 2rem;
    right: 200.5px;
    border: 10px solid transparent;
    border-right-color: #ffffffc0;
  }
  .bbfcontent {
    color: #4d4c4cce;
  }
  #pas {
    margin: 0 auto;
  }
  .passwordwrap {
    margin-bottom: 3vh;
    position: relative;
  }
  .part2 {
    width: 24vw;
    min-height: 315px;
    height: 46vh;
    background-image: url('../assets/loginbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    margin-left: -15%;
    min-width: 325px;
    position: absolute;
    top: 27vh;
    left: 38vw;
    border-radius: 30px;
  }
  .crosswrap {
    position: absolute;
    width: 28px;
    height: 28px;
    top: 2vh;
    left: 3vh;
    padding: 0;
    background-color: inherit;
    border: 2px solid #ffffff;
    border-radius: 50%;
  }
  .crosswrap :hover {
    cursor: pointer;
  }
  .cross {
    display: inline-block;
    width: 20px;
    height: 4px;
    border-radius: 10px;
    background: #ffffff;
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
    margin-top: -2px;
  }

  .cross:after {
    content: '/';
    display: block;
    width: 20px;
    height: 4px;
    border-radius: 10px;
    background: #ffffff;
    -webkit-transform: rotate(-90deg);
  }
  .showerr {
    height: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 1vh;
  }
  .errmes {
    color: red;
    font-size: 0.9rem;
  }
  .opion {
    height: 10%;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: 0;
    width: 40%;
    margin: 1.2rem auto;
  }

  .button1 {
    background-color: inherit;
    border: 0;
    color: #ffffff;
    font-size: 20px;
    border-bottom: solid 2px #cfcfcf;
  }

  .button2 {
    background-color: inherit;
    border: 0;
    color: rgba(255, 255, 255, 0.4);
    font-size: 20px;
  }

  .act {
    padding-top: 9%;
  }

  .hide {
    display: none;
  }

  .input1 {
    height: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 3vh;
    border: 0px solid rgb(255, 255, 255);
    border-radius: 10px;
    background-color: #9091c1;
    font-size: 1rem;
    font-family: PingFangSC-Light;
    color: #ffffff;
    padding: 0.7rem 0 0.7rem 0.5rem;
  }
  .input1::-webkit-input-placeholder {
    color: #ffffff;
  }
  .input1::-moz-input-placeholder {
    color: #ffffff;
  }
  .input1::-ms-input-placeholder {
    color: #ffffff;
  }
  .button {
    border: 0px;
    background-color: #369cee;
    border-radius: 10px;
    width: 80%;
    height: 2.5rem;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin-top: 1rem;
    font-size: 1rem;
    margin-bottom: 20px;
  }
}

@media (max-width: 750px) {
  .part2 {
    width: 100%;
    height: 380px;
    background-color: black;
    text-align: center;
    margin: 0 auto;
    margin-top: 10%;
  }

  .opion {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: 0;
    width: 80%;
    margin: 0 auto;
  }

  .button1 {
    background-color: inherit;
    border: 0;
    color: #ffffff;
    border-bottom: solid 2px #cfcfcf;
    font-size: 1rem;
  }

  .button2 {
    background-color: inherit;
    border: 0;
    color: rgba(255, 255, 255, 0.4);
    font-size: 1rem;
  }

  .ul1 {
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
    padding: 0 0;
    width: 80%;
    margin: 5px auto;
  }

  .act {
    height: 210px;
    padding-top: 3.5rem;
    margin-bottom: -1.5rem;
  }

  .hide {
    height: 210px;
    padding-bottom: 1.5rem;
    padding-top: 0.5rem;
    display: none;
  }

  .input1 {
    height: 2rem;
    width: 75%;
    margin: 0 auto;
    border: 1px;
    border-bottom: 1px solid rgb(171, 171, 171);
    background-color: inherit;
    font-size: 0.8rem;
    font-family: PingFangSC-Light;
    color: #ffffff;
  }
  .showerr {
    height: 1rem;
    width: 80%;
    margin: 1rem auto;
    margin-bottom: 1rem;
  }
  .errmes {
    color: red;
    font-size: 0.9rem;
  }
  .button {
    border: solid 2px rgba(255, 255, 255, 0.8);
    width: 75%;
    height: 2rem;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    background-color: inherit;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
}
</style>
