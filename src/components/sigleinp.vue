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
  }
}
</script>

<style>
</style>
