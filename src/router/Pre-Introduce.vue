<template>
  <div id="main">
    <div id="noteText"
         v-if="notesFlag"
         ref="noteText">
      <img src="../assets/close.png"
           class="close"
           @click="notesFlag = false" />
      <h2>答题须知</h2>
      <p>
        选择一个方向，然后开始答题吧！当然了，您也可以作答多个方向的题目<br /><br />作答时系统会自动保存答案，不需要手动保存，下次可以修改答案和继续作答。<br /><br />首页的“提交所有答卷”为最终提交按钮，提交后所有方向试卷锁定，无法修改所有方向的任何答案。
      </p>
      <!-- <a href=""
         v-if='!flag'
         @click.prevent="notesFlag=false">开始答题</a> -->
    </div>
    <div id="private"
         v-if="priFlag">
      <img src="../assets/头像.png"
           id="priHead" /><span id="priName">{{
        priName
      }}</span>
      <img src="../assets/close.png"
           class="close"
           @click="closePrivate" />
      <div id="priText">
        <div class="priBox priLeft">
          <p class="priVal">真实姓名</p>
          <input class="priMsg"
                 v-model="priName" />
          <hr class="line" />
        </div>
        <div class="priBox priRight">
          <p class="priVal">手机号</p>
          <input class="priMsg"
                 v-model="priPhone" />
          <hr class="line" />
        </div>
        <div class="priBox priLeft">
          <p class="priVal">信息门户账号</p>
          <input class="priMsg"
                 v-model="priNumber" />
          <hr class="line" />
        </div>
        <div class="priBox priRight">
          <p class="priVal">旧密码</p>
          <input class="priMsg"
                 v-model="oldPassword"
                 type="password" />
          <hr class="line" />
        </div>
        <div class="priBox priLeft">
          <p class="priVal">学院</p>
          <input class="priMsg"
                 v-model="priSchool" />
          <hr class="line" />
        </div>
        <div class="priBox priRight">
          <p class="priVal">新密码</p>
          <input class="priMsg"
                 v-model="newPassword"
                 type="password" />
          <hr class="line" />
        </div>
        <div class="priBox priLeft">
          <p class="priVal">QQ号</p>
          <input class="priMsg"
                 v-model="priQQ" />
          <hr class="line" />
        </div>
        <div class="priBox priRight">
          <p class="priVal">重复密码</p>
          <input class="priMsg"
                 v-model="rePassword"
                 type="password" />
          <hr class="line" />
        </div>
      </div>
      <a class="confirm"
         @click="changePrivateMsg">确认</a>
      <a class="confirm quitConfirm"
         @click="quit">退出登录</a>
    </div>
    <div id="header"
         v-if="headFlag">
      <img src="../assets/小箭头-左.png"
           class="arrow_left"
           @click="returnToMain"
           v-if="arrowFlag" />
      <img src="../assets/LOGO1.png"
           class="logo"
           @click="returnToMain" />
      <img src="../assets/小箭头.png"
           class="arrow_right"
           :class="[{ arrowhead: 1 }, { rotate1: Boxflag }, { rotate2: !Boxflag }]" />
      <img src="../assets/头像.png"
           class="portrait"
           @click="priFlag = true"
           @mouseover="Boxflag = !Boxflag"
           @mouseout="Boxflag = !Boxflag" />
    </div>
    <transition name="draw">
      <div class="mainbox"
           v-show="Boxflag"
           @mouseover="Boxflag = 1"
           @mouseout="Boxflag = 0">
        <button class="btn"
                v-show="Boxflag"
                @click="
            priFlag = true
            Boxflag = !Boxflag
          ">
          个人信息
        </button>
        <button class="btn quitLogin"
                v-show="Boxflag"
                @click="quit">
          退出登陆
        </button>
      </div>
    </transition>
    <router-view :key="$route.path"></router-view>
    <div id="text">
      <p class="tips"
         v-if="!flag">距离开始答题还有：</p>
      <p class="date"
         v-if="!flag">{{ date }}</p>
      <p class="tips"
         v-if="flag">距离答题结束还有：</p>
      <p class="date"
         v-if="flag">{{ date }}</p>
    </div>
    <div id="group"
         v-if="Itemflag">
      <img class="arrow_left"
           @click="toGroup(0)"
           src="../assets/箭头4_右 拷贝.png" />
      <img class="arrow_right"
           @click="toGroup(1)"
           src="../assets/箭头4_右.png" />
      <div class="block">
        <el-slider v-model="value"
                   :step="1"
                   :show-stops="false"
                   :show-tooltip='false'
                   :max="7"
                   :disabled="true">
        </el-slider>
      </div>
      <!-- <div class="group">
        <img src="../assets/icons/产品.svg" />
        <router-link to="/main/product">产品</router-link>
        <img src="../assets/icons-new/前端开发@3x.svg" />
        <router-link to="/main/FE">前端</router-link>
        <img src="../assets/icons/后台@1x.svg" />
        <router-link to="/main/BE">后台</router-link>
        <img src="../assets/安卓@3x.svg" />
        <router-link to="/main/android">安卓</router-link>
        <img src="../assets/IOS@3x.svg" />
        <router-link to="/main/iOS">iOS</router-link>
        <img src="../assets/icons/设计.svg" />
        <router-link to="/main/design">设计</router-link>
        <img src="../assets/icons-new/DevOps@3x.svg" />
        <router-link to="/main/DevOps">DevOps</router-link>
      </div> -->
    </div>

    <a href=""
       id="notes"
       ref="notes"
       @click.prevent="notesFlag = !notesFlag">答题须知</a>

    <!-- <div id="noteText"
         v-if="notesFlag"
         ref="noteText">
      <img src="../assets/close.png"
           class="close"
           @click="notesFlag = false" />
      <h2>答题须知</h2>
      <p>
        选择一个方向，然后开始答题吧！当然了，您也可以作答多个方向的题目<br /><br />作答时系统会自动保存答案，不需要手动保存，下次可以修改答案和继续作答。<br /><br />首页的“提交所有答卷”为最终提交按钮，提交后所有方向试卷锁定，无法修改所有方向的任何答案。
      </p>
    </div> -->

  </div>
