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
               :value="options[indexr]"
               v-model="radiodata"
               @change="sendradio" />
        <label :for="radio(indexr)"
               class="radio2">{{options[indexr]}}</label>
      </div>
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
<<<<<<< HEAD
=======
    },
    answer: {
      type: String,
      default: '就是这么帅'
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
    }
  },
  methods: {
    radio: function (index) {
      return 'radio' + index
    },
    sendradio: function (value) {
      this.$axios({
        method: 'post',
        url: '/user/exam/answer',
        data: {
          ID: this.ID,
          answer: this.radiodata
        }
      })
    }
<<<<<<< HEAD
=======
  },
  mounted () {
    if (this.answer !== '') {
      this.radiodata = this.answer
    }
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
  }
}
</script>

<style>
.radio {
  margin: 0 auto;
}
</style>
