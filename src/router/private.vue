<template>
  <div id='private'
       v-if='priFlag'>
    <img src="./img/头像.png"
         id="priHead">
    <span id="priName">{{ priName }}</span>
    <img src="./img/close.png"
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
    <a class='confirm'
       @click='changePrivateMsg'>确认</a>
  </div>
</template>

<script>
export default {
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
  methods: {
    getPrivateMsg () {
      this.$axios({
        method: 'get',
        url: '/user/userinfo/get'
      }).then((result) => {
        console.log(result)
        result = result.data
        if (result.code === 0) {
          console.log(result.msg)
          result = result.data
          this.privateName = this.priNumber = result.stunum
          this.priName = result.name
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
#priHead {
  position: absolute;
  margin-left: -42%;
  margin-top: 5%;
}

#priName {
  position: absolute;
  margin-left: -34.5%;
  margin-top: 6.1%;
  font-size: 1.4rem;
}

#priText {
  position: absolute;
  display: flex;
  width: 80%;
  margin-left: 10%;
  margin-top: 11.5%;
  flex-wrap: wrap;
}

#priText input {
  width: 100%;
  height: 45%;
  background: none;
  outline: none;
  border: 0px;
}

.priBox {
  margin-left: 10%;
  width: 40%;
}
.line {
  width: 80%;
}
.priVal {
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

.confirm {
  opacity: 1;
  width: 7%;
  position: absolute;
  margin-top: 56%;
  margin-left: -3.5%;
  font-size: 1.2rem;
}
.confirm:hover {
  cursor: pointer;
}
@media screen and (min-height: 520px) and (max-width: 1080px) {
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
