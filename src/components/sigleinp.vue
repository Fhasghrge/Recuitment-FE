<template>
  <div class="inp">
    <p class="headline">{{title}}</p>
    <input class="ipt"
           v-model="singleinp"
           @blur="sendinp" />
    <div class="ctrlBox"
         v-if="$route.path == '/adminindex/ctrlques'">
      <p>出题人：RIO</p>
      <input type="button"
             value="添加">
      <select name="frontOrBack"
              id="frontOrBack">
        <option value="于此题后">于此题后</option>
        <option value="于此题前">于此题前</option>
      </select>
      <input type="button"
             value="删除">
      <input type="button"
             value="修改">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      singleinp: ''
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
    sendinp: function () {
      if (this.$route.path === '/answer') {
        this.$axios({
          method: 'post',
          url: '/user/exam/answer',
          data: {
            ID: this.ID,
            answer: this.singleinp
          }
        })
      }
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
</style>
