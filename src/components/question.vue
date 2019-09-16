<template>
  <div class="kind">
    <span class="timeshow"
          v-if="$route.path=='/answer'">{{thistime}}</span>
    <div v-for="(item,index) in questions"
         :key="index">
      <span v-if="index === 0&&$route.path ==='/answer'">一、综合题</span>
      <span v-if="index === secindex&&$route.path ==='/answer'"><br>二、方向题</span>
      <radio v-if="item.type === 1"
             :options="item.options"
             :ID="item.ID"
             :title="item.title"
             :answer="item.answer"
             :index='index'
             @trantime='transtime'
             @tranalert='transalert'></radio>
      <che v-if="item.type === 2"
           :options="item.options"
           :ID="item.ID"
           :title="item.title"
           :answer="item.answer"
           :index="index"
           @trantime='transtime'
           @tranalert='transalert'></che>
      <inp v-if="item.type === 3"
           :ID="item.ID"
           :title="item.title"
           :answer="item.answer"
           :index="index"
           @trantime='transtime'
           @tranalert='transalert'></inp>
      <short v-if="item.type === 4"
             :ID="item.ID"
             :title="item.title"
             :answer="item.answer"
             :index="index"
             @trantime='transtime'
             @tranalert='transalert'></short>
      <uploadque v-if="item.type === 5"
                 :ID="item.ID"
                 :title="item.title"
                 :answer="item.answer"
                 :key="index"
                 :index="index"></uploadque>
    </div>
  </div>
</template>

<script>
import radio from './radio'
import che from './checkbox'
import inp from './sigleinp'
import short from './shortanswer'
import uploadque from './upload'
export default {
  name: 'ques',
  data () {
    return {
      all: [],
      questions: [],
      secindex: 0,
      thistime: ''
    }
  },
  props: {
    group: {
      type: Number,
      default: 0
    }
  },
  components: {
    radio, che, inp, short, uploadque
  },
  mounted () {
    this.getques()
  },
  methods: {
    transtime: function (value) {
      this.thistime = value
    },
    transalert: function () {
      if (this.thistime) {
        alert('最后成功提交于' + this.thistime.substr(0, 8))
      }
    },
    getques: function () {
      this.$axios({
        methods: 'post',
        url: '/user/exam/get'
      }).then((response) => {
        console.log(response)
        if (response.data.code === 0) {
          if (this.$route.path === '/answer') {
            this.all = response.data.data
            for (let a = 0; a < this.all.length; a++) {
              if (this.all[a].groups === 0) {
                this.questions.push(this.all[a])
              }
            }
            this.secindex = this.questions.length
          }
          for (let a = 0; a < this.all.length; a++) {
            if (this.all[a].groups === this.group) {
              this.questions.push(this.all[a])
            }
          }
        } else {
          alert('答卷已提交')
          this.$router.push({ path: 'main' })
        }
      })
    },
    gettime: function () {
      let mytime = new Date()
      this.thistime = mytime.getHours() + ':' + mytime.getMinutes() + ':' + mytime.getSeconds() + ' ' + '自动保存成功'
    }
  }
}
</script>

<style>
.timeshow {
  margin: 0 auto;
  margin-bottom: 1rem;
  display: block;
  text-align: center;
  color: #579eda;
  height: 1rem;
}
.headline {
  margin: 0.5rem auto 1rem 0;
  font-size: 1rem;
  display: block;
  word-break: break-all;
}
.rad {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.radio1 {
  display: none;
}

.radio2 {
  position: relative;
  background-color: rgba(25, 25, 25, 0.8);
  display: inline-block;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 50%;
  flex-wrap: wrap;
}
input:checked + label {
  background-color: #3e3e3e;
}
.ipt {
  background-color: inherit;
  border: 0;
  border-bottom: solid 2px #4a4a4a;
  line-height: 2rem;
  color: #ffffff;
  font-size: 1rem;
}
.txt {
  background-color: inherit;
  color: #ffffff;
  border: solid 2px #4a4a4a;
  height: 5rem;
  font-size: 1rem;
}
.load {
  width: 25px;
  height: 20px;
}

.upl {
  margin: 0 5px;
}
a {
  color: #d9d9d9;
}
.eg {
  margin-left: 20px;
  min-width: 4.5rem;
}
.loading {
  height: 7px;
  background-color: #919191;
  width: 35%;
  margin: 0 0;
  border-radius: 3.5px;
}
.single {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0.5rem auto;
  overflow: scroll;
}
.in {
  background-color: #d9d9d9;
  height: 7px;
  border-radius: 3.5px;
}
.done {
  height: 1rem;
}
.done > img {
  width: 1rem;
  height: 1rem;
}
@media only screen and (min-width: 751px) {
  .headline {
    width: 80%;
  }
  .ipt {
    width: 50%;
    margin-left: 1rem;
  }
  .txt {
    width: 80%;
    margin-left: 1rem;
  }
  .eg {
    margin-left: 20px;
  }
  .optall {
    min-width: 25%;
    max-width: 25%;
    text-align: center;
    margin: 1rem auto;
  }
  .docu {
    width: 80%;
    border: solid 2px #4a4a4a;
    margin: 1rem auto 1rem 1rem;
  }
  .sub {
    position: fixed;
    right: 0;
    top: 23vh;
    color: #ffffff;
    text-align: center;
    background-color: rgba(22, 22, 22, 0.91);
    height: 37%;
    width: 13%;
  }
  .ddl {
    margin: 2rem auto 3rem auto;
  }
  .lasttime {
    display: inline-block;
    margin-top: 0.4rem;
  }
  .btn1 {
    border: solid 2px #ffffff;
    background-color: inherit;
    font-size: 1rem;
    color: #ffffff;
    width: 80%;
    height: 40px;
  }
  .autosave {
    color: #579eda;
    font-size: 1rem;
    font-family: PingFangSC-Regular;
    margin-top: 2rem;
    display: inline-block;
  }
}

@media only screen and (max-width: 750px) {
  .headline {
    margin-left: 0;
  }
  .rad {
    flex-wrap: wrap;
  }
  .optall {
    width: 40%;
    text-align: center;
  }
  .radio2 {
    margin: 10px;
    box-sizing: border-box;
    margin-left: 0;
    width: 90%;
  }
  .ipt {
    width: 100%;
    margin: 0 auto;
  }
  .txt {
    width: 100%;
    margin: 0 auto;
  }
  .docu {
    width: 100%;
    border: solid 2px #4a4a4a;
    margin: 1rem auto 1rem 0;
  }
  .sub {
    text-align: center;
  }
  .ddl {
    display: none;
  }
  .autosave {
    display: none;
  }
  .btn1 {
    color: #ffffff;
    border: solid 1px rgba(255, 255, 255, 0.8);
    background-color: inherit;
    font-size: 1rem;
    width: 36%;
    height: 35px;
  }
}
</style>
