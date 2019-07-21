<template>
  <div class="upload">
    <p class="headline">4.画出范老板的肖像画并上传附件</p>
    <div class="line">
      <img src="../assets/load.png"
           class="load" />
      <a class="upl"
<<<<<<< HEAD
         href="#"
         @click="upload">上传文件</a>
      <input type="file"
             class="file"
             id="file">
      <span class="eg">支持扩展名: .jpg,.rar,.zip</span>
    </div>
    <div class="docu">
      <div class="single">
        <span class="docname">范老板牛逼.zip</span>
        <div class="loading">
          <div class="in"
               v-bind:style="{ width: length + '%' }"></div>
        </div>
      </div>
      <div class="single">
        <span class="docname">范老板牛逼.zip</span>
        <div class="done">
          <img src="../assets/cha.png" />
        </div>
=======
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
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
<<<<<<< HEAD
      length: 50,
      filename: ''
=======
      length: 0,
      filename: [],
      flag: true
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
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
<<<<<<< HEAD
    }
  },
  methods: {
    upload: function () {
      let file = document.getElementById('file')
      file.click()
=======
    },
    answer: {
      type: String,
      default: '就是这么帅'
    }
  },
  methods: {
    uploadFile: function () {
      let file = document.getElementById('file')
      file.click()
    },
    upload: function (f) {
      var form = new FormData()
      for (let i = 0; i < f.target.files.length; i++) {
        var file = f.target.files[i]
        form.append('file', file)
        this.filename.splice(i, 1, file.name)
      }
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
  },
  mounted () {
    if (this.answer !== '') {
      this.filename.splice(0, 1, this.answer)
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
    }
  }
}
</script>

<style>
.file {
  display: none;
}
</style>
