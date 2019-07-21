<<<<<<< HEAD
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
      Header: '产品组',
      introduce: '这里是产品组的介绍'
    }
  },
  methods: {
    toAnswer () {
      this.$router.push({
        path: '/answer',
        query: {
          groups: 1
        }
      })
    }
  }
}
</script>
=======
<template>
  <div id='text'>
    <h1 class='welcome-header'>{{Header}}</h1>
    <p class='introduce'>{{ introduce }}</p>
    <a href=""
       class='begin'
       v-if='flag'>开始答题</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: false, // flag控制开始答题按钮，true为显示，false为隐藏
      Header: '产品组',
      introduce: '这里是产品组的介绍'
    }
  }
}
</script>
>>>>>>> 5ffd646662298258aa5f8f1f77996d52071e2a26
