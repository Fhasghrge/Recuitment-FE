<template>
  <div class="scorebar">
    <h2 class="scohead">打分板</h2>
    <div class="eachsocre">
      <ol class="allopo">
        <li v-for="(item,index) in que "
            :key="index">
          <span>分数:</span>
          <input v-model="score"
                 @blur="sub(item.ID)">
          <span>5分</span>
          <span>阅卷人:</span>
          <span>{{judger}}</span></li>
      </ol>
    </div>
    <div class="marksub">
      <span class="errormes">{{mes}}</span>
      <button class="savemark">保存阅卷</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: 0,
      mes: ''
    }
  },
  props: {
    judger: {
      type: String,
      default: ''
    },
    que: {
      type: Array,
      default: () => []
    },
    username: {
      type: String,
      default: ''
    }
  },
  methods: {
    sub: function (ID) {
      this.$axios({
        method: 'post',
        url: '/control/exam/mark',
        data: {
          username: this.username,
          questionID: ID,
          score: this.score
        }
      })
    }
  }
}
</script>

<style>
.scorebar {
  position: fixed;
  right: 15px;
  top: 180px;
  background-color: #000000;
  color: #ffffff;
}
.scohead {
  font-weight: 400;
  font-size: 1.3rem;
  margin: 11px auto 16px 18px;
}
.eachopo {
  margin: 9px auto;
  margin-right: 20px;
}
.eachopo > input {
  width: 60px;
  background-color: inherit;
  border: solid 2px #ffffff;
  height: 25px;
  color: #ffffff;
  font-size: 1.1rem;
}
.eachopo span {
  margin: 0 5px;
}
.marksub {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
}
.errormes {
  font-family: PingFangSC-Semibold;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #ff0000;
}
.savemark {
  background-color: #10619a;
  border-radius: 3px;
  color: #ffffff;
  height: 27px;
  width: 84px;
}
</style>
