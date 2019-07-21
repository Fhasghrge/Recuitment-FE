<template>
  <div id='private'
       v-show="show">
    <div class="pribar">
      <img src="../img/头像.png"
           id="priHead"><span id="priName">{{ privateName }}</span>
      <img src="../img/close.png"
           class="close"
           @click="closebar">
    </div>
    <div id='priText'>
      <div class="priBox priLeft">
        <p class='priVal'>真实姓名</p><input class="priMsg"
               value="priName"
               v-model="priName">

      </div>
      <div class="priBox priRight">
        <p class='priVal'>手机号</p><input class="priMsg"
               value="priPhone"
               v-model='priPhone'>

      </div>
      <div class="priBox priLeft">
        <p class='priVal'>信息门户账号</p><input class="priMsg"
               value="priNumber"
               v-model="priNumber">

      </div>
      <div class="priBox priRight">
        <p class='priVal'>旧密码</p><input class="priMsg"
               v-model="oldPassword">

      </div>
      <div class="priBox priLeft">
        <p class='priVal'>学院</p><input class="priMsg"
               value="priSchool"
               v-model="priSchool">

      </div>
      <div class="priBox priRight">
        <p class='priVal'>新密码</p><input class="priMsg"
               v-model="newPassword">

      </div>
      <div class="priBox priLeft">
        <p class='priVal'>QQ号</p><input class="priMsg"
               value="priQQ"
               v-model="priQQ">

      </div>
      <div class="priBox priRight">
        <p class='priVal'>重复密码</p><input class="priMsg"
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
#priHead {
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
@media screen and (max-width: 700px) {
  .box {
    display: none;
  }
  #private {
    width: 100%;
    margin: 0;
  }
  #priName {
    margin-top: 8%;
    width: 35%;
  }
  #private .close {
    margin-left: 35%;
  }
  #priText {
    margin-top: 30%;
  }
  .priVal {
    width: 80%;
    font-size: 1rem;
  }
  .priMsg {
    width: 100%;
    font-size: 1.2rem;
  }
  .confirm {
    margin-left: -10%;
    width: 20%;
    margin-top: 120%;
  }
}
</style>
