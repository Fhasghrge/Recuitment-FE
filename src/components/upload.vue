<template>
  <div class="upload">
    <p class="headline">4.画出范老板的肖像画并上传附件</p>
    <div class="line">
      <img src="../assets/load.png"
           class="load" />
      <a class="upl"
         href="javascript:void(0)"
         @click="uploadFile">上传文件</a>
      <input type="file"
             class="file"
             id="file"
             multiple="multiple"
             value=""
             @change="upload">
      <span class="eg">tips:多文件请将所有文件打包成一个zip文件上传</span>
    </div>
    <div class="docu">
      <div class="single"
           v-for="(item,index) in filename"
           :key="index">
        <span class="docname">{{filename[index]}}</span>
        <div class="loading"
             v-if="flag">
          <div class="in"
               :style="{ width: length + '%' }"></div>
        </div><span v-else
              class="eg">上传成功</span>
      </div>
    </div>
    <div class="ctrlBox"
         v-if="$route.path == '/adminindex/ctrlques'">
      <p>出题人：RIO</p>
      <input type="button"
             value="添加"
             @click="toAdd">
      <select name="frontOrBack"
              id="frontOrBack">
        <option value="于此题后">于此题后</option>
        <option value="于此题前">于此题前</option>
      </select>
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
      length: 0,
      filename: [],
      flag: true,
      delBoxFlag: false,
      groups: this.$route.query.groups,
      list3: []
    }
  },
  props: {
    ID: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: '有多帅'
    },
    answer: {
      type: String,
      default: '就是这么帅'
    }
  },
  methods: {
    getlist: function () {
      this.$axios({
        methods: 'post',
        url: '/control/question/list'
      }).then((res2) => {
        if (res2.code === 0) {
          this.list3 = res2.data.data
        }
      })
    },
    uploadFile: function () {
      let file = document.getElementById('file')
      file.click()
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
    },
    upload: function (f) {
      var form = new FormData()
      form.append('name', 'txl')
      for (let i = 0; i < f.target.files.length; i++) {
        var file = f.target.files[i]
        form.append('file', file)
        this.filename.splice(i, 1, file.name)
      }
      if (this.$route.path === '/answer') {
        this.$axios({
          methods: 'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          url: '/user/file/upload',
          data: {
            ID: this.ID,
            file: form
          },
          onUploadProgress: function (f) {
            console.log('进度：')
            console.log(f)
            // 属性lengthComputable主要表明总共需要完成的工作量和已经完成的工作是否可以被测量
            // 如果lengthComputable为false，就获取不到e.total和e.loaded
            if (f.lengthComputable) {
              var rate = f.loaded / f.total // 已上传的比例
              if (rate < 1) {
                this.length = (rate * 100).toFixed(2)
              } else {
                this.flag = false
              }
            }
          }
        })
      }
    }
  },
  mounted () {
    if (this.answer !== '') {
      this.filename.splice(0, 1, this.answer)
    }
    if (this.$route.path === '/marking') {
      this.flag = false
      this.getlist()
      for (let i = 0; i < this.list3.length; i++) {
        if (this.ID === this.list3[i].ID) {
          this.title = this.list3[i].title
          return
        }
      }
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
