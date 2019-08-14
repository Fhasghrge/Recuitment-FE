<template>
  <div>
    <div id='addHead'>
      <h3>{{groupName}}</h3><span>/招新题目</span>
    </div>
    <div id='motify'>
      <a @click="ret"
         id="return">返回</a>
      <textarea name=""
                id="quesDescribe"
                cols="30"
                rows="5"
                v-model="quesDescribe"
                @click="showDes"></textarea>
      <span id='typeTips'
            v-if="!$route.query.ID">题目类型</span>
      <select name="questionType"
              id="questionType"
              ref="options"
              v-show="!$route.query.ID"
              @click="changeFlag">
        <option value="单选">单选</option>
        <option value="多选">多选</option>
        <option value="填空">填空</option>
        <option value="简答">简答</option>
        <option value="上传文件">上传文件</option>
      </select>
      <label v-show="!$route.query.ID"><input type="checkbox"
               value="">必答</label>
      <div v-if="flag">
        <div id='optionHead'>
          <p class="optionHead">选项文字</p>
          <p class="trueAnswer optionHead">正确答案</p>
          <p class="upDown optionHead">上移下移</p>
        </div>
        <ul id='optionText'>
          <li v-for="(item,index) in optionList"
              :key="index"
              :class="item.name"
              class="option">
            <input type="text"
                   v-model="item.text"
                   ref="optionText"
                   @click="optionTextShow(index)">
            <img src="../../img/添加icon.png"
                 class="addImg"
                 @click="add(index)">
            <img src="../../img/减少icon.png"
                 class="delImg"
                 @click="del(index)">
            <input type="checkbox"
                   id='checkTrueAnswer'
                   ref="check"
                   v-model="item.answer">
            <img src="../../img/上移icon.png"
                 class="upImg"
                 @click="Up(index)">
            <img src="../../img/下移icon.png"
                 class="downImg"
                 @click="Down(index)">
          </li>
        </ul>
        <button id="addBtn"
                @click="addOption">添加选项</button>
        <span id='confirmMsg'>{{confirmMsg}}</span><button id="confirmBtn"
                @click="addQuestion">保存修改</button>
      </div>

    </div>
  </div>
</template>

