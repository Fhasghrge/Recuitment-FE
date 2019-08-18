<template>
  <div id='main'>
    <div id='header'
         v-if="headFlag">
      <img src="../assets/小箭头-左.png"
           class="arrow_left"
           @click="returnToMain"
           v-if='arrowFlag'>
      <img src="../assets/LOGO1.png"
           class='logo'
           @click="returnToMain">
      <img src="../assets/小箭头.png"
           class="arrow_right"
           :class="[{ arrowhead:1},{ rotate1:Boxflag},{ rotate2:(!Boxflag)}]">
      <img src="../assets/头像.png"
           class='portrait'
           @click="priFlag=true"
           @mouseover="Boxflag=!Boxflag"
           @mouseout="Boxflag=!Boxflag">
    </div>
    <transition name="draw">
      <div class="mainbox"
           v-show="Boxflag"
           @mouseover="Boxflag=1"
           @mouseout="Boxflag=0">
        <button class="btn"
                v-show="Boxflag"
                @click="priFlag=true;Boxflag=!Boxflag;">个人信息</button>
        <button class="btn quitLogin"
                v-show="Boxflag"
                @click="quit">退出登陆</button>
      </div>
    </transition>
    <router-view></router-view>
    <div id='text'>
      <p class='tips'
         v-if="!flag">距离开始答题还有：</p>
      <p class='date'
         v-if="!flag">{{ date }}</p>
      <p class='tips'
         v-if="flag">距离答题结束还有：</p>
      <p class='date'
         v-if="flag">{{ date }}</p>
    </div>
    <div id='group'
         v-if='Itemflag'>
      <div class="group">
        <img src="../assets/icons/产品.svg">
        <router-link to="/main/product">产品</router-link>
        <img src="../assets/icons-new/前端开发@3x.svg">
        <router-link to="/main/FE">前端</router-link>
        <img src="../assets/icons/后台@1x.svg">
        <router-link to="/main/BE">后台</router-link>
        <img src="../assets/安卓@3x.svg">
        <router-link to="/main/android">安卓</router-link>
        <img src="../assets/IOS@3x.svg">
        <router-link to="/main/iOS">iOS</router-link>
        <img src="../assets/icons/设计.svg">
        <router-link to="/main/design">设计</router-link>
        <img src="../assets/icons-new/DevOps@3x.svg">
        <router-link to="/main/DevOps">DevOps</router-link>
      </div>
    </div>

    <a href=""
       id='notes'
       ref="notes"
       @click.prevent="notesFlag=true">答题须知</a>

    <div id='noteText'
         v-if="notesFlag"
         ref="noteText">
      <img src="../assets/close.png"
           class="close"
           @click="notesFlag=false">
      <h2>答题须知</h2>
      <p>这里是答题须知的内容哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</p>
      <!-- <a href=""
         v-if='!flag'
         @click.prevent="notesFlag=false">开始答题</a> -->
    </div>

    <div id='private'
         v-if='priFlag'>
      <img src="../assets/头像.png"
           id="priHead"><span id="priName">{{ privateName }}</span>
      <img src="../assets/close.png"
           class="close"
           @click="priFlag=false">
      <div id='priText'>
        <div class="priBox priLeft">
          <p class='priVal'>真实姓名</p><input class="priMsg"
                 v-model="priName">
          <hr class="line">
        </div>
        <div class="priBox priRight">
          <p class='priVal'>手机号</p><input class="priMsg"
                 v-model='priPhone'>
          <hr class="line">
        </div>
        <div class="priBox priLeft">
          <p class='priVal'>信息门户账号</p><input class="priMsg"
                 v-model="priNumber">
          <hr class="line">
        </div>
        <div class="priBox priRight">
          <p class='priVal'>旧密码</p><input class="priMsg"
                 v-model="oldPassword"
                 type="password">
          <hr class="line">
        </div>
        <div class="priBox priLeft">
          <p class='priVal'>学院</p><input class="priMsg"
                 v-model="priSchool">
          <hr class="line">
        </div>
        <div class="priBox priRight">
          <p class='priVal'>新密码</p><input class="priMsg"
                 v-model="newPassword"
                 type="password">
          <hr class="line">
        </div>
        <div class="priBox priLeft">
          <p class='priVal'>QQ号</p><input class="priMsg"
                 v-model="priQQ">
          <hr class="line">
        </div>
        <div class="priBox priRight">
          <p class='priVal'>重复密码</p><input class="priMsg"
                 v-model="rePassword"
                 type="password">
          <hr class="line">
        </div>
      </div>
      <a class='confirm'
         @click='changePrivateMsg'>确认</a>
      <a class='confirm quitConfirm'
         @click='quit'>退出登录</a>
    </div>
  </div>
</template>

<script>
import '../css/style.css'
import { setInterval } from 'timers'
export default {
  data () {
    return {
      date: '',
      ddlStr: '2019/09/01',
      ddlStr2: '2019/10/01',
      flag: true, // flag 控制 显示倒计时 还是 显示开始答题按钮,true为未开始，false为进行中
      notesFlag: false,
      Itemflag: true,
      privateName: 'Olina',
      headFlag: true,
      Boxflag: false, // 控制个人信息小框框的显隐
      arrowFlag: false,
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
    Djs_time () { // 拼接出日期
      setInterval(() => {
        var ddl = new Date()
        if (new Date() - new Date(this.ddlStr) < 0) {
          ddl = new Date(this.ddlStr)
        } else if ((new Date() - new Date(this.ddlStr2) < 0)) {
          ddl = new Date(this.ddlStr2)
        }
        var presentTime = new Date()
        var rightTime = ddl - presentTime
        var dd = this.PrefixZero(Math.floor(rightTime / 1000 / 60 / 60 / 24), 2)
        var hh = this.PrefixZero(Math.floor((rightTime / 1000 / 60 / 60) % 24), 2)
        var mm = this.PrefixZero(Math.floor((rightTime / 1000 / 60) % 60), 2)
        var ss = this.PrefixZero(Math.floor((rightTime / 1000) % 60), 2)
        this.date = dd + 'd ' + hh + ':' + mm + ':' + ss
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
      if (this.$route.path === '/login' || this.$route.path === '/managerlogin') {
        this.headFlag = false
      } else {
        this.headFlag = true
      }
    },
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
    },
    quit () {
      let storage = window.localStorage
      storage.clear()
      if (this.$route.path === '/adminindex/overview' || this.$route.path === '/adminindex') {
        this.$router.push({ path: 'managerlogin' })
      } else {
        this.$router.push({ name: 'home' })
      }
    },
    changeFlag () {
      if (new Date() - new Date(this.ddlStr) < 0) {
        this.flag = false
      } else if (new Date() - new Date(this.ddlStr2) < 0) {
        this.flag = true
      }
    },
    PrefixZero (num, n) {
      return (Array(n).join(0) + num).slice(-n)
    }
  },
  mounted () {
    this.Djs_time()
    this.mobileStyle()
    this.arrowStyle()
    this.showHead()
    this.changeFlag()
    // console.log(this.$route.path)
    this.getPrivateMsg() // 获取用户信息
    // console.log(this.PrefixZero(9, 2))
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
