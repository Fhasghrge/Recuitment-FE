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
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: 'IOS组',
      introduce: '这里是IOS组的介绍'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 4
        }
      })
    }
  }
}
</script>
