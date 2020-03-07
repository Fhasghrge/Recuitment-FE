<template>
  <div class="che">
    <span
      class="headline"
      v-html="trimstr(title)"
    ></span>
    <div class="rad">
      <div
        v-for="(opt,indexc) in options"
        :key="indexc"
        class="optall"
      >
        <input
          type="checkbox"
          class="radio1"
          :id="che(indexc)"
          :value="options[indexc]"
          v-model="chedata"
          @change="sendche(options[indexc])"
          :disabled="isread"
        />
        <label
          :for="che(indexc)"
          class="radio2"
        >{{options[indexc]}}</label>
      </div>
    </div>
    <div
      class="ctrlBox"
      v-if="$route.path == '/adminindex/ctrlques'"
    >
      <p>出题人：{{ author }}</p>
      <input
        type="button"
        value="添加"
        @click="toAdd"
      >
      <!-- <select name="frontOrBack"
              id="frontOrBack">
        <option value="于此题后">于此题后</option>
        <option value="于此题前">于此题前</option>
      </select> -->
      <input
        type="button"
        value="删除"
        @click="delBoxFlag=true"
      >
      <input
        type="button"
        value="修改"
        @click="toChange"
      >
      <div
        class="delBox"
        v-if="delBoxFlag"
      >
        <p>是否删除</p>
        <img src="../assets/删除@3x.svg">
        <input
          type="button"
          value="确认"
          @click="delConfirm"
        >
        <input
          type="button"
          value="取消"
          @click="delBoxFlag=false"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chedata: [],
      delBoxFlag: false,
      groups: this.$route.query.groups,
      list1: [],
      isread: false,
      thistime: ''
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    ID: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    answer: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    },
    author: {
      type: String,
      default: ''
    }
  },
  methods: {
    getlist: function () {
      this.$axios({
        method: 'post',
        url: '/control/question/list'
      }).then((res2) => {
        if (res2.data.code === 0) {
          this.list2 = res2.data.data
        }
      })
    },
    trimstr: function (str) {
      if (this.$route.path !== '/adminindex/ctrlques') {
        let strindex = String(this.index + 1)
        let strtrim = '(多选题) '
        let head = strindex + '.' + strtrim
        let strtrim1 = str.replace(/\n|\r\n/g, '<br/>')
        let strtrim2 = strtrim1.replace(/\s/g, '&nbsp')
        let strtrim3 = head.concat(strtrim2)
        return strtrim3
      } else {
        let strtrim = '(多选题) '
        let strtrim1 = str.replace(/\n|\r\n/g, '<br/>')
        let strtrim2 = strtrim1.replace(/\s/g, '&nbsp')
        let strtrim3 = strtrim.concat(strtrim2)
        return strtrim3
      }
    },
    che: function (index1) {
      if (this.$route.path !== '/adminindex/ctrlques' && this.$route.path !== '/marking') {
        return 'che' + this.ID + index1
      } else {
        return 'che' + this.index + index1
      }
    },
    sendche: function (value) {
      // console.log(1)
      if (this.$route.path !== '/adminindex/ctrlques' && this.$route.path !== '/marking') {
        let cheflag = 0
        for (let b = 0; b < this.chedata.length; b++) {
          if (value === this.chedata[b]) {
            cheflag = 1
            break
          }
        }
        if (cheflag === 1) {
          this.$axios({
            method: 'post',
            url: '/user/exam/answer',
            data: {
              ID: this.ID,
              answer: value
            }
          }).then((res) => {
            if (res.data.code === 0) {
              let mytime = new Date()
              this.thistime = ''
              if (mytime.getHours() < 10) {
                this.thistime += '0'
              }
              this.thistime += mytime.getHours() + ':'
              if (mytime.getMinutes() < 10) {
                this.thistime += '0'
              }
              this.thistime += mytime.getMinutes() + ':'
              if (mytime.getSeconds() < 10) {
                this.thistime += '0'
              }
              this.thistime += mytime.getSeconds() + ':'
              this.thistime += ' ' + '自动保存成功'
              this.$emit('trantime', this.thistime)
            } else {
              alert('答案上传失败')
            }
          })
        } else if (cheflag === 0) {
          this.$axios({
            method: 'post',
            url: '/user/exam/delete',
            data: {
              ID: this.ID,
              answer: value
            }
          }).then((res) => {
            if (res.data.code === 0) {
              let mytime = new Date()
              this.thistime = ''
              if (mytime.getHours() < 10) {
                this.thistime += '0'
              }
              this.thistime += mytime.getHours() + ':'
              if (mytime.getMinutes() < 10) {
                this.thistime += '0'
              }
              this.thistime += mytime.getMinutes() + ':'
              if (mytime.getSeconds() < 10) {
                this.thistime += '0'
              }
              this.thistime += mytime.getSeconds()
              this.thistime += ' ' + '自动保存成功'
              this.$emit('trantime', this.thistime)
            } else {
              alert('答案上传失败')
            }
          }).catch((err) => {
            if (err) {
              alert('答案上传失败')
              this.$emit('tranalert')
            }
          })
        }
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
    if (this.answer !== []) {
      this.chedata = this.answer
    }
    if (this.$route.path === '/marking') {
      this.getlist()
      for (let i = 0; i < this.list1.length; i++) {
        if (this.ID === this.list1[i].ID) {
          this.title = this.list1[i].title
          return
        }
      }
    }
    if (this.$route.path === '/adminindex/ctrlques') {
      this.isread = true
      let answers = []
      for (let i = 0; i < this.options.length; i++) {
        answers.push(this.options[i].content)
        if (this.options[i].answer === 1) {
          this.chedata.push(this.options[i].content)
        }
      }
      for (let i = 0; i < this.options.length; i++) {
        this.options.splice(i, 1, answers[i])
      }
      // console.log(this.options)
    }
  }
}
</script>

<style scoped>
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
