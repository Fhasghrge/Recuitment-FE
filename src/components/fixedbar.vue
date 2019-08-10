<template>
  <div class="sub">
    <p class="ddl">
      距离答题结束还有
      <br />
      <span class="lasttime">{{date}}</span>
    </p>
    <div class="btnwrap"><button class="btn1"
              @click="save">提交答卷</button></div>
    <span class="autosave"
          v-if="saveflag">答卷已提交</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saveflag: false,
      date: '',
      ddlStr: '2019/09/01'
    }
  },
  methods: {
    save: function () {
      let confirmbtn = confirm('确认提交吗？提交后无法再次修改')
      if (confirmbtn === true) {
        this.saveflag = true
        alert('答卷已提交')
      }
    },
    Djs_time () { // 拼接出日期
      setInterval(() => {
        var ddl = new Date(this.ddlStr)
        var presentTime = new Date()
        var rightTime = ddl - presentTime
        var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24)
        var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24)
        var mm = Math.floor((rightTime / 1000 / 60) % 60)
        var ss = Math.floor((rightTime / 1000) % 60)
        this.date = dd + 'd ' + hh + ':' + mm + ':' + ss
      }, 1000)
    }
  },
  mounted () {
    this.Djs_time()
  }
}
</script>

<style scoped>
@media only screen and (min-width: 751px) {
  .sub {
    position: fixed;
    right: 0;
    top: 27vh;
    color: #ffffff;
    text-align: center;
    background-color: rgba(22, 22, 22, 0.91);
    height: 37%;
    width: 13%;
    z-index: 1;
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
  .sub {
    text-align: center;
  }
  .ddl {
    display: none;
  }
  .autosave {
    display: none;
  }
  .btnwrap {
    background-color: rgba(22, 22, 22, 0.91);
    padding-bottom: 3rem;
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
