<template>
  <div class="text">
    <span class="headline"
          v-html="trimstr(title)"></span>
    <textarea class="txt"
              v-model="shortanswer"
              @blur="sendshoans"></textarea>
    <div class="ctrlBox"
         v-if="$route.path == '/adminindex/ctrlques'">
      <p>出题人：RIO</p>
      <input type="button"
             value="添加"
             @click="toAdd">
      <!-- <select name="frontOrBack"
              id="frontOrBack">
        <option value="于此题后">于此题后</option>
        <option value="于此题前">于此题前</option>
      </select> -->
      <input type="button"
             value="删除"
             @click="delBoxFlag=true">
      <input type="button"
             value="修改"
             @click="toChange">
      <div class="delBox"
           v-if="delBoxFlag">
        <p>是否删除</p>
        <img src="../assets/删除@3x.svg">
        <input type="button"
               value="确认"
               @click="delConfirm">
        <input type="button"
               value="取消"
               @click="delBoxFlag=false">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shortanswer: '',
      delBoxFlag: false,
      groups: this.$route.query.groups,
      list1: [],
      childtitle: this.title
    }
  },
  props: {
    ID: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
    }
  },
  methods: {
    getlist: function () {
      this.$axios({
        method: 'post',
        url: '/control/question/info',
        data: {
          ID: this.ID
        }
      }).then((res2) => {
        if (res2.data.code === 0) {
          this.childtitle = res2.data.data.title
        }
      })
    },
    trimstr: function (str) {
      let strtrim = str.replace(/\n|\r\n/g, '<br/>')
      return strtrim
    },
    sendshoans: function () {
      if (this.$route.path === '/answer') {
        this.$axios({
          method: 'post',
          url: '/user/exam/answer',
          data: {
            ID: this.ID,
            answer: this.shortanswer
          }
        })
      }
    },
    toAdd () {
      this.$router.push({
        path: '/adminindex/add',
        query: {
          groups: parseInt(this.groups)
        }
      })
    },
    toChange () {
      this.$router.push({
        path: '/adminindex/add',
        query: {
          ID: this.ID,
          groups: parseInt(this.groups)
        }
      })
    },
    delConfirm () {
      this.delBoxFlag = false
      this.$axios({
        method: 'post',
        url: '/control/question/del',
        data: {
          ID: this.ID
        }
      }).then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    if (this.answer !== '') {
      this.shortanswer = this.answer
    }
    if (this.$route.path === '/marking') {
      this.getlist()
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 751px) {
}
@media only screen and (max-width: 750px) {
}
select {
  -webkit-appearance: none; /* google */
  -moz-appearance: none; /* firefox */
  appearance: none; /* IE */
  width: 80px;
  height: 30px;
  font-size: 0.9rem;
  color: white;
  text-align: center;
  background-color: black;
  margin-top: 2.3%;
}
.ctrlBox {
  position: relative;
  color: white;
  width: 60%;
  height: 30px;
  margin-left: 40%;
  display: flex;
  text-align: center;
  font-size: 1.2rem;
}
input {
  background-color: black;
  color: white;
  border: solid white 1px;
  height: 30px;
  margin-top: 2.3%;
  margin-left: 5%;
  width: 10%;
}
.delBox {
  position: absolute;
  background-color: black;
  z-index: 999999;
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: 0 auto;
}
.delBox p {
  margin: 0 auto;
}
.delBox img {
  margin-left: 30%;
}
.delBox input {
  margin-top: 6%;
  font-size: 1.1rem;
  width: 45%;
}
</style>
