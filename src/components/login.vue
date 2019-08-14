<template>
  <div class="part2"
       id="part2">
    <div class="opion">
      <button id="act1"
              @click="x1"
              v-bind:class="[{ button1: flag }, { button2: hide }]">登录</button>
      <button id="act2"
              @click="x2"
              v-bind:class="[{ button2: flag }, { button1: hide }]">注册</button>
    </div>
    <div class="act"
         v-bind:style="flag1">
      <input class="input1"
             id="username"
             type="text"
             v-model="peraccount"
             placeholder="账号|信息门户账号" />
      <input class="input1"
             id="password"
             type="password"
             v-model="perpassword"
             placeholder="密码" />
    </div>
    <div class="hide"
         v-bind:style="flag2">
      <input class="input1"
             id="name"
             type="text"
             v-model="pername"
             placeholder="真实姓名" />
      <input class="input1"
             id="schnum"
             type="text"
             v-model="peraccount"
             placeholder="学号" />
      <input class="input1"
             id="tel"
             type="text"
             v-model="tel"
             placeholder="手机号（联系方式）" />
      <input class="input1"
             id="qq"
             type="text"
             v-model="qq"
             placeholder="QQ号" />
      <input class="input1"
             id="pas"
             type="password"
             v-model="perpassword"
             placeholder="密码" />
      <input class="input1"
             id="pas1"
             type="password"
             v-model="verify"
             placeholder="重复密码" />
    </div>
    <div class="showerr"><span class="errmes"
            v-text="err"></span></div>
    <div>
      <button class="button"
              v-if="flag"
              @click="login">确认登录</button>
      <button class="button"
              v-if="hide"
              @click="register">注册</button>
    </div>
    <div class="confirm confirmRegister"
         v-if="confirmFlag">
      <h2>注册成功</h2>
      <button class="button"
              @click="confirmRegister">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
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
      err: ''
    }
  },
  methods: {
    x1: function () {
      this.flag1 = 'display:block'
      this.flag2 = 'display:none'
      this.flag = true
      this.hide = false
    },
    x2: function () {
      this.flag1 = 'display:none'
      this.flag2 = 'display:block'
      this.flag = false
      this.hide = true
    },
    login: function () {
      if (this.peraccount !== '' && this.perpassword !== '') {
        this.err = ''
        this.$axios({
          method: 'post',
          url: '/user/login',
          data: {
            stunum: this.peraccount,
            password: this.perpassword
          }
        }).then((response) => {
          if (response.data.code === 0) {
            this.$router.push({ path: 'main' })
          } else if (response.data.code === -5) {
            this.err = '账号不存在或密码错误'
          } else {
            this.err = '错误'
          }
        })
          .catch((error) => {
            if (error.response) {
              this.err = '连接服务器失败'
            } else {
              this.err = '连接服务器失败'
            }
          })
      } else if (this.peraccount === '') {
        this.err = '请输入账号'
      } else if (this.perpassword === '') {
        this.err = '请输入密码'
      }
    },
    register: function () {
      if (this.peraccount !== '' && this.perpassword !== '' && this.pername !== '' && this.tel !== '' && this.verify !== '') {
        this.err = ''
        if (this.perpassword === this.verify) {
          if (this.perpassword.length >= 6) {
            this.$axios({
              method: 'post',
              url: '/user/register',
              data: {
                stunum: this.peraccount,
                password: this.perpassword,
                name: this.pername,
                phonenum: this.tel,
                qqnum: this.qq
              }
            }).then((response) => {
              if (response.data.code === 0) {
                this.confirmFlag = true
              } else if (response.data.code === -80) {
                this.err = '用户已存在'
              } else if (response.data.code === -60) {
                this.err = '不存在这个学号'
              } else {
                this.err = '错误'
              }
            })
          } else {
            this.err = '密码长度过短'
          }
        } else {
          this.err = '两次输入的密码不同'
        }
      } else {
        this.err = '请将信息填写完整'
      }
    },
    confirmRegister () {
      this.login()
    }
  },
  created () {
    let that = this
    document.onkeydown = function (e) {
      e = window.event || e
      if (that.$route.path === '/home' && (e.code === 'Enter' || e.code === 'enter')) {
        if (that.flag) {
          that.login()
        }
        if (that.hide) {
          that.register()
        }
      }
    }
  }
}
</script>

<style>
@media (min-width: 751px) {
  .part2 {
    width: 30%;
    height: 65%;
    background-color: black;
    text-align: center;
    margin-left: -15%;
    min-width: 325px;
  }
  .showerr {
    height: 1rem;
    width: 80%;
    margin: 0 auto;
  }
  .errmes {
    color: red;
    font-size: 0.9rem;
  }
  .opion {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
    padding: 0;
    width: 80%;
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
    height: 45%;
    padding-top: 15%;
  }

  .hide {
    height: 45%;
    padding-bottom: 15%;
    display: none;
  }

  .input1 {
    height: 1rem;
    width: 80%;
    margin: 0 auto;
    border: 1px;
    border-bottom: 1px solid rgb(171, 171, 171);
    background-color: inherit;
    font-size: 1rem;
    font-family: PingFangSC-Light;
    color: #ffffff;
    padding: 0.7rem 0 0.7rem 0.5rem;
  }

  .button {
    border: solid 3px rgba(255, 255, 255, 0.8);
    width: 80%;
    height: 2.5rem;
    font-family: PingFangSC-Regular;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    background-color: inherit;
    margin-top: 1rem;
    font-size: 1rem;
  }
}

@media (max-width: 750px) {
  .part2 {
    width: 100%;
    height: 52%;
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
    height: 50%;
    padding-top: 3.5rem;
    margin-bottom: -1.5rem;
  }

  .hide {
    height: 50%;
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
    margin: 1.5rem auto;
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
