<template>
  <div class="wrapper1">
    <div class="mainshow">
      <h2 class="headline1">公告</h2>
      <p class="content">"AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。"</p>
      <div class="btn2">
        <button class="show1"
                @click="toconcrate"
<<<<<<< HEAD
                v-if="showFlag">查看答题情况</button><button class="show1"
                @click="toCtrlQues">管理{{ groupName }}题库</button></div>
=======
                v-if="showFlag">查看答题情况</button>
        <button class="show1"
                @click="toCtrlQues">{{btntitle}}</button>
      </div>
>>>>>>> 9f743a4a8bde1be9f99d11d19aff058b2d64be75
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      groupName: '',
      groups: Number(this.$route.query.groups),
      showFlag: false,
      btntitle: '管理通用题库'
    }
  },
  methods: {
    toCtrlQues () {
      console.log(this.groups)
      this.$router.push({
        path: '/adminindex/ctrlques',
        query: {
          groups: parseInt(this.groups)
        }
      })
    },
    toconcrate () {
      this.$router.push({
        path: '/adminindex/concrate',
        query: {
          groups: parseInt(this.groups)
        }
      })
    }
  },
  created () {
    if (this.groups) {
      this.showFlag = true
      this.btntitle = '管理该方向题库'
    }
  },
  mounted () {
    switch (this.groups) {
      case 1: this.groupName = '产品'; break
      case 2: this.groupName = '设计'; break
      case 3: this.groupName = '安卓'; break
      case 4: this.groupName = 'IOS'; break
      case 5: this.groupName = '前端'; break
      case 6: this.groupName = '后台'; break
      case 7: this.groupName = 'DevOps'; break
      default: this.groupName = '公共'; break
    }
  }
}
</script>

<style >
@media (min-width: 751px) {
  .wrapper1 {
    width: calc(100vw - 335px);
    height: calc(100vh - 140px);
    margin: 20px 55px 0 295px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .headline1 {
    color: #e9e9e9;
    margin-left: 30px;
    font-family: PingFangSC-Regular;
    font-weight: 100;
  }
  .mainshow {
    width: 100%;
  }
  .content {
    height: 170px;
    color: #e9e9e9;
    font-family: PingFangSC-Regular;
    margin: 0 30px;
    font-size: 1.3rem;
  }
  .btn2 {
    width: 400px;
    margin: 0 auto;
  }
  .show1 {
    border: solid 3px #ffffff;
    opacity: 0.8;
    width: 400px;
    height: 64px;
    color: #e9e9e9;
    background-color: inherit;
    font-size: 1.3rem;
    margin: 15px auto;
  }
  .show1:hover {
    cursor: pointer;
  }
}
</style>
