<template>
  <div id='pribar'
       v-if="false">
    <img src="../img/头像.png"
         id="priHead"><span id="priName">{{ privateName }}</span>
    <img src="../img/close.png"
         class="close"
         @click="priFlag=false">
    <div id='priText'>
      <div class="priBox priLeft">
        <p class='priVal'>真实姓名</p><input class="priMsg"
               value="priName"
               v-model="priName">
        <hr class="line">
      </div>
      <div class="priBox priRight">
        <p class='priVal'>手机号</p><input class="priMsg"
               value="priPhone"
               v-model='priPhone'>
        <hr class="line">
      </div>
      <div class="priBox priLeft">
        <p class='priVal'>信息门户账号</p><input class="priMsg"
               value="priNumber"
               v-model="priNumber">
        <hr class="line">
      </div>
      <div class="priBox priRight">
        <p class='priVal'>旧密码</p><input class="priMsg"
               v-model="oldPassword">
        <hr class="line">
      </div>
      <div class="priBox priLeft">
        <p class='priVal'>学院</p><input class="priMsg"
               value="priSchool"
               v-model="priSchool">
        <hr class="line">
      </div>
      <div class="priBox priRight">
        <p class='priVal'>新密码</p><input class="priMsg"
               v-model="newPassword">
        <hr class="line">
      </div>
      <div class="priBox priLeft">
        <p class='priVal'>QQ号</p><input class="priMsg"
               value="priQQ"
               v-model="priQQ">
        <hr class="line">
      </div>
      <div class="priBox priRight">
        <p class='priVal'>重复密码</p><input class="priMsg"
               v-model="rePassword">
        <hr class="line">
      </div>
    </div>
    <div class="btnsub">
      <button class='confirm'
              @click='changePrivateMsg'>确认</button></div>
  </div>
</template>

<script>
export default {
  name: 'pribar',
  data () {
    return {
      priFlag: false,
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
      default: true
    }
  },
  methods: {
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

<style scoped>
#pribar {
  position: absolute;
  z-index: 9999999;
  top: 30px;
  width: 76%;
  left: 12%;
  background-color: #0e0e16;
}
#pribar #priHead {
}

#pribar #priName {
  font-size: 1.4rem;
}

#pribar #priText {
  display: flex;
  width: 80%;
  margin-left: 10%;
  margin-top: 11.5%;
  flex-wrap: wrap;
}

#pribar #priText input {
  width: 100%;
  height: 45%;
  background: none;
  outline: none;
  border: 0px;
}

#pribar .priBox {
  margin-left: 10%;
  width: 40%;
}
#pribar .line {
  width: 80%;
}
#pribar .priVal {
  width: 40%;
  height: 5%;
  font-family: PingFangSC-Light;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  margin-top: -3%;
  letter-spacing: 0px;
  color: #b3b3b3;
}
#pribar .priMsg {
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
#pribar .btnsub {
  margin: 0 auto;
  width: 40%;
  text-align: center;
}
#pribar .confirm {
  opacity: 1;
  font-size: 1.2rem;
  background-color: inherit;
  color: #ffffff;
}

#pribar .confirm:hover {
  cursor: pointer;
}
@media screen and (max-width: 700px) {
  #pribar .box {
    display: none;
  }
  #pribar {
    width: 100%;
    margin: 0;
  }
  #pribar #priName {
    margin-top: 8%;
    width: 35%;
  }
  #pribar .close {
    margin-left: 35%;
  }
  #pribar #priText {
    margin-top: 30%;
  }
  #pribar .priVal {
    width: 80%;
    font-size: 1rem;
  }
  #pribar .priMsg {
    width: 100%;
    font-size: 1.2rem;
  }
  #pribar .confirm {
    margin-left: -10%;
    width: 20%;
    margin-top: 120%;
  }
}
</style>
