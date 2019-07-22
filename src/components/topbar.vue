<template>
  <div class="topbar">
    <span class="leftpart">{{title}}</span>
    <user></user>
  </div>
</template>
<script>
import user from './user'
export default {
  data () {
    return {
      title: '首页'
    }
  },
  components: {
    user
  },
  methods: {
    showTitle () {
      let group = this.$route.query.groups
      switch (group) {
        case '1': this.title = '产品'; break
        case '2': this.title = '设计'; break
        case '3': this.title = '安卓'; break
        case '4': this.title = 'IOS'; break
        case '5': this.title = '前端'; break
        case '6': this.title = '后台'; break
        case '7': this.title = 'DevOps'; break
      }
    }
  },
  watch: {
    '$route.fullPath': function (newVal) {
      this.showTitle()
    }
  }
}
</script>

<style>
@media (min-width: 751px) {
  .topbar {
    background-color: rgba(0, 0, 0, 0.3);
    height: 120px;
    width: calc(100vw - 265px);
    margin-left: 265px;
    padding: 54px 40px 24px 40px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
}
</style>
