<template>
  <div id='private'
       v-show="show">
    <div class="pribar">
      <div class="clowrap">
        <img src="../assets/route.png"
             id="close"
             @click="closebar"></div>
      <img class="midlogo"
           src="../img/LOGO.png">
      <img src="../img/头像.png"
           id="priHead"><span id="priName">{{ privateName }}</span>
      <img src="../img/close.png"
           class="close"
           @click="closebar">
    </div>
    <div id='priText'>
      <div class="priBox priLeft">
        <span class='priVal'>真实姓名</span><input class="priMsg"
               value="priName"
               v-model="priName">

      </div>
      <div class="priBox priRight">
        <span class='priVal'>手机号</span><input class="priMsg"
               value="priPhone"
               v-model='priPhone'>

      </div>
      <div class="priBox priLeft">
        <span class='priVal'>信息门户账号</span><input class="priMsg"
               value="priNumber"
               v-model="priNumber">

      </div>
      <div class="priBox priRight">
        <span class='priVal'>旧密码</span><input class="priMsg"
               v-model="oldPassword">

      </div>
      <div class="priBox priLeft">
        <span class='priVal'>学院</span><input class="priMsg"
               value="priSchool"
               v-model="priSchool">

      </div>
      <div class="priBox priRight">
        <span class='priVal'>新密码</span><input class="priMsg"
               v-model="newPassword">

      </div>
      <div class="priBox priLeft">
        <span class='priVal'>QQ号</span><input class="priMsg"
               value="priQQ"
               v-model="priQQ">

      </div>
      <div class="priBox priRight">
        <span class='priVal'>重复密码</span><input class="priMsg"
               v-model="rePassword">

      </div>
    </div>
    <div class="btnsub">
      <button class='confirm'
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
      rePassword: ''
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
      this.show = false
      this.$emit('showpribar', this.show)
      bus.$emit('listen', this.show)
    },
    getPrivateMsg: function () {
      this.$axios({
        method: 'get',
        url: '/user/userinfo/get'
      }).then((result) => {
        if (result.code === 0) {
          console.log(result.msg)
          result = result.data
          this.priName = this.priNumber = result.stunum
          this.priPhone = result.phonenum
          this.priQQ = result.qqnum
          this.priSchool = result.college
        } else {
          console.log('获取用户信息失败')
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    changePrivateMsg: function () {
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
              oldPassword: this.oldPassword,
              newPassword: this.newPassword
            }
          }).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
  },
  mounted () {
    this.getPrivateMsg() // 获取用户信息
  }
}
</script>

<style>
@media screen and (min-width: 700px) {
  #close {
    display: none;
  }
  .clowrap {
    display: none;
  }
  .midlogo {
    display: none;
  }
  #private {
    position: absolute;
    top: 45px;
    width: 76%;
    left: 12%;
    background-color: #0e0e16;
  }
  .pribar {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 20px auto;
  }

  #priName {
    font-size: 1.4rem;
  }

  #priText {
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  #priText input {
    width: 100%;
    height: 45%;
    background: none;
    outline: none;
    border: 0px;
    border-bottom: solid 1px #979797;
    margin: 10px auto;
    padding: 5px auto;
  }

  .priBox {
    margin: 5px 5%;
    width: 40%;
  }
  .line {
    width: 80%;
  }
  .priVal {
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
  .priMsg {
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
  .btnsub {
    margin: 20px auto;
    width: 40%;
    text-align: center;
  }
  .confirm {
    opacity: 1;
    font-size: 1.2rem;
    background-color: inherit;
    color: #ffffff;
    width: 130px;
    height: 40px;
  }

  .confirm:hover {
    cursor: pointer;
  }
}
@media screen and (max-width: 700px) {
  #private {
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
  .midlogo {
    margin-top: 5px;
    height: 35px;
  }
  .close {
    display: none;
  }
  .clowrap {
    width: 40px;
    height: 40px;
    position: relative;
  }
  #close {
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
  #priHead {
    width: 40px;
    height: 40px;
  }
  .pribar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 2%;
    padding-top: 2%;
    align-items: center;
  }
  #priName {
    display: none;
  }
  #priText {
    width: 84%;
    margin: 25px auto;
  }
  #priText input {
    background: none;
    outline: none;
    border: 0px;
    margin: 5px auto;
    padding: 5px auto;
    color: #ffffff;
    text-align: right;
  }

  .priBox {
    border-bottom: solid 1px #979797;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 7px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .priVal {
    font-size: 1rem;
    width: 50%;
    color: #b3b3b3;
  }
  .priMsg {
    width: 100%;
    font-size: 1.2rem;
  }
  .btnsub {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    margin-top: 30px;
  }
  .confirm {
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
