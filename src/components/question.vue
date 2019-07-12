<template>
  <div class="ques">
    <div class="que">
      <p style="color:#ffffff">离开前请一定记得点击“保存作答”</p>
      <div class="radio">
        <p class="headline">1.什么最好玩(单选)</p>
        <div class="rad">
          <input type="radio" name="radio" id="radio1" class="radio1" />
          <label for="radio1" class="radio2">前端超好玩</label>
          <input type="radio" name="radio" id="radio2" class="radio1" />
          <label for="radio2" class="radio2">前端超好玩</label>
          <input type="radio" name="radio" id="radio3" class="radio1" />
          <label for="radio3" class="radio2">前端超好玩</label>
          <input type="radio" name="radio" id="radio4" class="radio1" />
          <label for="radio4" class="radio2">前端超好玩</label>
        </div>
      </div>
      <div class="che">
        <p class="headline">1.什么最好玩(多选)</p>
        <div class="rad">
          <input type="checkbox" name="radio" id="radio5" class="radio1" />
          <label for="radio5" class="radio2">前端超好玩</label>
          <input type="checkbox" name="radio" id="radio6" class="radio1" />
          <label for="radio6" class="radio2">前端超好玩</label>
          <input type="checkbox" name="radio" id="radio7" class="radio1" />
          <label for="radio7" class="radio2">前端超好玩</label>
          <input type="checkbox" name="radio" id="radio8" class="radio1" />
          <label for="radio8" class="radio2">前端超好玩</label>
        </div>
      </div>
      <div class="inp">
        <p class="headline">2.星辰的靓仔有哪些</p>
        <input class="ipt" />
      </div>
      <div class="text">
        <p class="headline">3.说说你对前端的看法</p>
        <textarea class="txt"></textarea>
      </div>
      <div class="upload">
        <p class="headline">4.画出范老板的肖像画并上传附件</p>
        <div class="line">
          <img src="../assets/load.png" class="load" />
          <a class="upl" href="#">上传文件</a>
          <span class="eg">支持扩展名: .jpg,.rar,.zip</span>
        </div>
        <div class="docu">
          <div class="single">
            <span class="docname">范老板牛逼.zip</span>
            <div class="loading">
              <div class="in" v-bind:style="{ width: length + '%' }"></div>
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
      <div class="sub">
        <p class="ddl">
          距离答题结束还有
          <br />
          <span class="lasttime">20d 01:12:13</span>
        </p>
        <button class="btn1">保存答卷</button>
        <span class="autosave">已自动保存</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ques',
  data () {
    return {
      length: 50
    }
  },
  methods: {
    uploadFile: function (file) {
      var item = {
        name: file.name,
        uploadPercentage: 0
      }
      this.files.push(item)
      var fd = new FormData()

      fd.append('myFile', file)
      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'upload.php', true)
      xhr.upload.addEventListener(
        'progress',
        function (e) {
          item.uploadPercentage = Math.round((e.loaded * 100) / e.total)
        },
        false
      )
      xhr.send(fd)
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 751px) {
  .ques {
    width: 70%;
    background-color: rgba(25, 25, 25, 0.8);
    margin: 0 auto;
    color: #ffffff;
    padding-bottom: 3rem;
    margin-bottom: 7rem;
  }
  .que {
    width: 90%;
    margin: 0 auto;
    padding-top: 1.6rem;
    color: #bfbfbf;
  }
  .headline {
    margin: 1rem auto 0.5rem auto;
  }

  .radio {
    margin: 0 auto;
  }
  .rad {
    display: flex;
    justify-content: space-around;
  }
  .radio1 {
    display: none;
  }
  .radio2 {
    position: relative;
    background-color: rgba(25, 25, 25, 0.8);
    display: inline-block;
    font-size: 1rem;
    height: 2rem;
    padding: 0.5rem 1rem 0 1rem;
  }
  input:checked + label {
    background-color: #3e3e3e;
  }
  .ipt {
    background-color: inherit;
    border: 0;
    border-bottom: solid 2px #4a4a4a;
    width: 50%;
    line-height: 2rem;
    color: #ffffff;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .txt {
    background-color: inherit;
    color: #ffffff;
    border: solid 2px #4a4a4a;
    width: 80%;
    height: 5rem;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .load {
    margin-left: 1rem;
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
  }
  .loading {
    height: 7px;
    background-color: #919191;
    width: 35%;
    margin: 0 0;
    border-radius: 3.5px;
  }
  .docu {
    width: 50%;
    border: solid 2px #4a4a4a;
    margin: 1rem auto 1rem 1rem;
  }
  .single {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0.5rem auto;
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
  .ques {
    width: 96%;
    background-color: rgba(25, 25, 25, 0.8);
    margin: 0 auto;
    color: #ffffff;
    padding-bottom: 3rem;
  }
  .que {
    width: 90%;
    height: inherit;
    margin: 0 auto;
    padding-top: 1.6rem;
    color: #bfbfbf;
    padding-bottom: 1rem;
  }
  .headline {
    margin: 1rem auto 0.5rem auto;
  }

  .radio {
    margin: 0 auto;
  }
  .rad {
    display: flex;
    justify-content: space-around;
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
    height: 2rem;
    padding: 0.5rem 1rem 0 1rem;
    margin-bottom: 10px;
  }
  input:checked + label {
    background-color: #3e3e3e;
  }
  .ipt {
    background-color: inherit;
    border: 0;
    border-bottom: solid 2px #4a4a4a;
    width: 100%;
    line-height: 2rem;
    color: #ffffff;
    font-size: 1rem;
    margin: 0 auto;
  }
  .txt {
    background-color: inherit;
    color: #ffffff;
    border: solid 2px #4a4a4a;
    width: 100%;
    height: 5rem;
    font-size: 1rem;
    margin: 0 auto;
  }
  .load {
    margin-left: 1rem;
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
  }
  .loading {
    height: 7px;
    background-color: #919191;
    width: 35%;
    margin: 0 0;
    border-radius: 3.5px;
  }
  .docu {
    width: 100%;
    border: solid 2px #4a4a4a;
    margin: 1rem auto 1rem 0;
  }
  .single {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0.5rem auto;
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