<script>
// import { stringify } from 'querystring'
export default {
  data () {
    return {
      groupName: '设计组',
      optionList: [
        { text: '选项1', id: 1, name: 'option1', answer: false }
      ],
      confirmMsg: '',
      flag: true,
      quesDescribe: '请输入题目描述',
      groups: this.$route.query.groups,
      id: -1
    }
  },
  methods: {
    showGroupName () {
      let group = this.$route.query.groups
      switch (group) {
        case 0: this.groupName = '公共题库'; break
        case 1: this.groupName = '产品'; break
        case 2: this.groupName = '设计'; break
        case 3: this.groupName = '安卓'; break
        case 4: this.groupName = 'iOS'; break
        case 5: this.groupName = '前端'; break
        case 6: this.groupName = '后台'; break
        case 7: this.groupName = 'DevOps'; break
      }
    },
    getQuestion (ID) {
      if (ID !== -1) {
        this.$axios({
          method: 'post',
          url: '/control/question/info',
          data: {
            ID
          }
        }).then((result) => {
          console.log(result)
          result = result.data
          if (result.code === 0) {
            console.log(result.msg)
            result = result.data
            this.quesDescribe = result.title
            this.$refs.options[result.type - 1].selected = true
            this.changeFlag()
            if (result.options) {
              this.optionList.splice(0, 1) // 把默认选项删除
              for (let i = 0; i < result.options.length; i++) {
                let option = {
                  text: result.options[i].content,
                  answer: result.options[i].answer,
                  id: i + 1,
                  name: 'option' + (i + 1).toString()
                }
                this.optionList.push(option)
              }
            }
          } else {
            alert('获取题目信息失败')
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    addOption () {
      let len = this.optionList.length
      // if (len > 4) {
      //   alert('最多只能四个选项')
      //   return
      // }
      let id = len + 1
      let option = {
        text: '选项' + id.toString(),
        id: id,
        name: 'option' + id.toString(),
        answer: false
      }
      this.optionList.push(option)
    },
    changeFlag () {
      let val = this.$refs.options.value
      if (val === '单选' || val === '多选') {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    ret () {
      this.$router.push({
        path: '/adminindex/ctrlques',
        query: {
          groups: this.groups
        }
      })
    },
    swapArray (arr, index1, index2) {
      arr[index1] = arr.splice(index2, 1, arr[index1])[0]
      return arr
    },
    Down (index) {
      let len = this.optionList.length
      if (index + 1 !== len) {
        this.swapArray(this.optionList, index, index + 1)
      } else {
        alert('已经处于置底，无法下移')
      }
    },
    Up (index) {
      if (index !== 0) {
        this.swapArray(this.optionList, index, index - 1)
      } else {
        alert('已经处于置顶，无法上移')
      }
    },
    del (index) {
      this.optionList.splice(index, 1)
    },
    add (index) {
      // if (this.optionList.length > 4) {
      //   alert('最多只能四个选项')
      //   return
      // }
      let id = this.optionList.length + 1
      let option = {
        text: this.optionList[index].text,
        id: id,
        name: 'option' + id.toString(),
        answer: false
      }
      this.optionList.push(option)
    },
    showDes () {
      if (!this.$route.query.ID && this.quesDescribe === '请输入题目描述') {
        this.quesDescribe = ''
      }
    },
    optionTextShow (index) {
      if (!this.$route.query.ID && this.optionList[index].text === '选项' + String(index + 1)) {
        this.optionList[index].text = ''
      }
    },
    addQuestion () {
      let trueAnswerCount = 0
      let data = {}
      let groups = this.$route.query.groups
      let questionType = this.$refs.options.value
      if (questionType === '单选') {
        let type = 1
        let title = this.quesDescribe
        let describe = this.quesDescribe
        let options = []
        for (let i = 0; i < this.optionList.length; i++) {
          if (this.optionList[i].answer) {
            trueAnswerCount = trueAnswerCount + 1
          }
          if (trueAnswerCount > 1) {
            alert('单选题只能设置一个正确选项')
            return
          }
          let option = {
            content: this.optionList[i].text,
            answer: this.optionList[i].answer
          }
          options.push(option)
        }
        if (trueAnswerCount === 0) {
          alert('请设置一个正确选项')
          return
        }
        data = { type, groups, title, describe, options }
        // console.log(data)
      } else if (questionType === '多选') {
        let type = 2
        let title = this.quesDescribe
        let describe = this.quesDescribe
        let options = []
        for (let i = 0; i < this.optionList.length; i++) {
          if (this.optionList[i].answer) {
            trueAnswerCount = trueAnswerCount + 1
          }
          let option = {
            content: this.optionList[i].text,
            answer: this.optionList[i].answer
          }
          options.push(option)
        };
        if (trueAnswerCount <= 1) {
          alert('请设置至少两个个正确选项')
          return
        }
        data = { type, groups, title, describe, options }
        // console.log(data)
      } else if (questionType === '填空') {
        let type = 3
        let title = this.quesDescribe
        let describe = this.quesDescribe
        data = { type, groups, title, describe }
        // console.log(data)
      } else if (questionType === '简答') {
        let type = 4
        let title = this.quesDescribe
        let describe = this.quesDescribe
        data = { type, groups, title, describe }
        // console.log(data)
      } else if (questionType === '上传文件') {
        let type = 5
        let title = this.quesDescribe
        let describe = this.quesDescribe
        data = { type, groups, title, describe }
        // console.log(data)
      }
      console.log(data)
      if (this.id === -1) {
        this.$axios({
          method: 'post',
          url: '/control/question/add',
          data
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        data.ID = this.id
        this.$axios({
          method: 'post',
          url: '/control/question/change',
          data
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
      alert('修改（添加）成功')
      this.$router.push({
        path: '/adminindex/ctrlques',
        query: {
          groups: this.groups
        }
      })
    }
  },
  created () {
    let _this = this
    this.showGroupName()
    if (this.$route.query.ID || this.$route.query.ID === 0) {
      this.id = this.$route.query.ID
    }
    this.getQuestion(this.id)
    document.onkeydown = function (e) {
      let _key = window.event.keyCode
      if (_key === 13) {
        _this.addOption()
      }
    }
  }
}
</script>

<style scoped>
#motify {
  position: absolute;
  margin-left: 20%;
  margin-top: 2%;
  width: 60%;
  /* height: 600px; */
  background: black;
}
#addHead {
  display: flex;
  margin-left: 25%;
}
#addHead h3 {
  margin-top: 5%;
  font-family: PingFangSC-Regular;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #e9e9e9;
}
#addHead span {
  margin-top: 4.5%;
  font-family: PingFangSC-Regular;
  font-size: 1.8rem;
  font-weight: normal;
  letter-spacing: 0px;
  color: #e9e9e9;
}
#motify #return {
  position: absolute;
  margin-top: 3%;
  margin-left: 3%;
  padding: 0.5%;
  padding-left: 2%;
  padding-right: 2%;
  color: #e9e9e9;
  font-size: 1rem;
  background: black;
  border: 1px white solid;
}
#motify #return:hover {
  cursor: pointer;
}
#motify #quesDescribe {
  position: absolute;
  padding-left: 2%;
  padding-top: 2%;
  margin-top: 10%;
  margin-left: 13%;
  width: 70%;
  color: #e9e9e9;
  font-size: 1.3rem;
}
#motify #questionType {
  width: 80px;
  font-size: 0.9rem;
  color: white;
  text-align: center;
}
#motify select {
  position: absolute;
  margin-top: 26.3%;
  margin-left: 24%;
  background: black;
  color: white;
}
#motify #typeTips {
  position: absolute;
  margin-top: 26%;
  margin-left: 13%;
  color: white;
}
#motify label {
  position: absolute;
  margin-top: 26.4%;
  margin-left: 38%;
  color: white;
}
#optionHead {
  position: relative;
  color: white;
  display: flex;
  margin-left: 14%;
  width: 70%;
  height: 6%;
  border: 1.5px solid white;
  margin-top: 32%;
  padding-top: 0.5%;
  padding-left: 2%;
}
#optionHead .optionHead {
  margin-top: 1%;
}
#optionHead .trueAnswer {
  margin-left: 40%;
}
#optionHead .upDown {
  margin-left: 21%;
}
#optionText {
  /* margin-left: 10%;
  margin-top: 37%; */
  position: relative;
}
.option {
  position: relative;
  padding-top: 1%;
  /* margin-top: 37%; */
}
#optionText input {
  position: relative;
  margin-left: 10%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
  /* margin-top: 0.1%; */
  color: #e9e9e9;
  background: black;
  border: 1.5px white solid;
  width: 25%;
  text-align: center;
  font-size: 1rem;
}
#optionText .addImg,
.delImg {
  position: relative;
  margin-left: 1%;
  /* margin-left: 95%; */
  /* margin-top: -12%; */
}
#optionText .delImg {
  margin-left: 2%;
}
#optionText #checkTrueAnswer {
  position: relative;
  max-width: 5%;
  margin-top: -9%;
  margin-left: 6%;
}
#optionText .upImg,
.downImg {
  position: relative;
  margin-left: 16%;
  margin-top: -12%;
}
#optionText .downImg {
  margin-left: 3%;
}
/* #optionText .option1,
.option2,
.option3,
.option4 {
  margin-top: 5%;
} */
#addBtn,
#confirmBtn {
  position: relative;
  /* margin-top: 58%; */
  color: white;
  background: black;
  border: 1.5px solid white;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.8%;
  margin-left: 15%;
}
#confirmMsg {
  position: absolute;
  margin-top: 58%;
  color: red;
  font-size: 1rem;
  padding: 0.8%;
  margin-left: 60%;
}
#confirmBtn {
  margin-top: 0;
  width: 12%;
  margin-left: 80%;
  border: 0.1px solid white;
  background-color: #10619a;
}
</style>
