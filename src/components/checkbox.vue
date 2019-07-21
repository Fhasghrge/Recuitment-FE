<template>
  <div class="che">
    <p class="headline">{{title}}</p>
    <div class="rad">
      <div v-for="(opt,indexc) in options"
           :key="indexc"
           class="optall">
        <input type="checkbox"
               name="radio"
               class="radio1"
               :id="che(indexc)"
               :value="options[indexc]"
               v-model="chedata"
               @change="sendche" />
        <label :for="che(indexc)"
               class="radio2">{{options[indexc]}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chedata: []
    }
  },
  props: {
    options: {
      type: Array,
      default: () => ['帅', '我就是栓', '好帅', '帅爆了']
    },
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
    che: function (index) {
      return 'che' + index
    },
    sendche: function (value) {
      this.$axios({
        method: 'post',
        url: '/user/exam/answer',
        data: {
          ID: this.ID,
          answer: this.chedata
        }
      })
    }
  },
  mounted () {
    if (this.answer !== '') {
      this.chedata = this.answer
    }
  }
}
</script>

<style>
</style>