</template>

<script>
import '../css/style.css'
import { setInterval } from 'timers'
export default {
  data () {
    return {
      date: '',
      ddlStr: '2020/03/01 16:00',
      ddlStr2: '2020/04/01',
      flag: true, // flag 控制 显示倒计时 还是 显示开始答题按钮,true为未开始，false为进行中
      notesFlag: false,
      Itemflag: true,
      privateName: 'Olina',
      headFlag: true,
      Boxflag: false, // 控制个人信息小框框的显隐
      arrowFlag: false,
      priFlag: false,
      priName: '',
      priPhone: '',
      priNumber: '',
      oldPassword: '',
      newPassword: '',
      priSchool: '',
      priQQ: '',
      rePassword: '',
      value: 0
    }
  },
  methods: {
    Djs_time () {
      // 拼接出日期
      setInterval(() => {
        var ddl = new Date()
        if (new Date() - new Date(this.ddlStr) < 0) {
          ddl = new Date(this.ddlStr)
        } else if (new Date() - new Date(this.ddlStr2) < 0) {
          ddl = new Date(this.ddlStr2)
        }
        var presentTime = new Date()
        var rightTime = ddl - presentTime
        var dd = this.PrefixZero(Math.floor(rightTime / 1000 / 60 / 60 / 24), 2)
        var hh = this.PrefixZero(
          Math.floor((rightTime / 1000 / 60 / 60) % 24),
          2
        )
        var mm = this.PrefixZero(Math.floor((rightTime / 1000 / 60) % 60), 2)
        var ss = this.PrefixZero(Math.floor((rightTime / 1000) % 60), 2)
        this.date = dd + '天 ' + hh + ':' + mm + ':' + ss
      }, 1000)
    },
    mobileStyle () {
      if (this.$route.path !== '/main') {
        if (window.screen.height >= 520 && window.screen.width <= 1080) {
          this.Itemflag = false
        }
      } else {
        this.Itemflag = true
      }
    },
    returnToMain () {
      this.$router.push('/main')
      this.value = 0
    },
    arrowStyle () {
      if (this.$route.path !== '/main') {
        if (window.screen.height >= 520 && window.screen.width <= 1080) {
          this.arrowFlag = true
        }
      } else {
        this.arrowFlag = false
      }
    },
    showHead () {
      if (
        this.$route.path === '/login' ||
        this.$route.path === '/managerlogin'
      ) {
        this.headFlag = false
      } else {
        this.headFlag = true
      }
    },
    getPrivateMsg () {
      this.$axios({
        method: 'get',
        url: '/user/userinfo/get'
      })
        .then(result => {
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
        })
        .catch(err => {
          console.log(err)
        })
    },
    changePrivateMsg () {
      // this.priFlag = false
      this.$axios({
        method: 'post',
        url: '/user/userinfo/change',
        data: {
          name: this.priName,
          phonenum: this.priPhone,
          stunum: this.priNumber,
          qqnum: this.priQQ
        }
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      if (this.newPassword !== '' || this.rePassword !== '') {
        if (this.newPassword.length < 6) {
          alert('新密码长度过短')
          this.closePrivate()
          return
        }
        if (this.newPassword === this.rePassword) {
          this.$axios({
            method: 'post',
            url: '/user/userinfo/password',
            data: {
              oldpassword: this.oldPassword,
              newpassword: this.newPassword
            }
          })
            .then(res => {
              console.log(res)
              if (res.data.code === 0) {
                alert('成功修改密码，请重新登陆')
                this.$router.push({
                  path: '/home'
                })
              } else if (res.data.code === -5) {
                alert('错误的用户名或密码')
                this.oldPassword = this.newPassword = this.rePassword = ''
              } else {
                alert('修改密码失败')
                this.oldPassword = this.newPassword = this.rePassword = ''
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          alert('新密码与重复的密码不一致，请重新输入')
          this.oldPassword = this.newPassword = this.rePassword = ''
        }
      } else {
        if (this.oldPassword !== '') {
          alert('新密码为空，请重新输入')
        }
        this.closePrivate()
      }
    },
    quit: function () {
      if (
        this.$route.path === '/adminindex/overview' ||
        this.$route.path === '/adminindex'
      ) {
        this.$router.push({ path: '/managerlogin' })
      } else {
        this.$router.push({ name: 'home' })
      }
    },
    changeFlag () {
      console.log(8)
      if (new Date() - new Date(this.ddlStr) < 0) {
        this.flag = false
        console.log(10)
      } else if (new Date() - new Date(this.ddlStr2) < 0) {
        this.flag = true
      }
    },
    PrefixZero (num, n) {
      return (Array(n).join(0) + num).slice(-n)
    },
    closePrivate () {
      this.priFlag = false
      this.oldPassword = this.newPassword = this.rePassword = ''
    },
    toGroup (val) {
      if (val === 0) {
        if (this.value === 0) {
          this.value = 7
        } else {
          this.value -= 1
        }
      } else if (val === 1) {
        if (this.value === 7) {
          this.value = 0
        } else {
          this.value += 1
        }
      }
      switch (this.value) {
        case 0:
          this.$router.push({
            path: '/main/'
          })
          break
        case 1:
          this.$router.push({
            path: '/main/product'
          })
          break
        case 2:
          this.$router.push({
            path: '/main/FE'
          })
          break
        case 3:
          this.$router.push({
            path: '/main/BE'
          })
          break
        case 4:
          this.$router.push({
            path: '/main/android'
          })
          break
        case 5:
          this.$router.push({
            path: '/main/iOS'
          })
          break
        case 6:
          this.$router.push({
            path: '/main/design'
          })
          break
        case 7:
          this.$router.push({
            path: '/main/DevOps'
          })
          break
      }
    },
    refreshValue () {
      switch (this.$route.path) {
        case '/main':
          this.value = 0
          break
        case '/main/product':
          this.value = 1
          break
        case '/main/FE':
          this.value = 2
          break
        case '/main/BE':
          this.value = 3
          break
        case '/main/android':
          this.value = 4
          break
        case '/main/iOS':
          this.value = 5
          break
        case '/main/design':
          this.value = 6
          break
        case '/main/Devops':
          this.value = 7
          break
      }
    }
  },
  mounted () {
    this.Djs_time()
    this.mobileStyle()
    this.arrowStyle()
    this.showHead()
    this.changeFlag()
    console.log(8)
    // console.log(this.$route.path)
    this.getPrivateMsg() // 获取用户信息
    // console.log(this.PrefixZero(9, 2))
    this.closePrivate()
    this.refreshValue()
  },
  watch: {
    '$route.path': function (newVal) {
      this.mobileStyle()
      this.arrowStyle()
      this.showHead()
    }
  }
}
</script>
