<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <a href=""
       class='begin'
       v-if='flag'
       @click.prevent="toAnswer">开始答题</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ddlStr: '2019/08/01',
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '运维组',
      introduce: '这里是运维组的介绍'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 7
        }
      })
    },
    changeFlag () {
      if (new Date() - new Date(this.ddlStr) > 0) {
        this.flag = true
      } else {
        this.flag = false
      }
    }
  },
  mounted () {
    this.changeFlag()
  }
}
</script>
