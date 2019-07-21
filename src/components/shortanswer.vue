<template>
  <div class="text">
    <p class="headline">{{title}}</p>
    <textarea class="txt"
              v-model="shortanswer"
              @blur="sendshoans"></textarea>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shortanswer: ''
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
    sendshoans: function () {
      this.$axios({
        method: 'post',
        url: '/user/exam/answer',
        data: {
          ID: this.ID,
          answer: this.shortanswer
        }
      })
    }
  },
  mounted () {
    if (this.answer !== '') {
      this.shortanswer = this.answer
    }
  }
}
</script>

<style>
@media only screen and (min-width: 751px) {
}
@media only screen and (max-width: 750px) {
}
</style>
