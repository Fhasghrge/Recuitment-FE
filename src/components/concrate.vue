<template>
  <div class="wrapper2">
    <div class="mainshow2">
      <div class="btnbar"><button class="return2"
                @click="goback">返回</button><button class="download2"
                @click="download">下载附件</button></div>
      <div class="table2">
        <table>
          <tr>
            <th class="name"
                :class="{colorwhite:colorindex ==1}"
                @click="colorchange(1);usersort('name')">姓名</th>
            <th class="schnum"
                :class="{colorwhite:colorindex ==2}"
                @click="colorchange(2);usersort('stunum')">学号</th>
            <th class="timeup"
                :class="{colorwhite:colorindex ==3}"
                @click="colorchange(3);usersort('time')">最近提交时间</th>
            <th class="score"
                :class="{colorwhite:colorindex ==4}"
                @click="colorchange(4);usersort('score')">分数</th>
            <th class="peo"
                :class="{colorwhite:colorindex ==5}"
                @click="colorchange(5);usersort('judger')">阅卷人</th>
            <th class="opera">操作</th>
          </tr>
          <tr v-for="(item,index) in userconcrate"
              :key="index">
            <td>{{item.name}}</td>
            <td>{{item.stunum}}</td>
            <td>{{item.time}}</td>
            <td>{{item.score}}</td>
            <td>
              <span v-for="(peo) in item.judger"
                    :key="peo"
                    class="judger">{{peo}}</span>
            </td>
            <td><button v-if="item.lock"
                      @click="gomark(item.stunum,item.name,item.judger)">阅卷</button></td>
          </tr>

        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var congroup = Number(this.$route.query.groups)
    return {
      userconcrate: [],
      congroup,
      colorindex: 0,
      sortflag: 0,
      sortsyb: ''
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    getsta () {
      this.$axios({
        method: 'post',
        url: '/control/exam/status',
        data: {
          groups: this.congroup
        }
      }).then((res) => {
        if (res.data.code === 0) {
          this.userconcrate = res.data.data
        }
      })
    },
    colorchange (index) {
      this.colorindex = index
    },
    usersort (pro) {
      if (this.sortflag === 0 || this.sortsyb !== pro) {
        this.sortsyb = pro
        if (pro === 'stunum' || pro === 'score') {
          this.userconcrate.sort(
            this.sortrule1(pro))
          this.sortflag = 1
        } else {
          this.userconcrate.sort(
            this.sortrule2(pro)
          )
          this.sortflag = 1
        }
      } else if (this.sortsyb === pro) {
        this.userconcrate.reverse()
        this.sortflag = 0
      }
    },
    sortrule1 (pro) {
      return function (a, b) {
        return a[pro] - b[pro]
      }
    },
    sortrule2 (pro) {
      return function (a, b) {
        if (a[pro] < b[pro]) { return -1 }
        if (a[pro] > b[pro]) { return 1 }
        return 0
      }
    },
    gomark (unum, uname, marker) {
      this.$router.push({ path: '/marking', query: { stunum: unum, username: uname, judger: marker } })
    },
    download () {
      this.$axios({
        method: 'get',
        url: '/control/file/download',
        params: {
          groups: this.congroup
        }
      })
    }
  },
  mounted () {
    this.getsta()
  }
}
</script>

<style scoped>
.colorwhite {
  color: #ffffff;
}
@media (min-width: 751px) {
  .wrapper2 {
    width: calc(100vw - 335px);
    min-height: calc(100vh - 140px);
    margin: 20px 55px 0 295px;
    display: flex;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .mainshow2 {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 100px;
  }
  .btnbar {
    margin: 42px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .return2 {
    width: 79px;
    height: 36px;
    background-color: inherit;
    border: solid 2px #ffffff;
    color: #ffffff;
    font-size: 1rem;
  }
  .download2 {
    width: 120px;
    height: 48px;
    border: solid 2px #ffffff;
    background-color: inherit;
    color: #ffffff;
    font-size: 1rem;
  }
  .judger {
    margin: 0.5rem 0;
  }
  .table2 {
    margin: 0 auto;
    overflow: scroll;
  }
  table {
    margin: 0 auto;
  }
  th {
    background-color: #8b8b8b;
    box-shadow: inset 0px 1px 3px 0px rgba(66, 60, 60, 0.5);
    border: solid 1px #000000;
    height: 64px;
    padding: 0 45px;
    text-align: center;
    font-weight: 400;
  }
  th:hover {
    cursor: pointer;
  }
  td {
    height: 65px;
    background-color: #d8d8d8;
    text-align: center;
  }
  td > button {
    border-radius: 12.5px;
    border: solid 1px #979797;
    width: 64px;
    height: 33px;
  }
}
</style>
