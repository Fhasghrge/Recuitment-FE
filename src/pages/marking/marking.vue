<template>
  <div>
    <markbar :username='username'></markbar>
    <div class="markques">
      <button class="markreturn"
              @click="gobackto">返回</button><span class="notice">离开前请一定记得点击：“保存阅卷”</span>
      <div class="markque">
        <markcontent :username='username'
                     :que='que'></markcontent>
      </div>
    </div>
    <scorebar :judger='judger'
              :que='que'
              :username='username'></scorebar>
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
    var stunum = this.$route.params.stunum
    var username = this.$route.params.username
    var judger = this.$route.params.judger
    return {
      stunum,
      judger,
      username,
      que: []
    }
  },
  methods: {
    gobackto: function () {
      this.$router.go(-1)
    },
    getques: function () {
      console.log(this.stunum)
      this.$axios({
        methods: 'post',
        url: '/control/exam/get',
        data: {
          stunum: this.stunum
        }
      }).then((res) => {
        console.log(res)
        if (res.data.code === 0) {
          this.que = res.data.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getques()
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
