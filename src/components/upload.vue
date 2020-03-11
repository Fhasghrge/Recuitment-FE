<template>
  <div class="upload">
    <span class="headline" v-html="trimstr(childtitle)"></span>
    <div
      class="line"
      v-if="
        $route.path !== '/adminindex/ctrlques' && $route.path !== '/marking'
      "
    >
      <img src="../assets/load.png" class="load" />
      <a class="upl" href="javascript:void(0)" @click="uploadFile">上传文件</a>
      <input
        type="file"
        class="file"
        :id="ID"
        value=""
        @change="upload($event)"
        :readonly="isread"
      />
      <span style="margin-left:20px;line-height:1.5rem"
        >tips:只能上传一个文件，多文件请将所有文件打包成一个zip后上传，后上传的文件会覆盖之前上传的文件，若上传文件有误，重新上传即可</span
      >
    </div>
    <div
      class="docu"
      v-if="
        $route.path !== '/adminindex/ctrlques' && $route.path !== '/marking'
      "
    >
      <div class="single" v-for="(item, index) in filename" :key="index">
        <span class="docname">{{ filename[index] }}</span>
        <div class="loading" v-if="flag">
          <div class="in" :style="{ width: length + '%' }"></div>
        </div>
        <span v-else class="eg">上传成功</span>
      </div>
    </div>
    <div class="ctrlBox" v-if="$route.path == '/adminindex/ctrlques'">
      <p>出题人：{{ author }}</p>
      <input type="button" value="添加" @click="toAdd" />
      <!-- <select name="frontOrBack"
              id="frontOrBack">
        <option value="于此题后">于此题后</option>
        <option value="于此题前">于此题前</option>
      </select> -->
      <input type="button" value="删除" @click="delBoxFlag = true" />
      <input type="button" value="修改" @click="toChange" />
      <div class="delBox" v-if="delBoxFlag">
        <p>是否删除</p>
        <img src="../assets/删除@3x.svg" />
        <input type="button" value="确认" @click="delConfirm" />
        <input type="button" value="取消" @click="delBoxFlag = false" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 0,
      filename: [],
      flag: true,
      delBoxFlag: false,
      groups: this.$route.query.groups,
      list3: [],
      childtitle: '',
      isread: false
    }
  },
  props: {
    ID: {
      type: Number,
      default: 0
    },
    group: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    answer: {
      type: String,
      default: ''
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
    getlist: function() {
      this.$axios({
        method: 'post',
        url: '/control/question/info',
        data: {
          ID: this.ID
        }
      }).then(res2 => {
        if (res2.data.code === 0) {
          this.childtitle = res2.data.data.title
        }
      })
    },
    uploadFile: function() {
      let file = document.getElementById(this.ID)
      file.click()
    },
    toAdd() {
      this.$router.push({
        path: '/adminindex/add',
        query: {
          groups: parseInt(this.groups)
        }
      })
    },
    toChange() {
      this.$router.push({
        path: '/adminindex/add',
        query: {
          ID: this.ID,
          groups: parseInt(this.groups)
        }
      })
    },
    delConfirm() {
      this.delBoxFlag = false
      this.$axios({
        method: 'post',
        url: '/control/question/del',
        data: {
          ID: this.ID
        }
      })
        .then(result => {
          console.log(result)
          this.$router.go(0)
        })
        .catch(err => {
          console.log(err)
        })
    },
    trimstr: function(str) {
      if (this.$route.path !== '/adminindex/ctrlques') {
        let strindex = String(this.index + 1)
        let strtrim = '(附件题) '
        let head = strindex + '.' + strtrim
        let strtrim1 = str.replace(/\n|\r\n/g, '<br/>')
        let strtrim2 = strtrim1.replace(/\s/g, '&nbsp')
        let tempstr = strtrim2.replace(/img&nbsp/g, 'img ')
        let strtrim3 = head.concat(tempstr)
        return strtrim3
      } else {
        let strtrim = '(附件题) '
        let strtrim1 = str.replace(/\n|\r\n/g, '<br/>')
        let strtrim2 = strtrim1.replace(/\s/g, '&nbsp')
        let tempstr = strtrim2.replace(/img&nbsp/g, 'img ')
        let strtrim3 = strtrim.concat(tempstr)
        return strtrim3
      }
    },
    upload: function(f) {
      let form = new FormData()
      form.append('ID', this.ID)
      for (let i = 0; i < f.target.files.length; i++) {
        let file = f.target.files[i]
        this.filename.splice(0, 1, file.name)
        form.append('file', file)
      }
      if (
        this.$route.path !== '/adminindex/ctrlques' &&
        this.$route.path !== '/marking'
      ) {
        let that = this
        this.$axios({
          method: 'post',
          headers: { 'Content-Type': 'undefined' },
          url: '/user/file/upload',
          data: form,
          onUploadProgress: function(f) {
            console.log(f)
            // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
            // 如果lengthComputable为false，就获取不到e.total和e.loaded
            if (f.lengthComputable) {
              var rate = f.loaded / f.total // 已上传的比例
              if (rate < 1) {
                that.length = (rate * 100).toFixed(2)
              }
            }
          }
        })
          .then(res => {
            if (res.data.code === 0) {
              that.flag = false
              this.$message({
                message: '上传成功',
                type: 'success'
              })
            }
          })
          .catch(err => {
            if (err) {
              alert('答案上传失败')
              this.$emit('tranalert')
            }
          })
      }
    }
  },
  mounted() {
    this.childtitle = this.title
    if (this.answer !== '') {
      this.filename.splice(0, 1, this.answer)
      console.log(1)
      console.log(this.filename)
      this.flag = false
    }
    if (this.$route.path === '/marking') {
      this.flag = false
      this.getlist()
    }
    if (this.$route.path === '/adminindex/ctrlques') {
      this.isread = true
    }
  }
}
</script>

<style scoped>
.file {
  display: none;
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
