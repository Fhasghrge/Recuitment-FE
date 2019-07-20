<template>
  <div class="upload">
    <p class="headline">4.画出范老板的肖像画并上传附件</p>
    <div class="line">
      <img src="../assets/load.png"
           class="load" />
      <a class="upl"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      length: 50,
      filename: ''
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
    }
  },
  methods: {
    upload: function () {
      let file = document.getElementById('file')
      file.click()
    }
  }
}
</script>

<style>
.file {
  display: none;
}
</style>
