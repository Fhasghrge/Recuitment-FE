<template>
  <div id='privatea'
       v-show="show">
    <div class="pribara">
      <div class="clowrapa">
        <img src="../assets/route.png"
             id="closea"
             @click="closebar"></div>
      <img class="midlogoa"
           src="../img/LOGO.png">
      <img src="../img/头像.png"
           id="priHeada">
      <img src="../img/close.png"
           class="closea"
           @click="closebar">
    </div>
    <div id='priTexta'>
      <div class="priBoxa priLeft">
        <span class='privala'>真实姓名</span><input class="priMsga"
               value="priName"
               v-model="priName">

      </div>
      <div class="priBoxa priRight">
        <span class='privala'>手机号</span><input class="priMsga"
               value="priPhone"
               v-model='priPhone'>

      </div>
      <div class="priBoxa priLeft">
        <span class='privala'>信息门户账号</span><input class="priMsga"
               value="priNumber"
               v-model="priNumber">

      </div>
      <div class="priBoxa priLeft">
        <span class='privala'>QQ号</span><input class="priMsga"
               value="priQQ"
               v-model="priQQ">

      </div>
      <div class="priBoxa priLeft">
        <span class='privala'>学院</span><input class="priMsga"
               value="priSchool"
               v-model="priSchool">

      </div>
      <div class="priBoxa priRight">
        <span class='privala'>旧密码</span><input class="priMsga"
               v-model="oldPassword">

      </div>
      <div class="priBoxa priRight">
        <span class='privala'>新密码</span><input class="priMsga"
               v-model="newPassword">

      </div>

      <div class="priBoxa priRight">
        <span class='privala'>重复密码</span><input class="priMsga"
               v-model="rePassword">

      </div>
    </div>
    <div class="btnsuba">
      <button class='confirma'
              @click='changePrivateMsg'>确认</button></div>
  </div>
</template>

<script>
import bus from '../components/bus.js'
export default {
  name: 'pribar',
  data () {
    return {
      priName: '黄老板',
      priPhone: '110',
      priNumber: '201601120000',
      oldPassword: '',
      newPassword: '',
      priSchool: '霍格沃兹学院',
      priQQ: '123456789',
      rePassword: '',
      show1: false
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closebar: function () {
      this.show1 = false
      this.$emit('showpribar', this.show1)
      bus.$emit('listen', this.show1)
    },
    getPrivateMsg () {
      this.$axios({
        method: 'get',
        url: '/user/userinfo/get'
      }).then((result) => {
        if (this.$route.path === '/answer') {
          result = result.data
          if (result.code === 0) {
            console.log(result)
            if (result.data.lock === 1) {
              alert('您已经提交过试卷')
              this.$router.push({ path: '/main' })
            } else {
              result = result.data
              this.privateName = this.priNumber = result.stunum
              this.priName = result.name
              this.priPhone = result.phonenum
              this.priQQ = result.qqnum
              this.priSchool = result.college
            }
          } else {
            console.log('获取用户信息失败')
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    changePrivateMsg () {
      this.priFlag = false
      this.$axios({
        method: 'post',
        url: '/user/userinfo/change',
        data: {
          name: this.priName,
          phonenum: this.priPhone,
          stunum: this.priNumber,
          qqnum: this.priQQ
        }
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
      if (this.newPassword !== '' && this.rePassword !== '') {
        if (this.newPassword === this.rePassword) {
          this.$axios({
            method: 'post',
            url: '/user/userinfo/password',
            data: {
              oldpassword: this.oldPassword,
              newpassword: this.newPassword
            }
          }).then((res) => {
            console.log(res)
            if (res.data.code === 0) {
              alert('成功修改密码，请重新登陆')
              this.$router.push({
                path: '/home'
              })
            } else if (res.data.code === -5) {
              alert(res.data.msg)
            } else {
              alert('修改密码失败')
            }
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
  },
  mounted () {
    this.getPrivateMsg()// 获取用户信息
    this.show1 = this.show
  }
}
</script>

<style>
@media screen and (min-width: 700px) {
  #closea {
    display: none;
  }
  .clowrapa {
    display: none;
  }
  .midlogoa {
    display: none;
  }
  #privatea {
    position: absolute;
    top: 45px;
    width: 76%;
    left: 12%;
    background-color: #0e0e16;
  }
  .pribara {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 20px auto;
  }

  #priNamea {
    font-size: 1.4rem;
  }

  #priTexta {
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  #priTexta input {
    width: 100%;
    height: 45%;
    background: none;
    outline: none;
    border: 0px;
    border-bottom: solid 1px #979797;
    margin: 10px auto;
    padding: 5px auto;
  }

  .priBoxa {
    margin: 5px 5%;
    width: 40%;
  }
  .linea {
    width: 80%;
  }
  .privala {
    width: 50%;
    height: 5%;
    font-family: PingFangSC-Light;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    margin-top: -3%;
    letter-spacing: 0px;
    color: #b3b3b3;
  }
  .priMsga {
    width: 100%;
    height: 12%;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
  }
  .btnsuba {
    margin: 20px auto;
    width: 40%;
    text-align: center;
  }
  .confirma {
    opacity: 1;
    font-size: 1.2rem;
    background-color: inherit;
    color: #ffffff;
    width: 130px;
    height: 40px;
  }

  .confirma:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 700px) {
  #privatea {
    background-image: url("../assets/back.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    margin: 0;
    min-height: 100vh;
    position: absolute;
    width: 100%;
    top: 0;
    color: #ffffff;
  }
  .midlogoa {
    margin-top: 5px;
    height: 35px;
  }
  .closea {
    display: none;
  }
  .clowrapa {
    width: 40px;
    height: 40px;
    position: relative;
  }
  #closea {
    width: 13px;
    position: absolute;
    left: 0;
    bottom: 9px;
    transform-origin: center center;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transition: transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -o-transition: -o-transform 0.2s;
    -ms-transition: -ms-transform 0.2s;
  }
  #priHeada {
    width: 40px;
    height: 40px;
  }
  .pribara {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 2%;
    padding-top: 2%;
    align-items: center;
  }
  #priNamea {
    display: none;
  }
  #priTexta {
    width: 84%;
    margin: 25px auto;
  }
  #priTexta input {
    background: none;
    outline: none;
    border: 0px;
    margin: 5px auto;
    padding: 5px auto;
    color: #ffffff;
    text-align: right;
  }

  .priBoxa {
    border-bottom: solid 1px #979797;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 7px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .privala {
    font-size: 1rem;
    width: 50%;
    color: #b3b3b3;
  }
  .priMsga {
    width: 100%;
    font-size: 1.2rem;
  }
  .btnsuba {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 30px;
  }
  .confirma {
    width: 60%;
    height: 2.5rem;
    color: #ffffff;
    font-size: 1rem;
    border: solid 1px #ffffff;
    background-color: inherit;
    margin: 0 auto;
  }
}
</style>
