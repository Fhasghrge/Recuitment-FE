<template>
  <div class="radio">
    <p class="headline">{{title}}</p>
    <div class="rad">
      <div v-for="(opt,indexr) in options"
           :key="indexr"
           class="optall">
        <input type="radio"
               name="radio"
               class="radio1"
               :id="radio(indexr)"
               :value="options[indexr]" />
        <label :for="radio(indexr)"
               class="radio2">{{options[indexr]}}</label>
      </div>
    </div>
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
      radiodata: ''
    }
  },
  props: {
    options: {
      type: Array,
      default: () => ['帅', '我就是帅帅帅帅', '好帅', '帅爆了']
    },
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
    radio: function (index) {
      return 'radio' + index
    },
    sendradio: function (value) {
      if (this.$route.path === '/answer') {
        this.$axios({
          method: 'post',
          url: '/user/exam/answer',
          data: {
            ID: this.ID,
            answer: this.radiodata
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.radio {
  margin: 0 auto;
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
</style>
