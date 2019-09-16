<template>
  <div>
    <markbar :username='username'></markbar>
    <div class="markques">
      <button class="markreturn"
              @click="gobackto">返回</button><span class="notice">离开前请一定记得点击：“保存阅卷”</span>
      <div class="markque">
        <markcontent :username='username'
                     :que='que'
                     :group='group'></markcontent>
      </div>
    </div>
    <scorebar :judger='judger'
              :que='que'
              :userID='stunum'></scorebar>
  </div>
</template>

<script>
import markbar from '../../components/markbar'
import markcontent from '../../components/markcontent'
import scorebar from '../../components/scorebar'
export default {
  name: 'answer',
  components: {
    markbar,
    markcontent,
    scorebar
  },
  data () {
    var stunum = String(this.$route.query.stunum)
    var username = String(this.$route.query.username)
    var judger = String(this.$route.query.judger)
    return {
      group: String(this.$route.query.groups),
      stunum,
      judger,
      username,
      que: [],
      ques: []
    }
  },
  mounted () {
    this.getques()
    console.log(this.$route.query.groups)
    console.log(this.group)
  },
  methods: {
    gobackto: function () {
      this.$router.go(-1)
    },
    getques: function () {
      console.log(this.stunum)
      this.$axios({
        method: 'post',
        url: '/control/exam/get',
        data: {
          stunum: this.stunum
        }
      }).then((res) => {
        if (res.data.code === 0) {
          this.ques = res.data.data
          console.log(this.ques)
          for (let a = 0; a < this.ques.length; a++) {
            if (this.ques[a].groups === this.thisgroup) {
              this.que.push(this.ques[a])
            }
          }
          console.log(this.que)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
html {
  margin: 0;
  min-height: 100vh;
}
body {
  background-image: url("../../assets/back.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  min-height: 100vh;
}

#app {
  margin: 0;
}
@media only screen and (min-width: 751px) {
  .markques {
    width: 70%;
    margin: 0 auto 0 3rem;
    color: #ffffff;
    margin-bottom: 5rem;
  }

  .markque {
    padding: 1.6rem 5% 3rem 5%;
    color: #bfbfbf;
    background-color: rgba(25, 25, 25, 0.8);
  }
  .markreturn {
    width: 95px;
    height: 37px;
    border-radius: 3px;
    border: solid 1px #ffffff;
    background-color: inherit;
    font-family: PingFangSC-Semibold;
    font-size: 1.1rem;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin: 1.3rem 2rem 1rem 2rem;
  }
  .notice {
    font-size: 1.2rem;
  }
}
</style>
