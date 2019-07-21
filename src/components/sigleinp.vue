<template>
  <div class="inp">
    <p class="headline">{{title}}</p>
    <input class="ipt"
           v-model="singleinp"
           @blur="sendinp" />
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
    sendinp: function () {
      this.$axios({
        method: 'post',
        url: '/user/exam/answer',
        data: {
          ID: this.ID,
          answer: this.singleinp
        }
      })
    }
<<<<<<< HEAD
=======
  },
  mounted () {
    if (this.answer !== '') {
      this.singleinp = this.answer
    }
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
  }
}
</script>

<style>
</style>
