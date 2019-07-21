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
<<<<<<< HEAD
  }
}

=======
  },
  mounted () {
    if (this.answer !== '') {
      this.shortanswer = this.answer
    }
  }
}
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
</script>

<style>
@media only screen and (min-width: 751px) {
}
@media only screen and (max-width: 750px) {
}
</style>
